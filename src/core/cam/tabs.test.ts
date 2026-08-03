import { describe, expect, it } from 'vitest';

import { polylineLength, type Point2 } from './geom';
import { applyTabs, tabSpans } from './tabs';

/** A 100 x 100 square, so arc length is trivially checkable. */
const square: Point2[] = [
  { x: 0, y: 0 },
  { x: 100, y: 0 },
  { x: 100, y: 100 },
  { x: 0, y: 100 },
];

const perimeter = 400;
const depth = -18.5;
const tabHeight = 3;
const tabTopDepth = depth + tabHeight;

describe('tab spans', () => {
  it('spaces tabs evenly by arc length, not by vertex', () => {
    const spans = tabSpans(perimeter, 4, 8);

    expect(spans).toHaveLength(4);
    expect(spans.map((span) => (span.start + span.end) / 2)).toEqual([
      50, 150, 250, 350,
    ]);

    for (const span of spans) {
      expect(span.end - span.start).toBeCloseTo(8, 9);
    }
  });

  it('keeps every span clear of the start seam, where the tool plunges', () => {
    for (const [count, width] of [
      [4, 8],
      [8, 30],
      [3, 1000],
      [12, 40],
    ] as const) {
      const spans = tabSpans(perimeter, count, width);

      for (const span of spans) {
        expect(span.start).toBeGreaterThan(0);
        expect(span.end).toBeLessThan(perimeter);
      }
    }
  });

  it('clamps width so tabs can never merge into an uncut ring', () => {
    const spans = tabSpans(perimeter, 4, 500);

    for (const span of spans) {
      expect(span.end - span.start).toBeLessThanOrEqual(
        perimeter / 4 / 2 + 1e-9,
      );
    }
  });

  it('yields nothing for degenerate settings', () => {
    expect(tabSpans(perimeter, 0, 8)).toEqual([]);
    expect(tabSpans(perimeter, 4, 0)).toEqual([]);
    expect(tabSpans(0, 4, 8)).toEqual([]);
  });
});

describe('applying tabs to a pass', () => {
  it('leaves passes above the tab top completely flat', () => {
    const spans = tabSpans(perimeter, 4, 8);
    const shallow = applyTabs(square, spans, -3, tabTopDepth);

    expect(shallow).toHaveLength(square.length);
    expect(shallow.every((point) => point.z === -3)).toBe(true);
  });

  it('leaves the contour flat when there are no tabs', () => {
    const flat = applyTabs(square, [], depth, tabTopDepth);

    expect(flat).toHaveLength(square.length);
    expect(flat.every((point) => point.z === depth)).toBe(true);
  });

  it('never cuts shallower than the tab top, and reaches it on every tab', () => {
    const spans = tabSpans(perimeter, 4, 12);
    const tabbed = applyTabs(square, spans, depth, tabTopDepth);

    for (const point of tabbed) {
      expect(point.z).toBeGreaterThanOrEqual(depth - 1e-9);
      expect(point.z).toBeLessThanOrEqual(tabTopDepth + 1e-9);
    }

    const atTabTop = tabbed.filter(
      (point) => Math.abs(point.z - tabTopDepth) < 1e-9,
    );

    // Each of the four tabs contributes both ends of its flat top.
    expect(atTabTop.length).toBeGreaterThanOrEqual(8);
  });

  it('returns to full depth between tabs', () => {
    const spans = tabSpans(perimeter, 4, 12);
    const tabbed = applyTabs(square, spans, depth, tabTopDepth);
    const atFullDepth = tabbed.filter(
      (point) => Math.abs(point.z - depth) < 1e-9,
    );

    expect(atFullDepth.length).toBeGreaterThanOrEqual(8);
  });

  it('inserts ramp vertices without moving the contour off its path', () => {
    const spans = tabSpans(perimeter, 4, 12);
    const tabbed = applyTabs(square, spans, depth, tabTopDepth);

    expect(tabbed.length).toBeGreaterThan(square.length);
    // Extra vertices are interpolated along existing edges, so the closed path
    // is exactly as long as it was.
    expect(polylineLength(tabbed)).toBeCloseTo(perimeter, 6);
  });

  it('ramps rather than stepping, so the tool is never plunged into a tab', () => {
    const spans = tabSpans(perimeter, 4, 12);
    const tabbed = applyTabs(square, spans, depth, tabTopDepth);

    for (let index = 0; index < tabbed.length; index += 1) {
      const a = tabbed[index] as { x: number; y: number; z: number };
      const b = tabbed[(index + 1) % tabbed.length] as {
        x: number;
        y: number;
        z: number;
      };
      const rise = Math.abs(b.z - a.z);

      if (rise > 1e-9) {
        const run = Math.hypot(b.x - a.x, b.y - a.y);

        // Ramp length is min(width / 3, tabHeight) = 3 mm here, so no move may
        // climb the full tab height in less than its own height of travel.
        expect(run).toBeGreaterThanOrEqual(rise - 1e-9);
      }
    }
  });

  it('handles a tab that straddles the contour start seam', () => {
    const spans = tabSpans(perimeter, 2, 40);
    const tabbed = applyTabs(square, spans, depth, tabTopDepth);
    const first = tabbed[0] as { z: number };

    // The first span is centred at 100 and the second at 300 with width 40, so
    // neither reaches the seam; shift by hand to force the straddle.
    const straddling = applyTabs(
      square,
      [{ start: -10, end: 10 }],
      depth,
      tabTopDepth,
    );

    expect(first.z).toBeCloseTo(depth, 9);
    expect((straddling[0] as { z: number }).z).toBeCloseTo(tabTopDepth, 9);
    expect(straddling.some((point) => Math.abs(point.z - depth) < 1e-9)).toBe(
      true,
    );
  });

  it('degrades to an empty result for an empty contour', () => {
    expect(
      applyTabs([], tabSpans(perimeter, 4, 8), depth, tabTopDepth),
    ).toEqual([]);
  });
});
