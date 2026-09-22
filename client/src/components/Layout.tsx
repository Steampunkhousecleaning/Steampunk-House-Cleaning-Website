/**
 * Layout.tsx — Shared layout wrapper for all Steampunk Cleaning pages
 * Design: Navy (#3D5266) + Sky Blue (#72B5D3) + Teal CTA (#1A9E8F) + White bg
 * Font: Plus Jakarta Sans (headings) + DM Sans (body)
 * Pattern: Sticky navbar (hamburger left, logo center, CTA right on mobile) + footer
 * Mobile-first: separate mobile/desktop nav rows, no inline style overrides on grid
 */

import { useState, useEffect, type CSSProperties } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, ChevronUp } from "lucide-react";

const LOGO_URL = "/logo.png";
const NAVY = "#3D5266";
const TEAL = "#1A9E8F";

const navLinks = [
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "Standard Cleaning", href: "/standard-cleaning" },
      { label: "Deep Cleaning", href: "/deep-cleaning" },
      { label: "Recurring Cleaning", href: "/recurring-cleaning" },
      { label: "Move-In / Move-Out", href: "/move-in-move-out" },
      { label: "Airbnb / STR Turnover", href: "/airbnb-cleaning" },
      { label: "Commercial / Office", href: "/commercial-cleaning" },
      { label: "Cleaning Checklist", href: "/cleaning-checklist" },
    ],
  },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
        boxShadow: scrolled ? "0 2px 16px rgba(61,82,102,0.10)" : "0 1px 0 #e8edf2",
        transition: "box-shadow 0.3s ease, background-color 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>

        {/* ── MOBILE NAV ROW (hidden on md+) ── */}
        <div
          className="flex md:hidden"
          style={{
            height: 72,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              padding: "8px",
              background: "none",
              border: "none",
              color: NAVY,
              cursor: "pointer",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 40,
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center: logo */}
          <Link href="/">
            <img
              src={LOGO_URL}
              alt="Steampunk Cleaning Services"
              style={{
                height: 58,
                width: "auto",
                maxWidth: 190,
                cursor: "pointer",
                display: "block",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Right: compact CTA */}
          <Link
            href="/get-a-quote"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: TEAL,
              color: "#fff",
              padding: "8px 14px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* ── DESKTOP NAV ROW (hidden on mobile) ── */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            height: 92,
          }}
        >
          {/* Left: nav links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} style={{ position: "relative" }}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "8px 14px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: NAVY,
                      background: "none",
                      border: "none",
                      borderRadius: 6,
                      cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = TEAL;
                      setServicesOpen(true);
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = NAVY;
                    }}
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                  {servicesOpen && (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        boxShadow: "0 8px 32px rgba(61,82,102,0.14)",
                        border: "1px solid #e8edf2",
                        minWidth: 220,
                        padding: "8px 0",
                        zIndex: 100,
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <span
                            style={{
                              display: "block",
                              padding: "10px 18px",
                              fontSize: 14,
                              fontWeight: 500,
                              color: NAVY,
                              fontFamily: "'DM Sans', sans-serif",
                              cursor: "pointer",
                              transition: "background 0.15s, color 0.15s",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLSpanElement).style.backgroundColor = "#f0f8ff";
                              (e.currentTarget as HTMLSpanElement).style.color = TEAL;
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLSpanElement).style.backgroundColor = "transparent";
                              (e.currentTarget as HTMLSpanElement).style.color = NAVY;
                            }}
                          >
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span
                    style={{
                      display: "block",
                      padding: "8px 14px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: NAVY,
                      fontFamily: "'DM Sans', sans-serif",
                      borderRadius: 6,
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = TEAL)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = NAVY)}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            )}
          </nav>

          {/* Center: Logo */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Link href="/">
              <img
                src={LOGO_URL}
                alt="Steampunk Cleaning Services"
                style={{ height: 76, width: "auto", maxWidth: 280, cursor: "pointer", display: "block", objectFit: "contain" }}
              />
            </Link>
          </div>

          {/* Right: Phone + CTA */}
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="tel:7252553688"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                fontWeight: 600,
                color: NAVY,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <Phone size={15} style={{ color: TEAL }} />
              (725) 255-3688
            </a>
            <Link
              href="/get-a-quote"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: TEAL,
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 2px 8px rgba(26,158,143,0.25)",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(26,158,143,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 8px rgba(26,158,143,0.25)";
              }}
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* ── MOBILE DRAWER MENU ── */}
        {mobileOpen && (
          <div
            style={{
              borderTop: "1px solid #e8edf2",
              backgroundColor: "#fff",
              paddingBottom: 24,
            }}
          >
            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "14px 16px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: NAVY,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  textAlign: "left",
                }}
              >
                Services
                {mobileServicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {mobileServicesOpen && (
                <div style={{ backgroundColor: "#f8fbfe", borderTop: "1px solid #e8edf2", borderBottom: "1px solid #e8edf2" }}>
                  {navLinks[0].dropdown!.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        style={{
                          display: "block",
                          padding: "12px 28px",
                          fontSize: 15,
                          fontWeight: 500,
                          color: NAVY,
                          fontFamily: "'DM Sans', sans-serif",
                          cursor: "pointer",
                          borderBottom: "1px solid #e8edf2",
                        }}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav links */}
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    fontSize: 16,
                    fontWeight: 600,
                    color: NAVY,
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: "pointer",
                    borderBottom: "1px solid #f0f4f8",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            {/* Phone + full-width CTA */}
            <div style={{ padding: "16px 16px 0" }}>
              <a
                href="tel:7252553688"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 16,
                  fontWeight: 600,
                  color: NAVY,
                  textDecoration: "none",
                  marginBottom: 14,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Phone size={16} style={{ color: TEAL }} />
                (725) 255-3688
              </a>
              <Link
                href="/get-a-quote"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  backgroundColor: TEAL,
                  color: "#fff",
                  padding: "14px 20px",
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  const services = [
    { label: "Standard Cleaning", href: "/standard-cleaning" },
    { label: "Deep Cleaning", href: "/deep-cleaning" },
    { label: "Recurring Cleaning", href: "/recurring-cleaning" },
    { label: "Move-In / Move-Out", href: "/move-in-move-out" },
    { label: "Airbnb / STR Turnover", href: "/airbnb-cleaning" },
    { label: "Commercial / Office", href: "/commercial-cleaning" },
  ];

  const resources = [
    { label: "Reviews", href: "/reviews" },
    { label: "Cleaning Checklist", href: "/cleaning-checklist" },
    { label: "FAQ", href: "/faq" },
  ];

  const locationGroups: { state: string; links: { label: string; href: string }[] }[] = [
    {
      state: "California",
      links: [
        { label: "Los Angeles / Orange County", href: "/locations/los-angeles-orange-county" },
        { label: "Sacramento", href: "/locations/sacramento" },
      ],
    },
    {
      state: "Nevada",
      links: [
        { label: "Las Vegas & Reno", href: "/locations/las-vegas-nevada" },
        { label: "Reno", href: "/locations/las-vegas-nevada/reno" },
      ],
    },
  ];

  const colHeading: CSSProperties = {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)",
    marginBottom: 14,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  const linkStyle: CSSProperties = {
    fontSize: 14,
    color: "rgba(255,255,255,0.72)",
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    transition: "color 0.2s",
    textDecoration: "none",
  };

  const stateHeading: CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.42)",
    margin: "0 0 8px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  const FooterLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href}>
      <span
        style={linkStyle}
        onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "#fff")}
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.72)")
        }
      >
        {label}
      </span>
    </Link>
  );

  return (
    <footer style={{ backgroundColor: NAVY, color: "#fff", padding: "48px 0 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <img
              src={LOGO_URL}
              alt="Steampunk Cleaning Services"
              style={{
                height: 56,
                width: "auto",
                maxWidth: 200,
                marginBottom: 16,
                filter: "brightness(0) invert(1)",
              }}
            />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.72)",
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 240,
              }}
            >
              Professional house cleaning across Los Angeles / Orange County, Las Vegas & Reno /
              Nevada, and Sacramento.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={colHeading}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {services.map((s) => (
                <li key={s.href} style={{ marginBottom: 8 }}>
                  <FooterLink href={s.href} label={s.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Locations — grouped by state for scannability */}
          <div>
            <h4 style={colHeading}>Locations</h4>
            {locationGroups.map((group, i) => (
              <div key={group.state} style={{ marginBottom: i === locationGroups.length - 1 ? 14 : 18 }}>
                <p style={stateHeading}>{group.state}</p>
                <ul style={{ listStyle: "none", padding: "0 0 0 10px", margin: 0 }}>
                  {group.links.map((m) => (
                    <li
                      key={m.href}
                      style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <span style={{ color: TEAL, fontSize: 10, lineHeight: 1 }}>●</span>
                      <FooterLink href={m.href} label={m.label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div style={{ paddingTop: 2, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <ul style={{ listStyle: "none", padding: "10px 0 0", margin: 0 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: TEAL, fontSize: 10, lineHeight: 1 }}>●</span>
                  <FooterLink href="/locations" label="All Locations" />
                </li>
              </ul>
            </div>
          </div>

          {/* Resources — Reviews / Checklist / FAQ (not under Locations) */}
          <div>
            <h4 style={colHeading}>Resources</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {resources.map((r) => (
                <li key={r.href} style={{ marginBottom: 8 }}>
                  <FooterLink href={r.href} label={r.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={colHeading}>Contact</h4>
            <a
              href="tel:7252553688"
              style={{
                display: "block",
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                marginBottom: 8,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              (725) 255-3688
            </a>
            <a
              href="mailto:info@steampunkhousecleaning.com"
              style={{
                display: "block",
                fontSize: 14,
                color: "rgba(255,255,255,0.72)",
                textDecoration: "none",
                marginBottom: 8,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              info@steampunkhousecleaning.com
            </a>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: 16,
              }}
            >
              Mon–Sat, 8am–6pm
            </p>
            <Link
              href="/get-a-quote"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: TEAL,
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: "none",
              }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
              fontFamily: "'DM Sans', sans-serif",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Steampunk Cleaning Services. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link
              href="/privacy"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
