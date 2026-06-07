import { describe, expect, it } from 'vitest';

import { detectWebGLSupport } from './scene';

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
