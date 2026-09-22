/**
 * StandardCleaning.tsx — /standard-cleaning
 * Design: Navy (#3D5266) + Sky Blue (#72B5D3) + Teal CTA (#1A9E8F) + White bg
 * Font: Plus Jakarta Sans (headings) + DM Sans (body)
 * CRO focus: Reliability + consistency + trust anxiety relief
 * Target: First-time hire + bad-experience-elsewhere + recurring consideration
 */

import { Navbar, Footer } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import {
  CheckCircle,
  Star,
  Shield,
  Clock,
  Home,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { ServiceMetroLinks } from "@/components/ServiceMetroLinks";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const SKY = "#72B5D3";
const ICE = "#B5E1F2";

const checklist = {
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

const testimonials = [
  {
    quote:
      "We've tried three other cleaning companies. Steampunk is the first one that actually does what they say they'll do. Same quality every single visit. That consistency is everything.",
    name: "Michael R.",
    location: "Nevada",
    service: "Standard Cleaning",
    stars: 5,
  },
  {
    quote:
      "Amazing service. They did everything I asked for and more. Totally dependable and flexible. I don't know how I managed without them.",
    name: "Jessica T.",
    location: "Los Angeles, CA",
    service: "Recurring Cleaning",
    stars: 5,
  },
  {
    quote:
      "I was nervous about letting strangers into my home. But after the first visit I knew I'd found my cleaners. Professional, thorough, and they actually follow the checklist.",
    name: "Natalie W.",
    location: "Sacramento, CA",
    service: "Standard Cleaning",
    stars: 5,
  },
];

const faqs = [
  {
    q: "What's the difference between standard and deep cleaning?",
    a: "Standard cleaning covers all major surfaces, high-traffic areas, bathrooms, kitchen, and floors on a documented checklist. Deep cleaning goes further: inside appliances, baseboards, grout, behind fixtures. If you're booking for the first time or haven't had a professional clean in a while, we usually recommend starting with a deep clean.",
  },
  {
    q: "Do I need to be home during the clean?",
    a: "No. Most of our recurring clients give us a key, lockbox code, or door code. Your cleaner arrives, does the job to the documented checklist, and you come home to a clean house.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Yes. Every cleaner goes through a thorough interview and background check before they ever step into a client's home. We don't cut corners on vetting.",
  },
  {
    q: "What if I'm not happy with the clean?",
    a: "We come back and make it right. No questions asked. If something was missed or doesn't meet the standard, call us and we'll fix it.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes. All equipment and cleaning products are included. If you have specific preferences (eco-friendly, fragrance-free), let us know and we'll accommodate.",
  },
  {
    q: "How quickly can you get someone to my home?",
    a: "Typically within 1–3 business days. For urgent requests, call us directly at (725) 255-3688.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid #e8edf2",
            marginBottom: 0,
          }}
        >
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

export default function StandardCleaning() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Standard House Cleaning | Steampunk House Cleaning"
        description="Reliable standard house cleaning in LA/OC, Nevada, and Sacramento. Dusting, floors, kitchen, and baths — consistent every visit. Free quote."
        path="/standard-cleaning"
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
            {/* Left: copy */}
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
                <Star size={12} fill={NAVY} />
                Most Popular Service
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
                Your home, cleaned right.{" "}
                <span style={{ color: TEAL }}>Every single time.</span>
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
                Standard cleaning is the routine maintenance your home deserves. Same vetted cleaner, same documented checklist, same high standard on visit one and visit fifty. No guessing what "clean" means.
              </p>

              {/* Trust badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                {[
                  { icon: <Shield size={15} />, text: "Google Guaranteed" },
                  { icon: <Star size={15} fill={TEAL} />, text: "4.9 Stars / 450+ Reviews" },
                  { icon: <CheckCircle size={15} />, text: "Background-Checked" },
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
                  <div
                    style={{
                      fontSize: 13,
                      color: "#8a9baa",
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: 2,
                    }}
                  >
                    Free quote, no obligation
                  </div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: NAVY,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    Takes 2 minutes
                  </div>
                </div>
                <div
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: "#dde9f2",
                  }}
                />
                <div
                  style={{
                    fontSize: 13,
                    color: "#5a6e80",
                    fontFamily: "'DM Sans', sans-serif",
                    maxWidth: 160,
                    lineHeight: 1.5,
                  }}
                >
                  Priced to your home. No hidden fees.
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: "28px 24px",
                boxShadow: "0 8px 40px rgba(61,82,102,0.12)",
                border: "1px solid #dde9f2",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: NAVY,
                  marginBottom: 4,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Get your free quote
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#8a9baa",
                  marginBottom: 20,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Takes 2 minutes. We'll call you right away.
              </p>
              <QuoteForm defaultService="Standard Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: NAVY, padding: "20px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {[
              { value: "450+", label: "Verified Google Reviews" },
              { value: "4.9★", label: "Average Rating" },
              { value: "100+", label: "Homes Cleaned/Month" },
              { value: "3", label: "Metro Markets" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                color: NAVY,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: 12,
              }}
            >
              What's included in every standard clean
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#5a6e80",
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              A documented checklist, not a vague promise. You know exactly what's happening in your home.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {Object.entries(checklist).map(([room, items]) => (
              <div
                key={room}
                style={{
                  backgroundColor: "#f7fbff",
                  border: "1.5px solid #dde9f2",
                  borderRadius: 12,
                  padding: "20px 22px",
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: NAVY,
                    marginBottom: 14,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      backgroundColor: ICE,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Home size={14} style={{ color: NAVY }} />
                  </span>
                  {room}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        marginBottom: 8,
                        fontSize: 13.5,
                        color: "#4a5e6e",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle
                        size={14}
                        style={{ color: TEAL, flexShrink: 0, marginTop: 2 }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Not included callout */}
          <div
            style={{
              marginTop: 24,
              backgroundColor: "#fff8f0",
              border: "1.5px solid #f0d9c0",
              borderRadius: 10,
              padding: "16px 20px",
              maxWidth: 640,
              margin: "24px auto 0",
            }}
          >
            <p
              style={{
                fontSize: 13.5,
                color: "#7a5c3a",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <strong>Not included in standard:</strong> Inside oven, inside refrigerator, inside cabinets, interior windows, baseboards, walls, laundry, or dishes. See the full{" "}
              <Link href="/cleaning-checklist" style={{ color: TEAL, fontWeight: 600 }}>cleaning checklist</Link>
              {" "}or our{" "}
              <Link href="/deep-cleaning">
                <span style={{ color: TEAL, fontWeight: 600, cursor: "pointer" }}>
                  Deep Cleaning
                </span>
              </Link>{" "}
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Why Steampunk */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                color: NAVY,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: 12,
              }}
            >
              Why clients stay with Steampunk
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#5a6e80",
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              Most cleaning companies are fine the first time. We're built for the fiftieth.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                icon: <CheckCircle size={22} />,
                title: "Documented checklist, every visit",
                body: "Standards don't drift. The same 40-point checklist is completed and verified on every single clean.",
              },
              {
                icon: <Shield size={22} />,
                title: "Background-checked and vetted",
                body: "Every cleaner passes a thorough interview and background check. We don't send strangers.",
              },
              {
                icon: <Home size={22} />,
                title: "Same cleaner, same familiarity",
                body: "We assign the same cleaner to your home. They learn your preferences. You stop explaining.",
              },
              {
                icon: <Sparkles size={22} />,
                title: "Satisfaction guaranteed",
                body: "If something was missed, we come back and fix it. No questions, no runaround.",
              },
              {
                icon: <Star size={22} />,
                title: "Google Guaranteed",
                body: "Licensed, bonded, and insured across our three metros. The highest local trust badge available.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  border: "1.5px solid #dde9f2",
                  borderRadius: 12,
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: ICE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: NAVY,
                    marginBottom: 14,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: NAVY,
                    marginBottom: 8,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#5a6e80",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                color: NAVY,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              What clients say
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f7fbff",
                  border: "1.5px solid #dde9f2",
                  borderRadius: 12,
                  padding: "22px 24px",
                }}
              >
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} fill={TEAL} style={{ color: TEAL }} />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 14.5,
                    color: "#3a4e5e",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.7,
                    marginBottom: 16,
                    fontStyle: "italic",
                  }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: NAVY,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#8a9baa",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {t.location} · {t.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                color: NAVY,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
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
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                color: "#fff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Stop thinking about it.{" "}
              <span style={{ color: TEAL, fontStyle: "italic" }}>It's handled.</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 480,
              }}
            >
              You've been putting this off long enough. It takes 2 minutes to get a quote, and we'll call you right away. No commitment until you're ready.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {["4.9 on Google", "450+ Verified Reviews", "Google Guaranteed", "Same-Day Response"].map((b) => (
                <div
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.9)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle size={14} style={{ color: TEAL }} />
                  {b}
                </div>
              ))}
            </div>
            <a
              href="tel:7252553688"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 24,
                fontSize: 15,
                fontWeight: 600,
                color: TEAL,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Or call us directly: (725) 255-3688
            </a>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: "28px 24px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h3
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: NAVY,
                marginBottom: 4,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Get your free quote
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#8a9baa",
                marginBottom: 20,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Takes 2 minutes. We'll call you right away.
            </p>
            <QuoteForm defaultService="Standard Cleaning" />
          </div>
        </div>
      </section>

      <ServiceMetroLinks serviceSlug="standard-cleaning" serviceLabel="Standard cleaning" />

      <Footer />
    </div>
  );
}
