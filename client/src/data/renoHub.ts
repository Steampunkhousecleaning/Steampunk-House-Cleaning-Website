/**
 * renoHub.ts — DRAFT standalone Reno & Sparks hub (/locations/reno).
 * Owner review before publishing. NOT in sitemap.xml. The existing
 * /locations/las-vegas-nevada/reno page is left untouched (no redirect,
 * no canonical change) until the owner approves the plan.
 * No reviews section: there are no real Reno reviews (never borrow).
 */
import { costFaq, type FaqItem } from "@/lib/costFaq";

export type RenoArea = { name: string; note: string };

export const RENO_HUB = {
  path: "/locations/reno",
  quoteCity: "Reno, NV",
  title: "House Cleaning in Reno & Sparks, NV | Steampunk House Cleaning",
  description:
    "House cleaning in Reno and Sparks, NV, from Midtown and South Meadows to Somersett, Caughlin Ranch and Spanish Springs. Free quote in about 2 minutes.",
  h1: "House Cleaning in Reno & Sparks",
  intro: [
    "Reno and Sparks homes deal with a climate the Las Vegas Valley never sees. Winter brings snowmelt, road sand and de-icer that get tracked across entry tile and into carpet, while the dry high-desert air keeps fine dust settling on sills, vents and ceiling fans the rest of the year. Housing changes from one side of the Truckee Meadows to the other: older homes and apartments in Midtown, newer subdivisions and apartment communities in South Meadows, HOA neighborhoods in the hills of Somersett and Caughlin Ranch, and family homes in Spanish Springs north of Sparks. Steampunk House Cleaning plans each visit around the home and the season, with background-checked cleaners and a written room-by-room checklist. Share gate codes, HOA rules and parking or driveway notes when you book, and we will confirm coverage for your address.",
  ],
  areasNote: "[OWNER: confirm we regularly clean in each of these Reno / Sparks neighborhoods]",
  areas: [
    { name: "Midtown", note: "Older homes, duplexes and apartments close to downtown Reno. Street parking and shared entries are common, so tell us how the crew gets in." },
    { name: "South Meadows", note: "Newer single-family subdivisions and apartment communities in south Reno, often with HOA rules and a mix of tile and carpet." },
    { name: "Somersett", note: "A master-planned community in the northwest Reno hills, with larger homes and big windows that collect dust from the dry hillsides." },
    { name: "Caughlin Ranch", note: "An established HOA neighborhood in southwest Reno with larger homes, wood trim and mature landscaping that sheds into entries." },
    { name: "Spanish Springs", note: "Family neighborhoods in the valley north of Sparks, where wind-blown dust builds up on sills, garage entries and window tracks." },
  ] as RenoArea[],
  conditions: [
    {
      heading: "Winter grime and tracked-in salt",
      text: "From late fall into spring, snowmelt, road sand and de-icer ride in on boots, paws and tires. We put extra time into entry tile, mats, the baseboards nearest the doors, garage entries and the edges of floors where grit collects.",
    },
    {
      heading: "Dry-climate dust",
      text: "Low humidity keeps fine dust in the air, and it settles on window sills, blinds, vents and ceiling fan blades. Dusting high and low is on every Reno checklist, not just on deep cleans.",
    },
  ],
  founders:
    "Steampunk House Cleaning was started by Ryan and Daniel, and every visit runs off the same written checklist whether you are in Reno, Sparks or one of our other markets.",
  services: [
    { label: "Standard Cleaning", href: "/standard-cleaning", blurb: "Routine cleaning for kitchens, bathrooms, floors and living areas." },
    { label: "Deep Cleaning", href: "/deep-cleaning", blurb: "Baseboards, grout and the build-up a long winter leaves behind." },
    { label: "Recurring Cleaning", href: "/recurring-cleaning", blurb: "Weekly, bi-weekly or monthly visits on a set schedule." },
    { label: "Move-In / Move-Out", href: "/move-in-move-out", blurb: "Empty-home cleans for leases, listings and move day." },
    { label: "Airbnb / STR Turnover", href: "/airbnb-cleaning", blurb: "Turnovers timed between guest check-out and check-in." },
    { label: "Commercial / Office", href: "/commercial-cleaning", blurb: "Office and small commercial cleaning on your schedule." },
  ],
  faqs: [
    costFaq({
      service: "house cleaning",
      city: "Reno",
      localNote:
        "In winter, extra entry and floor work for tracked-in road grime can add time to a visit.",
    }),
    {
      q: "Do you clean in Sparks and Spanish Springs as well as Reno?",
      a: "Yes, when the schedule allows. Sparks and Spanish Springs are part of the Reno area we cover. Put your zip code on the quote form and we will confirm timing for your address before you book.",
    },
    {
      q: "How do you deal with winter grime and road salt tracked into the house?",
      a: "We focus on the places it lands: entry tile and grout, mats, baseboards near doors, the garage entry and floor edges. If it has been a long winter, a deep clean in spring clears the build-up the regular visits do not reach.",
    },
    {
      q: "Can you work with HOA rules in Somersett, Caughlin Ranch or South Meadows?",
      a: "Yes. Tell us about gate access, guest parking, and any quiet hours or vendor rules when you book, and we schedule around them so the crew arrives without delays.",
    },
  ] as FaqItem[],
  links: [
    { href: "/locations/las-vegas-nevada/sparks", label: "Sparks house cleaning" },
    { href: "/locations/las-vegas-nevada", label: "Nevada locations" },
    { href: "/move-in-move-out", label: "Move-in / move-out cleaning" },
  ],
  areaServed: ["Reno", "Sparks"],
} as const;
