import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sage" />
            <span className="font-serif text-[16px] tracking-tight text-ink">
              Family Psychiatry <span className="italic text-ink-muted">of The Woodlands</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-muted">
            Individualized psychiatric care for children, adolescents, and adults in The Woodlands and Spring, Texas — for more than 30 years.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Contact</div>
          <ul className="mt-5 space-y-2 text-[14px] text-ink-muted">
            <li><a href="tel:2813671015" className="hover:text-ink">281.367.1015</a></li>
            <li className="text-ink-subtle">Fax 281.367.1966</li>
            <li className="text-ink-subtle">Fax 866.621.3847</li>
            <li><a href="mailto:info@woodlandspsych.com" className="hover:text-ink">info@woodlandspsych.com</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Visit</div>
          <address className="mt-5 not-italic text-[14px] leading-relaxed text-ink-muted">
            8701 New Trails Dr<br />
            Suite 150<br />
            Spring, TX 77381
          </address>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Hours</div>
          <div className="mt-5 text-[14px] text-ink-muted">
            Mon – Fri<br />
            <span className="text-ink-subtle">8:00 – 5:00</span><br />
            <span className="text-ink-subtle">Sat & Sun closed</span>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-[12px] text-ink-subtle">
          <div className="font-serif italic">© {new Date().getFullYear()} Family Psychiatry of The Woodlands</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-ink transition">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-ink transition">Terms</Link>
            <span>Built by Makologics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
