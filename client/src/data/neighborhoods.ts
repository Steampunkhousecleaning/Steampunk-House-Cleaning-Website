/**
 * City / neighborhood landing pages nested under metro hubs.
 * Keep unique local copy — no spun stubs.
 */

export type Neighborhood = {
  metroSlug: string;
  slug: string;
  path: string;
  name: string;
  stateLabel: string;
  title: string;
  description: string;
  h1: string;
  h1Accent: string;
  intro: string[];
  localNotes: string[];
  highlights: string[];
  faqs: { q: string; a: string }[];
  quoteCity: string;
};

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    metroSlug: "los-angeles-orange-county",
    slug: "irvine",
    path: "/locations/los-angeles-orange-county/irvine",
    name: "Irvine",
    stateLabel: "California",
    title: "House Cleaning in Irvine, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Irvine, Orange County. Standard, deep, and recurring cleans with background-checked teams and a free quote.",
    h1: "House cleaning in",
    h1Accent: "Irvine",
    intro: [
      "Irvine homes — from master-planned neighborhoods to townhomes near the Spectrum — need cleaners who respect HOA access rules, garage parking, and busy dual-career schedules. Steampunk House Cleaning serves Irvine as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Southern California.",
      "Whether you want a bi-weekly reset after long weeks at the office, a deep clean before hosting, or a one-time standard clean between tenants, we confirm gate codes, parking, and product preferences when we book so the visit fits how Irvine households actually live.",
    ],
    localNotes: [
      "Many Irvine communities use gate codes, visitor parking limits, or HOA quiet hours. Share those details on your quote request so your cleaner arrives prepared.",
      "Open-concept kitchens and hard-surface floors are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "If you are comparing Irvine cleaners for recurring service, ask about consistency: we aim for a clear process and reliable timing, not a different crew every visit when capacity allows.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses and townhomes in Irvine?",
        a: "Yes. We serve Irvine residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Irvine HOA parking and gate codes?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Irvine covered under your LA / Orange County market?",
        a: "Yes. Irvine is part of our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "pasadena",
    path: "/locations/los-angeles-orange-county/pasadena",
    name: "Pasadena",
    stateLabel: "California",
    title: "House Cleaning in Pasadena, CA | Steampunk House Cleaning",
    description:
      "Trusted house cleaning in Pasadena and nearby LA County. Deep cleans, recurring schedules, and move-ready visits. Background-checked cleaners. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Pasadena",
    intro: [
      "Pasadena’s mix of Craftsman bungalows, hillside homes, and condo buildings rewards cleaners who notice detail — baseboards, wood floors, older baths, and lived-in kitchens. Steampunk House Cleaning serves Pasadena within our Los Angeles / Orange County market with background-checked teams and a documented checklist on every visit.",
      "From a one-time deep clean after a busy season to weekly or bi-weekly maintenance in South Pasadena-adjacent neighborhoods, we confirm parking, entry, and any pet or product preferences before the appointment so you are not left coordinating on the day of service.",
    ],
    localNotes: [
      "Street parking and building elevators vary block by block in Pasadena. A quick note about where to park and how to enter saves time on clean day.",
      "Older homes often benefit from starting with a deep clean (baseboards, grout, appliance exteriors/interiors as scoped) before settling into a standard or recurring cadence.",
      "We treat Pasadena as a core LA / OC city — not a thin satellite page — with the same booking and quality process as Irvine, Long Beach, and the rest of the metro.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Deep or recurring options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you offer deep cleaning for older Pasadena homes?",
        a: "Yes. Deep cleans are a strong fit when it has been a while since a professional visit or when you need extra attention on baths, kitchens, and baseboards. We can discuss scope on the quote call.",
      },
      {
        q: "Can I book recurring cleaning in Pasadena?",
        a: "Weekly, bi-weekly, and monthly options are available when capacity allows. Recurring clients typically get a clearer long-term schedule and a consistent process.",
      },
      {
        q: "How do I confirm you cover my Pasadena zip?",
        a: "Request a quote with your city or zip, or call (725) 255-3688. We confirm coverage and timing when we follow up — we do not claim every LA County address.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "summerlin",
    path: "/locations/las-vegas-nevada/summerlin",
    name: "Summerlin",
    stateLabel: "Nevada",
    title: "House Cleaning in Summerlin, Las Vegas | Steampunk",
    description:
      "House cleaning in Summerlin and the west Las Vegas Valley. Recurring, deep, and one-time cleans with background-checked cleaners. Get a free quote.",
    h1: "House cleaning in",
    h1Accent: "Summerlin",
    intro: [
      "Summerlin’s master-planned communities, golf-course neighborhoods, and HOA-managed streets call for cleaners who show up on time, follow access instructions, and leave homes guest-ready. Steampunk House Cleaning serves Summerlin as part of our Las Vegas / Nevada market — equal in priority to our California metros.",
      "Dust from desert air, busy family calendars, and security gates are normal here. We schedule around your preferred cadence — one-time, deep, or recurring — and confirm entry details when we book so your visit is predictable, not improvised.",
    ],
    localNotes: [
      "Many Summerlin villages use gate codes or community rules. Include those on your quote request so we can plan the route and arrival window.",
      "Hard-surface floors and open living areas are common; our checklist covers kitchens, baths, dusting, vacuuming, and mopping for a thorough standard visit.",
      "Nevada is a primary market for us, not a side project — Summerlin clients get the same standards and communication as Henderson and the broader Valley.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean homes in Summerlin villages and HOAs?",
        a: "Yes, when logistics work. Share your village, gate instructions, and preferred timing on the quote form and we will confirm on the follow-up call.",
      },
      {
        q: "Can you handle recurring cleaning in Summerlin?",
        a: "Weekly, bi-weekly, and monthly schedules are available subject to capacity. Recurring visits help keep desert dust and high-traffic areas under control between deep cleans.",
      },
      {
        q: "Is Summerlin part of your Las Vegas / Nevada market?",
        a: "Yes. Summerlin sits inside our Las Vegas / Nevada service area — one of three equal markets with LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Nevada",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "henderson",
    path: "/locations/las-vegas-nevada/henderson",
    name: "Henderson",
    stateLabel: "Nevada",
    title: "House Cleaning in Henderson, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Henderson, Nevada. Standard, deep, move-out, and recurring service with clear checklists. Request a free quote today.",
    h1: "House cleaning in",
    h1Accent: "Henderson",
    intro: [
      "Henderson homeowners — from Green Valley to Anthem-area communities and everywhere in between — want reliable cleaning without the runaround. Steampunk House Cleaning serves Henderson within our Las Vegas / Nevada market with background-checked cleaners and a documented checklist on every appointment.",
      "Whether you need a move-out clean for an apartment turnover, a deep clean after renovations, or bi-weekly maintenance for a busy household, we confirm access, parking, and home size when we quote so expectations stay clear before anyone arrives.",
    ],
    localNotes: [
      "Henderson spans suburbs with different parking and HOA norms. A short note about garage vs. street parking and any gate codes helps the visit start on time.",
      "Move-in and move-out cleans are common in the Valley — share your move date and whether the home will be empty so we can scope the job honestly.",
      "We balance Henderson with Summerlin and the rest of the metro equally; you are not competing with a California-only focus for attention.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Move-out and recurring options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you serve Green Valley and other Henderson neighborhoods?",
        a: "Often yes. Henderson is one of the cities we commonly serve in the Las Vegas metro. Include your neighborhood or zip on the quote form and we will confirm coverage.",
      },
      {
        q: "Can you do move-out cleaning in Henderson?",
        a: "Yes. Move-in and move-out cleans are a frequent request. Tell us the move date, home size, and condition so we can set a realistic scope and timing.",
      },
      {
        q: "How far ahead should I book in Henderson?",
        a: "Most standard and recurring cleans can land within 1–3 business days. Peak weeks may need more lead time — call (725) 255-3688 if your date is firm.",
      },
    ],
    quoteCity: "Nevada",
  },
  {
    metroSlug: "sacramento",
    slug: "roseville",
    path: "/locations/sacramento/roseville",
    name: "Roseville",
    stateLabel: "California",
    title: "House Cleaning in Roseville, CA | Steampunk House Cleaning",
    description:
      "House cleaning in Roseville near Sacramento. Recurring, deep, and one-time cleans with background-checked teams. Free quote — confirm local coverage today.",
    h1: "House cleaning in",
    h1Accent: "Roseville",
    intro: [
      "Roseville families and professionals often need cleaning that keeps up with school runs, commute days, and weekend guests — without micromanaging the crew. Steampunk House Cleaning serves Roseville as part of our Sacramento market with the same checklist discipline we use in Midtown and Elk Grove.",
      "From a deep clean before the holidays to a steady bi-weekly schedule in newer subdivisions, we confirm driveway parking, pet notes, and product preferences when we book so the visit matches your home, not a generic script.",
    ],
    localNotes: [
      "Roseville’s newer builds often feature large kitchens and open living spaces — our standard clean covers those high-use zones thoroughly; deep cleans add detail work when you need a reset.",
      "We commonly reach Roseville from our Sacramento metro coverage. Share your zip on the quote form so we can confirm the next available window.",
      "Sacramento-area clients get equal priority with LA / OC and Las Vegas / Nevada — Roseville is not an afterthought suburb page.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Is Roseville within your Sacramento service area?",
        a: "Often yes — Roseville is one of the nearby cities we commonly serve. Request a quote with your zip and we will confirm coverage and timing on the call.",
      },
      {
        q: "Do you offer recurring cleaning in Roseville?",
        a: "Yes. Weekly, bi-weekly, and monthly schedules are available when capacity allows. Recurring visits help maintain kitchens, baths, and floors between deeper resets.",
      },
      {
        q: "What if I need a deep clean before guests arrive?",
        a: "Deep cleaning is a strong option when you want more than a maintenance visit. Mention your event date on the quote form so we can prioritize timing.",
      },
    ],
    quoteCity: "Sacramento, CA",
  },
  {
    metroSlug: "sacramento",
    slug: "elk-grove",
    path: "/locations/sacramento/elk-grove",
    name: "Elk Grove",
    stateLabel: "California",
    title: "House Cleaning in Elk Grove, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Elk Grove near Sacramento. Standard, deep, and recurring service with clear checklists. Get a free local quote.",
    h1: "House cleaning in",
    h1Accent: "Elk Grove",
    intro: [
      "Elk Grove’s family-oriented neighborhoods and larger floor plans often need consistent help keeping kitchens, baths, and living areas under control. Steampunk House Cleaning serves Elk Grove within our Sacramento market — equal weight with Roseville, Folsom, and the city core.",
      "Whether you are booking a first-time deep clean, a move-out before handover, or recurring bi-weekly visits, we walk through home size, access, and priorities on the quote call so you know what is included before we arrive.",
    ],
    localNotes: [
      "Two-story homes and busy family kitchens are common in Elk Grove. Tell us about pets, kids’ rooms, and any areas to skip or emphasize when you request a quote.",
      "Coverage is confirmed by schedule and zip — Elk Grove is frequently within reach, but we verify rather than over-promise every address.",
      "You get the same background-checked process and documented checklist we use across Sacramento, LA / OC, and Las Vegas / Nevada.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Family-home friendly scheduling",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean family homes in Elk Grove?",
        a: "Yes. Elk Grove is one of the Sacramento-area cities we commonly serve. Share bedroom count and any priority rooms on your quote request.",
      },
      {
        q: "Can you schedule around school and work hours?",
        a: "We do our best to match preferred windows when capacity allows. Note morning vs. afternoon preferences on the form or when we call.",
      },
      {
        q: "How do I get a quote for Elk Grove cleaning?",
        a: "Use the Get a Quote form (select Sacramento) or call (725) 255-3688. We follow up to confirm coverage, pricing factors, and timing — no commitment until you are ready.",
      },
    ],
    quoteCity: "Sacramento, CA",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "reno",
    path: "/locations/las-vegas-nevada/reno",
    name: "Reno",
    stateLabel: "Nevada",
    title: "House Cleaning in Reno, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Reno, Nevada. Standard, deep, and recurring cleans with background-checked teams. Free quote — Northern Nevada coverage.",
    h1: "House cleaning in",
    h1Accent: "Reno",
    intro: [
      "Reno and the Northern Nevada corridor need the same reliability Steampunk brings to the Las Vegas Valley — background-checked cleaners, clear communication, and a documented checklist. We serve Reno within our Nevada market alongside Southern Nevada communities, not as an afterthought.",
      "From foothill homes and midtown rentals to newer subdivisions, we confirm access, parking, and preferred cadence when we book. One-time deep cleans, move-outs, and recurring bi-weekly visits are all on the menu when schedule allows.",
    ],
    localNotes: [
      "Northern Nevada logistics differ from the Las Vegas Valley. Share your zip and preferred window on the quote form so we can confirm coverage honestly before you book.",
      "Seasonal dust, pollen, and busy work weeks are common reasons Reno clients start with a deep clean, then settle into a recurring standard cadence.",
      "Nevada is one of three equal markets with LA / Orange County and Sacramento — Reno clients get the same process and standards as Summerlin or Henderson.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Northern Nevada coverage when available",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you really clean in Reno, or only Las Vegas?",
        a: "We serve both Southern and Northern Nevada when logistics work. Reno is part of our Nevada market. Request a quote with your zip and we will confirm coverage and timing on the follow-up call.",
      },
      {
        q: "Can I book recurring cleaning in Reno?",
        a: "Weekly, bi-weekly, and monthly options are available subject to capacity. Recurring clients typically get a clearer long-term schedule once coverage is confirmed.",
      },
      {
        q: "How do I get a Reno cleaning quote?",
        a: "Use Get a Quote and select Nevada (note Reno in the notes if helpful), or call (725) 255-3688. We confirm whether we can reach your address before you commit.",
      },
    ],
    quoteCity: "Nevada",
  },

];

export function getNeighborhood(
  metroSlug: string | undefined,
  citySlug: string | undefined,
): Neighborhood | undefined {
  if (!metroSlug || !citySlug) return undefined;
  return NEIGHBORHOODS.find((n) => n.metroSlug === metroSlug && n.slug === citySlug);
}

export function getNeighborhoodsForMetro(metroSlug: string): Neighborhood[] {
  return NEIGHBORHOODS.filter((n) => n.metroSlug === metroSlug);
}
