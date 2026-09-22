/**
 * MoveInOut.tsx — /move-in-move-out
 * Design: Navy + Sky Blue + Teal CTA + White bg
 * CRO focus: Deposit recovery, landlord standard, stress relief during moving
 */

import { Navbar, Footer } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckCircle, Star, Shield, Clock, Package, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const SKY = "#72B5D3";
const ICE = "#B5E1F2";

const checklist = [
  "Inside oven, racks, and broiler",
  "Inside refrigerator and freezer (defrosted)",
  "Inside all cabinets and drawers",
  "Inside microwave",
  "Degrease stovetop and range hood",
  "Scrub tile grout in bathrooms",
  "Clean shower door tracks and glass",
  "Wipe all baseboards throughout",
  "Clean interior windows from inside",
  "Wipe window sills, ledges, and tracks",
  "Vacuum all closets including shelving",
  "Wipe door frames and door interiors",
  "Dust all vents and registers",
  "Spot-clean walls and scuff marks",
  "Sanitize all light switches and outlets",
  "Full bathroom deep clean (toilet, tub, sink, mirrors)",
  "Vacuum and mop all floors",
  "Remove all debris and trash",
];

const faqs = [
  {
    q: "How soon can you come before my move-out date?",
    a: "We can typically schedule within 1–3 business days. For urgent move-out deadlines, call us directly at (725) 255-3688 and we'll do our best to accommodate.",
  },
  {
    q: "Will this help me get my security deposit back?",
    a: "Our move-out clean is specifically designed to meet landlord and property manager standards. We cover every item that typically appears on a move-out inspection checklist. While we can't guarantee your specific landlord's decision, we give you the best possible chance.",
  },
  {
    q: "Do I need to have the property empty before you arrive?",
    a: "For move-out cleaning, yes — all personal belongings should be removed before we arrive. For move-in cleaning, the property should already be empty from the previous tenant.",
  },
  {
    q: "What's the difference between move-in and move-out cleaning?",
    a: "They're the same service. Move-out is done before you hand over the keys to your landlord. Move-in is done before you unpack in your new place — so your new home meets your standards, not the last tenant's.",
  },
  {
    q: "Do you clean inside appliances?",
    a: "Yes. Inside oven, refrigerator, microwave, and all cabinets are included as standard in every move-in/move-out clean.",
  },
  {
    q: "How long does it take?",
    a: "Typically 4–6 hours for a 2–3 bedroom property, depending on condition. We'll give you a more accurate estimate on your quote call.",
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

export default function MoveInOut() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Move-In & Move-Out Cleaning | Steampunk House Cleaning"
        description="Move-in and move-out cleaning in LA/OC, Nevada, and Sacramento. Leave or arrive to a spotless home. Get a free quote today."
        path="/move-in-move-out"
      />

      {/* Hero */}
      <section className="hero-pt" style={{ paddingBottom: 40, background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)", borderBottom: "1px solid #dde9f2" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: ICE, color: NAVY, padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
                <Package size={12} />
                Move-In / Move-Out
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Get your deposit back.{" "}
                <span style={{ color: TEAL }}>Walk into a clean start.</span>
              </h1>
              <p style={{ fontSize: 18, color: "#4a5e6e", lineHeight: 1.7, marginBottom: 28, fontFamily: "'DM Sans', sans-serif", maxWidth: 520 }}>
                Moving is already stressful. The cleaning shouldn't be. We clean to the standard your landlord expects — inside appliances, baseboards, grout, every corner — so you can focus on the move, not the mop.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                {[
                  { icon: <Shield size={15} />, text: "Landlord-Standard Clean" },
                  { icon: <Star size={15} fill={TEAL} />, text: "4.9 Stars / 370+ Reviews" },
                  { icon: <CheckCircle size={15} />, text: "Inside Appliances Included" },
                  { icon: <Clock size={15} />, text: "Fast Scheduling" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 8, padding: "7px 13px", fontSize: 13, fontWeight: 600, color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: TEAL }}>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>

              {/* Quote anchor */}
              <div style={{ backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 10, padding: "16px 20px", display: "inline-flex", alignItems: "center", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 13, color: "#8a9baa", fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>Free quote, no obligation</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Takes 2 minutes</div>
                </div>
                <div style={{ width: 1, height: 40, backgroundColor: "#dde9f2" }} />
                <div style={{ fontSize: 13, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", maxWidth: 160, lineHeight: 1.5 }}>
                  Deposit-ready standard. No hidden fees.
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(61,82,102,0.12)", border: "1px solid #dde9f2" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get your free quote</h3>
              <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>Takes 2 minutes. We'll call you right away.</p>
              <QuoteForm defaultService="Move-In / Move-Out" />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional anchor */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16, lineHeight: 1.3 }}>
            Moving day is chaotic enough. The cleaning shouldn't be your problem.
          </h2>
          <p style={{ fontSize: 17, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 24, maxWidth: 600, margin: "0 auto 24px" }}>
            You're coordinating movers, utilities, forwarding mail, and a hundred other things. Handing the cleaning to professionals isn't laziness — it's the obvious call. We clean to the standard that gets deposits returned and new homes feeling like yours from day one.
          </p>
          <div className="grid-2col" style={{ gap: "1rem", maxWidth: 560, margin: "0 auto" }}>
            {[
              { title: "Move-Out Clean", desc: "We clean to landlord inspection standards. Every item on the typical move-out checklist, covered." },
              { title: "Move-In Clean", desc: "Start fresh. We clean before you unpack — so your new home meets your standards, not the last tenant's." },
            ].map((card, i) => (
              <div key={i} style={{ backgroundColor: "#f7fbff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "20px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>
              Everything included in every move-in/out clean
            </h2>
            <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", maxWidth: 520, margin: "0 auto" }}>
              This is the full-scope clean. No add-ons required.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.75rem", maxWidth: 900, margin: "0 auto" }}>
            {checklist.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 8, padding: "12px 16px" }}>
                <CheckCircle size={16} style={{ color: TEAL, flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: 14, color: "#3a4e5e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="grid-2col" style={{ gap: "1.5rem" }}>
            {[
              { quote: "I got my full deposit back. My landlord literally said it was the cleanest move-out he'd ever seen. Worth every dollar.", name: "David L.", location: "Nevada", service: "Move-Out Clean" },
              { quote: "Moving into a new place and having it professionally cleaned first was the best decision I made. It felt like mine from day one.", name: "Priya S.", location: "Sacramento, CA", service: "Move-In Clean" },
            ].map((t, i) => (
              <div key={i} style={{ backgroundColor: "#f7fbff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "22px 24px" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill={TEAL} style={{ color: TEAL }} />)}
                </div>
                <p style={{ fontSize: 15, color: "#3a4e5e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>"{t.quote}"</p>
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
              Don't leave money on the table.{" "}
              <span style={{ color: TEAL, fontStyle: "italic" }}>Book your clean.</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
              We clean to the standard that gets deposits returned. Takes 2 minutes to get a quote. We'll call you right away.
            </p>
            <a href="tel:7252553688" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: TEAL, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
              Or call us directly: (725) 255-3688
            </a>
          </div>
          <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get your free quote</h3>
            <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>Takes 2 minutes. We'll call you right away.</p>
            <QuoteForm defaultService="Move-In / Move-Out" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
