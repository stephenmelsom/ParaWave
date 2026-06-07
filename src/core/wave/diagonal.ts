import type { DiagonalSource, DiagonalWaveConfig } from '../types';
import type { WaveField } from './types';

const TAU = Math.PI * 2;

type DiagonalParams = DiagonalWaveConfig | DiagonalSource;

function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function boundUnitInterval(value: number): number {
  if (value > 1) {
    return 1;
  }

  if (value < -1) {
    return -1;
  }

  return value;
}

export function diagonalPhase(params: DiagonalParams, x: number, y: number): number {
  const theta = degreesToRadians(params.theta);
  const phi = degreesToRadians(params.phi);
  const projected = x * Math.cos(theta) + y * Math.sin(theta);

  return (TAU * projected) / params.lambda + phi;
}

export function evaluateDiagonal(params: DiagonalParams, x: number, y: number): number {
  return boundUnitInterval(Math.sin(diagonalPhase(params, x, y)));
}

export function evaluateDiagonalDfdy(params: DiagonalParams, x: number, y: number): number {
  const theta = degreesToRadians(params.theta);
  const phase = diagonalPhase(params, x, y);

  return Math.cos(phase) * ((TAU * Math.sin(theta)) / params.lambda);
}

export function createDiagonalField(params: DiagonalParams): WaveField {
  return {
    f: (x, y) => evaluateDiagonal(params, x, y),
    dfdy: (x, y) => evaluateDiagonalDfdy(params, x, y),
  };
}
