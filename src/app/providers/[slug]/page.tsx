import { notFound } from "next/navigation";
import Link from "next/link";
import { providers, getProvider } from "@/lib/providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) return { title: "Provider not found" };
  return {
    title: `${provider.name} — Family Psychiatry of The Woodlands`,
    description: provider.bio[0]?.slice(0, 160),
  };
}

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) notFound();

  return (
    <main className="relative">
      <SiteHeader />

      <section className="pt-44 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-[2rem] p-2 border border-hairline bg-white/60">
              <div
                className="relative h-full w-full rounded-[calc(2rem-0.5rem)] overflow-hidden bg-sage-soft"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}
              >
                {provider.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={provider.photo}
                    alt={provider.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-[120px] text-sage/60 leading-none">
                      {provider.initials}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.18em] text-sage">
              {provider.category}
              {provider.yearsLabel ? ` · ${provider.yearsLabel}` : ""}
            </div>
            <h1 className="mt-4 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] tracking-[-0.025em] text-ink">
              {provider.name}
            </h1>
            <div className="mt-3 text-[15px] text-ink-muted">{provider.credentials}</div>

            <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-ink-muted max-w-2xl">
              {provider.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {provider.practiceDetails && (
              <div className="mt-10 rounded-3xl border border-hairline bg-sage-soft p-7">
                <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Practice details</div>
                <ul className="mt-4 space-y-1 text-[15px] text-ink">
                  {provider.practiceDetails.map((d) => (
                    <li key={d}>· {d}</li>
                  ))}
                </ul>
              </div>
            )}

            {provider.note && (
              <p className="mt-6 text-[14px] italic text-ink-subtle max-w-2xl">
                Note: {provider.note}
              </p>
            )}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/new-patient-appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-sage py-3.5 pl-6 pr-2 text-[14px] font-medium text-canvas transition-transform active:scale-[0.98]"
              >
                <span>Request an appointment</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas/15 transition-transform group-hover:translate-x-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/our-team"
                className="text-[14px] text-ink-muted underline decoration-hairline underline-offset-4 hover:text-ink py-3.5 inline-flex items-center"
              >
                ← Back to the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
