# Plan: ParaWave — Wave Wall Art Generator

**Status:** Draft v1 · **Date:** 2026-06-07 · **Owner:** sjmelsom
**Companion to:** [`PRD.md`](../../specs/PRD.md) · [`REQUIREMENTS.md`](../../specs/REQUIREMENTS.md) · [`TECH_SPEC.md`](../../specs/TECH_SPEC.md) · [`DESIGN.md`](../../specs/DESIGN.md)

---

## Validation Commands

- `npm install`
- `npx tsc --noEmit`
- `npm run lint`
- `npx vitest run`
- `npm run build`

---

## Overview

Tasks are grouped into eight milestones that build on each other left-to-right: scaffold first,
pure geometry core second, then the worker pipeline, 3D/2D rendering, UI, export, visual polish,
and finally verification. Each task is small enough to complete in one sitting and maps to one or
more requirement IDs from the SRS or TECH_SPEC where relevant.

Check a box the moment its task is done. A milestone is complete when every box in it is checked.

## Dependency Order

```
M1 (scaffold) → M2 (core) → M3 (worker) → M4 (3D/2D) → M5 (UI/state)
                                                              ↓
                                                          M6 (export)
                                                              ↓
                                                          M7 (polish)
                                                              ↓
                                                          M8 (tests)
```

M2 tasks within a group (A–F) are mostly sequential; M4 and M5 can proceed in parallel once M3
is done. M7 can be layered incrementally across M4–M6 rather than deferred entirely to the end.

## Open Issues

These are carried from the SRS/TECH_SPEC and need a concrete value before the code that depends
on them can be considered finished:

| ID | Decide during | Issue |
|----|--------------|-------|
| OI-2 | Task 8 (V-1 import) | Confirm 0.05 mm tolerance default / 0.001 mm floor against Shapeoko/Nomad precision. |
| OI-3 | Task 5.11 + Task 8.14 | Confirm `K=8` source cap reproduces the `wave.jpg` look. |
| OI-4 | Task 5.4 build | Tune parameter ranges (SRS §5) against the physical piece. |
| OI-6 | Task 8.15 + profiling | Tune `FIN_WARN=400` and `SEGMENT_WARN≈50000` against a typical laptop. |
| new | Task 2.11 | Choose `SEED_PER_WAVELENGTH` and `MAX_DEPTH` so a worst-case short-λ design stays ≤ tolerance without pathological segment counts. Validate via Task 8.3. |
| DI-1 | Task 7.10 | Final hex token values after WCAG AA audit. |
| DI-3 | Task 7.5 / Task 7.8 | Validate grain overlay render cost; drop to static tiled asset if needed. |

---

### Task 1: Project scaffold & tooling

Goal: a running `vite dev` page with CI green before any feature code is written.

- [x] **1.1** Init Vite project with the Svelte 5 + TypeScript template; confirm `vite dev` serves a blank page. Set `base` in `vite.config.ts` to `/ParaWave/` for GitHub Pages sub-path.
- [x] **1.2** Enable TypeScript `strict` + `noUncheckedIndexedAccess` in `tsconfig.json`.
- [x] **1.3** Install and configure ESLint (TypeScript + Svelte rules) and Prettier; add a lint script and confirm it passes on the empty project.
- [x] **1.4** Install and configure Vitest; add a `vitest run` script; write one trivial passing test to confirm the pipeline works.
- [x] **1.5** Add the GitHub Actions workflow: `install → tsc --noEmit → lint → vitest run → vite build`. Confirm the workflow file is syntactically valid (dry-run or push to a draft branch). *(NFR-DEPLOY.1)*
- [x] **1.6** Add the Pages deploy step to the workflow (deploy `dist/` to `gh-pages`). *(NFR-DEPLOY.1)*
- [x] **1.7** Source and self-host **Fraunces** (woff2, weights 400/500/600) and **IBM Plex Mono** (woff2, weights 400/500) — subset to Latin + `° × → … ±` and digits. Add `@font-face` declarations with `font-display: swap` fallbacks. Confirm both load in `vite dev`. *(DESIGN §3.4, NFR-PRIV.1)*
- [x] **1.8** Create the `src/` directory tree matching TECH_SPEC §4: `core/`, `core/wave/`, `core/fit/`, `worker/`, `three/`, `ui/`, `state/`, `export/`; add index stubs so TypeScript resolves paths cleanly.

---

### Task 2: Pure geometry core

Goal: all geometry, wave, curve-fit, SVG-emission, units, and validation logic living in pure,
dependency-free TypeScript — no DOM, no Three.js, no Svelte. Fully testable headless.

#### Types & units

- [x] **2.1** Write `core/types.ts` — `Design`, `WaveConfig`, `Source` (discriminated unions), `FittedPath`, `BezierSeg`, `ComputeRequest`, `ComputeResult` exactly as specified in TECH_SPEC §5.1 / §5.3.
- [x] **2.2** Write `core/units.ts` — canonical mm storage; format-for-display (mm or inch) with correct decimal precision; `parseFromDisplay` (no silent clamping); round-trip safe. *(FR-IN.2, SRS §1.7-F)*

#### Wave families

- [x] **2.3** Write `core/wave/types.ts` — `WaveField` interface exposing `f(x, y)` and `dfdy(x, y)`.
- [x] **2.4** Write `core/wave/diagonal.ts` — `f = sin(2π(x·cosθ + y·sinθ)/λ + φ)`, analytic `∂f/∂y`. Must emit `f ∈ [−1, 1]` by construction. *(FR-WAVE.1, SRS §1.7-E)*
- [x] **2.5** Write `core/wave/radial.ts` — `f = a(r)·sin(2π·r/λ + φ)`, exponential decay `a(r) = e^{−k·r}`, analytic `∂f/∂y` (with the `r=0` guard). Center may lie outside the piece. *(FR-WAVE.2, SRS §1.7-F)*
- [x] **2.6** Write `core/wave/interference.ts` — weighted sum of `K ∈ [1,8]` diagonal or radial sources, divided by `Σ|weights|`; derivative passthrough. *(FR-WAVE.3)*
- [x] **2.7** Write `core/wave/field.ts` — factory that builds an evaluable `WaveField` (+ derivative) from a `WaveConfig`. *(TECH_SPEC §6.2)*

#### Geometry primitives

- [x] **2.8** Write `core/geometry.ts` — `N = floor((W + gap) / (slatWidth + gap))`; centerline array `x_i` (centered); protrusion map `p(x, y) = pMin + (D − pMin)·(f+1)/2` using analytic `±1` bounds. *(FR-GEO.1–.4)*
- [x] **2.9** Write `core/readouts.ts` — pure function `Design → ReadoutValues` (N, spanned width, end margin, stock thickness, declared depth range, total footprint). Must recompute live. *(FR-IN.4)*

#### Curve-fit engine

- [x] **2.10** Write `core/fit/hermite.ts` — one analytic Hermite cubic from `(p, dp/dy)` endpoints, yielding four Bézier control points. *(SRS §1.7-D, TECH_SPEC §6.3)*
- [x] **2.11** Write `core/fit/adaptive.ts` — wavelength-tied seeding (partition `[0, H]` at `λmin / SEED_PER_WAVELENGTH`); kink injection for exact radial-center coincidences; recursive midpoint subdivision with `MAX_DEPTH` cap; emits a `BezierSeg[]` that stays ≤ `fitTolerance` from the true wave. *(SRS §1.7-D, TECH_SPEC §6.3–6.4, TS-D3/D4)*

#### SVG & validation

- [x] **2.12** Write `core/svg.ts` — one closed path per slat: back/top/bottom as line segments, front edge as the fitted Béziers. Always emitted in mm, `viewBox` `1u = 1mm`, coordinates at fixed 4 dp. Returns the SVG string. *(FR-EXP.1/.2/.9, TS-D8, FR-GEO.6)*
- [x] **2.13** Write `core/validation.ts` — pure function `Design → ValidationResult` (typed issues with field, tier, message). Implements all FR-VAL.1–.11 conditions using the SRS's exact proposed message text. *(FR-VAL.1–.11)*

#### 3D mesh helper

- [x] **2.14** Write `core/mesh.ts` — builds a single merged `positions`/`indices`/`normals` typed-array set + `finRanges` table from the `FittedPath[]`, by tessellating and extruding each slat along X by `slatWidth`. *(TECH_SPEC §8.1, TS-D5)*

---

### Task 3: Worker pipeline

Goal: geometry runs off the main thread; the bridge enforces single-in-flight + latest-wins and
falls back to synchronous on CSP failure.

- [ ] **3.1** Write `worker/geometry.worker.ts` — thin host: receive `ComputeRequest`, run `field → adaptive fit → (mesh when needMesh)`, post `ComputeResult` with transferable `mesh` buffers. No geometry logic of its own. *(TECH_SPEC §7.1–7.2)*
- [ ] **3.2** Write `worker/bridge.ts` — main-side: single in-flight + pending-stash latest-wins pattern (TECH_SPEC §7.3 pseudocode, TS-D9). Coalesces to ≤1 request per animation frame. *(FR-VIZ.2)*
- [ ] **3.3** Add the synchronous fallback in `bridge.ts`: if `new Worker(...)` throws or the Worker errors, switch transparently to calling `core/` directly on the main thread. *(TECH_SPEC §7.4, TS-D11, NFR-COMPAT.1)*
- [ ] **3.4** Wire Worker import via Vite's `new Worker(new URL('./geometry.worker.ts', import.meta.url), { type: 'module' })` pattern so the build bundles the worker correctly.

---

### Task 4: 3D preview & 2D inspector

Goal: a live Three.js scene with orbit controls, fin selection, and a 2D panel rendering the
identical fitted path.

- [ ] **4.1** Write `three/scene.ts` — perspective camera, neutral lighting (warm key + cool fill for the `wave.jpg` look), `OrbitControls` with touch enabled, canvas resize handler. Frame the default landing design on first mesh. *(FR-VIZ.1, TECH_SPEC §8.2)*
- [ ] **4.2** Write `three/fins.ts` — wrap the incoming merged `BufferGeometry` (one draw call); a second overlay mesh (slice of the selected fin's sub-buffer) with a highlight material. *(TECH_SPEC §8.3, TS-D5/D6)*
- [ ] **4.3** Write `three/picking.ts` — raycast the merged mesh → `faceIndex` → binary-search `finRanges` → fin index. *(TECH_SPEC §8.3)*
- [ ] **4.4** Implement WebGL detection on startup: if absent, hide the 3D panel and show a clear non-blocking message; issue all Worker requests with `needMesh:false`; keep 2D inspector and export fully working. *(TECH_SPEC §8.5, NFR-COMPAT.1, SRS OI-5)*
- [ ] **4.5** Write `Inspector2D.svelte` — draws the `FittedPath` for the selected fin using the same `ComputeResult.paths` (never recomputed); back edge as datum, wave front edge with gradient fill, measurement ticks, depth callout, fin header. *(FR-VIZ.3, V-6, TECH_SPEC §8.4, DESIGN §5.8)*

---

### Task 5: Svelte UI & state

Goal: a wired-up UI where every control updates the live design and all readouts, validation, and
export enable/disable reflect the current state.

- [ ] **5.1** Write `state/design.svelte.ts` — Svelte 5 runes store holding the `Design` (canonical mm). Two tiers of derived state: cheap (N, margins, full validation, `exportEnabled`) computed synchronously from `core/`; expensive (observed depth range, segment count) from the latest `ComputeResult`. *(TECH_SPEC §5.2, TS-D7)*
- [ ] **5.2** Write `App.svelte` — three-column layout (rail · viewport · inspector+readouts) + header bar as ASCII diagram in DESIGN §4.1. Import and mount the Three.js scene, wire the bridge, handle `ComputeResult`. *(DESIGN §4.2, FR-UI.4)*
- [ ] **5.3** Write `UnitToggle.svelte` — two-segment `mm | inch` switch in the header; toggling reformats all displayed values in place without altering stored mm values. *(FR-IN.2, DESIGN §5.4)*
- [ ] **5.4** Write `ParamPanel.svelte` — collapsible groups (Dimensions, Wave Function, Fit Tolerance); each global param as a labeled row (slider + editable numeric + unit) per DESIGN §5.1 specs. No silent clamping on input. *(FR-IN.1/.5)*
- [ ] **5.5** Add wave-family tabs (Diagonal · Radial · Interference) inside `ParamPanel`; switching tabs swaps the params region; the panel shows **exactly** the active family's params and no others. *(FR-IN.3, FR-WAVE.1–.3, DESIGN §5.2)*
- [ ] **5.6** Add the Interference Sources editor inside `ParamPanel`: list of `K ∈ [1,8]` source rows, each collapsible with a type-select, weight slider, family params, and remove button; add control (disabled at K=8). Weight sign shown explicitly. *(FR-WAVE.3, FR-VAL.3/.11, DESIGN §5.3)*
- [ ] **5.7** Write `Readouts.svelte` — spec-sheet strip: fin count N (hero size), spanned width, margin, stock thickness, declared depth range, actual depth used (with under-use bar), total footprint. Tabular figures; updates live. *(FR-IN.4, DESIGN §5.5)*
- [ ] **5.8** Write `ValidationList.svelte` — two-tier display: hard-block rows (✕ + danger bg + exact SRS message + anchored field flag), soft-warning rows (⚠ + warn bg); "Ready to export." in `--ok` when all clear. *(FR-VAL, DESIGN §5.6)*
- [ ] **5.9** Write `ExportButton.svelte` — gold primary action; disabled (no glow, `not-allowed`) whenever any hard block is active; shows an in-button "…packing N slats" affordance during zip build. *(FR-UI.3, DESIGN §5.9)*
- [ ] **5.10** Wire fin-index stepper in the viewport overlay (`[ 014 ▸ ] / 037`); clicking a fin in 3D updates the stepper and vice versa; selection shared with the 2D inspector. *(FR-VIZ.6, DESIGN §5.7)*
- [ ] **5.11** Implement the landing default design (interference, 2 sources: src1 diagonal `θ=30°, λ=300 mm`; src2 radial centered `λ=200 mm`; equal weights) rendered on first paint without user input. *(FR-UI.1, SRS §1.7-H)*

---

### Task 6: Export pipeline

Goal: clicking Export downloads a correctly named, correctly scaled zip of per-slat SVGs + manifest.

- [ ] **6.1** Write `export/manifest.ts` — assembles `parawave-design.json` with every parameter, chosen display unit, computed N, full wave/source config, app version, and ISO export date. *(FR-EXP.8, SRS §1.7-G)*
- [ ] **6.2** Write `export/zip.ts` — install `jszip`; bundle all slat SVGs (filenames zero-padded to `max(3, digits(N))`, left→right order) plus the manifest into a single `.zip` download. *(FR-EXP.3/.4, DESIGN §5.9)*
- [ ] **6.3** Wire the Export flow: issue a `needMesh:false` `ComputeRequest` (or reuse latest paths); feed `FittedPath[]` to `core/svg.ts` at full fidelity; pass to `export/zip.ts`. Export must always recompute regardless of any preview throttling. *(FR-VIZ.4, FR-EXP.1–.9)*

---

### Task 7: Visual design & polish

Goal: the app looks and feels like the "Workshop Instrument" described in DESIGN §1 — not a generic web form.

- [ ] **7.1** Define all CSS custom properties in `:root` per DESIGN §2.1 (all color tokens). Reference only tokens in component stylesheets; no raw hex in components.
- [ ] **7.2** Apply typography tokens per DESIGN §3.2: Fraunces for wordmark + section headers; IBM Plex Mono for all labels, values, readouts, and controls. Enforce `font-variant-numeric: tabular-nums` on all numeric outputs.
- [ ] **7.3** Style the three-column layout with correct column widths (360px rail · 1fr viewport · 320px right), 64px header, 8px base grid, hairline dividers (`--edge`), tight density per DESIGN §4.3.
- [ ] **7.4** Style sliders: 2px track, gold fill to thumb, diamond/square thumb with `--gold-glow` on hover/focus, `--danger` track on invalid state per DESIGN §5.1.
- [ ] **7.5** Style the 3D viewport frame: corner crosshairs/ticks in `--cool`, blueprint grid (`--grid` minor / `--grid-strong` major), warm `--gold-glow` radial behind the canvas, film-grain overlay at `--grain-opacity`. *(DESIGN §5.7, §8)*
- [ ] **7.6** Set Three.js material to read as honey-oak wood: `--wave-mid` base, low metalness, medium roughness, warm key + cool fill lighting, `--wave-highlight` specular on crests. *(DESIGN §8)*
- [ ] **7.7** Implement page-load reveal animation: header → rail groups stagger → viewport corner crosshairs → piece fade-up. Implement gentle auto-orbit that stops on first user interaction. *(DESIGN §6)*
- [ ] **7.8** Implement all reduced-motion overrides (`@media (prefers-reduced-motion: reduce)`): disable stagger, auto-orbit, validation flash; state changes become instant. *(DESIGN §6)*
- [ ] **7.9** Implement responsive breakpoints per DESIGN §9: narrow columns at 820–1199px; tabbed instrument panel at 600–819px (Controls / Inspector / Readouts tabs); 44px touch targets; "best viewed on a larger screen" fallback below 600px.
- [ ] **7.10** Audit every text/control pair against WCAG AA: `--ink-dim` on `--panel`; gold-on-charcoal large text; adjust token hex values as needed (roles fixed, values tunable per DESIGN §2.3). *(NFR-A11Y.2)*
- [ ] **7.11** Add `aria-label` / `aria-describedby` to every control; `aria-live="polite"` on readouts and validation messages; logical tab order (header → rail → viewport → inspector → export). Focus-visible ring `2px --gold-bright`. *(NFR-A11Y.1, DESIGN §10)*

---

### Task 8: Tests & verification

Goal: every SRS §9 verification item checked; CI green; Carbide Create manual import confirmed.

#### Automated (Vitest, headless)

- [ ] **8.1** Property: `f ∈ [−1, 1]` for diagonal, radial, and interference with random weights. *(FR-WAVE contract)*
- [ ] **8.2** Property: `p ≤ D`, `f = −1 ⇒ p = pMin`, `f = +1 ⇒ p = D` for random `Design` inputs. *(FR-GEO.3)*
- [ ] **8.3** Property: front-edge max deviation ≤ `fitTolerance` via dense resampling of the exported path for each wave family. *(V-4, NFR-ACCURACY.1)*
- [ ] **8.4** Property: each slat path is closed; back/top/bottom edges are line segments; front edge consists of cubic Béziers. *(FR-EXP.2)*
- [ ] **8.5** Unit: mm→inch→mm round-trip returns the original value with no drift. *(V-2, FR-IN.2)*
- [ ] **8.6** Unit: re-fitting identical parameters produces paths that agree within `fitTolerance` (per TS-D2 — not byte-identical). *(V-3)*
- [ ] **8.7** Golden: a fixed set of reference designs snapshot-compared numerically within tolerance; confirms no silent regression. *(TECH_SPEC §12)*
- [ ] **8.8** Unit: exported filenames sort lexically to left→right assembly order; zero-pad width is `max(3, digits(N))`. *(FR-EXP.3)*
- [ ] **8.9** Table-driven: each FR-VAL.1–.11 condition → correct tier (hard/soft), exact SRS message, correct `exportEnabled` value. *(V-5)*
- [ ] **8.10** Unit: 2D inspector path data and exported SVG path data for the same fin are geometrically equivalent. *(V-6, FR-VIZ.3)*
- [ ] **8.11** Component: family-aware panel shows exactly the active family's params; switching families swaps params cleanly. *(FR-IN.3)*
- [ ] **8.12** Component: Export button disabled when any hard block is active; enabled otherwise. *(FR-UI.3)*

#### Manual checklist (cannot be automated)

- [ ] **8.13 — V-1 Carbide Create import.** Export a known interference design. Import each slat SVG into Carbide Create. Confirm: correct physical size (H × depth), upright orientation (parts land right-way-up), single clean closed vector, no repair needed. *(FR-EXP.1/.2/.6, §1.7-A/B)*
- [ ] **8.14** Smoke-test the full happy path (PRD §11): land → set units → adjust dimensions → pick Interference wave → orbit 3D → inspect a fin in 2D → click Export → open zip → verify filenames, manifest, and SVG count.
- [ ] **8.15** Confirm soft performance warning appears and export still works at N > 400 fins. *(FR-VAL.6)*
- [ ] **8.16** Confirm the app loads and is functional on a mid-range tablet (portrait and landscape); touch orbit and pinch-zoom work. *(FR-VIZ.1, A4, DESIGN §9)*
- [ ] **8.17** Confirm the WebGL-absent degraded mode: with WebGL disabled, 3D panel shows the message; 2D inspector and export still function. *(TECH_SPEC §8.5)*
