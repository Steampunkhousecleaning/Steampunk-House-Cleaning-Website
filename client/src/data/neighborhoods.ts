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
      "Pasadena homes — Craftsman bungalows, hillside homes, and condo buildings — need cleaners who respect street parking and building elevators that vary block by block. Steampunk House Cleaning serves Pasadena and nearby LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Los Angeles homes — apartments, hillsides, and family homes across diverse neighborhoods — need cleaners who respect street cleaning days, building managers, and tight parking. Steampunk House Cleaning serves the City of Los Angeles as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Long Beach homes — coastal condos, historic neighborhoods, and busy port-adjacent schedules — need cleaners who respect permit parking, elevators, and building entry rules. Steampunk House Cleaning serves Long Beach and the South Bay edge of LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
    title: "House Cleaning in Santa Monica, CA | Steampunk",
    description:
      "Professional house cleaning in Santa Monica. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Santa Monica",
    intro: [
      "Santa Monica homes — coastal living, walk-up apartments, and premium mid-rises — need cleaners who respect visitor parking scarcity and building security desks. Steampunk House Cleaning serves Santa Monica on the Westside as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Glendale homes — Armenian and Armenian-American family homes plus hillside residences — need cleaners who respect steep driveways and street parking on busy corridors. Steampunk House Cleaning serves Glendale in the Verdugo foothills as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Burbank homes — entertainment-industry schedules and tree-lined residential blocks — need cleaners who respect garage codes and weekday street restrictions. Steampunk House Cleaning serves Burbank near the studios and Magnolia Park as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Torrance homes — family neighborhoods and Japanese-American community roots — need cleaners who respect driveway parking and HOA rules in planned tracts. Steampunk House Cleaning serves Torrance in the South Bay as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Culver City homes — studio-adjacent apartments and revitalized downtown living — need cleaners who respect alley parking, gated complexes, and metro-adjacent buildings. Steampunk House Cleaning serves Culver City between the Westside and Mid-City as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
    title: "House Cleaning in West Hollywood, CA | Steampunk",
    description:
      "Professional house cleaning in West Hollywood. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "West Hollywood",
    intro: [
      "West Hollywood homes — dense urban living, entertainment nightlife corridors, and design-forward homes — need cleaners who respect underground garages and doorman or call-box entry. Steampunk House Cleaning serves West Hollywood as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Downey homes — family-oriented neighborhoods and established mid-century tracts — need cleaners who respect driveway and curb parking with straightforward entry. Steampunk House Cleaning serves Downey in southeast LA County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Inglewood homes — growing residential demand and busy event-weekend calendars — need cleaners who respect street parking and apartment complex gates. Steampunk House Cleaning serves Inglewood near SoFi and the Forum as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Pomona homes — university-adjacent rentals and larger family lots — need cleaners who respect driveway parking and straightforward residential streets. Steampunk House Cleaning serves Pomona in the eastern San Gabriel Valley as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Anaheim homes — resort-adjacent homes and busy family schedules near the resorts — need cleaners who respect HOA gates and guest parking limits in planned communities. Steampunk House Cleaning serves Anaheim in north Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
    title: "House Cleaning in Huntington Beach, CA | Steampunk",
    description:
      "Professional house cleaning in Huntington Beach. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Huntington Beach",
    intro: [
      "Huntington Beach homes — surf-town living, sandy floors, and outdoor-active households — need cleaners who respect beach-area parking and alley or garage entry. Steampunk House Cleaning serves Huntington Beach on the OC coast as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
    title: "House Cleaning in Newport Beach, CA | Steampunk",
    description:
      "Professional house cleaning in Newport Beach. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Newport Beach",
    intro: [
      "Newport Beach homes — premium coastal homes and guest-ready expectations — need cleaners who respect tight street parking, private gates, and building access codes. Steampunk House Cleaning serves Newport Beach and nearby harbor communities as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Santa Ana homes — urban core apartments and established family neighborhoods — need cleaners who respect street parking and multi-unit building entry. Steampunk House Cleaning serves Santa Ana in the heart of Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Costa Mesa homes — creative-industry schedules and mixed residential stock — need cleaners who respect complex gates and visitor parking rules. Steampunk House Cleaning serves Costa Mesa between South Coast Plaza and the coast as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Fullerton homes — university-town energy and tree-lined residential streets — need cleaners who respect driveway parking and quiet-hour HOA rules. Steampunk House Cleaning serves Fullerton in north Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Orange homes — historic district charm and suburban family pockets — need cleaners who respect street parking near the Plaza and driveway homes inland. Steampunk House Cleaning serves the City of Orange including Old Towne as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Tustin homes — newer planned communities and established Old Town blocks — need cleaners who respect HOA gates and garage parking norms. Steampunk House Cleaning serves Tustin and the Legacy / Tustin Ranch corridors as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
    title: "House Cleaning in Mission Viejo, CA | Steampunk",
    description:
      "Professional house cleaning in Mission Viejo. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Mission Viejo",
    intro: [
      "Mission Viejo homes — lake-community living and family-oriented planned neighborhoods — need cleaners who respect community gates and visitor parking rules. Steampunk House Cleaning serves Mission Viejo in south Orange County as part of our Los Angeles / Orange County market with the same checklist-driven process we use across our three equal metros.",
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
      "Las Vegas homes — desert dust, HOA villages, and busy hospitality-adjacent schedules — need cleaners who respect gate codes, HOA rules, and garage vs. street parking. Steampunk House Cleaning serves Las Vegas proper across the Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
      "Henderson homes — suburban reliability without the runaround — need cleaners who respect garage vs. street parking and gate codes. Steampunk House Cleaning serves Henderson from Green Valley to Anthem-area communities as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
    title: "House Cleaning in North Las Vegas, NV | Steampunk",
    description:
      "Professional house cleaning in North Las Vegas and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "North Las Vegas",
    intro: [
      "North Las Vegas homes — growing suburban tracts and value-focused family homes — need cleaners who respect driveway parking and newer-community gates. Steampunk House Cleaning serves North Las Vegas as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
      "Paradise homes — condo living, short-term rentals, and high-traffic households — need cleaners who respect tower security desks and garage elevators. Steampunk House Cleaning serves Paradise Township near the Strip corridor as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
    slug: "spring-valley",
    path: "/locations/las-vegas-nevada/spring-valley",
    name: "Spring Valley",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Spring Valley, NV | Steampunk",
    description:
      "Professional house cleaning in Spring Valley and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Spring Valley",
    intro: [
      "Spring Valley homes — dense residential blocks and busy dual-income households — need cleaners who respect apartment gates and street parking. Steampunk House Cleaning serves Spring Valley west of the Strip as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
    slug: "centennial-hills",
    path: "/locations/las-vegas-nevada/centennial-hills",
    name: "Centennial Hills",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Centennial Hills, NV | Steampunk",
    description:
      "Professional house cleaning in Centennial Hills and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Centennial Hills",
    intro: [
      "Centennial Hills homes — foothill views, newer tracts, and family calendars — need cleaners who respect community gates and driveway parking. Steampunk House Cleaning serves Centennial Hills in the northwest Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
    title: "House Cleaning in Green Valley, NV | Steampunk",
    description:
      "Professional house cleaning in Green Valley and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Green Valley",
    intro: [
      "Green Valley homes — established planned living and mature landscaping — need cleaners who respect HOA norms and visitor parking rules. Steampunk House Cleaning serves Green Valley in Henderson as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
    slug: "boulder-city",
    path: "/locations/las-vegas-nevada/boulder-city",
    name: "Boulder City",
    stateLabel: "Nevada",
    featured: false,
    title: "House Cleaning in Boulder City, NV | Steampunk",
    description:
      "Professional house cleaning in Boulder City and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Boulder City",
    intro: [
      "Boulder City homes — small-city pace and historic downtown residential blocks — need cleaners who respect straightforward driveway parking. Steampunk House Cleaning serves Boulder City near Lake Mead as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
    title: "House Cleaning in Sunrise Manor, NV | Steampunk",
    description:
      "Professional house cleaning in Sunrise Manor and the Las Vegas Valley. Standard, deep, and recurring cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Sunrise Manor",
    intro: [
      "Sunrise Manor homes — busy family households and practical cleaning needs — need cleaners who respect street parking and apartment complex entry. Steampunk House Cleaning serves Sunrise Manor on the east Valley as part of our Las Vegas & Reno / Nevada market with the same checklist-driven process we use across our three equal metros.",
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
        a: "Yes — Sparks is part of our Northern Nevada coverage within the Las Vegas & Reno / Nevada market. Share your zip so we can confirm timing.",
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
      "Roseville homes — school runs, commute days, and weekend guests — need cleaners who respect driveway parking and pet notes. Steampunk House Cleaning serves Roseville near Sacramento as part of our Sacramento market with the same checklist-driven process we use across our three equal metros.",
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
      "Elk Grove homes — family-oriented neighborhoods and larger floor plans — need cleaners who respect driveway parking and kid/pet-friendly scheduling. Steampunk House Cleaning serves Elk Grove south of Sacramento as part of our Sacramento market with the same checklist-driven process we use across our three equal metros.",
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
      "Folsom homes — active outdoor households and established suburbs — need cleaners who respect driveway parking and HOA rules in planned tracts. Steampunk House Cleaning serves Folsom near the lake and historic district as part of our Sacramento market with the same checklist-driven process we use across our three equal metros.",
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
  return NEIGHBORHOODS.filter((n) => n.metroSlug === metroSlug);
}

export function getFeaturedNeighborhoods(): Neighborhood[] {
  return NEIGHBORHOODS.filter((n) => n.featured);
}

