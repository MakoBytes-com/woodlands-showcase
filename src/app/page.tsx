import Link from "next/link";
import { providers } from "@/lib/providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const services = [
  {
    title: "Psychiatric Evaluation",
    body: "A careful, unhurried first conversation. We listen, we ask, we make space for the full picture before recommending anything.",
    href: "/our-team",
  },
  {
    title: "Medication Management",
    body: "Thoughtful, individualized prescribing for adults, adolescents, and children — with regular check-ins, not rushed refills.",
    href: "/our-team",
  },
  {
    title: "TMS Therapy",
    body: "Transcranial Magnetic Stimulation for treatment-resistant depression. Non-invasive, FDA-cleared, performed in our office.",
    href: "/tms-therapy",
  },
  {
    title: "Clinical Trials",
    body: "An IHC-monitored research program led by Dr. Lucas, exploring new treatments for conditions that haven't responded to standard care.",
    href: "/clinical-trials",
  },
];

const pillars = [
  { label: "Performance", body: "Showing up sharper at work, school, and in the moments that matter." },
  { label: "Physical Health", body: "The deep link between body and mind — nutrition, sleep, movement, energy." },
  { label: "Mental Clarity", body: "Quieter days, fewer racing thoughts, the ability to enjoy what&rsquo;s in front of you." },
];

export default function Home() {
  return (
    <main className="relative">
      <SiteHeader />

      {/* HERO — fullscreen video */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://video.wixstatic.com/video/11062b_ccca7f90042845a0ab12536ce421b7ad/1080p/mp4/file.mp4"
            type="video/mp4"
            media="(min-width: 1024px)"
          />
          <source
            src="https://video.wixstatic.com/video/11062b_ccca7f90042845a0ab12536ce421b7ad/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,36,33,0.35) 0%, rgba(31,36,33,0) 30%, rgba(31,36,33,0) 50%, rgba(31,36,33,0.55) 80%, rgba(31,36,33,0.85) 100%)",
          }}
        />

        <div className="relative w-full px-6 pb-20 md:pb-28 pt-40">
          <div className="max-w-6xl mx-auto text-canvas">
            <div data-reveal className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-canvas/85">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              Spring, Texas · Established 1992
            </div>

            <h1
              data-reveal="2"
              className="mt-7 font-serif text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] tracking-[-0.025em] max-w-5xl text-canvas"
              style={{ textShadow: "0 2px 30px rgba(0,0,0,0.35)" }}
            >
              Mental health care that <em className="italic font-light text-clay">actually feels</em> like care.
            </h1>

            <p
              data-reveal="3"
              className="mt-8 max-w-xl text-[17px] leading-relaxed text-canvas/85"
              style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
            >
              For more than thirty years, we&rsquo;ve walked alongside children, teens, and adults in The Woodlands — taking the time to listen, to understand, and to build a treatment plan that fits one person at a time.
            </p>

            <div data-reveal="4" className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/new-patient-appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-canvas py-3.5 pl-6 pr-2 text-[14px] font-medium text-ink transition-transform active:scale-[0.98]"
              >
                <span>Schedule a first visit</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-transform group-hover:translate-x-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </Link>
              <Link href="#services" className="text-[14px] text-canvas/85 underline decoration-white/30 underline-offset-4 hover:text-canvas hover:decoration-white/60 transition">
                Or learn how we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 -mt-12 md:-mt-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline rounded-3xl overflow-hidden border border-hairline shadow-[0_30px_60px_-30px_rgba(31,36,33,0.25)]">
            {[
              { k: "30+", v: "Years in practice" },
              { k: "9", v: "Providers on staff" },
              { k: "Ages 5+", v: "Children to adults" },
              { k: "FDA-cleared", v: "TMS therapy on site" },
            ].map((s) => (
              <div key={s.v} className="bg-canvas px-6 py-7">
                <div className="font-serif text-[28px] leading-none tracking-tight text-sage">{s.k}</div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.14em] text-ink-subtle">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEING WELL — intro paragraph */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Being well</div>
            <h2 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-tight">
              Comprehensive care for everyone <em className="italic font-light">age five and up.</em>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-[16px] leading-relaxed text-ink-muted">
            <p>
              The clinicians at Family Psychiatry of The Woodlands provide comprehensive evaluations, individualized medication management, and education to patients age five and up — for the full range of mental health concerns.
            </p>
            <p>
              Business hours are 8:00 a.m. to 5:00 p.m., Monday through Friday. Our staff are available to help with scheduling, refills, billing, and getting messages to your clinician.
            </p>
            <p className="text-ink">
              Dr. Marshall Lucas also serves as Medical Director at Woodland Springs in Conroe, TX — providing inpatient hospitalization and treatment for patients age thirteen and up with psychiatric, addictive, and co-occurring disorders.
            </p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="px-6 py-24 bg-sage-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Three pillars</div>
            <h2 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-tight">
              Wellness lives at the intersection of <em className="italic font-light">three things.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <div key={p.label} className="rounded-3xl border border-hairline bg-canvas p-9 text-center">
                <div className="font-serif italic text-[14px] text-clay">0{i + 1}</div>
                <h3 className="mt-4 font-serif text-[24px] text-ink">{p.label}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-muted" dangerouslySetInnerHTML={{ __html: p.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — bento */}
      <section id="services" className="relative px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.18em] text-sage">What we do</div>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-tight">
              Four ways we help, <em className="italic font-light">all under one roof.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className={[
                  "group relative rounded-[2rem] p-2 bg-white/60 border border-hairline transition-colors hover:bg-white",
                  i === 0 ? "md:col-span-7" : "",
                  i === 1 ? "md:col-span-5" : "",
                  i === 2 ? "md:col-span-5" : "",
                  i === 3 ? "md:col-span-7" : "",
                ].join(" ")}
              >
                <div className="rounded-[calc(2rem-0.5rem)] bg-surface p-9 md:p-11 h-full" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), 0 20px 40px -28px rgba(31,36,33,0.12)" }}>
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-serif text-[26px] leading-tight tracking-tight text-ink">{s.title}</h3>
                    <span className="mt-1 font-serif italic text-[14px] text-ink-subtle">0{i + 1}</span>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-muted max-w-md">{s.body}</p>
                  <div className="mt-6 text-[13px] text-sage opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — split */}
      <section className="px-6 py-32 bg-sage-soft">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Our approach</div>
            <h2 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-tight">
              No fifteen-minute <em className="italic font-light">refill mills.</em>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-[16px] leading-relaxed text-ink-muted">
            <p>
              Psychiatry done well takes time. It takes a real conversation about what&rsquo;s been happening, what&rsquo;s been tried, what&rsquo;s working, and what isn&rsquo;t. We build that into every appointment.
            </p>
            <p>
              When medication is the right tool, we manage it carefully — adjusting, listening, and following up. When it isn&rsquo;t, we&rsquo;ll say so. And when treatment-resistant depression needs a different approach, we offer in-office TMS and access to clinical trials.
            </p>
            <p className="text-ink">
              You&rsquo;re not a chart number here. You&rsquo;re a person we&rsquo;ll likely know for years.
            </p>
          </div>
        </div>
      </section>

      {/* CHILDREN AT RISK CALLOUT */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] p-2 border border-hairline bg-white/60">
          <div className="rounded-[calc(2rem-0.5rem)] bg-clay/95 text-canvas p-12 md:p-16 grid md:grid-cols-12 gap-10 items-center" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" }}>
            <div className="md:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.2em] text-canvas/70">Did you know</div>
              <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] tracking-tight">
                One in ten children has a clinically diagnosable mental health problem.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-canvas/85">
                Yet 70% of children and adolescents with mental health needs don&rsquo;t receive appropriate intervention early enough. We see kids age five and up — and we know how to talk with them.
              </p>
            </div>
            <div className="md:col-span-5 flex md:justify-end">
              <Link href="/our-team" className="group inline-flex items-center gap-2 rounded-full bg-canvas py-3.5 pl-6 pr-2 text-[14px] font-medium text-ink active:scale-[0.98] transition-transform">
                <span>Meet our team</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 group-hover:translate-x-0.5 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section id="team" className="px-6 py-24 bg-sage-soft">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <div className="text-[11px] uppercase tracking-[0.18em] text-sage">The people</div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-tight">
                A team you&rsquo;ll <em className="italic font-light">recognize</em> by name.
              </h2>
            </div>
            <Link href="/our-team" className="text-[14px] text-sage underline decoration-sage/30 underline-offset-4 hover:decoration-sage">
              See the full team →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
            {providers.slice(0, 6).map((p) => (
              <Link key={p.slug} href={`/providers/${p.slug}`} className="group bg-canvas px-7 py-8 transition-colors hover:bg-white">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center font-serif text-[15px] text-sage shrink-0" style={{ background: "var(--sage-soft)", border: "1px solid var(--hairline)" }}>
                    {p.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.photo} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      p.initials
                    )}
                  </div>
                  <div>
                    <div className="font-serif text-[18px] leading-tight text-ink">{p.name}</div>
                    <div className="mt-1 text-[12px] text-ink-subtle">{p.credentials}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXISTING PATIENTS */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Existing patients</div>
          <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight">
            Need to refill, request records, or message your clinician?
          </h2>
          <p className="mt-6 text-[15px] text-ink-muted max-w-xl mx-auto">
            Existing patients can reach their clinician and supporting team through the patient portal for follow-up appointments, medication refills, billing concerns, and medical records requests.
          </p>
          <a href="tel:2813671015" className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline bg-white py-3.5 px-6 text-[14px] font-medium text-ink hover:bg-sage-soft transition">
            Patient Portal · (281) 367-1015
          </a>
        </div>
      </section>

      {/* VISIT CTA */}
      <section id="visit" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[2rem] p-2 border border-hairline bg-white/60">
            <div className="rounded-[calc(2rem-0.5rem)] bg-ink text-canvas p-12 md:p-20 relative overflow-hidden" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}>
              <div className="grid md:grid-cols-12 gap-10 relative">
                <div className="md:col-span-7">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-canvas/60">Visit us</div>
                  <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.02] tracking-tight">
                    Ready when <em className="italic font-light text-clay">you are</em>.
                  </h2>
                  <p className="mt-6 max-w-md text-[15px] leading-relaxed text-canvas/70">
                    New patients are welcome. Call us and we&rsquo;ll walk you through what to expect — no pressure, no rushing.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a href="tel:2813671015" className="group inline-flex items-center gap-2 rounded-full bg-canvas py-3.5 pl-6 pr-2 text-[14px] font-medium text-ink transition-transform active:scale-[0.98]">
                      <span>Call (281) 367-1015</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-transform group-hover:translate-x-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                      </span>
                    </a>
                    <Link href="/new-patient-appointment" className="text-[14px] text-canvas/80 underline decoration-white/30 underline-offset-4 hover:text-canvas py-3.5 inline-flex items-center">
                      Or request online
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-5 md:border-l md:border-canvas/10 md:pl-10 space-y-7">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-canvas/50">Address</div>
                    <div className="mt-2 font-serif text-[18px] leading-snug">
                      8701 New Trails Dr<br />
                      Suite 150<br />
                      Spring, TX 77381
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-canvas/50">Hours</div>
                    <div className="mt-2 font-serif text-[18px] leading-snug">
                      Monday – Friday<br />
                      <span className="text-canvas/70">8:00 AM – 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
