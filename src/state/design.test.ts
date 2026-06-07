import { describe, expect, it } from 'vitest';

import {
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

    expect(store.design.wave.sources).toHaveLength(MAX_INTERFERENCE_SOURCES - 1);
  });
});
