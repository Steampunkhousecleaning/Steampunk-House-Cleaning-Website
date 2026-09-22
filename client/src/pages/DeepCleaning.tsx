/**
 * DeepCleaning.tsx — /deep-cleaning
 * Design: Navy + Sky Blue + Teal CTA + White bg
 * CRO focus: Overwhelm-to-order reset, first-timer framing, seasonal hook
 * Target: First-time hire, overwhelmed homeowner, seasonal refresh, STR host
 */

import { Navbar, Footer } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import {
  CheckCircle,
  Star,
  Shield,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const SKY = "#72B5D3";
const ICE = "#B5E1F2";

const checklist = {
  "Kitchen (Extended)": [
    "Clean inside oven, including racks and grates",
    "Clean inside microwave",
    "Clean inside refrigerator (shelves and drawers)",
    "Degrease stovetop and range hood",
    "Clean inside cabinets and drawers",
    "Sanitize trash can",
    "All standard kitchen tasks included",
  ],
  "Bathrooms (Extended)": [
    "Scrub tile grout",
    "Clean shower door tracks",
    "Wipe down exhaust fans",
    "Clean baseboards in bathrooms",
    "Remove soap scum and mineral deposits",
    "All standard bathroom tasks included",
  ],
  "Living Areas / Bedrooms (Extended)": [
    "Wipe baseboards throughout entire home",
    "Dust ceiling fans and light fixtures",
    "Wipe window sills, ledges, and tracks",
    "Clean interior windows from inside",
    "Dust blinds and window treatments",
    "Move and clean under furniture where accessible",
  ],
  "Additional (Deep Only)": [
    "Wipe door frames and door interiors",
    "Dust vents and registers",
    "Clean light fixture exteriors",
    "Spot-clean walls where visible marks present",
    "Vacuum all closets including shelving",
  ],
};

const faqs = [
  {
    q: "When should I book a deep clean vs. a standard clean?",
    a: "Book a deep clean if: you're hiring a cleaning service for the first time, you haven't had a professional clean in 3+ months, you're doing a seasonal refresh, you're preparing for guests or a special event, or you're an STR host refreshing between long-stay guests. After a deep clean, most clients switch to recurring standard cleaning to maintain the standard.",
  },
  {
    q: "Do I need to empty the fridge and oven before the clean?",
    a: "For the oven, please remove any large debris or burnt food beforehand. For the refrigerator, remove all food items so the cleaner can wipe down all shelves and drawers properly. We'll let you know exactly what to prepare when we confirm your booking.",
  },
  {
    q: "How long does a deep clean take?",
    a: "Typically 4–6 hours for a 2–3 bedroom home, depending on condition and size. We'll give you a more accurate time estimate on your quote call.",
  },
  {
    q: "Is interior window cleaning included in a deep clean?",
    a: "Yes. Interior windows (from inside the home) are included in the deep clean as standard. Exterior windows are a separate add-on.",
  },
  {
    q: "Do I need to be home?",
    a: "No. Most clients give us a key, lockbox code, or door code. You can go about your day and come home to a completely reset home.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "We come back and make it right. No questions asked. Call us and we'll fix anything that doesn't meet the standard.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: "1px solid #e8edf2" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: NAVY,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.4,
              }}
            >
              {faq.q}
            </span>
            {open === i ? (
              <ChevronUp size={20} style={{ color: TEAL, flexShrink: 0 }} />
            ) : (
              <ChevronDown size={20} style={{ color: SKY, flexShrink: 0 }} />
            )}
          </button>
          {open === i && (
            <div
              style={{
                paddingBottom: 18,
                fontSize: 15,
                color: "#5a6e80",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.7,
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function DeepCleaning() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Deep Cleaning Services | Steampunk House Cleaning"
        description="Thorough deep cleaning for homes in LA/OC, Nevada, and Sacramento. Baseboards, appliances, detailed bathrooms, and more. Book your free quote."
        path="/deep-cleaning"
      />

      {/* Hero */}
      <section
        className="hero-pt"
        style={{
          paddingBottom: 40,
          background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)",
          borderBottom: "1px solid #dde9f2",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="hero-grid">
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  backgroundColor: ICE,
                  color: NAVY,
                  padding: "5px 14px",
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Sparkles size={12} />
                Best for First-Timers
              </div>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: NAVY,
                  lineHeight: 1.15,
                  marginBottom: 20,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                The complete reset{" "}
                <span style={{ color: TEAL }}>your home has been waiting for.</span>
              </h1>
              <p
                style={{
                  fontSize: 18,
                  color: "#4a5e6e",
                  lineHeight: 1.7,
                  marginBottom: 28,
                  fontFamily: "'DM Sans', sans-serif",
                  maxWidth: 520,
                }}
              >
                This is where overwhelm turns into order. Inside appliances, baseboards, grout, behind fixtures — every corner, every surface, documented. This is where the mess stops.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                {[
                  { icon: <Shield size={15} />, text: "Google Guaranteed" },
                  { icon: <Star size={15} fill={TEAL} />, text: "4.9 Stars / 370+ Reviews" },
                  { icon: <CheckCircle size={15} />, text: "40-Point Checklist" },
                  { icon: <Clock size={15} />, text: "We Call Within Minutes" },
                ].map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      backgroundColor: "#fff",
                      border: "1.5px solid #dde9f2",
                      borderRadius: 8,
                      padding: "7px 13px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: NAVY,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <span style={{ color: TEAL }}>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>

              {/* Quote anchor */}
              <div
                style={{
                  backgroundColor: "#fff",
                  border: "1.5px solid #dde9f2",
                  borderRadius: 10,
                  padding: "16px 20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 13, color: "#8a9baa", fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>
                    Free quote, no obligation
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Takes 2 minutes
                  </div>
                </div>
                <div style={{ width: 1, height: 40, backgroundColor: "#dde9f2" }} />
                <div style={{ fontSize: 13, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", maxWidth: 160, lineHeight: 1.5 }}>
                  Full reset, any size home. Priced to yours.
                </div>
              </div>
            </div>

            {/* Form */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: "28px 24px",
                boxShadow: "0 8px 40px rgba(61,82,102,0.12)",
                border: "1px solid #dde9f2",
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Get your free quote
              </h3>
              <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
                Takes 2 minutes. We'll call you right away.
              </p>
              <QuoteForm defaultService="Deep Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* Permission slip style section */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: TEAL, marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>
            The honest truth
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16, lineHeight: 1.3 }}>
            Your home didn't get this way overnight. It doesn't have to stay this way either.
          </h2>
          <p style={{ fontSize: 17, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 20, maxWidth: 620, margin: "0 auto 20px" }}>
            Life gets busy. The oven gets ignored. The grout gets darker. The baseboards collect dust you stopped noticing. A deep clean isn't a luxury — it's a reset. One afternoon, and your home feels like itself again.
          </p>
          <div
            style={{
              backgroundColor: "#f7fbff",
              border: "1.5px solid " + ICE,
              borderLeft: "4px solid " + TEAL,
              borderRadius: 10,
              padding: "18px 22px",
              textAlign: "left",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            <p style={{ fontSize: 15, color: "#3a4e5e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, fontStyle: "italic", marginBottom: 8 }}>
              "I was skeptical because I've been burned before. But they were on time, thorough, and the communication was excellent. My kitchen looked brand new. Already booked my next clean."
            </p>
            <p style={{ fontSize: 13, fontWeight: 700, color: NAVY, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
              Amanda K., Sacramento, CA — Deep Cleaning
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>
              Everything included in a deep clean
            </h2>
            <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", maxWidth: 520, margin: "0 auto" }}>
              Everything in standard cleaning, plus every corner your regular clean doesn't reach.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {Object.entries(checklist).map(([room, items]) => (
              <div
                key={room}
                style={{
                  backgroundColor: "#fff",
                  border: "1.5px solid #dde9f2",
                  borderRadius: 12,
                  padding: "20px 22px",
                }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 800, color: NAVY, marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {room}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {items.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8, fontSize: 13.5, color: "#4a5e6e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                      <CheckCircle size={14} style={{ color: TEAL, flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep vs Standard comparison */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Deep clean vs. standard clean
            </h2>
          </div>
          <div className="grid-2col" style={{ gap: "1.5rem" }}>
            {[
              {
                title: "Start here: Deep Clean",
                subtitle: "The full reset",
                badge: "Recommended first",
                badgeColor: TEAL,
                items: ["Inside appliances", "Baseboards and grout", "Interior windows", "Behind fixtures", "Full reset of every room"],
                cta: "Book a Deep Clean",
                href: "/get-a-quote?service=Deep%20Cleaning",
                highlight: true,
              },
              {
                title: "Then maintain: Standard Clean",
                subtitle: "Ongoing upkeep",
                badge: "Most popular ongoing",
                badgeColor: SKY,
                items: ["All major surfaces", "Bathrooms and kitchen", "Floors and vacuuming", "High-touch sanitization", "Same checklist every visit"],
                cta: "Learn About Standard",
                href: "/standard-cleaning",
                highlight: false,
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: card.highlight ? "#f0faf8" : "#f7fbff",
                  border: `2px solid ${card.highlight ? TEAL : "#dde9f2"}`,
                  borderRadius: 14,
                  padding: "22px 24px",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: card.badgeColor, marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>
                  {card.badge}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {card.title}
                </h3>
                <div style={{ fontSize: 20, fontWeight: 800, color: card.highlight ? TEAL : NAVY, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {card.subtitle}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                  {card.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, fontSize: 14, color: "#4a5e6e", fontFamily: "'DM Sans', sans-serif" }}>
                      <CheckCircle size={14} style={{ color: card.highlight ? TEAL : SKY, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: card.highlight ? TEAL : "transparent",
                    color: card.highlight ? "#fff" : NAVY,
                    border: `2px solid ${card.highlight ? TEAL : "#dde9f2"}`,
                    padding: "11px 20px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Common questions
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "40px 0", backgroundColor: NAVY }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}
          className="cta-grid"
        >
          <div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16, lineHeight: 1.2 }}>
              Book your reset.{" "}
              <span style={{ color: TEAL, fontStyle: "italic" }}>Feel the difference.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
              One deep clean and your home feels like itself again. Takes 2 minutes to get a quote. We'll call you right away.
            </p>
            <a href="tel:7252553688" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: TEAL, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
              Or call us directly: (725) 255-3688
            </a>
          </div>
          <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Get your free quote
            </h3>
            <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
              Takes 2 minutes. We'll call you right away.
            </p>
            <QuoteForm defaultService="Deep Cleaning" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
