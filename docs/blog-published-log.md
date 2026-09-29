# Blog published log

Append a row after each Monday publish. Keep the keyword calendar in `docs/blog-keyword-calendar.md`.

**Every new post must include CTA fields** in `client/src/data/blogPosts.ts`: `ctaHeadline` (short, topic/city-specific H2, e.g. "Need a guest-ready Irvine turnover?") and `ctaBody` (1-2 sentences tied to the post's topic + city that push the free quote form or the phone call (725) 255-3688). The shared footer CTA in `client/src/pages/BlogPost.tsx` renders them and always shows the "Get a Free Quote" button and phone link. Do not reuse another post's headline (e.g. "hard-water reset" is Las Vegas only). Add the new slug to `scripts/prerender.mjs` ROUTES and `public/sitemap.xml`, then after deploy `curl` the URL and grep for the CTA headline.

| Date (PT) | URL | Primary keyword | PR |
|-----------|-----|-----------------|----|
| 2026-09-21 | https://steampunkcleaning.com/blog/house-cleaning-las-vegas-hard-water | house cleaning Las Vegas hard water | #14 |
| 2026-09-28 | https://steampunkcleaning.com/blog/airbnb-cleaning-irvine | Airbnb cleaning Irvine | #20 |
