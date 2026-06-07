# Bundled fonts

ParaWave self-hosts static WOFF2 subsets of:

- Fraunces 400, 500, and 600 from `google/fonts` at optical size 72.
- IBM Plex Mono 400 and 500 from `google/fonts`.

The subsets contain the Latin ranges used by the application, digits, and the
degree, multiplication, ellipsis, plus-minus, and right-arrow symbols. Fraunces
does not provide a right-arrow glyph upstream, so text set in Fraunces falls
back to the bundled IBM Plex Mono face for that character.

Both families are licensed under the SIL Open Font License 1.1. The license
files are stored beside the font assets.
