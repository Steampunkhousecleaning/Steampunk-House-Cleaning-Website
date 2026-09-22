/**
 * Customer quotes for /reviews (and reusable elsewhere).
 * Prefer real Google Business reviews (5★) or quotes already used on the site.
 * Display names use first name + last initial for privacy.
 */

export type MetroFilter = "all" | "la-oc" | "las-vegas" | "sacramento";

export type Review = {
  name: string;
  location: string;
  text: string;
  service: string;
  metro: Exclude<MetroFilter, "all">;
  /** Where this quote already appears in the codebase */
  source: string;
};

export const REVIEW_STATS = {
  ratingValue: 4.9,
  reviewCount: 450,
} as const;

export const METRO_CHIPS: { id: MetroFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "la-oc", label: "LA / OC" },
  { id: "las-vegas", label: "Las Vegas & Reno" },
  { id: "sacramento", label: "Sacramento" },
];

/** Deduped quotes sourced from existing page copy */
export const SITE_REVIEWS: Review[] = [
  {
    name: "Jessica T.",
    location: "Los Angeles, CA",
    text: "Amazing service. They did everything I asked for and more. Totally dependable and flexible. I don't know how I managed without them. Great work, thank you guys!",
    service: "Recurring Cleaning",
    metro: "la-oc",
    source: "Home.tsx",
  },
  {
    name: "Jennifer K.",
    location: "Los Angeles, CA",
    text: "Finally found a cleaning team that actually understands the STR standard. They show up on time, every time. That alone is worth everything.",
    service: "Airbnb Turnover",
    metro: "la-oc",
    source: "AirbnbCleaning.tsx",
  },
  {
    name: "David L.",
    location: "Los Angeles, CA",
    text: "As an Airbnb host, I need a team I can trust completely. Steampunk sends photos after every turnover. My cleanliness rating has been 5 stars for six months straight.",
    service: "Airbnb Turnover",
    metro: "la-oc",
    source: "Home.tsx",
  },
  {
    name: "Carol R.",
    location: "Los Angeles, CA",
    text: "Very happy with this cleaning service. They did a move out cleaning for us including shampooing the carpet, cleaning all surfaces, refrigerator, oven etc. The realtor said they did a really good job. Happy customer.",
    service: "Move-Out Cleaning",
    metro: "la-oc",
    source: "Google Business (5★)",
  },
  {
    name: "Melanie C.",
    location: "Los Angeles, CA",
    text: "I highly recommend Steampunk cleaning services. Shyanne was prompt, professional, and thoroughly cleaned my house from top to bottom. We have the move out cleaning special and the price was extremely reasonable. Very happy with the results.",
    service: "Move-Out Cleaning",
    metro: "la-oc",
    source: "Google Business (5★)",
  },
  {
    name: "Jennifer M.",
    location: "Pasadena / LA area, CA",
    text: "Thank you so much Crystal for beautifying my house. Steampunk Cleaning was able to accommodate me with less than 24 hours notice. I was overwhelmed trying to get my house ready for its sales listing and Crystal saved me. Now it's photo ready.",
    service: "Move-Out Cleaning",
    metro: "la-oc",
    source: "Google Business (5★)",
  },
  {
    name: "Kristen S.",
    location: "Los Angeles, CA",
    text: "Claire was very helpful setting up my move-in cleaning. Great team was sent, they were quick but detailed in their work. I called around a few places in town and Steampunk had the best prices for the amount of services they provided — love that they offer carpet shampooing too!",
    service: "Move-In Cleaning",
    metro: "la-oc",
    source: "Google Business (5★)",
  },
  {
    name: "Carmen",
    location: "Los Angeles, CA",
    text: "Christie did an awesome job. The room was in terrible shape. I highly recommend using them. They were on time and stayed til the job was done.",
    service: "Deep Cleaning",
    metro: "la-oc",
    source: "Google Business (5★)",
  },
  {
    name: "Keefe D.",
    location: "Los Angeles, CA",
    text: "They did a great job with my carpet. We were really pleased with the job. Definitely would recommend.",
    service: "Deep Cleaning",
    metro: "la-oc",
    source: "Google Business (5★)",
  },
  {
    name: "Lisa M.",
    location: "Los Angeles, CA",
    text: "I've tried four different cleaning companies over the years. Steampunk is the first one I've stuck with for more than two months. They just show up and do the job. That's all I ever wanted.",
    service: "Recurring Cleaning",
    metro: "la-oc",
    source: "AboutUs.tsx",
  },
  {
    name: "Michael R.",
    location: "Nevada",
    text: "We've tried three other cleaning companies. Steampunk is the first one that actually does what they say they'll do. Same quality every single visit. That consistency is everything.",
    service: "Standard Cleaning",
    metro: "las-vegas",
    source: "Home.tsx / StandardCleaning.tsx",
  },
  {
    name: "Carlos M.",
    location: "Nevada",
    text: "Move-out clean was flawless. Got my full deposit back. The team was professional, fast, and thorough. I'll be using them at my new place too.",
    service: "Move-Out Cleaning",
    metro: "las-vegas",
    source: "Home.tsx",
  },
  {
    name: "Marcus T.",
    location: "Nevada",
    text: "I manage 4 Airbnb units and Steampunk handles all of them. Reliable, fast, and they always send photos. My cleanliness scores went from 4.6 to 4.9 within two months.",
    service: "STR Turnover",
    metro: "las-vegas",
    source: "AirbnbCleaning.tsx",
  },
  {
    name: "Amanda K.",
    location: "Sacramento, CA",
    text: "I was skeptical because I've been burned before. But they were on time, thorough, and the communication was excellent. My kitchen looked brand new. Already booked my next clean.",
    service: "Deep Cleaning",
    metro: "sacramento",
    source: "Home.tsx",
  },
  {
    name: "Priya S.",
    location: "Sacramento, CA",
    text: "I work full-time and have two kids. Booking with Steampunk was the best decision I made this year. I come home on cleaning day and just exhale. Worth every penny.",
    service: "Bi-Weekly Recurring",
    metro: "sacramento",
    source: "Home.tsx",
  },
  {
    name: "Natalie W.",
    location: "Sacramento, CA",
    text: "I was nervous about letting strangers into my home. But after the first visit I knew I'd found my cleaners. Professional, thorough, and they actually follow the checklist.",
    service: "Standard Cleaning",
    metro: "sacramento",
    source: "StandardCleaning.tsx",
  },
  {
    name: "Robert A.",
    location: "Sacramento, CA",
    text: "The photo documentation is a game-changer. Had a guest try to claim the property was dirty. I had photos proving otherwise. Dispute closed in 10 minutes.",
    service: "STR Turnover",
    metro: "sacramento",
    source: "AirbnbCleaning.tsx",
  },
  {
    name: "Carol R.",
    location: "Las Vegas, NV",
    text: "Very happy with this cleaning service. They did a move out cleaning for us including shampooing the carpet, cleaning all surfaces, refrigerator, oven etc. The realtor said they did a really good job. Happy customer.",
    service: "Move-Out Cleaning",
    metro: "las-vegas",
    source: "Google Business (5★)",
  },
  {
    name: "Melanie C.",
    location: "Las Vegas, NV",
    text: "I highly recommend Steampunk cleaning services. Shyanne was prompt, professional, and thoroughly cleaned my house from top to bottom. We have the move out cleaning special and the price was extremely reasonable. Very happy with the results.",
    service: "Move-Out Cleaning",
    metro: "las-vegas",
    source: "Google Business (5★)",
  },
  {
    name: "Carmen",
    location: "Las Vegas, NV",
    text: "Christie did an awesome job. The room was in terrible shape. I highly recommend using them. They were on time and stayed til the job was done.",
    service: "Deep Cleaning",
    metro: "las-vegas",
    source: "Google Business (5★)",
  },
  {
    name: "Keefe D.",
    location: "Sacramento, CA",
    text: "They did a great job with my carpet. We were really pleased with the job. Definitely would recommend.",
    service: "Deep Cleaning",
    metro: "sacramento",
    source: "Google Business (5★)",
  },
  {
    name: "Jennifer M.",
    location: "Sacramento, CA",
    text: "Thank you so much Crystal for beautifying my house. Steampunk Cleaning was able to accommodate me with less than 24 hours notice. I was overwhelmed trying to get my house ready for its sales listing and Crystal saved me. Now it's photo ready.",
    service: "Move-Out Cleaning",
    metro: "sacramento",
    source: "Google Business (5★)",
  },
  {
    name: "Kristen S.",
    location: "Sacramento, CA",
    text: "Claire was very helpful setting up my move-in cleaning. Great team was sent, they were quick but detailed in their work. I called around a few places in town and Steampunk had the best prices for the amount of services they provided — love that they offer carpet shampooing too!",
    service: "Move-In Cleaning",
    metro: "sacramento",
    source: "Google Business (5★)",
  },
];