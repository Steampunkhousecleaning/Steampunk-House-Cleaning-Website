/**
 * PricingPlaceholderBlock — "Starting at" rows (Studio/1 BR, 2 BR, 3 BR, 4+ BR).
 *
 * Owner rule: no prices until the owner supplies them. Every row is an
 * [OWNER: add price] placeholder and the whole block renders NOTHING unless
 * the build sets VITE_SHOW_DRAFT_PRICING=true (see lib/draftFlags.ts).
 */
import { SHOW_DRAFT_PRICING } from "@/lib/draftFlags";

const NAVY = "#3D5266";

const ROWS = ["Studio / 1 BR", "2 BR", "3 BR", "4+ BR"];

export function PricingPlaceholderBlock({ serviceLabel }: { serviceLabel: string }) {
  if (!SHOW_DRAFT_PRICING) return null;
  return (
    <section
      data-draft-pricing="true"
      style={{ padding: "32px 0", backgroundColor: "#fffbea", borderTop: "2px dashed #e0b400", borderBottom: "2px dashed #e0b400" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 1.5rem" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a6d00", marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>
          Draft only — hidden in production until real prices are supplied
        </p>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: NAVY, marginBottom: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {serviceLabel}: starting at
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r} style={{ borderBottom: "1px solid #eadfa8" }}>
                <td style={{ padding: "10px 0", color: NAVY, fontWeight: 600 }}>{r}</td>
                <td style={{ padding: "10px 0", textAlign: "right", color: "#8a6d00", fontWeight: 700 }}>[OWNER: add price]</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
