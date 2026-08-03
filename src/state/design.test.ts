import { describe, expect, it } from 'vitest';

import {
  createDefaultSheet,
  createDesignStore,
  LANDING_DESIGN,
  MAX_INTERFERENCE_SOURCES,
} from './design.svelte.ts';

describe('design store', () => {
  it('starts from the required landing interference design', () => {
    const store = createDesignStore();

    expect(store.design).toEqual(LANDING_DESIGN);
    expect(store.design.wave.kind).toBe('interference');

    if (store.design.wave.kind !== 'interference') {
      throw new Error('Expected interference landing design.');
    }

    expect(store.design.wave.sources).toHaveLength(2);
    expect(store.design.wave.sources[0]).toMatchObject({
      type: 'diagonal',
      theta: 30,
      lambda: 300,
      weight: 1,
    });
    expect(store.design.wave.sources[1]).toMatchObject({
      type: 'radial',
      cx: 450,
      cy: 300,
      lambda: 200,
      weight: 1,
    });
    expect(store.readouts.finCount).toBe(37);
    expect(store.exportEnabled).toBe(true);
  });

  it('toggles display units without changing canonical millimeter values', () => {
    const store = createDesignStore();
    const heightMm = store.design.H;
    const widthMm = store.design.W;

    store.setDisplayUnit('inch');

    expect(store.design.displayUnit).toBe('inch');
    expect(store.design.H).toBe(heightMm);
    expect(store.design.W).toBe(widthMm);
    expect(store.readouts.totalFootprint.height).toBe(heightMm);
    expect(store.readouts.totalFootprint.width).toBe(widthMm);
  });

  it('updates hard-block export state synchronously from core validation', () => {
    const store = createDesignStore();

    store.setDesignNumber('D', 4);

    expect(store.exportEnabled).toBe(false);
    expect(store.validation.hardBlocks).toContainEqual(
      expect.objectContaining({
        field: 'D',
        message: 'Max depth must be greater than minimum protrusion.',
      }),
    );
  });

  it('enforces the interference source cap in store actions', () => {
    const store = createDesignStore();

    for (let index = 0; index < 12; index += 1) {
      store.addInterferenceSource();
    }

    if (store.design.wave.kind !== 'interference') {
      throw new Error('Expected interference wave.');
    }

    expect(store.design.wave.sources).toHaveLength(MAX_INTERFERENCE_SOURCES);

    store.removeInterferenceSource(0);

    expect(store.design.wave.sources).toHaveLength(
      MAX_INTERFERENCE_SOURCES - 1,
    );
  });
});

describe('stock sheet state', () => {
  it('defaults to a thirty-inch square work area without blocking export', () => {
    const store = createDesignStore();

    expect(store.sheet).toEqual(createDefaultSheet());
    // 762 mm is exactly 30 inches.
    expect(store.sheet.width).toBe(762);
    expect(store.exportEnabled).toBe(true);
    // Stock config is machine state, deliberately kept off the design record.
    expect('sheet' in store.design).toBe(false);
  });

  it('updates sheet values and restores them on reset', () => {
    const store = createDesignStore();

    store.setSheetNumber('width', 1220);
    store.setSheetEnabled(false);
    store.setSheetLabelStyle('stroke');

    expect(store.sheet.width).toBe(1220);
    expect(store.sheet.enabled).toBe(false);
    expect(store.sheet.labelStyle).toBe('stroke');

    store.reset();

    expect(store.sheet).toEqual(createDefaultSheet());
  });

  it('has no nest result until geometry arrives, and none when nesting is off', () => {
    const store = createDesignStore();

    expect(store.nest).toBeNull();

    store.setComputeResult({
      generation: 1,
      paths: [],
      observedDepth: { min: 5, max: 60 },
      totalSegments: 0,
      nest: { widths: [], areas: [], mates: [], height: store.design.H },
    });

    expect(store.nest).not.toBeNull();

    store.setSheetEnabled(false);

    expect(store.nest).toBeNull();
  });

  it('reports no nest rather than a bogus one while metrics lag a height change', () => {
    const store = createDesignStore();

    store.setComputeResult({
      generation: 1,
      paths: [],
      observedDepth: { min: 5, max: 60 },
      totalSegments: 0,
      nest: { widths: [40], areas: [4000], mates: [], height: store.design.H },
    });

    expect(store.nest).not.toBeNull();

    // The worker has not caught up yet; treating the old metrics as current
    // would mark every slat unnestable and warn about it.
    store.setDesignNumber('H', 400);

    expect(store.nest).toBeNull();
    expect(
      store.validation.issues.some((issue) => issue.code === 'FR-VAL.15'),
    ).toBe(false);
  });

  it('blocks export synchronously when the sheet cannot hold a slat', () => {
    const store = createDesignStore();

    // No ComputeResult present: this must resolve in the cheap tier alone.
    store.setSheetNumber('height', 100);

    expect(store.computeResult).toBeNull();
    expect(store.exportEnabled).toBe(false);
    expect(
      store.validation.hardBlocks.some((issue) => issue.code === 'FR-VAL.13'),
    ).toBe(true);

    store.setSheetEnabled(false);

    expect(store.exportEnabled).toBe(true);
  });
});
