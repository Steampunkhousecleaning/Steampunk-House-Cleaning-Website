/**
 * renoHub.ts — standalone Reno & Sparks hub (/locations/reno).
 * The old /locations/las-vegas-nevada/reno page 301s here (owner approved 10/9/26).
 * No reviews section: there are no real Reno reviews (never borrow).
 * Neighborhoods: only the ones the owner confirmed (10/9/26). Do not add more
 * without owner confirmation.
 */
import { costFaq, type FaqItem } from "@/lib/costFaq";

export const RENO_HUB = {
  path: "/locations/reno",
  quoteCity: "Reno, NV",
  title: "House Cleaning in Reno & Sparks, NV | Steampunk House Cleaning",
  description:
    "House cleaning in Reno and Sparks, NV, planned around winter road grime and dry high-desert dust. Background-checked cleaners. Free quote in about 2 minutes.",
  h1: "House Cleaning in Reno & Sparks",
  intro: [
    "Reno and Sparks homes deal with a climate the Las Vegas Valley never sees. Winter brings snowmelt, road sand and de-icer that get tracked across entry tile and into carpet, while the dry high-desert air keeps fine dust settling on sills, vents and ceiling fans the rest of the year. Homes across the Truckee Meadows range from older houses and apartments near downtown to newer subdivisions and HOA communities. Steampunk House Cleaning plans each visit around the home and the season, with background-checked cleaners and a written room-by-room checklist. Share gate codes, HOA rules and parking or driveway notes when you book, and we will confirm coverage for your address.",
  ],
  conditions: [
    {
      heading: "Winter grime and tracked-in salt",
      text: "From late fall into spring, snowmelt, road sand and de-icer ride in on boots, paws and tires. We put extra time into entry tile, mats, the baseboards nearest the doors, garage entries and the edges of floors where grit collects.",
    },
    {
      heading: "Dry-climate dust",
      text: "Low humidity keeps fine dust in the air, and it settles on window sills, blinds, vents and ceiling fan blades. Wildfire-smoke days add to it. Dusting high and low is on every Reno checklist, not just on deep cleans.",
    },
  ],
  founders:
    "Steampunk House Cleaning was started by Ryan and Daniel, and every visit runs off the same written checklist whether you are in Reno, Sparks or one of our other markets.",
  neighborhoodsIntro:
    "We clean homes across Reno and Sparks, including these neighborhoods:",
  neighborhoods: ["Midtown", "South Meadows", "Somersett", "Caughlin Ranch", "Spanish Springs", "Sparks"],
  neighborhoodsNote:
    "Not listed? Put your zip code on the quote form and we will confirm your address.",
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
      q: "Do you clean in Sparks as well as Reno?",
      a: "Yes. Sparks is part of our Reno service area. Put your zip code on the quote form and we will set up a time that works for you.",
    },
    {
      q: "How do you deal with winter grime and road salt tracked into the house?",
      a: "We focus on the places it lands: entry tile and grout, mats, baseboards near doors, the garage entry and floor edges. If it has been a long winter, a deep clean in spring clears the build-up the regular visits do not reach.",
    },
    {
      q: "Can you work with HOA rules and gated communities in Reno and Sparks?",
      a: "Yes. Tell us about gate access, guest parking, and any quiet hours or vendor rules when you book, and we schedule around them so the crew arrives without delays.",
    },
  ] as FaqItem[],
  links: [
    { href: "/locations/las-vegas-nevada/sparks", label: "Sparks house cleaning" },
    { href: "/locations/las-vegas-nevada", label: "Las Vegas house cleaning" },
    { href: "/move-in-move-out", label: "Move-in / move-out cleaning" },
  ],
  areaServed: ["Reno", "Sparks"],
} as const;
