import Link from "next/link";
import { providers } from "@/lib/providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Our Team — Family Psychiatry of The Woodlands",
  description: "Meet the psychiatrists, nurse practitioners, and research team at Family Psychiatry of The Woodlands.",
};

const groups = [
  { key: "Psychiatry", label: "Clinicians" },
  { key: "Nurse Practitioner", label: "Nurse Practitioners" },
  { key: "Research", label: "Research" },
] as const;

export default function OurTeamPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="Our team"
        title={
          <>
            A team you&rsquo;ll <em className="italic font-light text-sage">recognize</em> by name.
          </>
        }
        subtitle="Family Psychiatry of The Woodlands is dedicated to offering our patients and the community the best mental health care possible. The Physicians, Psychiatric Mental Health Nurse Practitioners, and research staff collaborate to diagnose and create treatment plans for each patient."
      />

      {groups.map((g) => {
        const list = providers.filter((p) => p.category === g.key);
        if (!list.length) return null;
        return (
          <section key={g.key} className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-[11px] uppercase tracking-[0.18em] text-sage mb-8">
                {g.label}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
                {list.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/providers/${p.slug}`}
                    className="group bg-canvas px-7 py-8 transition-colors hover:bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="h-14 w-14 rounded-full overflow-hidden flex items-center justify-center font-serif text-[16px] text-sage shrink-0"
                        style={{ background: "var(--sage-soft)", border: "1px solid var(--hairline)" }}
                      >
                        {p.photo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.photo} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                        ) : (
                          p.initials
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-serif text-[18px] leading-tight text-ink">{p.name}</div>
                        <div className="mt-1 text-[12px] text-ink-subtle truncate">{p.credentials}</div>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-subtle transition group-hover:text-sage group-hover:translate-x-0.5">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <SiteFooter />
    </main>
  );
}
