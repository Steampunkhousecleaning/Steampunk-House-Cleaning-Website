/**
 * Static blog posts for /blog and /blog/:slug.
 * Append new posts at the top (newest first). Keep calendar in docs/blog-keyword-calendar.md.
 */

export type BlogSection = {
  /** Optional H2 */
  heading?: string;
  /** Paragraphs; support inline [label](/path) and [label](https://...) */
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogRelatedLink = {
  href: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** ISO date YYYY-MM-DD */
  date: string;
  /** ISO date YYYY-MM-DD of the last substantive edit; falls back to `date` in JSON-LD */
  dateModified?: string;
  metro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  /** Footer CTA H2 — topic/city specific (required for every new post) */
  ctaHeadline: string;
  /** Footer CTA supporting line — must point to the quote form or phone call */
  ctaBody: string;
  body: BlogSection[];
  relatedLinks: BlogRelatedLink[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "move-out-cleaning-sacramento",
    title:
      "Move Out Cleaning Sacramento: What Landlords Actually Check Before Returning Your Deposit",
    metaTitle:
      "Move Out Cleaning Sacramento | Steampunk House Cleaning",
    metaDescription:
      "Move out cleaning Sacramento renters can trust. See what landlords check, how California deposit photo rules work, and what a deposit back cleaning covers.",
    date: "2026-10-05",
    metro: "Sacramento",
    primaryKeyword: "move out cleaning Sacramento",
    secondaryKeywords: [
      "deposit back cleaning",
      "empty home clean Roseville",
    ],
    ctaHeadline: "Need a move-out clean that protects your deposit?",
    ctaBody:
      "Send your move-out date, address, and number of bedrooms and baths, and we will quote your Sacramento, Roseville, Elk Grove, or Folsom move-out clean. Request a free quote online or call — real humans pick up.",
    excerpt:
      "Sacramento landlords inspect the same spots on almost every unit. Here is what move out cleaning in Sacramento should cover, how California deposit rules work, and how to prep an empty home in Roseville, Elk Grove, or Folsom.",
    relatedLinks: [
      {
        href: "/move-in-move-out",
        label: "Move-in / move-out cleaning",
      },
      {
        href: "/locations/sacramento",
        label: "House cleaning in the Sacramento area",
      },
      {
        href: "/locations/sacramento/roseville",
        label: "Roseville house cleaning",
      },
      {
        href: "/locations/sacramento/elk-grove",
        label: "Elk Grove house cleaning",
      },
      {
        href: "/cleaning-checklist",
        label: "Full cleaning checklist",
      },
      {
        href: "/get-a-quote",
        label: "Get a free quote",
      },
    ],
    body: [
      {
        paragraphs: [
          "Your keys are due back at the end of the month, the truck is booked, and the last thing between you and your security deposit is the walkthrough. That is why move out cleaning Sacramento renters book is less about making a place look nice and more about passing an inspection. Landlords and property managers across the region check the same short list of spots on almost every unit, and the ones that get missed tend to come back as cleaning deductions. This guide covers what they actually look at, how California's deposit rules work, and what a real deposit back cleaning includes.",
          "Steampunk House Cleaning handles move-outs across [Sacramento](/locations/sacramento), [Roseville](/locations/sacramento/roseville), [Elk Grove](/locations/sacramento/elk-grove), and [Folsom](/locations/sacramento/folsom). Ryan and Daniel built the company on written checklists, and our [move-in/move-out cleaning](/move-in-move-out) service is the one we build around inspection day.",
        ],
      },
      {
        heading: "What California law says about cleaning and your deposit",
        paragraphs: [
          "California's security deposit law (Civil Code section 1950.5) only lets a landlord charge for the cleaning needed to return the unit to the same level of cleanliness it was in when your tenancy began. Ordinary wear and tear is not a cleaning charge. After you move out, the landlord has 21 days to return the deposit or send an itemized statement of deductions.",
          "Two newer rules matter here. Since April 1, 2025, landlords have to photograph the unit after you hand it back and before any cleaning or repairs they plan to deduct for, photograph it again after that work is done, and include those photos with the itemized statement. For tenancies that began on or after July 1, 2025, they also have to photograph the unit at move-in. In plain terms, the condition of the home on key-return day is documented. A clean that only looks good from the doorway is a risk.",
          "You can also ask for a pre-move-out inspection. California lets tenants request one up to two weeks before the lease ends, and the landlord has to give you a written list of the issues they would deduct for. That list is the best cleaning brief you will ever get. This is general information, not legal advice; your lease and your landlord's own move-out form still matter.",
        ],
      },
      {
        heading: "What Sacramento landlords actually check",
        paragraphs: [
          "A property manager with a Midtown fourplex, a Natomas rental house, or a Roseville apartment community will each have their own form, but the walkthrough lands in the same places:",
        ],
        bullets: [
          "Kitchen cabinets and drawers, inside and out — crumbs and sticky shelves are an easy note on the form",
          "Stovetop, range hood, and backsplash grease (inside oven cleaning is a separate paid add-on, so ask for it if your landlord's checklist lists the oven)",
          "Bathroom grout, shower glass, and the door tracks where soap scum and grit collect",
          "Toilets at the base and around the seat hinges, not just the bowl",
          "Baseboards, door frames, and the scuffs at hallway and doorknob height",
          "Window sills and tracks, where dust and dead bugs pile up through a long dry summer",
          "Vents, registers, and ceiling fan blades",
          "Closet shelves and floors once the boxes are gone",
          "Light switches and outlet covers",
          "Floor edges and corners that only show once the furniture is out",
        ],
      },
      {
        paragraphs: [
          "None of these are exotic. They are the places a normal weekly tidy skips because furniture and daily life cover them. An empty unit hides nothing, and the inspector's flashlight finds the line of dust behind where the couch used to be.",
        ],
      },
      {
        heading: "Why Sacramento move-outs take more than a quick wipe",
        paragraphs: [
          "Sacramento's long, hot, dry summers push fine dust into window tracks, sills, and vent covers, and in a home that has run the AC with windows shut for months, a film settles on every flat surface. Spring pollen in the City of Trees adds a yellow layer to sills and sliding doors. Older homes in Midtown, East Sacramento, and Land Park have original wood trim, tall windows, and deep sills that hold more dust than newer builds. Newer two-stories in Elk Grove, Natomas, and Folsom bring big open kitchens, lots of tile and stone, and long runs of baseboard that take real time to detail.",
          "Timing matters too. Many leases end on the last day of the month, so those final days are crowded for movers, cleaners, and property managers alike. Book early, especially if your move lands near month-end or a holiday weekend, and leave a buffer between the clean and the walkthrough.",
        ],
      },
      {
        heading: "Deposit back cleaning: what our move-out clean covers",
        paragraphs: [
          "A deposit back cleaning is a full-detail clean of an empty home, built around the inspection list rather than a regular housekeeping visit. Our [move-in/move-out cleaning](/move-in-move-out) checklist includes:",
        ],
        bullets: [
          "Inside all cabinets and drawers",
          "Degreasing the stovetop and range hood",
          "Scrubbing bathroom tile grout, shower door tracks, and glass",
          "Full bathroom detail: toilet, tub, sink, and mirrors",
          "Wiping every baseboard, door frame, and door",
          "Interior windows, plus sills, ledges, and tracks",
          "Dusting vents and registers",
          "Spot-cleaning walls and scuff marks",
          "Sanitizing light switches and outlet covers",
          "Vacuuming closets and shelving, then vacuuming and mopping every floor",
        ],
      },
      {
        paragraphs: [
          "Inside oven cleaning is not part of a move-out clean; it is a paid add-on. If the oven is on your landlord's list, add it when you request your quote so it is scheduled rather than assumed. For the room-by-room breakdown, see our [cleaning checklist](/cleaning-checklist).",
        ],
      },
      {
        heading: "Empty home clean in Roseville, Elk Grove, and Folsom",
        paragraphs: [
          "Not every move-out is a renter handing back keys. If you are looking for an empty home clean Roseville sellers and landlords can count on, the checklist is the same, but the finish line changes: listing photos, a buyer's final walkthrough, or the next tenant's move-in day. Sellers in [Roseville](/locations/sacramento/roseville) and [Folsom](/locations/sacramento/folsom) often schedule the clean after the movers and before the photographer. Landlords in [Elk Grove](/locations/sacramento/elk-grove) usually need the unit turned between tenants on a tight window. Tell us which situation you are in so the crew knows what done looks like.",
          "Moving in instead? A move-in clean before you unpack follows the same list. Cabinets, closets, and floors are far easier to clean before your things go in than after.",
        ],
      },
      {
        heading: "How to prep for a move-out clean",
        bullets: [
          "Move everything out first, including closets, cabinets, and the garage if it is part of the inspection",
          "Empty the fridge, freezer, and pantry completely",
          "Haul trash and leftover boxes to the bins, or tell us what is staying behind",
          "Keep power and water on through the day of the clean",
          "Patch nail holes and touch up paint before the clean, not after, so drywall dust does not land on clean floors",
          "Share gate codes, lockbox details, and parking notes for apartment communities",
          "Ask your property manager for their move-out checklist and send it with your quote request",
        ],
      },
      {
        heading: "Why Sacramento renters call Steampunk",
        paragraphs: [
          "Steampunk House Cleaning is a local team founded by Ryan and Daniel, with background-checked cleaners, our own supplies, and roughly 400+ verified Google reviews at 4.9★. Move-outs are where a checklist earns its keep: the same list on every job, worked top to bottom, so nothing depends on memory on a busy last-day-of-the-month schedule.",
          "We do not do self-serve instant booking, and pricing is quote-based. Tell us the address, bedrooms and baths, move-out date, and the condition of the home, and we will confirm timing and your quote by phone or after you submit the form. Quotes are free. If your deadline is tight, call; a real person answers.",
        ],
      },
      {
        heading: "Book your Sacramento move-out clean",
        paragraphs: [
          "Send your move-out date, the address, and the number of bedrooms and baths, plus your landlord's checklist if you have one. Call [(725) 255-3688](tel:7252553688) or [request a free quote](/get-a-quote) and we will tell you whether your timeline works before you lock in the walkthrough.",
          "Start here: [Get a free quote](/get-a-quote) · [Move-in/move-out cleaning](/move-in-move-out) · [Sacramento locations](/locations/sacramento) · [Roseville house cleaning](/locations/sacramento/roseville)",
        ],
      },
    ],
  },

  {
    slug: "airbnb-cleaning-irvine",
    title:
      "Airbnb Cleaning Irvine: Same-Day Turnover Checklist for Orange County Hosts",
    metaTitle:
      "Airbnb Cleaning Irvine, CA | Steampunk House Cleaning",
    metaDescription:
      "Airbnb cleaning Irvine hosts trust for same-day turnovers. Use this short term rental turnover Orange County checklist — then book Steampunk for guest-ready results.",
    date: "2026-09-28",
    metro: "LA/OC",
    primaryKeyword: "Airbnb cleaning Irvine",
    secondaryKeywords: [
      "short term rental turnover Orange County",
      "STR cleaning checklist",
    ],
    ctaHeadline: "Need a guest-ready Irvine turnover?",
    ctaBody:
      "Tell us your check-out and check-in times and we will quote your Airbnb or short-term rental turnover in Irvine and Orange County. Request a free quote online or call — real humans pick up.",
    excerpt:
      "Irvine Airbnb hosts need same-day, guest-ready turnovers. Here is a practical STR cleaning checklist — and when to call a local team for Airbnb cleaning in Irvine.",
    relatedLinks: [
      {
        href: "/airbnb-cleaning",
        label: "Airbnb & short-term rental cleaning",
      },
      {
        href: "/cleaning-checklist",
        label: "Full cleaning checklist",
      },
      {
        href: "/locations/los-angeles-orange-county/irvine",
        label: "House cleaning in Irvine",
      },
      {
        href: "/locations/los-angeles-orange-county",
        label: "Los Angeles & Orange County locations",
      },
      {
        href: "/get-a-quote",
        label: "Get a free quote",
      },
    ],
    body: [
      {
        paragraphs: [
          "If you host in Orange County, Airbnb cleaning Irvine is not a nice-to-have — it is the difference between a five-star review and a same-night complaint about hair in the shower or a sticky coffee maker. Guests expect hotel-level reset between stays, often with only a few hours on the calendar. This guide is a practical short term rental turnover Orange County playbook: what must be done every turnover, what guests notice first, and how Steampunk House Cleaning helps Irvine hosts stay guest-ready without guessing.",
          "We clean homes and STRs across [Irvine](/locations/los-angeles-orange-county/irvine) and the wider [Los Angeles & Orange County](/locations/los-angeles-orange-county) metro. Ryan and Daniel built the company around documented checklists and clear quotes — form or phone, not a mystery instant book. If you want the service page first, start with [Airbnb cleaning](/airbnb-cleaning).",
        ],
      },
      {
        heading: "Why Irvine turnovers are unforgiving",
        paragraphs: [
          "Irvine listings compete with polished corporate apartments, HOA communities, and travelers who chose OC for Disneyland, UCI visits, or business near the Spectrum. Photos sell the booking; the first ten minutes after unlock decide the review. Dust on baseboards, a missed trash liner, or a half-stocked paper-goods cabinet reads as “unclean” even when the floors look fine from the doorway.",
          "Same-day gaps are common: guest A checks out at 11:00 a.m., guest B arrives at 3:00 or 4:00 p.m. That window has to cover travel time, cleaning, laundry (or linen swap), restock, and a final photo walk if you document the unit. A written STR cleaning checklist keeps the crew from improvising under time pressure.",
        ],
      },
      {
        heading: "STR cleaning checklist: same-day ready in Irvine",
        paragraphs: [
          "Use this as your baseline for every short term rental turnover Orange County hosts run. Adjust for bedrooms and baths, but do not skip the “review killers.”",
        ],
        bullets: [
          "Strip and remake all beds with fresh, matching linens; check under beds and between mattress/topper for lost items",
          "Bathrooms: toilets, showers, glass, sinks, mirrors, floors; restock toilet paper, tissues, hand soap, and clean towels",
          "Kitchen: empty trash and recycling, wipe counters and appliance faces, clean sink and faucet, run or empty dishwasher, restock pods/sponge if you provide them",
          "Coffee station and mini-bar zones: empty grounds, wipe machine, restock pods/filters, check for sticky rings",
          "Floors: vacuum and mop high-traffic paths, entry, kitchen, and baths — Irvine open plans show footprints fast",
          "High-touch: remotes, light switches, door handles, thermostat, remote locks/keypads",
          "Living areas: fluff cushions, fold throws, wipe tables, straighten décor to match listing photos",
          "Laundry: start host linens or confirm linen service pickup; never leave damp towels in a closed unit",
          "Trash: remove all bags from the unit and take them to the correct HOA/community bins",
          "Final walk: guest POV from the front door, then each bedroom and bath with lights on",
        ],
      },
      {
        paragraphs: [
          "Compare this list to our public [cleaning checklist](/cleaning-checklist) for residential detail work. STR turnovers add speed, linen discipline, and restock — not a lighter version of a standard home clean.",
        ],
      },
      {
        heading: "What guests notice first (fix those first)",
        paragraphs: [
          "When time is short, prioritize in this order:",
        ],
        bullets: [
          "Bathroom smell and visible hair — the fastest one-star trigger",
          "Bed presentation — wrinkles, mismatched pillowcases, or pet hair on the duvet",
          "Kitchen sink and coffee area — overnight guests always check both",
          "Floors at the entry and kitchen — first impressions before they reach the sofa",
          "Trash cans — empty with a fresh liner, or guests assume the last stay was skipped",
        ],
      },
      {
        paragraphs: [
          "If a full deep pass is impossible before the next check-in, still hit those five. Then schedule a deeper reset between longer gaps or after heavy-use weekends. Our [Airbnb cleaning](/airbnb-cleaning) service is built for that rhythm: reliable turnover visits, with deeper cleans when the calendar allows.",
        ],
      },
      {
        heading: "HOA, parking, and access realities in Irvine",
        paragraphs: [
          "Many Irvine communities are gated or have strict quiet hours and parking rules. Build access into every booking note:",
        ],
        bullets: [
          "Gate codes, lockbox location, or smart-lock instructions that still work after guest checkout",
          "Parking stall numbers or street rules so the team is not circling during your turnover window",
          "Alarm codes and which zones to avoid (office drawer, owner closet)",
          "HOA quiet hours if vacuuming early or late would create a complaint",
          "Trash enclosure rules — wrong bin day is a real OC host headache",
        ],
      },
      {
        paragraphs: [
          "Share those details when you [request a quote](/get-a-quote). Clear access notes are how same-day Airbnb cleaning Irvine jobs finish on time.",
        ],
      },
      {
        heading: "Standard clean vs. turnover vs. deep reset",
        paragraphs: [
          "Hosts sometimes order a “regular house clean” and expect hotel turnover results. They are related but not the same:",
        ],
        bullets: [
          "Standard / recurring residential clean: maintains an occupied home on a weekly or biweekly cadence",
          "STR turnover: full guest-ready reset — linens, restock, trash out, photo-level presentation under a hard deadline",
          "Deep clean: heavier detail (baseboards, inside the fridge, grout-level bathrooms; inside oven cleaning is an add-on) between stays or after long gaps",
        ],
      },
      {
        paragraphs: [
          "If your reviews mention dust on fans, cloudy shower glass, or a “lived-in” smell, book a deep pass, then keep turnovers on the lighter, faster checklist. Searching Airbnb cleaning Irvine should land you a team that understands that split — not a generic maid visit that skips linen and restock.",
        ],
      },
      {
        heading: "How Steampunk works with OC hosts",
        paragraphs: [
          "Steampunk House Cleaning is a local team founded by Ryan and Daniel. We serve Irvine and surrounding Orange County cities with background-checked cleaners, supplies, and a documented process. Guests and homeowners have left us roughly 400+ verified Google reviews at 4.9★ — the pattern we protect for hosts is simple: show up, follow the list, leave the unit matching the listing.",
          "We do not push self-serve instant booking. You tell us the property details, turnover window, and linen plan; we confirm timing and pricing on a quote. That keeps same-day expectations honest instead of overselling a calendar slot that cannot work.",
        ],
      },
      {
        heading: "Ready for guest-ready Irvine turnovers?",
        paragraphs: [
          "Send the property address, number of bedrooms/baths, typical checkout–check-in gap, and whether you supply linens or need us to coordinate. Call [(725) 255-3688](tel:7252553688) or submit the form — we will confirm whether your short term rental turnover Orange County schedule fits a same-day crew.",
          "Start here: [Get a free quote](/get-a-quote) · [Airbnb cleaning](/airbnb-cleaning) · [Irvine house cleaning](/locations/los-angeles-orange-county/irvine) · [Cleaning checklist](/cleaning-checklist)",
        ],
      },
    ],
  },

  {
    slug: "house-cleaning-las-vegas-hard-water",
    title:
      "House Cleaning Las Vegas Hard Water: How Mineral Stains Take Over — and What a Deep Clean Fixes",
    metaTitle:
      "Las Vegas Hard Water Cleaning | Steampunk House Cleaning",
    metaDescription:
      "House cleaning Las Vegas hard water problems show up on showers, glass, and fixtures. Learn what deep cleaning Las Vegas teams actually remove — and when stains need more than a wipe.",
    date: "2026-09-21",
    metro: "Las Vegas",
    primaryKeyword: "house cleaning Las Vegas hard water",
    secondaryKeywords: [
      "deep cleaning Las Vegas",
      "hard water stains bathroom",
    ],
    ctaHeadline: "Ready for a hard-water reset?",
    ctaBody:
      "Get a free quote online or call us — real humans pick up. We will scope your Las Vegas or Henderson bathrooms and glass and tell you what a deep clean will fix.",
    excerpt:
      "Vegas water leaves chalky rings on glass and fixtures. Here is what house cleaning for Las Vegas hard water actually fixes — and when you need a true deep clean.",
    relatedLinks: [
      {
        href: "/locations/las-vegas-nevada",
        label: "House cleaning in Las Vegas, Nevada",
      },
      {
        href: "/deep-cleaning",
        label: "Deep cleaning services",
      },
      {
        href: "/locations/las-vegas-nevada/henderson",
        label: "Henderson house cleaning",
      },
      {
        href: "/locations/las-vegas-nevada/summerlin",
        label: "Summerlin house cleaning",
      },
      {
        href: "/get-a-quote",
        label: "Get a free quote",
      },
    ],
    body: [
      {
        paragraphs: [
          "If you live in the Valley, you already know the look: cloudy shower doors, white crust on faucets, and that stubborn ring around the tub that never quite disappears after a quick wipe. Searching for house cleaning Las Vegas hard water is usually how locals describe the problem when standard tidy-ups stop working. Hard water is not dirt in the usual sense — it is mineral residue from calcium and magnesium that bonds to glass, chrome, tile, and porcelain every time water evaporates.",
          "Steampunk House Cleaning works homes across [Las Vegas](/locations/las-vegas-nevada), [Henderson](/locations/las-vegas-nevada/henderson), and [Summerlin](/locations/las-vegas-nevada/summerlin). We see the same pattern week after week: bathrooms that look “clean enough” from five feet away still feel rough under your hand, and glass that never goes fully clear. This post breaks down why that happens, what a proper deep clean changes, and how to keep hard water from owning your showers again.",
        ],
      },
      {
        heading: "Why Las Vegas hard water is so hard on bathrooms",
        paragraphs: [
          "Southern Nevada’s municipal water is famously mineral-rich. That is great for some industrial uses and terrible for glass shower doors. Every rinse leaves a thin film. Multiply that by daily showers for a family of four and you get etched-looking panels, clogged shower heads, and fixtures that look older than they are.",
          "Hard water stains bathroom surfaces in a few predictable places:",
        ],
        bullets: [
          "Shower glass and enclosure tracks (the tracks trap grit and soap together)",
          "Chrome and brushed-nickel faucets, handles, and shower arms",
          "Tile and grout near the shower head and tub spout",
          "Toilet bowls at the waterline",
          "Kitchen sinks and stainless appliances that see frequent splashes",
        ],
      },
      {
        paragraphs: [
          "Soap scum makes it worse. Soap binds to minerals and creates that sticky beige film that a damp rag only smears. If your last few cleans were surface-level only, the film has had months to harden. That is when homeowners start looking for deep cleaning Las Vegas teams instead of another “standard tidy.”",
        ],
      },
      {
        heading: "What a standard clean can (and cannot) fix",
        paragraphs: [
          "A solid recurring house clean keeps counters, floors, toilets, and high-touch surfaces in good shape. It will wipe glass and polish fixtures — and for light mineral mist, that is enough. It will not, by itself, reverse years of buildup in tracks, heavily scaled shower heads, or grout that has gone gray from mineral + soap layers.",
          "Think of standard cleaning as maintenance. Hard water is a gradual construction project happening on every wet surface. Maintenance slows the build. It does not demolish what already set.",
          "That distinction matters when you price quotes. If your glass has gone opaque and your fixtures feel chalky, ask specifically for a deep clean (or a focused bathroom deep pass) rather than hoping a regular visit will magically restore clarity.",
        ],
      },
      {
        heading: "What deep cleaning Las Vegas homes needs for hard water",
        paragraphs: [
          "Our [deep cleaning](/deep-cleaning) checklist is built for homes that need more than a surface reset. For hard-water bathrooms, that usually means longer dwell time with the right products, detail work on tracks and hinges, and deliberate attention to mineral deposits — not a faster version of the same wipe-down.",
          "On a typical Las Vegas deep clean focused on hard water, we prioritize:",
        ],
        bullets: [
          "Shower glass: remove mineral film and soap scum so panels read clear again when possible",
          "Shower door tracks and thresholds: vacuum and scrub the grit line that keeps regenerating stains",
          "Fixtures and shower heads: break down white scale on spouts, aerators, and spray faces",
          "Tile and grout: scrub mineral + soap layers, especially at splash zones",
          "Baseboards and ledges in wet rooms: catch the dust that sticks to damp residue",
          "Kitchen wet zones: sinks, faucet bases, and stainless near the dishwasher splash path",
        ],
      },
      {
        paragraphs: [
          "Honesty check: if glass has been chemically etched by years of abrasive DIY scrubbing, no cleaner can polish that damage away. Most “cloudy” Vegas showers we see are film, not etch — and film responds well to a proper deep clean. We will tell you on the walkthrough which category you are in.",
        ],
      },
      {
        heading: "Hard water stains bathroom: a realistic before/after expectation",
        paragraphs: [
          "Homeowners often send us photos that look like the shower is permanently ruined. After a deep clean, the same enclosure usually photographs clear again under normal lighting. Expect:",
        ],
        bullets: [
          "Clearer glass with less haze when you turn on the vanity lights",
          "Faucets that look closer to their original finish",
          "Less “gritty” feel on tile underfoot in the shower",
          "Tracks that do not leave black residue on a fingertip",
        ],
      },
      {
        paragraphs: [
          "Do not expect a one-visit miracle on neglected silica buildup that has bonded for a decade, or on cheap glass that was never sealed. Also do not expect hard water to stop arriving tomorrow — Vegas water chemistry does not take days off. The win is resetting the surface so your next recurring cleans can keep pace.",
        ],
      },
      {
        heading: "How to keep hard water from bouncing back",
        paragraphs: [
          "After a deep reset, small habits buy you months of easier maintenance:",
        ],
        bullets: [
          "Squeegee glass after showers (thirty seconds beats thirty minutes later)",
          "Wipe faucet bases when you see the first white freckles",
          "Run a monthly vinegar or manufacturer-safe soak on removable shower heads",
          "Book recurring cleaning on a schedule that matches your household’s shower volume",
          "Tell your cleaner which bathroom is the problem child so they spend time where it matters",
        ],
      },
      {
        paragraphs: [
          "If you host short-term guests or have teens who take marathon showers, biweekly service usually holds the line better than monthly. Families in [Summerlin](/locations/las-vegas-nevada/summerlin) HOAs and [Henderson](/locations/las-vegas-nevada/henderson) two-stories often keep one deep clean on the calendar each spring or fall, then ride recurring standard cleans the rest of the year.",
        ],
      },
      {
        heading: "When to call Steampunk vs. DIY",
        paragraphs: [
          "DIY is fine for light weekly wipe-downs. Call a pro when:",
        ],
        bullets: [
          "Glass has stayed cloudy after your own scrubbing sessions",
          "You are prepping a home for sale, photos, or new tenants",
          "You have avoided the shower tracks for longer than you want to admit",
          "You want house cleaning that treats Las Vegas hard water as a known local condition — not a surprise",
        ],
      },
      {
        paragraphs: [
          "Steampunk is a local team covering the Las Vegas Valley and beyond. We bring supplies, follow a documented checklist, and price the job on a quote call — no mystery fees. If hard water is the main reason you are shopping cleaners, say so up front. We will steer you toward deep cleaning Las Vegas service when that is the right reset, or toward recurring maintenance when you are already in good shape.",
        ],
      },
      {
        heading: "Ready for clearer showers?",
        paragraphs: [
          "Request a free quote online or call [(725) 255-3688](tel:7252553688). Tell us your city (Las Vegas, Henderson, Summerlin, or nearby), roughly how long it has been since a deep clean, and which bathrooms are the worst offenders. We will confirm timing and pricing — then put hard water stains bathroom surfaces back under control.",
          "Start here: [Get a free quote](/get-a-quote) · [Las Vegas locations](/locations/las-vegas-nevada) · [Deep cleaning](/deep-cleaning)",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
