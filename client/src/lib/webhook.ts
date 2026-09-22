/**
 * webhook.ts — Google Apps Script webhook integration
 *
 * SETUP: After deploying the Apps Script, paste the Web App URL below.
 * Replace the placeholder string with your actual URL.
 *
 * CORS note (2026-09): script.google.com returns Access-Control-Allow-Origin: *
 * on the initial POST, but redirects to script.googleusercontent.com where the
 * browser cannot reliably read a success status (preflight/redirect). Prefer a
 * cors attempt so we only claim verified success on HTTP OK; if that fails,
 * fall back to mode:"no-cors" best-effort send and return verified:false so the
 * UI does not pretend delivery was confirmed.
 */

// ─── PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE ──────────────────────────
export const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwCd_ytuGXEWsk9EfslC33IantpKArUx0sri1FXzgRgjWR3Kqy6Dea7GsMlTDacklYllQ/exec";
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

export type SubmitLeadResult = {
  /** True only when the server returned a readable HTTP OK under CORS. */
  verified: boolean;
};

/**
 * Submits a lead form to the Google Sheets webhook.
 * Resolves with { verified } on send; throws only if both cors and no-cors fail.
 */
export async function submitLead(
  payload: LeadPayload,
): Promise<SubmitLeadResult> {
  const body = JSON.stringify(payload);
  // text/plain avoids a CORS preflight; Apps Script still parses JSON body.
  const headers = { "Content-Type": "text/plain;charset=utf-8" };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      headers,
      body,
    });
    if (response.ok) {
      return { verified: true };
    }
    throw new Error(`Webhook returned HTTP ${response.status}`);
  } catch (err) {
    console.warn(
      "[Webhook] CORS-verified submit unavailable (Apps Script CORS/redirect). Falling back to no-cors best-effort send.",
      err,
    );
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers,
        body,
      });
      // Opaque response — request left the browser, status unknown.
      return { verified: false };
    } catch (fallbackErr) {
      console.error("[Webhook] no-cors fallback also failed:", fallbackErr);
      throw fallbackErr;
    }
  }
}
