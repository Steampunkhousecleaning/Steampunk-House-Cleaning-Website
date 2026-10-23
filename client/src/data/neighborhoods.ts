/**
 * City / neighborhood landing pages nested under metro hubs.
 * Keep unique local copy — no spun stubs.
 * Covers Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.
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
  /** Optional page-specific intro for the "Services in [City]" section (switches the heading and adds the local move-out card). */
  servicesIntro?: string;
  /**
   * Hub this page sits under when it is not the metro hub (e.g. Sparks sits
   * under the Reno & Sparks hub). Used for breadcrumbs and back links, and
   * keeps the page out of the metro hub's featured-city grid.
   */
  parentHub?: { name: string; shortName: string; path: string };
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
      "Irvine homes — HOA access rules, garage parking, and busy dual-career schedules — need cleaners who respect gate codes, visitor parking limits, or HOA quiet hours. Steampunk House Cleaning serves Orange County master-planned communities near the Spectrum as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
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
      "Pasadena homes — Craftsman bungalows, hillside homes, and condo buildings — need cleaners who respect street parking and building elevators that vary block by block. Steampunk House Cleaning serves Pasadena and nearby LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
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
      "Los Angeles homes — apartments, hillsides, and family homes across diverse neighborhoods — need cleaners who respect street cleaning days, building managers, and tight parking. Steampunk House Cleaning serves the City of Los Angeles as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Long Beach homes — coastal condos, historic neighborhoods, and busy port-adjacent schedules — need cleaners who respect permit parking, elevators, and building entry rules. Steampunk House Cleaning serves Long Beach and the South Bay edge of LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
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
    title: "House Cleaning Santa Monica, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Santa Monica. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Santa Monica",
    intro: [
      "Santa Monica homes — coastal living, walk-up apartments, and premium mid-rises — need cleaners who respect visitor parking scarcity and building security desks. Steampunk House Cleaning serves Santa Monica on the Westside as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Glendale homes — Armenian and Armenian-American family homes plus hillside residences — need cleaners who respect steep driveways and street parking on busy corridors. Steampunk House Cleaning serves Glendale in the Verdugo foothills as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Burbank homes — entertainment-industry schedules and tree-lined residential blocks — need cleaners who respect garage codes and weekday street restrictions. Steampunk House Cleaning serves Burbank near the studios and Magnolia Park as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Torrance homes — family neighborhoods and Japanese-American community roots — need cleaners who respect driveway parking and HOA rules in planned tracts. Steampunk House Cleaning serves Torrance in the South Bay as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
      "Culver City homes — studio-adjacent apartments and revitalized downtown living — need cleaners who respect alley parking, gated complexes, and metro-adjacent buildings. Steampunk House Cleaning serves Culver City between the Westside and Mid-City as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
    title: "House Cleaning West Hollywood, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in West Hollywood. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "West Hollywood",
    intro: [
      "West Hollywood homes — dense urban living, entertainment nightlife corridors, and design-forward homes — need cleaners who respect underground garages and doorman or call-box entry. Steampunk House Cleaning serves West Hollywood as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Downey homes — family-oriented neighborhoods and established mid-century tracts — need cleaners who respect driveway and curb parking with straightforward entry. Steampunk House Cleaning serves Downey in southeast LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Inglewood homes — growing residential demand and busy event-weekend calendars — need cleaners who respect street parking and apartment complex gates. Steampunk House Cleaning serves Inglewood near SoFi and the Forum as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
      "Pomona homes — university-adjacent rentals and larger family lots — need cleaners who respect driveway parking and straightforward residential streets. Steampunk House Cleaning serves Pomona in the eastern San Gabriel Valley as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Anaheim homes — resort-adjacent homes and busy family schedules near the resorts — need cleaners who respect HOA gates and guest parking limits in planned communities. Steampunk House Cleaning serves Anaheim in north Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
    title: "House Cleaning Huntington Beach | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Huntington Beach. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Huntington Beach",
    intro: [
      "Huntington Beach homes — surf-town living, sandy floors, and outdoor-active households — need cleaners who respect beach-area parking and alley or garage entry. Steampunk House Cleaning serves Huntington Beach on the OC coast as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
    title: "House Cleaning Newport Beach, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Newport Beach. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Newport Beach",
    intro: [
      "Newport Beach homes — premium coastal homes and guest-ready expectations — need cleaners who respect tight street parking, private gates, and building access codes. Steampunk House Cleaning serves Newport Beach and nearby harbor communities as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
      "Santa Ana homes — urban core apartments and established family neighborhoods — need cleaners who respect street parking and multi-unit building entry. Steampunk House Cleaning serves Santa Ana in the heart of Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Costa Mesa homes — creative-industry schedules and mixed residential stock — need cleaners who respect complex gates and visitor parking rules. Steampunk House Cleaning serves Costa Mesa between South Coast Plaza and the coast as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
      "Fullerton homes — university-town energy and tree-lined residential streets — need cleaners who respect driveway parking and quiet-hour HOA rules. Steampunk House Cleaning serves Fullerton in north Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
      "Orange homes — historic district charm and suburban family pockets — need cleaners who respect street parking near the Plaza and driveway homes inland. Steampunk House Cleaning serves the City of Orange including Old Towne as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Tustin homes — newer planned communities and established Old Town blocks — need cleaners who respect HOA gates and garage parking norms. Steampunk House Cleaning serves Tustin and the Legacy / Tustin Ranch corridors as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
    title: "House Cleaning Mission Viejo, CA | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Mission Viejo. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Mission Viejo",
    intro: [
      "Mission Viejo homes — lake-community living and family-oriented planned neighborhoods — need cleaners who respect community gates and visitor parking rules. Steampunk House Cleaning serves Mission Viejo in south Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
      "Las Vegas homes — desert dust, HOA villages, and busy hospitality-adjacent schedules — need cleaners who respect gate codes, HOA rules, and garage vs. street parking. Steampunk House Cleaning serves Las Vegas proper across the Valley as part of our Las Vegas market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
      "Henderson is Nevada's second-largest city and sits in the southeast part of the Las Vegas Valley. Steampunk House Cleaning cleans homes across Henderson, from established streets near Boulder Highway to the newer master-planned communities to the south and east.",
      "Much of Henderson is master-planned. Anthem and Seven Hills sit on higher ground with golf-course and view homes, MacDonald Highlands is guard-gated, and Inspirada and Cadence are newer communities built around parks and trails. Lake Las Vegas adds resort-style homes and condos around a private lake. Many neighborhoods have guard gates or HOA rules about parking, so share those when you book and we will plan around them. Larger floor plans often mean several bathrooms, and the Valley's very hard water leaves scale in every one. Hillside homes with big windows also catch wind-blown desert dust, which shows up on sills and stone floors. Natural stone counters are common in newer models, so we use stone-safe products on them.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Henderson?",
        a: "Henderson homes range from condos to large hillside houses, so pricing is quote-based. Bedrooms, bathrooms, the service level, and visit frequency all factor in, and a recurring plan is priced differently from a one-time clean. Use the free quote form or give us a call at (725) 255-3688.",
      },
      {
        q: "Do you clean in Inspirada, Cadence, and Lake Las Vegas?",
        a: "Yes, Henderson is part of our Las Vegas service area. Add your community and zip code on the quote form and we will confirm your address and schedule.",
      },
      {
        q: "What is a good first visit for a large Henderson home?",
        a: "A deep clean is a strong first visit because it resets bathrooms, baseboards, and fixtures before regular visits begin. Inside-oven cleaning is a paid add-on and is never included unless you add it.",
      },
    ],
    servicesIntro: "For large Henderson homes, a deep clean followed by recurring visits keeps bathrooms and floors under control. Moving out of a Henderson rental or selling a house? Our Las Vegas move-out cleaning page explains the empty-home checklist.",
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "summerlin",
    path: "/locations/las-vegas-nevada/summerlin",
    name: "Summerlin",
    stateLabel: "Nevada",
    featured: true,
    title: "House Cleaning in Summerlin, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Summerlin and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Summerlin",
    intro: [
      "Summerlin homes — master-planned villages, golf-course neighborhoods, and HOA-managed streets — need cleaners who respect village gate codes and community rules. Steampunk House Cleaning serves Summerlin on the west side of the Las Vegas Valley as part of our Las Vegas market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
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
    title: "House Cleaning in North Las Vegas | Steampunk House Cleaning",
    description:
      "Professional house cleaning in North Las Vegas and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "North Las Vegas",
    intro: [
      "North Las Vegas homes — growing suburban tracts and value-focused family homes — need cleaners who respect driveway parking and newer-community gates. Steampunk House Cleaning serves North Las Vegas as part of our Las Vegas market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
      "Paradise is the unincorporated town that holds most of the Las Vegas Strip, UNLV, and Harry Reid International Airport, even though its mailing addresses read Las Vegas. Steampunk House Cleaning cleans condos, apartments, and houses across it.",
      "Housing here is very mixed. There are high-rise condo towers along the resort corridor, apartment complexes near UNLV and Maryland Parkway, the guard-gated Las Vegas Country Club, and 1960s mid-century homes in Paradise Palms. Each one changes how a visit works: a tower may need front-desk check-in and a loading-zone plan, while an original Paradise Palms house has older finishes we clean by hand. Some owners near the Strip use their place as a short-term rental and need resets between guests, which our Airbnb cleaning page covers. Hard water leaves white film on faucets and glass, and desert dust drifts in on windy days. If your tower limits when vendors can work, tell us the allowed hours and we will book inside them.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Paradise?",
        a: "It depends on what you are cleaning. A Strip-corridor condo, a UNLV-area apartment, and a Country Club home take very different amounts of time, so we price each one by size, service type, and visit frequency. Request a free quote through our form, or call us at (725) 255-3688 and we will walk through it with you.",
      },
      {
        q: "Can you clean a high-rise condo near the Strip?",
        a: "Yes. Let us know your building's check-in steps, such as front-desk registration, a loading-zone spot, or an elevator reservation, so your cleaner can get to your floor without delays.",
      },
      {
        q: "Do you clean mid-century homes in Paradise Palms?",
        a: "Yes. Older homes like these can have original wood paneling, terrazzo, or clerestory windows. Mention any original finishes when you request a quote and we will choose products that suit them.",
      },
    ],
    servicesIntro: "Paradise condos and apartments often need standard or recurring cleaning, and hosts near the Strip can book turnover cleans through our Airbnb / STR service. Renters near UNLV who are handing back keys can use our Las Vegas move-out cleaning.",
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "spring-valley",
    path: "/locations/las-vegas-nevada/spring-valley",
    name: "Spring Valley",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning Spring Valley, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Spring Valley and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Spring Valley",
    intro: [
      "Spring Valley is the unincorporated town about two miles west of the Strip, reaching from Decatur Boulevard out toward Summerlin South. Steampunk House Cleaning cleans apartments, townhomes, and single-family homes throughout it.",
      "A lot of Spring Valley is apartment and condo living, from complexes along Rainbow Boulevard and Desert Inn Road to newer buildings near Chinatown on Spring Mountain Road. Farther southwest, Rhodes Ranch is a gated master-planned community with golf-course homes, and older single-story houses with small yards fill many of the blocks in between. Gated apartment entries and limited visitor parking are the main access issues, so add your call box steps or gate code to the quote form. Shared walls and small patios mean dust from monsoon wind and nearby construction finds its way inside quickly. Hard water also builds up on sliding shower doors and kitchen faucets, which we treat on every visit. If your complex has quiet hours, note them on the form so we can plan the start time.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Spring Valley?",
        a: "There is no single flat price. We look at your unit or home size, the service you want, its current condition, and how often you would like visits, then give you a quote. Getting one is free: send the quote form or phone (725) 255-3688.",
      },
      {
        q: "Do you clean apartments near Chinatown and Spring Mountain Road?",
        a: "Yes, apartments and condos are welcome. Include your complex name and unit number so we can plan parking and the walk to your door.",
      },
      {
        q: "Can you help with hard-water buildup on sliding shower doors?",
        a: "Yes. We treat the glass, door tracks, and fixtures for mineral film during the clean. Heavily etched glass may stay cloudy, and we will tell you honestly if that is the case.",
      },
    ],
    servicesIntro: "Spring Valley renters and owners can book standard, deep, or recurring cleaning, plus our Las Vegas move-out cleaning when a lease is ending. Investors with units close to the Strip can also look at our Airbnb / STR page.",
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
      "Enterprise is the unincorporated Clark County town that covers much of the southwest Las Vegas Valley, south of Sunset Road and west of Paradise. Steampunk House Cleaning cleans homes here for households that want a reliable, checklist-based visit.",
      "Most of the housing went up after the 215 Beltway opened the area, so you will find newer two-story tract homes, townhomes, and apartment communities. Mountain's Edge and Southern Highlands are the two big master-planned communities, and parts of Southern Highlands are guard-gated with their own visitor rules. Tell us your gate process and HOA parking rules when you book. Even newer homes pick up fine desert dust from open lots nearby and from summer monsoon storms, and it collects on window tracks, ceiling fans, and baseboards. Southern Nevada tap water is very hard, so we plan time for mineral spots on shower glass and faucets. Tile floors in big open kitchens show every footprint, so we finish them with a damp mop instead of a dry sweep.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Enterprise?",
        a: "We don't publish set prices because every Enterprise home is different. Your quote depends on square footage, how many bathrooms you have, the type of clean, and whether you book once or on a schedule. For a free quote, fill out the quote form on this page or call (725) 255-3688.",
      },
      {
        q: "Can you get past the gate in Southern Highlands or Mountain's Edge?",
        a: "Yes, as long as we know the process ahead of time. Put the gate code, guard-desk instructions, or the name to leave on the guest list in the notes of your quote request, and your cleaner will use them on arrival.",
      },
      {
        q: "Do you clean townhomes and apartments in Enterprise, or only houses?",
        a: "Both. We clean single-family homes, townhomes, condos, and apartments. For apartment communities, tell us where visitors park and how to reach your unit.",
      },
    ],
    servicesIntro: "A newly finished Enterprise house is a good candidate for a deep clean first, then standard or recurring visits to keep dust down. Leaving a southwest Valley rental? Book Las Vegas move-out cleaning to get cabinets, baseboards, and fixtures ready for the walkthrough.",
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "centennial-hills",
    path: "/locations/las-vegas-nevada/centennial-hills",
    name: "Centennial Hills",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning Centennial Hills | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Centennial Hills and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Centennial Hills",
    intro: [
      "Centennial Hills homes — foothill views, newer tracts, and family calendars — need cleaners who respect community gates and driveway parking. Steampunk House Cleaning serves Centennial Hills in the northwest Valley as part of our Las Vegas market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
    title: "House Cleaning Green Valley, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Green Valley and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Green Valley",
    intro: [
      "Green Valley is the master-planned community in western Henderson that American Nevada Corporation started in 1978, the first of its kind in Southern Nevada. Steampunk House Cleaning cleans homes in Green Valley, Green Valley South, and Green Valley Ranch.",
      "Because building started decades ago, the housing spans several eras. The older sections have homes with mature trees and established HOAs, while Green Valley Ranch, which began construction in 1994, has newer houses, gated villages, and condos near The District and Green Valley Parkway. Most streets fall under an HOA and some villages are gated, so let us know the entry process and parking rules. Older homes often have original tile and grout that hold years of hard-water film, and mature landscaping tracks leaves and dust toward the doors. Monsoon wind in late summer pushes fine dust onto patios, sliding-door tracks, and window sills. A deep clean first, then recurring visits, works well here.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Green Valley?",
        a: "Pricing is quote-based, not a flat rate. For Green Valley homes we look at size, bathroom count, the service you choose, and whether you want one visit or a recurring plan. You can get a free quote with the online form or by calling (725) 255-3688.",
      },
      {
        q: "Do you clean in Green Valley Ranch and its gated villages?",
        a: "Yes. Send us your village name, gate instructions, and any HOA parking rules with your quote request so your cleaner can get in on time.",
      },
      {
        q: "Can you clean condos near The District at Green Valley Ranch?",
        a: "Yes, we clean condos and townhomes there too. Let us know the building entrance, where to park, and the unit number.",
      },
    ],
    servicesIntro: "Green Valley households often pair a first deep clean with recurring visits. If you are moving out of a Green Valley Ranch condo or rental, see our Las Vegas move-out cleaning page for the empty-home checklist.",
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
      "Whitney is the unincorporated town on the east side of the Valley along Boulder Highway, between Sunrise Manor and Henderson. It was called East Las Vegas until it was renamed in 1993. We clean single-family houses and apartment units throughout Whitney.",
      "Whitney is one of the older parts of the Valley, with roots in a ranch that was subdivided in 1931 when Boulder Highway was built. Many homes are single-story houses with block walls, gravel yards, and older tile, and there are apartment complexes near Boulder Highway, Tropicana Avenue, and Russell Road, close to the former Sam Boyd Stadium. Older homes tend to have more gaps around doors and windows, so fine dust from open desert lots and summer monsoon storms settles fast on sills, blinds, and ceiling fans. Older fixtures also hold years of hard-water scale. Renters can book a move-out clean before a walkthrough, and owners often do best with one deep clean and then regular visits.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Whitney?",
        a: "Each quote is built around your home: its size, its condition, which service you pick, and how often you want us back. There is no charge for a quote. Fill out the form or call (725) 255-3688 and we will get back to you with one.",
      },
      {
        q: "Can you clean my rental before I move out?",
        a: "Yes. Tell us your move-out date, unit size, and how we get in, whether that is a lockbox or a key from the leasing office. The Las Vegas move-out page has the room-by-room list.",
      },
      {
        q: "How often should an older Whitney home be cleaned?",
        a: "We can set weekly, every-two-weeks, or monthly visits. If dust builds up fast in your home, a shorter gap between visits keeps it manageable.",
      },
    ],
    servicesIntro: "Whitney homeowners can start with a deep clean and move to recurring visits, while renters can use our Las Vegas move-out cleaning before handing back keys. Standard one-time visits are available too.",
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "boulder-city",
    path: "/locations/las-vegas-nevada/boulder-city",
    name: "Boulder City",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning Boulder City, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Boulder City and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Boulder City",
    intro: [
      "Boulder City homes — small-city pace and historic downtown residential blocks — need cleaners who respect straightforward driveway parking. Steampunk House Cleaning serves Boulder City near Lake Mead as part of our Las Vegas market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
    title: "House Cleaning Sunrise Manor, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Sunrise Manor and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Sunrise Manor",
    intro: [
      "Sunrise Manor homes — busy family households and practical cleaning needs — need cleaners who respect street parking and apartment complex entry. Steampunk House Cleaning serves Sunrise Manor on the east Valley as part of our Las Vegas market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
    ],
    quoteCity: "Las Vegas, NV",
  },
  {
    metroSlug: "las-vegas-nevada",
    slug: "sparks",
    path: "/locations/las-vegas-nevada/sparks",
    parentHub: { name: "Reno & Sparks", shortName: "Reno & Sparks", path: "/locations/reno" },
    name: "Sparks",
    stateLabel: "Nevada",
    featured: true,
    title: "House Cleaning in Sparks, NV | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Sparks. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Sparks",
    intro: [
      "Sparks homes — family neighborhoods and industrial-corridor schedules — need cleaners who respect driveway parking and straightforward residential access. Steampunk House Cleaning serves Sparks next to Reno as part of our Reno market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Northern Nevada coverage when available",
      "Free quote by phone",
    ],
    faqs: [
      {
        q: "Do you clean in Sparks as well as Reno?",
        a: "Yes. Sparks is part of our Reno service area. Share your zip on the quote form so we can schedule your visit.",
      },
    ],
    quoteCity: "Reno, NV",
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
      "Roseville homes — school runs, commute days, and weekend guests — need cleaners who respect driveway parking and pet notes. Steampunk House Cleaning serves Roseville near Sacramento as part of our Sacramento market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Elk Grove homes — family-oriented neighborhoods and larger floor plans — need cleaners who respect driveway parking and kid/pet-friendly scheduling. Steampunk House Cleaning serves Elk Grove south of Sacramento as part of our Sacramento market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    faqs: [
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
      "Folsom homes — active outdoor households and established suburbs — need cleaners who respect driveway parking and HOA rules in planned tracts. Steampunk House Cleaning serves Folsom near the lake and historic district as part of our Sacramento market with the same checklist-driven process we use across Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.",
    ],
    localNotes: [],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "HOA / gate access friendly",
      "Free quote by phone",
    ],
    faqs: [
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
  // Pages with their own parent hub (Sparks -> Reno & Sparks) are not featured on the metro hub.
  return NEIGHBORHOODS.filter((n) => n.metroSlug === metroSlug && !n.parentHub);
}

export function getFeaturedNeighborhoods(): Neighborhood[] {
  return NEIGHBORHOODS.filter((n) => n.featured);
}


/** Quote-form city value for a city page, e.g. "Irvine, CA" (matches the form's city options). */
export function neighborhoodQuoteCity(n: Pick<Neighborhood, "name" | "stateLabel">): string {
  const st = n.stateLabel === "Nevada" ? "NV" : "CA";
  return `${n.name}, ${st}`;
}
