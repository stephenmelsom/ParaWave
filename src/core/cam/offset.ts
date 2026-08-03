/**
 * Outside-contour offsetting for slat cut paths.
 *
 * This is deliberately neither a general polygon-offset library nor a sampled
 * approximation. It exploits the same structural property `matingBound()`
 * relies on: a slat is the region under a graph,
 *
 *     R = { (x, y) : 0 <= y <= H, 0 <= x <= f(y) }
 *
 * with `x` the protrusion axis (the SVG's x, the slat's `z`). Two consequences
 * make an exact, dependency-free offset practical:
 *
 * 1. **Loop pruning is cheap.** The raw offset of a polygon self-intersects
 *    wherever the boundary curves tighter than the tool radius; the standard
 *    fix is to discard candidates closer than `radius` to the original
 *    boundary, which is naively quadratic. But distance is at least |dy|, so
 *    only boundary edges within a y-window of +/- radius can possibly be closer
 *    than radius. Because `f` is a graph, the front edge is sorted in y and the
 *    window is a binary search — the prune is O(log n + window) per candidate.
 *
 * 2. **Candidates never fall inside the part.** Moving outward from the front
 *    edge always increases x and the region is bounded above by `f`; moving
 *    outward from the back edge always decreases x below zero. Neither can
 *    re-enter. The one exception is a corner arc on a very steep front edge, so
 *    an explicit inside test guards it — again a single graph lookup.
 *
 * Offsetting commutes with placement: `placePoint` is a rigid motion (a
 * translation, or a 180 degree rotation whose determinant is +1), so a contour
 * is offset once per fin index in the slat-local frame and the result is
 * placed, never re-offset per placement.
 */

import type { BezierSeg, CurvePoint, FittedPath } from '../types';
import {
  COINCIDENT_EPSILON,
  dedupePoints,
  distance,
  lineIntersection,
  pointSegmentDistanceSquared,
  polygonSignedArea,
  rotateRing,
  type Point2,
} from './geom';

/** Default chord tolerance for flattening curves and arc joins, in mm. */
export const DEFAULT_CAM_TOLERANCE = 0.02;

/** Recursion cap for adaptive flattening; reached only on pathological input. */
const MAX_FLATTEN_DEPTH = 12;

/**
 * How far past a run's end a stitched joint may sit, as a multiple of radius.
 *
 * Nearly-parallel runs produce a far-away intersection that is geometrically
 * valid but visually absurd; past this reach the runs are simply joined by a
 * straight line, which is within tolerance of the true joint anyway.
 */
const MAX_JOINT_REACH = 4;

export interface OffsetOptions {
  /** Chord tolerance for flattening and arc joins, in mm. */
  tolerance?: number;
}

/** A slat's closed cut boundary, flattened to line segments. */
export interface SlatBoundary {
  /** Closed counter-clockwise ring; the first vertex is not repeated. */
  points: Point2[];
  /** Front-edge samples only, ascending in y. Indexed by the prune window. */
  front: Point2[];
  height: number;
}

function midpoint(a: CurvePoint, b: CurvePoint): CurvePoint {
  return { z: (a.z + b.z) / 2, y: (a.y + b.y) / 2 };
}

function subdivide(segment: BezierSeg): [BezierSeg, BezierSeg] {
  const p01 = midpoint(segment.p0, segment.p1);
  const p12 = midpoint(segment.p1, segment.p2);
  const p23 = midpoint(segment.p2, segment.p3);
  const p012 = midpoint(p01, p12);
  const p123 = midpoint(p12, p23);
  const p0123 = midpoint(p012, p123);

  return [
    { p0: segment.p0, p1: p01, p2: p012, p3: p0123 },
    { p0: p0123, p1: p123, p2: p23, p3: segment.p3 },
  ];
}

/**
 * Upper bound on how far the curve strays from the chord `p0 → p3`.
 *
 * A cubic stays within three quarters of its control polygon's deviation, so
 * scaling the larger control-point offset is a conservative estimate.
 */
function curveDeviation(segment: BezierSeg): number {
  const dz = segment.p3.z - segment.p0.z;
  const dy = segment.p3.y - segment.p0.y;
  const length = Math.hypot(dz, dy);

  if (length < COINCIDENT_EPSILON) {
    return Math.max(
      Math.hypot(segment.p1.z - segment.p0.z, segment.p1.y - segment.p0.y),
      Math.hypot(segment.p2.z - segment.p0.z, segment.p2.y - segment.p0.y),
    );
  }

  const first =
    Math.abs(
      (segment.p1.z - segment.p0.z) * dy - (segment.p1.y - segment.p0.y) * dz,
    ) / length;
  const second =
    Math.abs(
      (segment.p2.z - segment.p0.z) * dy - (segment.p2.y - segment.p0.y) * dz,
    ) / length;

  return 0.75 * Math.max(first, second);
}

/** Append the flattening of `segment`, excluding its start point. */
function flattenInto(
  segment: BezierSeg,
  tolerance: number,
  out: Point2[],
  depth: number,
): void {
  if (depth >= MAX_FLATTEN_DEPTH || curveDeviation(segment) <= tolerance) {
    out.push({ x: segment.p3.z, y: segment.p3.y });

    return;
  }

  const [left, right] = subdivide(segment);

  flattenInto(left, tolerance, out, depth + 1);
  flattenInto(right, tolerance, out, depth + 1);
}

/**
 * Flatten a fitted slat to its closed cut boundary.
 *
 * The ring matches `slatPathData`: back-bottom corner, along the bottom edge to
 * the front, up the front edge, across the top edge, and back down the straight
 * back edge at x = 0.
 */
export function slatBoundary(
  path: FittedPath,
  height: number,
  tolerance: number = DEFAULT_CAM_TOLERANCE,
): SlatBoundary {
  const first = path.segments[0];
  const last = path.segments.at(-1);

  if (!first || !last) {
    return { points: [], front: [], height };
  }

  const front: Point2[] = [{ x: first.p0.z, y: first.p0.y }];

  for (const segment of path.segments) {
    flattenInto(segment, tolerance, front, 0);
  }

  const dedupedFront = dedupePoints(front, false);
  const ring = dedupePoints([
    { x: 0, y: first.p0.y },
    ...dedupedFront,
    { x: 0, y: last.p3.y },
  ]);

  // The traversal above is counter-clockwise in an x-right / y-up reading, but
  // a degenerate or inverted design could invert it — measure, do not assume.
  const points = polygonSignedArea(ring) < 0 ? [...ring].reverse() : ring;

  return { points, front: dedupedFront, height };
}

/** First index whose y is at least `value`, or `front.length` if none is. */
function lowerBound(front: readonly Point2[], value: number): number {
  let low = 0;
  let high = front.length;

  while (low < high) {
    const middle = (low + high) >> 1;

    if ((front[middle] as Point2).y < value) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }

  return low;
}

/** Front-edge x at a given y, by linear interpolation of the flattened edge. */
function frontXAt(front: readonly Point2[], y: number): number {
  if (front.length === 0) {
    return 0;
  }

  const index = lowerBound(front, y);

  if (index === 0) {
    return (front[0] as Point2).x;
  }

  if (index >= front.length) {
    return (front[front.length - 1] as Point2).x;
  }

  const before = front[index - 1] as Point2;
  const after = front[index] as Point2;
  const span = after.y - before.y;

  if (span <= COINCIDENT_EPSILON) {
    return Math.max(before.x, after.x);
  }

  return before.x + ((after.x - before.x) * (y - before.y)) / span;
}

/**
 * Is the point strictly inside the slat?
 *
 * A single graph lookup, which is all the region's shape allows for. Boundary
 * points are deliberately reported as outside.
 */
function isInsideSlat(point: Point2, boundary: SlatBoundary): boolean {
  const front = boundary.front;
  const firstY = front[0]?.y;
  const lastY = front[front.length - 1]?.y;

  if (firstY === undefined || lastY === undefined) {
    return false;
  }

  if (point.y <= firstY || point.y >= lastY || point.x <= 0) {
    return false;
  }

  return point.x < frontXAt(front, point.y);
}

/**
 * Squared distance from a candidate to the slat boundary.
 *
 * Only the y-window of half-width `window` is searched, so the result saturates
 * above `window` — it is meaningful for deciding "is this closer than `window`",
 * which is the only question the prune asks.
 */
function boundaryClearanceSquared(
  point: Point2,
  boundary: SlatBoundary,
  window: number,
): number {
  const front = boundary.front;
  const firstFront = front[0];
  const lastFront = front[front.length - 1];

  if (!firstFront || !lastFront) {
    return Number.POSITIVE_INFINITY;
  }

  const back = { x: 0, y: firstFront.y };
  const backTop = { x: 0, y: lastFront.y };

  let best = pointSegmentDistanceSquared(point, back, backTop);

  best = Math.min(best, pointSegmentDistanceSquared(point, back, firstFront));
  best = Math.min(best, pointSegmentDistanceSquared(point, lastFront, backTop));

  // Segment i spans [front[i].y, front[i + 1].y]; it can only matter when that
  // span meets [point.y - window, point.y + window]. Anything outside is at
  // least `window` away in y alone.
  const start = Math.max(0, lowerBound(front, point.y - window) - 1);
  const end = Math.min(front.length - 2, lowerBound(front, point.y + window));

  for (let index = start; index <= end; index += 1) {
    best = Math.min(
      best,
      pointSegmentDistanceSquared(
        point,
        front[index] as Point2,
        front[index + 1] as Point2,
      ),
    );
  }

  return best;
}

interface OffsetEdge {
  a: Point2;
  b: Point2;
  /** Unit direction. */
  dx: number;
  dy: number;
  /** Outward unit normal for a counter-clockwise ring. */
  nx: number;
  ny: number;
}

function collectEdges(ring: readonly Point2[]): OffsetEdge[] {
  const edges: OffsetEdge[] = [];

  for (let index = 0; index < ring.length; index += 1) {
    const a = ring[index] as Point2;
    const b = ring[(index + 1) % ring.length] as Point2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.hypot(dx, dy);

    if (length < COINCIDENT_EPSILON) {
      continue;
    }

    edges.push({
      a,
      b,
      dx: dx / length,
      dy: dy / length,
      nx: dy / length,
      ny: -dx / length,
    });
  }

  return edges;
}

/** Interior points of the arc sweeping counter-clockwise from `from` to `to`. */
function arcPoints(
  center: Point2,
  radius: number,
  from: number,
  to: number,
  tolerance: number,
): Point2[] {
  let sweep = to - from;

  while (sweep <= 0) {
    sweep += 2 * Math.PI;
  }

  const ratio = Math.max(-1, Math.min(1, 1 - tolerance / radius));
  const maxStep = 2 * Math.acos(ratio);
  const steps = maxStep > 0 ? Math.max(1, Math.ceil(sweep / maxStep)) : 1;
  const points: Point2[] = [];

  for (let step = 1; step < steps; step += 1) {
    const angle = from + (sweep * step) / steps;

    points.push({
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
    });
  }

  return points;
}

/** Turns flatter than this are treated as collinear. */
const TURN_EPSILON = 1e-12;

/**
 * How far a mitered reflex corner may sit from its vertex, as a multiple of
 * radius, before it is bevelled instead. Near-180-degree reversals send the
 * miter to infinity; the prune would discard it anyway, but bevelling keeps the
 * intermediate numbers sane.
 */
const MITER_LIMIT = 10;

/**
 * The offset before loop removal.
 *
 * The offset polygon's vertices are exactly the joints between consecutive
 * offset segments, so that is all this emits. Convex turns open a gap, bridged
 * by an arc about the original vertex; reflex turns overlap, and are mitered to
 * the single point where the two offset lines cross. Mitering matters: emitting
 * both overlapping endpoints instead would leave a sub-tolerance zigzag at
 * every reflex vertex, which reads as a self-intersection to anything checking.
 * Genuine loops — notches narrower than the tool — survive this stage on
 * purpose and are removed by the prune.
 */
function rawOffset(
  ring: readonly Point2[],
  radius: number,
  tolerance: number,
): Point2[] {
  const edges = collectEdges(ring);
  const count = edges.length;

  if (count === 0) {
    return [];
  }

  const segments = edges.map((edge) => ({
    a: { x: edge.a.x + radius * edge.nx, y: edge.a.y + radius * edge.ny },
    b: { x: edge.b.x + radius * edge.nx, y: edge.b.y + radius * edge.ny },
  }));

  const out: Point2[] = [];

  for (let index = 0; index < count; index += 1) {
    const previousIndex = (index - 1 + count) % count;
    const previous = edges[previousIndex] as OffsetEdge;
    const edge = edges[index] as OffsetEdge;
    const previousSegment = segments[previousIndex] as { a: Point2; b: Point2 };
    const segment = segments[index] as { a: Point2; b: Point2 };
    const cross = previous.dx * edge.dy - previous.dy * edge.dx;

    if (cross > TURN_EPSILON) {
      out.push(previousSegment.b);
      out.push(
        ...arcPoints(
          edge.a,
          radius,
          Math.atan2(previous.ny, previous.nx),
          Math.atan2(edge.ny, edge.nx),
          tolerance,
        ),
      );
      out.push(segment.a);
      continue;
    }

    if (cross < -TURN_EPSILON) {
      const miter = lineIntersection(
        previousSegment.a,
        previousSegment.b,
        segment.a,
        segment.b,
      );

      if (miter && distance(miter, edge.a) <= MITER_LIMIT * radius) {
        out.push(miter);
      } else {
        out.push(previousSegment.b);
        out.push(segment.a);
      }

      continue;
    }

    out.push(segment.a);
  }

  return out;
}

/** Where two surviving runs truly meet, or `null` to join them with a chord. */
function jointPoint(
  current: readonly Point2[],
  next: readonly Point2[],
  radius: number,
): Point2 | null {
  const a0 = current[current.length - 2];
  const a1 = current[current.length - 1];
  const b0 = next[0];
  const b1 = next[1];

  if (!a0 || !a1 || !b0 || !b1) {
    return null;
  }

  const hit = lineIntersection(a0, a1, b0, b1);

  if (!hit) {
    return null;
  }

  const reach = MAX_JOINT_REACH * radius;

  if (distance(hit, a1) > reach || distance(hit, b0) > reach) {
    return null;
  }

  return hit;
}

/** Split the surviving candidates into contiguous runs, in cyclic order. */
function survivingRuns(
  raw: readonly Point2[],
  keep: readonly boolean[],
): Point2[][] {
  const count = raw.length;
  let firstStart = -1;

  for (let index = 0; index < count; index += 1) {
    if (
      (keep[index] ?? false) &&
      !(keep[(index - 1 + count) % count] ?? false)
    ) {
      firstStart = index;
      break;
    }
  }

  if (firstStart === -1) {
    // No run boundary: either nothing was pruned, or nothing survived.
    return keep.some(Boolean) ? [[...raw]] : [];
  }

  const runs: Point2[][] = [];
  let current: Point2[] = [];

  for (let step = 0; step < count; step += 1) {
    const index = (firstStart + step) % count;

    if (keep[index] ?? false) {
      current.push(raw[index] as Point2);
      continue;
    }

    if (current.length > 0) {
      runs.push(current);
      current = [];
    }
  }

  if (current.length > 0) {
    runs.push(current);
  }

  return runs;
}

/**
 * Start the ring at its most-negative x, breaking ties by lowest y.
 *
 * That vertex sits on the offset of the straight back edge — the flattest,
 * most featureless part of the contour, and so the safest place to plunge.
 */
function canonicalStart(ring: readonly Point2[]): Point2[] {
  if (ring.length === 0) {
    return [];
  }

  let best = 0;

  for (let index = 1; index < ring.length; index += 1) {
    const candidate = ring[index] as Point2;
    const incumbent = ring[best] as Point2;

    if (
      candidate.x < incumbent.x - COINCIDENT_EPSILON ||
      (Math.abs(candidate.x - incumbent.x) <= COINCIDENT_EPSILON &&
        candidate.y < incumbent.y)
    ) {
      best = index;
    }
  }

  return rotateRing(ring, best);
}

/**
 * Closed outside-offset contour for one slat, in the slat-local (x = z, y)
 * frame, wound counter-clockwise and starting on the back-edge offset.
 *
 * `radius` is the tool radius. A non-positive radius returns the un-offset
 * boundary, which is what the SVG export already emits.
 */
export function offsetSlatContour(
  path: FittedPath,
  height: number,
  radius: number,
  options: OffsetOptions = {},
): Point2[] {
  const tolerance = options.tolerance ?? DEFAULT_CAM_TOLERANCE;
  const boundary = slatBoundary(path, height, tolerance);

  if (boundary.points.length < 3) {
    return [];
  }

  if (!(radius > 0)) {
    return canonicalStart(boundary.points);
  }

  const raw = rawOffset(boundary.points, radius, tolerance);

  // A candidate on the true offset locus can lose one flattening sagitta to its
  // own chord and one more to a neighbouring chord, so anything within two
  // tolerances of `radius` is genuinely on the locus rather than inside a loop.
  // Loop interiors are closer than that by orders of magnitude.
  const slack = 2 * tolerance + COINCIDENT_EPSILON;
  const minimum = Math.max(0, radius - slack);
  const minimumSquared = minimum * minimum;

  const keep = raw.map(
    (point) =>
      !isInsideSlat(point, boundary) &&
      boundaryClearanceSquared(point, boundary, radius) >= minimumSquared,
  );

  // No loops anywhere: the raw offset already closes cleanly and inserting
  // joints would corrupt the corner the arcs just built.
  if (keep.every(Boolean)) {
    return canonicalStart(dedupePoints(raw));
  }

  const runs = survivingRuns(raw, keep);
  const joined: Point2[] = [];

  for (let index = 0; index < runs.length; index += 1) {
    const run = runs[index] as Point2[];
    const next = runs[(index + 1) % runs.length] as Point2[];

    joined.push(...run);

    // A single run still gets a joint: the gap it wraps around is a loop too.
    const joint = jointPoint(run, next, radius);

    if (joint) {
      joined.push(joint);
    }
  }

  return canonicalStart(dedupePoints(joined));
}
