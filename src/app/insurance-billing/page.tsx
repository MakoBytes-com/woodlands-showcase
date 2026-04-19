import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Insurance & Billing — Family Psychiatry of The Woodlands",
  description: "Insurances accepted at Family Psychiatry of The Woodlands and our 4-step new patient process.",
};

const insurers = [
  "Aetna HMO, PPO, POS, Exxon",
  "Blue Cross Blue Shield",
  "Cigna HMO and PPO",
  "Great West Cigna",
  "Magellan",
  "Medicare",
  "United Health Care",
  "Cigna Health Springs (Medicare only)",
  "Devoted Health",
];

const steps = [
  { n: "01", title: "Schedule an appointment", body: "Request your visit online or by phone. We&rsquo;ll match you with the right provider." },
  { n: "02", title: "Consult with a clinician", body: "An unhurried first conversation about your history, what&rsquo;s been tried, and what you need." },
  { n: "03", title: "Begin your treatment plan", body: "Your physician designs an individualized plan — medication, therapy, TMS, or a combination." },
  { n: "04", title: "Visit to monitor progress", body: "Regular follow-ups so we can adjust, listen, and keep your care moving forward." },
];

export default function InsuranceBillingPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="Insurance & billing"
        title={
          <>
            Care that works with <em className="italic font-light text-sage">your coverage.</em>
          </>
        }
        subtitle="We accept a wide range of insurance plans and add new ones regularly. If your provider isn&rsquo;t listed, give us a call — we&rsquo;ll let you know what&rsquo;s possible."
      />

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto rounded-[2rem] p-2 border border-hairline bg-white/60">
          <div
            className="rounded-[calc(2rem-0.5rem)] bg-surface p-12 md:p-16"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), 0 30px 60px -40px rgba(31,36,33,0.18)" }}
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Insurances accepted</div>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight">
              We work with most major <em className="italic font-light">plans.</em>
            </h2>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-3 text-[15px] text-ink">
              {insurers.map((i) => (
                <li key={i} className="flex items-start gap-3 border-b border-hairline pb-3">
                  <span className="text-sage mt-1.5">·</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-[13px] italic text-ink-subtle max-w-2xl">
              Not all providers accept all insurance listed. Please call to see if your preferred provider accepts your insurance.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Step process */}
      <section className="px-6 py-20 bg-sage-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">How it works</div>
          <h2 className="mt-4 mb-14 font-serif text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.05] tracking-tight">
            Four steps, <em className="italic font-light">no surprises.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="rounded-3xl bg-canvas border border-hairline p-8">
                <div className="font-serif italic text-[14px] text-clay">{s.n}</div>
                <h3 className="mt-4 font-serif text-[20px] text-ink leading-tight">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-muted" dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.4rem)] leading-tight">
            Ready to start?
          </h2>
          <Link href="/new-patient-appointment" className="mt-8 group inline-flex items-center gap-2 rounded-full bg-sage py-3.5 pl-6 pr-2 text-[14px] font-medium text-canvas active:scale-[0.98] transition-transform">
            <span>Request an appointment</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas/15 group-hover:translate-x-0.5 transition-transform">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
