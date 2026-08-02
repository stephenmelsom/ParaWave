import type { BezierSeg, FittedPath, NestMetrics } from '../types';
import { evaluateBezier } from '../fit/hermite';

/** Boundaries closer than this in y are treated as coincident. */
const BOUNDARY_EPSILON = 1e-9;

/** Below this the cubic's leading coefficient is treated as zero. */
const COEFFICIENT_EPSILON = 1e-12;

/**
 * Target number of intervals across the slat height.
 *
 * Only affects tightness, never correctness: the bound is a rigorous
 * over-estimate at any density because each interval's maximum is exact.
 * At this density the residual slack is well under a tenth of a millimetre for
 * realistic wavelengths — far inside any usable clearance.
 */
export const PROFILE_INTERVALS = 2048;

/**
 * A slat's front edge reduced to a piecewise-monotone description.
 *
 * `hermiteCubic` places `p1.y` and `p2.y` at exact thirds, so `y` is affine in
 * `t` and `z` is a plain cubic in `y`. Splitting each segment at its interior
 * extrema therefore yields intervals on which `f` is monotone, which makes
 * `max(zs[j], zs[j + 1])` the *exact* maximum over interval `j` — no sampling.
 */
export interface EdgeProfile {
  finIndex: number;
  /** Ascending breakpoints; `ys[0] === 0` and `ys.at(-1) === height`. */
  ys: number[];
  /** Front-edge z at each breakpoint. */
  zs: number[];
  /** Exact max of z over each interval. Length `ys.length - 1`. */
  intervalMax: number[];
  /** Exact `max over y of f(y)`. */
  width: number;
  /** Exact `integral of f dy` over [0, height]. */
  area: number;
}

export const EMPTY_NEST_METRICS: NestMetrics = {
  widths: [],
  areas: [],
  mates: [],
  height: 0,
};

/**
 * Parameters `t` in (0, 1) where the segment's z-cubic has a stationary point.
 *
 * z'(t) / 3 = (d0 - 2 d1 + d2) t^2 + 2 (d1 - d0) t + d0, with di the control
 * point differences.
 */
function interiorCriticalParameters(segment: BezierSeg): number[] {
  const d0 = segment.p1.z - segment.p0.z;
  const d1 = segment.p2.z - segment.p1.z;
  const d2 = segment.p3.z - segment.p2.z;

  const a = d0 - 2 * d1 + d2;
  const b = 2 * (d1 - d0);
  const c = d0;

  if (Math.abs(a) < COEFFICIENT_EPSILON) {
    if (Math.abs(b) < COEFFICIENT_EPSILON) {
      return [];
    }

    const t = -c / b;

    return t > 0 && t < 1 ? [t] : [];
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  const root = Math.sqrt(discriminant);
  const candidates = [(-b - root) / (2 * a), (-b + root) / (2 * a)];

  return candidates.filter((t) => t > 0 && t < 1).sort((left, right) => left - right);
}

/**
 * Reduce a fitted path to breakpoints, per-interval exact maxima, width and area.
 *
 * A path with no segments (H <= 0) yields a degenerate zero-width profile
 * rather than throwing, matching `slatPathData`'s tolerance for empty input.
 */
export function buildEdgeProfile(
  path: FittedPath,
  height: number,
  targetIntervals: number = PROFILE_INTERVALS,
): EdgeProfile {
  const ys: number[] = [];
  const zs: number[] = [];
  const intervalMax: number[] = [];
  let area = 0;

  // Uniform refinement of each monotone piece. Subdividing a monotone piece
  // leaves every sub-interval monotone, so `max(endpoints)` stays exact while
  // the sum-of-maxima bound in `matingBound` gets much tighter.
  const step =
    height > 0 && targetIntervals > 0 ? height / targetIntervals : Number.POSITIVE_INFINITY;

  const push = (y: number, z: number): void => {
    const last = ys.at(-1);

    if (last !== undefined && Math.abs(y - last) <= BOUNDARY_EPSILON) {
      // Coincident boundary: keep the larger z so the profile stays conservative,
      // and widen the interval that already ends here to match.
      const lastZ = zs.at(-1) ?? z;
      const merged = Math.max(lastZ, z);
      zs[zs.length - 1] = merged;

      if (intervalMax.length > 0) {
        const previous = intervalMax[intervalMax.length - 1] ?? merged;
        intervalMax[intervalMax.length - 1] = Math.max(previous, merged);
      }

      return;
    }

    ys.push(y);
    zs.push(z);

    if (ys.length >= 2) {
      const previousZ = zs[zs.length - 2] ?? z;
      intervalMax.push(Math.max(previousZ, z));
    }
  };

  for (const segment of path.segments) {
    const span = segment.p3.y - segment.p0.y;

    // Coincident boundaries are merged, so pushing every p0 is safe even though
    // consecutive segments share an endpoint.
    push(segment.p0.y, segment.p0.z);

    // Monotone pieces of this segment, in t. y is affine in t, so t-uniform
    // subdivision is y-uniform.
    const breaks = [0, ...interiorCriticalParameters(segment), 1];

    for (let piece = 0; piece + 1 < breaks.length; piece += 1) {
      const tStart = breaks[piece] as number;
      const tEnd = breaks[piece + 1] as number;
      const pieceLength = Math.abs(span) * (tEnd - tStart);
      const steps = Math.max(1, Math.ceil(pieceLength / step));

      for (let index = 1; index <= steps; index += 1) {
        const t = tStart + ((tEnd - tStart) * index) / steps;
        const point = evaluateBezier(segment, t);
        push(point.y, point.z);
      }
    }

    push(segment.p3.y, segment.p3.z);

    // y is affine in t, so the integral of z dy over the segment is the
    // Bernstein integral: each basis function integrates to 1/4.
    area +=
      ((segment.p3.y - segment.p0.y) *
        (segment.p0.z + segment.p1.z + segment.p2.z + segment.p3.z)) /
      4;
  }

  if (ys.length === 0) {
    return {
      finIndex: path.finIndex,
      ys: [0, Math.max(0, height)],
      zs: [0, 0],
      intervalMax: [0],
      width: 0,
      area: 0,
    };
  }

  return {
    finIndex: path.finIndex,
    ys,
    zs,
    intervalMax,
    width: zs.reduce((max, z) => Math.max(max, z), 0),
    area: Math.abs(area),
  };
}

/**
 * Conservative upper bound on `max over y of (a(y) + b(height - y))`.
 *
 * This is the pitch needed when a 0° part is followed by a 180° part, so their
 * wavy front edges face each other. Mirroring b's partition and merging the two
 * gives a common refinement of [0, height]; the max of a sum is bounded by the
 * sum of maxima over any refinement, so the result can never under-estimate and
 * the parts can never overlap. Residual slack is small (intervals are short)
 * and is absorbed by the caller's clearance.
 */
export function matingBound(a: EdgeProfile, b: EdgeProfile, height: number): number {
  if (a.intervalMax.length === 0 || b.intervalMax.length === 0) {
    return a.width + b.width;
  }

  // b mirrored about height: interval j of b covers [height - ys[j+1], height - ys[j]].
  const mirroredCount = b.intervalMax.length;
  const mirroredStart = (index: number): number => height - (b.ys[mirroredCount - index] ?? 0);
  const mirroredEnd = (index: number): number => height - (b.ys[mirroredCount - index - 1] ?? 0);
  const mirroredMax = (index: number): number => b.intervalMax[mirroredCount - index - 1] ?? 0;

  let bound = 0;
  let i = 0;
  let j = 0;

  while (i < a.intervalMax.length && j < mirroredCount) {
    const aStart = a.ys[i] ?? 0;
    const aEnd = a.ys[i + 1] ?? 0;
    const bStart = mirroredStart(j);
    const bEnd = mirroredEnd(j);

    const overlapStart = Math.max(aStart, bStart);
    const overlapEnd = Math.min(aEnd, bEnd);

    if (overlapEnd > overlapStart - BOUNDARY_EPSILON) {
      bound = Math.max(bound, (a.intervalMax[i] ?? 0) + mirroredMax(j));
    }

    if (aEnd <= bEnd) {
      i += 1;
    } else {
      j += 1;
    }
  }

  // Defensive: if the partitions failed to overlap at all, fall back to the
  // always-valid separate-bounding-boxes pitch.
  return bound > 0 ? bound : a.width + b.width;
}

/** Reduce every fitted path to the `3N - 1` numbers the packer needs. */
export function computeNestMetrics(
  paths: readonly FittedPath[],
  height: number,
): NestMetrics {
  const profiles = paths.map((path) => buildEdgeProfile(path, height));
  const mates: number[] = [];

  for (let index = 0; index + 1 < profiles.length; index += 1) {
    const current = profiles[index];
    const next = profiles[index + 1];

    mates.push(current && next ? matingBound(current, next, height) : 0);
  }

  return {
    widths: profiles.map((profile) => profile.width),
    areas: profiles.map((profile) => profile.area),
    mates,
    height,
  };
}
