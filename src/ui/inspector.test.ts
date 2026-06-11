import { describe, expect, it } from 'vitest';

import { fitPath, slatPathData } from '../core';
import type { Design } from '../core/types';
import { fittedPathDepthRange, makeTicks } from './inspector';

const design: Design = {
  H: 120,
  W: 180,
  D: 40,
  pMin: 5,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.02,
  displayUnit: 'mm',
  wave: {
    kind: 'diagonal',
    theta: 35,
    lambda: 80,
    phi: 10,
  },
};

describe('2D inspector helpers', () => {
  it('uses the exact SVG path data emitted for export', () => {
    const path = fitPath(design, 90, 3);

    expect(slatPathData(path)).toMatch(/^M/);
  });

  it('derives measurement ticks and depth range from the fitted path', () => {
    const path = fitPath(design, 90, 3);
    const range = fittedPathDepthRange(path);

    expect(range.min).toBeGreaterThanOrEqual(design.pMin - design.fitTolerance);
    expect(range.max).toBeLessThanOrEqual(design.D + design.fitTolerance);
    expect(makeTicks(40, 4)).toEqual([0, 10, 20, 30, 40]);
  });
});
