import JSZip from 'jszip';
import { describe, expect, it } from 'vitest';

import type { Design } from '../core/types';
import {
  APP_VERSION,
  MANIFEST_FILENAME,
  createDesignManifest,
  createExportZip,
  serializeDesignManifest,
  slatFilename,
} from './index';

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
      schemaVersion: 1,
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
      },
      design,
    });
    expect(serializeDesignManifest(manifest).endsWith('\n')).toBe(true);
  });

  it('takes a provenance snapshot instead of retaining mutable design state', () => {
    const manifest = createDesignManifest(design, 37);
    design.H = 999;

    expect(manifest.design.H).toBe(600);
    design.H = 600;
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
      'slat_001.svg',
      'slat_002.svg',
      'slat_003.svg',
      MANIFEST_FILENAME,
    ]);
    expect(await archive.file('slat_001.svg')?.async('string')).toBe(svgs[0]);
    expect(await archive.file('slat_003.svg')?.async('string')).toBe(svgs[2]);
    expect(
      JSON.parse(
        (await archive.file(MANIFEST_FILENAME)?.async('string')) ?? '{}',
      ),
    ).toEqual(manifest);
  });

  it('uses the fin-count digit width above three digits', () => {
    expect(slatFilename(0, 1000)).toBe('slat_0001.svg');
    expect(slatFilename(999, 1000)).toBe('slat_1000.svg');
  });

  it('rejects archives whose SVG count disagrees with the manifest', async () => {
    const manifest = createDesignManifest(design, 2);

    await expect(
      createExportZip({ manifest, slatSvgs: ['<svg />'] }),
    ).rejects.toThrow('SVG count must match the manifest fin count.');
  });
});
