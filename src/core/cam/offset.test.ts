import { describe, expect, it } from 'vitest';

import { fitPath } from '../fit';
import type { Design, FittedPath } from '../types';
import {
  DEFAULT_CAM_TOLERANCE,
  offsetSlatContour,
  slatBoundary,
} from './offset';
import {
  pointSegmentDistanceSquared,
  polygonSignedArea,
  type Point2,
} from './geom';

const baseDesign: Design = {
  H: 600,
  W: 1200,
  D: 60,
  pMin: 8,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.05,
  displayUnit: 'mm',
  wave: { kind: 'diagonal', theta: 30, lambda: 320, phi: 0 },
};

/** A design whose front edge curves far tighter than any realistic tool. */
const tightDesign: Design = {
  ...baseDesign,
  D: 90,
  pMin: 2,
  wave: { kind: 'diagonal', theta: 15, lambda: 45, phi: 0.4 },
};

function pathFor(design: Design, xCenter = 300): FittedPath {
  return fitPath(design, xCenter, 0);
}

/** Exact-enough distance from a point to the flattened slat boundary. */
function distanceToBoundary(point: Point2, ring: readonly Point2[]): number {
  let best = Number.POSITIVE_INFINITY;

  for (let index = 0; index < ring.length; index += 1) {
    const a = ring[index] as Point2;
    const b = ring[(index + 1) % ring.length] as Point2;

    best = Math.min(best, pointSegmentDistanceSquared(point, a, b));
  }

  return Math.sqrt(best);
}

function segmentsIntersect(
  a0: Point2,
  a1: Point2,
  b0: Point2,
  b1: Point2,
): boolean {
  const orientation = (p: Point2, q: Point2, r: Point2): number => {
    const value = (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);

    return Math.abs(value) < 1e-12 ? 0 : Math.sign(value);
  };

  const o1 = orientation(a0, a1, b0);
  const o2 = orientation(a0, a1, b1);
  const o3 = orientation(b0, b1, a0);
  const o4 = orientation(b0, b1, a1);

  return o1 !== o2 && o3 !== o4;
}

/** Count crossings between non-adjacent edges of a closed ring. */
function selfIntersectionCount(ring: readonly Point2[]): number {
  const count = ring.length;
  let crossings = 0;

  for (let i = 0; i < count; i += 1) {
    for (let j = i + 2; j < count; j += 1) {
      if (i === 0 && j === count - 1) {
        continue;
      }

      const a0 = ring[i] as Point2;
      const a1 = ring[(i + 1) % count] as Point2;
      const b0 = ring[j] as Point2;
      const b1 = ring[(j + 1) % count] as Point2;

      if (segmentsIntersect(a0, a1, b0, b1)) {
        crossings += 1;
      }
    }
  }

  return crossings;
}

describe('slat boundary flattening', () => {
  it('produces a counter-clockwise closed ring spanning the full slat height', () => {
    const boundary = slatBoundary(pathFor(baseDesign), baseDesign.H);

    expect(boundary.points.length).toBeGreaterThan(16);
    expect(polygonSignedArea(boundary.points)).toBeGreaterThan(0);
    expect(boundary.front[0]?.y).toBeCloseTo(0, 9);
    expect(boundary.front.at(-1)?.y).toBeCloseTo(baseDesign.H, 9);
  });

  it('keeps the front-edge samples ascending in y so the prune window is searchable', () => {
    const boundary = slatBoundary(pathFor(tightDesign), tightDesign.H);

    for (let index = 1; index < boundary.front.length; index += 1) {
      const previous = boundary.front[index - 1] as Point2;
      const current = boundary.front[index] as Point2;

      expect(current.y).toBeGreaterThan(previous.y);
    }
  });

  it('stays within the flattening tolerance of the fitted curve', () => {
    const path = pathFor(baseDesign);
    const boundary = slatBoundary(path, baseDesign.H, DEFAULT_CAM_TOLERANCE);

    // Every Bezier control point's own endpoints are sampled, so checking the
    // curve midpoints against the chords bounds the flattening error.
    for (const segment of path.segments) {
      const mid = {
        x:
          0.125 * segment.p0.z +
          0.375 * segment.p1.z +
          0.375 * segment.p2.z +
          0.125 * segment.p3.z,
        y:
          0.125 * segment.p0.y +
          0.375 * segment.p1.y +
          0.375 * segment.p2.y +
          0.125 * segment.p3.y,
      };

      expect(distanceToBoundary(mid, boundary.points)).toBeLessThanOrEqual(
        DEFAULT_CAM_TOLERANCE + 1e-6,
      );
    }
  });
});

describe('outside offset contour', () => {
  const radius = 3.175 / 2;

  it('lies on the offset locus: never closer than the radius, never farther', () => {
    const path = pathFor(baseDesign);
    const boundary = slatBoundary(path, baseDesign.H);
    const contour = offsetSlatContour(path, baseDesign.H, radius);

    expect(contour.length).toBeGreaterThan(16);

    let maximum = 0;

    for (const point of contour) {
      const gap = distanceToBoundary(point, boundary.points);

      // Two flattening tolerances of slack, matching the prune's own bound.
      expect(gap).toBeGreaterThanOrEqual(radius - 2 * DEFAULT_CAM_TOLERANCE);
      maximum = Math.max(maximum, gap);
    }

    expect(maximum).toBeLessThanOrEqual(radius + 2 * DEFAULT_CAM_TOLERANCE);
  });

  it('encloses more area than the part it surrounds', () => {
    const path = pathFor(baseDesign);
    const partArea = polygonSignedArea(slatBoundary(path, baseDesign.H).points);
    const offsetArea = polygonSignedArea(
      offsetSlatContour(path, baseDesign.H, radius),
    );

    expect(offsetArea).toBeGreaterThan(partArea);
    // A Minkowski sum with a disc grows by roughly perimeter * r + pi * r^2.
    expect(offsetArea).toBeLessThan(
      partArea + 2 * (baseDesign.H + baseDesign.D) * radius * 2,
    );
  });

  it('removes the loops a tight wave would otherwise produce', () => {
    const path = pathFor(tightDesign);
    const bigRadius = 3;

    const raw = slatBoundary(path, tightDesign.H);
    const contour = offsetSlatContour(path, tightDesign.H, bigRadius);

    expect(raw.points.length).toBeGreaterThan(64);
    expect(contour.length).toBeGreaterThan(8);
    expect(selfIntersectionCount(contour)).toBe(0);

    for (const point of contour) {
      expect(distanceToBoundary(point, raw.points)).toBeGreaterThanOrEqual(
        bigRadius - 2 * DEFAULT_CAM_TOLERANCE,
      );
    }
  });

  it('starts on the back-edge offset, the flattest place to plunge', () => {
    const contour = offsetSlatContour(
      pathFor(baseDesign),
      baseDesign.H,
      radius,
    );
    const start = contour[0] as Point2;

    expect(start.x).toBeCloseTo(-radius, 6);

    for (const point of contour) {
      expect(point.x).toBeGreaterThanOrEqual(start.x - 1e-9);
    }
  });

  it('winds counter-clockwise in the slat frame', () => {
    const contour = offsetSlatContour(
      pathFor(baseDesign),
      baseDesign.H,
      radius,
    );

    expect(polygonSignedArea(contour)).toBeGreaterThan(0);
  });

  it('returns the un-offset boundary for a non-positive radius', () => {
    const path = pathFor(baseDesign);
    const contour = offsetSlatContour(path, baseDesign.H, 0);
    const boundary = slatBoundary(path, baseDesign.H);

    expect(contour.length).toBe(boundary.points.length);
    expect(polygonSignedArea(contour)).toBeCloseTo(
      polygonSignedArea(boundary.points),
      6,
    );
  });

  it('degrades to an empty contour for a slat with no segments', () => {
    expect(
      offsetSlatContour({ finIndex: 0, xCenter: 0, segments: [] }, 600, 1),
    ).toEqual([]);
  });
});
