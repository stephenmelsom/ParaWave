import type { RadialSource, RadialWaveConfig } from '../types';
import type { WaveField } from './types';

const TAU = Math.PI * 2;

type RadialParams = RadialWaveConfig | RadialSource;

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

export function radialDecayCoefficient(params: RadialParams): number {
  if (params.decay <= 0 || params.lambda <= 0) {
    return 0;
  }

  return params.decay / params.lambda;
}

export function radialRadius(params: RadialParams, x: number, y: number): number {
  return Math.hypot(x - params.cx, y - params.cy);
}

export function radialPhase(params: RadialParams, radius: number): number {
  return (TAU * radius) / params.lambda + degreesToRadians(params.phi);
}

export function evaluateRadial(params: RadialParams, x: number, y: number): number {
  const radius = radialRadius(params, x, y);
  const amplitude = Math.exp(-radialDecayCoefficient(params) * radius);

  return boundUnitInterval(amplitude * Math.sin(radialPhase(params, radius)));
}

export function evaluateRadialDfdy(
  params: RadialParams,
  x: number,
  y: number,
  radialDirectionOverride?: -1 | 1,
): number {
  const radius = radialRadius(params, x, y);

  if (radius === 0 && radialDirectionOverride === undefined) {
    return 0;
  }

  const direction =
    radialDirectionOverride ?? ((y - params.cy) / radius as number);
  const decay = radialDecayCoefficient(params);
  const amplitude = Math.exp(-decay * radius);
  const phase = radialPhase(params, radius);
  const dByDr =
    amplitude * Math.cos(phase) * (TAU / params.lambda) -
    decay * amplitude * Math.sin(phase);

  return direction * dByDr;
}

export function createRadialField(params: RadialParams): WaveField {
  return {
    f: (x, y) => evaluateRadial(params, x, y),
    dfdy: (x, y) => evaluateRadialDfdy(params, x, y),
  };
}
