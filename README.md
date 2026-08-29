# Waypoint Aerial

Marketing site for **Waypoint Aerial**, the Part 107 drone studio of Tom ReMine in Indianapolis.

Live: [tvremine.github.io/waypoint-aerial](https://tvremine.github.io/waypoint-aerial/)

Navy and maroon. Stills, inspections, mapping, and event aerials for Central Indiana.

## Pages

- Home — hero, services, work, about, process
- Work — filterable gallery with lightbox
- Services — events, property, inspection, mapping, cinematic
- About
- Contact — quote request (typical ranges by service)

## Brand

Logo source and raster sizes live in `public/`:

- `logo.svg` — app icon (navy tile, maroon waypoint, ivory center)
- `mark.svg` — line-art mark for dark backgrounds
- `favicon.svg` / `favicon.ico`
- `brand/logo-{16,32,48,64,96,128,180,192,256,512}.png`
- `brand/apple-touch-icon.png` (180)

Copy, contact, and pricing: `src/lib/site.ts`.

## Photos

Placeholder frames live in `public/media/`. Swap them for library shots using the same filenames.

## Local

```bash
npm install
npm run dev
```

GitHub Pages deploys from `main` via `.github/workflows/pages.yml`.
