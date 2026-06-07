# ParaWave

Browser-based tool for designing sliced parametric wave wall art. Configure wave parameters interactively, preview in 3D, then export per-slat SVGs ready for CNC or laser cutting. No install required — runs entirely in the browser.

## Features

- Three wave families: Diagonal, Radial, and Interference (up to 8 weighted sources)
- Real-time 3D preview and 2D per-slat inspector
- Adaptive Bézier curve fitting to user-defined tolerance
- Export as a ZIP containing one `slat_NNN.svg` per fin plus a JSON design manifest
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

## Export format

The downloaded `parawave-design.zip` contains:

- `slat_001.svg` … `slat_NNN.svg` — one SVG per fin, left to right, zero-padded to at least three digits
- `parawave-design.json` — full design manifest including all parameters, computed fin count, version, and export timestamp

## Deployment

Pushing to `main` triggers CI (typecheck → lint → test → build) and deploys `dist/` to GitHub Pages via `peaceiris/actions-gh-pages`.

## Browser requirements

WebGL is required for the 3D preview. If unavailable, the 3D panel is hidden but the 2D inspector and SVG export remain fully functional.
