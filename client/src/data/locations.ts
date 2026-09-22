export type LocationService = {
  label: string;
  href: string;
  blurb: string;
};

export type LocationFaq = {
  q: string;
  a: string;
};

export type MetroLocation = {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  stateLabel: string;
  title: string;
  description: string;
  h1: string;
  h1Accent: string;
  intro: string[];
  highlights: string[];
  areasHeading: string;
  areasNote: string;
  areas: string[];
  faqs: LocationFaq[];
  services: LocationService[];
};

const sharedServices: LocationService[] = [
  {
    label: "Standard Cleaning",
    href: "/standard-cleaning",
    blurb: "Routine surface cleaning for kitchens, baths, floors, and living areas.",
  },
  {
    label: "Deep Cleaning",
    href: "/deep-cleaning",
    blurb: "Detail work for baseboards, appliances, grout, and neglected spots.",
  },
  {
    label: "Recurring Cleaning",
    href: "/recurring-cleaning",
    blurb: "Weekly, bi-weekly, or monthly visits with a consistent team.",
  },
  {
    label: "Move-In / Move-Out",
    href: "/move-in-move-out",
    blurb: "Empty-home cleans for deposits, listings, and move day.",
  },
  {
    label: "Airbnb / STR Turnover",
    href: "/airbnb-cleaning",
    blurb: "Guest-ready turnovers with reliable timing between bookings.",
  },
  {
    label: "Commercial / Office",
    href: "/commercial-cleaning",
    blurb: "Flexible office and small commercial cleaning schedules.",
  },
];

export const METROS: MetroLocation[] = [
  {
    slug: "los-angeles-orange-county",
    path: "/locations/los-angeles-orange-county",
    name: "Los Angeles / Orange County",
    shortName: "LA / OC",
    stateLabel: "California",
    title: "House Cleaning in Los Angeles & Orange County | Steampunk",
    description:
      "Professional house cleaning across Los Angeles and Orange County. Background-checked cleaners, documented checklists, free quotes. Serving homes from LA to Irvine and beyond.",
    h1: "House cleaning in",
    h1Accent: "Los Angeles & Orange County",
    intro: [
      "Steampunk House Cleaning serves homeowners, renters, and short-term rental hosts across the Los Angeles and Orange County metro. Whether you need a one-time deep clean in Pasadena or a bi-weekly schedule in Irvine, we build the visit around your home — not a one-size-fits-all checklist.",
      "Traffic, parking, building access, and busy family calendars are part of Southern California life. We confirm timing and access details when we book so your cleaner can show up prepared and on schedule.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    areasHeading: "Areas we commonly serve in LA / OC",
    areasNote:
      "Coverage varies by zip and schedule. If your city is nearby and not listed, request a quote — we will confirm whether we can reach you.",
    areas: [
      "Los Angeles",
      "Santa Monica",
      "Pasadena",
      "Glendale",
      "Burbank",
      "Long Beach",
      "Torrance",
      "Culver City",
      "West Hollywood",
      "Irvine",
      "Anaheim",
      "Newport Beach",
      "Huntington Beach",
      "Costa Mesa",
      "Santa Ana",
      "Fullerton",
      "Orange",
      "Tustin",
    ],
    faqs: [
      {
        q: "Do you clean homes across both LA County and Orange County?",
        a: "Yes. Los Angeles / Orange County is one of our three primary markets. Tell us your city or zip in the quote form and we will confirm coverage and timing when we call.",
      },
      {
        q: "How far in advance should I book in LA / OC?",
        a: "Most standard and recurring cleans can be scheduled within 1–3 business days. Peak weeks and certain coastal or high-rise buildings may need more lead time — call (725) 255-3688 if you need something sooner.",
      },
      {
        q: "Can you work around building access, parking, or HOA rules?",
        a: "Absolutely. Share gate codes, parking instructions, and any building rules when we book. Our team plans around Southern California access realities instead of treating them as afterthoughts.",
      },
      {
        q: "Do you offer Airbnb and short-term rental turnovers in LA / OC?",
        a: "Yes. We handle guest-ready turnovers for hosts who need reliable timing between bookings. See our Airbnb cleaning page or mention STR turnover on your quote request.",
      },
    ],
    services: sharedServices,
  },
  {
    slug: "las-vegas-nevada",
    path: "/locations/las-vegas-nevada",
    name: "Las Vegas / Nevada",
    shortName: "Las Vegas / NV",
    stateLabel: "Nevada",
    title: "House Cleaning in Las Vegas & Nevada | Steampunk",
    description:
      "Professional house cleaning in Las Vegas and across Nevada. Trusted cleaners for homes, move-outs, and short-term rentals. Get a free quote today.",
    h1: "House cleaning in",
    h1Accent: "Las Vegas & Nevada",
    intro: [
      "Steampunk House Cleaning serves Las Vegas and surrounding Nevada communities with the same reliability standard we hold in California: background-checked cleaners, clear communication, and a documented checklist on every visit.",
      "From Valley homes and HOA communities to short-term rentals near the Strip corridor, we schedule around your access details and preferred cadence — one-time, move-out, or recurring.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    areasHeading: "Areas we commonly serve in Nevada",
    areasNote:
      "We focus on the Las Vegas metro and nearby communities we can reach reliably. If you are elsewhere in Nevada, request a quote and we will confirm.",
    areas: [
      "Las Vegas",
      "Henderson",
      "Summerlin",
      "North Las Vegas",
      "Paradise",
      "Spring Valley",
      "Enterprise",
      "Centennial Hills",
      "Green Valley",
      "Whitney",
      "Boulder City",
      "Sunrise Manor",
    ],
    faqs: [
      {
        q: "Is Las Vegas / Nevada a primary market for Steampunk?",
        a: "Yes. Nevada is one of our three equal markets alongside LA / Orange County and Sacramento. We are not a one-city side project — local clients get the same process and standards.",
      },
      {
        q: "Can you handle move-out cleans for apartments and rentals in Las Vegas?",
        a: "Yes. Move-in and move-out cleans are a common request in the Valley. Share your move date and unit condition when you request a quote so we can set expectations clearly.",
      },
      {
        q: "Do you clean short-term rentals near the Las Vegas Strip area?",
        a: "We support Airbnb and STR turnovers in the metro when logistics work for both sides. Mention your property location and turnover window on the quote form.",
      },
      {
        q: "How do I confirm you cover my Nevada zip code?",
        a: "Select Nevada (or note Las Vegas / your city) on the quote form, or call (725) 255-3688. We confirm coverage when we follow up — we do not claim every Nevada zip.",
      },
    ],
    services: sharedServices,
  },
  {
    slug: "sacramento",
    path: "/locations/sacramento",
    name: "Sacramento",
    shortName: "Sacramento",
    stateLabel: "California",
    title: "House Cleaning in Sacramento | Steampunk House Cleaning",
    description:
      "Professional house cleaning in Sacramento and nearby communities. Recurring, deep, move-out, and Airbnb cleans with background-checked teams. Free quote.",
    h1: "House cleaning in",
    h1Accent: "Sacramento",
    intro: [
      "Steampunk House Cleaning serves Sacramento-area homes with reliable, checklist-driven cleaning — whether you want a bi-weekly reset in Midtown, a deep clean before guests arrive in Roseville, or a move-out clean in Elk Grove.",
      "We treat Sacramento as a full market, not an afterthought. When you book, we confirm access, parking, and any pet or product preferences so the visit matches how you actually live.",
    ],
    highlights: [
      "Background-checked cleaners",
      "Documented room-by-room checklist",
      "Recurring or one-time options",
      "Free quote by phone",
    ],
    areasHeading: "Areas we commonly serve around Sacramento",
    areasNote:
      "We serve Sacramento and nearby communities we can reach on a reliable schedule. If your city is close but not listed, ask — we will confirm coverage on the call.",
    areas: [
      "Sacramento",
      "Midtown Sacramento",
      "East Sacramento",
      "Land Park",
      "Natomas",
      "Elk Grove",
      "Roseville",
      "Folsom",
      "Rancho Cordova",
      "Carmichael",
      "Citrus Heights",
      "Fair Oaks",
      "Davis",
      "West Sacramento",
    ],
    faqs: [
      {
        q: "Do you serve suburbs around Sacramento like Roseville or Elk Grove?",
        a: "Often yes — Roseville, Elk Grove, Folsom, Rancho Cordova, and similar nearby cities are commonly within reach. Share your city or zip on the quote form and we will confirm.",
      },
      {
        q: "Can I book recurring cleaning in Sacramento?",
        a: "Yes. Weekly, bi-weekly, and monthly schedules are available when capacity allows. Recurring clients typically get a consistent process and clearer long-term timing.",
      },
      {
        q: "Do you offer deep cleaning for older Sacramento homes?",
        a: "Yes. Deep cleans are a good fit for homes that need baseboards, appliances, and detail work beyond a standard visit. Start there if it has been a while since a professional clean.",
      },
      {
        q: "How fast can you schedule in the Sacramento area?",
        a: "Most visits land within 1–3 business days depending on demand. Call (725) 255-3688 for urgent requests and we will do our best to help.",
      },
    ],
    services: sharedServices,
  },
];

export function getMetroBySlug(slug: string | undefined): MetroLocation | undefined {
  if (!slug) return undefined;
  return METROS.find((m) => m.slug === slug);
}
