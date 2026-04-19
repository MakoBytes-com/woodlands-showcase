import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Types of Practitioners — Family Psychiatry of The Woodlands",
  description: "What's the difference between a psychiatrist, psychologist, therapist, and psychiatric nurse practitioner?",
};

const items = [
  { term: "Psychiatry", body: "A medical specialty concerned with the diagnosis and treatment of disorders that have primarily mental or behavioral symptoms, and with the care of people having such disorders." },
  { term: "Psychiatrist", body: "An M.D. who treats psychiatric disorders. Psychiatrists attend medical school and choose psychiatry as their specialty. They use their skills and knowledge to prescribe the appropriate medications." },
  { term: "Psychologist", body: "A professional who studies behavior and experience and is licensed to provide therapeutic services. They hold a doctoral-level degree. Psychologists are unable to prescribe medication; they provide psychological testing and therapy. If medication is needed they may work with a psychiatrist for the benefit of the patient." },
  { term: "Therapist", body: "A psychotherapist or counselor — a psychoanalyst or a professional from another school of psychotherapy who is trained to treat mental and emotional problems with psychological methods. Provides therapy and some psychological testing. Holds a master&rsquo;s level degree. If medication is needed they may work with a psychiatrist for the benefit of the patient." },
  { term: "Psychiatric Nurse Practitioner", body: "A registered nurse trained in primary health care to assume some of the responsibilities once assumed only by a physician, with a specialty in psychiatry. They hold a master&rsquo;s degree. At Family Psychiatry of The Woodlands, our nurse practitioners provide medication management under physician supervision." },
];

export default function TypesPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="Medical references"
        title={
          <>
            What type of practitioner <em className="italic font-light text-sage">do I need?</em>
          </>
        }
        subtitle="Mental health care is a team sport. Here&rsquo;s a quick guide to the kinds of professionals you might encounter — and how they differ."
      />

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto divide-y divide-hairline border-y border-hairline">
          {items.map((i) => (
            <details key={i.term} className="group py-7">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-serif text-[22px] text-ink pr-6">{i.term}</span>
                <span className="text-sage text-[22px] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-muted max-w-3xl" dangerouslySetInnerHTML={{ __html: i.body }} />
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
