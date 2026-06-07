import { computeSlatLayout, protrusionAt } from '../geometry';
import type {
  Design,
  FittedPath,
  RadialSource,
  RadialWaveConfig,
  Source,
  WaveConfig,
} from '../types';
import { createWaveField } from '../wave/field';
import { sourceWeightTotal } from '../wave/interference';
import { evaluateDiagonalDfdy } from '../wave/diagonal';
import { evaluateRadialDfdy } from '../wave/radial';
import type { WaveField } from '../wave/types';
import { evaluateBezier, hermiteCubic } from './hermite';

export const SEED_PER_WAVELENGTH = 8;
export const MAX_DEPTH = 10;
export const MAX_SEED_INTERVALS = 50_000;

const BOUNDARY_EPSILON = 1e-9;
const ERROR_SAMPLE_T_VALUES = [0.25, 0.5, 0.75] as const;
const DEPTH_SAMPLE_T_VALUES = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9] as const;

type Direction = -1 | 1;

export interface FittedGeometry {
  paths: FittedPath[];
  observedDepth: {
    min: number;
    max: number;
  };
  totalSegments: number;
}

function isPositiveFinite(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

function sourceWavelength(source: Source): number {
  return source.lambda;
}

export function minimumWavelength(config: WaveConfig): number {
  switch (config.kind) {
    case 'diagonal':
    case 'radial':
      return config.lambda;
    case 'interference': {
      const wavelengths = config.sources.map(sourceWavelength).filter(isPositiveFinite);

      if (wavelengths.length === 0) {
        return Number.NaN;
      }

      return Math.min(...wavelengths);
    }
  }
}

function sourceDfdy(source: Source, x: number, y: number, side?: Direction): number {
  if (source.type === 'diagonal') {
    return evaluateDiagonalDfdy(source, x, y);
  }

  return radialDfdyWithSide(source, x, y, side);
}

function radialDfdyWithSide(
  config: RadialWaveConfig | RadialSource,
  x: number,
  y: number,
  side?: Direction,
): number {
  if (x === config.cx && y === config.cy && side !== undefined) {
    return evaluateRadialDfdy(config, x, y, side);
  }

  return evaluateRadialDfdy(config, x, y);
}

function waveDfdyWithSide(config: WaveConfig, x: number, y: number, side?: Direction): number {
  switch (config.kind) {
    case 'diagonal':
      return evaluateDiagonalDfdy(config, x, y);
    case 'radial':
      return radialDfdyWithSide(config, x, y, side);
    case 'interference': {
      const denominator = sourceWeightTotal(config.sources);

      if (denominator === 0) {
        return 0;
      }

      return (
        config.sources.reduce((sum, source) => {
          return sum + source.weight * sourceDfdy(source, x, y, side);
        }, 0) / denominator
      );
    }
  }
}

function collectRadialKinksForSource(source: Source, x: number, height: number): number[] {
  if (source.type !== 'radial') {
    return [];
  }

  return collectRadialKinksForRadial(source, x, height);
}

function collectRadialKinksForRadial(
  config: RadialWaveConfig | RadialSource,
  x: number,
  height: number,
): number[] {
  if (x !== config.cx || config.cy < 0 || config.cy > height) {
    return [];
  }

  return [config.cy];
}

export function collectRadialKinks(config: WaveConfig, x: number, height: number): number[] {
  switch (config.kind) {
    case 'diagonal':
      return [];
    case 'radial':
      return collectRadialKinksForRadial(config, x, height);
    case 'interference':
      return config.sources.flatMap((source) => collectRadialKinksForSource(source, x, height));
  }
}

function uniqueSortedBoundaries(boundaries: number[]): number[] {
  const sorted = boundaries
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b);
  const unique: number[] = [];

  for (const boundary of sorted) {
    const previous = unique.at(-1);

    if (previous === undefined || Math.abs(boundary - previous) > BOUNDARY_EPSILON) {
      unique.push(boundary);
    }
  }

  return unique;
}

export function seedBoundaries(design: Design, xCenter: number): number[] {
  if (!Number.isFinite(design.H) || design.H <= 0) {
    return [];
  }

  const lambdaMin = minimumWavelength(design.wave);
  const boundaries = [0, design.H, ...collectRadialKinks(design.wave, xCenter, design.H)];

  if (isPositiveFinite(lambdaMin)) {
    const targetStep = lambdaMin / SEED_PER_WAVELENGTH;
    const seedIntervals = Math.min(
      MAX_SEED_INTERVALS,
      Math.max(1, Math.ceil(design.H / targetStep)),
    );
    const seedStep = design.H / seedIntervals;

    for (let index = 1; index < seedIntervals; index += 1) {
      boundaries.push(index * seedStep);
    }
  }

  return uniqueSortedBoundaries(boundaries);
}

function depthSlope(
  design: Design,
  x: number,
  y: number,
  side?: Direction,
): number {
  return ((design.D - design.pMin) / 2) * waveDfdyWithSide(design.wave, x, y, side);
}

function fitInterval(
  design: Design,
  field: WaveField,
  xCenter: number,
  y0: number,
  y1: number,
  depth: number,
  emit: (segment: FittedPath['segments'][number]) => void,
): void {
  const segment = hermiteCubic({
    start: {
      y: y0,
      z: protrusionAt(design, xCenter, y0, field),
      dzdy: depthSlope(design, xCenter, y0, 1),
    },
    end: {
      y: y1,
      z: protrusionAt(design, xCenter, y1, field),
      dzdy: depthSlope(design, xCenter, y1, -1),
    },
  });
  const maxError = ERROR_SAMPLE_T_VALUES.reduce((error, t) => {
    const y = y0 + (y1 - y0) * t;
    const curve = evaluateBezier(segment, t);
    const trueZ = protrusionAt(design, xCenter, y, field);

    return Math.max(error, Math.abs(curve.z - trueZ));
  }, 0);

  if (maxError <= design.fitTolerance || depth >= MAX_DEPTH) {
    emit(segment);
    return;
  }

  const midpoint = (y0 + y1) / 2;
  fitInterval(design, field, xCenter, y0, midpoint, depth + 1, emit);
  fitInterval(design, field, xCenter, midpoint, y1, depth + 1, emit);
}

export function fitPath(design: Design, xCenter: number, finIndex = 0): FittedPath {
  const field = createWaveField(design.wave);
  const boundaries = seedBoundaries(design, xCenter);
  const segments: FittedPath['segments'] = [];

  for (let index = 0; index < boundaries.length - 1; index += 1) {
    const y0 = boundaries[index];
    const y1 = boundaries[index + 1];

    if (y0 === undefined || y1 === undefined || y1 <= y0) {
      continue;
    }

    fitInterval(design, field, xCenter, y0, y1, 0, (segment) => {
      segments.push(segment);
    });
  }

  return {
    finIndex,
    xCenter,
    segments,
  };
}

function observeDepth(path: FittedPath): { min: number; max: number } {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (const segment of path.segments) {
    for (const t of DEPTH_SAMPLE_T_VALUES) {
      const point = evaluateBezier(segment, t);
      min = Math.min(min, point.z);
      max = Math.max(max, point.z);
    }

    min = Math.min(min, segment.p0.z, segment.p3.z);
    max = Math.max(max, segment.p0.z, segment.p3.z);
  }

  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return { min: 0, max: 0 };
  }

  return { min, max };
}

export function fitAllPaths(design: Design): FittedGeometry {
  const layout = computeSlatLayout(design);
  const paths = layout.centerlines.map((xCenter, index) => fitPath(design, xCenter, index));
  let observedDepth = {
    min: Number.POSITIVE_INFINITY,
    max: Number.NEGATIVE_INFINITY,
  };

  for (const path of paths) {
    const pathDepth = observeDepth(path);
    observedDepth = {
      min: Math.min(observedDepth.min, pathDepth.min),
      max: Math.max(observedDepth.max, pathDepth.max),
    };
  }

  if (!Number.isFinite(observedDepth.min) || !Number.isFinite(observedDepth.max)) {
    observedDepth = { min: 0, max: 0 };
  }

  return {
    paths,
    observedDepth,
    totalSegments: paths.reduce((total, path) => total + path.segments.length, 0),
  };
}
