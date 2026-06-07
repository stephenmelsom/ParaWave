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
  mesh?: MeshBuffers;
}
