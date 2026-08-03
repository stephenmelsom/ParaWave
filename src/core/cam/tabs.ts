/**
 * Holding tabs for through-cut contours.
 *
 * A tab is a stretch of the contour where the tool lifts to leave uncut stock
 * behind, so parts stay attached until they are broken out by hand. Tabs are
 * positioned by arc length rather than by vertex index: the flattened contour's
 * vertices bunch up wherever the wave curves tightly, so index-spaced tabs
 * would cluster at the peaks and leave the flat back edge unsupported.
 *
 * Depths here follow the machine convention — Z zero at the top of the stock,
 * cuts negative — so the tab top is the *greater* of the two values.
 */

import { distance, type Point2 } from './geom';

/** A stretch of contour, in arc length from the contour's start point. */
export interface TabSpan {
  start: number;
  end: number;
}

/** A contour vertex carrying the depth the tool should be at when it reaches it. */
export interface TabbedPoint extends Point2 {
  z: number;
}

/**
 * The largest fraction of a tab's width either ramp may consume.
 *
 * A third each leaves a third of flat tab top, and keeps the ramp under 45
 * degrees for any tab wider than its height.
 */
const RAMP_FRACTION = 1 / 3;

/**
 * Evenly spaced tab spans around a closed contour.
 *
 * Widths are clamped to half the pitch, so tabs can never merge into a
 * continuous uncut ring however aggressive the settings. That clamp also keeps
 * every span clear of the contour's start seam by at least a quarter pitch —
 * which matters, because the seam is where the tool plunges, and plunging into
 * a tab would leave an uncut plug. `applyTabs` still handles spans that
 * straddle the seam, for callers that build their own.
 */
export function tabSpans(
  contourLength: number,
  count: number,
  width: number,
): TabSpan[] {
  if (!(contourLength > 0) || !(count > 0) || !(width > 0)) {
    return [];
  }

  const pitch = contourLength / count;
  // Half the pitch still leaves half the contour cut through.
  const clamped = Math.min(width, pitch / 2);
  const spans: TabSpan[] = [];

  for (let index = 0; index < count; index += 1) {
    const center = (index + 0.5) * pitch;

    spans.push({ start: center - clamped / 2, end: center + clamped / 2 });
  }

  return spans;
}

/** Ramp length for a span, in arc length. */
function rampLength(span: TabSpan, tabHeight: number): number {
  const width = span.end - span.start;

  return Math.max(0, Math.min(width * RAMP_FRACTION, tabHeight));
}

/**
 * Depth at an arc-length position: the deepest of the pass depth and whatever
 * the tabs allow there.
 */
function depthAt(
  position: number,
  spans: readonly TabSpan[],
  contourLength: number,
  depth: number,
  tabTopDepth: number,
): number {
  const tabHeight = tabTopDepth - depth;

  for (const span of spans) {
    const ramp = rampLength(span, tabHeight);

    // A span centred near the start point straddles the seam, so test the
    // position shifted by a full turn in each direction as well.
    for (const shift of [-contourLength, 0, contourLength]) {
      const local = position + shift;

      if (local < span.start || local > span.end) {
        continue;
      }

      if (ramp <= 0) {
        return tabTopDepth;
      }

      if (local < span.start + ramp) {
        return depth + (tabHeight * (local - span.start)) / ramp;
      }

      if (local > span.end - ramp) {
        return depth + (tabHeight * (span.end - local)) / ramp;
      }

      return tabTopDepth;
    }
  }

  return depth;
}

/** Every arc-length position where the depth profile changes slope. */
function breakpoints(
  spans: readonly TabSpan[],
  contourLength: number,
  tabHeight: number,
): number[] {
  const values: number[] = [];

  for (const span of spans) {
    const ramp = rampLength(span, tabHeight);

    for (const raw of [
      span.start,
      span.start + ramp,
      span.end - ramp,
      span.end,
    ]) {
      // Wrap the seam-straddling first span back into [0, contourLength).
      const wrapped = ((raw % contourLength) + contourLength) % contourLength;

      values.push(wrapped);
    }
  }

  return values.sort((left, right) => left - right);
}

/**
 * Walk a closed contour at a given pass depth, lifting over the tab spans.
 *
 * Vertices are inserted at every ramp boundary so the emitted move list is an
 * exact description of the depth profile rather than a resampling of it. When
 * the pass never reaches the tab top the contour is returned flat, which is
 * what every pass above the tabs should do.
 */
export function applyTabs(
  contour: readonly Point2[],
  spans: readonly TabSpan[],
  depth: number,
  tabTopDepth: number,
): TabbedPoint[] {
  if (contour.length === 0) {
    return [];
  }

  const flat = contour.map((point) => ({ x: point.x, y: point.y, z: depth }));

  if (spans.length === 0 || depth >= tabTopDepth) {
    return flat;
  }

  const count = contour.length;
  const positions: number[] = [0];

  for (let index = 0; index < count; index += 1) {
    const a = contour[index] as Point2;
    const b = contour[(index + 1) % count] as Point2;

    positions.push((positions[index] as number) + distance(a, b));
  }

  const contourLength = positions[count] as number;

  if (!(contourLength > 0)) {
    return flat;
  }

  const cuts = breakpoints(spans, contourLength, tabTopDepth - depth);
  const result: TabbedPoint[] = [];
  let cutIndex = 0;

  const push = (point: Point2, position: number): void => {
    result.push({
      x: point.x,
      y: point.y,
      z: depthAt(position, spans, contourLength, depth, tabTopDepth),
    });
  };

  for (let index = 0; index < count; index += 1) {
    const a = contour[index] as Point2;
    const b = contour[(index + 1) % count] as Point2;
    const startPosition = positions[index] as number;
    const endPosition = positions[index + 1] as number;
    const span = endPosition - startPosition;

    push(a, startPosition);

    while (
      cutIndex < cuts.length &&
      (cuts[cutIndex] as number) <= startPosition
    ) {
      cutIndex += 1;
    }

    while (cutIndex < cuts.length && (cuts[cutIndex] as number) < endPosition) {
      const cut = cuts[cutIndex] as number;
      const t = span > 0 ? (cut - startPosition) / span : 0;

      push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }, cut);
      cutIndex += 1;
    }
  }

  return result;
}
