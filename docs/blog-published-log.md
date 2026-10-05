# Blog published log

Append a row after each Monday publish. Keep the keyword calendar in `docs/blog-keyword-calendar.md`.

**Every new post must include CTA fields** in `client/src/data/blogPosts.ts`: `ctaHeadline` (short, topic/city-specific H2, e.g. "Need a guest-ready Irvine turnover?") and `ctaBody` (1-2 sentences tied to the post's topic + city that push the free quote form or the phone call (725) 255-3688). The shared footer CTA in `client/src/pages/BlogPost.tsx` renders them and always shows the "Get a Free Quote" button and phone link. Do not reuse another post's headline (e.g. "hard-water reset" is Las Vegas only). Add the new slug to `scripts/prerender.mjs` ROUTES and `public/sitemap.xml`, then after deploy `curl` the URL and grep for the CTA headline.

**Service-scope accuracy rules (required for every post, page, FAQ, and schema):**
- Inside-oven cleaning is an **add-on** (extra). It is **NOT** included in standard, deep, or move-in/move-out cleans. Never list "inside oven", "oven racks", "broiler", or "inside appliances" as included. Say "inside oven cleaning is available as an add-on" if the oven comes up.
- Deep and move-in/out cleans include inside the refrigerator and microwave per the checklist on `/cleaning-checklist`; do not extend that to the oven or other appliances.
- No prices anywhere on the site or in posts.
- If a page has FAQ JSON-LD, the schema answer text must match the visible FAQ text exactly (both come from the same data source).

| Date (PT) | URL | Primary keyword | PR |
|-----------|-----|-----------------|----|
| 2026-09-21 | https://steampunkcleaning.com/blog/house-cleaning-las-vegas-hard-water | house cleaning Las Vegas hard water | #14 |
| 2026-09-28 | https://steampunkcleaning.com/blog/airbnb-cleaning-irvine | Airbnb cleaning Irvine | #20 |
| 2026-10-05 | https://steampunkcleaning.com/blog/move-out-cleaning-sacramento | move out cleaning Sacramento (week 3; slug `move-out-cleaning-sacramento`) | [#37](https://github.com/Steampunkhousecleaning/Steampunk-House-Cleaning-Website/pull/37) |
