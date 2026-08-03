# ParaWave — Design System / UI Design Specification

**Status:** Draft v1 · **Date:** 2026-06-07 · **Owner:** sjmelsom
**Companion to:** [`PRD.md`](./PRD.md) (Draft v1) · [`REQUIREMENTS.md`](./REQUIREMENTS.md)
(SRS Draft v2) · [`TECH_SPEC.md`](./TECH_SPEC.md) (Draft v1)

---

## 0. How to read this document

The PRD states **what/why**, the SRS states **precise testable behavior** (`FR-*`/`NFR-*`), and
the TECH_SPEC states **how it is built**. This document governs the remaining axis: **how
ParaWave looks and feels** — its visual language, layout, components, motion, and states. It is
written for the implementing agent to follow directly.

Like the TECH_SPEC, it **references** SRS/TECH_SPEC IDs rather than restating behavior. Where a
number, message, formula, threshold, or acceptance test already lives in another doc, this
document points at the ID and specifies only the *appearance and interaction* that satisfies it.
This doc owns **appearance**; the SRS owns **behavior**. Section 11 traces every design decision
back to the requirement it serves.

Concrete tokens (CSS variable names + values) and an ASCII layout diagram are provided so the
implementer can act without re-deriving them. Final hex values may be tuned during build for
contrast (§10); **token names and roles are fixed.**

---

## 1. Design philosophy

### 1.1 The concept — "Workshop Instrument"
ParaWave turns a handful of numbers into a physical object that gets *cut*. The interface should
feel like the bench tool that does that: a **precision drafting instrument glowing in a workshop
at dusk**. Two worlds meet — the cold exactness of CAM (oscilloscope readouts, registration
marks, measured grids) and the warmth of woodcraft (the honey-oak piece in `wave.jpg`). The
chrome is the cold half; the work is the warm half.

The reference photo sets the palette directly: a **honey-gold wood piece** against a **cool
slate-blue wall**. We adopt that exact complementary tension:

- **Gold is the work.** The wave — in 3D, in the 2D inspector, in the live readouts that
  describe it — is the only thing that carries saturated warm color. Gold means "this is the
  thing you are making."
- **Slate-blue is the context.** Grids, rules, axes, registration marks, measurement ticks —
  the *wall* the work hangs on, the *table* it's drafted on. Cool, recessive, technical.
- **Charcoal is the room.** A warm near-black holds everything so the gold reads like lit wood.

### 1.2 Principles
1. **The preview is the hero and gets the light.** The 3D viewport is the largest region and the
   only place with atmosphere/glow. Everything else is instrumentation around it.
2. **Instrument-grade numbers.** Every dimension, count, and readout is monospaced, tabular, and
   unambiguous. A maker is about to cut real material — numbers must read like a caliper, not a
   web form.
3. **Chrome recedes; the work glows.** Panels, rails, and labels sit in low-contrast charcoal
   and slate. Saturated gold is reserved for the work and for the single primary action
   (Export).
4. **Nothing decorative without a measuring purpose.** Crosshairs, ticks, hairlines, and grids
   are allowed because they read as *instrumentation*. No ornament that doesn't imply precision.
5. **Live, but never frantic.** Feedback is immediate (FR-IN.4, FR-VIZ.2) but motion is calm and
   deliberate — a settling instrument, not a bouncing toy.

### 1.3 Anti-slop clause (non-negotiable)
This product must not look AI-generated-generic. Specifically **forbidden**:
- Inter, Roboto, Arial, or system-UI fonts anywhere. (Use §3's families only.)
- Purple/violet gradients; blue-on-white SaaS palettes; any light/white default theme.
- Generic rounded "card grid" dashboards, pill buttons with drop shadows, emoji as iconography.
- Evenly-distributed timid color. The palette is **dominant charcoal + sharp gold accent**, not
  a rainbow of equal-weight swatches.

---

## 2. Color system

Dark theme only. All colors are CSS custom properties; components reference tokens, never raw
hex. Values below are the canonical starting set; tune for contrast per §10 without renaming.

### 2.1 Tokens

```css
:root {
  /* — Room: warm near-black surfaces — */
  --bg:            #15110b;  /* app background (warm charcoal)               */
  --bg-2:          #1c1710;  /* sunken areas, viewport vignette base          */
  --panel:         #1e1812;  /* control rail / right column panels            */
  --panel-2:       #241d15;  /* raised rows, inputs, hover surfaces           */
  --edge:          rgba(240,220,180,0.08); /* warm hairline borders/dividers  */
  --edge-strong:   rgba(240,220,180,0.16); /* active/focused container edge   */

  /* — Ink: warm off-white text ramp — */
  --ink:           #f2e9d8;  /* primary text, key readout values              */
  --ink-dim:       #a99a82;  /* secondary text, labels                        */
  --ink-faint:     #6f6452;  /* tertiary: units, hints, disabled text         */

  /* — Gold: THE WORK (wave, primary action) — */
  --gold-deep:     #a4702f;  /* wave shadow / pressed / deep gradient stop    */
  --gold:          #e2a44f;  /* primary accent, active control fill           */
  --gold-bright:   #f6c97d;  /* highlights, focus glow, wave specular         */
  --gold-glow:     rgba(226,164,79,0.22); /* under-glow, viewport light       */

  /* Wave-surface gradient (3D material tint reference + 2D inspector fill) */
  --wave-shadow:   #8a5a2b;
  --wave-mid:      #c8843a;
  --wave-highlight:#f2c178;

  /* — Slate: THE WALL / instrumentation — */
  --cool:          #7e9bb0;  /* axes, measurement ticks, technical labels     */
  --cool-dim:      #4a5e6b;  /* secondary rules, inactive marks               */
  --grid:          rgba(126,155,176,0.06); /* blueprint grid lines            */
  --grid-strong:   rgba(126,155,176,0.12); /* major grid lines / crosshairs   */

  /* — Semantic — */
  --danger:        #e07a5f;  /* hard-block validation (warm red)              */
  --danger-bg:     rgba(224,122,95,0.10);
  --warn:          #e6b34a;  /* soft warning (amber)                          */
  --warn-bg:       rgba(230,179,74,0.10);
  --ok:            #9bbd7a;  /* valid / success confirmation                  */

  /* — Texture — */
  --grain-opacity: 0.05;     /* film-grain overlay strength                   */
}
```

### 2.2 Role rationale

| Token group | Role | Why |
|-------------|------|-----|
| `--bg / --bg-2 / --panel*` | All surfaces | Warm charcoal makes gold read as *lit wood*, not as UI accent. |
| `--ink*` | Text ramp | Warm off-white (not pure white) keeps the dusk-workshop warmth and softens contrast glare. |
| `--gold*` + `--wave-*` | The work + primary action | Saturated warmth is rationed to the wave and Export so attention follows the object being made. |
| `--cool* / --grid*` | Instrumentation | Slate-blue is the photo's wall — the complementary cool that makes gold pop and reads as "measurement context." |
| `--danger / --warn / --ok` | Validation tiers | Warm-red and amber sit in the same warm family as the UI; green reserved only for explicit success so it never competes with gold. |

### 2.3 Contrast intent
Body text and all control labels SHALL meet **WCAG AA** against their surface (NFR-A11Y.2):
`--ink`/`--ink-dim` on `--bg`/`--panel` pass; verify in build. **Gold on charcoal is for large
text, fills, and graphics only** — do not set small body copy in `--gold` on `--bg` without
checking the ratio; promote to `--gold-bright` or enlarge if it fails (§10). Never encode state
in color alone (§10).

---

## 3. Typography

Two families, two voices. **No third font.**

### 3.1 Families
- **Fraunces** *(display voice — warmth & character)* — the ParaWave wordmark, section headers,
  and the few large editorial moments. Use its high optical size and soft serifs; an **italic**
  cut is permitted for the wordmark's accent and empty-state lines. Weights: 400 / 500 / 600,
  `opsz` high for large sizes. Never used for numbers, controls, or dense labels.
- **IBM Plex Mono** *(instrument voice — precision & telemetry)* — **everything else**: control
  labels, numeric inputs, all readouts/telemetry, validation messages, buttons, tabs, units,
  filenames. This is the dominant typeface by volume; it is what makes ParaWave read as an
  instrument.

### 3.2 Scale & usage

| Token | Family | Size / weight | Use |
|-------|--------|---------------|-----|
| `--type-wordmark` | Fraunces | 28–34px / 600 | "ParaWave" header wordmark |
| `--type-h2` | Fraunces | 18–20px / 500 | Panel section titles ("Dimensions", "Wave Function") |
| `--type-readout-xl` | IBM Plex Mono | 22–26px / 500, tabular | Hero readouts (fin count `N`) |
| `--type-body` | IBM Plex Mono | 13–14px / 400 | Control labels, messages |
| `--type-value` | IBM Plex Mono | 13–14px / 500, tabular | Numeric values in readouts/inputs |
| `--type-label` | IBM Plex Mono | 11px / 500, +0.08em tracking, uppercase | Field micro-labels, axis/tick labels, units |

### 3.3 Numeric discipline
All numbers use **tabular figures** (`font-variant-numeric: tabular-nums`) so digits don't jitter
while a slider drags (FR-IN.4 live updates). Units (`mm`, `in`, `°`) render in `--type-label` /
`--ink-faint` immediately after the value, never larger than the value.

### 3.4 Self-hosting (implementation constraint)
Both families SHALL be **self-hosted as `woff2`** and bundled with the app. **No runtime CDN /
Google Fonts request** — this is required by TECH_SPEC §2 (self-contained bundle) and protects
NFR-PRIV.1 (no data egress) and NFR-DEPLOY.1 (static GitHub Pages). Subset to the glyphs used
(Latin + `°×→…` and digits) to stay within the bundle budget. Define a `font-display: swap`
fallback stack of generic `serif` / `monospace` only as a flash-prevention fallback, never as a
shipped substitute.

---

## 4. Layout & screen regions

### 4.1 Composition
Desktop-first, wide-viewport, **three-column instrument** with a full-width header (PRD §12 /
FR-UI.4). The 3D viewport dominates the center; instrumentation flanks it. Maps 1:1 onto the
TECH_SPEC §4 component modules.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ParaWave  ◆v1            [ mm | inch ]                      [ ⎙ EXPORT ZIP ]   │  Header
├───────────────────┬──────────────────────────────────────┬─────────────────────┤
│  CONTROL RAIL      │            3D VIEWPORT               │  INSPECTOR + READOUTS │
│  (ParamPanel)      │  ┌╴ ╶──────────────────────────╴ ╶┐ │  ┌───────────────────┐│
│                    │  ╷   · · · blueprint grid · · ·   ╵ │  │ 2D SLAT INSPECTOR  ││
│ ▸ DIMENSIONS       │  ╷        ╭─ warm glow ─╮          ╵ │  │  fin 014 / 037     ││
│   H ───●───  600mm │  ╷      ◜ the wave (gold) ◞        ╵ │  │  ┌──┐ profile path ││
│   W ──────●  900mm │  ╷                                 ╵ │  │  │ ╲│  + ticks      ││
│   D  ──●──    60mm │  ╷                                 ╵ │  │  └──┘              ││
│   p_min ●     5mm  │  └╴ ╶──────────────────────────╴ ╶┘ │  ├───────────────────┤│
│   slat ──●   18mm  │   ⌖ corner registration crosshairs  │  │ READOUTS (telemetry)││
│   gap  ●      6mm  │   fin-index [ 014 ▸ ]   orbit/zoom   │  │  N        37       ││
│ ▸ WAVE FUNCTION    │                                      │  │  span     888.0 mm ││
│   (diag)(rad)[intf]│                                      │  │  margin   6.0 mm   ││
│ ▸ SOURCES  K=2  +  │                                      │  │  depth  5.0–60.0mm ││
│   ▸ src1 diagonal  │                                      │  │  used   8.2–57.4mm ││
│   ▸ src2 radial    │                                      │  ├───────────────────┤│
│   tolerance ● .05  │                                      │  │ VALIDATION         ││
│                    │                                      │  │  ⚠ soft / ✕ block   ││
└───────────────────┴──────────────────────────────────────┴─────────────────────┘
```

### 4.2 Regions

| Region | Module(s) (TECH_SPEC §4) | Contents |
|--------|--------------------------|----------|
| **Header bar** | `App`, `UnitToggle`, `ExportButton` | Wordmark + version chip · mm/inch toggle (centered) · primary Export action (right). |
| **Control rail** (left) | `ParamPanel` | Collapsible groups: **Dimensions**, **Wave Function** (family tabs), **family params / Sources editor**, **Fit tolerance**. Family-aware: shows exactly the active family's params (FR-IN.3). |
| **Viewport** (center, hero) | 3D scene (`three/`) | Live assembled preview (FR-VIZ.1); fin-index control + selection highlight (FR-VIZ.6); instrument frame + atmosphere (§8). |
| **Inspector + Readouts** (right) | `Inspector2D`, `Readouts`, `ValidationList` | 2D slat profile = exact export path (FR-VIZ.3); telemetry readouts (FR-IN.4); validation list (FR-VAL). |

### 4.3 Grid & spacing
- **Base unit:** `8px`. Control-row rhythm `12px` vertical; group padding `20px`; rail/column
  gutter `1px` hairline (`--edge`) rather than wide whitespace — density reads as instrument.
- **Column widths (desktop):** rail `360px` · viewport `1fr` (min `560px`) · right column
  `320px`. Header height `64px`.
- **Density:** purposefully tight and aligned to the grid; labels left, values right-aligned in
  a fixed column so the rail reads like a spec sheet. Generous space is spent only *inside the
  viewport* (the hero), not on the chrome.

---

## 5. Component specifications

Each component below specifies **appearance, anatomy, and states**. Behavior/validation lives in
the SRS (referenced); this section defines only how it looks and responds.

### 5.1 Sliders + paired numeric input (global params)
Each dimensional parameter (`H, W, D, p_min, slat, gap, fit tolerance`) is a **labeled row**:
micro-label (left) · precision track (center) · editable numeric value + unit (right).

- **Track:** thin (`2px`) `--cool-dim` rail; the **filled portion** from min→thumb is `--gold`.
  Minor tick marks in `--grid-strong` at sensible intervals (instrument feel).
- **Thumb:** small (`12px`) gold square/diamond (not a round pill) with a `1px` `--bg` inset —
  reads as a caliper cursor. On hover/focus: `--gold-bright` + `--gold-glow` under-glow ring.
- **Value:** `--type-value`, tabular, directly editable (typing overrides the slider). Unit in
  `--type-label`/`--ink-faint`.
- **States:** hover (thumb brightens) · focus-visible (gold focus ring, §10) · invalid (row
  flagged per §7.1 — track turns `--danger`, value border `--danger`) · disabled (`--ink-faint`,
  no glow). Fully keyboard-operable (arrows = step, Home/End = min/max) per NFR-A11Y.1.
- Values display in the active unit (FR-IN.2) but the design treats the **stored value as mm**
  (TECH_SPEC §5.1 / TS-D8); only the formatting changes on toggle.

### 5.2 Wave-family tabs
A three-segment selector: **Diagonal · Radial · Interference** (FR-WAVE.1–.3). Segmented control
in `--panel-2`; the **active segment** carries a `--gold` underline/`2px` baseline and `--ink`
text; inactive segments `--ink-dim`. Switching tabs swaps the params region beneath (FR-IN.3)
with a quick cross-fade (§6). The active family also subtly tints the viewport's fin-index label
so 3D and controls feel linked.

### 5.3 Interference Sources editor
Shown only for the Interference family. A vertical list of **source rows** (`K ∈ [1,8]`,
FR-WAVE.3); header shows `SOURCES  K={n}` with a `+` add control (disabled at `K=8`).

Each row is a compact, collapsible card (`--panel-2`, `--edge`):
- **Row header:** drag-affordance dot · source `type` select (`diagonal`/`radial`) · a compact
  **weight** control (small slider + value) · remove `×` (disabled when `K=1`).
- **Row body (expanded):** that family's params as compact numeric inputs (`θ, λ, φ` for
  diagonal; `cx, cy, λ, φ, decay` for radial) — number fields here, not full sliders, to keep
  density manageable.
- **Weight sign:** negative weights allowed; show sign explicitly (`−`/`+`) and reflect relative
  magnitude in a thin gold bar so the maker reads each source's contribution at a glance.
- **States:** the **all-weights-zero** hard block (FR-VAL.11) flags the Sources header, not an
  individual field; per-source `λ ≤ 0` flags that source's `λ` field (FR-VAL.3, §7.1).

### 5.4 Unit toggle
A two-segment `mm | inch` switch in the header, styled like §5.2 (active = `--gold` baseline).
Toggling reformats all displayed values in place (FR-IN.2); design implies *display-only* — no
layout shift, value columns are wide enough for both `600 mm` and `23.62 in`.

### 5.5 Readouts / telemetry strip
A spec-sheet block in the right column: each row is `LABEL` (`--type-label`, `--ink-dim`, left)
→ `value unit` (`--type-value`, `--ink`, right, tabular). Rows (FR-IN.4): fin count `N`
(rendered larger, `--type-readout-xl`, as the headline figure), spanned width, end margin, stock
thickness (= slat width), **declared** depth range `p_min–D`, and **actual depth used** (observed
min/max — may be a sub-range; render the unused portion of the bar in `--cool-dim` so under-use
is visible per §1.7 of the SRS), total footprint. Values update live as inputs change (no
spinner; tabular figures prevent jitter).

### 5.6 Validation list
Lives below readouts (`ValidationList`). Two tiers, visually distinct (§7.1):
- **Hard block** (FR-VAL.1–.5/.10/.11): `✕` glyph + `--danger` text on `--danger-bg`, message =
  the SRS's exact wording. Also anchors a flag at the offending field (§7.1).
- **Soft warning** (FR-VAL.6/.7/.8): `⚠` glyph + `--warn` text on `--warn-bg`; non-blocking.
Empty state (all valid): a single quiet `--ok` line ("Ready to export."). FR-VAL.9 (depth
clipping) is **never** shown — impossible by construction.

### 5.7 3D viewport frame & overlays
The hero. A full-bleed Three.js canvas inside an **instrument frame**:
- **Frame:** the four corners drawn as `--cool` registration **crosshairs/ticks** (not a solid
  border); thin `--edge` containing line.
- **Atmosphere:** faint blueprint grid (`--grid`, major lines `--grid-strong`) behind/around the
  piece; a warm radial **glow** (`--gold-glow`) centered on the piece; fine grain overlay (§8).
- **Selected-fin highlight** (FR-VIZ.6): the active fin rendered with `--gold-bright` emissive
  lift (and/or a thin `--cool` outline) so it stands out against the honey field; selection is
  shared with the 2D inspector.
- **Fin-index control:** a small mono stepper (`[ 014 ▸ ] / 037`) overlaid bottom-left; clicking
  a fin in 3D updates it and vice versa (FR-VIZ.6).
- **Controls hint:** an unobtrusive `--ink-faint` "drag to orbit · scroll to zoom" that fades
  after first interaction.

### 5.8 2D slat inspector
A measurement-grade drawing in the right column that renders the **identical** `FittedPath`
exported for the selected fin (FR-VIZ.3 / V-6) — never a separate recompute.
- **Drawing:** back edge as a `--cool` vertical datum line at `z=0`; the wave **front edge** as a
  `--gold` stroke with a subtle `--wave-*` gradient fill; top/bottom edges as thin lines.
- **Instrumentation:** `--cool-dim` measurement ticks along height and depth axes with
  `--type-label` numbers; a depth-range callout (`min–max mm`) for this fin.
- **Header:** `fin 014 / 037` and its centerline `x_i`. Orientation matches the export
  (FR-GEO.6 / §1.7-B): height up, back edge left, wave bulging right.

### 5.9 Export button
The single saturated primary action (header right). Solid `--gold` fill, `--bg` text,
`⎙ EXPORT ZIP`, `--type-body` 500.
- **Default:** gold fill, subtle `--gold-glow` shadow.
- **Hover/focus:** `--gold-bright`, glow intensifies; focus-visible ring (§10).
- **Disabled** (any hard block active, FR-UI.3): `--panel-2` fill, `--ink-faint` text, no glow,
  `not-allowed` cursor; pair with the validation list so the *reason* is always visible.
- **Working:** brief in-button progress affordance (mono "…packing 037 slats") while the zip
  builds; returns to default on completion. Export always runs at full fidelity (FR-VIZ.4).

### 5.10 Stock Sheet section
A fourth `<details>` group in the control rail, below Fit Tolerance, sharing the rail's
`nth-of-type` reveal stagger (§6).
- **Enable toggle** first: a `.control-row` checkbox (`--gold` accent) on a 44 px-tall row so
  the tap target stays comfortable on tablet (FR-UI.4). Unchecking collapses the rest of the
  group — nesting off must never strand the user behind a stock error (FR-NEST.10).
- **Four sliders + paired numeric inputs** reusing §5.1 verbatim: sheet width, sheet height,
  edge margin, part clearance. Length units follow the global toggle (§5.4), converted at the
  input boundary only.
- **Part labels** select: *Text* / *Engravable outlines* / *None* (FR-NEST.9).
- A muted `--ink-faint` group note carries the two things a user can get wrong: clearance is
  spacing, not kerf compensation; and the stock outline in the exported SVG is a reference
  rectangle, not a cut path.
- Sheet issues bind by the dotted field convention (`sheet.width`, …), matching the existing
  `wave.sources.N.lambda` pattern, so §7.1 validation states apply unchanged.

The readouts strip (§5.5) gains a second hero number, **stock sheets**, beside fin count —
it is the headline answer the feature exists to give — plus slats-per-sheet, rows-per-sheet,
and stock utilisation rows. Before the first `ComputeResult` it reads `computing`; with
nesting disabled, `nesting off`.

### 5.11 CNC / G-code section
A fifth `<details>` group, last in the rail, below Stock Sheet. Unlike the others it is
**collapsed by default** — most sessions are design sessions, and the group is long. It is
rendered only while nesting is on: there is nothing to cut without stock (FR-CAM.1), and an
orphaned machine group would imply otherwise.
- **Enable toggle** first, same `.control-row` pattern as §5.10, defaulting to **off**. Turning
  it off collapses everything below it.
- **Two selects** — post processor and milling direction (climb / conventional) — before any
  number, because they frame what the numbers mean.
- **Three labelled subgroups**, separated by a hairline `--edge` rule with an `--ink-dim`
  `--type-label` caption: *Profile cut*, *Holding tabs*, and the engrave block behind its own
  toggle. Sixteen sliders in one undifferentiated stack would be unreadable; the captions are
  the cheapest possible structure that fixes it.
- **Sliders + paired numeric inputs** reuse §5.1 verbatim. Three unit behaviours share one
  control: lengths follow the global toggle (mm/in), feeds are lengths per minute (mm/min,
  in/min), and counts — tool slot, spindle rpm, tab count — never convert and carry either
  `rpm` or no unit at all.
- The group note states the two things that actually bite: this output *does* offset for the
  tool, so clearance must be at least one tool diameter; and work zero is the stock's
  lower-left corner with Z zero on its top surface.
- Machine issues bind as `machine.<field>`, so §7.1 validation states apply unchanged. FR-VAL.17
  deliberately renders on **both** the clearance row (§5.10) and the tool-diameter row, because
  either one resolves it and the user may be looking at either.

> A machine-only hard block disables Export but must **not** grey out the viewport or pause the
> preview: no cutting parameter can change a single curve, so freezing the 3D view over a
> mistyped feed rate would be a lie about cause and effect (FR-VAL.17–.20 scope note).

---

## 6. Motion & micro-interactions

Calm, deliberate, CSS-first (CSS-only for HTML-level transitions; the 3D scene uses Three.js).

- **Page load (one orchestrated reveal):** header fades/settles first, then the control rail
  groups stagger in (`animation-delay` ladder, ~40ms steps), then the viewport frame draws its
  corner crosshairs, then the piece fades up. One choreographed entrance > scattered effects.
- **3D settle:** a gentle auto-orbit on load to show the wave's depth, which **stops on first
  user interaction** (orbit/zoom) and does not resume. Honors the "live but throttled" feel:
  recompute is coalesced to ≤1/frame (FR-VIZ.2) — sliders feel instant without re-meshing per
  pointer event.
- **Control feedback:** slider drag updates readouts and the 3D piece live; thumb gains a gold
  under-glow on grab. Tab/family switches cross-fade the params region (~120ms).
- **Hover:** controls lift via a soft `--gold-glow` rather than scale/shadow pops.
- **Validation:** a field transitioning to invalid does a single, short `--danger` flash then
  settles to the steady error style (no looping animation).
- **Export:** button label morphs to the packing state and back; on success a brief `--ok` tick.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables the load stagger,
  auto-orbit, and flashes; state changes become instant. Functionality is identical.

---

## 7. States

### 7.1 Validation (visual rules)
Two tiers map to the SRS's two tiers (FR-VAL; surfaced per TECH_SPEC §10):
- **Hard block:** Export disabled (§5.9, FR-UI.3); the offending **field is anchored** with a
  `--danger` border + `✕`, and the message (SRS exact wording) appears both inline at the field
  and in the validation list. State is conveyed by **icon + text + color**, never color alone.
- **Soft warning:** `--warn` inline note; Export stays enabled; field gets an amber `⚠` marker.
- **No clipping warning:** FR-VAL.9 is never rendered.
Validation is computed synchronously for hard blocks (instant; TECH_SPEC §3.3 TS-D7); the
segment-count soft warning (FR-VAL.8) arrives one compute round-trip behind and animates in
quietly when it does.

### 7.2 Fin selection
Shared single state across 3D (highlight, §5.7) and the 2D inspector (the drawn fin, §5.8) and
the fin-index stepper. Selecting in any surface updates all three.

### 7.3 Empty / default / loading
- **Landing:** the app opens on the default interference design (FR-UI.1 / §1.7-H) already
  rendered — there is no blank empty state; first paint shows the hero piece.
- **Computing:** while a Worker round-trip is in flight, the previous valid preview stays
  visible (no flash to blank); a faint `--cool` "computing…" tick may appear in the viewport
  corner. Cheap readouts/validation never wait on the Worker (TECH_SPEC §3.3).
- **Disabled controls:** `--ink-faint`, no glow, still focusable with an explanatory title.

### 7.4 WebGL-absent degraded mode (TECH_SPEC §8.5 / SRS OI-5)
If WebGL is unavailable: the viewport region shows a clear, **non-blocking** `--cool` message
("3D preview needs WebGL — your browser doesn't support it. All design, measurement, and export
still work.") inside the same instrument frame (keep the crosshairs/grid so it doesn't read as a
crash). The control rail, 2D inspector, readouts, validation, and Export remain **fully styled
and functional**. The app degrades, never looks broken.

---

## 8. Texture & atmosphere

Purposeful, subtle, instrument-flavored — concentrated in the viewport so chrome stays flat.

- **Blueprint grid:** `--grid` minor / `--grid-strong` major lines behind the piece; gives scale
  and the drafting-table read. Fades toward the frame edges.
- **Warm radial light:** a `--gold-glow` radial centered on the piece simulates the workshop
  light hitting the wood (echoing `wave.jpg`); it sits *behind* the canvas so the gold piece
  appears lit from within the scene.
- **Film grain:** a tiled fractal-noise overlay at `--grain-opacity` (~0.05), `mix-blend-mode:
  overlay`, across the app — kills flat-digital banding, adds workshop texture. Must be cheap
  (single tiled asset / CSS) and disabled under reduced-data preferences.
- **Registration marks & hairlines:** corner crosshairs (§5.7) and `--edge` dividers are the
  only "borders" — solid boxes are avoided in favor of ticks and hairlines.
- **3D material intent (so 3D matches `wave.jpg`):** the fins read as **honey-oak wood** —
  `--wave-mid` base, low metalness, medium roughness, warm key light + cool fill (the slate
  wall), with `--wave-highlight` specular catching the wave crests and `--wave-shadow` in the
  troughs. Neutral environment lighting so depth is legible (TECH_SPEC §8.2). The goal: a user
  who saw the reference photo recognizes their piece in the preview.

---

## 9. Responsive behavior

Desktop-first; tablet-functional; phones out of scope (PRD §12 / NFR-COMPAT.2). Layout adapts by
breakpoint, never by feature removal.

| Breakpoint | Behavior |
|------------|----------|
| **≥ 1200px** (desktop, primary) | Full three-column layout (§4.1). Default target. |
| **820–1199px** (small desktop / landscape tablet) | Rail and right column narrow to minimums; viewport keeps priority. Right column may stack inspector above readouts/validation. |
| **600–819px** (portrait tablet) | Two-stage: viewport + a **tabbed instrument panel** (Controls / Inspector / Readouts) so the hero stays large; **touch orbit/zoom** enabled (FR-VIZ.1, A4). |
| **< 600px** (phones) | Out of scope: render a legible, non-broken single-column fallback with a "best viewed on a larger screen" note. No phone-specific optimization. |

Touch targets on tablet meet a `44px` minimum; sliders accept touch drag; the 3D control hint
adapts to "drag · pinch."

---

## 10. Accessibility

Light-touch but real (SRS §4.6):
- **Keyboard:** every control operable and reachable (NFR-A11Y.1) — sliders (arrows/Home/End),
  tabs (arrow keys), numeric inputs, source add/remove, unit toggle, Export. Logical tab order:
  header → rail (top-down) → viewport controls → inspector → export.
- **Focus-visible:** a `2px` `--gold-bright` ring with a `--bg` offset on every interactive
  element; never remove focus outlines.
- **Contrast:** text/controls meet **WCAG AA** (NFR-A11Y.2); verify `--ink-dim` on `--panel` and
  any gold-on-charcoal text in build (§2.3) and adjust tokens if a pair fails.
- **Non-color state:** validation, selection, and active/disabled states always pair color with
  an icon, label, or shape (`✕`/`⚠`/`✓`, underline, border) so they survive color-blindness and
  the grain overlay.
- **Labels:** every control has a visible `--type-label` and an associated accessible name; units
  are part of the accessible value text.
- **Reduced motion:** honored per §6.
- **Live regions:** readouts and validation messages announce politely as they change so non-
  visual users get the same live feedback sighted users get from the sliders.

---

## 11. Traceability

| DESIGN.md section | Serves (SRS / TECH_SPEC) |
|-------------------|--------------------------|
| §1 Philosophy | PRD §1–§2 intent; anti-slop per frontend goals |
| §2 Color | NFR-A11Y.2 (contrast); supports FR-VIZ visual identity |
| §3 Typography | NFR-A11Y.1/.2; TECH_SPEC §2 (self-host, no CDN), NFR-PRIV.1, NFR-DEPLOY.1 |
| §4 Layout | TECH_SPEC §4 modules; FR-UI.4 (wide viewport); FR-IN.3 (family-aware panel) |
| §5.1 Sliders/inputs | FR-IN.1/.2/.5, NFR-A11Y.1 |
| §5.2 Family tabs | FR-IN.3, FR-WAVE.1–.3 |
| §5.3 Sources editor | FR-WAVE.3 (K∈[1,8]), FR-VAL.3/.11 |
| §5.4 Unit toggle | FR-IN.2 (display-only), TS-D8 |
| §5.5 Readouts | FR-IN.4 (incl. observed depth range) |
| §5.6 Validation list | FR-VAL.1–.16, TECH_SPEC §10 |
| §5.7 Viewport / §8 atmosphere | FR-VIZ.1/.6, TECH_SPEC §8.2 |
| §5.8 2D inspector | FR-VIZ.3, V-6, FR-GEO.6 / §1.7-B |
| §5.9 Export button | FR-UI.3, FR-EXP.4, FR-VIZ.4 |
| §5.10 Stock Sheet | FR-NEST.1/.2/.9/.10, FR-VAL.12–.16, TS-D12 |
| §5.11 CNC / G-code | FR-CAM.1–.10, FR-VAL.17–.20, TS-D13/D14 |
| §6 Motion | FR-VIZ.2 (coalesced live updates); NFR-A11Y (reduced motion) |
| §7.1 Validation states | FR-VAL tiers, FR-UI.3, FR-IN.5, TS-D7 |
| §7.2 Selection | FR-VIZ.6 |
| §7.3 Default/loading | FR-UI.1, TECH_SPEC §3.3 |
| §7.4 Degraded mode | NFR-COMPAT.1, TECH_SPEC §8.5, SRS OI-5 |
| §9 Responsive | PRD §12, NFR-COMPAT.2, FR-UI.4, A4 |
| §10 Accessibility | NFR-A11Y.1/.2 |

---

## 12. Open design issues

- **DI-1 — Final hex tuning.** §2 values are the canonical starting set; confirm every text pair
  against WCAG AA in the built app and adjust tokens (not roles) as needed.
- **DI-2 — Fraunces optical-size cuts.** Confirm the wordmark and `h2` sizes use an `opsz` that
  reads warm without feeling decorative; pick final weights during build.
- **DI-3 — Grain cost.** Validate the grain overlay's render cost on a typical laptop
  (NFR-PERF.1); drop to a static tiled asset or reduce opacity if it affects viewport framerate.
- **DI-4 — Tablet panel pattern.** The 600–819px tabbed-instrument pattern (§9) needs a quick
  usability check on a real tablet against the touch-orbit requirement (A4).
- **DI-5 — Iconography.** A tiny, consistent set of line glyphs (`⎙ ✕ ⚠ ✓ ▸ ⌖`) — decide whether
  to ship a minimal custom SVG set or use the limited Unicode marks referenced here; either way,
  no emoji (§1.3).
