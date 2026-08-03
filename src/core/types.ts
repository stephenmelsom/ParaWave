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

export type WaveConfig =
  | DiagonalWaveConfig
  | RadialWaveConfig
  | InterferenceWaveConfig;

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

export type MillingDirection = 'climb' | 'conventional';

/**
 * CNC toolpath configuration for g-code export.
 *
 * A sibling of `SheetConfig` and off `Design` for the same reason (see above):
 * cutting parameters cannot affect geometry, and a field on `Design` would
 * re-fit every path on every slider tick.
 *
 * Unlike the SVG export — where `clearance` is spacing only and CAM applies the
 * offset — g-code output *is* the CAM step, so it offsets part geometry by the
 * tool radius. That makes `clearance >= toolDiameter` a hard requirement
 * (FR-VAL.17): the corridor between two nested parts is exactly `clearance`
 * wide, and two contours each pushed out by a radius meet in the middle of it.
 *
 * The cut depth is deliberately absent — it is derived as
 * `design.slatWidth + throughAllowance`, because `slatWidth` already *is* the
 * stock thickness. Storing it would let it go stale the moment that slider moves.
 */
export interface MachineConfig {
  /** Emit a `gcode/` directory into the export archive. */
  enabled: boolean;
  post: string;
  millingDirection: MillingDirection;
  toolNumber: number;
  /** Profile cutter diameter, mm. */
  toolDiameter: number;
  spindleRpm: number;
  /** Cutting feed, mm/min. */
  feedRate: number;
  /** Plunge feed, mm/min. */
  plungeRate: number;
  /** Maximum depth of cut per pass, mm. */
  depthPerPass: number;
  /** How far past the back of the stock the profile cuts, mm. */
  throughAllowance: number;
  /** Rapid height above the top of the stock, mm. */
  retractHeight: number;
  tabCount: number;
  /** Tab length along the contour, mm. */
  tabWidth: number;
  /** Thickness of stock left under a tab, measured from the back of the sheet, mm. */
  tabHeight: number;
  engraveLabels: boolean;
  engraveToolNumber: number;
  engraveDiameter: number;
  engraveDepth: number;
  engraveFeed: number;
  engraveRpm: number;
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
