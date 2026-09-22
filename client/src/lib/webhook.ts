/**
 * webhook.ts — Google Apps Script webhook integration
 *
 * SETUP: After deploying the Apps Script, paste the Web App URL below.
 * Replace the placeholder string with your actual URL.
 */

// ─── PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE ──────────────────────────
export const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwCd_ytuGXEWsk9EfslC33IantpKArUx0sri1FXzgRgjWR3Kqy6Dea7GsMlTDacklYllQ/exec";
// ─────────────────────────────────────────────────────────────────────────────

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  city: string;
  serviceType: string;
  bedrooms?: string;
  notes?: string;
  sourcePage: string;
}

/**
 * Submits a lead form to the Google Sheets webhook.
 * Returns true on success, throws on failure.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    // Apps Script requires no-cors for cross-origin POST from browser
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // no-cors mode returns opaque response — we can't read status,
  // but if fetch doesn't throw, the request was sent successfully.
  void response;
}
