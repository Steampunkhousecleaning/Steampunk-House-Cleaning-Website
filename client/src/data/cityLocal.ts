/**
 * Hand-written local detail per city page (areas, housing/cleaning context,
 * one city-specific FAQ, and real neighboring cities we link to).
 * Written per city — not generated from a template. Keep claims general and
 * verifiable; never state prices.
 */
export type CityLocal = {
  /** Real neighborhoods, villages, districts, or landmarks people search by */
  areas: string[];
  /** 2–3 sentences: housing stock / climate / access details that change how we clean */
  detail: string;
  /** One question that only makes sense for this city */
  faq: { q: string; a: string };
  /** Slugs of neighboring city pages in the same metro (real adjacency) */
  nearby: string[];
};

export const CITY_LOCAL: Record<string, CityLocal> = {
  // ───────────────────────── LA / Orange County ─────────────────────────
  irvine: {
    areas: ["Woodbridge", "Northpark", "Turtle Rock", "University Park", "Quail Hill", "Orchard Hills", "Portola Springs", "Great Park neighborhoods"],
    detail:
      "Irvine is built as a set of master-planned villages, and many of them have gated entries, guest-parking rules, and community pools or clubhouses. Newer Great Park and Portola Springs homes tend to have large open kitchens with stone counters and lots of glass, while Woodbridge and Turtle Rock lean toward older two-story layouts with more carpet. We plan the visit around which one you have.",
    faq: {
      q: "Do you clean Airbnb and short-term rental units near UCI and the Spectrum?",
      a: "Yes. Turnover cleans are a regular request around UC Irvine and the Irvine Spectrum. Tell us your check-out and check-in times on the quote form, or read our Irvine Airbnb turnover checklist on the blog.",
    },
    nearby: ["tustin", "costa-mesa", "newport-beach", "santa-ana", "mission-viejo"],
  },
  pasadena: {
    areas: ["Bungalow Heaven", "Old Pasadena", "South Lake", "Playhouse District", "San Rafael Hills", "Linda Vista", "Altadena border"],
    detail:
      "Pasadena has one of the largest stocks of early-1900s Craftsman bungalows in Southern California, plus hillside homes above the Arroyo and mid-rise condos near Colorado Boulevard. Original wood floors, built-in cabinetry, and older tile bathrooms need gentler products and more hand detailing than a newer tract home.",
    faq: {
      q: "Can you clean a Craftsman home with original wood floors and built-ins?",
      a: "Yes. We match products to the surface, dust built-ins and window trim by hand, and avoid anything that could strip old finishes. Mention the age and any delicate surfaces when you request a quote.",
    },
    nearby: ["glendale", "burbank", "los-angeles", "pomona"],
  },
  "los-angeles": {
    areas: ["Silver Lake", "Echo Park", "Koreatown", "Mid-Wilshire", "Westwood", "Sherman Oaks", "Highland Park", "Playa Vista"],
    detail:
      "Los Angeles covers everything from Spanish-style duplexes in Silver Lake to high-rise apartments on Wilshire and hillside houses in the Valley. Elevator reservations, loading-zone rules, and street-sweeping days can decide whether a cleaning crew can even park, so we ask about those before we book.",
    faq: {
      q: "Do you clean apartments and condos that require elevator reservations or a COI?",
      a: "We plan around building rules. Tell us on the quote form if your building needs an elevator reservation, parking validation, or proof of insurance and we will confirm what is needed before the visit.",
    },
    nearby: ["culver-city", "santa-monica", "west-hollywood", "glendale", "burbank", "inglewood"],
  },
  "long-beach": {
    areas: ["Belmont Shore", "Naples Island", "Bixby Knolls", "East Village Arts District", "Alamitos Beach", "Los Altos", "Downtown high-rises"],
    detail:
      "Long Beach mixes 1920s-era bungalows and Spanish duplexes in Bixby Knolls and Alamitos Beach with waterfront condos in Belmont Shore and Downtown. Salt air leaves a film on windows and sliding-door tracks, and many blocks rely on street parking, so timing and access matter.",
    faq: {
      q: "Can you handle move-out cleans for Long Beach apartments and condos?",
      a: "Yes. Move-out cleans are common in Downtown and around CSULB. Send us your move date and unit size and we will confirm scope; see our move-in / move-out page for what is included.",
    },
    nearby: ["downey", "torrance", "huntington-beach", "santa-ana"],
  },
  "santa-monica": {
    areas: ["Ocean Park", "Montana Avenue", "Sunset Park", "Wilshire-Montana", "Downtown Santa Monica", "Pico neighborhood"],
    detail:
      "Santa Monica homes range from beach-block condos to Craftsman houses north of Montana Avenue. Ocean air leaves salt film on glass and metal fixtures, and many buildings have limited guest parking or permit zones, so we confirm parking and building access when we book.",
    faq: {
      q: "Do you clean condos close to the beach where salt film builds up on windows and sliders?",
      a: "Yes. A deep clean covers interior windows, sills and tracks, and fixtures, which is where coastal salt film shows up most. Ask for a deep clean on your first visit if it has been a while.",
    },
    nearby: ["los-angeles", "culver-city", "west-hollywood", "inglewood"],
  },
  glendale: {
    areas: ["Adams Hill", "Verdugo Woodlands", "Rossmoyne", "Chevy Chase Canyon", "Downtown Glendale", "Montrose (nearby)"],
    detail:
      "Glendale has a lot of hillside homes with stairs and multi-level floor plans, plus apartment and condo buildings around the Americana and Downtown. Many households keep a no-shoes rule, and we are glad to follow it.",
    faq: {
      q: "Do your cleaners remove shoes or wear covers inside the home?",
      a: "Just tell us your preference. Many Glendale households keep a no-shoes rule, and we are happy to follow it; note it on the quote form so it is on your job record.",
    },
    nearby: ["burbank", "pasadena", "los-angeles"],
  },
  burbank: {
    areas: ["Magnolia Park", "Rancho Providencia", "Burbank Hills", "Media District", "Downtown Burbank", "Toluca Lake border"],
    detail:
      "Burbank has a lot of post-war ranch homes and duplexes in Magnolia Park and Rancho, plus newer townhomes near the studios. Older single-pane windows, and dust from nearby freeways collect on sills and baseboards, so we spend extra time there on deep cleans.",
    faq: {
      q: "Can you work around irregular schedules, like production or shift-work hours?",
      a: "Often, yes. Tell us your best windows on the quote form and we will look at recurring slots that fit, including earlier or later starts when capacity allows.",
    },
    nearby: ["glendale", "pasadena", "los-angeles"],
  },
  torrance: {
    areas: ["Old Torrance", "Hillside Village", "Walteria", "Southwood", "Riviera Village (Redondo border)", "Del Amo area"],
    detail:
      "Torrance is mostly single-family neighborhoods built from the 1950s through the 1970s, with attached garages and standard driveways, plus newer townhome communities near the Del Amo area.",
    faq: {
      q: "Can I get the same cleaner every visit for a recurring schedule in Torrance?",
      a: "We aim for consistency when scheduling allows and keep your preferences documented either way. Ask about a bi-weekly or monthly recurring plan when you request a quote.",
    },
    nearby: ["long-beach", "inglewood", "downey"],
  },
  "culver-city": {
    areas: ["Downtown Culver City", "Culver West", "Blair Hills", "Fox Hills", "Studio Village", "Mar Vista border"],
    detail:
      "Culver City has post-war bungalows in Culver West, hillside homes in Blair Hills, and new lofts and apartments around the Downtown and Platform area. Many of the lofts have concrete or polished floors and big windows that show every streak.",
    faq: {
      q: "Can you clean lofts with polished concrete floors and large windows?",
      a: "Yes. We match products to sealed concrete, tile, and wood, and a deep clean includes interior windows, sills, and tracks. Let us know your floor type when you request a quote.",
    },
    nearby: ["los-angeles", "santa-monica", "inglewood", "west-hollywood"],
  },
  "west-hollywood": {
    areas: ["Sunset Strip corridor", "West Hollywood West", "Norma Triangle", "Melrose Triangle", "Fairfax border", "Sunset Plaza"],
    detail:
      "Most West Hollywood homes are condos, courtyard apartments, and older 1920s-era buildings packed into a small city with limited parking and street-cleaning restrictions. Elevators, gated garages, and buzz-in entries are the norm, so access instructions matter more than square footage.",
    faq: {
      q: "How do you handle buildings with gated garages, key fobs, or concierge check-in?",
      a: "Send us the entry steps on the quote form (buzzer code, fob pickup, concierge name) and we will plan arrival around them. We will confirm anything else your building requires when we call.",
    },
    nearby: ["los-angeles", "culver-city", "santa-monica", "glendale"],
  },
  downey: {
    areas: ["Downtown Downey", "Rancho Los Amigos area", "Southeast Downey", "Furman Park"],
    detail:
      "Downey is largely single-family mid-century tracts with attached garages and yards, close to the I-5 and I-105. Many of these homes have multi-generation households, pets, and heavy daily traffic on floors, so kitchens, baths, and floors get most of our time.",
    faq: {
      q: "Can you clean a busy multi-generation household with pets?",
      a: "Yes. Let us know about pets and how many people live in the home so we plan the right amount of time.",
    },
    nearby: ["long-beach", "inglewood", "torrance", "pomona"],
  },
  inglewood: {
    areas: ["Morningside Park", "Crenshaw Heights", "Hyde Park", "Century Boulevard area", "Centinela Heights", "Downtown Inglewood"],
    detail:
      "Inglewood has established bungalow blocks in Morningside Park and Hyde Park, alongside new apartments and condos near the SoFi Stadium area. On event weekends street parking and traffic change quickly, so we schedule around stadium and arena calendars when we can.",
    faq: {
      q: "Do event days at SoFi Stadium or the arena affect your arrival time?",
      a: "They can. Traffic and street closures around large events are real, so tell us if you live near the venues and we will suggest a start time that avoids the worst of it.",
    },
    nearby: ["los-angeles", "culver-city", "torrance", "downey", "santa-monica"],
  },
  pomona: {
    areas: ["Downtown Pomona Arts Colony", "Lincoln Park Historic District", "Phillips Ranch", "Ganesha Hills", "Cal Poly Pomona area"],
    detail:
      "Pomona blends historic Victorians and Craftsman homes near Lincoln Park with large newer subdivisions in Phillips Ranch. Larger lots and inland dust from the Inland Empire corridor show up as fine grit on window tracks and entryways, and rentals near Cal Poly turn over every academic year.",
    faq: {
      q: "Do you offer move-out cleans for student rentals near Cal Poly Pomona?",
      a: "Yes. Send your move-out date and the size of the place, and we will confirm scope and timing. See our move-in / move-out page for what a deposit-focused clean includes.",
    },
    nearby: ["fullerton", "downey", "pasadena"],
  },
  anaheim: {
    areas: ["Anaheim Hills", "Platinum Triangle", "Colony Historic District", "Downtown Anaheim", "Canyon Rim", "Resort District"],
    detail:
      "Anaheim ranges from historic Colony District bungalows to large Anaheim Hills homes with hillside views and new apartments in the Platinum Triangle. Vacation rentals and guest homes near the resort area also mean frequent turnovers and short windows.",
    faq: {
      q: "Do you clean vacation rentals and guest homes near Disneyland and the Convention Center?",
      a: "Yes. Turnovers are a regular request in this part of Anaheim. Share your check-out and check-in times so we can plan a realistic window; see our Airbnb / STR page for details.",
    },
    nearby: ["fullerton", "orange", "santa-ana", "tustin"],
  },
  "huntington-beach": {
    areas: ["Downtown Huntington Beach", "Huntington Harbour", "Sunset Beach border", "Seacliff", "Old Town", "Bolsa Chica area"],
    detail:
      "Huntington Beach mixes beachside cottages and townhomes with waterfront homes in Huntington Harbour. Sand tracks in through entries, and marine air leaves film on windows and sliders, so entryways, floors, and glass are where a reset shows most.",
    faq: {
      q: "Can you deal with sand and salt film in beach-area homes?",
      a: "Yes. Entryways, floors, sliding-door tracks, and interior glass get extra attention. If it has been a while, book a deep clean first and then move to recurring visits.",
    },
    nearby: ["costa-mesa", "newport-beach", "long-beach", "santa-ana", "fullerton"],
  },
  "newport-beach": {
    areas: ["Balboa Island", "Corona del Mar", "Newport Coast", "Lido Isle", "Balboa Peninsula", "Eastbluff"],
    detail:
      "Newport Beach includes harbor-front homes on Balboa Island and Lido Isle, bluff-top homes in Newport Coast, and condos along the peninsula. Many properties are second homes or vacation rentals with guest-ready expectations, and narrow island streets make parking and arrival timing important.",
    faq: {
      q: "Do you clean second homes and vacation rentals that sit empty between stays?",
      a: "Yes. Tell us how often the home is used and we will suggest a mix of arrival cleans and periodic deep cleans. We can coordinate around keys or lockboxes.",
    },
    nearby: ["costa-mesa", "irvine", "huntington-beach", "mission-viejo"],
  },
  "santa-ana": {
    areas: ["Downtown Santa Ana", "French Park", "Floral Park", "Willard", "Santa Ana Heights", "Wilshire Square"],
    detail:
      "Santa Ana has historic craftsman and bungalow homes in French Park and Floral Park, plus apartments and duplexes across the downtown core. Older homes have original tile, older windows, and more detail work, while apartment cleans focus on kitchen, bath, and floors.",
    faq: {
      q: "Can you clean older bungalows in French Park or Floral Park?",
      a: "Yes. We match products to older tile, wood, and painted trim. Tell us the age of the home and any surfaces that need gentle care when you request a quote.",
    },
    nearby: ["orange", "tustin", "costa-mesa", "anaheim", "irvine"],
  },
  "costa-mesa": {
    areas: ["Eastside Costa Mesa", "Mesa Verde", "SoBECA", "Westside", "College Park", "Santa Ana Country Club area"],
    detail:
      "Costa Mesa is a mix of mid-century houses on the Eastside and Westside, townhomes in Mesa Verde, and apartments near South Coast Plaza and SoBECA. Many households are dual-income with short weekday windows.",
    faq: {
      q: "What is the fastest way to set up a recurring clean if I work long hours?",
      a: "Request a quote with your preferred days and tell us about access (key, lockbox, or code). We can set a recurring visit that happens while you are at work.",
    },
    nearby: ["newport-beach", "huntington-beach", "santa-ana", "irvine"],
  },
  fullerton: {
    areas: ["Downtown Fullerton", "Sunny Hills", "Fullerton Hillcrest", "Coyote Hills area", "Cal State Fullerton area", "Fullerton Heights"],
    detail:
      "Fullerton pairs a walkable downtown and historic homes near Hillcrest Park with larger suburban homes in Sunny Hills and student rentals near CSUF. Older homes need more hand detailing, while student rentals turn over on academic calendars.",
    faq: {
      q: "Do you offer move-out cleans for rentals near Cal State Fullerton?",
      a: "Yes. Send your move date and the number of bedrooms and baths, and we will confirm scope. See our move-in / move-out page for what is included.",
    },
    nearby: ["anaheim", "orange", "pomona", "huntington-beach"],
  },
  orange: {
    areas: ["Old Towne Orange", "Orange Park Acres", "Chapman University area", "Handy Creek", "Anaheim Hills border"],
    detail:
      "The City of Orange is known for its Old Towne Plaza and historic Craftsman and Victorian homes, plus larger rural-feeling lots in Orange Park Acres. Older homes often have original wood floors, plaster walls, and more trim, which is why we budget extra time for detail work.",
    faq: {
      q: "Can you clean historic homes near the Old Towne Plaza?",
      a: "Yes. We match products to wood floors, painted trim, and older fixtures. Mention the home age and anything fragile so we assign enough time.",
    },
    nearby: ["santa-ana", "tustin", "anaheim", "fullerton"],
  },
  tustin: {
    areas: ["Old Town Tustin", "Tustin Ranch", "Tustin Legacy", "Cedar Grove", "Peppertree", "Foothill area"],
    detail:
      "Tustin has small-town Old Town streets with older single-story homes, newer planned communities in Tustin Ranch and Tustin Legacy, and townhome clusters with HOA gates. Ask us about visitor parking and gate codes at booking.",
    faq: {
      q: "Do you clean new townhomes in Tustin Legacy?",
      a: "Yes. Newer townhomes with stone counters and larger windows are common there. Let us know square footage and any surfaces that need special care, and we will plan the visit.",
    },
    nearby: ["irvine", "santa-ana", "orange", "mission-viejo"],
  },
  "mission-viejo": {
    areas: ["Lake Mission Viejo", "Pacific Hills", "Oso Viejo", "Saddleback Valley area"],
    detail:
      "Mission Viejo is a planned community built around Lake Mission Viejo and Saddleback Valley, with many homes 30 to 40 years old and second-floor bedrooms. Popcorn ceilings, older carpet, and vaulted living rooms are common, which changes how we dust and vacuum.",
    faq: {
      q: "Can you dust high vaulted ceilings and ceiling fans?",
      a: "Tell us about tall ceilings and fans on the quote form and we will confirm what we can safely reach and allow the right time.",
    },
    nearby: ["irvine", "tustin", "newport-beach"],
  },
  // ───────────────────────── Las Vegas / Nevada ─────────────────────────
  "las-vegas": {
    areas: ["Downtown Las Vegas", "Rancho Charleston", "Scotch 80s", "The Lakes", "Peccole Ranch", "Southern Highlands (nearby)"],
    detail:
      "Las Vegas tap water is very hard, so shower glass, faucets, and kettles pick up white mineral film fast. Desert dust also settles on sills and baseboards, and swamp coolers or older evaporative systems add more minerals to surfaces.",
    faq: {
      q: "What can you actually do about hard water stains in Las Vegas showers?",
      a: "A standard clean keeps them from getting worse; a deep clean can remove much of the buildup on glass and fixtures, but etched glass may not fully clear. Read our hard-water guide on the blog for realistic before-and-after expectations.",
    },
    nearby: ["summerlin", "paradise", "spring-valley", "north-las-vegas", "henderson"],
  },
  henderson: {
    areas: ["Green Valley Ranch", "Anthem", "Seven Hills", "MacDonald Ranch", "Inspirada", "Lake Las Vegas (nearby)"],
    detail:
      "Henderson has many master-planned communities with guard gates and strict HOA rules, plus large newer homes in Seven Hills and Inspirada with big kitchens and multiple bathrooms. Hard water shows up on glass and chrome, and desert dust builds up quickly on tile floors.",
    faq: {
      q: "Do you clean in gated Henderson communities like Anthem or Seven Hills?",
      a: "Yes. Share your gate code, guest-list process, or HOA rules when you request a quote so your cleaner arrives without delays.",
    },
    nearby: ["green-valley", "las-vegas", "boulder-city", "paradise"],
  },
  summerlin: {
    areas: ["The Vistas", "The Ridges", "Red Rock Country Club", "Sun City Summerlin", "Downtown Summerlin", "Canyon Gate area"],
    detail:
      "Summerlin covers a big master-planned area of villages, golf-course homes, and guard-gated communities near Red Rock Canyon. Larger floor plans, tile floors, and outdoor living spaces are common, and desert dust and hard water build up on stone counters and shower glass.",
    faq: {
      q: "Can you clean large homes with several bathrooms and tile floors in Summerlin?",
      a: "Yes. Tell us the number of bedrooms and bathrooms and any specialty surfaces such as natural stone so we schedule enough time for the visit.",
    },
    nearby: ["las-vegas", "spring-valley", "centennial-hills", "north-las-vegas"],
  },
  "north-las-vegas": {
    areas: ["Aliante", "Eldorado", "Centennial Hills border", "Craig Ranch area", "Lake Mead Boulevard corridor", "Nellis area"],
    detail:
      "North Las Vegas has a mix of established neighborhoods, newer subdivisions such as Aliante, and apartments along the Craig Road and Lake Mead corridors. Newer homes tend to have larger kitchens and two-story layouts.",
    faq: {
      q: "Do you offer move-in or move-out cleaning for North Las Vegas rentals?",
      a: "Yes. Send your move date and unit size and we will confirm scope. See our move-in / move-out page for what a deposit-focused clean covers.",
    },
    nearby: ["las-vegas", "centennial-hills", "sunrise-manor", "summerlin"],
  },
  paradise: {
    areas: ["Las Vegas Strip corridor", "Sunrise Manor border", "Flamingo and Paradise Road area", "UNLV area", "Harmon corridor", "Convention Center area"],
    detail:
      "Paradise is the unincorporated area that includes the Strip, UNLV, and many condo towers and apartment complexes. Short-term rentals and student housing are common, so turnover cleans and quick reset visits are a large part of what people ask for.",
    faq: {
      q: "Do you handle turnover cleans for condos and Airbnb units near the Strip and UNLV?",
      a: "Yes. Share the building access details and your check-out / check-in times on the quote form. See our Airbnb / STR page for what a turnover includes.",
    },
    nearby: ["las-vegas", "spring-valley", "sunrise-manor", "henderson", "enterprise"],
  },
  "spring-valley": {
    areas: ["Rainbow and Flamingo area", "Spring Valley Ranch", "Peccole Ranch (nearby)", "Durango Hills border", "Rhodes Ranch (nearby)", "Sahara West"],
    detail:
      "Spring Valley lies west of the Strip, with apartment communities, townhomes, and single-story homes that share walls and small yards. Many buildings have gated entries and limited visitor parking.",
    faq: {
      q: "How do you handle apartment gate access in Spring Valley?",
      a: "Share the gate code or call box instructions on the quote form. If visitors need to be on a list, tell us the name to use at the gate.",
    },
    nearby: ["summerlin", "las-vegas", "paradise", "enterprise"],
  },
  enterprise: {
    areas: ["Southern Highlands (nearby)", "Mountain's Edge (nearby)", "Rhodes Ranch", "Silverado Ranch", "South Las Vegas Boulevard corridor", "Southwest Las Vegas"],
    detail:
      "Enterprise is a newer southwest Valley area with recently built homes, larger tile floors, and open-plan kitchens. Fresh drywall and stucco dust can linger on surfaces, and hard water shows up quickly in showers.",
    faq: {
      q: "Can you deep clean a newly built home before we move in?",
      a: "We can do a move-in deep clean for everyday dust and film. Heavy construction debris may be outside our regular scope, so tell us the condition of the home and we will say honestly whether it fits.",
    },
    nearby: ["spring-valley", "paradise", "henderson", "las-vegas"],
  },
  "centennial-hills": {
    areas: ["Providence", "Skye Canyon", "Centennial Springs", "Aliante (nearby)", "Kyle Canyon Road", "Craig Road area"],
    detail:
      "Centennial Hills covers newer homes in Providence and Skye Canyon at the northwest edge of the Valley. Windy days push dust in, and large windows and tile floors show it fast.",
    faq: {
      q: "How often should I schedule cleanings in a newer home with a lot of dust?",
      a: "Many households choose bi-weekly visits for dust control and tile floors. We can start with a deep clean and set a recurring schedule based on how the home is used.",
    },
    nearby: ["north-las-vegas", "summerlin", "las-vegas"],
  },
  "green-valley": {
    areas: ["Green Valley Ranch", "Sunridge", "Calico Ridge", "Whitney Ranch", "Sun City Anthem (nearby)", "Eastgate area"],
    detail:
      "Green Valley is one of Henderson's older master-planned areas, with mature landscaping, established HOAs, and homes from the 1990s and 2000s. Older tile, grout lines, and shower glass collect hard-water film over years, which a deep clean targets.",
    faq: {
      q: "Is a deep clean worth it before switching to recurring visits in an older home?",
      a: "Usually yes. A first deep clean resets bathrooms, grout, and baseboards so recurring visits can stay at maintenance level.",
    },
    nearby: ["henderson", "whitney", "sunrise-manor", "boulder-city"],
  },
  whitney: {
    areas: ["Boulder Highway corridor", "Nellis Boulevard area", "East Tropicana Avenue"],
    detail:
      "Whitney is on the east side of the Valley near Boulder Highway, with older single-story homes, small yards, and apartment communities. Older evaporative coolers and dust from open lots add to what settles indoors.",
    faq: {
      q: "Can you clean homes with older evaporative coolers and heavy dust?",
      a: "Yes. Dust on sills, ceiling fans, and baseboards is a major focus. Tell us the home age and we will plan the right amount of time.",
    },
    nearby: ["sunrise-manor", "green-valley", "paradise", "henderson"],
  },
  "boulder-city": {
    areas: ["Historic Boulder City", "Lake Mead views", "Hemenway Valley", "Boulder Creek", "Railroad Pass area"],
    detail:
      "Boulder City is a small town southeast of Las Vegas with strict growth controls, a historic downtown, and quiet residential streets. It is a short drive from the main Valley, so we confirm timing when we book.",
    faq: {
      q: "How far ahead should I book in Boulder City?",
      a: "Boulder City is a short drive from the main Valley, so give us your preferred dates on the quote form and we will confirm availability when we call.",
    },
    nearby: ["henderson", "green-valley", "las-vegas"],
  },
  "sunrise-manor": {
    areas: ["Sunrise Mountain area", "Nellis Boulevard corridor", "Boulder Highway", "Las Vegas Boulevard North", "Nellis Air Force Base area"],
    detail:
      "Sunrise Manor is an unincorporated area on the east side of the Valley near Nellis Air Force Base. There is a wide mix of older single-family homes, mobile home communities, and apartments, and many households have pets and shift-work schedules.",
    faq: {
      q: "Do you clean homes near Nellis Air Force Base for military move-outs?",
      a: "Yes. Send your move date and tell us if you have an inspection deadline. See our move-in / move-out page for what a deposit-focused clean includes.",
    },
    nearby: ["north-las-vegas", "whitney", "paradise", "las-vegas"],
  },
  reno: {
    areas: ["Midtown", "Old Southwest", "Caughlin Ranch", "Somersett", "Damonte Ranch", "Northwest Reno"],
    detail:
      "Reno sits at about 4,500 feet in a dry high-desert climate. Dust, wildfire-smoke days, and winter road grit all end up indoors, and older Old Southwest homes have original wood floors and windows that need more hand detail than newer builds in Somersett or Damonte Ranch.",
    faq: {
      q: "Do you clean after wildfire-smoke days or winter road-salt season?",
      a: "Yes. Smoke and grit settle on window sills, floors, and vents. Ask for a deep clean after heavy smoke periods and we will focus on those areas.",
    },
    nearby: ["sparks"],
  },
  sparks: {
    areas: ["Downtown Sparks", "Spanish Springs", "Wingfield Springs", "Sparks Marina area", "Sun Valley border", "Golden Eagle Regional Park area"],
    detail:
      "Sparks has a mix of older homes near Victorian Avenue and Downtown Sparks, newer subdivisions in Wingfield Springs and Spanish Springs, and industrial parks nearby. Dust from construction and the desert edge shows up on floors and window tracks.",
    faq: {
      q: "Do you serve Spanish Springs and outlying Sparks neighborhoods?",
      a: "Coverage depends on the address and schedule. Include your zip on the quote form and we will confirm when we call.",
    },
    nearby: ["reno"],
  },
  // ───────────────────────── Sacramento ─────────────────────────
  sacramento: {
    areas: ["Midtown", "East Sacramento", "Land Park", "Curtis Park", "Pocket-Greenhaven", "Natomas"],
    detail:
      "Sacramento has some of the oldest housing in the region: 1910s to 1930s Victorians and bungalows in Midtown, East Sacramento, and Curtis Park, alongside 1990s-2000s tract homes in Natomas. Older homes have original wood floors and windows, and summer heat plus valley dust settle on everything.",
    faq: {
      q: "Can you clean an older Midtown or East Sacramento home with original wood floors?",
      a: "Yes. We use floor-safe products and dust trim, windowsills, and built-ins by hand. Tell us the age of the home and any delicate surfaces when you request a quote.",
    },
    nearby: ["elk-grove", "roseville", "folsom"],
  },
  roseville: {
    areas: ["Highland Reserve", "Fiddyment Ranch", "Stoneridge", "Woodcreek", "Old Roseville", "Westpark"],
    detail:
      "Roseville is a suburb northeast of Sacramento made up of planned communities such as Fiddyment Ranch and Highland Reserve, with two-story homes, large kitchens, and many households with kids and pets. Gated communities and HOAs are common in newer areas.",
    faq: {
      q: "Do you offer bi-weekly cleaning for busy families in Roseville?",
      a: "Yes. Bi-weekly is the most common plan for families in this area. Request a quote with your preferred day and we will confirm availability.",
    },
    nearby: ["folsom", "sacramento", "elk-grove"],
  },
  "elk-grove": {
    areas: ["Laguna Ridge", "Old Town Elk Grove", "Laguna West", "Stonelake", "Franklin", "Four Winds"],
    detail:
      "Elk Grove has many newer planned neighborhoods such as Laguna Ridge and Laguna West, with two-story homes, three-car garages, and open kitchens. Valley dust and summer heat put a film on windows, and pets are common.",
    faq: {
      q: "Do you clean two-story homes with high ceilings and lots of windows in Elk Grove?",
      a: "Yes. Tell us the size and number of stories so we plan enough time. We include reachable interior windows in a deep clean.",
    },
    nearby: ["sacramento", "folsom", "roseville"],
  },
  folsom: {
    areas: ["Historic Folsom", "Empire Ranch", "Broadstone", "Lake Natoma area", "Russell Ranch", "Prairie Oaks"],
    detail:
      "Folsom has a Historic District with older homes, alongside newer planned communities such as Empire Ranch and Russell Ranch near Lake Natoma. Many households are active outdoors, so entryways, floors, and pet areas need attention.",
    faq: {
      q: "Do you clean homes near the Folsom lake trails where a lot of dirt and pet hair comes in?",
      a: "Yes. Floors, entryways, and pet areas get extra attention. Tell us about pets and trail traffic when you request a quote.",
    },
    nearby: ["roseville", "sacramento", "elk-grove"],
  },
};
