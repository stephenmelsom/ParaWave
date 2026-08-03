/**
 * G-code export: one program per nested sheet.
 *
 * The analogue of `sheetSvgs` — same nest, same paths, same placements, but
 * post-processed into machine control rather than drawn. Both routes call the
 * identical `nestSheets` result, so the `.nc` a machine runs and the `.svg` a
 * human checks describe the same layout by construction.
 */

import { postProcessorFor } from '../core/cam/post';
import {
  buildSheetProgram,
  type SheetProgramContext,
} from '../core/cam/toolpath';
import type { NestResult } from '../core/nest/pack';
import type { FittedPath, MachineConfig, SheetConfig } from '../core/types';

export const GCODE_DIR = 'gcode/';

export interface GcodeContext {
  sheet: SheetConfig;
  machine: MachineConfig;
  /** Design height H, in mm. */
  height: number;
  /** Stock thickness — the design's slat width, in mm. */
  thickness: number;
  finCount: number;
}

/** Matches `sheetFilename`'s padding so the two cross-reference. */
export function gcodeFilename(
  index: number,
  sheetCount: number,
  extension = 'nc',
): string {
  if (!Number.isInteger(index) || index < 0 || index >= sheetCount) {
    throw new RangeError(
      'Sheet index must be inside the exported sheet range.',
    );
  }

  const width = Math.max(3, String(sheetCount).length);

  return `sheet_${String(index + 1).padStart(width, '0')}.${extension}`;
}

/** One g-code program per nested sheet, in sheet order. */
export function sheetGcodePrograms(
  nest: NestResult,
  paths: readonly FittedPath[],
  context: GcodeContext,
): string[] {
  const post = postProcessorFor(context.machine.post);

  return nest.sheets.map((sheet) => {
    const programContext: SheetProgramContext = {
      sheet: context.sheet,
      machine: context.machine,
      height: context.height,
      thickness: context.thickness,
      finCount: context.finCount,
      sheetCount: nest.sheetCount,
    };

    return post.emit(buildSheetProgram(sheet, paths, programContext));
  });
}

/** File extension the configured post produces, without a dot. */
export function gcodeExtension(machine: MachineConfig): string {
  return postProcessorFor(machine.post).extension;
}
