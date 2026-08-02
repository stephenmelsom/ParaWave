# ParaWave — Technical Specification

**Status:** Draft v1 · **Date:** 2026-06-07 · **Owner:** sjmelsom
**Companion to:** [`PRD.md`](./PRD.md) (Draft v1) · [`REQUIREMENTS.md`](./REQUIREMENTS.md) (SRS Draft v2)

---

## 1. Introduction

### 1.1 Purpose
This document is the engineering bridge from *verified requirement* to *buildable code*. The
PRD states **what/why**; the SRS states **precise, testable behavior** (numbered `FR-*`/`NFR-*`
requirements). This tech spec states **how** it is built: technology stack, architecture,
module layout, the hard algorithms (with pseudocode), data flow, and build/test/deploy.

It deliberately **references** SRS requirement IDs rather than restating them. Where a number,
formula, message, or acceptance test already lives in the SRS, this document points at the ID
and specifies the implementation that satisfies it.

### 1.2 Scope
Covers the v1 implementation as bounded by PRD §3/§4 and refined by the SRS. It closes the
three items the SRS explicitly handed to the tech spec:
- **OI-5** — WebGL-absent degraded mode (→ §8.4).
- **§1.7-D** — curve-engine internals (analytic Hermite + adaptive subdivision) (→ §6).
- **OI-2/3/4/6** — implementation-tunable defaults/thresholds (→ §13).

### 1.3 Intended audience
The implementing engineer(s). Assumes familiarity with the PRD and SRS; this document is read
alongside them, not instead of them.

### 1.4 Decisions that refine or override the SRS
Two design decisions here deliberately **override** SRS requirements; both are called out at
the point of use, mirroring the SRS's own §1.7 override pattern:

| ID | Decision | Overrides |
|----|----------|-----------|
| **TS-D2** | Determinism is **within fit tolerance**, not byte-identical (libm `sin/cos/exp` aren't bit-stable across engines). | **FR-EXP.7**, **V-3** |
| **TS-D8** | Exported SVG geometry is **always authored in mm** (`viewBox` 1u = 1 mm); the inch toggle is display-only. | Resolves the **§1.7-A vs FR-EXP.9** tension toward mm |
| **TS-D12** | Nesting splits into Worker-side geometry metrics + main-thread packing; `SheetConfig` lives beside `Design`, not inside it. | Refines **FR-NEST.1–.4** (§6.6) |

All other decisions in this document refine, but do not contradict, the SRS.

---

## 2. Technology stack & rationale

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Language | **TypeScript** (strict) | Geometry math and a typed Worker contract need compile-time safety; `strict` + `noUncheckedIndexedAccess`. |
| UI framework | **Svelte 5 (runes)** | Fine-grained reactivity ideal for live slider→readout updates; tiny runtime helps the GitHub-Pages bundle budget (NFR-DEPLOY.1); no virtual-DOM overhead while dragging. |
| 3D | **Three.js (raw)** | Only mature WebGL engine; used directly (no react-three-fiber/TresJS wrapper) because the scene is small and we want explicit control over the single merged `BufferGeometry` and raycasting. |
| Build | **Vite** | Fast dev server, first-class Worker + Svelte support, static `vite build` output. Configure `base` to the repo path for Pages. |
| Zip | **`jszip`** | Mature, dependency-light, client-side zip for FR-EXP.4. |
| State | **Svelte runes only** | A single `Design` store plus computed runes covers all reactivity (§5); no Redux/Zustand-class dependency. |
| Tests | **Vitest** | Shares Vite config; fast unit/property tests over the pure `core/` (§12). |
| Lint/format | **ESLint + Prettier** | Standard; enforced in CI. |

**No backend, no database, no analytics, no fonts/CDN at runtime** — the bundle is fully
self-contained (NFR-PRIV.1, NFR-DEPLOY.1). All math and SVG generation happen in-browser
(A2, A3).

---

## 3. Architecture overview

### 3.1 Layering principle
The design is **framework-thin around a pure core**. All geometry, wave evaluation, curve
fitting, SVG emission, units, and validation live in `core/` as **pure, dependency-free
TypeScript** — no DOM, no Three.js, no Svelte. `core/` is:
- the **determinism + accuracy boundary** (FR-WAVE.4, NFR-ACCURACY.1, and the within-tolerance
  guarantee of TS-D2),
- **portable** — it runs identically inside the Worker *or* directly on the main thread
  (the fallback of §7.4), and
- **trivially unit-testable** (§12) without a browser or GPU.

### 3.2 The three planes

```
┌──────────────────────────── Main thread ────────────────────────────┐
│                                                                      │
│   UI plane (Svelte)              Render/Export consumers             │
│   ┌────────────────┐             ┌──────────────────────────────┐    │
│   │ param panel     │            │ Three.js mesher (3D preview) │    │
│   │ readouts        │            │ 2D inspector (canvas/SVG)    │    │
│   │ validation      │            │ SVG + zip writer (export)    │    │
│   │ export button   │            └──────────────▲───────────────┘    │
│   └───────┬─────────┘                           │                    │
│           │ Design store (runes, canonical mm)  │ ComputeResult      │
│           │ + cheap derived (N, margins,        │ (paths + merged    │
│           │   hard-block validation) [TS-D7]    │  mesh buffers)     │
│           ▼                                      │                    │
│   ┌──────────────── Worker bridge (single in-flight, latest-wins) ─┐ │
│   └───────────────────────────────┬─────────────────────────────────┘
│                                   │ postMessage(ComputeRequest)      │
└───────────────────────────────────┼──────────────────────────────────┘
                                     ▼
              ┌──────────────── Web Worker ────────────────┐
              │  hosts core/ pipeline:                     │
              │  field eval → adaptive Hermite fit →       │
              │  fitted Bézier paths  (+ merged mesh       │
              │  buffers when needMesh)                    │
              └────────────────────────────────────────────┘
```

### 3.3 Data-flow trace (one parameter change)
1. User drags a slider → Svelte updates the `Design` store (canonical mm).
2. **Cheap derived** runes recompute synchronously in `core/` on the main thread: `N`, spanned
   width, margins, and **all hard-block validations** → readouts and the Export enable/disable
   state update **instantly**, never waiting on the Worker (TS-D7, FR-IN.4, FR-UI.3).
3. The change is batched to the next animation frame (FR-VIZ.2) and handed to the **Worker
   bridge**, which keeps **at most one request in flight** (§7.3, TS-D9).
4. The Worker runs the `core/` pipeline at full fidelity and returns a `ComputeResult`: per-fin
   fitted Bézier paths, the observed depth range, total segment count, and — when `needMesh` —
   transferable merged mesh buffers + a per-fin range table (§5.3, §7.2).
5. Main thread: wraps the mesh buffers in one `BufferGeometry` (3D), redraws the 2D inspector
   from the **same** fitted path (FR-VIZ.3 / V-6), and updates the **expensive** readouts
   (actual depth range, segment-count soft warning).
6. **Export** issues a `needMesh:false` request (or reuses the latest paths) and feeds the
   fitted paths to the SVG/zip writer (§9).

There is exactly **one** geometry code path; preview and export can never diverge
(FR-VIZ.4) [TS-D1].

---

## 4. Module & file layout

```
src/
  core/                      # pure, dependency-free TS — the determinism boundary
    wave/
      types.ts               #   WaveField interface, source discriminated unions
      diagonal.ts            #   FR-WAVE.1  f, ∂f/∂y
      radial.ts              #   FR-WAVE.2  f, ∂f/∂y, exact-center kink detection (TS-D3)
      interference.ts        #   FR-WAVE.3  weighted sum / Σ|w|, derivative passthrough
      field.ts               #   builds an evaluable field (+ derivative) from a Design
    geometry.ts              # FR-GEO.1–.6: N, centering, centerlines x_i, protrusion map
    fit/
      hermite.ts             #   one Hermite cubic from (p, ∂p) endpoints
      adaptive.ts            #   §1.7-D seeding + recursive subdivision (TS-D4)
    nest/
      profile.ts             #   FR-NEST.3: exact monotone edge profiles + mating bound (TS-D12)
      pack.ts                #   FR-NEST.3/.4: 0°/180° row packing over NestMetrics
    svg.ts                   # FR-EXP.1/.2/.9: closed path, mm, 4dp, Y-down (TS-D8)
    sheet-svg.ts             # FR-NEST.5/.6/.9: nested sheet, baked transforms, labels
    units.ts                 # FR-IN.2: canonical mm ↔ display formatting
    validation.ts            # FR-VAL.1–.16: pure predicates → typed issues
    readouts.ts              # FR-IN.4 cheap derived (N, spans, margins, stock)
    types.ts                 # Design, WaveConfig, FittedPath, ComputeRequest/Result
    mesh.ts                  # builds merged vertex/index buffers + range table from paths
  worker/
    geometry.worker.ts       # thin host: ComputeRequest → core/ pipeline → ComputeResult
    bridge.ts                # main-side: single in-flight + latest-wins (TS-D9), fallback (TS-D11)
  three/
    scene.ts                 # renderer, camera, lights, orbit/touch controls (FR-VIZ.1)
    fins.ts                  # wraps merged BufferGeometry; selection overlay mesh (FR-VIZ.6)
    picking.ts               # raycast → faceIndex → range-table lookup
  ui/                        # Svelte 5 components
    App.svelte
    ParamPanel.svelte        # family-aware (FR-IN.3)
    Readouts.svelte          # FR-IN.4
    ValidationList.svelte    # FR-VAL surfacing
    Inspector2D.svelte       # FR-VIZ.3 — same fitted path as export
    ExportButton.svelte      # FR-UI.3 disable logic
    UnitToggle.svelte        # FR-IN.2
  state/
    design.svelte.ts         # the Design store (runes) + computed cheap-derived & validation
  export/
    zip.ts                   # jszip bundle, zero-padded names (FR-EXP.3), sheets/ + slats/
    cutlist.ts               # cutlist.csv (FR-NEST.7)
    manifest.ts              # parawave-design.json (FR-EXP.8)
  main.ts
```

`core/` imports nothing outside `core/`. `worker/`, `three/`, `ui/`, `state/`, `export/` may
import `core/` but `core/` imports none of them.

---

## 5. Data model & state

### 5.1 Canonical types
All dimensional values are stored in **mm** (the canonical internal unit); the unit toggle only
changes *formatting* (FR-IN.2, V-2). Angles in degrees, wavelengths in mm (§1.7-F).

```ts
type Unit = 'mm' | 'inch';

interface Design {
  // global dimensions — all mm
  H: number; W: number; D: number; pMin: number;
  slatWidth: number; gap: number; fitTolerance: number;
  displayUnit: Unit;          // display-only; geometry stays mm (TS-D8)
  wave: WaveConfig;
}

type WaveConfig =
  | { kind: 'diagonal'; theta: number; lambda: number; phi: number }
  | { kind: 'radial';   cx: number; cy: number; lambda: number; phi: number; decay: number }
  | { kind: 'interference'; sources: Source[] };   // K ∈ [1,8]

type Source =
  | { type: 'diagonal'; theta: number; lambda: number; phi: number; weight: number }
  | { type: 'radial'; cx: number; cy: number; lambda: number; phi: number; decay: number; weight: number };
```

Defaults, mins, maxes, and steps are **not** re-listed here — they live in **SRS §5** and are
read into the UI controls and validation from a single table derived from it. Landing default =
interference, 2 sources (SRS §1.7-H).

### 5.2 Store & derived (runes)
`state/design.svelte.ts` holds the `Design` as the single source of truth. Two tiers of derived
state (TS-D7):

- **Cheap (synchronous, main thread, pure `core/`):** `N`, spanned width, end margin, stock
  thickness, and the full **validation result** (all hard blocks FR-VAL.1–.5/.10/.11 + N-based
  soft warns .6/.7). These drive readouts and `exportEnabled` (FR-UI.3) and **never block on the
  Worker**.
- **Expensive (from `ComputeResult`):** actual depth range used (FR-IN.4) and total Bézier
  segment count (soft warn FR-VAL.8). These update one Worker round-trip behind the slider.

```ts
const exportEnabled = $derived(validation.hardBlocks.length === 0);
```

### 5.3 ComputeRequest / ComputeResult
```ts
interface ComputeRequest { design: Design; needMesh: boolean; generation: number; }

interface FittedPath {        // one fin, y–z plane, mm, Y-down authored (TS-D8)
  finIndex: number;
  xCenter: number;            // x_i, for reference
  segments: BezierSeg[];      // front edge; back/top/bottom added at emit time
}

interface ComputeResult {
  generation: number;
  paths: FittedPath[];        // export + 2D inspector source of truth
  observedDepth: { min: number; max: number };
  totalSegments: number;
  mesh?: {                    // present iff request.needMesh
    positions: Float32Array;  // transferable
    indices: Uint32Array;     // transferable
    finRanges: Uint32Array;   // [start,count] per fin → range table (FR-VIZ.6)
  };
}
```

---

## 6. Geometry & curve-fit engine (the technical heart)

All of §6 lives in pure `core/` and is the implementation of SRS §3.2 (FR-GEO), §3.3 (FR-WAVE),
and §1.7-D. Pseudocode below; exact constants/thresholds in §13.

### 6.1 Geometry primitives (FR-GEO)
```
N        = floor((W + gap) / (slatWidth + gap))            // FR-GEO.1
span     = N*slatWidth + (N-1)*gap                          // FR-GEO.2
margin   = (W - span) / 2                                   // centered
x_i      = margin + slatWidth/2 + i*(slatWidth + gap)       // i = 0..N-1, centerline
p(x,y)   = pMin + (D - pMin) * (f(x,y) + 1) / 2             // FR-GEO.3, analytic ±1 bounds
```
`p` uses the analytic `f ∈ [−1,1]` bounds, never observed extremes → design-independent and
peaks land exactly at `D` (FR-GEO.3, FR-VAL.9: no clipping possible).

### 6.2 Wave field + analytic derivative (FR-WAVE)
Each family exposes `f(x,y)` **and** `∂f/∂y` (needed for exact Hermite tangents, §6.3). All
obey `f ∈ [−1,1]` by construction (FR-WAVE contract).

```
diagonal:  u = (x·cosθ + y·sinθ)/λ
           f      = sin(2π·u + φ)
           ∂f/∂y  = cos(2π·u + φ) · 2π·sinθ/λ

radial:    r      = hypot(x−cx, y−cy)
           a(r)   = exp(−k·r)               // k from decay∈[0,1]; a ≤ 1 keeps |f|≤1
           f      = a(r)·sin(2π·r/λ + φ)
           ∂r/∂y  = (y−cy)/r                 // for r>0
           ∂f/∂y  = ∂r/∂y · [ a(r)·cos(2π·r/λ+φ)·2π/λ  −  k·a(r)·sin(2π·r/λ+φ) ]

interference: W = Σ|wⱼ|                       // FR-VAL.11 guarantees W>0
           f      = (Σ wⱼ·fⱼ) / W
           ∂f/∂y  = (Σ wⱼ·∂fⱼ/∂y) / W
```

> **TS-D2 (overrides FR-EXP.7/V-3).** Because `sin/cos/exp` are not bit-identical across JS
> engines (libm), output is guaranteed reproducible only **within fit tolerance**, not
> byte-for-byte. Same engine + same build reproduces identical bytes; across engines, trailing
> digits may differ but stay ≤ tolerance. The manifest (§9) therefore documents *parameters*,
> not reproducible bytes.

### 6.3 Adaptive Hermite fit (§1.7-D) — `core/fit/adaptive.ts`
Produces the front-edge cubic-Bézier sequence for one fin at centerline `x_i`, guaranteeing
max deviation ≤ `fitTolerance` (V-4) while staying compact and deterministic.

**Endpoint tangents (analytic Hermite).** For a segment over `[y0,y1]`, the Bézier control
points use the true curve value `p` and slope `dp/dy = (D−pMin)/2 · ∂f/∂y` at each end:
```
P0 = (p(x_i,y0), y0)                      // (z, y)
P3 = (p(x_i,y1), y1)
h  = y1 - y0
P1 = P0 + (h/3)·(dz/dy@y0, 1)
P2 = P3 - (h/3)·(dz/dy@y1, 1)
```

**Seeding — wavelength-tied (TS-D4).** Defeats midpoint-test aliasing on the periodic field:
```
λmin = min wavelength across all active sources
seedStep = λmin / SEED_PER_WAVELENGTH           // each seed segment spans < ½·λmin
seeds = partition [0,H] at multiples of seedStep (+ the kink boundary, §6.4)
```

**Refine — recursive midpoint subdivision:**
```
fit(y0, y1, depth):
    seg = hermiteCubic(y0, y1)
    ym  = (y0 + y1) / 2
    err = | seg.at(paramOfY(ym)).z  −  p(x_i, ym) |        // deviation at the y-midpoint
    if err <= fitTolerance OR depth >= MAX_DEPTH:
        emit seg
    else:
        fit(y0, ym, depth+1); fit(ym, y1, depth+1)
```
Determinism holds within an engine because seeds, the midpoint rule, and `MAX_DEPTH` are fixed
functions of the parameters (no randomness, no time, no observed-extreme feedback).

### 6.4 Radial-center kink (TS-D3, §1.7-D)
A true derivative discontinuity exists **only** when a fin centerline exactly passes through a
radial source center:
```
for each radial source s with center (cx,cy):
    if x_i == cx (IEEE double ==)  AND  0 <= cy <= H:
        add a hard seed boundary at y = cy          // split, fit each side independently
```
At that boundary `r = |y−cy|`, giving a sharp valley preserved as a path vertex. Fins that are
merely *near* a center are genuinely smooth (rounded `hypot`); the adaptive subdivision of §6.3
auto-densifies their tight valleys. No epsilon band, so no false vertices.

### 6.5 SVG path emission (`core/svg.ts`) — TS-D8
Each slat = **one closed path** (FR-EXP.2): straight **back** edge `X=0, y=0..H`; **top**/
**bottom** edges as line segments; **front** edge as the fitted Béziers. Orientation per
FR-GEO.6 / §1.7-B (Y-down authored; Carbide flips to Y-up):
- Geometry **always emitted in mm** regardless of `displayUnit` (TS-D8).
- Root `<svg>` carries `width="{W}mm" height="{H}mm"` and `viewBox="0 0 {D} {H}"` so **1 user
  unit = 1 mm** (FR-EXP.1, §1.7-A) — Carbide Create imports at true size, no DPI ambiguity.
- Coordinates at **fixed 4 decimals** (≪ tolerance) for clean, stable output (FR-EXP.9).

> **TS-D8 (resolves §1.7-A vs FR-EXP.9).** FR-EXP.9's "5 decimals in inch" is reinterpreted as
> an internal precision floor for inch-*sourced* input values; **emitted** coordinates are
> always mm at 4 dp. This keeps the `viewBox` at 1u=1mm for every design and de-risks the V-1
> Carbide import. The user's display unit is preserved in the manifest (§9), not the geometry.

### 6.6 Stock nesting (`core/nest/`) — TS-D12

Every slat has the same height `H`, a flat back edge at `z = 0`, and a front edge `z = f_i(y)`.
Placements are anchored on the **back-edge line**: a 0° part occupies `[x, x + f(y)]`, a 180°
part occupies `[x − f(H − y), x]`. Two pitches follow:

| Sequence | Facing | Pitch |
|----------|--------|-------|
| 0° → 180° | two wavy front edges | `max over y of (f_a(y) + f_b(H − y)) + clearance` |
| 180° → 0° | two flat back edges | `clearance` alone, shape-independent |

The second row is where the material saving comes from. Because `f ≥ p_min ≥ 0`, the pairwise
chain constraint is sufficient — non-adjacent parts cannot collide.

**The mating pitch is an exact conservative bound, not a sampled maximum.** `hermiteCubic`
places `p1.y`/`p2.y` at exact thirds (§6.3), so `y` is affine in `t` and `z(y)` is a plain
cubic whose interior extrema are the roots of a quadratic. Splitting each segment there yields
intervals on which `f` is monotone, making `max(z_j, z_{j+1})` the *exact* maximum over
interval `j`. Merging part A's partition with part B's mirrored partition and taking
`max(intervalMax_A + intervalMax_B')` over overlapping pairs bounds the true maximum from
above by construction — so **parts cannot overlap at any refinement density**.
`PROFILE_INTERVALS` refines the partition uniformly and therefore trades only *tightness*
(wasted stock), never correctness. Part area is likewise exact: `∫ z dy` over a segment is
`(p3.y − p0.y)(p0.z + p1.z + p2.z + p3.z) / 4`.

> **TS-D12 (nesting placement, and where `SheetConfig` lives).**
>
> **(a) Split the work.** Because parts are packed in fin-index order with strict 0°/180°
> alternation, the only mating pitches ever needed are between *consecutive* fin indices. The
> Worker therefore emits just `3N − 1` numbers (`NestMetrics`: widths, areas, mates) as part of
> `ComputeResult`, and `nestSheets()` packs on the **main thread** as an O(N) loop of adds and
> compares — cheap enough for the synchronous derived tier (TS-D7). Preview and export call the
> identical function on identical numbers, so no preview-vs-export fidelity split is needed
> (stronger than TS-D1's single-code-path guarantee).
>
> **(b) `SheetConfig` is NOT a member of `Design`.** It is a sibling `$state` field on the
> store. The recompute effect subscribes by deep-reading a design snapshot, so any field added
> to `Design` triggers a full adaptive re-fit when it changes — and sheet parameters provably
> cannot affect geometry. Keeping them off `Design` also keeps the design record a pure design
> (stock is machine configuration) and leaves every existing `Design` fixture untouched.
> Non-`Design` validation inputs ride `ValidationOptions`, as `totalSegments` already does.
>
> **(c) Rotation only, never mirroring.** 180° in-plane rotation has determinant +1, so winding
> survives and an outside-contour offset behaves exactly as it does for a per-slat file. A
> mirrored slat would only be interchangeable if the stock had no show face (FR-NEST.4).

Sheet emission (`core/sheet-svg.ts`) bakes the placement transform into the coordinates rather
than emitting an SVG `transform` on cut geometry, since primitive CAM importers mishandle
nested transforms (FR-NEST.6). Labels are authored **mirrored** — the document is Y-down and
Carbide flips it wholesale (§1.7-B), so a label that reads upright in a browser would be
engraved upside-down.

---

## 7. Web Worker pipeline

### 7.1 Role
`worker/geometry.worker.ts` is a **thin host** for `core/`: it receives a `ComputeRequest`,
runs `field → adaptive fit → (mesh)`, and posts a `ComputeResult`. It contains no geometry
logic of its own (so the §7.4 fallback is the *same* code).

### 7.2 Message contract & transferables
- Request (§5.3) carries the full `Design` snapshot (no shared mutable state), a `needMesh`
  flag, and a monotonic `generation`.
- Result returns `paths` always; `mesh` only when `needMesh` (so the no-WebGL degraded mode and
  export-only requests skip the merged-buffer build entirely).
- `mesh.positions/indices/finRanges` are posted as **transferables** (zero-copy).

### 7.3 Concurrency — single in-flight + latest-wins (TS-D9)
A single Worker processes messages serially, so naïvely posting every frame backs up a stale
queue. The `bridge` enforces backpressure:
```
let inFlight = false, pending: Design | null = null, generation = 0;

function request(design):                 // called ≤1×/animation frame (FR-VIZ.2)
    if inFlight: pending = design; return  // stash only the latest
    inFlight = true; post({design, needMesh:true, generation:++g})

onResult(res):
    inFlight = false
    apply(res)                             // mesh + paths + expensive readouts
    if pending: const d = pending; pending = null; request(d)
```
No Worker-side cancellation; the Worker never computes a snapshot newer work has superseded
beyond the one in flight.

### 7.4 Fallback — main-thread host (TS-D11)
The Worker is only a *host*. If `new Worker(...)` throws (CSP, unsupported) or the Worker errors,
the bridge transparently switches to calling the **identical `core/`** pipeline synchronously on
the main thread. Geometry is identical (same code); only performance degrades (possible jank at
high fin counts). No single point of failure; the app still previews (2D) and exports.

---

## 8. 3D preview & 2D inspector (Three.js, raw)

### 8.1 Meshing
The Worker (or fallback host) builds **one merged geometry** for all fins (TS-D5): each fin's
fitted front edge is tessellated, closed into the slat profile (y–z), and **extruded along X by
`slatWidth`** (both faces identical, FR-GEO.5); gaps and centering come from `x_i` (§6.1). Output
is a single `positions`/`indices` pair → one `BufferGeometry` → **one draw call**. Normals are
computed in the host (flat extrusion → cheap).

### 8.2 Scene
`three/scene.ts`: perspective camera, neutral lighting to read depth, `OrbitControls` with touch
enabled (FR-VIZ.1, A4 tablet). The piece is framed on load against the landing default
(FR-UI.1).

### 8.3 Fin selection & highlight (FR-VIZ.6) — TS-D6
- **Pick:** raycast the merged mesh → `faceIndex` → binary-search the per-fin `finRanges` table
  → fin index.
- **Index control:** the UI fin-index input (`1..N`) selects the same state.
- **Highlight:** slice the selected fin's sub-buffer into a **second overlay mesh** with a
  highlight material drawn over the merged mesh (standard materials, +1 draw call). Selection
  state is shared between 3D and the 2D inspector.

### 8.4 2D inspector (FR-VIZ.3 / V-6)
Renders the **identical** `FittedPath` that the SVG writer emits for the selected fin — drawn
from the same `ComputeResult.paths`, **never recomputed**. Inspector == export is therefore
structural, not a property to be policed.

### 8.5 WebGL-absent degraded mode (resolves SRS OI-5)
On startup, feature-detect WebGL. If absent (NFR-COMPAT.1):
- Hide the 3D panel; show a clear, non-blocking message.
- Keep the parameter UI, readouts, **2D inspector**, validation, and **export** fully working —
  these need only `paths`, so Worker requests run with `needMesh:false`.
The app degrades, never crashes.

---

## 9. Export pipeline

- **Per-slat SVG** authored by `core/svg.ts` (§6.5): one closed path, **always mm**, `viewBox`
  1u=1mm, 4 dp (FR-EXP.1/.2/.9, TS-D8). No engrave/holes/slots (FR-EXP.5).
- **Filenames:** `slat_001.svg … slat_NNN.svg`, zero-padded to `max(3, digits(N))`, ordered
  left→right so lexical sort = assembly order (FR-EXP.3).
- **Nested sheet SVG** authored by `core/sheet-svg.ts` (FR-NEST.5/.6): same mm / 1u=1mm /
  4 dp contract as the per-slat file, one closed `<path>` per part inside `<g id="parts">`
  with the placement transform **baked into the coordinates** (never an SVG `transform`), a
  reference `<g id="stock">` outline that is not a cut path, and `<g id="labels">` authored
  mirrored so labels read upright after Carbide's Y-flip (§1.7-B, FR-NEST.9).
- **Bundle:** `sheets/` + `slats/` + `cutlist.csv` + the manifest zipped via `jszip` → single
  download (FR-EXP.4, FR-NEST.7). Sheets are written first. With nesting disabled the archive
  degrades to `slats/` + manifest (FR-NEST.10).
- **Manifest schema v2** adds `computed.nesting` (sheet count, rows, placed count, unplaced
  indices, utilisation — `null` when nesting is off) and a top-level `stock` sibling of
  `design`. Stock is machine configuration, so it is deliberately not folded into the design
  record (TS-D12).
- **Manifest `parawave-design.json`** (FR-EXP.8): every parameter, the **chosen display unit**
  (TS-D8), computed `N`, full wave/source config, app version, export date. One-way provenance
  (not a load feature). Timestamp/version are exempt from the within-tolerance determinism of
  TS-D2.
- Export issues a `needMesh:false` request (or reuses the latest `paths`); it always runs the
  `core/` pipeline at full fidelity regardless of any preview throttling (FR-VIZ.4).

---

## 10. Validation surfacing

`core/validation.ts` is a pure function `Design → ValidationResult` returning typed issues, each
tagged with the offending field and tier. The UI binds messages to fields; the Export button is
disabled iff any hard block is active (FR-UI.3, §5.2).

| Tier | Requirements | Effect |
|------|--------------|--------|
| **Hard block** | FR-VAL.1–.5, .10, .11, .12–.14 | field-anchored message + Export disabled; computed **synchronously** (TS-D7), never silently clamped (FR-IN.5) |
| **Soft warning** | FR-VAL.6 (N>400), .7 (gap=0), .8 (segment count), .15 (unnested slats), .16 (sheet count) | inline warning; Export stays enabled |
| **Never emitted** | FR-VAL.9 (depth clipping) | impossible by construction (FR-GEO.3) |

FR-VAL.8's segment count comes from `ComputeResult.totalSegments` (expensive tier); all others
are cheap and instant. Messages use the SRS's proposed wording verbatim.

Because `exportEnabled` is derived from the **cheap** validation pass, a hard block that needs
expensive-tier data would render in the issue list without actually disabling the button. The
stock-sheet rules are split along exactly that line: FR-VAL.12–.14 need only `Design` +
`SheetConfig` and are hard blocks; FR-VAL.15–.16 need a nest result and are therefore soft
warnings that degrade gracefully (unnestable slats still ship as per-slat SVGs and still appear
in the cut list). All stock rules are gated on an **enabled** `SheetConfig`, so turning nesting
off can never strand the user behind a stock error (FR-NEST.10).

---

## 11. Build, deploy & tooling

- **Vite** static build; set `base` to the Pages sub-path (e.g. `/ParaWave/`) so asset URLs
  resolve. Worker imported via Vite's `?worker` / `new Worker(new URL(...))` form.
- **GitHub Actions** workflow: install → `tsc --noEmit` → lint → `vitest run` → `vite build` →
  deploy `dist/` to Pages (NFR-DEPLOY.1, zero hosting cost).
- **TS strict**; **ESLint + Prettier** enforced in CI.
- **Bundle budget:** track gzipped size (Three.js is the bulk); keep within a documented target
  so first paint on a laptop stays fast (NFR-PERF.1).

---

## 12. Testing strategy

Anchored to SRS §9 (V-1…V-7). Determinism is within-tolerance (TS-D2), so tests compare
**numerically within tolerance**, not by byte-diff (which would be brittle to libm drift).

| Test | Type | Verifies |
|------|------|----------|
| `f ∈ [−1,1]` for every family + random weights | property (Vitest) | FR-WAVE contract |
| `p ≤ D`, `f=−1⇒p=pMin`, `f=+1⇒p=D` | property | FR-GEO.3 |
| Front-edge deviation ≤ tolerance via dense resampling | property | **V-4**, NFR-ACCURACY.1 |
| Path is closed; back/top/bottom are line segments | property | FR-EXP.2 |
| mm→inch→mm round-trips unchanged | unit | **V-2**, FR-IN.2 |
| Re-fit identical params agrees **within tolerance** | unit | **V-3** (per TS-D2) |
| Golden designs compared numerically within tolerance | golden | regression net |
| Filenames sort to assembly order; zero-pad width | unit | FR-EXP.3 |
| Each FR-VAL.1–.16 condition → correct tier/message | table-driven | **V-5** |
| 2D inspector path === exported path for same fin | unit | **V-6**, FR-VIZ.3 |
| family-aware panel shows exactly the family's params; Export disable logic | component | FR-IN.3, FR-UI.3 |
| Mating bound ≥ densely-sampled true pitch | property | FR-NEST.3 (the safety property) |
| Mating bound ≤ true pitch + 0.3 mm | property | TS-D12 tightness (slack is wasted stock) |
| Nested parts honour clearance at every height, all 3 families | property | **V-7**, FR-NEST.3 |
| Every fin appears exactly once across sheets ∪ unplaced | property | FR-NEST.7 |
| Nesting needs fewer sheets than fixed-pitch placement | property | FR-NEST.3 (feature works) |
| Placed part at identity placement === per-slat path | unit | FR-NEST.6 emitter equivalence |
| No `transform=` inside `<g id="parts">`; path data ⊆ `M/L/C/Z` | unit | FR-NEST.6 |
| Both label styles authored mirrored | unit | FR-NEST.9 |
| **Carbide Create test-import** | **manual checklist** | **V-1** (can't be automated) |
| **Carbide Create nested-sheet import** | **manual checklist** | **V-7** (can't be automated) |

The pure `core/` makes all but V-1 and V-7 runnable headless in CI.

---

## 13. Open technical issues (carried from SRS, to resolve in implementation)

| ID | Issue | Proposed resolution / how measured |
|----|-------|-------------------------------------|
| **OI-2** | Fit-tolerance default 0.05 mm / floor 0.001 mm | Confirm against Shapeoko/Nomad precision during the V-1 import; treat as the `fitTolerance` default in §5. |
| **OI-3** | Interference source cap `K=8` | Confirm 8 sources reproduce the `wave.jpg` look (SRS §1.7-H landing default); raise only if needed. |
| **OI-4** | Parameter ranges (SRS §5) | Single source-of-truth table feeds UI + validation; tune from real cuts. |
| **OI-6** | Soft-warn thresholds (N>400, segments ~50k) | Constants `FIN_WARN=400`, `SEGMENT_WARN≈50000`; tune from profiling on a typical laptop (NFR-PERF.1). |
| new | `SEED_PER_WAVELENGTH`, `MAX_DEPTH` (§6.3) | Pick so a worst-case short-λ design stays ≤ tolerance without pathological segment counts; validate via the V-4 property test. |
| **OI-7** | Default label style (`text` vs stroked outlines) | Decide from the V-7 import: if Carbide Create discards `<text>`, flip the `SheetConfig.labelStyle` default to `'stroke'`. |
| new | `PROFILE_INTERVALS` (§6.6) | 2048 gives ~0.25 mm bound slack at realistic wavelengths for ~13 ms per 37 fins. Only affects tightness, never correctness — retune from profiling, not from correctness failures. |
| new | Merged-geometry rebuild cost at high N (§8.1) | Acceptable under single-in-flight throttle; if profiling shows jank, the documented upgrade is OffscreenCanvas or partial front-edge buffer updates (post-v1). |

---

## 14. Traceability (tech-spec additions to SRS §7)

| Area | SRS reqs | This spec |
|------|----------|-----------|
| Geometry/fit | FR-GEO.1–.6, FR-WAVE.1–.4, §1.7-D | §6 (incl. TS-D3 kink, TS-D4 seeding) |
| Determinism | FR-WAVE.4, FR-EXP.7, V-3 | §6.2 **TS-D2 override** |
| Export | FR-EXP.1–.9, §1.7-A/B | §9, §6.5 **TS-D8** |
| Worker/compute | FR-VIZ.2/.4, NFR-PERF.1–.3 | §7 (TS-D1/D9), §3.3 (TS-D7) |
| 3D/2D/picking | FR-VIZ.1/.3/.6 | §8 (TS-D5/D6), OI-5 → §8.5 |
| Validation | FR-VAL.1–.16, FR-UI.3 | §10 (TS-D7) |
| Nesting | FR-NEST.1–.10 | §6.6 **TS-D12**, §9 |
| Resilience | NFR-COMPAT.1 | §7.4 (TS-D11), §8.5 |
| Verification | V-1…V-7 | §12 |
