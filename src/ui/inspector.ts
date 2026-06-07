import { evaluateBezier } from '../core/fit/hermite';
import { slatPathData } from '../core/svg';
import type { FittedPath } from '../core/types';
import { formatForDisplay } from '../core/units';

export interface DepthRange {
  min: number;
  max: number;
}

export interface MeasurementFormatOptions {
  decimals?: number;
  includeUnit?: boolean;
  trimTrailingZeros?: boolean;
}

export function inspectorPathData(path: FittedPath): string {
  return slatPathData(path);
}

export function fittedPathDepthRange(path: FittedPath, samplesPerSegment = 16): DepthRange {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (const segment of path.segments) {
    for (let step = 0; step <= samplesPerSegment; step += 1) {
      const point = evaluateBezier(segment, step / samplesPerSegment);

      min = Math.min(min, point.z);
      max = Math.max(max, point.z);
    }
  }

  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return { min: 0, max: 0 };
  }

  return { min, max };
}

export function makeTicks(max: number, divisions: number): number[] {
  if (!Number.isFinite(max) || max <= 0 || divisions <= 0) {
    return [0];
  }

  return Array.from({ length: divisions + 1 }, (_, index) => (max * index) / divisions);
}

export function formatMeasurement(
  value: number,
  unit: 'mm' | 'inch',
  options: MeasurementFormatOptions = {},
): string {
  const label = formatForDisplay(value, unit, {
    decimals: options.decimals,
    trimTrailingZeros: options.trimTrailingZeros,
  });

  if (options.includeUnit === false) {
    return label;
  }

  return `${label} ${unit === 'mm' ? 'mm' : 'in'}`;
}
