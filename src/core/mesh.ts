import type { CurvePoint, Design, FittedPath, MeshBuffers } from './types';
import { evaluateBezier } from './fit/hermite';

export interface MeshBuildOptions {
  samplesPerSegment?: number;
}

type Vec3 = [number, number, number];

const DEFAULT_SAMPLES_PER_SEGMENT = 8;

function subtract(a: Vec3, b: Vec3): Vec3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function normalize(vector: Vec3): Vec3 {
  const length = Math.hypot(vector[0], vector[1], vector[2]);

  if (length === 0) {
    return [0, 1, 0];
  }

  return [vector[0] / length, vector[1] / length, vector[2] / length];
}

export function tessellateFrontPath(
  path: FittedPath,
  samplesPerSegment = DEFAULT_SAMPLES_PER_SEGMENT,
): CurvePoint[] {
  const samples: CurvePoint[] = [];

  for (const segment of path.segments) {
    if (samples.length === 0) {
      samples.push(segment.p0);
    }

    for (let step = 1; step <= samplesPerSegment; step += 1) {
      samples.push(evaluateBezier(segment, step / samplesPerSegment));
    }
  }

  return samples;
}

export function buildMesh(
  paths: readonly FittedPath[],
  design: Pick<Design, 'slatWidth'>,
  options: MeshBuildOptions = {},
): MeshBuffers {
  const samplesPerSegment = options.samplesPerSegment ?? DEFAULT_SAMPLES_PER_SEGMENT;
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const finRanges = new Uint32Array(paths.length * 2);

  function pushVertex(point: Vec3, normal: Vec3): void {
    positions.push(point[0], point[1], point[2]);
    normals.push(normal[0], normal[1], normal[2]);
  }

  function pushQuad(a: Vec3, b: Vec3, c: Vec3, d: Vec3): void {
    const baseIndex = positions.length / 3;
    const normal = normalize(cross(subtract(b, a), subtract(c, a)));

    pushVertex(a, normal);
    pushVertex(b, normal);
    pushVertex(c, normal);
    pushVertex(d, normal);
    indices.push(baseIndex, baseIndex + 1, baseIndex + 2, baseIndex, baseIndex + 2, baseIndex + 3);
  }

  for (const [pathIndex, path] of paths.entries()) {
    const rangeOffset = pathIndex * 2;
    const startTriangle = indices.length / 3;
    const xLeft = path.xCenter - design.slatWidth / 2;
    const xRight = path.xCenter + design.slatWidth / 2;
    const samples = tessellateFrontPath(path, samplesPerSegment);

    for (let index = 0; index < samples.length - 1; index += 1) {
      const current = samples[index];
      const next = samples[index + 1];

      if (!current || !next) {
        continue;
      }

      const backLeftCurrent: Vec3 = [xLeft, current.y, 0];
      const frontLeftCurrent: Vec3 = [xLeft, current.y, current.z];
      const backRightCurrent: Vec3 = [xRight, current.y, 0];
      const frontRightCurrent: Vec3 = [xRight, current.y, current.z];
      const backLeftNext: Vec3 = [xLeft, next.y, 0];
      const frontLeftNext: Vec3 = [xLeft, next.y, next.z];
      const backRightNext: Vec3 = [xRight, next.y, 0];
      const frontRightNext: Vec3 = [xRight, next.y, next.z];

      pushQuad(backLeftCurrent, frontLeftCurrent, frontLeftNext, backLeftNext);
      pushQuad(backRightCurrent, backRightNext, frontRightNext, frontRightCurrent);
      pushQuad(frontLeftCurrent, frontRightCurrent, frontRightNext, frontLeftNext);
      pushQuad(backRightCurrent, backLeftCurrent, backLeftNext, backRightNext);
    }

    const first = samples[0];
    const last = samples.at(-1);

    if (first && last) {
      pushQuad(
        [xLeft, first.y, 0],
        [xRight, first.y, 0],
        [xRight, first.y, first.z],
        [xLeft, first.y, first.z],
      );
      pushQuad(
        [xLeft, last.y, 0],
        [xLeft, last.y, last.z],
        [xRight, last.y, last.z],
        [xRight, last.y, 0],
      );
    }

    finRanges[rangeOffset] = startTriangle;
    finRanges[rangeOffset + 1] = indices.length / 3 - startTriangle;
  }

  return {
    positions: new Float32Array(positions),
    indices: new Uint32Array(indices),
    normals: new Float32Array(normals),
    finRanges,
  };
}
