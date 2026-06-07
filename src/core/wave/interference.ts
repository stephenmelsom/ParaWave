import type { Source } from '../types';
import { createDiagonalField } from './diagonal';
import { createRadialField } from './radial';
import type { WaveField } from './types';

export function sourceWeightTotal(sources: readonly Source[]): number {
  return sources.reduce((total, source) => total + Math.abs(source.weight), 0);
}

export function createFieldForSource(source: Source): WaveField {
  return source.type === 'diagonal' ? createDiagonalField(source) : createRadialField(source);
}

export function createInterferenceField(sources: readonly Source[]): WaveField {
  const weightedFields = sources.map((source) => ({
    weight: source.weight,
    field: createFieldForSource(source),
  }));
  const denominator = sourceWeightTotal(sources);

  if (denominator === 0) {
    return {
      f: () => 0,
      dfdy: () => 0,
    };
  }

  return {
    f: (x, y) =>
      weightedFields.reduce((sum, source) => sum + source.weight * source.field.f(x, y), 0) /
      denominator,
    dfdy: (x, y) =>
      weightedFields.reduce(
        (sum, source) => sum + source.weight * source.field.dfdy(x, y),
        0,
      ) / denominator,
  };
}
