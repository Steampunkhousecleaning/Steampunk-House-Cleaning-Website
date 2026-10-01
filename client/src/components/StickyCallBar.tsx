/**
 * StickyCallBar — slim fixed call bar for phones (<= 768px; hidden via CSS above that).
 * Number comes from lib/phones.ts (per-metro map, main number fallback).
 * Page bottom padding is added in index.css so it never covers footer/form content.
 */

import { useLocation } from "wouter";
import { Phone } from "lucide-react";
import { getPhoneForPath, metroSlugFromPath } from "@/lib/phones";

export function StickyCallBar() {
  const [location] = useLocation();
  const phone = getPhoneForPath(location);
  return (
    <div className="sticky-call-bar" data-metro={metroSlugFromPath(location) ?? "main"}>
      <a
        className="sticky-call-bar__link"
        data-ga-location="call_bar"
        href={`tel:${phone.tel}`}
        aria-label={`Call Steampunk House Cleaning at ${phone.display}`}
      >
        <Phone size={16} aria-hidden="true" />
        <span>Call {phone.display}</span>
      </a>
    </div>
  );
}
