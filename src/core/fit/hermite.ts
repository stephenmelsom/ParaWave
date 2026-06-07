import type { BezierSeg, CurvePoint } from '../types';

export interface HermiteEndpoint {
  y: number;
  z: number;
  dzdy: number;
}

export interface HermiteInput {
  start: HermiteEndpoint;
  end: HermiteEndpoint;
}

export function hermiteCubic(input: HermiteInput): BezierSeg {
  const h = input.end.y - input.start.y;

  return {
    p0: {
      z: input.start.z,
      y: input.start.y,
    },
    p1: {
      z: input.start.z + (h * input.start.dzdy) / 3,
      y: input.start.y + h / 3,
    },
    p2: {
      z: input.end.z - (h * input.end.dzdy) / 3,
      y: input.end.y - h / 3,
    },
    p3: {
      z: input.end.z,
      y: input.end.y,
    },
  };
}

export function evaluateBezier(seg: BezierSeg, t: number): CurvePoint {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const t2 = t * t;
  const a = mt2 * mt;
  const b = 3 * mt2 * t;
  const c = 3 * mt * t2;
  const d = t2 * t;

  return {
    z: a * seg.p0.z + b * seg.p1.z + c * seg.p2.z + d * seg.p3.z,
    y: a * seg.p0.y + b * seg.p1.y + c * seg.p2.y + d * seg.p3.y,
  };
}

export function bezierTForY(seg: BezierSeg, y: number): number {
  const span = seg.p3.y - seg.p0.y;

  if (span === 0) {
    return 0;
  }

  return (y - seg.p0.y) / span;
}

export function evaluateBezierAtY(seg: BezierSeg, y: number): CurvePoint {
  return evaluateBezier(seg, bezierTForY(seg, y));
}
