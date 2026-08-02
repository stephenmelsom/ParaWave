import { describe, expect, it } from 'vitest';

import { computeNestMetrics, fitAllPaths, nestSheets } from '../core';
import type { Design, SheetConfig } from '../core/types';
import { createCutlistCsv } from './cutlist';

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

function buildCutlist(config: SheetConfig = sheet): {
  rows: string[];
  finCount: number;
} {
  const { paths } = fitAllPaths(design);
  const metrics = computeNestMetrics(paths, design.H);
  const nest = nestSheets(metrics, config, design.H);
  const csv = createCutlistCsv(nest, metrics, paths.length, design.H);

  expect(csv.endsWith('\n')).toBe(true);

  return { rows: csv.trimEnd().split('\n'), finCount: paths.length };
}

describe('cut list', () => {
  it('declares the expected header', () => {
    const { rows } = buildCutlist();

    expect(rows[0]).toBe(
      'sheet,label,fin_index,rotation_deg,x_mm,y_mm,part_width_mm,part_height_mm',
    );
  });

  it('lists every slat exactly once', () => {
    const { rows, finCount } = buildCutlist();

    expect(rows).toHaveLength(finCount + 1);

    const indices = rows
      .slice(1)
      .map((row) => Number(row.split(',')[2]))
      .sort((left, right) => left - right);

    expect(indices).toEqual(Array.from({ length: finCount }, (_, index) => index));
  });

  it('keeps every row the same shape with finite measurements', () => {
    const { rows } = buildCutlist();

    for (const row of rows) {
      expect(row.split(',')).toHaveLength(8);
    }

    for (const row of rows.slice(1)) {
      const cells = row.split(',');

      expect(Number.isFinite(Number(cells[4]))).toBe(true);
      expect(Number.isFinite(Number(cells[6]))).toBe(true);
      expect(cells[7]).toBe('600.0000');
      expect(['0', '180']).toContain(cells[3]);
    }
  });

  it('numbers sheets from one and matches the sheet SVG anchors', () => {
    const { paths } = fitAllPaths(design);
    const metrics = computeNestMetrics(paths, design.H);
    const nest = nestSheets(metrics, sheet, design.H);
    const rows = createCutlistCsv(nest, metrics, paths.length, design.H)
      .trimEnd()
      .split('\n')
      .slice(1);

    const firstPlacement = nest.sheets[0]?.placements[0];

    expect(firstPlacement).toBeDefined();

    const cells = (rows[0] ?? '').split(',');

    expect(cells[0]).toBe('1');
    expect(Number(cells[4])).toBeCloseTo(firstPlacement?.x ?? -1, 4);
    expect(Number(cells[5])).toBeCloseTo(firstPlacement?.y ?? -1, 4);
  });

  it('appends unnestable slats last with an empty sheet column', () => {
    const { paths } = fitAllPaths(design);
    const metrics = computeNestMetrics(paths, design.H);
    // A sheet only wide enough for a couple of slats leaves the rest unplaced.
    const narrow = nestSheets(metrics, { ...sheet, width: 120 }, design.H);

    expect(narrow.unplaced.length).toBe(0);

    const rows = createCutlistCsv(
      { ...narrow, sheets: [], sheetCount: 0, placedCount: 0, unplaced: [0, 1] },
      metrics,
      paths.length,
      design.H,
    )
      .trimEnd()
      .split('\n')
      .slice(1);

    expect(rows).toHaveLength(2);

    for (const row of rows) {
      const cells = row.split(',');

      expect(cells[0]).toBe('');
      expect(cells[3]).toBe('');
      expect(Number(cells[6])).toBeGreaterThan(0);
    }
  });
});
