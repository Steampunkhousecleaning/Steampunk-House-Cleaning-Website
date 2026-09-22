/**
 * CleaningChecklist.tsx — /cleaning-checklist
 * Cobalt-style "what's included" page for residential cleaning.
 * Content aligned with StandardCleaning / DeepCleaning checklists already on the site.
 */

import { Link } from "wouter";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ClipboardList,
  Phone,
  Sparkles,
} from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

const STANDARD = {
  "All Rooms": [
    "Dust all surfaces, furniture, shelves, and decor",
    "Vacuum all floors and area rugs",
    "Mop all hard floors",
    "Empty and reline trash bins",
    "Wipe light switches and door handles",
    "Surface sanitization throughout",
  ],
  Kitchen: [
    "Wipe and sanitize all countertops",
    "Clean exterior of all appliances",
    "Scrub and degrease stovetop surface",
    "Scrub and sanitize sink and faucet",
    "Wipe cabinet exteriors",
  ],
  Bathrooms: [
    "Scrub and disinfect toilet (bowl, exterior, base)",
    "Clean and scrub shower and tub",
    "Wipe vanity, sink, and countertops",
    "Clean mirrors streak-free",
    "Polish chrome fixtures",
  ],
  Bedrooms: [
    "Dust furniture and all surfaces",
    "Vacuum floors and rugs",
    "Make beds (if linens are out)",
    "Wipe nightstands and accessible surfaces",
  ],
};

const DEEP_EXTRA = {
  "Kitchen extras": [
    "Clean inside oven, including racks and grates",
    "Clean inside microwave",
    "Clean inside refrigerator (shelves and drawers)",
    "Degrease range hood",
    "Clean inside cabinets and drawers",
    "Sanitize trash can",
  ],
  "Bathroom extras": [
    "Scrub tile grout",
    "Clean shower door tracks",
    "Wipe down exhaust fans",
    "Clean bathroom baseboards",
    "Remove soap scum and mineral deposits",
  ],
  "Whole-home extras": [
    "Wipe baseboards throughout",
    "Dust ceiling fans and light fixtures",
    "Wipe window sills, ledges, and tracks",
    "Clean interior windows from inside",
    "Dust blinds and window treatments",
    "Move and clean under furniture where accessible",
    "Wipe door frames and door interiors",
    "Dust vents and registers",
    "Spot-clean walls where marks are visible",
    "Vacuum closets including shelving",
  ],
};

const NOT_STANDARD = [
  "Inside oven, refrigerator, or cabinets (deep clean)",
  "Interior windows (deep clean)",
  "Baseboards and walls (deep clean)",
  "Laundry or dishes",
  "Exterior windows",
  "Garage, patio, or outdoor areas (ask about add-ons)",
];

function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1.5px solid #dde9f2",
        borderRadius: 12,
        padding: "20px 18px",
      }}
    >
      <h3
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: NAVY,
          marginBottom: 12,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              marginBottom: 8,
              fontSize: 13.5,
              color: "#4a5e6e",
              lineHeight: 1.5,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <CheckCircle size={15} style={{ color: TEAL, flexShrink: 0, marginTop: 2 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CleaningChecklist() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Cleaning Checklist | What's Included | Steampunk House Cleaning"
        description="See exactly what's included in Steampunk standard and deep residential cleaning — rooms, kitchens, bathrooms, and what is not covered. Serving LA/OC, Las Vegas, and Sacramento."
        path="/cleaning-checklist"
      />

      <section
        className="hero-pt"
        style={{
          paddingBottom: 40,
          background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)",
          borderBottom: "1px solid #dde9f2",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
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
            <ClipboardList size={12} />
            What&apos;s included
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.15,
              marginBottom: 16,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Residential cleaning{" "}
            <span style={{ color: TEAL }}>checklist</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#4a5e6e",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto 20px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Honest scope for homes in LA / OC, Las Vegas / Nevada, and Sacramento. Standard
            cleans keep your home maintained; deep cleans add the detailing most first-time
            clients need. Same checklist language we use on our service pages.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            <Link
              href="/get-a-quote"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                backgroundColor: TEAL,
                color: "#fff",
                padding: "12px 20px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Get a free quote <ArrowRight size={14} />
            </Link>
            <Link
              href="/standard-cleaning"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                backgroundColor: "#fff",
                color: NAVY,
                padding: "12px 20px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                border: "1.5px solid #dde9f2",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Standard cleaning
            </Link>
            <Link
              href="/deep-cleaning"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                backgroundColor: "#fff",
                color: NAVY,
                padding: "12px 20px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                border: "1.5px solid #dde9f2",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Deep cleaning
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0 24px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 28, textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: TEAL,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 10,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <Sparkles size={12} /> Standard clean
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: NAVY,
                marginBottom: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Included in every standard visit
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#5a6e80",
                maxWidth: 560,
                margin: "0 auto",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Documented room-by-room work — the same baseline we use for recurring maintenance.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {Object.entries(STANDARD).map(([room, items]) => (
              <ChecklistCard key={room} title={room} items={items} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 28, textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: TEAL,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 10,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Deep clean extras
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: NAVY,
                marginBottom: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Added on a deep clean
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#5a6e80",
                maxWidth: 600,
                margin: "0 auto",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Everything in standard, plus interiors, baseboards, and detail work. First-time
              clients often start here.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {Object.entries(DEEP_EXTRA).map(([room, items]) => (
              <ChecklistCard key={room} title={room} items={items} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              backgroundColor: "#fff8f5",
              border: "1.5px solid #f0dcd0",
              borderRadius: 12,
              padding: "22px 20px",
            }}
          >
            <h2
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: NAVY,
                marginBottom: 12,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Not included in a standard clean
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
              {NOT_STANDARD.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    marginBottom: 8,
                    fontSize: 14,
                    color: "#5a6e80",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <XCircle size={15} style={{ color: "#c4785a", flexShrink: 0, marginTop: 2 }} />
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: 14,
                color: "#5a6e80",
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Need move-out, Airbnb turnover, or commercial? See{" "}
              <Link href="/move-in-move-out" style={{ color: TEAL, fontWeight: 600 }}>
                move-in / move-out
              </Link>
              ,{" "}
              <Link href="/airbnb-cleaning" style={{ color: TEAL, fontWeight: 600 }}>
                Airbnb cleaning
              </Link>
              , or{" "}
              <Link href="/commercial-cleaning" style={{ color: TEAL, fontWeight: 600 }}>
                commercial
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "8px 0 48px", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          <Link href="/faq">
            <div
              style={{
                backgroundColor: "#f7fbff",
                border: "1.5px solid #dde9f2",
                borderRadius: 12,
                padding: 18,
                cursor: "pointer",
              }}
            >
              <h2
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: NAVY,
                  marginBottom: 6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                FAQ
              </h2>
              <p style={{ fontSize: 14, color: "#5a6e80", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                Standard vs deep, supplies, scheduling, and more.
              </p>
            </div>
          </Link>
          <Link href="/get-a-quote">
            <div
              style={{
                backgroundColor: "#f7fbff",
                border: "1.5px solid #dde9f2",
                borderRadius: 12,
                padding: 18,
                cursor: "pointer",
              }}
            >
              <h2
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: NAVY,
                  marginBottom: 6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Get a free quote <ArrowRight size={14} style={{ color: TEAL }} />
              </h2>
              <p style={{ fontSize: 14, color: "#5a6e80", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                Tell us your home size and service type — we confirm what&apos;s included on the call.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section style={{ padding: "40px 0", backgroundColor: NAVY }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Questions about scope?
          </h2>
          <a
            href="tel:7252553688"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#fff",
              fontSize: 18,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Phone size={18} style={{ color: TEAL }} />
            (725) 255-3688
          </a>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.65)",
              marginTop: 10,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Serving LA / OC · Las Vegas · Sacramento · Licensed · Bonded · Insured
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
