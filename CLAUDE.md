# ParaWave — AI knowledge base

## Commands

```sh
npm run dev        # Vite dev server (http://localhost:5173/ParaWave/)
npm run build      # production build → dist/
npx tsc --noEmit   # type-check only
npm run lint       # ESLint
npx vitest run     # all tests headless
npm run format     # Prettier
```

## Module conventions

`src/core/` is dependency-free TypeScript — no DOM, no Three.js, no Svelte. This is the determinism boundary. Tests under `core/` run headless in Node without a browser.

`src/state/` holds Svelte 5 rune-based store (`design.svelte.ts`). Cheap derived state (fin count, validation, readouts) is computed synchronously from `core/` in `$derived`. Expensive state (observed depth range, segment count) comes from the latest `ComputeResult` posted by the bridge. Never add synchronous geometry computation to the cheap tier.

`src/worker/` owns the geometry worker bridge. `src/three/` owns Three.js scene and picking. `src/ui/` owns Svelte components. `src/export/` owns ZIP and manifest generation.

## Worker pipeline

`GeometryBridge` in `src/worker/bridge.ts` implements single-in-flight with latest-wins coalescing (pending stash) and per-animation-frame batching. If `new Worker()` throws or the worker errors, it falls back transparently to synchronous execution via `computeGeometry()`. `usingSynchronousFallback` is the observable flag.

`computeExportGeometry()` is a separate one-shot promise path used at export time — it bypasses the live bridge and always runs at full fidelity.

## Geometry and curve fit

All stored coordinates are in millimetres. `Design.displayUnit` controls display only.

Re-fitting the same parameters is guaranteed to agree within `fitTolerance`, not to produce byte-identical output (TS-D2). Do not write tests that byte-compare SVG or path output — compare numerically within tolerance.

Adaptive fit tuning constants in `src/core/fit/adaptive.ts`:
- `SEED_PER_WAVELENGTH = 8`
- `MAX_DEPTH = 10`
- `MAX_SEED_INTERVALS = 50_000`

Soft-warning thresholds in `src/core/validation.ts`:
- `FIN_WARN = 400`
- `SEGMENT_WARN = 50_000`

## Build and deployment

`vite.config.ts` sets `base: '/ParaWave/'`. All asset URLs are relative to this sub-path. Do not change this without also updating the GitHub Pages repository name or adding a custom domain.

CI runs: typecheck → lint → test → build → deploy to `gh-pages` branch.

## Assets

Fraunces and IBM Plex Mono are self-hosted as woff2 files under `src/assets/fonts/`. The npm packages `@fontsource/fraunces` and `@fontsource/ibm-plex-mono` are listed in devDependencies for reference; the runtime files are the vendored woff2 copies.

## Design system

All colours are CSS custom properties defined in `src/app.css`. Svelte components must not contain raw hex colours — the visual-design test enforces this.
