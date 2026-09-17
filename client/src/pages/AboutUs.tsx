/**
 * AboutUs.tsx — /about
 * Design: Navy + Sky Blue + Teal CTA + White bg
 * CRO focus: Trust, founder story, mission, team credibility
 */

import { Navbar, Footer } from "@/components/Layout";
import { CheckCircle, Star, Shield, Users, MapPin, Heart } from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

const LOGO_URL = "/logo.png";

export default function AboutUs() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="hero-pt" style={{ paddingBottom: 40, background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)", borderBottom: "1px solid #dde9f2" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: ICE, color: NAVY, padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
            <Heart size={12} />
            Our Story
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            We built the cleaning company{" "}
            <span style={{ color: TEAL }}>we couldn't find.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#4a5e6e", lineHeight: 1.7, maxWidth: 640, margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
            Steampunk Cleaning Services was founded by Ryan and Daniel — two guys who got burned by unreliable cleaners one too many times and decided to do something about it.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="grid-2col" style={{ gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 20, lineHeight: 1.3 }}>
                The problem we were trying to solve
              </h2>
              <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 16 }}>
                Ryan was managing short-term rentals. Daniel had a family home that needed regular cleaning. Both of them kept running into the same wall: cleaners who didn't show up, quality that was inconsistent, and no accountability when something went wrong.
              </p>
              <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 16 }}>
                The cleaning industry had a reputation problem. Most companies competed on price and cut corners everywhere else. Background checks were optional. Training was minimal. Communication was an afterthought.
              </p>
              <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 0 }}>
                So they built something different. A company where reliability wasn't a selling point — it was the baseline. Where every cleaner was background-checked, trained, and held to a documented standard. Where clients could trust that the job would get done right, every time.
              </p>
            </div>
            <div style={{ backgroundColor: "#f7fbff", border: "1.5px solid #dde9f2", borderRadius: 16, padding: "32px", textAlign: "center" }}>
              <img src={LOGO_URL} alt="Steampunk Cleaning Services" style={{ width: 180, height: "auto", marginBottom: 24, objectFit: "contain" }} />
              <div className="grid-2col" style={{ gap: "1rem" }}>
                {[
                  { value: "2021", label: "Founded" },
                  { value: "370+", label: "Google Reviews" },
                  { value: "4.9★", label: "Average Rating" },
                  { value: "4", label: "Markets Served" },
                ].map((s, i) => (
                  <div key={i} style={{ backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 10, padding: "14px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: TEAL, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: "#8a9baa", fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and values */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>
              What we stand for
            </h2>
            <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", maxWidth: 520, margin: "0 auto" }}>
              These aren't marketing words. They're the decisions we make every day.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                icon: <Shield size={22} />,
                title: "Reliability first",
                body: "We show up. Every time. If something changes, we communicate before you have to wonder. Reliability isn't a feature — it's the job.",
              },
              {
                icon: <CheckCircle size={22} />,
                title: "Documented standards",
                body: "Every clean follows a checklist. Not because we don't trust our team — because a documented standard is the only way to guarantee consistency across hundreds of homes.",
              },
              {
                icon: <Users size={22} />,
                title: "People we're proud of",
                body: "Every cleaner is background-checked, trained, and treated well. Happy cleaners do better work. We invest in our team because our team is the product.",
              },
              {
                icon: <Heart size={22} />,
                title: "Respect for your home",
                body: "We treat every home like it matters. Because it does. Your home is where your family lives. We take that seriously.",
              },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "22px" }}>
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

      {/* Markets */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>
            Where we serve
          </h2>
          <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            We operate across four major markets and are expanding.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", maxWidth: 700, margin: "0 auto" }}>
            {[
              { city: "Los Angeles / Orange County", state: "California" },
              { city: "Las Vegas & Reno", state: "Nevada" },
              { city: "Sacramento", state: "California" },
            ].map((m, i) => (
              <div key={i} style={{ backgroundColor: "#f7fbff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
                <MapPin size={20} style={{ color: TEAL, marginBottom: 8 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{m.city}</div>
                <div style={{ fontSize: 13, color: "#8a9baa", fontFamily: "'DM Sans', sans-serif" }}>{m.state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ backgroundColor: NAVY, borderRadius: 16, padding: "36px 40px", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: 16 }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill={TEAL} style={{ color: TEAL }} />)}
            </div>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic", maxWidth: 560, margin: "0 auto 20px" }}>
              "I've tried four different cleaning companies over the years. Steampunk is the first one I've stuck with for more than two months. They just show up and do the job. That's all I ever wanted."
            </p>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>Lisa M.</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>Los Angeles, CA — Recurring Client</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16 }}>
            Ready to work with a team you can trust?
          </h2>
          <p style={{ fontSize: 16, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
            Takes 2 minutes to get a quote. We'll call you right away.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/get-a-quote" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: TEAL, color: "#fff", padding: "14px 28px", borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.2s" }}>
              Get My Free Quote
            </a>
            <a href="tel:7252553688" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "transparent", color: NAVY, padding: "14px 28px", borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", border: "2px solid #dde9f2" }}>
              Call (725) 255-3688
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
