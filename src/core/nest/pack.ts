import type { NestMetrics, SheetConfig } from '../types';

/** Positional tolerance in mm. */
const EPSILON = 1e-9;

/** A single slat placed on a sheet. */
export interface NestPlacement {
  finIndex: number;
  /**
   * Sheet-space x of the slat's straight back edge, in mm.
   *
   * A 0° part occupies `[x, x + f(y)]`; a 180° part occupies `[x - f(H - y), x]`.
   */
  x: number;
  /** Sheet-space y of the slat's local y = 0 edge, in mm. */
  y: number;
  rotation: 0 | 180;
  /** 0-based row within the sheet. */
  row: number;
}

export interface NestedSheet {
  index: number;
  placements: NestPlacement[];
  /** Rightmost occupied x, measured from the left margin. */
  usedWidth: number;
  usedHeight: number;
  /** Part area over gross sheet area. */
  utilization: number;
}

export interface NestResult {
  sheets: NestedSheet[];
  sheetCount: number;
  rowsPerSheet: number;
  placedCount: number;
  /** Part area over gross area of every sheet used. */
  utilization: number;
  /** Fin indices that cannot fit the usable area at all. */
  unplaced: number[];
}

function unplaceAll(count: number, rowsPerSheet = 0): NestResult {
  return {
    sheets: [],
    sheetCount: 0,
    rowsPerSheet,
    placedCount: 0,
    utilization: 0,
    unplaced: Array.from({ length: count }, (_, index) => index),
  };
}

/**
 * Rows of slats per sheet, accounting for the edge margin and inter-row clearance.
 *
 * `k` rows need `k * slatHeight + (k - 1) * clearance <= usableHeight`.
 */
export function rowsPerSheetFor(sheet: SheetConfig, slatHeight: number): number {
  const usableHeight = sheet.height - 2 * sheet.margin;
  const pitch = slatHeight + sheet.clearance;

  if (!(slatHeight > 0) || !(pitch > 0) || !Number.isFinite(usableHeight)) {
    return 0;
  }

  return Math.max(0, Math.floor((usableHeight + sheet.clearance) / pitch));
}

/**
 * Pack slats onto stock sheets.
 *
 * Slats are placed in fin-index order — which keeps assembly order intact and
 * puts similar-phase neighbours together — alternating 0° / 180° so that wavy
 * front edges interlock and flat back edges sit back-to-back at nothing but the
 * clearance. Rows of height `slatHeight` stack up the sheet.
 *
 * Pure arithmetic over `metrics`: O(N) adds and compares, safe to run
 * synchronously on every sheet-parameter change.
 */
export function nestSheets(
  metrics: NestMetrics,
  sheet: SheetConfig,
  slatHeight: number,
): NestResult {
  const count = metrics.widths.length;
  const rowsPerSheet = rowsPerSheetFor(sheet, slatHeight);

  // A stale ComputeResult (H changed but the worker has not caught up) would
  // otherwise produce a confidently wrong layout.
  const staleMetrics = Math.abs(metrics.height - slatHeight) > EPSILON;

  const usableWidth = sheet.width - 2 * sheet.margin;
  const grossArea = sheet.width * sheet.height;

  if (
    !sheet.enabled ||
    staleMetrics ||
    rowsPerSheet < 1 ||
    !(usableWidth > 0) ||
    !(grossArea > 0) ||
    !(sheet.clearance >= 0) ||
    !(sheet.margin >= 0)
  ) {
    return unplaceAll(count, rowsPerSheet);
  }

  const left = sheet.margin;
  const right = sheet.margin + usableWidth;
  const rowY = (row: number): number => sheet.margin + row * (slatHeight + sheet.clearance);

  const sheets: NestedSheet[] = [];
  const unplaced: number[] = [];

  let sheetPlacements: NestPlacement[] = [];
  let sheetArea = 0;
  let sheetRight = left;
  let sheetRows = 0;

  let row = 0;
  let rowEmpty = true;
  let previousFinIndex = -1;
  let previousRotation: 0 | 180 = 0;
  let previousX = 0;

  const closeSheet = (): void => {
    if (sheetPlacements.length === 0) {
      return;
    }

    sheets.push({
      index: sheets.length,
      placements: sheetPlacements,
      usedWidth: sheetRight - left,
      usedHeight:
        sheetRows > 0 ? sheetRows * slatHeight + (sheetRows - 1) * sheet.clearance : 0,
      utilization: sheetArea / grossArea,
    });

    sheetPlacements = [];
    sheetArea = 0;
    sheetRight = left;
    sheetRows = 0;
  };

  const startNewRow = (): void => {
    row += 1;

    if (row >= rowsPerSheet) {
      closeSheet();
      row = 0;
    }

    rowEmpty = true;
  };

  /**
   * Pitch between the previous part's anchor and this one when their wavy edges
   * face each other. `mates[i]` describes the pair `(i, i + 1)`; if a fin in
   * between was skipped as unplaceable, fall back to the always-valid pitch of
   * two separate bounding boxes.
   */
  const matingPitch = (finIndex: number, width: number): number => {
    if (previousFinIndex === finIndex - 1) {
      const mate = metrics.mates[previousFinIndex];

      if (mate !== undefined && Number.isFinite(mate)) {
        return mate;
      }
    }

    return (metrics.widths[previousFinIndex] ?? 0) + width;
  };

  for (let finIndex = 0; finIndex < count; finIndex += 1) {
    const width = metrics.widths[finIndex] ?? 0;

    if (!Number.isFinite(width) || width > usableWidth + EPSILON) {
      unplaced.push(finIndex);
      continue;
    }

    for (;;) {
      let rotation: 0 | 180;
      let x: number;
      let extent: number;

      if (rowEmpty) {
        rotation = 0;
        x = left;
        extent = left + width;
      } else if (previousRotation === 0) {
        // Wavy front edges face each other — the expensive pitch.
        rotation = 180;
        x = previousX + matingPitch(finIndex, width) + sheet.clearance;
        extent = x;
      } else {
        // Two flat back edges face each other — clearance alone.
        rotation = 0;
        x = previousX + sheet.clearance;
        extent = x + width;
      }

      if (extent > right + EPSILON) {
        if (rowEmpty) {
          // Cannot happen given the width filter above, but never spin.
          unplaced.push(finIndex);
          break;
        }

        startNewRow();
        continue;
      }

      if (rowEmpty) {
        sheetRows += 1;
      }

      sheetPlacements.push({ finIndex, x, y: rowY(row), rotation, row });
      sheetArea += metrics.areas[finIndex] ?? 0;
      sheetRight = Math.max(sheetRight, extent);

      rowEmpty = false;
      previousFinIndex = finIndex;
      previousRotation = rotation;
      previousX = x;
      break;
    }
  }

  closeSheet();

  const placedCount = sheets.reduce((total, entry) => total + entry.placements.length, 0);
  const placedArea = sheets.reduce((total, entry) => total + entry.utilization * grossArea, 0);

  return {
    sheets,
    sheetCount: sheets.length,
    rowsPerSheet,
    placedCount,
    utilization: sheets.length > 0 ? placedArea / (sheets.length * grossArea) : 0,
    unplaced,
  };
}
