/**
 * Service × metro landing pages nested under location hubs.
 * Pattern: /locations/{metroSlug}/{serviceSlug}
 */

export type ServiceMetro = {
  metroSlug: string;
  serviceSlug: string;
  path: string;
  serviceLabel: string;
  servicePath: string;
  quoteService: string;
  quoteCity: string;
  metroName: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  h1Accent: string;
  intro: string[];
  localAngle: string[];
  highlights: string[];
  faqs: { q: string; a: string }[];
};

const SERVICES = [
  {
    serviceSlug: "standard-cleaning",
    serviceLabel: "Standard Cleaning",
    servicePath: "/standard-cleaning",
    quoteService: "Standard Cleaning",
  },
  {
    serviceSlug: "deep-cleaning",
    serviceLabel: "Deep Cleaning",
    servicePath: "/deep-cleaning",
    quoteService: "Deep Cleaning",
  },
  {
    serviceSlug: "recurring-cleaning",
    serviceLabel: "Recurring Cleaning",
    servicePath: "/recurring-cleaning",
    quoteService: "Recurring Cleaning (Bi-Weekly)",
  },
] as const;

type MetroSeed = {
  metroSlug: string;
  metroName: string;
  shortName: string;
  quoteCity: string;
  regionPhrase: string;
  accessNote: string;
  demandNote: string;
};

const METRO_SEEDS: MetroSeed[] = [
  {
    metroSlug: "los-angeles-orange-county",
    metroName: "Los Angeles / Orange County",
    shortName: "LA / OC",
    quoteCity: "Los Angeles / Orange County",
    regionPhrase: "Los Angeles and Orange County",
    accessNote:
      "Traffic, building access, parking, and HOA rules are part of Southern California life — we confirm those details when we book.",
    demandNote:
      "Coastal condos, hillside homes, and inland family houses all show up in our LA / OC book — tell us your city or zip so we can confirm coverage.",
  },
  {
    metroSlug: "las-vegas-nevada",
    metroName: "Las Vegas, Reno & Nevada",
    shortName: "Nevada",
    quoteCity: "Nevada",
    regionPhrase: "Las Vegas, Reno, and Nevada communities we can reach",
    accessNote:
      "Gate codes, HOA rules, and Valley vs. Northern Nevada logistics vary — share your city (Las Vegas, Henderson, Summerlin, Reno, or elsewhere) and zip on the quote form.",
    demandNote:
      "Nevada is a full equal market for us, not a Vegas-only side project. We confirm Reno and Las Vegas Valley coverage by schedule and zip.",
  },
  {
    metroSlug: "sacramento",
    metroName: "Sacramento",
    shortName: "Sacramento",
    quoteCity: "Sacramento, CA",
    regionPhrase: "Sacramento and nearby communities like Roseville and Elk Grove",
    accessNote:
      "Driveway parking, pets, and two-story layouts are common — note preferences when you request a quote.",
    demandNote:
      "We treat Sacramento as a primary market equal to LA / OC and Nevada, with the same checklist and booking process.",
  },
];

function buildStandard(m: MetroSeed): ServiceMetro {
  return {
    metroSlug: m.metroSlug,
    serviceSlug: "standard-cleaning",
    path: `/locations/${m.metroSlug}/standard-cleaning`,
    serviceLabel: "Standard Cleaning",
    servicePath: "/standard-cleaning",
    quoteService: "Standard Cleaning",
    quoteCity: m.quoteCity,
    metroName: m.metroName,
    shortName: m.shortName,
    title: `Standard House Cleaning in ${m.metroName} | Steampunk`,
    description: `Standard house cleaning across ${m.regionPhrase}. Checklist-driven visits for kitchens, baths, and floors. Background-checked cleaners. Free quote.`,
    h1: "Standard cleaning in",
    h1Accent: m.metroName,
    intro: [
      `Looking for reliable standard house cleaning in ${m.regionPhrase}? Steampunk House Cleaning runs routine visits on a documented checklist — dusting, floors, kitchens, baths, and high-touch surfaces — so you know what is included before we arrive.`,
      m.accessNote,
    ],
    localAngle: [
      `Standard cleaning is our most-booked maintenance visit in ${m.shortName}. It is built for homes that need a thorough reset without the full deep-clean scope.`,
      m.demandNote,
      `Prefer to compare service menus first? See our full standard cleaning page, then request a ${m.shortName} quote with the service preselected.`,
    ],
    highlights: [
      "Documented room-by-room checklist",
      "Background-checked cleaners",
      "Kitchens, baths, floors & dusting",
      "Free local quote",
    ],
    faqs: [
      {
        q: `What does standard cleaning include in ${m.shortName}?`,
        a: "Major surfaces, high-traffic areas, bathrooms, kitchen, dusting, vacuuming, and mopping on a documented checklist. For inside ovens, baseboards detail, or grout focus, ask about deep cleaning.",
      },
      {
        q: `How soon can I book standard cleaning in ${m.metroName}?`,
        a: "Most visits land within 1–3 business days depending on demand. Call (725) 255-3688 for tighter timing and we will do our best.",
      },
      {
        q: "Can standard cleaning become a recurring schedule?",
        a: "Yes. Many clients start with a standard or deep clean, then move to weekly, bi-weekly, or monthly recurring visits when capacity allows.",
      },
    ],
  };
}

function buildDeep(m: MetroSeed): ServiceMetro {
  return {
    metroSlug: m.metroSlug,
    serviceSlug: "deep-cleaning",
    path: `/locations/${m.metroSlug}/deep-cleaning`,
    serviceLabel: "Deep Cleaning",
    servicePath: "/deep-cleaning",
    quoteService: "Deep Cleaning",
    quoteCity: m.quoteCity,
    metroName: m.metroName,
    shortName: m.shortName,
    title: `Deep Cleaning in ${m.metroName} | Steampunk House Cleaning`,
    description: `Deep house cleaning in ${m.regionPhrase}. Detail work for baseboards, appliances, baths, and neglected spots. Free quote from Steampunk.`,
    h1: "Deep cleaning in",
    h1Accent: m.metroName,
    intro: [
      `When ${m.shortName} homes need more than a maintenance pass — after a busy season, before guests, or when it has been a while — deep cleaning adds detail work beyond our standard checklist.`,
      m.accessNote,
    ],
    localAngle: [
      `Deep cleans in ${m.metroName} commonly include extra attention on kitchens, baths, baseboards, and spots that get skipped in a rush. Exact scope is confirmed on the quote call.`,
      m.demandNote,
      `First-time clients often start here, then switch to standard or recurring cleaning for upkeep. Review the full deep cleaning page for the broader menu.`,
    ],
    highlights: [
      "Detail-focused checklist",
      "Background-checked cleaners",
      "Strong first-visit or reset option",
      "Free local quote",
    ],
    faqs: [
      {
        q: `When should I choose deep cleaning in ${m.shortName}?`,
        a: "Choose deep cleaning when it has been a while since a professional clean, before hosting or listing, after projects, or when you want extra detail on baths, kitchens, and baseboards.",
      },
      {
        q: "Is deep cleaning the same as move-out cleaning?",
        a: "They overlap but are not identical. Move-out cleans target empty homes and deposit-ready standards. Tell us your situation on the quote form so we recommend the right service.",
      },
      {
        q: `Do you deep clean across all of ${m.metroName}?`,
        a: `We serve ${m.regionPhrase} when schedule allows. Share your city or zip and we will confirm coverage when we follow up.`,
      },
    ],
  };
}

function buildRecurring(m: MetroSeed): ServiceMetro {
  return {
    metroSlug: m.metroSlug,
    serviceSlug: "recurring-cleaning",
    path: `/locations/${m.metroSlug}/recurring-cleaning`,
    serviceLabel: "Recurring Cleaning",
    servicePath: "/recurring-cleaning",
    quoteService: "Recurring Cleaning (Bi-Weekly)",
    quoteCity: m.quoteCity,
    metroName: m.metroName,
    shortName: m.shortName,
    title: `Recurring House Cleaning in ${m.metroName} | Steampunk`,
    description: `Weekly, bi-weekly, or monthly house cleaning in ${m.regionPhrase}. Consistent process, background-checked teams, free quote.`,
    h1: "Recurring cleaning in",
    h1Accent: m.metroName,
    intro: [
      `Recurring house cleaning in ${m.regionPhrase} keeps kitchens, baths, and floors from slipping between one-off visits. Steampunk offers weekly, bi-weekly, and monthly schedules when capacity allows — with a documented checklist each time.`,
      m.accessNote,
    ],
    localAngle: [
      `Busy ${m.shortName} households often prefer bi-weekly cadence; weekly fits higher-traffic homes, and monthly works for lighter upkeep. We help you pick a realistic rhythm on the quote call.`,
      m.demandNote,
      `See our recurring cleaning page for cadence details, then request a local quote with recurring service preselected.`,
    ],
    highlights: [
      "Weekly, bi-weekly, or monthly",
      "Background-checked cleaners",
      "Consistent checklist process",
      "Free local quote",
    ],
    faqs: [
      {
        q: `What recurring frequencies do you offer in ${m.shortName}?`,
        a: "Weekly, bi-weekly, and monthly, subject to capacity. Bi-weekly is the most common starting point for many homes.",
      },
      {
        q: "Do I get the same cleaner every time?",
        a: "We aim for consistency when scheduling allows. Your checklist and preferences stay documented either way so quality does not depend on memory alone.",
      },
      {
        q: "Can I pause or reschedule a recurring clean?",
        a: "Yes — give us reasonable notice when travel or life gets in the way. Details are confirmed when we set up your schedule.",
      },
    ],
  };
}

export const SERVICE_METROS: ServiceMetro[] = METRO_SEEDS.flatMap((m) => [
  buildStandard(m),
  buildDeep(m),
  buildRecurring(m),
]);

export function getServiceMetro(
  metroSlug: string | undefined,
  serviceSlug: string | undefined,
): ServiceMetro | undefined {
  if (!metroSlug || !serviceSlug) return undefined;
  return SERVICE_METROS.find(
    (s) => s.metroSlug === metroSlug && s.serviceSlug === serviceSlug,
  );
}

export function getServiceMetrosForMetro(metroSlug: string): ServiceMetro[] {
  return SERVICE_METROS.filter((s) => s.metroSlug === metroSlug);
}

export const SERVICE_METRO_SLUGS = SERVICES.map((s) => s.serviceSlug);
