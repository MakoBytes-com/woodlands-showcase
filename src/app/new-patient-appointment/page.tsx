import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Field, inputClass } from "@/components/FormField";

export const metadata = {
  title: "New Patient Appointment — Family Psychiatry of The Woodlands",
  description: "Request your first appointment with Family Psychiatry of The Woodlands. Online intake for new patients.",
};

export default function NewPatientPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="New patient"
        title={
          <>
            Let&rsquo;s get you <em className="italic font-light text-sage">started.</em>
          </>
        }
        subtitle="We&rsquo;re currently accepting new patient appointment requests online. Please fill out the form below in its entirety — we&rsquo;ll be in touch within one business day."
      />

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto rounded-[2rem] p-2 border border-hairline bg-white/60">
          <div className="rounded-[calc(2rem-0.5rem)] bg-surface p-8 md:p-12" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}>
            <form className="space-y-6">
              <Field label="Message details">
                <textarea rows={3} className={inputClass} placeholder="A few sentences about what brings you in" />
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Patient first name"><input className={inputClass} required /></Field>
                <Field label="Patient last name"><input className={inputClass} required /></Field>
              </div>

              <Field label="Patient date of birth"><input type="date" className={inputClass} required /></Field>

              <Field label="Parent / guardian name (if applicable)"><input className={inputClass} /></Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email"><input type="email" className={inputClass} required /></Field>
                <Field label="Phone"><input type="tel" className={inputClass} placeholder="(123) 456-7890" required /></Field>
              </div>

              <Field label="Specialty">
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>Select specialty</option>
                  <option>Adult psychiatry</option>
                  <option>Child & adolescent psychiatry</option>
                  <option>Medication management</option>
                  <option>TMS therapy</option>
                  <option>Clinical trials</option>
                </select>
              </Field>

              <Field label="Insurance provider">
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>Select provider</option>
                  <option>Aetna</option>
                  <option>Blue Cross Blue Shield</option>
                  <option>Cigna</option>
                  <option>Great West Cigna</option>
                  <option>Magellan</option>
                  <option>Medicare</option>
                  <option>United Health Care</option>
                  <option>Cigna Health Springs (Medicare only)</option>
                  <option>Devoted Health</option>
                  <option>Other</option>
                </select>
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Insurance ID"><input className={inputClass} /></Field>
                <Field label="Subscriber date of birth"><input type="date" className={inputClass} /></Field>
              </div>

              <Field label="Insurance subscriber full name"><input className={inputClass} /></Field>

              <p className="text-[12px] uppercase tracking-[0.14em] text-clay">
                Only requests with an insurance card can be considered
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Front of insurance card" hint="Image only, max 15MB">
                  <input type="file" accept="image/*" className={inputClass} />
                </Field>
                <Field label="Back of insurance card" hint="Image only, max 15MB">
                  <input type="file" accept="image/*" className={inputClass} />
                </Field>
              </div>

              <Field label="What brings you here?">
                <textarea rows={3} className={inputClass} />
              </Field>

              <Field label="Were you referred? If so, by whom?">
                <textarea rows={2} className={inputClass} />
              </Field>

              <p className="text-[13px] italic text-ink-subtle border-l-2 border-clay pl-4">
                Medications prescribed by your current doctor are not guaranteed to be prescribed at your first appointment.
              </p>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-sage py-3.5 pl-6 pr-2 text-[14px] font-medium text-canvas active:scale-[0.98] transition-transform"
              >
                <span>Submit request</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas/15 group-hover:translate-x-0.5 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </button>

              <p className="text-[13px] text-ink-subtle pt-4">
                Prefer to call? <a href="tel:2813671015" className="text-sage underline decoration-sage/30 hover:decoration-sage">(281) 367-1015</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
