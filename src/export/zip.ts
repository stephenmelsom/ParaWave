import JSZip from 'jszip';

import {
  MANIFEST_FILENAME,
  serializeDesignManifest,
  type ParaWaveManifest,
} from './manifest';

export const EXPORT_ZIP_FILENAME = 'parawave-design.zip';

export interface CreateExportZipOptions {
  manifest: ParaWaveManifest;
  slatSvgs: readonly string[];
}

export function slatFilename(index: number, finCount: number): string {
  if (!Number.isInteger(index) || index < 0 || index >= finCount) {
    throw new RangeError('Slat index must be inside the exported fin range.');
  }

  const width = Math.max(3, String(finCount).length);
  return `slat_${String(index + 1).padStart(width, '0')}.svg`;
}

export async function createExportZip({
  manifest,
  slatSvgs,
}: CreateExportZipOptions): Promise<Blob> {
  if (slatSvgs.length !== manifest.computed.finCount) {
    throw new Error('SVG count must match the manifest fin count.');
  }

  const archive = new JSZip();

  slatSvgs.forEach((svg, index) => {
    archive.file(slatFilename(index, slatSvgs.length), svg);
  });
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

  globalThis.setTimeout(() => URL.revokeObjectURL(url), 0);
}
