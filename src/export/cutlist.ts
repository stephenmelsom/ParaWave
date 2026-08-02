import type { NestMetrics, NestResult } from '../core';
import { SVG_DECIMALS, partLabel } from '../core';

export const CUTLIST_FILENAME = 'cutlist.csv';

const COLUMNS = [
  'sheet',
  'label',
  'fin_index',
  'rotation_deg',
  'x_mm',
  'y_mm',
  'part_width_mm',
  'part_height_mm',
] as const;

function measurement(value: number): string {
  return value.toFixed(SVG_DECIMALS);
}

/**
 * Machine-readable cut list: which slat sits where on which sheet.
 *
 * `x_mm` / `y_mm` are the back-edge anchors baked into the sheet SVGs, so the
 * CSV is a verifiable shadow of the emitted geometry rather than a separate
 * derivation. Slats that could not be nested are listed last with an empty
 * `sheet` column so nothing is silently dropped.
 */
export function createCutlistCsv(
  nest: NestResult,
  metrics: NestMetrics,
  finCount: number,
  height: number,
): string {
  const rows: string[] = [COLUMNS.join(',')];

  for (const sheet of nest.sheets) {
    for (const placement of sheet.placements) {
      rows.push(
        [
          String(sheet.index + 1),
          partLabel(placement.finIndex, finCount),
          String(placement.finIndex),
          String(placement.rotation),
          measurement(placement.x),
          measurement(placement.y),
          measurement(metrics.widths[placement.finIndex] ?? 0),
          measurement(height),
        ].join(','),
      );
    }
  }

  for (const finIndex of nest.unplaced) {
    rows.push(
      [
        '',
        partLabel(finIndex, finCount),
        String(finIndex),
        '',
        '',
        '',
        measurement(metrics.widths[finIndex] ?? 0),
        measurement(height),
      ].join(','),
    );
  }

  return `${rows.join('\n')}\n`;
}
