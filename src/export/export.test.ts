import JSZip from 'jszip';
import { describe, expect, it } from 'vitest';

import type { Design, SheetConfig } from '../core/types';
import {
  APP_VERSION,
  CUTLIST_FILENAME,
  MANIFEST_FILENAME,
  SHEETS_DIR,
  SLATS_DIR,
  createDesignManifest,
  createExportZip,
  serializeDesignManifest,
  sheetFilename,
  slatFilename,
} from './index';

const sheet: SheetConfig = {
  enabled: true,
  width: 762,
  height: 762,
  margin: 10,
  clearance: 6,
  labelStyle: 'text',
};

const design: Design = {
  H: 600,
  W: 900,
  D: 60,
  pMin: 5,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.05,
  displayUnit: 'inch',
  wave: {
    kind: 'interference',
    sources: [
      {
        type: 'diagonal',
        theta: 30,
        lambda: 300,
        phi: 0,
        weight: 1,
      },
      {
        type: 'radial',
        cx: 450,
        cy: 300,
        lambda: 200,
        phi: 15,
        decay: 0.1,
        weight: -0.5,
      },
    ],
  },
};

describe('export manifest', () => {
  it('captures every design parameter, units, fin count, version, and date', () => {
    const exportedAt = new Date('2026-06-07T16:30:00.000Z');
    const manifest = createDesignManifest(design, 37, { exportedAt });

    expect(manifest).toEqual({
      schemaVersion: 3,
      app: {
        name: 'ParaWave',
        version: APP_VERSION,
      },
      exportedAt: '2026-06-07T16:30:00.000Z',
      units: {
        geometry: 'mm',
        display: 'inch',
        angles: 'degrees',
      },
      computed: {
        finCount: 37,
        nesting: null,
      },
      machine: null,
      stock: null,
      design,
    });
    expect(serializeDesignManifest(manifest).endsWith('\n')).toBe(true);
  });

  it('records stock configuration and nesting results as separate sections', () => {
    const manifest = createDesignManifest(design, 3, {
      stock: sheet,
      nest: {
        sheets: [],
        sheetCount: 2,
        rowsPerSheet: 1,
        placedCount: 3,
        utilization: 0.42,
        unplaced: [7],
      },
    });

    expect(manifest.stock).toEqual(sheet);
    expect(manifest.computed.nesting).toEqual({
      sheetCount: 2,
      rowsPerSheet: 1,
      placedCount: 3,
      unplacedFinIndices: [7],
      utilization: 0.42,
    });
    // The design record stays a pure design — stock is machine configuration.
    expect('sheet' in manifest.design).toBe(false);
  });

  it('takes a provenance snapshot instead of retaining mutable design state', () => {
    const manifest = createDesignManifest(design, 37);
    design.H = 999;

    expect(manifest.design.H).toBe(600);
    design.H = 600;
  });

  it('rejects negative or fractional fin counts', () => {
    expect(() => createDesignManifest(design, -1)).toThrow(RangeError);
    expect(() => createDesignManifest(design, 0.5)).toThrow(RangeError);
  });
});

describe('zip export', () => {
  it('packages left-to-right SVGs with padded names and the manifest', async () => {
    const manifest = createDesignManifest(design, 3, {
      exportedAt: '2026-06-07T16:30:00.000Z',
    });
    const svgs = ['<svg>left</svg>', '<svg>middle</svg>', '<svg>right</svg>'];
    const blob = await createExportZip({ manifest, slatSvgs: svgs });
    const archive = await JSZip.loadAsync(await blob.arrayBuffer());

    expect(Object.keys(archive.files)).toEqual([
      SLATS_DIR,
      'slats/slat_001.svg',
      'slats/slat_002.svg',
      'slats/slat_003.svg',
      MANIFEST_FILENAME,
    ]);
    expect(await archive.file('slats/slat_001.svg')?.async('string')).toBe(
      svgs[0],
    );
    expect(await archive.file('slats/slat_003.svg')?.async('string')).toBe(
      svgs[2],
    );
    expect(
      JSON.parse(
        (await archive.file(MANIFEST_FILENAME)?.async('string')) ?? '{}',
      ),
    ).toEqual(manifest);
  });

  it('packages nested sheets and the cut list alongside the per-slat files', async () => {
    const manifest = createDesignManifest(design, 3, {
      exportedAt: '2026-06-07T16:30:00.000Z',
      stock: sheet,
      nest: {
        sheets: [],
        sheetCount: 2,
        rowsPerSheet: 1,
        placedCount: 3,
        utilization: 0.42,
        unplaced: [],
      },
    });
    const blob = await createExportZip({
      manifest,
      slatSvgs: ['<svg>a</svg>', '<svg>b</svg>', '<svg>c</svg>'],
      sheetSvgs: ['<svg>sheet one</svg>', '<svg>sheet two</svg>'],
      cutlistCsv: 'sheet,label\n1,001\n',
    });
    const archive = await JSZip.loadAsync(await blob.arrayBuffer());

    expect(Object.keys(archive.files)).toEqual([
      SHEETS_DIR,
      'sheets/sheet_001.svg',
      'sheets/sheet_002.svg',
      SLATS_DIR,
      'slats/slat_001.svg',
      'slats/slat_002.svg',
      'slats/slat_003.svg',
      CUTLIST_FILENAME,
      MANIFEST_FILENAME,
    ]);
    expect(await archive.file('sheets/sheet_002.svg')?.async('string')).toBe(
      '<svg>sheet two</svg>',
    );
    expect(await archive.file(CUTLIST_FILENAME)?.async('string')).toBe(
      'sheet,label\n1,001\n',
    );
  });

  it('uses the sheet-count digit width above three digits', () => {
    expect(sheetFilename(0, 1000)).toBe('sheet_0001.svg');
    expect(sheetFilename(0, 2)).toBe('sheet_001.svg');
  });

  it('rejects out-of-range sheet indices', () => {
    expect(() => sheetFilename(-1, 4)).toThrow(RangeError);
    expect(() => sheetFilename(4, 4)).toThrow(RangeError);
    expect(() => sheetFilename(0.5, 4)).toThrow(RangeError);
  });

  it('rejects archives whose sheet count disagrees with the manifest', async () => {
    const manifest = createDesignManifest(design, 1, {
      stock: sheet,
      nest: {
        sheets: [],
        sheetCount: 3,
        rowsPerSheet: 1,
        placedCount: 1,
        utilization: 0.1,
        unplaced: [],
      },
    });

    await expect(
      createExportZip({
        manifest,
        slatSvgs: ['<svg />'],
        sheetSvgs: ['<svg />'],
      }),
    ).rejects.toThrow('Sheet SVG count must match the manifest sheet count.');
  });

  it('uses the fin-count digit width above three digits', () => {
    expect(slatFilename(0, 1000)).toBe('slat_0001.svg');
    expect(slatFilename(999, 1000)).toBe('slat_1000.svg');
  });

  it('rejects out-of-range slat indices', () => {
    expect(() => slatFilename(-1, 10)).toThrow(RangeError);
    expect(() => slatFilename(10, 10)).toThrow(RangeError);
    expect(() => slatFilename(0.5, 10)).toThrow(RangeError);
  });

  it('rejects archives whose SVG count disagrees with the manifest', async () => {
    const manifest = createDesignManifest(design, 2);

    await expect(
      createExportZip({ manifest, slatSvgs: ['<svg />'] }),
    ).rejects.toThrow('SVG count must match the manifest fin count.');
  });
});
