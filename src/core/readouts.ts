import type { Design } from './types';
import { computeSlatLayout } from './geometry';

export interface ReadoutValues {
  finCount: number;
  spannedWidth: number;
  endMargin: number;
  stockThickness: number;
  declaredDepthRange: {
    min: number;
    max: number;
  };
  totalFootprint: {
    width: number;
    height: number;
    depth: number;
  };
}

export function computeReadouts(design: Design): ReadoutValues {
  const layout = computeSlatLayout(design);

  return {
    finCount: layout.finCount,
    spannedWidth: layout.spannedWidth,
    endMargin: layout.endMargin,
    stockThickness: design.slatWidth,
    declaredDepthRange: {
      min: design.pMin,
      max: design.D,
    },
    totalFootprint: {
      width: design.W,
      height: design.H,
      depth: design.D,
    },
  };
}
