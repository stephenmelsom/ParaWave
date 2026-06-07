import { describe, expect, it } from 'vitest';

import { detectWebGLSupport, prefersReducedMotion } from './scene';

describe('WebGL detection', () => {
  it('returns true when a WebGL context can be created', () => {
    expect(
      detectWebGLSupport(() => ({
        getContext: (kind: string) => (kind === 'webgl2' ? {} : null),
      })),
    ).toBe(true);
  });

  it('returns false when contexts are unavailable or context creation throws', () => {
    expect(
      detectWebGLSupport(() => ({
        getContext: () => null,
      })),
    ).toBe(false);
    expect(
      detectWebGLSupport(() => {
        throw new Error('blocked');
      }),
    ).toBe(false);
  });
});

describe('scene motion preferences', () => {
  it('disables automatic scene motion when reduced motion is requested', () => {
    expect(prefersReducedMotion(() => ({ matches: true }))).toBe(true);
    expect(prefersReducedMotion(() => ({ matches: false }))).toBe(false);
    expect(prefersReducedMotion(undefined)).toBe(false);
  });
});
