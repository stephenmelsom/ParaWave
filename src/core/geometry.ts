import type { Design } from './types';
import { createWaveField } from './wave/field';
import type { WaveField } from './wave/types';

export interface SlatLayout {
  finCount: number;
  spannedWidth: number;
  endMargin: number;
  centerlines: number[];
}

export function computeFinCount(design: Pick<Design, 'W' | 'slatWidth' | 'gap'>): number {
  const denominator = design.slatWidth + design.gap;

  if (!Number.isFinite(denominator) || denominator <= 0) {
    return 0;
  }

  const count = Math.floor((design.W + design.gap) / denominator);

  return Number.isFinite(count) && count > 0 ? count : 0;
}

export function computeSpannedWidth(
  finCount: number,
  slatWidth: number,
  gap: number,
): number {
  if (finCount <= 0) {
    return 0;
  }

  return finCount * slatWidth + (finCount - 1) * gap;
}

export function computeSlatLayout(design: Pick<Design, 'W' | 'slatWidth' | 'gap'>): SlatLayout {
  const finCount = computeFinCount(design);
  const spannedWidth = computeSpannedWidth(finCount, design.slatWidth, design.gap);
  const endMargin = (design.W - spannedWidth) / 2;
  const centerlines = Array.from({ length: finCount }, (_, index) => {
    return endMargin + design.slatWidth / 2 + index * (design.slatWidth + design.gap);
  });

  return {
    finCount,
    spannedWidth,
    endMargin,
    centerlines,
  };
}

export function protrusionFromWaveValue(
  design: Pick<Design, 'D' | 'pMin'>,
  waveValue: number,
): number {
  return design.pMin + ((design.D - design.pMin) * (waveValue + 1)) / 2;
}

export function protrusionAt(
  design: Design,
  x: number,
  y: number,
  field: WaveField = createWaveField(design.wave),
): number {
  return protrusionFromWaveValue(design, field.f(x, y));
}

