import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Clinical Trials — Family Psychiatry of The Woodlands",
  description: "IHC-monitored psychiatric clinical trials for Major Depressive Disorder, Bipolar, ADHD, Autism, and Schizophrenia. Led by Dr. Goldsby and Dr. Lucas.",
};

const trials = [
  { name: "Child & Teen ADHD", ages: "ages 4–5", contacts: ["Email Kalea at kaleab@woodlandspsych.com or call 832-616-2673", "Or Randi at rlane@woodlandspsych.com or call 832-616-2677"] },
  { name: "Teen Bipolar", ages: "ages 10–17", contacts: ["Email Randi at rlane@woodlandspsych.com or call 832-616-2677"] },
  { name: "Adult Depression with Insomnia", ages: "ages 18 & up", contacts: ["Email Kalea at kaleab@woodlandspsych.com or call 832-616-2673"] },
  { name: "Children & Teen Migraine", ages: "ages 6–17", contacts: ["Email Sue at sgoldsby@woodlandspsych.com or call 832-616-2675"] },
  { name: "Autism", ages: "ages 12–45", contacts: ["Email Sue at sgoldsby@woodlandspsych.com or call 832-616-2675"] },
];

const faqs = [
  {
    q: "What is clinical research?",
    a: "Clinical research refers to studies in which people participate as patients or volunteers. Different terms are used to describe clinical research, including clinical studies, clinical trials, studies, research, trials, and protocols. Clinical research may have a number of goals, such as developing new treatments or medications, identifying causes of illness, studying trends, or evaluating ways in which genetics may be related to an illness. Strict rules for clinical studies have been put in place by NIH and the U.S. Food and Drug Administration (FDA). Some studies involve promising new treatments that may directly benefit participants. Others do not directly benefit participants, but may help scientists learn better ways to help people.",
  },
  {
    q: "Clinical research phases",
    a: "Phase I focuses on assessing the drug's safety in a small number of healthy volunteers (about 70% of experimental drugs pass this phase). Phase II tests for efficacy in up to several hundred patients in randomized, often blinded, trials (about 1/3 of drugs pass both phase I and II). Phase III tests in several hundred to thousands of patients with the FDA's full involvement; 70–90% of drugs that enter phase III complete it, after which the company can request FDA approval. Post-marketing / Phase IV compares the drug to others on the market or studies long-term effectiveness.",
  },
  {
    q: "Who will take care of me during a clinical trial?",
    a: "Your study-related care is provided by a team led by Dr. Lucas, Dr. Goldsby, registered nurses, research coordinators and other medical professionals.",
  },
  {
    q: "How is my personal information and my health protected?",
    a: "Your identity and other personal information are protected according to regulations set forth by both the United States and Texas state governments. These rules permit sharing of some information with the research sponsor and certain government officials under very specific circumstances. Research organizations are also subject to inspections by the FDA and the research sponsor, and to questioning by Institutional Review Boards and Data Monitoring Committees. We are required by law to provide you with detailed information about the study so you may give your 'informed consent' to become a study volunteer.",
  },
  {
    q: "Will there be any cost to me to participate, or will I be compensated?",
    a: "There is no cost to participants in a clinical study. All medical care, medications and equipment related to the research investigations are provided at no charge. Most participants are paid to help assist with the costs of traveling to and from office visits.",
  },
];

const helpfulLinks = [
  { name: "National Institute of Mental Health", href: "https://www.nimh.nih.gov" },
  { name: "Food and Drug Administration", href: "https://www.fda.gov" },
  { name: "American Academy of Child and Adolescent Psychiatry", href: "https://www.aacap.org" },
  { name: "National Alliance for the Mentally Ill", href: "https://www.nami.org" },
  { name: "National Depressive and Manic-Depressive Association", href: "https://www.dbsalliance.org" },
  { name: "National Mental Health Association", href: "https://www.mhanational.org" },
];

export default function ClinicalTrialsPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="IHC-monitored research"
        title={
          <>
            Tomorrow&rsquo;s treatments, <em className="italic font-light text-sage">today.</em>
          </>
        }
        subtitle="Family Psychiatry of The Woodlands runs Phase I–IV psychiatric clinical trials, giving our patients access to the most promising new medications under the closest possible standards of care — at no cost to participants."
      />

      {/* Intro */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-[16px] leading-relaxed text-ink-muted space-y-5">
          <p>
            Clinical trials open doors for participants to experience the most advanced technology in pharmaceuticals. Participants benefit from the most promising drugs while receiving the most attentive and continuous standards of care.
          </p>
          <p>
            All participants receive a thorough psychiatric and medical evaluation prior to enrollment and are closely monitored according to the IHC Principles of Good Clinical Practice for the duration of the trial. Participants receive all care throughout the trial free of cost.
          </p>
        </div>
      </section>

      {/* Current Trials */}
      <section className="px-6 py-20 bg-sage-soft">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Now enrolling</div>
          <h2 className="mt-4 mb-12 font-serif text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.05] tracking-tight">
            Current &amp; upcoming <em className="italic font-light">trials.</em>
          </h2>
          <p className="text-[15px] text-ink-muted mb-10 max-w-2xl">
            Our team conducts Phase I through IV psychiatric clinical trials including but not limited to Major Depressive Disorder, Bipolar Disorder, ADHD, Autism, and Schizophrenia.
          </p>
          <div className="space-y-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
            {trials.map((t) => (
              <div key={t.name} className="bg-canvas px-7 py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <div className="font-serif text-[20px] text-ink">{t.name}</div>
                    <div className="text-[12px] uppercase tracking-[0.14em] text-ink-subtle mt-1">{t.ages}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 text-[14px] text-ink-muted">
                  {t.contacts.map((c, i) => <div key={i}>{c}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Clinical trials FAQ</div>
          <h2 className="mt-4 mb-12 font-serif text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.05] tracking-tight">
            What to <em className="italic font-light">expect.</em>
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

      {/* Helpful links */}
      <section className="px-6 py-16 bg-ink text-canvas">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-clay">Helpful links</div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
            {helpfulLinks.map((l) => (
              <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-canvas/15 py-4 hover:border-canvas/40 transition">
                <span className="font-serif text-[17px]">{l.name}</span>
                <span className="text-canvas/50 group-hover:text-canvas transition">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
