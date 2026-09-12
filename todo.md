# Steampunk Cleaning Responsive Repair

- [ ] Audit all nine routes at desktop and mobile widths.
- [ ] Inspect shared navbar, footer, forms, hero sections, grids, overflow, and route transitions.
- [ ] Fix shared responsive layout and interaction issues first.
- [ ] Fix page-specific desktop and mobile issues across all routes.
- [ ] Re-run full sitemap verification at desktop and mobile widths.
- [ ] Save a checkpoint and report the repaired version.

## Audit Notes

The current request is to repair the entire website across desktop and mobile. The primary success criteria are no horizontal overflow, readable hierarchy, usable navigation and forms, consistent shared layout, and correct top-of-page navigation on every route.

## Style Reminder

Preserve the existing Steampunk Cleaning visual system: navy and teal brand colors, Plus Jakarta Sans typography, clean service-business credibility, asymmetric landing-page composition, and strong mobile-first spacing. Prefer structural fixes over one-off page hacks.

## Style Decisions

- Keep the existing navy/teal brand system and shared Navbar/Footer as the source of truth.
- Treat mobile widths from 390px upward as first-class layouts, not compressed desktop layouts.
- Maintain clear CTA hierarchy while avoiding clipped text, nested overflow, and inaccessible controls.

## Audit Findings

The main mobile failure was the reusable service-page `QuoteForm`, which forced name and phone fields into two columns at every viewport. The homepage lead form used the same fixed two-column treatment for its paired fields. The shared navbar and footer also nested buttons inside Wouter links, which created invalid interactive markup and unreliable touch/keyboard behavior.

## Completed in This Pass

- Replaced the shared `QuoteForm` fixed grid with a single-column mobile layout that becomes two columns at 640px.
- Stacked the homepage lead form fields on mobile and restored two columns at the small-screen breakpoint.
- Added global overflow, media, minimum-width, and reduced-motion safeguards.
- Replaced nested Link/button CTAs in the shared navbar/footer and deep-cleaning pricing cards with semantic styled links.
- Type-check and production build pass without errors; browser and dev-server logs show no runtime errors.
