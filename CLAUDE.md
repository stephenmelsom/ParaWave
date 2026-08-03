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

`src/state/` holds Svelte 5 rune-based store (`design.svelte.ts`). `DesignStore` is a Svelte 5 class using `$state`/`$derived` fields. Cheap derived state (fin count, validation, readouts) is computed synchronously from `core/` in `$derived`. Expensive state (observed depth range, segment count) comes from the latest `ComputeResult` posted by the bridge. Never add synchronous geometry computation to the cheap tier. Use `store.snapshot()` (wraps `$state.snapshot`) to get a plain `Design` for worker dispatch or export — never pass the reactive proxy directly. Note: `cheapValidation` tracks `lambda`/`kind`/dimensions but not `theta`/`phi`/`cx`/`cy`/`decay`; the `waveRevision` derived exists specifically to let effects subscribe to those fields.

`src/worker/` owns the geometry worker bridge. `src/three/` owns Three.js scene and picking. `src/ui/` owns Svelte components. `src/export/` owns ZIP, manifest, and cut-list generation.

`SheetConfig` (stock size, margin, clearance, label style) is deliberately **not** a member of `Design` — it is a sibling `$state` field on `DesignStore`. The recompute effect in `src/ui/App.svelte` subscribes by calling `store.snapshot()` _inside_ the `$effect`, and `$state.snapshot` deep-walks every property, so any field added to `Design` triggers a full adaptive re-fit when it changes. Sheet parameters cannot affect geometry, so moving them onto `Design` would re-fit every path on every sheet-slider tick. Non-`Design` validation inputs go through `ValidationOptions` (the `totalSegments` precedent).

## Worker pipeline

`GeometryBridge` in `src/worker/bridge.ts` implements single-in-flight with latest-wins coalescing (pending stash) and per-animation-frame batching. If `new Worker()` throws or the worker errors, it falls back transparently to synchronous execution via `computeGeometry()`. `usingSynchronousFallback` is the observable flag.

`computeExportGeometry()` is a separate one-shot promise path used at export time — it bypasses the live bridge, spawns a dedicated short-lived worker (terminated on resolution), and always runs at full fidelity with `needMesh: false`. If `new Worker()` fails it falls back to synchronous execution. `resultTransferList`/`meshTransferList` in `src/worker/compute.ts` declare typed-array buffers as transferables — keep this list in sync with `MeshBuffers` fields or silent copy-instead-of-transfer performance regressions result.

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
- `SHEET_WARN = 50`

`exportEnabled` derives from `cheapValidation`, so a hard block that needs `ComputeResult` data would show in the UI without disabling the button. Rules requiring worker output (FR-VAL.15/.16) must therefore be soft warnings; only rules computable from `Design` + `SheetConfig` alone (FR-VAL.12–.14) may be hard blocks.

## Nesting

`src/core/nest/` packs slats onto stock. The split is load-bearing: the worker emits `NestMetrics` (`3N - 1` numbers derived from the fitted paths) as part of `ComputeResult`, and `nestSheets()` does the actual packing on the main thread as O(N) arithmetic in a `$derived`. Sheet-parameter changes therefore never reach the worker, and preview and export run the identical function on identical inputs.

`matingBound()` is an **exact conservative upper bound**, not a sampled maximum. `hermiteCubic` puts `p1.y`/`p2.y` at exact thirds, so `y` is affine in `t` and `z(y)` is a plain cubic whose extrema are quadratic roots; splitting there makes each interval's maximum exact. `PROFILE_INTERVALS` only affects tightness (~0.25 mm slack), never correctness — parts cannot overlap at any density. Do not replace this with sampling.

Sheet SVGs bake the placement transform into the coordinates rather than emitting `transform=` on cut geometry — primitive CAM importers mishandle nested transforms. Parts are only ever rotated 180° (determinant +1, so winding is preserved and it is never a reflection). Labels are authored **mirrored**, because the document is Y-down and Carbide flips the whole import (FR-EXP.6); a label that reads upright in a browser would be engraved upside-down.

## CAM and g-code

`src/core/cam/` is a three-layer stack and the split is load-bearing: `offset.ts` is pure
geometry in the slat-local frame, `toolpath.ts` turns offset contours + tabs + labels into a
machine-space op list, and `post/` renders that list as text. A new controller is a new
`PostProcessor` and nothing else. G-code generation happens **only at export time on the main
thread** — never add it to a `$derived`, and note it needs no worker protocol change.

`offsetSlatContour()` is exact, not sampled, and deliberately avoids a clipping dependency. It
exploits the same graph structure `matingBound()` does: a slat is the region under `z = f(y)`,
so distance is at least `|Δy|` and the self-intersection prune only has to search a y-window
of ±radius — a binary search on the ascending front edge. Reflex corners are **mitered**;
emitting both overlapping offset endpoints instead leaves a sub-tolerance zigzag that reads as
a self-intersection. Offsetting commutes with placement (`placePoint` is a rigid motion), so
offset once per fin index in the local frame and place the result.

**Sheet coordinates are machine coordinates — there is no Y flip.** This is the single easiest
thing to get backwards. `placePoint` maps a slat's local y (zero at the bottom of the wall) to
an _increasing_ sheet y; the document is then rendered Y-down, which is why a slat looks
upside-down in a browser, and a CAM tool reading that y as a Y-up workspace coordinate is what
stands it back up (FR-EXP.6). Machine space is Y-up, so the identity does the same job. The
mirrored label glyphs unmirror by the same mechanism — adding a flip to "fix" the labels would
mirror every part top-to-bottom.

Because g-code offsets and the SVGs do not, `clearance` stops being a preference and becomes a
constraint: nesting places parts exactly `clearance` apart at their closest approach, so two
outward offsets collide when `clearance < toolDiameter` (FR-VAL.17, a hard block). Machine
rules block export but **not** geometry — see `blocksGeometry()`; a mistyped feed rate must not
freeze the preview. Each part gets its own contour, so the corridor between neighbours is cut
twice: correct, intentional, not a bug to "fix" without measuring.

Tabs are placed by arc length, not vertex index — the flattened contour's vertices bunch up
where the wave curves tightly, so index-spaced tabs would cluster at the peaks.

## Build and deployment

`vite.config.ts` sets `base: '/ParaWave/'`. All asset URLs are relative to this sub-path. Do not change this without also updating the GitHub Pages repository name or adding a custom domain.

CI runs: typecheck → lint → test → build → deploy to `gh-pages` branch.

## Assets

Fraunces and IBM Plex Mono are self-hosted as woff2 files under `src/assets/fonts/`. The npm packages `@fontsource/fraunces` and `@fontsource/ibm-plex-mono` are listed in devDependencies for reference; the runtime files are the vendored woff2 copies.

## Design system

All colours are CSS custom properties defined in `src/app.css`. Svelte components must not contain raw hex colours — the visual-design test enforces this.
