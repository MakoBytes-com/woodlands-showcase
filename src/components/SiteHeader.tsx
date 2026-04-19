import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[min(94vw,920px)]">
      <nav
        className="flex items-center justify-between gap-4 rounded-full px-3 py-2 backdrop-blur-xl"
        style={{
          background: "rgba(251, 249, 245, 0.78)",
          border: "1px solid var(--hairline)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 12px 40px -20px rgba(31,36,33,0.18)",
        }}
      >
        <Link href="/" className="flex items-center gap-2 pl-3 shrink-0">
          <span className="h-2 w-2 rounded-full bg-sage" />
          <span className="font-serif text-[14px] tracking-tight text-ink whitespace-nowrap">
            Family Psychiatry <span className="italic text-ink-muted">of The Woodlands</span>
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-[13px] text-ink-muted">
          <Link href="/our-team" className="hover:text-ink transition-colors">Team</Link>
          <Link href="/tms-therapy" className="hover:text-ink transition-colors">TMS</Link>
          <Link href="/clinical-trials" className="hover:text-ink transition-colors">Trials</Link>
          <Link href="/insurance-billing" className="hover:text-ink transition-colors">Insurance</Link>
          <Link href="/medical-references" className="hover:text-ink transition-colors">References</Link>
        </div>
        <Link
          href="/new-patient-appointment"
          className="group flex items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-2 text-[13px] text-canvas transition-transform active:scale-[0.98] shrink-0"
        >
          <span className="hidden sm:inline">New patient</span>
          <span className="sm:hidden">Book</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-canvas/15 transition-transform group-hover:translate-x-0.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </nav>
    </header>
  );
}
