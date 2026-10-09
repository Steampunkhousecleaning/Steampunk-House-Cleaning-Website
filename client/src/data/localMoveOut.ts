/**
 * localMoveOut.ts — local move-out pages.
 *   /locations/las-vegas-nevada/move-out-cleaning
 *   /locations/sacramento/move-out-cleaning
 *
 * Rules: no prices, no invented reviews/stats/legal claims, and no owner
 * placeholders in production. Still pending owner input, so NOT rendered
 * (kept in the draft notes only): inside fridge included vs add-on,
 * state deposit-law statements, and prices. Inside-oven cleaning is a PAID
 * ADD-ON, never part of the move-out checklist. Reviews are pulled verbatim
 * from data/reviews.ts by name + city (never re-tagged to another city).
 */
import { costFaq, type FaqItem } from "@/lib/costFaq";
import { SITE_REVIEWS, type Review } from "@/data/reviews";

export type ChecklistItem = { item: string; note: string };
export type PageLink = { href: string; label: string };

export type LocalMoveOutPage = {
  metroSlug: string;
  path: string;
  /** Short city name used in copy, e.g. "Las Vegas" */
  city: string;
  /** Quote-form city value (must match a /get-a-quote option) */
  quoteCity: string;
  /** Quote-form service value (must match a /get-a-quote option) */
  quoteService: string;
  metroName: string;
  metroPath: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  checklistIntro: string;
  included: ChecklistItem[];
  addOns: ChecklistItem[];
  depositIntro: string;
  depositTips: string[];
  /** Neutral, non-legal note (deposit-law claims need owner approval first). */
  depositNote: string;
  reviews: Review[];
  faqs: FaqItem[];
  nearby: PageLink[];
  blog: PageLink;
  /** City names shown on the page; used for LocalBusiness areaServed */
  areaServed: string[];
};

export const MOVE_OUT_QUOTE_SERVICE = "Move-In / Move-Out";

function review(name: string, location: string): Review {
  const r = SITE_REVIEWS.find((x) => x.name === name && x.location === location);
  if (!r) throw new Error(`localMoveOut: review not found: ${name} (${location})`);
  return r;
}

/** Neutral deposit note. Statute-specific claims stay out until the owner verifies them. */
const DEPOSIT_NOTE = "Check your lease and local rules for deposit timelines.";

export const LOCAL_MOVE_OUT_PAGES: LocalMoveOutPage[] = [
  {
    metroSlug: "las-vegas-nevada",
    path: "/locations/las-vegas-nevada/move-out-cleaning",
    city: "Las Vegas",
    quoteCity: "Las Vegas, NV",
    quoteService: MOVE_OUT_QUOTE_SERVICE,
    metroName: "Las Vegas & Reno / Nevada",
    metroPath: "/locations/las-vegas-nevada",
    title: "Move-Out Cleaning in Las Vegas, NV | Steampunk House Cleaning",
    description:
      "Las Vegas move-out cleaning for apartments, condos and HOA homes: hard-water fixtures, desert dust in vents and blinds, ready for the walkthrough.",
    h1: "Move-Out Cleaning in Las Vegas",
    intro: [
      "Moving out of a Las Vegas apartment complex or an HOA home usually ends with a walkthrough, and the leasing office or property manager works from a printed checklist. The Valley makes some of those boxes harder to tick. Our tap water is hard, so faucets, shower heads and glass doors collect white mineral scale that a quick wipe will not lift. Fine desert dust works its way into air-return grilles, ceiling fans and every slat of the blinds, and it shows up the moment the furniture is gone. Steampunk House Cleaning plans each Las Vegas move-out around those spots: treating fixtures for scale, pulling dust out of vents and blinds, and detailing the empty rooms an inspector actually looks at. Tell us about gate codes, guest parking passes or leasing-office key drop-off when you book, and we will schedule around your walkthrough time.",
    ],
    checklistIntro:
      "This is what a Las Vegas move-out clean covers in an empty home. The notes explain where the desert climate changes the work.",
    included: [
      { item: "Inside cabinets and drawers", note: "Wiped out shelf by shelf, including the dust that collects on upper shelves above the fridge and in garage cabinets." },
      { item: "Baseboards and door frames", note: "Hand-wiped. Once the furniture is out, a grey line of desert dust usually shows along the floor edge." },
      { item: "Blinds", note: "Dusted slat by slat. Blinds near sliding doors and west-facing windows tend to hold the most grit." },
      { item: "Fixtures", note: "Faucets, shower heads, towel bars and shower glass treated for hard-water spotting. Scale that has etched the glass may not fully clear." },
      { item: "Vents, returns and ceiling fans", note: "Air-return grilles and fan blades dusted so dust does not drift back onto clean floors." },
      { item: "Kitchen surfaces", note: "Stovetop and range hood degreased, inside microwave cleaned, sink and faucet descaled." },
      { item: "Bathrooms", note: "Toilet, tub, shower, sink, mirrors and grout scrubbed; tracks of sliding shower doors cleared." },
      { item: "Floors and closets", note: "Closet shelves wiped, then every floor vacuumed and mopped, including tile edges." },
    ],
    addOns: [
      { item: "Inside the oven", note: "Paid add-on. Not included in move-out cleaning; add it to your quote if the oven is on your landlord's list." },
      { item: "Carpet shampoo", note: "Paid add-on for carpeted bedrooms or stairs; mention it on the quote form." },
    ],
    depositIntro:
      "A clean home is only part of a smooth walkthrough. These practical steps help on the cleaning side:",
    depositTips: [
      "Ask your leasing office or property manager for their move-out checklist and send it with your quote request so we clean to their list, not a generic one.",
      "Book the clean for after the movers leave and before the walkthrough. Leave a little buffer in case the inspection time moves.",
      "Point out hard-water scale on shower glass and fixtures when you book. If heavy etching was already there at move-in, your move-in photos are the best record of it.",
      "Leave the power and water on through cleaning day, and arrange how we get in: lockbox, gate code, or a key from the leasing office.",
      "Walk the empty unit after the clean and take date-stamped photos or video of every room, including inside cabinets and closets.",
    ],
    depositNote: DEPOSIT_NOTE,
    reviews: [
      review("Carol R.", "Las Vegas, NV"),
      review("Melanie C.", "Las Vegas, NV"),
      review("Carmen", "Las Vegas, NV"),
    ],
    faqs: [
      costFaq({
        service: "move-out cleaning",
        city: "Las Vegas",
        localNote:
          "How much hard-water scale is on the fixtures and how much dust has built up in vents and blinds also affect how long the clean takes.",
        mentionOvenAddOn: true,
      }),
      {
        q: "Can you work with my apartment complex or HOA's move-out rules?",
        a: "Yes. Tell us about gate codes, guest parking passes, elevator or quiet-hour rules, and where keys are picked up or dropped off. We plan the visit around them so your cleaner is not stuck at the gate on walkthrough day.",
      },
      {
        q: "Will you get the hard-water stains off my shower glass and faucets?",
        a: "We treat fixtures and glass for hard-water spotting as part of every Las Vegas move-out, and most mineral film comes off. Glass that has been etched by years of scale may stay cloudy, so we will tell you what to expect before the walkthrough. Our Las Vegas hard-water guide on the blog explains why.",
      },
      {
        q: "Do you clean vacant rentals for landlords and property managers between tenants?",
        a: "Yes. We clean empty units for owners and property managers as well as for tenants who are moving out. Share the address, unit size, lockbox or key details, and your make-ready deadline, plus any checklist your company uses.",
      },
    ],
    nearby: [
      { href: "/locations/las-vegas-nevada/las-vegas", label: "Las Vegas house cleaning" },
      { href: "/locations/las-vegas-nevada/henderson", label: "Henderson house cleaning" },
      { href: "/locations/las-vegas-nevada/summerlin", label: "Summerlin house cleaning" },
    ],
    blog: {
      href: "/blog/house-cleaning-las-vegas-hard-water",
      label: "Las Vegas hard water: what a deep clean fixes",
    },
    areaServed: ["Las Vegas", "Henderson", "Summerlin"],
  },
  {
    metroSlug: "sacramento",
    path: "/locations/sacramento/move-out-cleaning",
    city: "Sacramento",
    quoteCity: "Sacramento, CA",
    quoteService: MOVE_OUT_QUOTE_SERVICE,
    metroName: "Sacramento",
    metroPath: "/locations/sacramento",
    title: "Move-Out Cleaning in Sacramento, CA | Steampunk House Cleaning",
    description:
      "Sacramento move-out cleaning for older East Sac and Land Park homes, Midtown and Sac State rentals, and newer Roseville and Elk Grove builds.",
    h1: "Move-Out Cleaning in Sacramento",
    intro: [
      "A Sacramento move-out depends a lot on which kind of home you are leaving. Many houses in East Sacramento and Land Park are decades old, with original hardwood, wood-framed windows and built-in cabinets, so we work by hand with floor-safe products instead of soaking anything. Rentals near Sac State and the apartments and fourplexes in Midtown turn over often, and many leases end around the close of the semester, which makes booking early worth it. Spring pollen leaves a yellow film on screens, sills and sliding-door rails, and by late summer the valley dust has settled on every ledge. Newer builds in Roseville and Elk Grove are a different job again: long runs of baseboard, big open kitchens, stone counters and a staircase in most two-story plans. Steampunk House Cleaning builds each empty-home clean around the house you are actually handing back.",
    ],
    checklistIntro:
      "Here is the Sacramento move-out checklist. The notes show how it changes between an older central-city home and a newer suburban build.",
    included: [
      { item: "Inside cabinets and drawers", note: "Older built-ins and painted cabinet interiors are wiped with gentle products; newer kitchens get every drawer and pantry shelf." },
      { item: "Baseboards and trim", note: "Original painted trim in older homes is hand-wiped; the long baseboard runs and stair stringers in newer two-stories are detailed end to end." },
      { item: "Blinds, sills and window tracks", note: "Blinds dusted and pollen cleared from sills, screen frames and sliding-door rails, which fill up during spring." },
      { item: "Fixtures and tile", note: "Faucets, tub and sink fixtures polished; older tile and grout in original bathrooms scrubbed by hand." },
      { item: "Ceiling fans and vents", note: "Dusted after a long season of running the AC with the windows shut." },
      { item: "Stairs and railings", note: "Treads, risers and banisters wiped in two-story homes." },
      { item: "Kitchen surfaces", note: "Stovetop and range hood degreased and inside the microwave cleaned." },
      { item: "Floors", note: "Hardwood cleaned with a damp, not wet, method; tile and vinyl vacuumed and mopped; closets vacuumed." },
    ],
    addOns: [
      { item: "Inside the oven", note: "Paid add-on. It is not part of a move-out clean, so request it with your quote if your property manager inspects the oven." },
      { item: "Carpet shampoo", note: "Paid add-on, handy for carpeted bedrooms in older rentals; ask when you request your quote." },
    ],
    depositIntro:
      "Most deposit questions come down to the condition of the home on key-return day. On the cleaning side, these steps help:",
    depositTips: [
      "Pull out your move-in condition report or photos and compare room by room, so the clean focuses on anything that looks worse than when you arrived.",
      "If your landlord does a pre-move-out walkthrough, bring the list of issues to your quote request and we will put those items first.",
      "Tell us if the home has original hardwood or older tile so the crew brings the right products and avoids excess water.",
      "During pollen season, ask for screen frames, sills and sliding-door tracks to be done last so new pollen does not undo the work before the inspection.",
      "Near Sac State or in Midtown, book as soon as you know your lease end date; the end of the semester and the end of the month are the busiest days.",
    ],
    depositNote: DEPOSIT_NOTE,
    reviews: [
      review("Jennifer M.", "Sacramento, CA"),
      review("Kristen S.", "Sacramento, CA"),
    ],
    faqs: [
      costFaq({
        service: "move-out cleaning",
        city: "Sacramento",
        localNote:
          "An older home with lots of original trim and windows, or a two-story with a full staircase, usually takes longer than a newer single-story of the same size.",
        mentionOvenAddOn: true,
      }),
      {
        q: "Can you clean an older East Sacramento or Land Park home without damaging the original floors?",
        a: "Yes. We use a damp, not wet, method on hardwood, avoid harsh products on old finishes and tile, and dust trim, sills and built-ins by hand. Tell us roughly how old the house is when you request a quote.",
      },
      {
        q: "I am leaving a rental near Sac State or in Midtown at the end of the semester. How early should I book?",
        a: "As soon as you know your move-out date. Lease endings bunch up at the end of the semester and the end of the month, so the best slots go first. Share your lease end date and walkthrough time on the quote form.",
      },
      {
        q: "Do you do move-out cleans in Roseville and Elk Grove too?",
        a: "Yes. Roseville and Elk Grove are part of our Sacramento service area. Newer two-story homes there usually need extra time for stairs, baseboards and large kitchens, so include the number of stories, bedrooms and bathrooms when you ask for a quote.",
      },
    ],
    nearby: [
      { href: "/locations/sacramento/roseville", label: "Roseville house cleaning" },
      { href: "/locations/sacramento/elk-grove", label: "Elk Grove house cleaning" },
      { href: "/locations/sacramento/folsom", label: "Folsom house cleaning" },
    ],
    blog: {
      href: "/blog/move-out-cleaning-sacramento",
      label: "Move out cleaning Sacramento: what landlords check",
    },
    areaServed: ["Sacramento", "Roseville", "Elk Grove", "Folsom"],
  },
];

export function getLocalMoveOutPage(path: string): LocalMoveOutPage | undefined {
  const p = path.replace(/\/+$/, "");
  return LOCAL_MOVE_OUT_PAGES.find((x) => x.path === p);
}

/** Metro hub "Move-In / Move-Out" card overrides -> local move-out page. */
export const MOVE_OUT_CARD_OVERRIDES: Record<string, string> = Object.fromEntries(
  LOCAL_MOVE_OUT_PAGES.map((p) => [p.metroSlug, p.path]),
);
