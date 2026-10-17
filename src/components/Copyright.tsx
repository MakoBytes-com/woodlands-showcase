import Link from "next/link";

// Copyright notice for the public showcase. Mako Logics LLC claims only its own
// work here (the design, the code and the copy it wrote). The practice's name,
// logo, provider photos and details belong to the practice, and the home-page
// background video is third-party stock, so none of those carry a watermark.

export const COPYRIGHT_OWNER = "Mako Logics LLC";
export const COPYRIGHT_YEAR = 2026;
export const PRACTICE_NAME = "Family Psychiatry of The Woodlands";
export const SITE_URL = "https://woodlands-showcase.vercel.app";
export const LICENSE_CONTACT_URL = "https://makoai.studio/#contact";

export const COPYRIGHT_LINE = `© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved.`;
export const COPYRIGHT_BODY = `This demo is protected by copyright. Using its design, code or copy requires a license from ${COPYRIGHT_OWNER}.`;
export const COPYRIGHT_NOTICE = `${COPYRIGHT_LINE} ${COPYRIGHT_BODY}`;
export const THIRD_PARTY_LINE = `The ${PRACTICE_NAME} name, logo, provider photos, practice details and trademarks belong to their owner and are shown for demonstration only.`;

/** Notice that sits in the home-page hero, over the video. */
export function HeroCopyrightNotice() {
  return (
    <aside
      aria-label="Copyright notice"
      className="mt-10 max-w-xl rounded-2xl border border-white/15 bg-black/35 px-4 py-3 text-[12px] sm:text-[12.5px] leading-relaxed text-canvas/85 backdrop-blur-md"
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <p>
        <strong className="font-semibold text-canvas">{COPYRIGHT_LINE}</strong> {COPYRIGHT_BODY}{" "}
        <Link
          href="/license"
          className="font-medium text-canvas underline decoration-clay underline-offset-4 hover:decoration-canvas"
        >
          License terms →
        </Link>
      </p>
      <p className="mt-1.5 text-canvas/70">{THIRD_PARTY_LINE}</p>
    </aside>
  );
}

/** Footer band: the full notice, the third-party line and the license link. */
export function FooterCopyright() {
  return (
    <div className="border-t border-hairline bg-sage-soft/60">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-sage">About this demo</div>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-ink-muted">
          <strong className="font-semibold text-ink">{COPYRIGHT_LINE}</strong> {COPYRIGHT_BODY}{" "}
          <Link
            href="/license"
            className="font-medium text-sage underline decoration-sage/40 underline-offset-4 hover:decoration-sage"
          >
            How to license it
          </Link>
        </p>
        <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-ink-muted">{THIRD_PARTY_LINE}</p>
      </div>
    </div>
  );
}
