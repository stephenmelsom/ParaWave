import JSZip from 'jszip';

import { CUTLIST_FILENAME } from './cutlist';
import { GCODE_DIR, gcodeFilename } from './gcode';
import {
  MANIFEST_FILENAME,
  serializeDesignManifest,
  type ParaWaveManifest,
} from './manifest';

export const EXPORT_ZIP_FILENAME = 'parawave-design.zip';
export const SLATS_DIR = 'slats/';
export const SHEETS_DIR = 'sheets/';

export { GCODE_DIR, gcodeFilename } from './gcode';

export interface CreateExportZipOptions {
  manifest: ParaWaveManifest;
  slatSvgs: readonly string[];
  sheetSvgs?: readonly string[];
  /** One post-processed program per nested sheet, in sheet order. */
  gcodePrograms?: readonly string[];
  /** Extension for the g-code files, without a dot. Defaults to `nc`. */
  gcodeExtension?: string;
  cutlistCsv?: string;
}

export function slatFilename(index: number, finCount: number): string {
  if (!Number.isInteger(index) || index < 0 || index >= finCount) {
    throw new RangeError('Slat index must be inside the exported fin range.');
  }

  const width = Math.max(3, String(finCount).length);
  return `slat_${String(index + 1).padStart(width, '0')}.svg`;
}

export function sheetFilename(index: number, sheetCount: number): string {
  if (!Number.isInteger(index) || index < 0 || index >= sheetCount) {
    throw new RangeError(
      'Sheet index must be inside the exported sheet range.',
    );
  }

  const width = Math.max(3, String(sheetCount).length);
  return `sheet_${String(index + 1).padStart(width, '0')}.svg`;
}

export async function createExportZip({
  manifest,
  slatSvgs,
  sheetSvgs,
  gcodePrograms,
  gcodeExtension = 'nc',
  cutlistCsv,
}: CreateExportZipOptions): Promise<Blob> {
  if (slatSvgs.length !== manifest.computed.finCount) {
    throw new Error('SVG count must match the manifest fin count.');
  }

  if (
    sheetSvgs &&
    sheetSvgs.length !== (manifest.computed.nesting?.sheetCount ?? -1)
  ) {
    throw new Error('Sheet SVG count must match the manifest sheet count.');
  }

  if (
    gcodePrograms &&
    gcodePrograms.length !== (manifest.computed.nesting?.sheetCount ?? -1)
  ) {
    throw new Error(
      'G-code program count must match the manifest sheet count.',
    );
  }

  const archive = new JSZip();

  // Nested sheets first — they are what the user opens to cut.
  sheetSvgs?.forEach((svg, index) => {
    archive.file(SHEETS_DIR + sheetFilename(index, sheetSvgs.length), svg);
  });
  gcodePrograms?.forEach((program, index) => {
    archive.file(
      GCODE_DIR + gcodeFilename(index, gcodePrograms.length, gcodeExtension),
      program,
    );
  });
  slatSvgs.forEach((svg, index) => {
    archive.file(SLATS_DIR + slatFilename(index, slatSvgs.length), svg);
  });

  if (cutlistCsv !== undefined) {
    archive.file(CUTLIST_FILENAME, cutlistCsv);
  }

  archive.file(MANIFEST_FILENAME, serializeDesignManifest(manifest));

  return archive.generateAsync({
    type: 'blob',
    mimeType: 'application/zip',
    compression: 'DEFLATE',
    compressionOptions: {
      level: 6,
    },
  });
}

export function downloadExportZip(
  archive: Blob,
  filename = EXPORT_ZIP_FILENAME,
): void {
  const url = URL.createObjectURL(archive);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.hidden = true;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();

  globalThis.setTimeout(() => URL.revokeObjectURL(url), 30_000);
}
