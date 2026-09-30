/**
 * Hand-written copy for each service × metro page (9 pages).
 * Replaces the old template-driven paragraphs/FAQs so every page says
 * something specific to its market. Never state prices.
 */
export type ServiceMetroLocal = {
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  /** City page slugs (same metro) to link to from the page */
  cities: string[];
};

export const SERVICE_METRO_LOCAL: Record<string, ServiceMetroLocal> = {
  "los-angeles-orange-county/standard-cleaning": {
    paragraphs: [
      "Standard cleaning in LA and Orange County covers a wide range of homes: Craftsman bungalows in Pasadena, coastal condos in Long Beach and Santa Monica, and planned-community houses in Irvine and Tustin. The checklist is the same, but the visit is not: a walk-up apartment with street parking is a different job than a gated two-story with a three-car garage.",
      "Most Southern California clients tell us the hardest part is access, not the cleaning. Parking permits, gate codes, elevator reservations, and HOA quiet hours all affect when and how a crew can arrive, so we collect those details up front and put them on your job record.",
    ],
    faqs: [
      {
        q: "Can you work with parking permits, gated communities, and elevator reservations?",
        a: "Yes. Put the gate code, permit instructions, or elevator booking steps on the quote form and we will plan the arrival around them.",
      },
      {
        q: "Do you clean both houses and apartments across LA and Orange County?",
        a: "Yes. Single-family homes, townhomes, condos, and apartments are all part of our regular schedule. Give us your city or zip and the type of home and we will confirm coverage on the call.",
      },
      {
        q: "What is the difference between your standard clean and a deep clean?",
        a: "A standard clean maintains kitchens, baths, floors, and dusting on a documented checklist. A deep clean adds detail work such as baseboards, inside the fridge and microwave, and built-up grime. If it has been a long time since a professional visit, start with a deep clean.",
      },
    ],
    cities: ["irvine", "pasadena", "long-beach", "santa-monica"],
  },
  "los-angeles-orange-county/deep-cleaning": {
    paragraphs: [
      "A deep clean in LA and Orange County is often booked before a big event, after remodeling dust settles, or at a life change such as a move or a new baby. Homes near the coast collect a film of salt air on windows and slider tracks, and inland areas see more fine dust and freeway grit on sills and baseboards.",
      "Older Southern California housing stock, like the 1920s bungalows in Pasadena and Long Beach, adds tile, grout, and original wood that needs a lighter touch than a new-build. We ask about the age of the home and the surfaces you are worried about before we set the scope.",
    ],
    faqs: [
      {
        q: "Do coastal homes need a different kind of deep clean?",
        a: "The checklist is similar, but we spend more time on windows, sills, sliding-door tracks, and metal fixtures, where salt air leaves film.",
      },
      {
        q: "Can you deep clean a home after light remodeling or repainting?",
        a: "Yes, for everyday dust after small projects. Heavy construction debris may be outside our regular scope, so describe the work done and we will say whether it fits.",
      },
      {
        q: "How do I decide between a deep clean and a move-out clean?",
        a: "If you still live in the home, a deep clean is usually the right fit. If the home is empty and you need a deposit-ready result, choose move-out. Tell us your situation on the quote form and we will recommend one.",
      },
    ],
    cities: ["pasadena", "santa-monica", "newport-beach", "long-beach"],
  },
  "los-angeles-orange-county/recurring-cleaning": {
    paragraphs: [
      "Recurring cleaning in LA and Orange County usually comes down to calendars. Commutes on the 405, 5, and 10 stretch the workday, kids' activities fill weekends, and many households are away for long stretches of the week, so a scheduled visit while the home is empty is a big help.",
      "Bi-weekly is the most common rhythm for families in places like Irvine, Tustin, and Mission Viejo; weekly suits larger households or busy home offices; monthly works for smaller homes that stay tidy between visits. We set the rhythm on the quote call and adjust if your life changes.",
    ],
    faqs: [
      {
        q: "Can visits happen while I am at work and the home is empty?",
        a: "Yes. Many recurring clients leave a key, lockbox, or door code. Tell us how you prefer to give access and we will note it on your record.",
      },
      {
        q: "Can I switch between weekly, bi-weekly, and monthly?",
        a: "Yes, with reasonable notice. Many clients start bi-weekly and adjust after a few visits once they see how the home holds up.",
      },
      {
        q: "Do you handle a gated or HOA community on a recurring schedule?",
        a: "Yes. Send the gate or guest-list instructions once and we keep them on file so every visit starts the same way.",
      },
    ],
    cities: ["irvine", "tustin", "mission-viejo", "torrance"],
  },
  "las-vegas-nevada/standard-cleaning": {
    paragraphs: [
      "Standard cleaning in Las Vegas and the Valley is shaped by the desert. Fine dust settles on baseboards, blinds, and tile every week, and very hard tap water leaves white mineral film on shower glass, faucets, and kitchen fixtures. A routine visit keeps both from building up.",
      "Reno and Sparks have their own conditions: a higher, drier climate, wildfire-smoke days, and winter road grit tracked in on shoes. We serve both, and we confirm coverage by zip because the Northern Nevada trip is a different route than the Las Vegas Valley.",
    ],
    faqs: [
      {
        q: "Will a standard clean remove hard water buildup in my showers?",
        a: "A standard clean wipes and maintains, which keeps new film from building up. Established mineral crust on glass and fixtures usually needs a deep clean first. Our Las Vegas hard-water guide explains the difference.",
      },
      {
        q: "Do you serve Reno and Sparks as well as the Las Vegas Valley?",
        a: "Yes. Nevada is one of our three equal markets. Add your city and zip on the quote form and we will confirm coverage and timing.",
      },
      {
        q: "Can you work with gated communities and HOA rules in Henderson and Summerlin?",
        a: "Yes. Share the gate code or guest-list process and any HOA rules on the quote form so your cleaner arrives without delays.",
      },
    ],
    cities: ["summerlin", "henderson", "reno", "sparks"],
  },
  "las-vegas-nevada/deep-cleaning": {
    paragraphs: [
      "Deep cleaning in Las Vegas is often about hard water. Mineral film on shower glass, chrome, and tile grout builds up over months, and a routine wipe-down does not lift it. A deep clean puts time into those areas, along with baseboards, inside the fridge and microwave, and the dust that collects on fans and vents.",
      "Some etching cannot be reversed, and we would rather tell you that up front than promise a miracle. Our Las Vegas hard-water article walks through what a deep clean can and cannot fix. In Reno and Sparks, deep cleans are more often about dust, smoke, and winter grit.",
    ],
    faqs: [
      {
        q: "Can a deep clean fully remove etched hard-water stains on shower glass?",
        a: "It can remove most surface mineral buildup, but glass that has been etched by long-term hard water may keep some cloudiness. We will give you a straight answer on the call.",
      },
      {
        q: "How often should I book a deep clean in Las Vegas?",
        a: "Many homes do best with a deep clean once or twice a year, plus regular standard or recurring visits between them to keep hard water and dust from building back up.",
      },
      {
        q: "Do you deep clean after wildfire-smoke days in Reno?",
        a: "Yes. Ask for extra attention on sills, vents, and floors, where smoke residue settles.",
      },
    ],
    cities: ["las-vegas", "henderson", "summerlin", "reno"],
  },
  "las-vegas-nevada/recurring-cleaning": {
    paragraphs: [
      "Recurring cleaning in the Las Vegas Valley works well for households with shift-work schedules, hospitality hours, or long summers away from the heat. A regular visit keeps dust and hard-water film from getting ahead of you, and it means the tile floors and bathrooms are never a weekend project.",
      "In Reno and Sparks, recurring plans often follow the seasons: more frequent visits during dusty, smoky, or snowy stretches, and lighter schedules in between. We build the plan with you on the quote call.",
    ],
    faqs: [
      {
        q: "Can I pause recurring visits while I am away for the summer?",
        a: "Yes. Give us reasonable notice and we will pause and restart the schedule when you return, subject to capacity.",
      },
      {
        q: "Do you offer recurring cleaning in Reno and Sparks?",
        a: "Yes. Confirm your zip on the quote form and we will confirm route and timing.",
      },
      {
        q: "Can recurring visits happen on evenings or weekends?",
        a: "Sometimes. Tell us your preferred days and times and we will check what is available for your area.",
      },
    ],
    cities: ["henderson", "summerlin", "north-las-vegas", "sparks"],
  },
  "sacramento/standard-cleaning": {
    paragraphs: [
      "Standard cleaning in Sacramento covers very different homes: 1920s Victorians and bungalows in Midtown, East Sacramento, and Curtis Park, and newer two-story homes in Natomas, Elk Grove, Roseville, and Folsom. Older homes have original wood floors and tall windows that need care, while newer homes have big open kitchens and lots of tile and stone.",
      "Central Valley summers are hot and dusty, and many households have pets. Driveway parking is common, so access is easy, but we still ask about pets, alarm codes, and any rooms you want left alone.",
    ],
    faqs: [
      {
        q: "Do you clean older Midtown and East Sacramento homes with original wood floors?",
        a: "Yes. We match products to the surface and avoid anything that could damage old finishes. Tell us the age of the home and any delicate areas.",
      },
      {
        q: "Do you serve Roseville, Elk Grove, and Folsom as well as Sacramento?",
        a: "Yes. Add your city and zip on the quote form and we will confirm coverage and timing.",
      },
      {
        q: "How should I handle pets during a visit?",
        a: "Tell us about pets on the quote form. We can work around them, and you can keep a pet in a room or outside during the visit if that is easier.",
      },
    ],
    cities: ["roseville", "elk-grove", "folsom"],
  },
  "sacramento/deep-cleaning": {
    paragraphs: [
      "Deep cleaning in Sacramento often follows the seasons: a spring reset after winter, a pre-summer clean before the heat sets in, or a fall clean before the holidays. Valley dust and pollen collect on window tracks and vents, and homes near the American and Sacramento rivers can have extra humidity in baths.",
      "Older Sacramento homes bring plaster walls, older tile, and layers of wear that deserve more time than a routine visit. We ask about the age of the home and which rooms worry you most before we set the scope.",
    ],
    faqs: [
      {
        q: "Is a deep clean a good idea before hosting for the holidays?",
        a: "Yes. Book a few weeks ahead if you can. A deep clean before guests arrive resets kitchens, baths, and floors so you can just enjoy the visit.",
      },
      {
        q: "Do you deep clean homes with a lot of pollen or dust from open windows?",
        a: "Yes. Window sills, tracks, blinds, and vents are part of a deep clean, and those are the places where valley dust and pollen collect.",
      },
      {
        q: "Can you deep clean an older home without harming original finishes?",
        a: "We match products to the surface and avoid harsh cleaners on old wood, paint, and fixtures. Mention anything fragile when you request a quote.",
      },
    ],
    cities: ["sacramento", "roseville", "elk-grove", "folsom"],
  },
  "sacramento/recurring-cleaning": {
    paragraphs: [
      "Recurring cleaning in Sacramento suits state workers, commuters, and families in Elk Grove, Roseville, and Folsom who want a predictable schedule. Bi-weekly is the most common rhythm, especially for two-story homes with kids and pets.",
      "Because many Sacramento homes have driveways and garages, access is usually simple, and we keep your preferences on file so each visit starts the same way. If you change jobs or your schedule shifts, you can adjust the plan with reasonable notice.",
    ],
    faqs: [
      {
        q: "Can I set up recurring cleaning for a home with kids and pets?",
        a: "Yes. Tell us about children, pets, and any areas to skip so the checklist matches how your household lives.",
      },
      {
        q: "Do you offer recurring visits in Folsom and Roseville?",
        a: "Yes. Add your zip on the quote form and we will confirm route and timing.",
      },
      {
        q: "What if I need to change my cleaning day?",
        a: "Give us reasonable notice and we will do our best to move your visit within the same week.",
      },
    ],
    cities: ["elk-grove", "roseville", "folsom"],
  },
};
