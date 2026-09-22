/**
 * RecurringCleaning.tsx — /recurring-cleaning
 * Design: Navy + Sky Blue + Teal CTA + White bg
 * CRO focus: Set-and-forget, savings, mental load relief, habit formation
 */

import { Navbar, Footer } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckCircle, Star, Shield, Clock, RefreshCw, ChevronDown, ChevronUp, Repeat } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { ServiceMetroLinks } from "@/components/ServiceMetroLinks";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const SKY = "#72B5D3";
const ICE = "#B5E1F2";

const plans = [
  {
    freq: "Weekly",
    cadence: "Every week",
    badge: "Best for busy families",
    desc: "Your home stays consistently clean. No buildup, no catch-up cleans needed.",
    savings: "Lowest per-visit rate we offer",
    highlight: false,
  },
  {
    freq: "Bi-Weekly",
    cadence: "Every 2 weeks",
    badge: "Most popular",
    desc: "The sweet spot. Clean enough to always feel good about your home, without weekly scheduling.",
    savings: "Lower per-visit rate than one-time",
    highlight: true,
  },
  {
    freq: "Monthly",
    cadence: "Every 4 weeks",
    badge: "Best for low-maintenance homes",
    desc: "A full reset every 4 weeks. Perfect for smaller homes or couples without kids.",
    savings: "Still beats one-time pricing",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Can I pause or cancel my recurring plan?",
    a: "Yes. Life happens. You can pause, reschedule, or cancel anytime with 48 hours' notice. No contracts, no cancellation fees.",
  },
  {
    q: "Will I get the same cleaner every time?",
    a: "We assign the same cleaner to your home whenever possible. They learn your preferences, your home's layout, and what matters most to you. You stop explaining. They just know.",
  },
  {
    q: "Do I need to be home?",
    a: "No. Most recurring clients give us a key, lockbox code, or door code. Your cleaner arrives, completes the documented checklist, and you come home to a clean house.",
  },
  {
    q: "What's included in recurring cleaning?",
    a: "Every recurring clean follows the same documented standard cleaning checklist: all rooms, bathrooms, kitchen, floors, surfaces, and high-touch areas. Consistent, every time.",
  },
  {
    q: "Do I need a deep clean first?",
    a: "If your home hasn't had a professional clean in a while, we recommend starting with a deep clean to get everything to baseline. After that, recurring standard cleaning maintains the standard.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the quote form, we'll call you within minutes, confirm your schedule and preferences, and your first clean is booked. Most clients are set up within 1–2 days.",
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
            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 12 }}
          >
            <span style={{ fontSize: 16, fontWeight: 700, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.4 }}>{faq.q}</span>
            {open === i ? <ChevronUp size={20} style={{ color: TEAL, flexShrink: 0 }} /> : <ChevronDown size={20} style={{ color: SKY, flexShrink: 0 }} />}
          </button>
          {open === i && (
            <div style={{ paddingBottom: 18, fontSize: 15, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function RecurringCleaning() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Recurring House Cleaning | Weekly & Bi-Weekly | Steampunk"
        description="Weekly, bi-weekly, and monthly recurring cleaning in LA/OC, Nevada, and Sacramento. Same trusted team, same spotless results. Free quote."
        path="/recurring-cleaning"
      />

      {/* Hero */}
      <section className="hero-pt" style={{ paddingBottom: 40, background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)", borderBottom: "1px solid #dde9f2" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: ICE, color: NAVY, padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
                <Repeat size={12} />
                Weekly · Bi-Weekly · Monthly
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Your home just{" "}
                <span style={{ color: TEAL }}>stays clean.</span>
              </h1>
              <p style={{ fontSize: 18, color: "#4a5e6e", lineHeight: 1.7, marginBottom: 28, fontFamily: "'DM Sans', sans-serif", maxWidth: 520 }}>
                Stop thinking about cleaning. Set your schedule once, and it happens. Same vetted cleaner, same documented checklist, every visit. You come home to a clean house. That's it.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                {[
                  { icon: <Shield size={15} />, text: "No Contracts" },
                  { icon: <Star size={15} fill={TEAL} />, text: "4.9 Stars / 370+ Reviews" },
                  { icon: <RefreshCw size={15} />, text: "Cancel Anytime" },
                  { icon: <Clock size={15} />, text: "Same Cleaner Every Visit" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 8, padding: "7px 13px", fontSize: 13, fontWeight: 600, color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: TEAL }}>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>

              {/* Value prop callout */}
              <div style={{ backgroundColor: "#fff", border: "1.5px solid " + ICE, borderLeft: "4px solid " + TEAL, borderRadius: 10, padding: "16px 20px", maxWidth: 480 }}>
                <p style={{ fontSize: 15, color: "#3a4e5e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                  "I used to spend my Sunday mornings cleaning. Now I spend them with my kids. Worth every penny."
                </p>
                <p style={{ fontSize: 13, fontWeight: 700, color: NAVY, fontFamily: "'DM Sans', sans-serif", margin: "8px 0 0" }}>
                  Lisa M., Los Angeles — Bi-Weekly Recurring
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(61,82,102,0.12)", border: "1px solid #dde9f2" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get your free quote</h3>
              <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>Takes 2 minutes. We'll call you right away.</p>
              <QuoteForm defaultService="Recurring (Weekly / Bi-weekly)" />
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>
              Choose your schedule
            </h2>
            <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", maxWidth: 480, margin: "0 auto" }}>
              All plans include the same documented checklist. Your quote depends on your home size and how often we visit.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", maxWidth: 900, margin: "0 auto" }}>
            {plans.map((plan, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: plan.highlight ? "#f0faf8" : "#f7fbff",
                  border: `2px solid ${plan.highlight ? TEAL : "#dde9f2"}`,
                  borderRadius: 14,
                  padding: "24px",
                  position: "relative",
                }}
              >
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", backgroundColor: TEAL, color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: plan.highlight ? TEAL : SKY, marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>
                  {plan.badge}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{plan.freq}</h3>
                <div style={{ fontSize: 15, fontWeight: 700, color: plan.highlight ? TEAL : SKY, marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>{plan.cadence}</div>
                <p style={{ fontSize: 14, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, marginBottom: 12 }}>{plan.desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: TEAL, fontFamily: "'DM Sans', sans-serif" }}>
                  <CheckCircle size={13} />
                  {plan.savings}
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "#8a9baa", fontFamily: "'DM Sans', sans-serif", marginTop: 20 }}>
            Your quote is confirmed on the call. No hidden fees, no contracts.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              How recurring cleaning works
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", maxWidth: 900, margin: "0 auto" }}>
            {[
              { step: "01", title: "Get your quote", body: "Fill out the 2-minute form. We call you, confirm your schedule, preferences, and home details." },
              { step: "02", title: "We assign your cleaner", body: "You get a vetted, background-checked cleaner assigned to your home. They learn your preferences." },
              { step: "03", title: "Your schedule runs itself", body: "Automatic reminders before each visit. You don't have to think about it. Your home just stays clean." },
              { step: "04", title: "Adjust anytime", body: "Need to skip a week? Change your frequency? No problem. Flexible scheduling with 48-hour notice." },
            ].map((s, i) => (
              <div key={i} style={{ backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "22px" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: ICE, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 }}>{s.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>{s.body}</p>
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
              Set it up once.{" "}
              <span style={{ color: TEAL, fontStyle: "italic" }}>Done forever.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
              No contracts. No commitment. Cancel anytime. Just a clean home, on your schedule, handled by people who actually care.
            </p>
            <a href="tel:7252553688" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: TEAL, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
              Or call us directly: (725) 255-3688
            </a>
          </div>
          <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get your free quote</h3>
            <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>Takes 2 minutes. We'll call you right away.</p>
            <QuoteForm defaultService="Recurring (Weekly / Bi-weekly)" />
          </div>
        </div>
      </section>

      <ServiceMetroLinks serviceSlug="recurring-cleaning" serviceLabel="Recurring cleaning" />

      <Footer />
    </div>
  );
}
