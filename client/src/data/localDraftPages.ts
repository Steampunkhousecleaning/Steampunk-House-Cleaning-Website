/**
 * localDraftPages.ts — DRAFT local pages awaiting Ryan's approval (Oct 14, 2026).
 *   Sacramento city pages:  /locations/sacramento/citrus-heights, /locations/sacramento/rancho-cordova
 *   Local Airbnb pages:     /locations/las-vegas-nevada/airbnb-cleaning, /locations/los-angeles-orange-county/airbnb-cleaning
 *
 * NOT in sitemap.xml. Rules: no prices, no invented reviews/stats/legal claims,
 * no short-term-rental regulations. Inside-oven cleaning is a PAID ADD-ON only.
 * Inside-fridge status is unconfirmed, so it is not mentioned. Anything not
 * yet verified is shown as an [OWNER: ...] placeholder. Reviews are pulled
 * verbatim from data/reviews.ts by name + recorded city (never re-tagged).
 */
import { costFaq, type FaqItem } from "@/lib/costFaq";
import { SITE_REVIEWS, type Review } from "@/data/reviews";
import type { ChecklistItem, PageLink } from "@/data/localMoveOut";

export type DraftSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  checklist?: ChecklistItem[];
  /** Rendered as "Paid add-ons (not included)" */
  addOns?: ChecklistItem[];
  /** Small chip list (e.g. neighborhoods) */
  chips?: string[];
};

export type LocalDraftPage = {
  kind: "city" | "airbnb";
  metroSlug: string;
  path: string;
  /** Name used in the badge and headings, e.g. "Citrus Heights" */
  place: string;
  badge: string;
  quoteCity: string;
  quoteService?: string;
  metroName: string;
  metroPath: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  sections: DraftSection[];
  reviewsHeading: string;
  reviews: Review[];
  faqHeading: string;
  faqs: FaqItem[];
  moreHeading: string;
  nearby: PageLink[];
  blog: PageLink;
  /** Sitewide service page to compare */
  sitewide: PageLink;
  ctaHeading: string;
  ctaText: string;
  areaServed: string[];
};

function review(name: string, location: string): Review {
  const r = SITE_REVIEWS.find((x) => x.name === name && x.location === location);
  if (!r) throw new Error(`localDraftPages: review not found: ${name} (${location})`);
  return r;
}

const AIRBNB_SERVICE = "Airbnb / Short-Term Rental";

export const LOCAL_DRAFT_PAGES: LocalDraftPage[] = [
  // ───────────────────────── Citrus Heights ─────────────────────────
  {
    kind: "city",
    metroSlug: "sacramento",
    path: "/locations/sacramento/citrus-heights",
    place: "Citrus Heights",
    badge: "Sacramento area · Citrus Heights",
    quoteCity: "Citrus Heights, CA",
    metroName: "Sacramento",
    metroPath: "/locations/sacramento",
    title: "House Cleaning in Citrus Heights, CA | Steampunk House Cleaning",
    description:
      "House cleaning in Citrus Heights for 1960s and 70s ranch homes, townhomes and apartments near Sunrise Mall and Greenback Lane. Free quote by form or phone.",
    h1: "House Cleaning in Citrus Heights",
    intro: [
      "Citrus Heights sits between Sacramento and Roseville, and most of its homes are single-story ranch houses from the 1960s and 1970s on quiet streets off Greenback Lane, Sunrise Boulevard and Auburn Boulevard. Many still have original tile in the bathrooms, aluminum sliding windows and carpet in the bedrooms, and those surfaces hold dust and grime differently from a new build. There are also plenty of apartment complexes and townhome communities near Sunrise Mall and along the main boulevards, where we plan around assigned parking, gate codes and community rules. Mature oaks and street trees shade much of the city, which helps in July but means spring pollen and fall leaves end up on window sills and tracked across floors. Steampunk House Cleaning plans each Citrus Heights visit around the home you actually live in.",
    ],
    sections: [
      {
        heading: "Parts of Citrus Heights we clean",
        paragraphs: [
          "We clean homes across the city, from the streets around Sunrise Mall and Sunrise Boulevard to the neighborhoods near Rusch Park and Arcade Creek. Tell us your street or zip on the quote form and we will confirm timing when we call.",
        ],
        chips: ["Sunrise Mall area", "Greenback Lane", "Auburn Boulevard", "Sunrise Boulevard", "Rusch Park", "Arcade Creek"],
      },
      {
        heading: "What a Citrus Heights clean covers",
        paragraphs: [
          "Every visit follows a written room-by-room checklist. The notes show where an older single-story ranch home or a busy apartment changes the work.",
        ],
        checklist: [
          { item: "Kitchens", note: "Counters, backsplash, stovetop, sink and the outside of appliances wiped and degreased; inside the microwave cleaned. Older laminate counters and tile edges get extra attention." },
          { item: "Bathrooms", note: "Toilet, tub, shower, sink and mirrors cleaned; original tile and grout in older baths scrubbed by hand." },
          { item: "Window sills and slider tracks", note: "Aluminum window tracks and sliding-door rails cleared of the pollen, leaves and grit that build up under mature trees." },
          { item: "Dusting", note: "Ceiling fans, light fixtures, baseboards and blinds dusted; fans and vents get a closer look after a summer of running the AC." },
          { item: "Floors", note: "Carpeted bedrooms vacuumed edge to edge; tile, vinyl and hardwood vacuumed and mopped." },
          { item: "Deep-clean extras", note: "Book a deep clean for baseboards hand-wiped, grout detail and the spots a regular visit skips." },
        ],
        addOns: [
          { item: "Inside the oven", note: "Paid add-on. It is not included in standard or deep cleaning; add it to your quote if you want it." },
        ],
      },
      {
        heading: "Planning your visit",
        bullets: [
          "Ranch homes: let us know if you have a side-gate entry or a garage keypad, and where pets will be.",
          "Apartments and townhomes: share the gate code, unit number and where a cleaner can park as a guest.",
          "Recurring visits: weekly, bi-weekly and monthly schedules are available when capacity allows.",
        ],
      },
    ],
    reviewsHeading: "What Sacramento-area customers said",
    reviews: [review("Amanda K.", "Sacramento, CA"), review("Natalie W.", "Sacramento, CA")],
    faqHeading: "Citrus Heights house cleaning FAQs",
    faqs: [
      costFaq({
        service: "house cleaning",
        city: "Citrus Heights",
        localNote: "A one-time deep clean of an older home that has not had a professional clean in a while usually takes longer than a routine visit.",
        mentionOvenAddOn: true,
      }),
      {
        q: "Do you clean apartments and townhomes in Citrus Heights?",
        a: "Yes. Along with single-family homes, we clean apartments and townhomes near Sunrise Mall and along Greenback Lane and Auburn Boulevard. Share your gate code and parking instructions when you book.",
      },
      {
        q: "My Citrus Heights house is from the 1970s. Is a deep clean a good first visit?",
        a: "Usually, yes. Older homes tend to have original tile, grout and window tracks that need detail work, so a deep clean first makes regular visits faster afterward. Tell us roughly how old the home is on the quote form.",
      },
      {
        q: "Do you also clean in Roseville, Fair Oaks and nearby areas?",
        a: "We serve Roseville and other nearby cities as part of our Sacramento service area. Put your city and zip on the quote form and we will confirm coverage and timing.",
      },
    ],
    moreHeading: "More for Citrus Heights homes",
    nearby: [
      { href: "/locations/sacramento/roseville", label: "Roseville house cleaning" },
      { href: "/locations/sacramento/folsom", label: "Folsom house cleaning" },
      { href: "/locations/sacramento/rancho-cordova", label: "Rancho Cordova house cleaning" },
    ],
    blog: { href: "/blog/move-out-cleaning-sacramento", label: "Move out cleaning Sacramento: what landlords check" },
    sitewide: { href: "/deep-cleaning", label: "deep cleaning" },
    ctaHeading: "Book your Citrus Heights clean",
    ctaText: "Citrus Heights is already selected on the quote form. It takes about 2 minutes, or call us.",
    areaServed: ["Citrus Heights"],
  },

  // ───────────────────────── Rancho Cordova ─────────────────────────
  {
    kind: "city",
    metroSlug: "sacramento",
    path: "/locations/sacramento/rancho-cordova",
    place: "Rancho Cordova",
    badge: "Sacramento area · Rancho Cordova",
    quoteCity: "Rancho Cordova, CA",
    metroName: "Sacramento",
    metroPath: "/locations/sacramento",
    title: "House Cleaning in Rancho Cordova, CA | Steampunk House Cleaning",
    description:
      "Rancho Cordova house cleaning for older homes near Folsom Boulevard and newer two-story builds in Anatolia and Capital Village. Free quote by form or phone.",
    h1: "House Cleaning in Rancho Cordova",
    intro: [
      "Rancho Cordova runs along Highway 50 east of Sacramento, with the American River on its northern edge, and its homes come from two very different eras. Near Folsom Boulevard, many neighborhoods date from the 1950s and 1960s, when Mather Air Force Base and the aerospace industry drew families to the area: compact single-story houses, older kitchens and baths, and plenty of well-used carpet. In the newer parts of the city, planned communities such as Anatolia and Capital Village have two-story homes with open kitchens, big windows and full staircases, and many sit inside an HOA with its own parking and entry rules. With so many residents commuting on weekdays, we confirm access, pets and parking ahead of time. Steampunk House Cleaning builds each Rancho Cordova clean around which of those homes you live in.",
    ],
    sections: [
      {
        heading: "Parts of Rancho Cordova we clean",
        paragraphs: [
          "From the established streets off Folsom Boulevard to the newer subdivisions near Mather and Sunrise Boulevard, we clean across the city. Tell us your neighborhood or zip and we will confirm timing when we call.",
        ],
        chips: ["Folsom Boulevard corridor", "Anatolia", "Capital Village", "Sunridge", "Mather", "Hagan Park area"],
      },
      {
        heading: "What a Rancho Cordova clean covers",
        paragraphs: [
          "The checklist is the same written list on every visit, but the time goes to different places in a 1960s single-story than in a new two-story build.",
        ],
        checklist: [
          { item: "Open kitchens", note: "Large islands, stone counters, backsplash and stainless appliance fronts wiped streak-free; stovetop degreased and inside the microwave cleaned." },
          { item: "Stairs and railings", note: "Treads, risers, spindles and banisters dusted and wiped in two-story homes." },
          { item: "Big windows and sliders", note: "Sills, interior glass on sliding doors and slider tracks cleaned, where dust from nearby open land and construction tends to collect." },
          { item: "Older kitchens and baths", note: "In 1950s and 60s homes, original tile, grout and fixtures are scrubbed by hand with products that are safe on older finishes." },
          { item: "Bathrooms", note: "Toilets, tubs, showers, sinks and mirrors cleaned in every bathroom, including upstairs." },
          { item: "Floors", note: "Carpet vacuumed; hard floors vacuumed and mopped, including laminate and tile in entryways that see a lot of foot traffic." },
        ],
        addOns: [
          { item: "Inside the oven", note: "Paid add-on. Not part of standard or deep cleaning; request it with your quote." },
        ],
      },
      {
        heading: "Planning your visit",
        bullets: [
          "HOA communities: tell us about guest parking rules or any entry instructions so your cleaner is not turned around at the gate.",
          "Two-story homes: include the number of stories, bedrooms and bathrooms on the quote form so we schedule enough time.",
          "Working from home or commuting: we can work around your schedule and confirm arrival time before the visit.",
        ],
      },
    ],
    reviewsHeading: "What Sacramento-area customers said",
    reviews: [review("Priya S.", "Sacramento, CA"), review("Jennifer M.", "Sacramento, CA")],
    faqHeading: "Rancho Cordova house cleaning FAQs",
    faqs: [
      costFaq({
        service: "house cleaning",
        city: "Rancho Cordova",
        localNote: "A large two-story home with a full staircase usually takes longer than a single-story home with the same number of bedrooms.",
        mentionOvenAddOn: true,
      }),
      {
        q: "Do you clean newer two-story homes in Anatolia and Capital Village?",
        a: "Yes. Newer builds usually need extra time for stairs, large kitchens and lots of window glass. Include the number of stories, bedrooms and bathrooms when you request a quote.",
      },
      {
        q: "Can you clean an older home near Folsom Boulevard?",
        a: "Yes. We scrub original tile and grout by hand and use products that are safe on older finishes. Let us know if anything is delicate or if a room needs extra attention.",
      },
      {
        q: "Do you offer recurring cleaning in Rancho Cordova?",
        a: "Yes. Weekly, bi-weekly and monthly visits are available when capacity allows, and recurring clients keep the same checklist on every visit. Pick a recurring option on the quote form.",
      },
    ],
    moreHeading: "More for Rancho Cordova homes",
    nearby: [
      { href: "/locations/sacramento/folsom", label: "Folsom house cleaning" },
      { href: "/locations/sacramento/elk-grove", label: "Elk Grove house cleaning" },
      { href: "/locations/sacramento/citrus-heights", label: "Citrus Heights house cleaning" },
    ],
    blog: { href: "/blog/move-out-cleaning-sacramento", label: "Move out cleaning Sacramento: what landlords check" },
    sitewide: { href: "/recurring-cleaning", label: "recurring cleaning" },
    ctaHeading: "Book your Rancho Cordova clean",
    ctaText: "Rancho Cordova is already selected on the quote form. It takes about 2 minutes, or call us.",
    areaServed: ["Rancho Cordova"],
  },

  // ───────────────────────── Las Vegas Airbnb ─────────────────────────
  {
    kind: "airbnb",
    metroSlug: "las-vegas-nevada",
    path: "/locations/las-vegas-nevada/airbnb-cleaning",
    place: "Las Vegas",
    badge: "Las Vegas · Airbnb Cleaning",
    quoteCity: "Las Vegas, NV",
    quoteService: AIRBNB_SERVICE,
    metroName: "Las Vegas",
    metroPath: "/locations/las-vegas-nevada",
    title: "Airbnb Cleaning in Las Vegas, NV | Steampunk House Cleaning",
    description:
      "Las Vegas Airbnb turnovers timed around big-event weekends, with photo reports, restocking from your supplies, and desert dust and hard-water spots handled.",
    h1: "Airbnb Cleaning in Las Vegas",
    intro: [
      "Hosting in Las Vegas means planning around the city's calendar. Big conventions, concerts, fight nights and holiday weekends can stack check-outs and check-ins onto the same few days, and plenty of guests ask for a late check-out after a long night. Many Valley rentals are single-family homes and townhomes in areas like Henderson, Summerlin, Spring Valley and Enterprise, so a turnover can mean a backyard, patio furniture and a garage keypad as well as the bedrooms. The desert adds its own work between stays: fine dust settles on sills, ceiling fans and outdoor furniture, and hard water leaves white spots on shower glass and faucets that show up in guest photos. Steampunk House Cleaning builds each Las Vegas turnover around your listing and your booking calendar.",
    ],
    sections: [
      {
        heading: "Turnovers timed to the Vegas calendar",
        paragraphs: [
          "Send us your check-out and check-in times and we confirm your cleaner's arrival before every turnover. When a big event weekend is coming, tell us early so back-to-back stays are on the schedule before the rush.",
        ],
        bullets: [
          "Same-day turnovers between a morning check-out and an afternoon check-in. [OWNER: confirm the shortest check-out-to-check-in window you can commit to in Las Vegas]",
          "Late check-outs: tell us the new time and we will shift the visit when the schedule allows.",
          "A consistent team assigned to your property, so the same people learn your setup.",
          "Calendar updates: [OWNER: confirm whether you sync with Airbnb / VRBO calendars or hosts send dates by text or email]",
        ],
      },
      {
        heading: "Photo reports after every turnover",
        paragraphs: [
          "You may be across town, or in another state, when guests leave. After each turnover we send photos of the finished rooms, plus condition-on-arrival photos of anything we find, such as damage, missing items or a mess beyond a normal stay. If a guest later says the home was not clean, those photos are your record.",
        ],
      },
      {
        heading: "Restocking and guest-ready setup",
        checklist: [
          { item: "Beds and towels", note: "Beds made with fresh linens and towels folded and staged the way your listing photos show them. [OWNER: confirm whether laundry is done on site, taken off site, or not offered]" },
          { item: "Restocking", note: "Toiletries and basics restocked from the supplies you keep at the property. [OWNER: confirm whether you can buy consumables for hosts or only restock host-supplied items]" },
          { item: "Low-supply alerts", note: "We tell you when something is running low so you can reorder before the next guest." },
          { item: "Kitchen reset", note: "Dishes done or loaded, counters and appliance fronts wiped, and the kitchen staged for the next guest." },
        ],
      },
      {
        heading: "What a Las Vegas turnover covers",
        checklist: [
          { item: "Bathrooms", note: "Toilets, tubs, showers and sinks cleaned, with shower glass and faucets treated for hard-water spots that show up in photos." },
          { item: "Dust control", note: "Ceiling fans, window sills, blinds and the tops of door frames dusted, since desert dust builds up fast between stays." },
          { item: "Floors and trash", note: "Every floor vacuumed and mopped; trash and recycling taken out and bins relined." },
          { item: "Outdoor areas", note: "[OWNER: confirm whether patio, balcony or backyard furniture wipe-downs are included or an add-on]" },
        ],
        addOns: [
          { item: "Inside the oven", note: "Paid add-on. It is not part of a standard turnover; request it for a periodic deep clean between stays." },
        ],
      },
      {
        heading: "Started by former hosts",
        paragraphs: [
          "Steampunk House Cleaning was started by Ryan and Daniel. Ryan was managing short-term rentals and kept running into the same problems every host knows: cleaners who did not show up, quality that changed from visit to visit, and no record of what the place looked like after a guest left. The photo reports and confirmed arrival times on every Las Vegas turnover come straight from that experience. [OWNER: confirm the founders' hosting story — /airbnb-cleaning/ says Ryan and Daniel both ran short-term rentals, while /about/ says Ryan managed short-term rentals and Daniel had a family home] [OWNER: add whether any of those rentals were in Las Vegas]",
        ],
      },
    ],
    reviewsHeading: "What Las Vegas customers said",
    reviews: [review("Carmen", "Las Vegas, NV")],
    faqHeading: "Las Vegas Airbnb cleaning FAQs",
    faqs: [
      costFaq({
        service: "Airbnb cleaning",
        city: "Las Vegas",
        localNote: "For a rental, how many bedrooms and bathrooms it has, whether there is a backyard or patio, and how often you have turnovers all factor in.",
        mentionOvenAddOn: true,
      }),
      {
        q: "Can you handle back-to-back turnovers on big event weekends in Las Vegas?",
        a: "Yes, if we know early. Send us your booking dates as soon as a busy weekend fills up, along with check-out and check-in times, and we will put each turnover on the schedule and confirm arrival before every visit.",
      },
      {
        q: "Do you send photos after each turnover?",
        a: "Yes. After every turnover you get photos of the finished rooms, plus photos of any damage, missing items or unusual mess we find on arrival, so you have a record without being there.",
      },
      {
        q: "Do you restock supplies and wash linens?",
        a: "We restock toiletries and basics from the supplies you keep at the property, make beds with fresh linens, and let you know when something is running low. [OWNER: confirm laundry and consumables purchasing details]",
      },
    ],
    moreHeading: "More for Las Vegas hosts",
    nearby: [
      { href: "/locations/las-vegas-nevada/henderson", label: "Henderson house cleaning" },
      { href: "/locations/las-vegas-nevada/summerlin", label: "Summerlin house cleaning" },
      { href: "/locations/las-vegas-nevada/spring-valley", label: "Spring Valley house cleaning" },
    ],
    blog: { href: "/blog/house-cleaning-las-vegas-hard-water", label: "Las Vegas hard water: what a deep clean fixes" },
    sitewide: { href: "/airbnb-cleaning", label: "Airbnb and short-term rental cleaning" },
    ctaHeading: "Book your Las Vegas turnovers",
    ctaText: "Las Vegas and Airbnb / short-term rental are already selected on the quote form. It takes about 2 minutes, or call us.",
    areaServed: ["Las Vegas", "Henderson", "Summerlin", "Spring Valley", "Enterprise"],
  },

  // ───────────────────────── LA / OC Airbnb ─────────────────────────
  {
    kind: "airbnb",
    metroSlug: "los-angeles-orange-county",
    path: "/locations/los-angeles-orange-county/airbnb-cleaning",
    place: "LA & OC",
    badge: "Los Angeles & Orange County · Airbnb Cleaning",
    quoteCity: "Los Angeles / Orange County",
    quoteService: AIRBNB_SERVICE,
    metroName: "Los Angeles / Orange County",
    metroPath: "/locations/los-angeles-orange-county",
    title: "Airbnb Cleaning in LA & OC | Steampunk House Cleaning",
    description:
      "Airbnb turnovers across LA and Orange County: beach rentals full of sand, condo key handoffs, Irvine HOA rules and traffic-proof timing, with photo reports.",
    h1: "Airbnb Cleaning in Los Angeles & Orange County",
    intro: [
      "Short-term rentals in Los Angeles and Orange County range from beach condos and cottages in Long Beach, Huntington Beach and Newport Beach to guest suites in the hills and townhomes near UC Irvine and the Irvine Spectrum. Often the hardest part of an LA turnover is getting there: freeway traffic can turn a short drive into an hour, so we plan routes and arrival windows around your check-out time instead of hoping the 405 is clear. Beach properties bring sand in on every towel and leave a salty film on sliding doors and outdoor furniture, while condo and apartment buildings may need a front-desk key handoff, a parking spot and an elevator. HOA communities in Irvine and across Orange County add gate entry and guest-parking rules. Steampunk House Cleaning plans each turnover around your property's location, building and calendar.",
    ],
    sections: [
      {
        heading: "Turnover timing that accounts for traffic",
        paragraphs: [
          "We schedule LA and OC turnovers by geography as much as by the clock. Give us your check-out and check-in times and the property's address, and we plan an arrival window that leaves room for traffic, then confirm it before every turnover.",
        ],
        bullets: [
          "Tight same-day windows between check-out and check-in. [OWNER: confirm the shortest turnover window you can commit to in LA / OC]",
          "Hosts with several listings across different cities can have them grouped into one route where the schedule allows.",
          "Buildings with a front desk or key lockbox: tell us how keys are handed off and where a cleaner can park or load in.",
          "Calendar updates: [OWNER: confirm whether you sync with Airbnb / VRBO calendars or hosts send dates by text or email]",
        ],
      },
      {
        heading: "Photo reports you can show a guest",
        paragraphs: [
          "Many LA and OC hosts live across town or out of state, and a property in Newport Beach or Silver Lake is hard to check on in person. After every turnover we send photos of the finished home, and if we find damage, missing items or a bigger mess than usual when we arrive, we photograph that first. If a guest disputes the condition of the place, you have a dated record.",
        ],
      },
      {
        heading: "Restocking and guest-ready setup",
        checklist: [
          { item: "Beach-ready linens", note: "Beds made with fresh linens and bath and beach towels staged, with sandy towels gathered for you. [OWNER: confirm whether laundry is done on site, taken off site, or not offered]" },
          { item: "Restocking", note: "Toiletries, paper goods and coffee restocked from the supplies you keep on site. [OWNER: confirm whether you can buy consumables for hosts or only restock host-supplied items]" },
          { item: "Low-supply alerts", note: "We flag anything running low so you can reorder before the next booking." },
          { item: "Staging", note: "Pillows, throws and welcome items set out to match your listing photos." },
        ],
      },
      {
        heading: "What an LA / OC turnover covers",
        checklist: [
          { item: "Sand and salt", note: "Sand vacuumed from floors, rugs, sofa cushions and slider tracks at beach rentals; salty film wiped from interior glass on sliding doors." },
          { item: "Bathrooms", note: "Toilets, showers, tubs and sinks cleaned and mirrors polished; fresh towels staged." },
          { item: "Kitchen", note: "Dishes done, counters and appliance fronts wiped, inside the microwave cleaned, trash and recycling out." },
          { item: "Floors and dusting", note: "Every floor vacuumed and mopped; surfaces, fans and sills dusted." },
          { item: "Balconies and patios", note: "[OWNER: confirm whether balcony or patio sweeps and outdoor furniture wipe-downs are included or an add-on]" },
        ],
        addOns: [
          { item: "Inside the oven", note: "Paid add-on. Not included in a standard turnover; add it to your quote for a periodic deep clean." },
        ],
      },
      {
        heading: "Built by people who have hosted",
        paragraphs: [
          "Ryan and Daniel started Steampunk House Cleaning because they could not find cleaners they could trust. Ryan was managing short-term rentals, and for a host a no-show on check-in day can mean an upset guest and a bad review. So the service we built for Southern California hosts starts with a confirmed arrival time and ends with photos in your inbox. [OWNER: confirm the founders' hosting story — /airbnb-cleaning/ says Ryan and Daniel both ran short-term rentals, while /about/ says Ryan managed short-term rentals and Daniel had a family home] [OWNER: add where in LA / OC, if anywhere, the founders hosted]",
        ],
      },
    ],
    reviewsHeading: "What Los Angeles hosts said",
    reviews: [review("David L.", "Los Angeles, CA"), review("Jennifer K.", "Los Angeles, CA")],
    faqHeading: "LA & OC Airbnb cleaning FAQs",
    faqs: [
      costFaq({
        service: "Airbnb cleaning",
        city: "Los Angeles and Orange County",
        localNote: "For a rental, the number of bedrooms and bathrooms, how much sand comes back from the beach, and how often you have turnovers all play a part.",
        mentionOvenAddOn: true,
      }),
      {
        q: "Can you make it to my rental on time with LA traffic?",
        a: "We plan arrival windows around traffic and your check-out time, not the other way around, and we confirm the arrival time before every turnover. Give us the address and both times on the quote form so we can plan the route.",
      },
      {
        q: "My rental is in a condo building or Irvine HOA community. Can you handle the key handoff and parking?",
        a: "Yes. Tell us how keys are handed off (front desk, lockbox or keypad), where a cleaner can park, and any gate, guest-parking or elevator rules. We plan the visit around them.",
      },
      {
        q: "Do you clean beach rentals in Long Beach, Huntington Beach and Newport Beach?",
        a: "Yes. Beach turnovers get extra time for sand in floors, rugs, cushions and slider tracks, and for salty film on interior glass. Mention that your property is near the beach when you request a quote.",
      },
    ],
    moreHeading: "More for LA & OC hosts",
    nearby: [
      { href: "/locations/los-angeles-orange-county/irvine", label: "Irvine house cleaning" },
      { href: "/locations/los-angeles-orange-county/long-beach", label: "Long Beach house cleaning" },
      { href: "/locations/los-angeles-orange-county/huntington-beach", label: "Huntington Beach house cleaning" },
      { href: "/locations/los-angeles-orange-county/newport-beach", label: "Newport Beach house cleaning" },
    ],
    blog: { href: "/blog/airbnb-cleaning-irvine", label: "Airbnb cleaning in Irvine: same-day turnover checklist" },
    sitewide: { href: "/airbnb-cleaning", label: "Airbnb and short-term rental cleaning" },
    ctaHeading: "Book your LA & OC turnovers",
    ctaText: "Los Angeles / Orange County and Airbnb / short-term rental are already selected on the quote form. It takes about 2 minutes, or call us.",
    areaServed: ["Los Angeles", "Irvine", "Long Beach", "Huntington Beach", "Newport Beach"],
  },
];

export function getLocalDraftPage(path: string): LocalDraftPage | undefined {
  const p = path.replace(/\/+$/, "");
  return LOCAL_DRAFT_PAGES.find((x) => x.path === p);
}

export function localDraftQuoteHref(page: Pick<LocalDraftPage, "quoteCity" | "quoteService">): string {
  const svc = page.quoteService ? `service=${encodeURIComponent(page.quoteService)}&` : "";
  return `/get-a-quote?${svc}city=${encodeURIComponent(page.quoteCity)}`;
}

/** Metro hub "Airbnb / STR Turnover" card -> local Airbnb page. */
export const AIRBNB_CARD_OVERRIDES: Record<string, string> = Object.fromEntries(
  LOCAL_DRAFT_PAGES.filter((p) => p.kind === "airbnb").map((p) => [p.metroSlug, p.path]),
);

/** City pages linked from a metro hub's "Areas we commonly serve" list. */
export function draftCityPagesForMetro(metroSlug: string): LocalDraftPage[] {
  return LOCAL_DRAFT_PAGES.filter((p) => p.kind === "city" && p.metroSlug === metroSlug);
}

/** Extra quote-form city options for draft city pages. */
export const DRAFT_QUOTE_CITIES: Record<string, string[]> = {
  sacramento: LOCAL_DRAFT_PAGES.filter((p) => p.kind === "city" && p.metroSlug === "sacramento").map((p) => p.quoteCity),
};
