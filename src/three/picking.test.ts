import { describe, expect, it } from 'vitest';

import { findFinIndexForFace, getFinRange, pickFinFromHits } from './picking';

describe('fin picking range lookup', () => {
  const ranges = new Uint32Array([0, 8, 8, 4, 12, 10]);

  it('returns range metadata for a fin', () => {
    expect(getFinRange(ranges, 1)).toEqual({
      startTriangle: 8,
      triangleCount: 4,
    });
    expect(getFinRange(ranges, -1)).toBeNull();
    expect(getFinRange(ranges, 3)).toBeNull();
  });

  it('maps raycast face indices to fin indices with binary search', () => {
    expect(findFinIndexForFace(0, ranges)).toBe(0);
    expect(findFinIndexForFace(7, ranges)).toBe(0);
    expect(findFinIndexForFace(8, ranges)).toBe(1);
    expect(findFinIndexForFace(11, ranges)).toBe(1);
    expect(findFinIndexForFace(12, ranges)).toBe(2);
    expect(findFinIndexForFace(21, ranges)).toBe(2);
    expect(findFinIndexForFace(22, ranges)).toBeNull();
  });

  it('uses the first raycast hit that belongs to a fin', () => {
    expect(pickFinFromHits([{ faceIndex: undefined }, { faceIndex: 14 }], ranges)).toBe(2);
  });
});
