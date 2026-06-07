/// <reference types="node" />

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

const uiDirectory = fileURLToPath(new URL('.', import.meta.url));

function read(relativePath: string): string {
  return readFileSync(new URL(relativePath, import.meta.url), 'utf8');
}

describe('visual design contract', () => {
  it('defines the complete color token set in the global stylesheet', () => {
    const css = read('../app.css');
    const tokens = [
      '--bg',
      '--bg-2',
      '--panel',
      '--panel-2',
      '--edge',
      '--edge-strong',
      '--ink',
      '--ink-dim',
      '--ink-faint',
      '--gold-deep',
      '--gold',
      '--gold-bright',
      '--gold-glow',
      '--wave-shadow',
      '--wave-mid',
      '--wave-highlight',
      '--cool',
      '--cool-dim',
      '--grid',
      '--grid-strong',
      '--danger',
      '--danger-bg',
      '--warn',
      '--warn-bg',
      '--ok',
      '--grain-opacity',
    ];

    for (const token of tokens) {
      expect(css).toContain(`${token}:`);
    }
  });

  it('keeps raw hex colors out of Svelte component styles', () => {
    const components = readdirSync(uiDirectory).filter((name) =>
      name.endsWith('.svelte'),
    );

    for (const component of components) {
      expect(readFileSync(`${uiDirectory}/${component}`, 'utf8')).not.toMatch(
        /#[0-9a-f]{3,8}\b/i,
      );
    }
  });

  it('ships the required responsive and reduced-motion rules', () => {
    const app = read('App.svelte');
    const panel = read('ParamPanel.svelte');

    expect(app).toContain('@media (max-width: 1199px)');
    expect(app).toContain('@media (max-width: 819px)');
    expect(app).toContain('@media (max-width: 599px)');
    expect(app).toContain('@media (prefers-reduced-motion: reduce)');
    expect(app).toContain('grid-template-areas');
    expect(panel).toContain('::-webkit-slider-thumb');
    expect(panel).toContain('--range-fill');
  });
});
