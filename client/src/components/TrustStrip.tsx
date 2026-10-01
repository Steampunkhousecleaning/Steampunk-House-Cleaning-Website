/**
 * TrustStrip — one quiet row placed directly above quote forms.
 * Reuses the Google Guaranteed badge asset already used on the homepage.
 */

import { Fragment } from "react";

const GOOGLE_GUARANTEED_BADGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663372141965/ywAVprjqeLDoJZOs.svg";

const ITEMS = [
  "Licensed · Bonded · Insured",
  "Background-checked cleaners",
  "4.9 ★ · 400+ Google reviews",
];

export function TrustStrip({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="trust-strip" style={style}>
      <img
        src={GOOGLE_GUARANTEED_BADGE}
        alt="Google Guaranteed"
        height={22}
        style={{ height: 22, width: "auto" }}
      />
      {ITEMS.map((t) => (
        <Fragment key={t}>
          <span className="trust-strip__sep" aria-hidden="true" />
          <span className="trust-strip__item">{t}</span>
        </Fragment>
      ))}
    </div>
  );
}
