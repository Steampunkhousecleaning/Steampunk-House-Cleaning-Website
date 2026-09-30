/**
 * Static blog posts for /blog and /blog/:slug.
 * Append new posts at the top (newest first). Keep calendar in docs/blog-keyword-calendar.md.
 */

export type BlogSection = {
  /** Optional H2 */
  heading?: string;
  /** Paragraphs; support inline [label](/path) and [label](https://...) */
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogRelatedLink = {
  href: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** ISO date YYYY-MM-DD */
  date: string;
  /** ISO date YYYY-MM-DD of the last substantive edit; falls back to `date` in JSON-LD */
  dateModified?: string;
  metro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  /** Footer CTA H2 — topic/city specific (required for every new post) */
  ctaHeadline: string;
  /** Footer CTA supporting line — must point to the quote form or phone call */
  ctaBody: string;
  body: BlogSection[];
  relatedLinks: BlogRelatedLink[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "airbnb-cleaning-irvine",
    title:
      "Airbnb Cleaning Irvine: Same-Day Turnover Checklist for Orange County Hosts",
    metaTitle:
      "Airbnb Cleaning Irvine | STR Turnover Checklist | Steampunk",
    metaDescription:
      "Airbnb cleaning Irvine hosts trust for same-day turnovers. Use this short term rental turnover Orange County checklist — then book Steampunk for guest-ready results.",
    date: "2026-09-28",
    metro: "LA/OC",
    primaryKeyword: "Airbnb cleaning Irvine",
    secondaryKeywords: [
      "short term rental turnover Orange County",
      "STR cleaning checklist",
    ],
    ctaHeadline: "Need a guest-ready Irvine turnover?",
    ctaBody:
      "Tell us your check-out and check-in times and we will quote your Airbnb or short-term rental turnover in Irvine and Orange County. Request a free quote online or call — real humans pick up.",
    excerpt:
      "Irvine Airbnb hosts need same-day, guest-ready turnovers. Here is a practical STR cleaning checklist — and when to call a local team for Airbnb cleaning in Irvine.",
    relatedLinks: [
      {
        href: "/airbnb-cleaning",
        label: "Airbnb & short-term rental cleaning",
      },
      {
        href: "/cleaning-checklist",
        label: "Full cleaning checklist",
      },
      {
        href: "/locations/los-angeles-orange-county/irvine",
        label: "House cleaning in Irvine",
      },
      {
        href: "/locations/los-angeles-orange-county",
        label: "Los Angeles & Orange County locations",
      },
      {
        href: "/get-a-quote",
        label: "Get a free quote",
      },
    ],
    body: [
      {
        paragraphs: [
          "If you host in Orange County, Airbnb cleaning Irvine is not a nice-to-have — it is the difference between a five-star review and a same-night complaint about hair in the shower or a sticky coffee maker. Guests expect hotel-level reset between stays, often with only a few hours on the calendar. This guide is a practical short term rental turnover Orange County playbook: what must be done every turnover, what guests notice first, and how Steampunk House Cleaning helps Irvine hosts stay guest-ready without guessing.",
          "We clean homes and STRs across [Irvine](/locations/los-angeles-orange-county/irvine) and the wider [Los Angeles & Orange County](/locations/los-angeles-orange-county) metro. Ryan and Daniel built the company around documented checklists and clear quotes — form or phone, not a mystery instant book. If you want the service page first, start with [Airbnb cleaning](/airbnb-cleaning).",
        ],
      },
      {
        heading: "Why Irvine turnovers are unforgiving",
        paragraphs: [
          "Irvine listings compete with polished corporate apartments, HOA communities, and travelers who chose OC for Disneyland, UCI visits, or business near the Spectrum. Photos sell the booking; the first ten minutes after unlock decide the review. Dust on baseboards, a missed trash liner, or a half-stocked paper-goods cabinet reads as “unclean” even when the floors look fine from the doorway.",
          "Same-day gaps are common: guest A checks out at 11:00 a.m., guest B arrives at 3:00 or 4:00 p.m. That window has to cover travel time, cleaning, laundry (or linen swap), restock, and a final photo walk if you document the unit. A written STR cleaning checklist keeps the crew from improvising under time pressure.",
        ],
      },
      {
        heading: "STR cleaning checklist: same-day ready in Irvine",
        paragraphs: [
          "Use this as your baseline for every short term rental turnover Orange County hosts run. Adjust for bedrooms and baths, but do not skip the “review killers.”",
        ],
        bullets: [
          "Strip and remake all beds with fresh, matching linens; check under beds and between mattress/topper for lost items",
          "Bathrooms: toilets, showers, glass, sinks, mirrors, floors; restock toilet paper, tissues, hand soap, and clean towels",
          "Kitchen: empty trash and recycling, wipe counters and appliance faces, clean sink and faucet, run or empty dishwasher, restock pods/sponge if you provide them",
          "Coffee station and mini-bar zones: empty grounds, wipe machine, restock pods/filters, check for sticky rings",
          "Floors: vacuum and mop high-traffic paths, entry, kitchen, and baths — Irvine open plans show footprints fast",
          "High-touch: remotes, light switches, door handles, thermostat, remote locks/keypads",
          "Living areas: fluff cushions, fold throws, wipe tables, straighten décor to match listing photos",
          "Laundry: start host linens or confirm linen service pickup; never leave damp towels in a closed unit",
          "Trash: remove all bags from the unit and take them to the correct HOA/community bins",
          "Final walk: guest POV from the front door, then each bedroom and bath with lights on",
        ],
      },
      {
        paragraphs: [
          "Compare this list to our public [cleaning checklist](/cleaning-checklist) for residential detail work. STR turnovers add speed, linen discipline, and restock — not a lighter version of a standard home clean.",
        ],
      },
      {
        heading: "What guests notice first (fix those first)",
        paragraphs: [
          "When time is short, prioritize in this order:",
        ],
        bullets: [
          "Bathroom smell and visible hair — the fastest one-star trigger",
          "Bed presentation — wrinkles, mismatched pillowcases, or pet hair on the duvet",
          "Kitchen sink and coffee area — overnight guests always check both",
          "Floors at the entry and kitchen — first impressions before they reach the sofa",
          "Trash cans — empty with a fresh liner, or guests assume the last stay was skipped",
        ],
      },
      {
        paragraphs: [
          "If a full deep pass is impossible before the next check-in, still hit those five. Then schedule a deeper reset between longer gaps or after heavy-use weekends. Our [Airbnb cleaning](/airbnb-cleaning) service is built for that rhythm: reliable turnover visits, with deeper cleans when the calendar allows.",
        ],
      },
      {
        heading: "HOA, parking, and access realities in Irvine",
        paragraphs: [
          "Many Irvine communities are gated or have strict quiet hours and parking rules. Build access into every booking note:",
        ],
        bullets: [
          "Gate codes, lockbox location, or smart-lock instructions that still work after guest checkout",
          "Parking stall numbers or street rules so the team is not circling during your turnover window",
          "Alarm codes and which zones to avoid (office drawer, owner closet)",
          "HOA quiet hours if vacuuming early or late would create a complaint",
          "Trash enclosure rules — wrong bin day is a real OC host headache",
        ],
      },
      {
        paragraphs: [
          "Share those details when you [request a quote](/get-a-quote). Clear access notes are how same-day Airbnb cleaning Irvine jobs finish on time.",
        ],
      },
      {
        heading: "Standard clean vs. turnover vs. deep reset",
        paragraphs: [
          "Hosts sometimes order a “regular house clean” and expect hotel turnover results. They are related but not the same:",
        ],
        bullets: [
          "Standard / recurring residential clean: maintains an occupied home on a weekly or biweekly cadence",
          "STR turnover: full guest-ready reset — linens, restock, trash out, photo-level presentation under a hard deadline",
          "Deep clean: heavier detail (baseboards, inside the fridge, grout-level bathrooms; inside oven cleaning is an add-on) between stays or after long gaps",
        ],
      },
      {
        paragraphs: [
          "If your reviews mention dust on fans, cloudy shower glass, or a “lived-in” smell, book a deep pass, then keep turnovers on the lighter, faster checklist. Searching Airbnb cleaning Irvine should land you a team that understands that split — not a generic maid visit that skips linen and restock.",
        ],
      },
      {
        heading: "How Steampunk works with OC hosts",
        paragraphs: [
          "Steampunk House Cleaning is a local team founded by Ryan and Daniel. We serve Irvine and surrounding Orange County cities with background-checked cleaners, supplies, and a documented process. Guests and homeowners have left us roughly 450+ verified Google reviews at 4.9★ — the pattern we protect for hosts is simple: show up, follow the list, leave the unit matching the listing.",
          "We do not push self-serve instant booking. You tell us the property details, turnover window, and linen plan; we confirm timing and pricing on a quote. That keeps same-day expectations honest instead of overselling a calendar slot that cannot work.",
        ],
      },
      {
        heading: "Ready for guest-ready Irvine turnovers?",
        paragraphs: [
          "Send the property address, number of bedrooms/baths, typical checkout–check-in gap, and whether you supply linens or need us to coordinate. Call [(725) 255-3688](tel:7252553688) or submit the form — we will confirm whether your short term rental turnover Orange County schedule fits a same-day crew.",
          "Start here: [Get a free quote](/get-a-quote) · [Airbnb cleaning](/airbnb-cleaning) · [Irvine house cleaning](/locations/los-angeles-orange-county/irvine) · [Cleaning checklist](/cleaning-checklist)",
        ],
      },
    ],
  },

  {
    slug: "house-cleaning-las-vegas-hard-water",
    title:
      "House Cleaning Las Vegas Hard Water: How Mineral Stains Take Over — and What a Deep Clean Fixes",
    metaTitle:
      "House Cleaning Las Vegas Hard Water | Deep Clean Stains | Steampunk",
    metaDescription:
      "House cleaning Las Vegas hard water problems show up on showers, glass, and fixtures. Learn what deep cleaning Las Vegas teams actually remove — and when stains need more than a wipe.",
    date: "2026-09-21",
    metro: "Las Vegas",
    primaryKeyword: "house cleaning Las Vegas hard water",
    secondaryKeywords: [
      "deep cleaning Las Vegas",
      "hard water stains bathroom",
    ],
    ctaHeadline: "Ready for a hard-water reset?",
    ctaBody:
      "Get a free quote online or call us — real humans pick up. We will scope your Las Vegas or Henderson bathrooms and glass and tell you what a deep clean will fix.",
    excerpt:
      "Vegas water leaves chalky rings on glass and fixtures. Here is what house cleaning for Las Vegas hard water actually fixes — and when you need a true deep clean.",
    relatedLinks: [
      {
        href: "/locations/las-vegas-nevada",
        label: "House cleaning in Las Vegas, Nevada",
      },
      {
        href: "/deep-cleaning",
        label: "Deep cleaning services",
      },
      {
        href: "/locations/las-vegas-nevada/henderson",
        label: "Henderson house cleaning",
      },
      {
        href: "/locations/las-vegas-nevada/summerlin",
        label: "Summerlin house cleaning",
      },
      {
        href: "/get-a-quote",
        label: "Get a free quote",
      },
    ],
    body: [
      {
        paragraphs: [
          "If you live in the Valley, you already know the look: cloudy shower doors, white crust on faucets, and that stubborn ring around the tub that never quite disappears after a quick wipe. Searching for house cleaning Las Vegas hard water is usually how locals describe the problem when standard tidy-ups stop working. Hard water is not dirt in the usual sense — it is mineral residue from calcium and magnesium that bonds to glass, chrome, tile, and porcelain every time water evaporates.",
          "Steampunk House Cleaning works homes across [Las Vegas](/locations/las-vegas-nevada), [Henderson](/locations/las-vegas-nevada/henderson), and [Summerlin](/locations/las-vegas-nevada/summerlin). We see the same pattern week after week: bathrooms that look “clean enough” from five feet away still feel rough under your hand, and glass that never goes fully clear. This post breaks down why that happens, what a proper deep clean changes, and how to keep hard water from owning your showers again.",
        ],
      },
      {
        heading: "Why Las Vegas hard water is so hard on bathrooms",
        paragraphs: [
          "Southern Nevada’s municipal water is famously mineral-rich. That is great for some industrial uses and terrible for glass shower doors. Every rinse leaves a thin film. Multiply that by daily showers for a family of four and you get etched-looking panels, clogged shower heads, and fixtures that look older than they are.",
          "Hard water stains bathroom surfaces in a few predictable places:",
        ],
        bullets: [
          "Shower glass and enclosure tracks (the tracks trap grit and soap together)",
          "Chrome and brushed-nickel faucets, handles, and shower arms",
          "Tile and grout near the shower head and tub spout",
          "Toilet bowls at the waterline",
          "Kitchen sinks and stainless appliances that see frequent splashes",
        ],
      },
      {
        paragraphs: [
          "Soap scum makes it worse. Soap binds to minerals and creates that sticky beige film that a damp rag only smears. If your last few cleans were surface-level only, the film has had months to harden. That is when homeowners start looking for deep cleaning Las Vegas teams instead of another “standard tidy.”",
        ],
      },
      {
        heading: "What a standard clean can (and cannot) fix",
        paragraphs: [
          "A solid recurring house clean keeps counters, floors, toilets, and high-touch surfaces in good shape. It will wipe glass and polish fixtures — and for light mineral mist, that is enough. It will not, by itself, reverse years of buildup in tracks, heavily scaled shower heads, or grout that has gone gray from mineral + soap layers.",
          "Think of standard cleaning as maintenance. Hard water is a gradual construction project happening on every wet surface. Maintenance slows the build. It does not demolish what already set.",
          "That distinction matters when you price quotes. If your glass has gone opaque and your fixtures feel chalky, ask specifically for a deep clean (or a focused bathroom deep pass) rather than hoping a regular visit will magically restore clarity.",
        ],
      },
      {
        heading: "What deep cleaning Las Vegas homes needs for hard water",
        paragraphs: [
          "Our [deep cleaning](/deep-cleaning) checklist is built for homes that need more than a surface reset. For hard-water bathrooms, that usually means longer dwell time with the right products, detail work on tracks and hinges, and deliberate attention to mineral deposits — not a faster version of the same wipe-down.",
          "On a typical Las Vegas deep clean focused on hard water, we prioritize:",
        ],
        bullets: [
          "Shower glass: remove mineral film and soap scum so panels read clear again when possible",
          "Shower door tracks and thresholds: vacuum and scrub the grit line that keeps regenerating stains",
          "Fixtures and shower heads: break down white scale on spouts, aerators, and spray faces",
          "Tile and grout: scrub mineral + soap layers, especially at splash zones",
          "Baseboards and ledges in wet rooms: catch the dust that sticks to damp residue",
          "Kitchen wet zones: sinks, faucet bases, and stainless near the dishwasher splash path",
        ],
      },
      {
        paragraphs: [
          "Honesty check: if glass has been chemically etched by years of abrasive DIY scrubbing, no cleaner can polish that damage away. Most “cloudy” Vegas showers we see are film, not etch — and film responds well to a proper deep clean. We will tell you on the walkthrough which category you are in.",
        ],
      },
      {
        heading: "Hard water stains bathroom: a realistic before/after expectation",
        paragraphs: [
          "Homeowners often send us photos that look like the shower is permanently ruined. After a deep clean, the same enclosure usually photographs clear again under normal lighting. Expect:",
        ],
        bullets: [
          "Clearer glass with less haze when you turn on the vanity lights",
          "Faucets that look closer to their original finish",
          "Less “gritty” feel on tile underfoot in the shower",
          "Tracks that do not leave black residue on a fingertip",
        ],
      },
      {
        paragraphs: [
          "Do not expect a one-visit miracle on neglected silica buildup that has bonded for a decade, or on cheap glass that was never sealed. Also do not expect hard water to stop arriving tomorrow — Vegas water chemistry does not take days off. The win is resetting the surface so your next recurring cleans can keep pace.",
        ],
      },
      {
        heading: "How to keep hard water from bouncing back",
        paragraphs: [
          "After a deep reset, small habits buy you months of easier maintenance:",
        ],
        bullets: [
          "Squeegee glass after showers (thirty seconds beats thirty minutes later)",
          "Wipe faucet bases when you see the first white freckles",
          "Run a monthly vinegar or manufacturer-safe soak on removable shower heads",
          "Book recurring cleaning on a schedule that matches your household’s shower volume",
          "Tell your cleaner which bathroom is the problem child so they spend time where it matters",
        ],
      },
      {
        paragraphs: [
          "If you host short-term guests or have teens who take marathon showers, biweekly service usually holds the line better than monthly. Families in [Summerlin](/locations/las-vegas-nevada/summerlin) HOAs and [Henderson](/locations/las-vegas-nevada/henderson) two-stories often keep one deep clean on the calendar each spring or fall, then ride recurring standard cleans the rest of the year.",
        ],
      },
      {
        heading: "When to call Steampunk vs. DIY",
        paragraphs: [
          "DIY is fine for light weekly wipe-downs. Call a pro when:",
        ],
        bullets: [
          "Glass has stayed cloudy after your own scrubbing sessions",
          "You are prepping a home for sale, photos, or new tenants",
          "You have avoided the shower tracks for longer than you want to admit",
          "You want house cleaning that treats Las Vegas hard water as a known local condition — not a surprise",
        ],
      },
      {
        paragraphs: [
          "Steampunk is a local team covering the Las Vegas Valley and beyond. We bring supplies, follow a documented checklist, and price the job on a quote call — no mystery fees. If hard water is the main reason you are shopping cleaners, say so up front. We will steer you toward deep cleaning Las Vegas service when that is the right reset, or toward recurring maintenance when you are already in good shape.",
        ],
      },
      {
        heading: "Ready for clearer showers?",
        paragraphs: [
          "Request a free quote online or call [(725) 255-3688](tel:7252553688). Tell us your city (Las Vegas, Henderson, Summerlin, or nearby), roughly how long it has been since a deep clean, and which bathrooms are the worst offenders. We will confirm timing and pricing — then put hard water stains bathroom surfaces back under control.",
          "Start here: [Get a free quote](/get-a-quote) · [Las Vegas locations](/locations/las-vegas-nevada) · [Deep cleaning](/deep-cleaning)",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
