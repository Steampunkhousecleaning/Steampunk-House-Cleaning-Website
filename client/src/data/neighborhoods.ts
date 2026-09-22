/**
 * City / neighborhood landing pages nested under metro hubs.
 * Keep unique local copy — no spun stubs.
 * Generated/expanded for equal-weight LA/OC, Las Vegas & Reno / Nevada, Sacramento.
 */

export type Neighborhood = {
  metroSlug: string;
  slug: string;
  path: string;
  name: string;
  stateLabel: string;
  /** Curated popular grid on /locations (~12–18) */
  featured?: boolean;
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

/** Coverage names without a dedicated page yet — link to quote */
export type CoverageOnlyCity = {
  name: string;
  metroSlug: string;
  stateLabel: string;
};

export const COVERAGE_ONLY_CITIES: CoverageOnlyCity[] = [
  { name: "West Sacramento", metroSlug: "sacramento", stateLabel: "California" },
  { name: "Rancho Cordova", metroSlug: "sacramento", stateLabel: "California" },
  { name: "Carmichael", metroSlug: "sacramento", stateLabel: "California" },
  { name: "Citrus Heights", metroSlug: "sacramento", stateLabel: "California" },
  { name: "Davis", metroSlug: "sacramento", stateLabel: "California" },
  { name: "The Lakes", metroSlug: "las-vegas-nevada", stateLabel: "Nevada" },
  { name: "Aliante", metroSlug: "las-vegas-nevada", stateLabel: "Nevada" },
  { name: "Southern Highlands", metroSlug: "las-vegas-nevada", stateLabel: "Nevada" },
  { name: "Mountains Edge", metroSlug: "las-vegas-nevada", stateLabel: "Nevada" },
  { name: "Carson City", metroSlug: "las-vegas-nevada", stateLabel: "Nevada" },
  { name: "Redondo Beach", metroSlug: "los-angeles-orange-county", stateLabel: "California" },
  { name: "Manhattan Beach", metroSlug: "los-angeles-orange-county", stateLabel: "California" },
  { name: "Beverly Hills", metroSlug: "los-angeles-orange-county", stateLabel: "California" },
  { name: "Lake Forest", metroSlug: "los-angeles-orange-county", stateLabel: "California" },
  { name: "Yorba Linda", metroSlug: "los-angeles-orange-county", stateLabel: "California" },
];

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    metroSlug: "los-angeles-orange-county",
    slug: "irvine",
    path: "/locations/los-angeles-orange-county/irvine",
    name: "Irvine",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Irvine, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Irvine. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Irvine",
    intro: [
      "Irvine homes — HOA access rules, garage parking, and busy dual-career schedules — need cleaners who respect gate codes, visitor parking limits, or HOA quiet hours. Steampunk House Cleaning serves Orange County master-planned communities near the Spectrum as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Irvine households actually live.",
    ],
    localNotes: [
      "Many Irvine addresses involve gate codes, visitor parking limits, or HOA quiet hours. Share those details on your quote request so your cleaner arrives prepared.",
      "Open-concept kitchens and hard-surface floors are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Irvine is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
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
        a: "Yes. Irvine is part of our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
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
    featured: true,
    title: "House Cleaning in Pasadena, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Pasadena. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Pasadena",
    intro: [
      "Pasadena homes — Craftsman bungalows, hillside homes, and condo buildings — need cleaners who respect street parking and building elevators that vary block by block. Steampunk House Cleaning serves Pasadena and nearby LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Pasadena households actually live.",
    ],
    localNotes: [
      "Many Pasadena addresses involve street parking and building elevators that vary block by block. Share those details on your quote request so your cleaner arrives prepared.",
      "Wood floors, older baths, and lived-in kitchens are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Pasadena is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
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
    metroSlug: "los-angeles-orange-county",
    slug: "los-angeles",
    path: "/locations/los-angeles-orange-county/los-angeles",
    name: "Los Angeles",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Los Angeles, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Los Angeles. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Los Angeles",
    intro: [
      "Los Angeles homes — apartments, hillsides, and family homes across diverse neighborhoods — need cleaners who respect street cleaning days, building managers, and tight parking. Steampunk House Cleaning serves the City of Los Angeles as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Los Angeles households actually live.",
    ],
    localNotes: [
      "Many Los Angeles addresses involve street cleaning days, building managers, and tight parking. Share those details on your quote request so your cleaner arrives prepared.",
      "Condos, craftsman homes, and modern apartments are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Los Angeles is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Los Angeles?",
        a: "Yes. We serve Los Angeles residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Los Angeles parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Los Angeles part of your Los Angeles / Orange County market?",
        a: "Yes. Los Angeles sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "long-beach",
    path: "/locations/los-angeles-orange-county/long-beach",
    name: "Long Beach",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Long Beach, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Long Beach. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Long Beach",
    intro: [
      "Long Beach homes — coastal condos, historic neighborhoods, and busy port-adjacent schedules — need cleaners who respect permit parking, elevators, and building entry rules. Steampunk House Cleaning serves Long Beach and the South Bay edge of LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Long Beach households actually live.",
    ],
    localNotes: [
      "Many Long Beach addresses involve permit parking, elevators, and building entry rules. Share those details on your quote request so your cleaner arrives prepared.",
      "Beach-adjacent condos and multi-story family homes are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Long Beach is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you offer house cleaning across Long Beach neighborhoods?",
        a: "Yes, when schedule allows — from Belmont Shore-adjacent homes to inland family neighborhoods. Include your zip on the quote form.",
      },
      {
        q: "Can you work around Long Beach parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Long Beach part of your Los Angeles / Orange County market?",
        a: "Yes. Long Beach sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "santa-monica",
    path: "/locations/los-angeles-orange-county/santa-monica",
    name: "Santa Monica",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Santa Monica, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Santa Monica. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Santa Monica",
    intro: [
      "Santa Monica homes — coastal living, walk-up apartments, and premium mid-rises — need cleaners who respect visitor parking scarcity and building security desks. Steampunk House Cleaning serves Santa Monica on the Westside as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Santa Monica households actually live.",
    ],
    localNotes: [
      "Many Santa Monica addresses involve visitor parking scarcity and building security desks. Share those details on your quote request so your cleaner arrives prepared.",
      "Ocean-adjacent condos and classic California bungalows are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Santa Monica is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Santa Monica?",
        a: "Yes. We serve Santa Monica residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Santa Monica parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Santa Monica part of your Los Angeles / Orange County market?",
        a: "Yes. Santa Monica sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "glendale",
    path: "/locations/los-angeles-orange-county/glendale",
    name: "Glendale",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Glendale, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Glendale. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Glendale",
    intro: [
      "Glendale homes — Armenian and Armenian-American family homes plus hillside residences — need cleaners who respect steep driveways and street parking on busy corridors. Steampunk House Cleaning serves Glendale in the Verdugo foothills as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Glendale households actually live.",
    ],
    localNotes: [
      "Many Glendale addresses involve steep driveways and street parking on busy corridors. Share those details on your quote request so your cleaner arrives prepared.",
      "Multi-level houses and well-kept apartments are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Glendale is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Glendale?",
        a: "Yes. We serve Glendale residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Glendale parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Glendale part of your Los Angeles / Orange County market?",
        a: "Yes. Glendale sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "burbank",
    path: "/locations/los-angeles-orange-county/burbank",
    name: "Burbank",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Burbank, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Burbank. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Burbank",
    intro: [
      "Burbank homes — entertainment-industry schedules and tree-lined residential blocks — need cleaners who respect garage codes and weekday street restrictions. Steampunk House Cleaning serves Burbank near the studios and Magnolia Park as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Burbank households actually live.",
    ],
    localNotes: [
      "Many Burbank addresses involve garage codes and weekday street restrictions. Share those details on your quote request so your cleaner arrives prepared.",
      "Ranch homes, duplexes, and newer townhomes are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Burbank is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Burbank?",
        a: "Yes. We serve Burbank residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Burbank parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Burbank part of your Los Angeles / Orange County market?",
        a: "Yes. Burbank sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "torrance",
    path: "/locations/los-angeles-orange-county/torrance",
    name: "Torrance",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Torrance, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Torrance. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Torrance",
    intro: [
      "Torrance homes — family neighborhoods and Japanese-American community roots — need cleaners who respect driveway parking and HOA rules in planned tracts. Steampunk House Cleaning serves Torrance in the South Bay as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Torrance households actually live.",
    ],
    localNotes: [
      "Many Torrance addresses involve driveway parking and HOA rules in planned tracts. Share those details on your quote request so your cleaner arrives prepared.",
      "Single-family homes with garages and open living rooms are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Torrance is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Torrance?",
        a: "Yes. We serve Torrance residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Torrance parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Torrance part of your Los Angeles / Orange County market?",
        a: "Yes. Torrance sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "culver-city",
    path: "/locations/los-angeles-orange-county/culver-city",
    name: "Culver City",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Culver City, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Culver City. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Culver City",
    intro: [
      "Culver City homes — studio-adjacent apartments and revitalized downtown living — need cleaners who respect alley parking, gated complexes, and metro-adjacent buildings. Steampunk House Cleaning serves Culver City between the Westside and Mid-City as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Culver City households actually live.",
    ],
    localNotes: [
      "Many Culver City addresses involve alley parking, gated complexes, and metro-adjacent buildings. Share those details on your quote request so your cleaner arrives prepared.",
      "Lofts, craftsman houses, and mid-century apartments are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Culver City is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Culver City?",
        a: "Yes. We serve Culver City residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Culver City parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Culver City part of your Los Angeles / Orange County market?",
        a: "Yes. Culver City sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "west-hollywood",
    path: "/locations/los-angeles-orange-county/west-hollywood",
    name: "West Hollywood",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in West Hollywood, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in West Hollywood. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "West Hollywood",
    intro: [
      "West Hollywood homes — dense urban living, entertainment nightlife corridors, and design-forward homes — need cleaners who respect underground garages and doorman or call-box entry. Steampunk House Cleaning serves West Hollywood as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how West Hollywood households actually live.",
    ],
    localNotes: [
      "Many West Hollywood addresses involve underground garages and doorman or call-box entry. Share those details on your quote request so your cleaner arrives prepared.",
      "Condos, townhomes, and stylish older apartments are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "West Hollywood is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in West Hollywood?",
        a: "Yes. We serve West Hollywood residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around West Hollywood parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is West Hollywood part of your Los Angeles / Orange County market?",
        a: "Yes. West Hollywood sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "downey",
    path: "/locations/los-angeles-orange-county/downey",
    name: "Downey",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Downey, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Downey. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Downey",
    intro: [
      "Downey homes — family-oriented neighborhoods and established mid-century tracts — need cleaners who respect driveway and curb parking with straightforward entry. Steampunk House Cleaning serves Downey in southeast LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Downey households actually live.",
    ],
    localNotes: [
      "Many Downey addresses involve driveway and curb parking with straightforward entry. Share those details on your quote request so your cleaner arrives prepared.",
      "Single-story and two-story family homes are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Downey is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Downey?",
        a: "Yes. We serve Downey residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Downey parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Downey part of your Los Angeles / Orange County market?",
        a: "Yes. Downey sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "inglewood",
    path: "/locations/los-angeles-orange-county/inglewood",
    name: "Inglewood",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Inglewood, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Inglewood. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Inglewood",
    intro: [
      "Inglewood homes — growing residential demand and busy event-weekend calendars — need cleaners who respect street parking and apartment complex gates. Steampunk House Cleaning serves Inglewood near SoFi and the Forum as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Inglewood households actually live.",
    ],
    localNotes: [
      "Many Inglewood addresses involve street parking and apartment complex gates. Share those details on your quote request so your cleaner arrives prepared.",
      "Bungalows, duplexes, and newer multifamily units are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Inglewood is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Inglewood?",
        a: "Yes. We serve Inglewood residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Inglewood parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Inglewood part of your Los Angeles / Orange County market?",
        a: "Yes. Inglewood sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "pomona",
    path: "/locations/los-angeles-orange-county/pomona",
    name: "Pomona",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Pomona, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Pomona. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Pomona",
    intro: [
      "Pomona homes — university-adjacent rentals and larger family lots — need cleaners who respect driveway parking and straightforward residential streets. Steampunk House Cleaning serves Pomona in the eastern San Gabriel Valley as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Pomona households actually live.",
    ],
    localNotes: [
      "Many Pomona addresses involve driveway parking and straightforward residential streets. Share those details on your quote request so your cleaner arrives prepared.",
      "Ranch homes, rentals, and multi-bedroom family houses are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Pomona is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Pomona?",
        a: "Yes. We serve Pomona residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Pomona parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Pomona part of your Los Angeles / Orange County market?",
        a: "Yes. Pomona sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "anaheim",
    path: "/locations/los-angeles-orange-county/anaheim",
    name: "Anaheim",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Anaheim, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Anaheim. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Anaheim",
    intro: [
      "Anaheim homes — resort-adjacent homes and busy family schedules near the resorts — need cleaners who respect HOA gates and guest parking limits in planned communities. Steampunk House Cleaning serves Anaheim in north Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Anaheim households actually live.",
    ],
    localNotes: [
      "Many Anaheim addresses involve HOA gates and guest parking limits in planned communities. Share those details on your quote request so your cleaner arrives prepared.",
      "Tract homes, townhomes, and condo communities are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Anaheim is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Anaheim?",
        a: "Yes. We serve Anaheim residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Anaheim parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Anaheim part of your Los Angeles / Orange County market?",
        a: "Yes. Anaheim sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "huntington-beach",
    path: "/locations/los-angeles-orange-county/huntington-beach",
    name: "Huntington Beach",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Huntington Beach, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Huntington Beach. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Huntington Beach",
    intro: [
      "Huntington Beach homes — surf-town living, sandy floors, and outdoor-active households — need cleaners who respect beach-area parking and alley or garage entry. Steampunk House Cleaning serves Huntington Beach on the OC coast as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Huntington Beach households actually live.",
    ],
    localNotes: [
      "Many Huntington Beach addresses involve beach-area parking and alley or garage entry. Share those details on your quote request so your cleaner arrives prepared.",
      "Coastal cottages, modern townhomes, and family houses inland are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Huntington Beach is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Huntington Beach?",
        a: "Yes. We serve Huntington Beach residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Huntington Beach parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Huntington Beach part of your Los Angeles / Orange County market?",
        a: "Yes. Huntington Beach sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "newport-beach",
    path: "/locations/los-angeles-orange-county/newport-beach",
    name: "Newport Beach",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Newport Beach, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Newport Beach. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Newport Beach",
    intro: [
      "Newport Beach homes — premium coastal homes and guest-ready expectations — need cleaners who respect tight street parking, private gates, and building access codes. Steampunk House Cleaning serves Newport Beach and nearby harbor communities as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Newport Beach households actually live.",
    ],
    localNotes: [
      "Many Newport Beach addresses involve tight street parking, private gates, and building access codes. Share those details on your quote request so your cleaner arrives prepared.",
      "Harbor condos, hillside homes, and luxury townhomes are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Newport Beach is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Newport Beach?",
        a: "Yes. We serve Newport Beach residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Newport Beach parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Newport Beach part of your Los Angeles / Orange County market?",
        a: "Yes. Newport Beach sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "santa-ana",
    path: "/locations/los-angeles-orange-county/santa-ana",
    name: "Santa Ana",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Santa Ana, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Santa Ana. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Santa Ana",
    intro: [
      "Santa Ana homes — urban core apartments and established family neighborhoods — need cleaners who respect street parking and multi-unit building entry. Steampunk House Cleaning serves Santa Ana in the heart of Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Santa Ana households actually live.",
    ],
    localNotes: [
      "Many Santa Ana addresses involve street parking and multi-unit building entry. Share those details on your quote request so your cleaner arrives prepared.",
      "Bungalows, duplexes, and downtown-adjacent apartments are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Santa Ana is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Santa Ana?",
        a: "Yes. We serve Santa Ana residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Santa Ana parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Santa Ana part of your Los Angeles / Orange County market?",
        a: "Yes. Santa Ana sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "costa-mesa",
    path: "/locations/los-angeles-orange-county/costa-mesa",
    name: "Costa Mesa",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Costa Mesa, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Costa Mesa. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Costa Mesa",
    intro: [
      "Costa Mesa homes — creative-industry schedules and mixed residential stock — need cleaners who respect complex gates and visitor parking rules. Steampunk House Cleaning serves Costa Mesa between South Coast Plaza and the coast as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Costa Mesa households actually live.",
    ],
    localNotes: [
      "Many Costa Mesa addresses involve complex gates and visitor parking rules. Share those details on your quote request so your cleaner arrives prepared.",
      "Condos, townhomes, and mid-century houses are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Costa Mesa is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Costa Mesa?",
        a: "Yes. We serve Costa Mesa residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Costa Mesa parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Costa Mesa part of your Los Angeles / Orange County market?",
        a: "Yes. Costa Mesa sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "fullerton",
    path: "/locations/los-angeles-orange-county/fullerton",
    name: "Fullerton",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Fullerton, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Fullerton. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Fullerton",
    intro: [
      "Fullerton homes — university-town energy and tree-lined residential streets — need cleaners who respect driveway parking and quiet-hour HOA rules. Steampunk House Cleaning serves Fullerton in north Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Fullerton households actually live.",
    ],
    localNotes: [
      "Many Fullerton addresses involve driveway parking and quiet-hour HOA rules. Share those details on your quote request so your cleaner arrives prepared.",
      "Family homes, rentals, and hillside residences are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Fullerton is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Fullerton?",
        a: "Yes. We serve Fullerton residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Fullerton parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Fullerton part of your Los Angeles / Orange County market?",
        a: "Yes. Fullerton sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "orange",
    path: "/locations/los-angeles-orange-county/orange",
    name: "Orange",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Orange, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Orange. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Orange",
    intro: [
      "Orange homes — historic district charm and suburban family pockets — need cleaners who respect street parking near the Plaza and driveway homes inland. Steampunk House Cleaning serves the City of Orange including Old Towne as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Orange households actually live.",
    ],
    localNotes: [
      "Many Orange addresses involve street parking near the Plaza and driveway homes inland. Share those details on your quote request so your cleaner arrives prepared.",
      "Craftsman homes, tract houses, and condos are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Orange is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Orange?",
        a: "Yes. We serve Orange residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Orange parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Orange part of your Los Angeles / Orange County market?",
        a: "Yes. Orange sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "tustin",
    path: "/locations/los-angeles-orange-county/tustin",
    name: "Tustin",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Tustin, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Tustin. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Tustin",
    intro: [
      "Tustin homes — newer planned communities and established Old Town blocks — need cleaners who respect HOA gates and garage parking norms. Steampunk House Cleaning serves Tustin and the Legacy / Tustin Ranch corridors as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Tustin households actually live.",
    ],
    localNotes: [
      "Many Tustin addresses involve HOA gates and garage parking norms. Share those details on your quote request so your cleaner arrives prepared.",
      "Two-story family homes and townhome clusters are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Tustin is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Tustin?",
        a: "Yes. We serve Tustin residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Tustin parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Tustin part of your Los Angeles / Orange County market?",
        a: "Yes. Tustin sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "los-angeles-orange-county",
    slug: "mission-viejo",
    path: "/locations/los-angeles-orange-county/mission-viejo",
    name: "Mission Viejo",
    stateLabel: "California",
    featured: false,
    title: "House Cleaning in Mission Viejo, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Mission Viejo. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Mission Viejo",
    intro: [
      "Mission Viejo homes — lake-community living and family-oriented planned neighborhoods — need cleaners who respect community gates and visitor parking rules. Steampunk House Cleaning serves Mission Viejo in south Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Mission Viejo households actually live.",
    ],
    localNotes: [
      "Many Mission Viejo addresses involve community gates and visitor parking rules. Share those details on your quote request so your cleaner arrives prepared.",
      "Spacious single-family homes with open kitchens are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Mission Viejo is part of our Los Angeles / Orange County market — equal priority with Las Vegas & Reno / Nevada and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Mission Viejo?",
        a: "Yes. We serve Mission Viejo residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Mission Viejo parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Mission Viejo part of your Los Angeles / Orange County market?",
        a: "Yes. Mission Viejo sits inside our Los Angeles / Orange County service area — one of three equal markets alongside Las Vegas & Reno / Nevada and Sacramento.",
      },
    ],
    quoteCity: "Los Angeles / Orange County",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "las-vegas",
    path: "/locations/las-vegas-nevada/las-vegas",
    name: "Las Vegas",
    stateLabel: "Nevada",
    featured: true,
    title: "House Cleaning in Las Vegas, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Las Vegas and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Las Vegas",
    intro: [
      "Las Vegas homes — desert dust, HOA villages, and busy hospitality-adjacent schedules — need cleaners who respect gate codes, HOA rules, and garage vs. street parking. Steampunk House Cleaning serves Las Vegas proper across the Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Las Vegas households actually live.",
    ],
    localNotes: [
      "Many Las Vegas addresses involve gate codes, HOA rules, and garage vs. street parking. Share those details on your quote request so your cleaner arrives prepared.",
      "Single-family homes, condos, and townhomes are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Las Vegas is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Las Vegas?",
        a: "Yes. We serve Las Vegas residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Las Vegas parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Las Vegas part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Las Vegas sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "henderson",
    path: "/locations/las-vegas-nevada/henderson",
    name: "Henderson",
    stateLabel: "Nevada",
    featured: true,
    title: "House Cleaning in Henderson, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Henderson and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Henderson",
    intro: [
      "Henderson homes — suburban reliability without the runaround — need cleaners who respect garage vs. street parking and gate codes. Steampunk House Cleaning serves Henderson from Green Valley to Anthem-area communities as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Henderson households actually live.",
    ],
    localNotes: [
      "Many Henderson addresses involve garage vs. street parking and gate codes. Share those details on your quote request so your cleaner arrives prepared.",
      "Family houses and planned-community homes are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Henderson is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
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
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "summerlin",
    path: "/locations/las-vegas-nevada/summerlin",
    name: "Summerlin",
    stateLabel: "Nevada",
    featured: true,
    title: "House Cleaning in Summerlin, Las Vegas | Steampunk",
    description:
      "Professional house cleaning in Summerlin and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Summerlin",
    intro: [
      "Summerlin homes — master-planned villages, golf-course neighborhoods, and HOA-managed streets — need cleaners who respect village gate codes and community rules. Steampunk House Cleaning serves Summerlin on the west side of the Las Vegas Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Summerlin households actually live.",
    ],
    localNotes: [
      "Many Summerlin addresses involve village gate codes and community rules. Share those details on your quote request so your cleaner arrives prepared.",
      "Hard-surface floors and open living areas are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Summerlin is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
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
        q: "Is Summerlin part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Summerlin sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets with LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "north-las-vegas",
    path: "/locations/las-vegas-nevada/north-las-vegas",
    name: "North Las Vegas",
    stateLabel: "Nevada",
    featured: true,
    title: "House Cleaning in North Las Vegas, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in North Las Vegas and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "North Las Vegas",
    intro: [
      "North Las Vegas homes — growing suburban tracts and value-focused family homes — need cleaners who respect driveway parking and newer-community gates. Steampunk House Cleaning serves North Las Vegas as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how North Las Vegas households actually live.",
    ],
    localNotes: [
      "Many North Las Vegas addresses involve driveway parking and newer-community gates. Share those details on your quote request so your cleaner arrives prepared.",
      "Two-story family homes and townhomes are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "North Las Vegas is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in North Las Vegas?",
        a: "Yes. We serve North Las Vegas residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around North Las Vegas parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is North Las Vegas part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. North Las Vegas sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "paradise",
    path: "/locations/las-vegas-nevada/paradise",
    name: "Paradise",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Paradise, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Paradise and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Paradise",
    intro: [
      "Paradise homes — condo living, short-term rentals, and high-traffic households — need cleaners who respect tower security desks and garage elevators. Steampunk House Cleaning serves Paradise Township near the Strip corridor as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Paradise households actually live.",
    ],
    localNotes: [
      "Many Paradise addresses involve tower security desks and garage elevators. Share those details on your quote request so your cleaner arrives prepared.",
      "High-rise condos and mid-rise apartments are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Paradise is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Paradise?",
        a: "Yes. We serve Paradise residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Paradise parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Paradise part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Paradise sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "spring-valley",
    path: "/locations/las-vegas-nevada/spring-valley",
    name: "Spring Valley",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Spring Valley, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Spring Valley and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Spring Valley",
    intro: [
      "Spring Valley homes — dense residential blocks and busy dual-income households — need cleaners who respect apartment gates and street parking. Steampunk House Cleaning serves Spring Valley west of the Strip as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Spring Valley households actually live.",
    ],
    localNotes: [
      "Many Spring Valley addresses involve apartment gates and street parking. Share those details on your quote request so your cleaner arrives prepared.",
      "Condos, townhomes, and patio homes are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Spring Valley is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Spring Valley?",
        a: "Yes. We serve Spring Valley residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Spring Valley parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Spring Valley part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Spring Valley sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "enterprise",
    path: "/locations/las-vegas-nevada/enterprise",
    name: "Enterprise",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Enterprise, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Enterprise and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Enterprise",
    intro: [
      "Enterprise homes — newer construction and master-planned growth — need cleaners who respect HOA gates and garage-first parking. Steampunk House Cleaning serves Enterprise in the southwest Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Enterprise households actually live.",
    ],
    localNotes: [
      "Many Enterprise addresses involve HOA gates and garage-first parking. Share those details on your quote request so your cleaner arrives prepared.",
      "Modern single-family homes with open floor plans are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Enterprise is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Enterprise?",
        a: "Yes. We serve Enterprise residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Enterprise parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Enterprise part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Enterprise sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "centennial-hills",
    path: "/locations/las-vegas-nevada/centennial-hills",
    name: "Centennial Hills",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Centennial Hills, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Centennial Hills and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Centennial Hills",
    intro: [
      "Centennial Hills homes — foothill views, newer tracts, and family calendars — need cleaners who respect community gates and driveway parking. Steampunk House Cleaning serves Centennial Hills in the northwest Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Centennial Hills households actually live.",
    ],
    localNotes: [
      "Many Centennial Hills addresses involve community gates and driveway parking. Share those details on your quote request so your cleaner arrives prepared.",
      "Two-story homes with large kitchens are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Centennial Hills is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Centennial Hills?",
        a: "Yes. We serve Centennial Hills residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Centennial Hills parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Centennial Hills part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Centennial Hills sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "green-valley",
    path: "/locations/las-vegas-nevada/green-valley",
    name: "Green Valley",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Green Valley, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Green Valley and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Green Valley",
    intro: [
      "Green Valley homes — established planned living and mature landscaping — need cleaners who respect HOA norms and visitor parking rules. Steampunk House Cleaning serves Green Valley in Henderson as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Green Valley households actually live.",
    ],
    localNotes: [
      "Many Green Valley addresses involve HOA norms and visitor parking rules. Share those details on your quote request so your cleaner arrives prepared.",
      "Single-family homes and townhome clusters are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Green Valley is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Green Valley?",
        a: "Yes. We serve Green Valley residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Green Valley parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Green Valley part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Green Valley sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "whitney",
    path: "/locations/las-vegas-nevada/whitney",
    name: "Whitney",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Whitney, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Whitney and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Whitney",
    intro: [
      "Whitney homes — practical residential streets and value-focused homes — need cleaners who respect driveway and curb parking. Steampunk House Cleaning serves Whitney on the east side of the Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Whitney households actually live.",
    ],
    localNotes: [
      "Many Whitney addresses involve driveway and curb parking. Share those details on your quote request so your cleaner arrives prepared.",
      "Ranch and two-story family houses are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Whitney is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Whitney?",
        a: "Yes. We serve Whitney residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Whitney parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Whitney part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Whitney sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "boulder-city",
    path: "/locations/las-vegas-nevada/boulder-city",
    name: "Boulder City",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Boulder City, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Boulder City and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Boulder City",
    intro: [
      "Boulder City homes — small-city pace and historic downtown residential blocks — need cleaners who respect straightforward driveway parking. Steampunk House Cleaning serves Boulder City near Lake Mead as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Boulder City households actually live.",
    ],
    localNotes: [
      "Many Boulder City addresses involve straightforward driveway parking. Share those details on your quote request so your cleaner arrives prepared.",
      "Classic homes and quiet residential streets are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Boulder City is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Boulder City?",
        a: "Yes. We serve Boulder City residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Boulder City parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Boulder City part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Boulder City sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "sunrise-manor",
    path: "/locations/las-vegas-nevada/sunrise-manor",
    name: "Sunrise Manor",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Sunrise Manor, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Sunrise Manor and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Sunrise Manor",
    intro: [
      "Sunrise Manor homes — busy family households and practical cleaning needs — need cleaners who respect street parking and apartment complex entry. Steampunk House Cleaning serves Sunrise Manor on the east Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Sunrise Manor households actually live.",
    ],
    localNotes: [
      "Many Sunrise Manor addresses involve street parking and apartment complex entry. Share those details on your quote request so your cleaner arrives prepared.",
      "Single-family homes and multifamily units are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Sunrise Manor is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Sunrise Manor?",
        a: "Yes. We serve Sunrise Manor residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Sunrise Manor parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Sunrise Manor part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Sunrise Manor sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "reno",
    path: "/locations/las-vegas-nevada/reno",
    name: "Reno",
    stateLabel: "Nevada",
    featured: true,
    title: "House Cleaning in Reno, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Reno. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Reno",
    intro: [
      "Reno homes — foothill homes, midtown rentals, and newer subdivisions — need cleaners who respect Northern Nevada logistics that differ from the Las Vegas Valley. Steampunk House Cleaning serves Reno and the Northern Nevada corridor as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Reno households actually live.",
    ],
    localNotes: [
      "Many Reno addresses involve Northern Nevada logistics that differ from the Las Vegas Valley. Share those details on your quote request so your cleaner arrives prepared.",
      "Foothill houses, midtown rentals, and newer builds are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Reno is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
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
        a: "We serve both Southern and Northern Nevada when logistics work. Reno is part of our Nevada market (Las Vegas & Reno). Request a quote with your zip and we will confirm coverage and timing on the follow-up call.",
      },
      {
        q: "Can I book recurring cleaning in Reno?",
        a: "Weekly, bi-weekly, and monthly options are available subject to capacity. Recurring clients typically get a clearer long-term schedule once coverage is confirmed.",
      },
      {
        q: "How do I get a Reno cleaning quote?",
        a: "Use Get a Quote and select Reno, NV (or note Reno in the notes), or call (725) 255-3688. We confirm whether we can reach your address before you commit.",
      },
    ],
    quoteCity: "Reno, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "sparks",
    path: "/locations/las-vegas-nevada/sparks",
    name: "Sparks",
    stateLabel: "Nevada",
    featured: true,
    title: "House Cleaning in Sparks, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Sparks. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Sparks",
    intro: [
      "Sparks homes — family neighborhoods and industrial-corridor schedules — need cleaners who respect driveway parking and straightforward residential access. Steampunk House Cleaning serves Sparks next to Reno as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Sparks households actually live.",
    ],
    localNotes: [
      "Many Sparks addresses involve driveway parking and straightforward residential access. Share those details on your quote request so your cleaner arrives prepared.",
      "Single-family homes and newer east-Sparks tracts are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Sparks is part of our Las Vegas & Reno / Nevada market — equal priority with LA / Orange County and Sacramento — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Northern Nevada coverage when available",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean in Sparks as well as Reno?",
        a: "Yes — Sparks is part of our Northern Nevada coverage within the Las Vegas & Reno / Nevada market. Share your zip so we can confirm timing.",
      },
      {
        q: "Can you work around Sparks parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Sparks part of your Las Vegas & Reno / Nevada market?",
        a: "Yes. Sparks sits inside our Las Vegas & Reno / Nevada service area — one of three equal markets alongside LA / Orange County and Sacramento.",
      },
    ],
    quoteCity: "Reno, NV",
  },
  {
    metroSlug: "sacramento",
    slug: "sacramento",
    path: "/locations/sacramento/sacramento",
    name: "Sacramento",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Sacramento, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Sacramento. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Sacramento",
    intro: [
      "Sacramento homes — tree streets, river-adjacent living, and state-worker schedules — need cleaners who respect street parking, alley garages, and building codes. Steampunk House Cleaning serves Sacramento city neighborhoods from Midtown to Natomas as part of our Sacramento market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Sacramento households actually live.",
    ],
    localNotes: [
      "Many Sacramento addresses involve street parking, alley garages, and building codes. Share those details on your quote request so your cleaner arrives prepared.",
      "Victorians, bungalows, and modern apartments are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Sacramento is part of our Sacramento market — equal priority with LA / OC and Las Vegas & Reno / Nevada — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Sacramento?",
        a: "Yes. We serve Sacramento residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Sacramento parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Sacramento part of your Sacramento market?",
        a: "Yes. Sacramento sits inside our Sacramento service area — one of three equal markets alongside LA / OC and Las Vegas & Reno / Nevada.",
      },
    ],
    quoteCity: "Sacramento, CA",
  },
  {
    metroSlug: "sacramento",
    slug: "roseville",
    path: "/locations/sacramento/roseville",
    name: "Roseville",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Roseville, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Roseville. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Roseville",
    intro: [
      "Roseville homes — school runs, commute days, and weekend guests — need cleaners who respect driveway parking and pet notes. Steampunk House Cleaning serves Roseville near Sacramento as part of our Sacramento market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Roseville households actually live.",
    ],
    localNotes: [
      "Many Roseville addresses involve driveway parking and pet notes. Share those details on your quote request so your cleaner arrives prepared.",
      "Newer builds with large kitchens and open living spaces are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Roseville is part of our Sacramento market — equal priority with LA / OC and Las Vegas & Reno / Nevada — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Roseville?",
        a: "Yes. We serve Roseville residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Roseville parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Roseville part of your Sacramento market?",
        a: "Yes. Roseville sits inside our Sacramento service area — one of three equal markets alongside LA / OC and Las Vegas & Reno / Nevada.",
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
    featured: true,
    title: "House Cleaning in Elk Grove, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Elk Grove. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Elk Grove",
    intro: [
      "Elk Grove homes — family-oriented neighborhoods and larger floor plans — need cleaners who respect driveway parking and kid/pet-friendly scheduling. Steampunk House Cleaning serves Elk Grove south of Sacramento as part of our Sacramento market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Elk Grove households actually live.",
    ],
    localNotes: [
      "Many Elk Grove addresses involve driveway parking and kid/pet-friendly scheduling. Share those details on your quote request so your cleaner arrives prepared.",
      "Two-story family homes with busy kitchens are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Elk Grove is part of our Sacramento market — equal priority with LA / OC and Las Vegas & Reno / Nevada — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Elk Grove?",
        a: "Yes. We serve Elk Grove residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Elk Grove parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Elk Grove part of your Sacramento market?",
        a: "Yes. Elk Grove sits inside our Sacramento service area — one of three equal markets alongside LA / OC and Las Vegas & Reno / Nevada.",
      },
    ],
    quoteCity: "Sacramento, CA",
  },
  {
    metroSlug: "sacramento",
    slug: "folsom",
    path: "/locations/sacramento/folsom",
    name: "Folsom",
    stateLabel: "California",
    featured: true,
    title: "House Cleaning in Folsom, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Folsom. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Folsom",
    intro: [
      "Folsom homes — active outdoor households and established suburbs — need cleaners who respect driveway parking and HOA rules in planned tracts. Steampunk House Cleaning serves Folsom near the lake and historic district as part of our Sacramento market with the same checklist-driven process we use across our three equal metros.",
      "Whether you want a bi-weekly reset, a deep clean before hosting, or a one-time standard clean between tenants, we confirm access, parking, and product preferences when we book so the visit fits how Folsom households actually live.",
    ],
    localNotes: [
      "Many Folsom addresses involve driveway parking and HOA rules in planned tracts. Share those details on your quote request so your cleaner arrives prepared.",
      "Single-family homes with open living areas are common here — our standard and deep cleans cover counters, appliances, baths, and floors on a documented checklist.",
      "Folsom is part of our Sacramento market — equal priority with LA / OC and Las Vegas & Reno / Nevada — not a thin doorway stub.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean houses in Folsom?",
        a: "Yes. We serve Folsom residences when schedule and access work. Tell us your neighborhood or zip on the quote form and we will confirm coverage when we call.",
      },
      {
        q: "Can you work around Folsom parking and building access?",
        a: "Absolutely. Share gate codes, visitor parking instructions, and any building rules when we book. We plan around them instead of treating access as an afterthought.",
      },
      {
        q: "Is Folsom part of your Sacramento market?",
        a: "Yes. Folsom sits inside our Sacramento service area — one of three equal markets alongside LA / OC and Las Vegas & Reno / Nevada.",
      },
    ],
    quoteCity: "Sacramento, CA",
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

export function getFeaturedNeighborhoods(): Neighborhood[] {
  return NEIGHBORHOODS.filter((n) => n.featured);
}

