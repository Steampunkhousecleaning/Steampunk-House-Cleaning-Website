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
  metro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  body: BlogSection[];
  relatedLinks: BlogRelatedLink[];
};

export const blogPosts: BlogPost[] = [
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
