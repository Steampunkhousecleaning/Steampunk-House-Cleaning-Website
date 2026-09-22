/**
 * Locations.tsx — /locations hub
 * Equal-weight entry to LA/OC, Las Vegas & Reno / Nevada, and Sacramento metros.
 */

import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { METROS } from "@/data/locations";
import { Link } from "wouter";
import { MapPin, ArrowRight, Phone } from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

export default function Locations() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Service Locations | LA/OC, Las Vegas & Reno, Sacramento | Steampunk"
        description="Steampunk House Cleaning serves three equal markets: Los Angeles / Orange County, Las Vegas & Reno / Nevada, and Sacramento. Explore local cleaning pages and get a free quote."
        path="/locations"
      />

      <section
        className="hero-pt"
        style={{
          paddingBottom: 48,
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
            <MapPin size={12} />
            Where we clean
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
            Three markets.{" "}
            <span style={{ color: TEAL }}>Equal care.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#4a5e6e",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Steampunk House Cleaning operates across Los Angeles / Orange County, Las Vegas &
            Reno / Nevada, and Sacramento — with the same standards, checklist discipline, and booking
            process in each metro.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {METROS.map((metro) => (
              <Link key={metro.slug} href={metro.path}>
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "#f7fbff",
                    border: "1.5px solid #dde9f2",
                    borderRadius: 16,
                    padding: "28px 24px",
                    cursor: "pointer",
                    transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = TEAL;
                    el.style.boxShadow = "0 8px 24px rgba(26,158,143,0.12)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#dde9f2";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
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
                      marginBottom: 16,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: NAVY,
                      marginBottom: 6,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {metro.name}
                  </h2>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: TEAL,
                      marginBottom: 12,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {metro.stateLabel}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#5a6e80",
                      lineHeight: 1.65,
                      marginBottom: 18,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {metro.intro[0].slice(0, 140)}…
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 14,
                      fontWeight: 700,
                      color: TEAL,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    View {metro.shortName} page
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 56px", backgroundColor: "#f7fbff" }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              color: NAVY,
              marginBottom: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Not sure if we cover your zip?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#5a6e80",
              lineHeight: 1.7,
              marginBottom: 24,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Request a quote with your city or call us. We confirm real coverage — we do not invent
            dozens of thin neighborhood pages.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/get-a-quote"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: TEAL,
                color: "#fff",
                padding: "12px 22px",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:7252553688"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#fff",
                color: NAVY,
                padding: "12px 22px",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                border: "1.5px solid #dde9f2",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <Phone size={16} style={{ color: TEAL }} />
              (725) 255-3688
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
