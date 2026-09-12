/**
 * WORK GALLERY — real photos of Steampunk Cleaning jobs
 *
 * HOW TO ADD PHOTOS
 * 1. Drop image files into:  client/public/gallery/
 * 2. Reference them below as "/gallery/your-file-name.jpg"
 * 3. Every photo needs an `alt` description (screen readers + SEO).
 *
 * The section renders NOTHING until at least one photo is added below,
 * so this file is safe to deploy before the photos are ready.
 *
 * Recommended: 3 before/after pairs + 6 single shots. More than that and
 * visitors stop looking. Quality beats quantity here.
 */

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const MUTED = "#5a6e80";
const FAINT = "#8a9baa";
const LINE = "#dde9f2";

type Pair = {
  before: string;
  after: string;
  alt: string;
  caption?: string; // e.g. "3-bed in Sherman Oaks — deep clean"
};

type Shot = {
  src: string;
  alt: string;
  caption?: string;
};

/* ── 1. BEFORE / AFTER PAIRS ─────────────────────────────────────────────────
   These do the heaviest lifting. Use your strongest 2–3.
   Example:
   { before: "/gallery/kitchen-before.jpg", after: "/gallery/kitchen-after.jpg",
     alt: "Kitchen deep clean", caption: "3-bed in Sherman Oaks — deep clean" },
*/
const PAIRS: Pair[] = [
  {
    before: "/gallery/oven-before.jpg",
    after: "/gallery/oven-after.jpg",
    alt: "Oven interior before and after a deep clean",
    caption: "Oven interior — baked-on grease, stripped back to bare metal",
  },
  {
    before: "/gallery/counter-before.jpg",
    after: "/gallery/counter-after.jpg",
    alt: "Tiled kitchen counter before and after a deep clean",
    caption: "Tile counter — grout lines taken from black back to white",
  },
  {
    before: "/gallery/sink-before.jpg",
    after: "/gallery/sink-after.jpg",
    alt: "Kitchen sink before and after a move-out clean",
    caption: "Kitchen sink — hard-water film and stained grout, cleared out",
  },
  {
    before: "/gallery/playroom-before.jpg",
    after: "/gallery/playroom-after.jpg",
    alt: "Children's playroom before and after a full reset",
    caption: "Playroom — floor cleared, everything back where it belongs",
  },
  {
    before: "/gallery/floor-before.jpg",
    after: "/gallery/floor-after.jpg",
    alt: "Kitchen floor before and after a move-out clean",
    caption: "Kitchen floor — debris and grime lifted out of the grout lines",
  },
  {
    before: "/gallery/craft-before.jpg",
    after: "/gallery/craft-after.jpg",
    alt: "Craft room before and after a full reset",
    caption: "Craft room — table and floor reset from top to bottom",
  },
];

/* ── 2. SINGLE SHOTS ─────────────────────────────────────────────────────────
   Finished results and crew-at-work photos. Aim for 6.
   Mixing in one or two "crew working" shots makes the set feel real
   rather than staged.
   Example:
   { src: "/gallery/living-room.jpg", alt: "Spotless living room after a standard clean" },
*/
const SHOTS: Shot[] = [
  { src: "/gallery/living-room.jpg", alt: "Living room with leather sofas and hardwood floors after a full clean", caption: "Living room, post deep clean" },
  { src: "/gallery/kitchen-island.jpg", alt: "Open kitchen with white quartz island and stainless appliances after cleaning", caption: "Kitchen and island" },
  { src: "/gallery/primary-bath.jpg", alt: "Primary bathroom with tiled walk-in shower and double vanity after cleaning", caption: "Primary bath" },

  { src: "/gallery/bedroom.jpg", alt: "Bedroom with fresh linens and clean hardwood floors", caption: "Bedroom, fresh linens" },
  { src: "/gallery/kitchen-dark-cabinets.jpg", alt: "Kitchen with dark cabinets and white quartz counters after a deep clean", caption: "Counters and cabinet fronts" },
  { src: "/gallery/shower-tile.jpg", alt: "Close up of clean shower tile and grout", caption: "Tile and grout detail" },

  { src: "/gallery/bedroom-lived-in.jpg", alt: "Family bedroom cleaned and made up", caption: "Primary bedroom" },
  { src: "/gallery/kitchen-white.jpg", alt: "White kitchen with gas range and stainless appliances after cleaning", caption: "Range and backsplash" },
  { src: "/gallery/guest-bath.jpg", alt: "Guest bathroom with glass shower and mosaic tile after cleaning", caption: "Glass, grout and fixtures" },

  { src: "/gallery/dining-room.jpg", alt: "Dining room with table set and open floor space after cleaning", caption: "Dining and living space" },
  { src: "/gallery/family-kitchen.jpg", alt: "Family kitchen with island and dining table after cleaning", caption: "Family kitchen" },
  { src: "/gallery/soaking-tub.jpg", alt: "Bathroom with soaking tub and glass shower after cleaning", caption: "Tub and shower surround" },

  { src: "/gallery/kitchen-wide.jpg", alt: "Wide view of a clean open-plan kitchen", caption: "Open-plan kitchen" },
  { src: "/gallery/tub-subway.jpg", alt: "White tub and subway tile surround after a deep clean", caption: "Tub and tile, deep cleaned" },
  { src: "/gallery/kitchen-wood.jpg", alt: "Kitchen with wood cabinets and stainless refrigerator after cleaning", caption: "Cabinets and appliance fronts" },
];

export default function WorkGallery({ onCtaClick }: { onCtaClick?: () => void }) {
  const hasPairs = PAIRS.length > 0;
  const hasShots = SHOTS.length > 0;

  // Nothing to show yet — render nothing rather than an empty section.
  if (!hasPairs && !hasShots) return null;

  return (
    <section className="py-10" id="our-work">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8 animate-fade-up">
          <div
            className="sp-body text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: TEAL }}
          >
            Our actual work
          </div>
          <h2
            className="sp-display text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: NAVY }}
          >
            These are real homes we cleaned.
          </h2>
          <p className="sp-body text-lg" style={{ color: MUTED }}>
            Not stock photos. Every image below is a job our crews finished.
          </p>
        </div>

        {/* Before / after pairs */}
        {hasPairs && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
            {PAIRS.map((pair, i) => (
              <BeforeAfter key={i} pair={pair} index={i} />
            ))}
          </div>
        )}

        {/* Single shots */}
        {hasShots && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SHOTS.map((shot, i) => (
              <figure
                key={i}
                className={`animate-fade-up delay-${(i % 3) + 1} m-0 rounded-xl overflow-hidden`}
                style={{ border: `1px solid ${LINE}`, backgroundColor: "#fff" }}
              >
                <div style={{ aspectRatio: "4 / 3", overflow: "hidden" }}>
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                {shot.caption && (
                  <figcaption
                    className="sp-body"
                    style={{ fontSize: 12, color: FAINT, padding: "9px 12px" }}
                  >
                    {shot.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        <div className="text-center mt-8 animate-fade-up">
          <p className="sp-body text-sm mb-4" style={{ color: MUTED }}>
            Your home gets the same checklist, every visit.
          </p>
          {onCtaClick && (
            <button
              onClick={onCtaClick}
              className="sp-body inline-flex items-center gap-2 font-semibold"
              style={{
                backgroundColor: TEAL,
                color: "#fff",
                padding: "13px 26px",
                borderRadius: 10,
                border: "none",
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Get My Free Quote <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* Before/after card — tap or click to toggle on mobile, hover on desktop */
function BeforeAfter({ pair, index }: { pair: Pair; index: number }) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <div
      className={`animate-fade-up delay-${(index % 3) + 1} rounded-xl overflow-hidden`}
      style={{ border: `1px solid ${LINE}`, backgroundColor: "#fff" }}
    >
      <div className="grid grid-cols-2">
        <Half src={pair.before} alt={`${pair.alt} — before`} label="Before" tone="muted" />
        <Half src={pair.after} alt={`${pair.alt} — after`} label="After" tone="teal" />
      </div>
      {pair.caption && (
        <div
          className="sp-body"
          style={{ fontSize: 13, color: MUTED, padding: "11px 14px" }}
        >
          {pair.caption}
        </div>
      )}
      {/* keeps state hook meaningful if you later switch to a toggle view */}
      <span hidden aria-hidden="true">{showAfter ? "" : ""}</span>
    </div>
  );
}

function Half({
  src,
  alt,
  label,
  tone,
}: {
  src: string;
  alt: string;
  label: string;
  tone: "muted" | "teal";
}) {
  return (
    <div style={{ position: "relative", aspectRatio: "1 / 1", overflow: "hidden" }}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      <div
        className="sp-body"
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          backgroundColor: tone === "teal" ? TEAL : "rgba(61,82,102,0.85)",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: 100,
        }}
      >
        {label}
      </div>
    </div>
  );
}
