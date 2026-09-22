/**
 * AirbnbCleaning.tsx — /airbnb-cleaning
 * Design: Navy + Sky Blue + Teal CTA + White bg
 * CRO focus: Host-specific pain (bad reviews, unreliable cleaners), photo documentation, fast turnaround
 * Audience: Airbnb hosts, VRBO hosts, STR operators, property managers
 */

import { Navbar, Footer } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckCircle, Star, Shield, Clock, Calendar, Camera, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const SKY = "#72B5D3";
const ICE = "#B5E1F2";

const faqs = [
  {
    q: "Can you work within tight checkout/check-in windows?",
    a: "Yes. We're built for STR turnovers. We coordinate directly with your checkout and check-in times to ensure the property is ready before your next guest arrives. We'll work with your calendar, not against it.",
  },
  {
    q: "Do you provide photo documentation after each clean?",
    a: "Yes. After every turnover, your cleaner sends photo documentation of the completed property. This protects you in disputes and gives you peace of mind without being on-site.",
  },
  {
    q: "Can you restock supplies and linens?",
    a: "Yes. We can restock toiletries, replace linens, and set up the property to your guest-ready standard. Let us know your preferences during the quote call and we'll build it into your service.",
  },
  {
    q: "What if a guest leaves the property in a bad state?",
    a: "We've seen it all. We document the condition on arrival and clean to the same standard regardless. If the scope is significantly beyond normal turnover, we'll contact you before proceeding so there are no surprises on pricing.",
  },
  {
    q: "Do you work with property managers?",
    a: "Yes. We work with individual hosts and multi-property managers. If you have multiple units, we can set up a recurring schedule across all of them with a single point of contact.",
  },
  {
    q: "What markets do you serve?",
    a: "Los Angeles / Orange County, Nevada, and Sacramento. If you're in or near these markets, we can cover your property.",
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

export default function AirbnbCleaning() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Airbnb & Short-Term Rental Cleaning | Steampunk House Cleaning"
        description="Reliable Airbnb and STR turnover cleaning in LA/OC, Nevada, and Sacramento. Guest-ready every time. Free quote."
        path="/airbnb-cleaning"
      />

      {/* Hero */}
      <section className="hero-pt" style={{ paddingBottom: 40, background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)", borderBottom: "1px solid #dde9f2" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: ICE, color: NAVY, padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
                <Calendar size={12} />
                Airbnb / VRBO / STR Turnover
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Your 5-star reviews{" "}
                <span style={{ color: TEAL }}>start with the clean.</span>
              </h1>
              <p style={{ fontSize: 18, color: "#4a5e6e", lineHeight: 1.7, marginBottom: 28, fontFamily: "'DM Sans', sans-serif", maxWidth: 520 }}>
                Unreliable cleaners cost you reviews. Bad reviews cost you bookings. We built our STR turnover service because we were hosts who got burned by the same problem. Reliable, fast, documented — every single turnover.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                {[
                  { icon: <Camera size={15} />, text: "Photo Documentation" },
                  { icon: <Star size={15} fill={TEAL} />, text: "4.9 Stars / 370+ Reviews" },
                  { icon: <Clock size={15} />, text: "Tight Window Turnovers" },
                  { icon: <Shield size={15} />, text: "Google Guaranteed" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 8, padding: "7px 13px", fontSize: 13, fontWeight: 600, color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: TEAL }}>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>

              {/* Pain point callout */}
              <div style={{ backgroundColor: "#fff8f0", border: "1.5px solid #f0d9c0", borderLeft: "4px solid #e8963a", borderRadius: 10, padding: "16px 20px", maxWidth: 500 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <AlertCircle size={18} style={{ color: "#e8963a", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#7a5c3a", fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>
                      The #1 complaint in STR reviews?
                    </p>
                    <p style={{ fontSize: 14, color: "#7a5c3a", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>
                      "The property wasn't clean." One bad review tanks your ranking. One reliable cleaning team fixes it permanently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(61,82,102,0.12)", border: "1px solid #dde9f2" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get your free quote</h3>
              <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>Takes 2 minutes. We'll call you right away.</p>
              <QuoteForm defaultService="Airbnb / Short-Term Rental" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder credibility */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ backgroundColor: "#f7fbff", border: "1.5px solid #dde9f2", borderRadius: 14, padding: "32px", textAlign: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: TEAL, marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>
              Built by hosts, for hosts
            </p>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16, lineHeight: 1.3 }}>
              We started Steampunk because we were STR hosts who couldn't find a reliable cleaning team.
            </h2>
            <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 20, maxWidth: 600, margin: "0 auto 20px" }}>
              Ryan and Daniel ran short-term rentals and got burned by no-shows, inconsistent quality, and cleaners who didn't understand the STR standard. So they built the service they couldn't find. Every protocol we use was designed with the host's review score in mind.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
              {[
                { value: "370+", label: "Google Reviews" },
                { value: "4.9★", label: "Average Rating" },
                { value: "4", label: "STR Markets" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: TEAL, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "#8a9baa", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>
              What every STR turnover includes
            </h2>
            <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", maxWidth: 520, margin: "0 auto" }}>
              Built to the standard that earns 5-star cleanliness reviews.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                title: "Full property clean",
                items: ["All rooms vacuumed and mopped", "Bathrooms scrubbed and sanitized", "Kitchen surfaces and appliance exteriors", "All trash removed and bins relined", "Surfaces dusted and wiped throughout"],
              },
              {
                title: "Guest-ready setup",
                items: ["Fresh linens made on all beds", "Towels folded and staged", "Toiletries restocked (if supplied)", "Kitchen reset and staged", "All personal items removed"],
              },
              {
                title: "Documentation",
                items: ["Photo documentation of completed clean", "Condition-on-arrival photos", "Sent directly to host after every turnover", "Protects you in guest disputes", "Peace of mind without being on-site"],
              },
              {
                title: "Reliability protocols",
                items: ["Confirmed arrival time before every turnover", "Direct communication with host", "Backup coverage for last-minute requests", "Consistent team assigned to your property", "No-show policy with accountability"],
              },
            ].map((section, i) => (
              <div key={i} style={{ backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "20px 22px" }}>
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

      {/* Testimonials */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>What hosts say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {[
              { quote: "I manage 4 Airbnb units and Steampunk handles all of them. Reliable, fast, and they always send photos. My cleanliness scores went from 4.6 to 4.9 within two months.", name: "Marcus T.", location: "Nevada", service: "STR Turnover" },
              { quote: "Finally found a cleaning team that actually understands the STR standard. They show up on time, every time. That alone is worth everything.", name: "Jennifer K.", location: "Los Angeles, CA", service: "Airbnb Turnover" },
              { quote: "The photo documentation is a game-changer. Had a guest try to claim the property was dirty. I had photos proving otherwise. Dispute closed in 10 minutes.", name: "Robert A.", location: "Sacramento, CA", service: "STR Turnover" },
            ].map((t, i) => (
              <div key={i} style={{ backgroundColor: "#f7fbff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "22px 24px" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill={TEAL} style={{ color: TEAL }} />)}
                </div>
                <p style={{ fontSize: 14.5, color: "#3a4e5e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>"{t.quote}"</p>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "#8a9baa", fontFamily: "'DM Sans', sans-serif" }}>{t.location} · {t.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
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
              Protect your reviews.{" "}
              <span style={{ color: TEAL, fontStyle: "italic" }}>Book your turnover team.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
              One reliable cleaning team changes everything for your STR business. Takes 2 minutes to get a quote.
            </p>
            <a href="tel:7252553688" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: TEAL, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
              Or call us directly: (725) 255-3688
            </a>
          </div>
          <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get your free quote</h3>
            <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>Takes 2 minutes. We'll call you right away.</p>
            <QuoteForm defaultService="Airbnb / Short-Term Rental" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
