import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative pt-44 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-6 font-serif text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.02] tracking-[-0.025em] text-ink max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
