import type { BezierSeg, Design, FittedPath } from './types';

export const SVG_DECIMALS = 4;

export function formatCoordinate(value: number): string {
  return value.toFixed(SVG_DECIMALS);
}

function cubicCommand(segment: BezierSeg): string {
  return [
    'C',
    formatCoordinate(segment.p1.z),
    formatCoordinate(segment.p1.y),
    formatCoordinate(segment.p2.z),
    formatCoordinate(segment.p2.y),
    formatCoordinate(segment.p3.z),
    formatCoordinate(segment.p3.y),
  ].join(' ');
}

export function slatPathData(path: FittedPath): string {
  const first = path.segments[0];
  const last = path.segments.at(-1);

  if (!first || !last) {
    return 'M 0.0000 0.0000 Z';
  }

  const commands = [
    'M',
    formatCoordinate(0),
    formatCoordinate(first.p0.y),
    'L',
    formatCoordinate(first.p0.z),
    formatCoordinate(first.p0.y),
    ...path.segments.map(cubicCommand),
    'L',
    formatCoordinate(0),
    formatCoordinate(last.p3.y),
    'L',
    formatCoordinate(0),
    formatCoordinate(first.p0.y),
    'Z',
  ];

  return commands.join(' ');
}

export function slatSvg(path: FittedPath, design: Design): string {
  const width = formatCoordinate(design.D);
  const height = formatCoordinate(design.H);
  const d = slatPathData(path);

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}mm" height="${height}mm" viewBox="0 0 ${width} ${height}">`,
    `  <path d="${d}" fill="none" stroke="black" stroke-width="0.01"/>`,
    '</svg>',
  ].join('\n');
}

export function slatSvgs(paths: readonly FittedPath[], design: Design): string[] {
  return paths.map((path) => slatSvg(path, design));
}
