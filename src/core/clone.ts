import type { Design } from './types';

export function cloneDesign(design: Design): Design {
  if (typeof globalThis.structuredClone === 'function') {
    return globalThis.structuredClone(design) as Design;
  }

  return JSON.parse(JSON.stringify(design)) as Design;
}
