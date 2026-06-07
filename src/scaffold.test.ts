import { describe, expect, it } from 'vitest';

import { fitAllPaths, SEED_PER_WAVELENGTH } from './core/fit/adaptive';
import type { Design } from './core/types';

const minimalDesign: Design = {
  H: 100,
  W: 50,
  D: 20,
  pMin: 0,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.1,
  displayUnit: 'mm',
  wave: { kind: 'diagonal', theta: 0, lambda: 50, phi: 0 },
};

describe('scaffold', () => {
  it('core geometry pipeline produces at least one path for a valid design', () => {
    const result = fitAllPaths(minimalDesign);
    expect(result.paths.length).toBeGreaterThan(0);
    expect(result.totalSegments).toBeGreaterThan(0);
  });

  it('exports expected constants', () => {
    expect(SEED_PER_WAVELENGTH).toBe(8);
  });
});
