import { describe, expect, it } from 'vitest';

import { fitAllPaths } from './fit/adaptive';
import { computeNestMetrics } from './nest/profile';
import { nestSheets } from './nest/pack';
import type { NestPlacement, NestResult } from './nest/pack';
import {
  partLabel,
  placedPathData,
  sheetSvg,
  sheetSvgs,
  strokeLabelPathData,
} from './sheet-svg';
import { slatPathData } from './svg';
import type { Design, FittedPath, SheetConfig } from './types';

const design: Design = {
  H: 600,
  W: 900,
  D: 60,
  pMin: 5,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.05,
  displayUnit: 'mm',
  wave: {
    kind: 'diagonal',
    theta: 35,
    lambda: 220,
    phi: 10,
  },
};

const sheet: SheetConfig = {
  enabled: true,
  width: 762,
  height: 762,
  margin: 10,
  clearance: 6,
  labelStyle: 'text',
};

function build(config: SheetConfig = sheet): {
  paths: FittedPath[];
  nest: NestResult;
  svg: string;
} {
  const { paths } = fitAllPaths(design);
  const metrics = computeNestMetrics(paths, design.H);
  const nest = nestSheets(metrics, config, design.H);
  const first = nest.sheets[0];

  if (!first) {
    throw new Error('expected at least one nested sheet');
  }

  return {
    paths,
    nest,
    svg: sheetSvg(first, paths, {
      sheet: config,
      height: design.H,
      finCount: paths.length,
    }),
  };
}

describe('nested sheet SVG', () => {
  it('declares physical millimetres and a matching viewBox', () => {
    const { svg } = build();

    expect(svg).toContain('width="762.0000mm" height="762.0000mm"');
    expect(svg).toContain('viewBox="0 0 762.0000 762.0000"');
  });

  it('emits one path per placed part inside a single parts group', () => {
    const { nest, svg } = build();
    const first = nest.sheets[0] as NestResult['sheets'][number];

    expect(svg.match(/<g id="parts">/g)).toHaveLength(1);
    expect(svg.match(/<g id="stock">/g)).toHaveLength(1);
    expect(svg.match(/<g id="labels"/g)).toHaveLength(1);
    expect(svg.match(/<path id="part-/g)).toHaveLength(first.placements.length);
    expect(svg.match(/<text /g)).toHaveLength(first.placements.length);
  });

  it('carries no transform on cut geometry', () => {
    const { svg } = build();
    const parts = svg.slice(svg.indexOf('<g id="parts">'), svg.indexOf('</g>', svg.indexOf('<g id="parts">')));

    expect(parts).not.toMatch(/transform=/);
  });

  it('restricts path data to the command subset primitive importers handle', () => {
    const { svg } = build();
    const commands = [...svg.matchAll(/ d="([^"]+)"/g)].map((match) => match[1] ?? '');

    expect(commands.length).toBeGreaterThan(0);

    for (const data of commands) {
      expect(data).toMatch(/^[MLCZ0-9.\-\s]+$/);
    }

    expect(svg).not.toContain('<style');
    expect(svg).not.toContain('class=');
    expect(svg).not.toContain('<defs');
    expect(svg).not.toContain('<use');
  });

  it('keeps every emitted coordinate finite and inside the stock', () => {
    const { svg } = build();
    const commands = [...svg.matchAll(/<path id="part-[^"]+" [^>]*d="([^"]+)"/g)];

    expect(commands.length).toBeGreaterThan(0);

    for (const match of commands) {
      const numbers = (match[1] ?? '').match(/-?\d+\.\d+/g) ?? [];

      numbers.forEach((token, index) => {
        const value = Number(token);

        expect(Number.isFinite(value)).toBe(true);
        expect(value).toBeGreaterThanOrEqual(-1e-6);
        expect(value).toBeLessThanOrEqual(
          (index % 2 === 0 ? sheet.width : sheet.height) + 1e-6,
        );
      });
    }
  });

  it('reproduces the per-slat geometry at the identity placement', () => {
    const { paths } = fitAllPaths(design);
    const path = paths[0] as FittedPath;
    const placement: NestPlacement = { finIndex: 0, x: 0, y: 0, rotation: 0, row: 0 };

    // Both emitters derive from the same FittedPath in the same process, so
    // this locks them together without re-fitting anything.
    expect(placedPathData(path, placement, design.H)).toBe(slatPathData(path));
  });

  it('rotates by 180 degrees rather than mirroring', () => {
    const { paths } = fitAllPaths(design);
    const path = paths[0] as FittedPath;
    const first = path.segments[0];

    expect(first).toBeDefined();

    const placement: NestPlacement = { finIndex: 0, x: 200, y: 50, rotation: 180, row: 0 };
    const data = placedPathData(path, placement, design.H);
    const start = data.match(/^M (-?\d+\.\d+) (-?\d+\.\d+)/);

    expect(start).not.toBeNull();
    // Back edge (local z = 0) maps to x, and local y maps to y + H - y.
    expect(Number(start?.[1])).toBeCloseTo(200, 6);
    expect(Number(start?.[2])).toBeCloseTo(
      50 + design.H - (first as { p0: { y: number } }).p0.y,
      6,
    );
  });

  it('labels parts to match the per-slat filenames', () => {
    const { nest, paths } = build();
    const svg = sheetSvg(nest.sheets[0] as NestResult['sheets'][number], paths, {
      sheet,
      height: design.H,
      finCount: paths.length,
    });

    expect(partLabel(0, paths.length)).toBe('001');
    expect(svg).toContain('>001</text>');
    expect(svg).toContain('id="part-001"');
  });

  it.each(['text', 'stroke'] as const)(
    'anchors every %s label inside the part it names',
    (labelStyle) => {
      const config = { ...sheet, labelStyle };
      const { paths, nest } = build(config);
      const svg = sheetSvg(nest.sheets[0] as NestResult['sheets'][number], paths, {
        sheet: config,
        height: design.H,
        finCount: paths.length,
      });
      const placements = (nest.sheets[0] as NestResult['sheets'][number]).placements;

      // Labels must share the parts' coordinate frame — mirroring about the
      // sheet instead of about each anchor would scatter them elsewhere.
      const anchors =
        labelStyle === 'text'
          ? [...svg.matchAll(/translate\((-?\d+\.\d+) (-?\d+\.\d+)\)/g)].map((match) => ({
              x: Number(match[1]),
              y: Number(match[2]),
            }))
          : [...svg.matchAll(/<g id="labels">([\s\S]*)<\/g>/g)]
              .flatMap((match) => [...(match[1] ?? '').matchAll(/M (-?\d+\.\d+) (-?\d+\.\d+)/g)])
              .map((match) => ({ x: Number(match[1]), y: Number(match[2]) }));

      expect(anchors.length).toBeGreaterThan(0);

      for (const anchor of anchors) {
        const nearest = placements.some(
          (placement) =>
            Math.abs(anchor.x - placement.x) <= design.D + 1 &&
            anchor.y >= placement.y - 10 &&
            anchor.y <= placement.y + design.H + 10,
        );

        expect(nearest).toBe(true);
      }
    },
  );

  it('authors both label styles mirrored so they read upright after CAM import', () => {
    // The document is Y-down and Carbide flips it wholesale, so glyphs must be
    // mirrored in the file. A style that reads upright in a plain SVG viewer
    // would be engraved upside-down.
    const { svg: textSvg } = build();

    expect(textSvg).toMatch(/<text transform="translate\([^)]*\) scale\(1 -1\)"/);

    // '7' has exactly one horizontal stroke: the bar across its top. Mirrored
    // authoring puts that bar at the larger y.
    const strokes = strokeLabelPathData('7', 0, 0, 10).map((d) => {
      const [, x1, y1, x2, y2] = d.match(
        /M (-?\d+\.\d+) (-?\d+\.\d+) L (-?\d+\.\d+) (-?\d+\.\d+)/,
      ) as RegExpMatchArray;

      return { x1: Number(x1), y1: Number(y1), x2: Number(x2), y2: Number(y2) };
    });

    const horizontals = strokes.filter((stroke) => stroke.y1 === stroke.y2);
    const allY = strokes.flatMap((stroke) => [stroke.y1, stroke.y2]);

    expect(horizontals).toHaveLength(1);
    expect(horizontals[0]?.y1).toBe(Math.max(...allY));
    // Glyph is centred on its anchor.
    expect(Math.max(...allY) + Math.min(...allY)).toBeCloseTo(0, 9);
  });

  it('emits stroke-font labels as ordinary paths with no transforms at all', () => {
    const { svg } = build({ ...sheet, labelStyle: 'stroke' });

    expect(svg).not.toContain('<text');
    expect(svg).not.toMatch(/transform=/);
    expect(svg).toContain('<g id="labels">');
  });

  it('omits the labels group entirely when labels are turned off', () => {
    const { svg } = build({ ...sheet, labelStyle: 'none' });

    expect(svg).not.toContain('id="labels"');
    expect(svg).toContain('<g id="parts">');
  });

  it('produces one SVG per nested sheet', () => {
    const { paths, nest } = build();
    const svgs = sheetSvgs(nest, paths, {
      sheet,
      height: design.H,
      finCount: paths.length,
    });

    expect(svgs).toHaveLength(nest.sheetCount);
    expect(svgs[0]).toContain(`sheet 1 of ${nest.sheetCount}`);
    expect(svgs.at(-1)).toContain(`sheet ${nest.sheetCount} of ${nest.sheetCount}`);
  });
});
