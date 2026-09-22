/**
 * FAQ.tsx — /faq sitewide FAQ + FAQPage JSON-LD
 */

import { useState } from "react";
import { Link } from "wouter";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { HelpCircle, ChevronDown, ChevronUp, Phone, ArrowRight } from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

const FAQS = [
  {
    q: "Where does Steampunk House Cleaning operate?",
    a: "We serve three equal metros: Los Angeles / Orange County, Las Vegas & Reno / Nevada, and Sacramento. That includes Reno and Sparks in Northern Nevada as well as the Las Vegas Valley. Coverage varies by zip and schedule — request a quote with your city and we will confirm.",
  },
  {
    q: "How quickly can you get someone to my home?",
    a: "We typically schedule within 1–3 business days depending on your location and availability. For urgent requests, call us directly at (725) 255-3688 and we will do our best to accommodate you.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Yes. Every cleaner goes through a thorough interview process and background check before they are ever assigned to a client's home.",
  },
  {
    q: "Do I need to be home during the clean?",
    a: "Not at all. Most of our recurring clients give us a key, lockbox code, or door code and come home to a clean house. We confirm all access details when we book.",
  },
  {
    q: "What if I'm not happy with the clean?",
    a: "We come back and make it right. If something was missed or does not meet the standard, call us and we will fix it.",
  },
  {
    q: "Do you bring your own supplies and equipment?",
    a: "Yes. Our cleaners arrive with everything they need. If you prefer eco-friendly or fragrance-free products, tell us when we call and we will accommodate when possible.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is based on your home size, service type, and frequency. We give you a clear quote on the call — no hidden fees.",
  },
  {
    q: "What's the difference between standard and deep cleaning?",
    a: "Standard cleaning covers major surfaces, high-traffic areas, bathrooms, kitchen, and floors on a documented checklist. Deep cleaning goes further — inside appliances, baseboards, grout, and behind fixtures. First-time clients often start with a deep clean. See our Cleaning Checklist page for the full room-by-room list.",
  },
  {
    q: "Do you offer recurring cleaning?",
    a: "Yes. Weekly, bi-weekly, and monthly schedules are available. Recurring clients typically get a consistent process and clearer long-term timing.",
  },
  {
    q: "Do you clean Airbnbs and short-term rentals?",
    a: "Yes. We offer guest-ready turnover cleaning for hosts who need reliable timing between bookings. See our Airbnb cleaning page for details.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the Get a Quote form (about two minutes) or call (725) 255-3688. We follow up to confirm details and pricing — no commitment until you are ready.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      {FAQS.map((faq, i) => (
        <div key={faq.q} style={{ borderBottom: "1px solid #e8edf2" }}>
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
            aria-expanded={open === i}
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
              <ChevronUp size={18} style={{ color: TEAL, flexShrink: 0 }} />
            ) : (
              <ChevronDown size={18} style={{ color: TEAL, flexShrink: 0 }} />
            )}
          </button>
          {open === i && (
            <p
              style={{
                fontSize: 15,
                color: "#5a6e80",
                lineHeight: 1.75,
                margin: "0 0 18px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="FAQ | Steampunk House Cleaning"
        description="Answers about Steampunk House Cleaning services, scheduling, pricing, background checks, and coverage in LA/OC, Las Vegas & Reno / Nevada, and Sacramento."
        path="/faq"
      />
      <JsonLd id="faq-page" data={faqSchema} />

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
            <HelpCircle size={12} />
            Help center
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
            Frequently asked{" "}
            <span style={{ color: TEAL }}>questions</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#4a5e6e",
              lineHeight: 1.7,
              maxWidth: 620,
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Straight answers about booking, cleaners, pricing, and where we work. Still stuck? Call
            us — real humans pick up.
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 0 24px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          <FaqAccordion />
        </div>
      </section>

      <section style={{ padding: "24px 0 48px", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          <Link href="/locations">
            <div
              style={{
                backgroundColor: "#f7fbff",
                border: "1.5px solid #dde9f2",
                borderRadius: 12,
                padding: "18px",
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
                Explore locations
              </h2>
              <p style={{ fontSize: 14, color: "#5a6e80", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                LA / OC, Las Vegas & Reno / Nevada, and Sacramento hubs.
              </p>
            </div>
          </Link>
          <Link href="/get-a-quote">
            <div
              style={{
                backgroundColor: "#f7fbff",
                border: "1.5px solid #dde9f2",
                borderRadius: 12,
                padding: "18px",
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
                Two-minute form. We call you back with clear pricing.
              </p>
            </div>
          </Link>
          <Link href="/cleaning-checklist">
            <div
              style={{
                backgroundColor: "#f7fbff",
                border: "1.5px solid #dde9f2",
                borderRadius: 12,
                padding: "18px",
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
                Cleaning checklist
              </h2>
              <p style={{ fontSize: 14, color: "#5a6e80", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                Room-by-room what&apos;s included for standard and deep cleans.
              </p>
            </div>
          </Link>
          <Link href="/reviews">
            <div
              style={{
                backgroundColor: "#f7fbff",
                border: "1.5px solid #dde9f2",
                borderRadius: 12,
                padding: "18px",
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
                Customer reviews
              </h2>
              <p style={{ fontSize: 14, color: "#5a6e80", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                Quotes from LA/OC, Las Vegas & Reno, and Sacramento clients.
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
            Prefer to talk it through?
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
            Mon–Sat, 8am–6pm · info@steampunkhousecleaning.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
