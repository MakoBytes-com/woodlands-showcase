import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Field, inputClass } from "@/components/FormField";

export const metadata = {
  title: "Woodland Springs Patients — Family Psychiatry of The Woodlands",
  description: "Contact form for existing patients of Woodland Springs Psychiatric Hospital in Conroe, TX.",
};

export default function WoodlandSpringsPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="Woodland Springs Patients"
        title={
          <>
            For our friends in <em className="italic font-light text-sage">Conroe.</em>
          </>
        }
        subtitle="If you&rsquo;re a current patient of Woodland Springs Psychiatric Hospital — where Dr. Lucas serves as Medical Director — use this form to send our team a message."
      />

      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto rounded-[2rem] p-2 border border-hairline bg-white/60">
          <div className="rounded-[calc(2rem-0.5rem)] bg-surface p-8 md:p-12" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name"><input className={inputClass} required /></Field>
                <Field label="Last name"><input className={inputClass} required /></Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email"><input type="email" className={inputClass} required /></Field>
                <Field label="Phone"><input type="tel" className={inputClass} required /></Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Date of birth"><input type="date" className={inputClass} /></Field>
                <Field label="Woodland Springs Patient ID"><input className={inputClass} /></Field>
              </div>
              <Field label="Comments"><textarea rows={4} className={inputClass} /></Field>

              <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-sage py-3.5 pl-6 pr-2 text-[14px] font-medium text-canvas active:scale-[0.98] transition-transform">
                <span>Submit</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas/15 group-hover:translate-x-0.5 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-10 grid sm:grid-cols-2 gap-4 text-center">
          <a href="https://woodlandspringshospital.com" target="_blank" rel="noreferrer" className="rounded-2xl border border-hairline bg-white/60 p-6 hover:bg-white transition">
            <div className="font-serif text-[16px] text-ink">Visit Woodland Springs</div>
            <div className="mt-1 text-[13px] text-ink-subtle">There&rsquo;s hope. There&rsquo;s help.</div>
          </a>
          <a href="tel:9362130092" className="rounded-2xl border border-hairline bg-white/60 p-6 hover:bg-white transition">
            <div className="font-serif text-[16px] text-ink">Call Woodland Springs</div>
            <div className="mt-1 text-[13px] text-sage">936.213.0092</div>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
