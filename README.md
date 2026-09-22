# Steampunk-House-Cleaning-Website

A React website built with Vite for Steampunk House Cleaning (deployed on Netlify).

## Scripts

| Script | Purpose |
|--------|---------|
| `pnpm dev` | Vite dev server |
| `pnpm run build:client` | Client-only Vite production build |
| `pnpm run prerender` | Prerender SEO routes into `dist/public` (requires a prior Vite build + Chrome) |
| `pnpm run build:static` | `vite build` + prerender (what Netlify runs) |
| `pnpm run build` | Static build + Express server bundle |
| `pnpm start` | Run the Express server (`dist/index.js`) |
| `pnpm run check` | TypeScript `tsc --noEmit` |

## Prerender / SEO

After the Vite build, `scripts/prerender.mjs` opens each important route in headless Chrome and writes rendered HTML (unique `<title>`, meta description, and `#root` content) to pretty paths such as `dist/public/standard-cleaning/index.html`. Netlify serves those files for crawlers; client-side routing (wouter) still works after JS loads. Unknown paths return HTTP 404 via `404.html`.
