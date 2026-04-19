import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "TMS Therapy — Family Psychiatry of The Woodlands",
  description: "FDA-cleared Transcranial Magnetic Stimulation (TMS) for treatment-resistant depression. Performed in our Spring, TX office.",
};

const faqs = [
  {
    q: "Does insurance pay for TMS Therapy?",
    a: "These insurance providers cover TMS Therapy: Aetna, Medicare, BlueCross BlueShield, Tricare, Magellan Health, Cigna, and United Health Care.",
  },
  {
    q: "How does TMS Therapy work?",
    a: "TMS Therapy uses a targeted pulsed magnetic field to stimulate areas of the brain that are less active in people with depression than in people without depression. These pulses are similar to those given out by MRI machines.",
  },
  {
    q: "What is the treatment like?",
    a: "During treatment, you'll sit in a comfortable chair with a light-weight device resting on your head. You'll be awake and alert during the treatment. You may continue your normal daily activities right after treatment is over.",
  },
  {
    q: "How long does each TMS treatment take?",
    a: "Each treatment takes 38 minutes. You'll typically need 5 treatments a week for 6–7 weeks to feel better — a total of between 30 and 36 TMS Therapy treatments.",
  },
  {
    q: "Does TMS Therapy have side effects?",
    a: "Less than 5% of people who choose TMS Therapy experience temporary pain or discomfort near where the device touches their heads. This discomfort usually lasts one week. There is a very low risk of seizure: 1 in every 10,000 treatments.",
  },
  {
    q: "Who should have TMS Therapy?",
    a: "TMS is for adult men and women who have major depressive disorder. Depression medications and talk therapy should be tried before considering this treatment. Because TMS typically requires 5 treatments a week for 6–7 weeks, people choosing this therapy must be motivated to get well.",
  },
  {
    q: "Who should NOT have TMS Therapy?",
    a: "TMS is safe for most people. Men and women who have magnetic-sensitive metal in their heads — such as implants, clips, stents, and devices — should not have TMS Therapy. People with cardiac devices or who have epilepsy or other seizure disorders may be treated with caution. We thoroughly assess each person in our care, and fully review all risks with them, before we begin TMS.",
  },
];

export default function TmsPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="FDA-cleared · 2008"
        title={
          <>
            When medication isn&rsquo;t enough, <em className="italic font-light text-sage">there&rsquo;s TMS.</em>
          </>
        }
        subtitle="Transcranial Magnetic Stimulation is a safe, gentle, non-medication treatment for Major Depressive Disorder that has not responded to traditional management. It&rsquo;s performed in our office, in a comfortable chair, while you stay awake and alert."
      />

      {/* What is TMS — dark band */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto rounded-[2rem] p-2 border border-hairline bg-white/60">
          <div
            className="rounded-[calc(2rem-0.5rem)] bg-ink text-canvas p-12 md:p-16"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}
          >
            <div className="text-[11px] uppercase tracking-[0.2em] text-canvas/60">What is TMS</div>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.1] tracking-tight max-w-3xl">
              The FDA approved TMS Therapy in 2008 as a safe, effective treatment for individuals not seeing ideal improvement from oral antidepressants.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-canvas/70 max-w-2xl">
              Since then, more than 25,000 people have been successfully treated for depression with TMS.
            </p>
          </div>
        </div>
      </section>

      {/* Are you struggling */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">For you?</div>
          <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.05] tracking-tight">
            Are you struggling with <em className="italic font-light">ongoing depression?</em>
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-muted">
            <p>Have you tried multiple medications and still see symptoms of your depression?</p>
            <p>Do you feel like every medication you have tried is not the right key to unlock your happiness?</p>
            <p className="text-ink">
              Our team here at Family Psychiatry of The Woodlands may have the key to alleviate your symptoms — without medications. TMS Therapy is safe, gentle, and effective for Major Depressive Disorders that are resistant to medication management. Ask our team about TMS today.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-sage-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Frequently asked</div>
          <h2 className="mt-4 mb-12 font-serif text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.05] tracking-tight">
            Questions, <em className="italic font-light">answered.</em>
          </h2>
          <div className="divide-y divide-hairline border-y border-hairline">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-serif text-[19px] text-ink pr-6">{f.q}</span>
                  <span className="text-sage text-[20px] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-muted max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight">
            Think TMS might be right for you?
          </h2>
          <p className="mt-4 text-[15px] text-ink-muted">Call us or request a TMS appointment online.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="tel:2813671015" className="group inline-flex items-center gap-2 rounded-full bg-sage py-3.5 pl-6 pr-2 text-[14px] font-medium text-canvas active:scale-[0.98] transition-transform">
              <span>Call (281) 367-1015</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas/15 group-hover:translate-x-0.5 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </span>
            </a>
            <Link href="/new-patient-appointment" className="text-[14px] text-ink-muted underline decoration-hairline underline-offset-4 hover:text-ink py-3.5 inline-flex items-center">
              Request an appointment online
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
