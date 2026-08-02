# ParaWave — Software Requirements Specification (SRS)

**Status:** Draft v2 · **Date:** 2026-06-07 · **Owner:** sjmelsom
**Companion to:** [`PRD.md`](./PRD.md) (Draft v1, 2026-06-07)

---

## 1. Introduction

### 1.1 Purpose
This document refines the ParaWave PRD into a set of numbered, individually verifiable
requirements. Where the PRD states *what* the product does and *why*, this SRS states the
precise, testable behavior an implementation must satisfy — parameter ranges, validation
messages, geometry formulas, and acceptance criteria. It is the bridge between the PRD and
a forthcoming technical specification.

### 1.2 Scope
Covers v1 of ParaWave as bounded by PRD §3 (Goals) and §4 (Non-goals). It refines PRD
§6–§12. It does **not** specify implementation technology, framework choices, or file/module
layout — those belong to the tech spec.

### 1.3 Intended audience
The implementing engineer(s), the product owner (acceptance), and any reviewer auditing
PRD coverage via the traceability matrix (§7).

### 1.4 Relationship to the PRD
The PRD is the source of truth for intent and terminology. Several decisions in §1.7
deliberately **refine or override** specific PRD passages; those are called out explicitly.
Every requirement carries a `[PRD §x]` trace.

### 1.5 Definitions & glossary
- **Slat / fin** — one flat board standing in a vertical plane, fixed to the wall by its
  straight back edge. Used interchangeably (PRD uses both).
- **`f(x, y)`** — the wave field; by contract emits a value in `[−1, 1]` (PRD §8).
- **Protrusion `p`** — depth of the front edge from the wall at a point, in `[p_min, D]`.
- **Depth swing** — the interval `[p_min, D]`; there is no separate amplitude control.
- **Centerline `x_i`** — the horizontal position of fin *i*'s center, where its profile is
  sampled.
- **`N`** — computed fin count.
- **Fit tolerance** — the single adaptive-sampling knob: the maximum allowed deviation
  between the exported curve and the true wave. Doubles as the accuracy guarantee (§1.7-C).
- **CAM** — computer-aided manufacturing (the user's downstream cut software).

### 1.6 Requirement conventions
- **SHALL** — mandatory for v1. **SHOULD** — strongly recommended. **MAY** — optional.
- **ID scheme** — `FR-<AREA>.<n>` functional, `NFR-<AREA>.<n>` non-functional. IDs are
  stable; superseded requirements are struck, not renumbered.
- Each requirement is stated as: **Requirement** · *Acceptance* · `[PRD trace]`.

### 1.7 Resolved design decisions (refine/override the PRD)
These were settled in design review and govern the requirements below.
- **A — Target CAM is Carbide Create.** SVG export is tuned for Carbide 3D's free CAM
  (Shapeoko/Nomad). Implication: the root `<svg>` SHALL carry explicit physical
  `width`/`height` units **and** a `viewBox` where 1 user unit = 1 mm, eliminating the
  DPI-scaling ambiguity Carbide Create is sensitive to (FR-EXP.1).
  > **Refined by TECH_SPEC §6.5 (TS-D8):** exported geometry is **always authored in mm**
  > (`viewBox` 1u=1mm) regardless of the UI unit; the inch toggle is display-only. This
  > resolves the §1.7-A vs FR-EXP.9 tension toward mm. The chosen display unit is preserved
  > in the manifest, not the geometry.
- **B — Y convention (resolves PRD §15 / former OI-1).** Author standard SVG (Y-down);
  Carbide Create flips to its Y-up workspace so parts land upright. Confirmed by a
  test-import (Verification §V-1).
- **C — Sampling = adaptive-to-tolerance.** The PRD's "sample density" knob is replaced by
  a **fit tolerance** (max curve deviation). This *unifies* the smoothness knob with the
  accuracy requirement: by construction the cut deviates from the true wave by ≤ tolerance
  (NFR-ACCURACY.1). Default 0.05 mm.
- **D — Curve engine = analytic Hermite + adaptive subdivision (overrides PRD §10's
  Catmull-Rom).** Each cubic Bézier uses the wave's exact endpoint tangents (Hermite);
  segments recursively subdivide only where midpoint error exceeds tolerance. A fixed,
  deterministic subdivision rule (fixed seed points, midpoint test, capped depth) preserves
  determinism. Sharp features are preserved: where a radial source center lands exactly on a
  fin centerline (`x_i == cx`), the path is **split at the kink** (`y = cy`) rather than
  rounded.
- **E — Diagonal-wave parameterization = `(θ, λ, φ)` everywhere (overrides PRD §8.1's
  `λx`/`λy`).** Same model for the standalone family and interference sources.
- **F — Coordinate conventions.** Piece frame `x ∈ [0, W]`, `y ∈ [0, H]`, origin
  bottom-left. Radial center `(cx, cy)` default `(W/2, H/2)`, **permitted outside the piece**
  (partial ripples). `θ`, `φ` in degrees; `λ` in absolute length units. The unit toggle
  stores one canonical internal unit and only *formats* for display (round-trip safe).
- **G — Export includes a one-way parameter manifest** (`parawave-design.json`); this
  documents what was cut and stays within the v1 "no saved designs" non-goal (FR-EXP.8).
- **H — Default landing design = interference, 2 sources** (the `wave.jpg` hero look):
  src1 diagonal `θ=30°, λ=300 mm`; src2 radial centered, `λ=200 mm`; equal weights.

---

## 2. Overall description

### 2.1 Product context
ParaWave is a free, fully client-side, static web app (deployable to GitHub Pages) that
turns a handful of parameters into a 3D/2D preview of sliced parametric wave wall art and
exports one cut-ready SVG per slat (PRD §1).

### 2.2 Geometry model (by reference)
The coordinate model, protrusion map, fin-count formula, centerline sampling, and centered
width-remainder handling are defined in **PRD §6** and restated as testable requirements in
§3.2 (FR-GEO) — not re-derived here.

### 2.3 Assumptions & dependencies
- **A1** — Runs in current evergreen browsers; the 3D preview requires WebGL. `[PRD §12]`
- **A2** — All math and SVG generation occur in the browser; no backend, no data egress.
  `[PRD §12]`
- **A3** — Deployed as a static site (no server, no DB). `[PRD §12]`
- **A4** — Desktop-first; tablet-functional (incl. touch orbit); phones out of scope for v1.
  `[PRD §12]`
- **A5** — Real-world unit accuracy is critical; exported parts must match specified
  dimensions to within the fit tolerance. `[PRD §12]`

---

## 3. Functional requirements

### 3.1 FR-IN — Inputs & units
- **FR-IN.1** — The system SHALL accept all global parameters in §5: `H`, `W`, `D`,
  `p_min`, slat width, gap width, and **fit tolerance** (the adaptive-sampling accuracy
  knob, §3.6). `[PRD §7]`
- **FR-IN.2** — The system SHALL provide a unit toggle between **mm** and **inch**, default
  **mm**.
  *Accept:* toggling reconverts all displayed dimensional values and readouts in place
  without changing the physical design; exports remain 1:1 to physical size regardless of
  displayed unit. Values are stored in one canonical internal unit and only formatted for
  display, so mm→inch→mm round-trips with zero drift. `[PRD §7, §10] · §1.7-F`
- **FR-IN.3** — The wave-function parameter panel SHALL update to show exactly the
  parameters of the selected wave family (§3.3) and no others. `[PRD §7, §8]`
- **FR-IN.4** — The system SHALL display derived read-only readouts: computed fin count
  `N`, actual spanned width, equal end margins, required stock thickness (= slat width), the
  **declared** depth swing (`p_min` / `D`), the **actual depth range used** (observed
  min/max protrusion across the piece — may be a sub-range of `[p_min, D]` for interference,
  §1.7), and total footprint.
  *Accept:* changing any input that affects these updates the readouts live. `[PRD §7]`
- **FR-IN.5** — The system SHALL NOT silently clamp or coerce any entered value; invalid or
  out-of-range entries are surfaced via validation (FR-VAL), not rewritten. `[PRD §6, §12]`

### 3.2 FR-GEO — Geometry engine
- **FR-GEO.1** — Fin count SHALL be `N = floor((W + gap) / (slat_width + gap))`. `[PRD §6]`
- **FR-GEO.2** — The `N` fins SHALL be **centered** within `W` with equal left/right end
  margins; spanned width `N·slat_width + (N−1)·gap` and the end margin SHALL be reported.
  `slat_width` and `gap` SHALL be honored exactly, never altered. `[PRD §6]`
- **FR-GEO.3** — Protrusion SHALL map as
  **`p(x, y) = p_min + (D − p_min) · (f(x,y) + 1) / 2`**: troughs (`f = −1`) at `p_min`,
  peaks (`f = +1`) at exactly `D`. The mapping uses the analytic `±1` bounds, **not** any
  observed extremes (so it is design-independent and deterministic).
  *Accept:* `f = −1 ⇒ p = p_min`; `f = +1 ⇒ p = D`; `p` never exceeds `D`. `[PRD §6]`
- **FR-GEO.4** — Each fin SHALL sample the field at its own centerline `x_i`, producing the
  2D edge curve `p(x_i, y)` over `y = 0..H`. `[PRD §6]`
- **FR-GEO.5** — Each fin SHALL be a flat board: the single centerline profile is extruded
  straight through `slat_width` (both faces identical). `[PRD §6]`
- **FR-GEO.6** — Each slat profile SHALL be a closed region (y–z plane at `x_i`): straight
  back edge at `z = 0` from `y = 0..H`, front edge `z = p(x_i, y)`, closed by top/bottom
  edges. **Orientation:** height `H` along SVG +Y (bottom of piece at `Y=0`), straight back
  edge as the left vertical line at `X=0`, wave front bulging toward +X (depth, up to `D`).
  The 2D inspector renders this identical geometry (FR-VIZ.3). `[PRD §6] · §1.7-B`

### 3.3 FR-WAVE — Wave function library
All families SHALL obey the contract `f(x, y) ∈ [−1, 1]` **by construction** (PRD §8).
- **FR-WAVE.1 — Diagonal sine.** `f = sin(2π·(x·cosθ + y·sinθ)/λ + φ)`. Params: direction
  `θ`, wavelength `λ`, phase `φ`. *Overrides PRD §8.1's `λx`/`λy` (§1.7-E).*
  *Accept:* output in `[−1, 1]`; identical params yield identical fields. `[PRD §8.1]`
- **FR-WAVE.2 — Radial / concentric.** `f = a(r)·sin(2π·r/λ + φ)`,
  `r = dist((x,y),(cx,cy))`. Params: center `(cx, cy)`, `λ`, `φ`, radial decay.
  Decay is an **exponential amplitude falloff** `a(r) = e^{−k·r}` with `k` derived from a
  user value in `[0, 1]` (0 = none); since `a(r) ≤ 1`, the `[−1, 1]` bound is preserved.
  Center MAY lie outside the piece.
  *Accept:* output in `[−1, 1]` for all decay values. `[PRD §8.2] · §1.7-F`
- **FR-WAVE.3 — Interference / multi-source.** Weighted sum of `K` sources (each diagonal
  or radial, parameterized per FR-WAVE.1/.2), **divided by `Σ|weights|`** so the result
  stays within `[−1, 1]`. `K ∈ [1, 8]`. Per source: type, parameters, weight. All-zero
  weights are blocked (FR-VAL.11).
  *Accept:* `|f| ≤ 1` for any weights; some patterns MAY not reach `±1` (piece won't use the
  full `D`) — accepted for determinism; the unused depth is shown via the actual-range
  readout (FR-IN.4). `[PRD §8.3]`
- **FR-WAVE.4 — Determinism.** Identical parameters SHALL always yield an identical field
  `f`, independent of preview/export path. `[PRD §8, §10]`

### 3.4 FR-VIZ — Visualization
- **FR-VIZ.1** — The system SHALL render a live 3D preview of the full assembled wall — all
  fins at correct thickness, gaps, and depths — that the user can orbit and zoom (touch on
  tablet). `[PRD §9]`
- **FR-VIZ.2** — Preview recompute SHALL be **coalesced to ≤ 1 per animation frame**
  (debounced).
  *Accept:* continuous slider drag triggers ≤ 1 recompute/frame; the view still tracks input.
  `[PRD §9]`
- **FR-VIZ.3** — The system SHALL provide a 2D slat-profile inspector for a selected fin that
  renders the **identical path** exported as that fin's SVG.
  *Accept:* inspected path and exported SVG path for the same fin are geometrically
  equivalent. `[PRD §9, §10]`
- **FR-VIZ.4** — Export SHALL always recompute at full fidelity regardless of preview
  throttling. `[PRD §9, §10]`
- **FR-VIZ.5** — (Deferred) An assembled all-fins front elevation is **out of scope for v1**
  (targeted v1.1). `[PRD §9, §14]`
- **FR-VIZ.6** — The user SHALL select the inspected fin both by clicking a fin in the 3D
  view and via a fin-index control (`1..N`); the selected fin SHALL be highlighted in 3D.
  `[PRD §9]`

### 3.5 FR-VAL — Validation
Two tiers: **hard block** (export disabled, field-anchored message) and **soft warning**
(export allowed). Messages are proposed wording. No input is ever silently clamped (FR-IN.5).

**Hard blocks** *(Accept: export disabled and the stated message shows at the named field
while the condition holds.)*
- **FR-VAL.1** — `D ≤ p_min` → at `D`: *"Max depth must be greater than minimum
  protrusion."* `[PRD §12]`
- **FR-VAL.2** — `slat_width + gap > W` (`N < 1`) → at `W`: *"Width is too small to fit a
  single slat plus gap."* `[PRD §12]`
- **FR-VAL.3** — Any wavelength `λ ≤ 0` (any family/source) → at the offending field:
  *"Wavelength must be greater than zero."* `[PRD §8, §12]`
- **FR-VAL.4** — Non-positive `H`, `W`, or slat width → at the field: *"Value must be
  greater than zero."* `[PRD §12]`
- **FR-VAL.5** — `p_min < 0` → at `p_min`: *"Minimum protrusion cannot be negative."*
  `[PRD §12]`
- **FR-VAL.10** — Fit tolerance `≤ 0` → at the tolerance field: *"Tolerance must be greater
  than zero."* `[PRD §10, §12] · §1.7-C`
- **FR-VAL.11** — All interference source weights zero (`Σ|weights| = 0`, would divide by
  zero) → at the sources panel: *"At least one source weight must be non-zero."*
  `[PRD §8.3] · §1.7-G`
- **FR-VAL.12** — With nesting enabled: non-positive sheet width/height → *"Value must be
  greater than zero."*; negative edge margin → *"Edge margin cannot be negative."*; negative
  part clearance → *"Part clearance cannot be negative."* `[PRD §10]`
- **FR-VAL.13** — With nesting enabled and usable sheet height `< H` → at sheet height:
  *"Sheet height is too small to fit a full-height slat."* `[PRD §10]`
- **FR-VAL.14** — With nesting enabled and usable sheet width `< p_min` → at sheet width:
  *"Sheet width is too small to fit a single slat profile."* `[PRD §10]`

  > FR-VAL.12–.14 are computable from the design plus the sheet config alone, with no
  > geometry evaluation, so they belong to the synchronous validation tier and genuinely
  > disable export (see FR-UI.3 and TECH_SPEC TS-D12).

**Soft warnings** *(Accept: non-blocking inline warning; export stays enabled.)*
- **FR-VAL.6** — `N > 400` → *"Large fin count ({N}) — preview and export may be slow."*
  No hard cap. `[PRD §9, §12]`
- **FR-VAL.7** — `gap = 0` → *"Gap is zero; slats will touch with no spacing."* `[PRD §12]`
- **FR-VAL.8** — Very tight tolerance producing a large total Bézier-segment count across all
  fins (> ~50 000, tunable) → *"Tight tolerance is producing a very large/heavy export."*
  `[PRD §7, §10] · §1.7-C`
- **FR-VAL.9** — The system SHALL NOT emit a depth-clipping warning; peaks are bounded by `D`
  by construction (FR-GEO.3). `[PRD §9]`
- **FR-VAL.15** — Slats too wide to fit the usable sheet width → *"{n} slats are too wide for
  this sheet and were left unnested."* The affected slats are still emitted as per-slat SVGs
  and still appear in the cut list with an empty sheet column. `[PRD §10]`
- **FR-VAL.16** — Nesting requiring more than ~50 sheets (tunable) → *"Design needs {n} sheets
  of stock — consider a larger sheet."* `[PRD §10]`

  > FR-VAL.15–.16 depend on a nest result, which depends on worker output. Because export
  > enablement is decided in the synchronous tier (FR-UI.3), these SHALL be soft warnings —
  > a hard block here would appear in the UI without actually disabling export.

### 3.6 FR-EXP — Export
- **FR-EXP.1** — Export SHALL produce one SVG per slat, true geometry, at **1:1 real-world
  scale**. The root `<svg>` SHALL carry explicit physical `width`/`height` units (mm/inch)
  **and** a `viewBox` where 1 user unit = 1 mm, so Carbide Create (and peers) import at true
  size with no DPI ambiguity.
  *Accept:* importing a slat SVG into Carbide Create yields a part matching `H × p(x_i,·)`
  within tolerance (NFR-ACCURACY.1). `[PRD §10] · §1.7-A`
- **FR-EXP.2** — Each slat SHALL be a **single closed path**: straight back/top/bottom edges
  as line segments; the curved front edge as **cubic Béziers fitted by analytic Hermite
  tangents with adaptive subdivision to the fit tolerance** (§1.7-D), preserving sharp
  features (split at radial-center kinks).
  *Accept:* path is closed; front-edge max deviation from `p(x_i, y)` ≤ fit tolerance.
  `[PRD §10]`
- **FR-EXP.3** — Filenames SHALL be sequential, ordered across the width, **zero-padded to
  the digit count of `N` (minimum 3)** — e.g. `slat_001.svg` … `slat_NNN.svg`.
  *Accept:* lexical sort reproduces left-to-right assembly order. `[PRD §10]`
- **FR-EXP.4** — All slat SVGs SHALL be delivered as a single downloadable `.zip`. `[PRD §10]`
- **FR-EXP.5** — Exports SHALL contain no engrave layer, holes, or slots in v1.
  `[PRD §4, §10]`
- **FR-EXP.6** — Output orientation/Y-axis: author standard SVG (Y-down); Carbide Create
  flips to its Y-up workspace so parts land upright per FR-GEO.6. SHALL be confirmed by a
  Carbide Create test-import (V-1). `[PRD §10, §15] · §1.7-B`
- **FR-EXP.7 — Determinism.** Identical parameters SHALL always yield byte-identical slat
  **SVG geometry**. (The manifest's timestamp/app-version are exempt.) `[PRD §10] · §1.7-G`
  > **Relaxed by TECH_SPEC §6.2 (TS-D2):** because JS `Math.sin/cos/exp` are not bit-stable
  > across engines (libm), the guarantee is narrowed to **within fit tolerance** rather than
  > byte-identical; same engine + build still reproduces identical bytes. See V-3.
- **FR-EXP.8 — Manifest.** The zip SHALL include `parawave-design.json` listing every
  parameter, units, computed `N`, wave family/source config, app version, and export date —
  one-way documentation for re-cuts/provenance (not a load feature). `[PRD §4] · §1.7-G`
- **FR-EXP.9 — Coordinate precision.** Path coordinates SHALL be emitted at fixed precision
  (4 decimals in mm / 5 in inch — well below tolerance), so rounding error ≪ tolerance and
  output stays deterministic. `[PRD §10]`
  > **Refined by TECH_SPEC §6.5 (TS-D8):** emitted coordinates are **always mm at 4 dp**; the
  > "5 decimals in inch" clause is reinterpreted as an internal precision floor for
  > inch-sourced input values, not an inch-unit export.

### 3.7 FR-UI — Flow & layout
- **FR-UI.1** — On landing, the app SHALL render a **default design** (interference, 2
  sources — §1.7-H) in both 3D and 2D without user input. `[PRD §11]`
- **FR-UI.2** — The app SHALL support the §11 happy path in order: set units → enter
  dimensions → pick a wave function and adjust params with live feedback → review 3D and
  inspect 2D slats → resolve validation → export zip. `[PRD §11]`
- **FR-UI.3** — The **Export** action SHALL be disabled while any hard block (FR-VAL.1–.5,
  .10, .11) is active, enabled otherwise. `[PRD §11, §12]`
- **FR-UI.4** — Layout SHALL target a wide viewport (desktop-first) and remain functional on
  a tablet; no phone-specific optimization. `[PRD §12]`

### 3.8 FR-NEST — Stock sheet nesting

- **FR-NEST.1** — The app SHALL accept a stock configuration: sheet width, sheet height, edge
  margin, part clearance, and a label style, plus an enable/disable toggle. Stock
  configuration is machine state, distinct from the design. `[PRD §10]`
- **FR-NEST.2** — With nesting enabled, the app SHALL report the number of stock sheets
  required, rows per sheet, and stock utilisation, updating live as parameters change.
  `[PRD §10]`
- **FR-NEST.3** — Nested parts SHALL NOT overlap, and SHALL be separated by at least the
  configured clearance at every height. Parts SHALL lie entirely within the sheet less its
  edge margin. *Accept: sampled collision test across all three wave families (V-7, 9.1).*
- **FR-NEST.4** — Parts SHALL be placed in fin-index order, alternating 0° and 180° in-plane
  rotation. The system SHALL NOT mirror parts: a mirrored slat is only interchangeable if the
  stock has no show face. `[PRD §10]`
- **FR-NEST.5** — Export SHALL emit one SVG per sheet under `sheets/`, each carrying explicit
  physical units and a matching `viewBox` per FR-EXP.1, one closed path per part, and a
  clearly-identified stock outline that is not a cut path.
- **FR-NEST.6** — Placement transforms SHALL be baked into emitted coordinates; cut geometry
  SHALL NOT rely on SVG `transform` attributes. *Rationale: primitive CAM importers mishandle
  nested transforms.*
- **FR-NEST.7** — Export SHALL emit a `cutlist.csv` mapping every slat to its sheet, position,
  rotation, and size. Every slat SHALL appear exactly once, including unnestable slats.
- **FR-NEST.8** — Part clearance is inter-part spacing only. The system SHALL NOT offset part
  geometry for kerf or tool diameter (consistent with PRD §4).
- **FR-NEST.9** — Part labels SHALL be emitted in a group separate from cut geometry, and
  SHALL be authored so they read upright after the CAM tool applies its Y-axis flip
  (FR-EXP.6). A stroked-outline label style SHALL be available for importers that discard SVG
  text.
- **FR-NEST.10** — Disabling nesting SHALL leave the per-slat export path fully functional and
  SHALL suppress all stock-sheet validation.

---

## 4. Non-functional requirements

### 4.1 NFR-PERF — Performance
- **NFR-PERF.1** — Interactive on a typical laptop into the few-hundred-fin range.
  `[PRD §9, §13]`
- **NFR-PERF.2** — No hard cap on fin count; counts above ~400 raise a soft warning only
  (FR-VAL.6). `[PRD §9, §12]`
- **NFR-PERF.3** — Export computes at full fidelity even when preview is throttled.
  `[PRD §9]`

### 4.2 NFR-COMPAT — Compatibility
- **NFR-COMPAT.1** — Runs in current evergreen browsers; 3D preview requires WebGL.
  *Accept:* without WebGL, the app degrades with a clear message rather than crashing
  (degraded-mode detail → tech spec). `[PRD §12]`
- **NFR-COMPAT.2** — Desktop-first, tablet-functional, phones out of scope. `[PRD §12]`

### 4.3 NFR-PRIV — Privacy & architecture
- **NFR-PRIV.1** — No data leaves the device; no backend or database. `[PRD §12]`

### 4.4 NFR-DEPLOY — Deployment
- **NFR-DEPLOY.1** — Fully static client-side bundle deployable to GitHub Pages at zero
  hosting cost. `[PRD §3, §12]`

### 4.5 NFR-ACCURACY — Dimensional accuracy
- **NFR-ACCURACY.1** — Exported geometry SHALL match the true wave to within the user-set
  **fit tolerance** (default 0.05 mm, floor 0.001 mm), before any CAM-applied kerf/tool
  offset. This is the same knob as adaptive sampling (§1.7-C).
  *Accept:* measured deviation of an imported slat from `p(x_i, y)` ≤ tolerance. `[PRD §12, §13]`

### 4.6 NFR-A11Y — Accessibility (light touch, v1)
- **NFR-A11Y.1** — All parameter controls SHOULD be keyboard-operable and labeled. `[PRD §13]`
- **NFR-A11Y.2** — Text/control contrast SHOULD meet WCAG AA. `[PRD §13]`

---

## 5. Parameter specification

> Primary unit mm; inch equivalents in parentheses are the displayed values when the unit
> toggle is set to inches. Resolves PRD §15's open item on defaults and ranges.

### 5.1 Global parameters

| Parameter | Default | Min | Max | Step | Notes |
|-----------|---------|-----|-----|------|-------|
| Height `H` | 600 mm (≈23.6") | 50 mm (≈2") | 2400 mm (≈94.5") | 1 mm (0.05") | total height |
| Width `W` | 900 mm (≈35.4") | 50 mm (≈2") | 3000 mm (≈118") | 1 mm (0.05") | total width |
| Max depth `D` | 60 mm (≈2.36") | > `p_min` | 300 mm (≈11.8") | 1 mm (0.05") | peak protrusion; > `p_min` (FR-VAL.1) |
| Min protrusion `p_min` | 5 mm (≈0.2") | 0 | < `D` | 1 mm (0.05") | depth at troughs |
| Slat width (= stock thickness) | 18 mm (≈0.71") | 3 mm (≈0.12") | 50 mm (≈2") | 0.1 mm (0.005") | 18 ≈ ¾" ply; common 6/9/12/18 |
| Gap width | 6 mm (≈0.24") | 0 | 100 mm (≈3.9") | 0.5 mm (0.02") | 0 → slats touch (FR-VAL.7) |
| Fit tolerance | 0.05 mm (≈0.002") | 0.001 mm | 1 mm (≈0.04") | 0.001 mm | max cut deviation; smaller = smoother + larger file (FR-VAL.8); = NFR-ACCURACY |
| Units | mm | — | — | — | {mm, inch} (FR-IN.2) |

### 5.2 Wave-family parameters

| Family | Parameters | Defaults | Ranges |
|--------|-----------|----------|--------|
| Diagonal sine (FR-WAVE.1) | `θ`, `λ`, `φ` | `θ = 30°`, `λ = 300 mm`, `φ = 0°` | `λ > 0`; `θ, φ ∈ [0°, 360°)` |
| Radial / concentric (FR-WAVE.2) | `(cx, cy)`, `λ`, `φ`, decay | center = `(W/2, H/2)`, `λ = 200 mm`, `φ = 0°`, decay = 0 | `λ > 0`; decay ∈ [0, 1]; center anywhere (incl. outside) |
| Interference (FR-WAVE.3) | `K` sources; per source: type + that family's params + weight | **landing default `K = 2`:** src1 diagonal `θ=30°, λ=300 mm`; src2 radial centered `λ=200 mm`; weights = 1 | `K ∈ [1, 8]`; each `λ > 0`; weights any real, normalized by `Σ|w|`, not all zero (FR-VAL.11) |

---

## 6. Out of scope (v1)

Per PRD §4 and §14, the following are explicitly **not** v1 requirements: user accounts /
cloud save / sharing; kerf/tool-diameter compensation; engraving,
registration holes, mounting slots, joinery; horizontal-slat or curved-wall layouts;
material/cost or cut-time estimation; assembled 2D front elevation (v1.1); DXF export.

---

## 7. Traceability matrix

| PRD section | Requirements |
|-------------|--------------|
| §6 Geometry model | FR-GEO.1–.6, FR-IN.5 |
| §7 Inputs | FR-IN.1–.5, §5 |
| §8 Wave library | FR-WAVE.1–.4, FR-VAL.3, FR-VAL.11, §1.7-E/F |
| §9 Visualization | FR-VIZ.1–.6, FR-VAL.6, FR-VAL.9, NFR-PERF.1–.3 |
| §10 Export | FR-EXP.1–.9, FR-NEST.1–.10, FR-VIZ.3–.4, FR-VAL.8/.10/.12–.16, §1.7-A/B/C/D/G |
| §11 User flow | FR-UI.1–.4 |
| §12 Constraints & validation | FR-VAL.1–.16, FR-IN.5, A1–A5, NFR-COMPAT, NFR-PRIV, NFR-ACCURACY |
| §13 Success metrics | NFR-PERF.1, NFR-ACCURACY.1, NFR-A11Y, FR-UI.1 |
| §14 Future considerations | §6 Out of scope, FR-VIZ.5 |
| §15 Open questions | §5 (defaults set), §1.7-B (Y convention resolved), §8 (residual issues) |

---

## 8. Open issues

- **OI-2 — Accuracy/fit tolerance default.** 0.05 mm default / 0.001 mm floor proposed;
  owner to confirm against Shapeoko/Nomad precision. (Now a single knob — §1.7-C.)
- **OI-3 — Interference source cap `K`.** Capped at 8; confirm against the `wave.jpg` look.
- **OI-4 — Parameter ranges.** All §5 values are proposals open to revision.
- **OI-5 — WebGL-absent degraded mode.** Exact fallback (NFR-COMPAT.1) → tech spec.
- **OI-6 — Soft-warning thresholds.** Fin count 400, segment count ~50 000, and sheet count
  50 are tunable placeholders.
- **OI-7 — Default label style.** Defaults to SVG `<text>`; if the V-7 import shows Carbide
  Create discards text elements, switch the default to the stroked-outline style (FR-NEST.9).

*(Former OI-1, SVG Y convention, is resolved — §1.7-B.)*

---

## 9. Verification

- **V-1 — Carbide Create test-import (critical).** Export a known design and import each slat
  into Carbide Create; confirm true size, upright orientation, and a single clean closed
  vector. Validates FR-EXP.1/.2/.6 and §1.7-A/B.
- **V-2 — Round-trip units.** Toggle mm→inch→mm; confirm all values return unchanged
  (FR-IN.2).
- **V-3 — Determinism.** Re-export identical parameters; confirm slat SVG geometry agrees
  **within fit tolerance** (manifest exempt) (FR-EXP.7, as relaxed by TECH_SPEC §6.2 / TS-D2).
  On the same engine + build this is byte-identical; numeric-within-tolerance is the
  cross-engine guarantee.
- **V-4 — Tolerance accuracy.** Measure exported front-edge deviation from `p(x_i, y)`;
  confirm ≤ fit tolerance (NFR-ACCURACY.1).
- **V-5 — Validation matrix.** Drive each FR-VAL.1–.11 condition; confirm correct hard
  block (with message + export disabled) or soft warning (export enabled).
- **V-6 — Inspector == export.** Compare the 2D inspector path to the exported SVG for the
  same fin; confirm geometric equivalence (FR-VIZ.3).
- **V-7 — Carbide Create nested-sheet import (critical, manual).** Import
  `sheets/sheet_001.svg` and confirm: the `stock` outline measures the configured sheet size
  (a reading of 2880 mm or 201.6 mm for a 762 mm sheet indicates a 96-DPI conversion); every
  part is present, upright, and inside the stock; each part is a **separate selectable
  object**, not one compound path; no repair/heal prompt appears; an outside-contour toolpath
  offsets outward on every part. Also record **whether `<text>` labels survive import** —
  that outcome decides the FR-NEST.9 default (OI-7).
