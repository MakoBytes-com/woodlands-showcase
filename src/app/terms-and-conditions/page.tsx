import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Terms & Conditions — Family Psychiatry of The Woodlands",
};

export default function TermsPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHero
        eyebrow="Terms"
        title={<>Terms of <em className="italic font-light text-sage">use.</em></>}
        subtitle="The information on this website is for general educational purposes only and does not constitute medical advice."
      />
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-6 text-[16px] leading-relaxed text-ink-muted">
          <p>By using woodlandsfamilypsychiatry.com you acknowledge that any information presented here is general in nature and does not establish a doctor-patient relationship. For care decisions, always consult a qualified mental health professional.</p>
          <p>All content, images, and branding are property of Family Psychiatry of The Woodlands unless otherwise noted.</p>
          <p>Appointment requests submitted through this site are processed during normal business hours (Monday – Friday, 8am – 5pm). For urgent mental health concerns or emergencies, call 911 or the 988 Suicide & Crisis Lifeline.</p>
          <p className="text-[13px] italic text-ink-subtle pt-4">Last updated: 2026</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
