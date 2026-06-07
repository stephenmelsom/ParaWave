# ParaWave — Product Requirements Document

**Status:** Draft v1 · **Date:** 2026-06-07 · **Owner:** sjmelsom

## 1. Summary
ParaWave is a free, browser-based tool that lets makers design *sliced parametric wave* wall
art and export cut-ready SVGs for a CNC router (or laser). The user specifies the overall
dimensions, slat and gap sizes, and a wave function with its parameters. The app renders a
live 3D preview of the assembled piece and a 2D view of each slat, then exports one numbered
SVG per slat for nesting and cutting in the user's own CAD/CAM software.

## 2. Problem & motivation
Sliced wave wall art is visually striking but tedious to design by hand: the maker must slice
a 3D wave surface into dozens of parallel planes and draw each slat's profile accurately.
Existing approaches require parametric CAD (Grasshopper/Fusion) skills or manual drafting.
There is no simple, free, web-based tool that goes straight from "a few parameters" to
"cut files." ParaWave fills that gap.

## 3. Goals
- Let a non-CAD user design a complete wave wall piece in minutes from a handful of parameters.
- Produce dimensionally accurate, CAM-ready SVGs (1:1 real-world scale) for every slat.
- Give immediate visual feedback (3D + 2D) so the user can judge the design before cutting.
- Run entirely client-side as a static site on GitHub Pages (zero hosting cost, no backend).

## 4. Non-goals (v1)
- No user accounts, cloud save, or design sharing.
- No automatic sheet nesting / material-optimization layout (user nests in their own CAM).
- No toolpath, kerf, or tool-diameter compensation (export true geometry; CAM applies offset).
- No engraving, registration holes, mounting slots, or joinery features on slats.
- No horizontal-slat or curved-wall layouts; vertical slats on a flat wall only.
- No material/cost estimation or cut-time estimation.

## 5. Target users
- **Hobbyist CNC/laser makers** who own a router or laser and CAD/CAM software, comfortable
  importing SVGs, but not necessarily fluent in parametric CAD. *Primary.*
- **Small custom-furniture / wall-art shops** producing made-to-order decorative panels.
- **Designers/architects** prototyping decorative acoustic or feature walls.

## 6. Product concept & geometry model
The physical piece is a set of `N` identical-thickness slats standing in vertical planes,
spaced across the width, each fixed flat to the wall by its straight back edge. Each slat's
front edge is cut to a profile so that, across all slats, the front edges trace a wave
surface.

**Coordinate model**
- `x` — horizontal, across the total width `W`.
- `y` — vertical, the height `H`.
- `z` — depth/protrusion from the wall, between minimum protrusion `p_min` and max depth `D`.
- Wave surface: each wave function emits a value `f(x, y) ∈ [−1, 1]` by construction (see §8).
  Protrusion maps linearly and deterministically:
  **`p(x, y) = p_min + (D − p_min) · (f + 1) / 2`** — troughs (`f = −1`) sit at `p_min`, peaks
  (`f = +1`) reach exactly `D`. There is no separate amplitude knob; `p_min` and `D` *are* the
  depth swing. Because peaks always land at `D`, the wave can never exceed the declared depth.
- **Slat count:** `N = floor((W + gap) / (slat_width + gap))`.
- **Centerline sampling:** each fin samples the field at its own horizontal centerline `x_i`,
  giving the 2D edge curve `p(x_i, y)`. A fin is a flat board — that single profile is
  extruded straight through the `slat_width` thickness (both faces identical).
- **Slat `i` profile** (in the y–z plane, at centerline `x_i`): straight back edge at `z = 0`
  from `y = 0..H`; front edge follows `z = p(x_i, y)`; closed by top/bottom edges.
- Each slat is cut from sheet stock whose **thickness equals `slat_width`**; the SVG profile's
  dimensions are `H` (tall) × up to `D` (deep).
- **Width remainder:** `slat_width` and `gap` are honored exactly and never silently altered.
  The `N` fins span `N·slat_width + (N−1)·gap ≤ W`; the array is **centered** with equal left/
  right end margins, and the actual spanned width and margin are reported in the readouts.

## 7. Inputs (parameters)
**Global dimensions**
- Total height `H`, total width `W`, max depth `D` (the peak protrusion).
- Slat width (= sheet thickness used), gap width between slats.
- Minimum protrusion `p_min` (depth kept at wave troughs). Together, `p_min` and `D` define the
  full depth swing — there is no separate amplitude control.
- **Sample density / smoothness:** how finely the front edge is sampled before the smooth curve
  is fitted (see §10). One knob; higher = smoother at the cost of file size.
- Units: millimeters or inches, user-selectable; all SVGs exported at 1:1 real scale.

**Wave function selection + parameters** (see §8). The parameter panel updates to match the
selected wave family.

**Derived/read-only readouts:** computed fin count `N`, actual spanned width and end margins,
required stock thickness (= slat width), per-fin min/max depth (`p_min`/`D`), total footprint.

## 8. Wave function library (v1)
Every function obeys a shared contract: it emits a value `f(x, y) ∈ [−1, 1]` by construction
(no dependence on the sampled extremes), so depth mapping (§6) is deterministic and the same
parameters always yield the same geometry.
1. **2D / diagonal sine** — `f = sin(2π(x/λx + y/λy) + φ)`. Params: wavelength `λx`, `λy`,
   phase `φ`. Produces diagonal flowing bands.
2. **Radial / concentric** — `f = sin(2π·r/λ + φ)`, `r = dist((x,y),(cx,cy))`. Params: center
   `(cx, cy)`, wavelength `λ`, phase `φ`, optional radial decay. Ripple/drop look.
3. **Interference / multi-source** — weighted sum of `K` sources (each diagonal or radial),
   **divided by Σ|weights|** so the result stays within `[−1, 1]`. Params: per-source type,
   position/direction, wavelength, phase, weight. Creates complex pinched/swirled surfaces like
   the reference photo. (Trade-off: some patterns may not reach the full `[−1,1]` extremes, so
   the piece won't always use the entire `D` — accepted in exchange for determinism.)

This shared `[−1, 1]` output contract is also what lets the smooth front-edge curve fit (§10)
work identically for every wave family, and lets new families be added without reworking the
slicing or export pipeline.

## 9. Visualization requirements
- **Live 3D preview:** the assembled wall (all fins, correct thickness, gaps, depths) that the
  user can orbit/zoom. Updates are **live but throttled** — recompute is coalesced to one per
  animation frame (debounced) so dragging a slider feels live without re-meshing hundreds of
  fins on every pointer event. This is the primary whole-piece read.
- **2D slat-profile inspector (v1):** the exact cut profile of a selected fin, rendering the
  *identical* path that will be exported as its SVG — the tool for verifying a cut before
  committing. (An assembled all-fins front elevation is deferred to v1.1.)
- **Validation feedback:** hard errors block export with a field-level reason (see §12);
  non-fatal conditions show inline warnings — e.g. a **soft performance warning above ~400
  fins** (no hard cap). Depth can never exceed `D` by construction, so there is no clipping
  warning.
- Target: responsive interaction on a typical laptop into the few-hundred-fin range. Export
  always recomputes at full fidelity regardless of any preview throttling.

## 10. Export requirements
- **Format:** SVG, one file per slat, true geometry, 1:1 real-world scale with explicit
  physical units (mm/inch) so CAD/CAM imports at correct size.
- **Naming:** sequential, zero-padded, ordered across the width (e.g. `slat_001.svg` …
  `slat_NNN.svg`) so assembly order is unambiguous from filenames.
- **Bundling:** all slat SVGs delivered as a single downloadable `.zip`.
- **Geometry:** each slat is one closed path (the cut outline). The straight back/top/bottom
  edges are line segments; the curved front edge is a **smooth cubic-Bézier path fitted
  (Catmull-Rom) through densely sampled points** at the chosen sample density (§7), so the cut
  is smooth and the file stays compact. No engrave layer, holes, or slots in v1. Output
  orientation/Y-axis convention chosen to import cleanly into common CAM.
- **Determinism:** identical parameters always yield identical SVGs.

## 11. User flow
1. Land on the app (static page) → see default design rendered in 3D + 2D.
2. Set units; enter `H`, `W`, `D`, slat width, gap.
3. Pick a wave function; adjust its parameters with live preview feedback.
4. Review the 3D assembled look and inspect individual slat profiles in 2D.
5. Resolve any validation warnings.
6. Click **Export** → download a zip of numbered per-slat SVGs.
7. Import into CAD/CAM, nest, and cut.

## 12. Constraints, validation & assumptions
- Must be a fully static, client-side app deployable to GitHub Pages (no server, no DB).
- Runs in current evergreen browsers; 3D preview requires WebGL.
- **Desktop-first, tablet-functional, phones out of scope for v1** — the layout targets a wide
  viewport; it should load and work on a tablet, but no phone-specific optimization.
- All geometry math and SVG generation happen in the browser; no data leaves the device.
- Real-world unit accuracy is critical — exported parts must match specified dimensions.

**Validation & edge cases**
- **Hard-block export** (with a specific message at the offending field) on geometrically
  impossible inputs: `D ≤ p_min`, `slat_width + gap > W` (i.e. `N < 1`), or any wavelength
  `≤ 0`. Inputs are never silently clamped or coerced.
- **Soft warnings** (export still allowed) for non-fatal conditions, e.g. fin count > ~400.
- Width that doesn't divide evenly is handled by centering with end margins (§6), not by
  altering `slat_width`/`gap` or the overall `W`.

## 13. Success metrics
- A new user can go from landing to a downloaded, correctly-scaled SVG set without docs.
- Exported SVGs import into common CAD/CAM (e.g. Fusion 360, VCarve, LightBurn) at correct
  size and cut without manual repair.
- 3D/2D preview visibly matches the cut result.
- Page loads and stays interactive on a typical laptop for realistic slat counts.

## 14. Future considerations (post-v1)
- Assembled 2D front-elevation view (all fin edges together) — targeted for v1.1.
- Automatic sheet nesting and material-yield optimization.
- Saved/shareable designs (URL params or config import/export).
- More wave families (Gaussian bumps, noise/terrain, image-driven height maps).
- Optional engraving (slat numbers), registration holes, and mounting/joinery features.
- Kerf/tool-diameter compensation; DXF export; horizontal slats and non-flat walls.

## 15. Open questions
- Default values and sane min/max ranges for each parameter (to be set in requirements doc).
- Exact SVG coordinate convention (Y-up vs Y-down) for best CAM compatibility — decide in
  tech spec after confirming the user's primary CAM tool.
