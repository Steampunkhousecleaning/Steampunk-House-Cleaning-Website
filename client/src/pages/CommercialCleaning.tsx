/**
 * CommercialCleaning.tsx — /commercial-cleaning
 * Design: Navy + Sky Blue + Teal CTA + White bg
 * CRO focus: Professional image, employee morale, client impressions, reliability
 */

import { Navbar, Footer } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckCircle, Star, Shield, Clock, Building, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const SKY = "#72B5D3";
const ICE = "#B5E1F2";

const faqs = [
  {
    q: "Do you clean after business hours?",
    a: "Yes. We work around your schedule. Most commercial clients prefer evening or early morning cleans so the space is ready when the team arrives. We'll coordinate to minimize disruption.",
  },
  {
    q: "What types of commercial spaces do you clean?",
    a: "Offices, medical offices, retail spaces, salons, studios, co-working spaces, and small commercial properties. If you're not sure if we cover your space, call us and we'll let you know.",
  },
  {
    q: "Can you set up a recurring commercial cleaning schedule?",
    a: "Yes. Most commercial clients are on a weekly or bi-weekly schedule. We assign a consistent team to your space so they know your layout, preferences, and standards.",
  },
  {
    q: "Are you insured for commercial properties?",
    a: "Yes. We're fully licensed, bonded, and insured across our three metros. We can provide proof of insurance on request.",
  },
  {
    q: "What's included in a commercial clean?",
    a: "All workstations, common areas, kitchenette/break room, bathrooms, floors, trash removal, and surface sanitization. We'll build a custom checklist for your space on the quote call.",
  },
  {
    q: "How quickly can you start?",
    a: "Typically within 1–3 business days. For urgent needs, call us directly at (725) 255-3688.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: "1px solid #e8edf2" }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 12 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.4 }}>{faq.q}</span>
            {open === i ? <ChevronUp size={20} style={{ color: TEAL, flexShrink: 0 }} /> : <ChevronDown size={20} style={{ color: SKY, flexShrink: 0 }} />}
          </button>
          {open === i && <div style={{ paddingBottom: 18, fontSize: 15, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function CommercialCleaning() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Commercial & Office Cleaning | Steampunk House Cleaning"
        description="Professional commercial and office cleaning in LA/OC, Nevada, and Sacramento. Flexible schedules, vetted team. Request a free quote."
        path="/commercial-cleaning"
      />

      {/* Hero */}
      <section className="hero-pt" style={{ paddingBottom: 40, background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)", borderBottom: "1px solid #dde9f2" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: ICE, color: NAVY, padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
                <Building size={12} />
                Commercial / Office Cleaning
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                What your clients notice{" "}
                <span style={{ color: TEAL }}>before you say a word.</span>
              </h1>
              <p style={{ fontSize: 18, color: "#4a5e6e", lineHeight: 1.7, marginBottom: 28, fontFamily: "'DM Sans', sans-serif", maxWidth: 520 }}>
                A clean office is a signal. It tells clients you're organized, professional, and detail-oriented before the meeting even starts. It tells your team you respect the space they work in. We handle the standard so you don't have to think about it.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                {[
                  { icon: <Shield size={15} />, text: "Licensed and Insured" },
                  { icon: <Star size={15} fill={TEAL} />, text: "4.9 Stars / 370+ Reviews" },
                  { icon: <Clock size={15} />, text: "After-Hours Available" },
                  { icon: <Users size={15} />, text: "Consistent Assigned Team" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 8, padding: "7px 13px", fontSize: 13, fontWeight: 600, color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: TEAL }}>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div style={{ backgroundColor: "#fff", border: "1.5px solid " + ICE, borderLeft: "4px solid " + TEAL, borderRadius: 10, padding: "16px 20px", maxWidth: 500 }}>
                <p style={{ fontSize: 15, color: "#3a4e5e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                  "We had a client walk in and say our office looked 'sharp.' That's not something we heard before Steampunk. It matters more than people think."
                </p>
                <p style={{ fontSize: 13, fontWeight: 700, color: NAVY, fontFamily: "'DM Sans', sans-serif", margin: "8px 0 0" }}>
                  Kevin M., Office Manager — Sacramento, CA
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(61,82,102,0.12)", border: "1px solid #dde9f2" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get your free quote</h3>
              <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>Takes 2 minutes. We'll call you right away.</p>
              <QuoteForm defaultService="Commercial / Office" />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>
              What's included in every commercial clean
            </h2>
            <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", maxWidth: 520, margin: "0 auto" }}>
              Custom checklist built for your space. These are the standard inclusions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                title: "Workstations and Common Areas",
                items: ["Dust and wipe all desks and surfaces", "Sanitize keyboards, phones, and shared equipment", "Clean and organize reception area", "Wipe conference room tables and chairs", "Dust shelves, ledges, and decor"],
              },
              {
                title: "Bathrooms",
                items: ["Scrub and disinfect toilets", "Clean and sanitize sinks and counters", "Restock paper products (if supplied)", "Clean mirrors streak-free", "Mop floors and sanitize"],
              },
              {
                title: "Kitchen / Break Room",
                items: ["Wipe counters and appliance exteriors", "Clean microwave inside and out", "Sanitize sink and faucet", "Empty and reline trash bins", "Wipe tables and chairs"],
              },
              {
                title: "Floors and General",
                items: ["Vacuum all carpeted areas", "Mop all hard floors", "Empty all trash bins and replace liners", "Wipe light switches and door handles", "Spot-clean glass doors and partitions"],
              },
            ].map((section, i) => (
              <div key={i} style={{ backgroundColor: "#f7fbff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "20px 22px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: NAVY, marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{section.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8, fontSize: 13.5, color: "#4a5e6e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
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

      {/* Why it matters */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>
              Why a clean office is a business decision
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[
              { icon: <Users size={22} />, title: "Employee morale", body: "People work better in clean environments. It's not a theory — it's documented. A clean office signals that leadership respects the team." },
              { icon: <Star size={22} />, title: "Client impressions", body: "The first thing a client notices when they walk in is the space. A clean, organized office communicates professionalism before anyone speaks." },
              { icon: <Shield size={22} />, title: "Liability and hygiene", body: "Especially in shared spaces, regular sanitization reduces sick days and protects your team. Licensed and insured coverage protects your business." },
              { icon: <Clock size={22} />, title: "One less thing to manage", body: "You have enough to think about. A recurring commercial cleaning schedule runs itself. Your office is always ready." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "20px 22px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: ICE, display: "flex", alignItems: "center", justifyContent: "center", color: NAVY, marginBottom: 14 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Common questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "40px 0", backgroundColor: NAVY }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }} className="cta-grid">
          <div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16, lineHeight: 1.2 }}>
              Your office, handled.{" "}
              <span style={{ color: TEAL, fontStyle: "italic" }}>Every time.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
              Consistent, professional, and built around your schedule. Takes 2 minutes to get a quote.
            </p>
            <a href="tel:7252553688" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: TEAL, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
              Or call us directly: (725) 255-3688
            </a>
          </div>
          <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get your free quote</h3>
            <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>Takes 2 minutes. We'll call you right away.</p>
            <QuoteForm defaultService="Commercial / Office" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
