# ParaWave

Browser-based tool for designing sliced parametric wave wall art. Configure wave parameters interactively, preview in 3D, then export per-slat SVGs ready for CNC or laser cutting. No install required — runs entirely in the browser.

## Features

- Three wave families: Diagonal, Radial, and Interference (up to 8 weighted sources)
- Real-time 3D preview and 2D per-slat inspector
- Adaptive Bézier curve fitting to user-defined tolerance
- Automatic stock nesting: enter your sheet or CNC work area and get pre-laid-out per-sheet SVGs, so you never place slats by hand in CAM
- Export as a ZIP containing nested sheets, one `slat_NNN.svg` per fin, a cut list, and a JSON design manifest
- SVG coordinates always in mm (1 unit = 1 mm), regardless of display unit — compatible with Carbide Create (Shapeoko/Nomad)
- All geometry computed client-side; no data leaves the browser

## Using locally

Node 24 is required.

```sh
npm install
npm run dev        # start Vite dev server
npm run build      # output production build to dist/
npx vitest run     # run all tests
npm run lint       # ESLint
npm run format     # Prettier
```

## Stock nesting

The **Stock Sheet** panel takes your sheet width and height (or CNC work area), an edge
margin for clamps and hold-downs, and a part clearance. ParaWave lays the slats out across
as many sheets as the design needs and reports the sheet count and stock utilisation live.

Slats are packed in fin order, alternating 0° and 180°, so that wavy front edges interlock
and flat back edges sit back-to-back at nothing but the clearance. On a 30 × 30 in sheet the
default design fits 13 slats per sheet instead of the 11 a fixed-pitch layout manages.

Two things worth knowing:

- **Clearance is spacing only.** ParaWave does not kerf-compensate the geometry — set your
  outside-contour offset in your CAM tool as usual. Size the clearance to your tool diameter
  plus a safety gap.
- **Rotation, never mirroring.** Parts are only ever rotated 180° in-plane, so a cut piece is
  identical regardless of how it was nested. Your plywood's show face always ends up on the
  face you expect.

### Importing into Carbide Create

Import `sheets/sheet_001.svg`. Each part is a separate closed path, so you can select them
individually and apply one contour toolpath to all of them.

`<g id="stock">` holds a reference rectangle matching your sheet size. **It is not a cut
path** — delete it or leave it unselected. Its job is to make a bad import obvious: measure
it, and if it does not read your configured sheet width, the importer applied a DPI
conversion. The two usual factors are **3.7795×** too large (96 DPI) and **0.26458×** too
small (its inverse).

Part labels live in `<g id="labels">` and can drive a shallow engrave toolpath, or be
deleted. If Carbide Create drops them on import, switch **part labels** to *engravable
outlines* — that emits the digits as ordinary stroked paths, which every importer handles.

## Export format

The downloaded `parawave-design.zip` contains:

- `sheets/sheet_001.svg` … — one nested sheet per piece of stock, ready to cut (omitted when nesting is off)
- `slats/slat_001.svg` … `slat_NNN.svg` — one SVG per fin, left to right, zero-padded to at least three digits
- `cutlist.csv` — which slat sits where, on which sheet, at what rotation; slats too wide to nest are listed last with an empty `sheet` column
- `parawave-design.json` — full design manifest including all parameters, computed fin count, nesting summary, stock configuration, version, and export timestamp

## Deployment

Pushing to `main` triggers CI (typecheck → lint → test → build) and deploys `dist/` to GitHub Pages via `peaceiris/actions-gh-pages`.

## Browser requirements

WebGL is required for the 3D preview. If unavailable, the 3D panel is hidden but the 2D inspector and SVG export remain fully functional.
