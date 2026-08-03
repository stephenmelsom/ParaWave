/**
 * Planar geometry helpers shared by the CAM layer.
 *
 * Everything here is plain arithmetic on millimetre coordinates — no curve
 * knowledge, no toolpath knowledge. `x` is the first axis of whatever frame the
 * caller is working in: slat-local (where `x` is the slat's `z` protrusion
 * axis, matching the SVG convention), sheet, or machine.
 */

export interface Point2 {
  x: number;
  y: number;
}

/** Points closer than this are treated as coincident, in mm. */
export const COINCIDENT_EPSILON = 1e-9;

export function distance(a: Point2, b: Point2): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

/**
 * Signed area of a closed ring, positive when it winds counter-clockwise.
 *
 * The ring is implicitly closed — do not repeat the first vertex at the end.
 */
export function polygonSignedArea(points: readonly Point2[]): number {
  if (points.length < 3) {
    return 0;
  }

  let sum = 0;

  for (let index = 0; index < points.length; index += 1) {
    const a = points[index] as Point2;
    const b = points[(index + 1) % points.length] as Point2;

    sum += a.x * b.y - b.x * a.y;
  }

  return sum / 2;
}

export function polylineLength(
  points: readonly Point2[],
  closed = true,
): number {
  if (points.length < 2) {
    return 0;
  }

  let total = 0;
  const last = closed ? points.length : points.length - 1;

  for (let index = 0; index < last; index += 1) {
    total += distance(
      points[index] as Point2,
      points[(index + 1) % points.length] as Point2,
    );
  }

  return total;
}

/** Squared distance from a point to a segment; handles zero-length segments. */
export function pointSegmentDistanceSquared(
  point: Point2,
  a: Point2,
  b: Point2,
): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lengthSquared = dx * dx + dy * dy;

  let t = 0;

  if (lengthSquared > 0) {
    t = ((point.x - a.x) * dx + (point.y - a.y) * dy) / lengthSquared;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
  }

  const px = point.x - (a.x + t * dx);
  const py = point.y - (a.y + t * dy);

  return px * px + py * py;
}

/**
 * Intersection of the infinite lines through `a0 → a1` and `b0 → b1`.
 *
 * Returns `null` when the lines are parallel (or either is degenerate).
 */
export function lineIntersection(
  a0: Point2,
  a1: Point2,
  b0: Point2,
  b1: Point2,
): Point2 | null {
  const ax = a1.x - a0.x;
  const ay = a1.y - a0.y;
  const bx = b1.x - b0.x;
  const by = b1.y - b0.y;

  const denominator = ax * by - ay * bx;

  if (Math.abs(denominator) < COINCIDENT_EPSILON) {
    return null;
  }

  const t = ((b0.x - a0.x) * by - (b0.y - a0.y) * bx) / denominator;

  return { x: a0.x + t * ax, y: a0.y + t * ay };
}

/**
 * Drop consecutive coincident points, wrapping when `closed`.
 */
export function dedupePoints(
  points: readonly Point2[],
  closed = true,
): Point2[] {
  const result: Point2[] = [];

  for (const point of points) {
    const previous = result.at(-1);

    if (previous && distance(previous, point) <= COINCIDENT_EPSILON) {
      continue;
    }

    result.push(point);
  }

  while (
    closed &&
    result.length > 1 &&
    distance(result[0] as Point2, result[result.length - 1] as Point2) <=
      COINCIDENT_EPSILON
  ) {
    result.pop();
  }

  return result;
}

/**
 * Rotate a closed ring so that it starts at `index`, preserving order.
 */
export function rotateRing(points: readonly Point2[], index: number): Point2[] {
  if (points.length === 0) {
    return [];
  }

  const start = ((index % points.length) + points.length) % points.length;

  return [...points.slice(start), ...points.slice(0, start)];
}

/**
 * Return the ring wound in the requested direction, reversing it if needed.
 *
 * Winding is measured rather than reasoned about: the slat frame, the sheet
 * frame and the machine frame do not all agree on handedness (the machine
 * mapping flips Y), so the only safe test is the sign of the enclosed area.
 *
 * The starting vertex is preserved across a reversal, because callers choose it
 * deliberately — it is where the tool plunges.
 */
export function orientRing(
  points: readonly Point2[],
  counterClockwise: boolean,
): Point2[] {
  const area = polygonSignedArea(points);

  if (area === 0 || area > 0 === counterClockwise) {
    return [...points];
  }

  const reversed = [...points].reverse();

  return rotateRing(reversed, reversed.length - 1);
}
