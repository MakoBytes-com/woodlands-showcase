import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Field, inputClass } from "@/components/FormField";

export const metadata = {
  title: "Nurse Practitioner Appointment — Family Psychiatry of The Woodlands",
  description: "Request an appointment with one of our Psychiatric Mental Health Nurse Practitioners.",
};

export default function NursePractitionerPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="Nurse Practitioner appointment"
        title={
          <>
            Request a visit with <em className="italic font-light text-sage">our NP team.</em>
          </>
        }
        subtitle="New patient paperwork must be submitted prior to scheduling. Please fill out the form in its entirety — we&rsquo;ll be in touch within one business day."
      />

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="rounded-2xl border border-hairline bg-sage-soft p-6 text-[14px] text-ink">
            <div className="font-serif text-[15px] mb-2">Forms to download first</div>
            <ul className="space-y-1 text-ink-muted">
              <li>· New Patient Paperwork</li>
              <li>· Medical Record Request</li>
              <li>· Authorization for Disclosure of Information</li>
            </ul>
          </div>

          <div className="rounded-[2rem] p-2 border border-hairline bg-white/60">
            <div className="rounded-[calc(2rem-0.5rem)] bg-surface p-8 md:p-12" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First name"><input className={inputClass} required /></Field>
                  <Field label="Last name"><input className={inputClass} required /></Field>
                </div>
                <Field label="Date of birth"><input type="date" className={inputClass} required /></Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email"><input type="email" className={inputClass} required /></Field>
                  <Field label="Phone"><input type="tel" className={inputClass} required /></Field>
                </div>

                <Field label="Insurance provider" hint="Only insurances listed are accepted">
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Select provider</option>
                    <option>Aetna</option>
                    <option>Blue Cross Blue Shield</option>
                    <option>Cigna</option>
                    <option>Magellan</option>
                    <option>Medicare</option>
                    <option>United Health Care</option>
                    <option>Devoted Health</option>
                  </select>
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Insurance ID"><input className={inputClass} /></Field>
                  <Field label="Insurance group number"><input className={inputClass} /></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Policyholder name"><input className={inputClass} /></Field>
                  <Field label="Policyholder date of birth"><input type="date" className={inputClass} /></Field>
                </div>

                <Field label="Mental health benefits phone (back of insurance card)">
                  <input className={inputClass} />
                </Field>

                <label className="flex items-start gap-3 text-[14px] text-ink">
                  <input type="checkbox" className="mt-1 accent-sage" />
                  <span>I&rsquo;d like to self-pay (view rates)</span>
                </label>

                <Field label="Preferred physician">
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Select preferred provider</option>
                    <option>Kathleen Dalton, PMHNP-BC</option>
                    <option>Brian Graham, PMHNP-BC</option>
                    <option>Comfort Ibe, PMHNP-BC</option>
                    <option>Aveleigh Cook, PMHNP</option>
                    <option>Melissa Everett, PMHNP-BC</option>
                    <option>Mark Lejsek, PMHNP-BC</option>
                    <option>No preference</option>
                  </select>
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Preferred date"><input type="date" className={inputClass} /></Field>
                  <Field label="Second choice"><input type="date" className={inputClass} /></Field>
                </div>

                <Field label="What is your concern?">
                  <textarea rows={3} className={inputClass} />
                </Field>

                <div>
                  <span className="block text-[12px] uppercase tracking-[0.14em] text-ink-subtle mb-3">Preferred time</span>
                  <div className="flex flex-wrap gap-3 text-[14px]">
                    {["Morning", "Afternoon", "Evening", "First available"].map((t) => (
                      <label key={t} className="flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2 cursor-pointer hover:border-sage">
                        <input type="checkbox" className="accent-sage" /> {t}
                      </label>
                    ))}
                  </div>
                </div>

                <Field label="Referred by"><textarea rows={2} className={inputClass} /></Field>

                <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-sage py-3.5 pl-6 pr-2 text-[14px] font-medium text-canvas active:scale-[0.98] transition-transform">
                  <span>Submit request</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas/15 group-hover:translate-x-0.5 transition-transform">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
