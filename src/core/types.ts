export type Unit = 'mm' | 'inch';

export interface Design {
  H: number;
  W: number;
  D: number;
  pMin: number;
  slatWidth: number;
  gap: number;
  fitTolerance: number;
  displayUnit: Unit;
  wave: WaveConfig;
}

export type WaveConfig = DiagonalWaveConfig | RadialWaveConfig | InterferenceWaveConfig;

export interface DiagonalWaveConfig {
  kind: 'diagonal';
  theta: number;
  lambda: number;
  phi: number;
}

export interface RadialWaveConfig {
  kind: 'radial';
  cx: number;
  cy: number;
  lambda: number;
  phi: number;
  decay: number;
}

export interface InterferenceWaveConfig {
  kind: 'interference';
  sources: Source[];
}

export type Source = DiagonalSource | RadialSource;

export interface DiagonalSource {
  type: 'diagonal';
  theta: number;
  lambda: number;
  phi: number;
  weight: number;
}

export interface RadialSource {
  type: 'radial';
  cx: number;
  cy: number;
  lambda: number;
  phi: number;
  decay: number;
  weight: number;
}

export interface CurvePoint {
  z: number;
  y: number;
}

export interface BezierSeg {
  p0: CurvePoint;
  p1: CurvePoint;
  p2: CurvePoint;
  p3: CurvePoint;
}

export interface FittedPath {
  finIndex: number;
  xCenter: number;
  segments: BezierSeg[];
}

export interface MeshBuffers {
  positions: Float32Array;
  indices: Uint32Array;
  normals: Float32Array;
  finRanges: Uint32Array;
}

export type LabelStyle = 'text' | 'stroke' | 'none';

/**
 * Stock sheet / CNC work area configuration.
 *
 * Deliberately NOT a member of `Design`: the recompute effect in App.svelte
 * subscribes by deep-reading `store.snapshot()`, so any field on `Design`
 * triggers a full adaptive re-fit when it changes. Sheet size cannot affect
 * geometry, so it lives as a sibling on `DesignStore` instead.
 *
 * `clearance` is spacing only — ParaWave does not kerf-compensate the geometry.
 */
export interface SheetConfig {
  enabled: boolean;
  width: number;
  height: number;
  margin: number;
  clearance: number;
  labelStyle: LabelStyle;
}

/**
 * Geometry-derived inputs to nesting, computed in the worker.
 *
 * Because parts are packed in fin-index order with strict 0°/180° alternation,
 * the only mating pitches that can ever be needed are between consecutive fin
 * indices — so `3N - 1` numbers are enough to pack any sheet configuration.
 */
export interface NestMetrics {
  /** Exact `max over y of f_i(y)` — the part's true width. */
  widths: number[];
  /** Exact `integral of f_i dy` over [0, H] — the part's true area. */
  areas: number[];
  /** `mates[i] = max over y of (f_i(y) + f_{i+1}(H - y))`. Length `max(0, N - 1)`. */
  mates: number[];
  /** The design height these metrics were computed at; guards against stale results. */
  height: number;
}

export interface ComputeRequest {
  design: Design;
  needMesh: boolean;
  generation: number;
}

export interface ComputeResult {
  generation: number;
  paths: FittedPath[];
  observedDepth: {
    min: number;
    max: number;
  };
  totalSegments: number;
  nest: NestMetrics;
  mesh?: MeshBuffers;
}
