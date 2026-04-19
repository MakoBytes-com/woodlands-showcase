import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy — Family Psychiatry of The Woodlands",
};

export default function PrivacyPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHero
        eyebrow="Privacy"
        title={<>Your information, <em className="italic font-light text-sage">protected.</em></>}
        subtitle="Family Psychiatry of The Woodlands is committed to protecting the privacy of our patients and visitors. This page summarizes how we handle the information you share with us."
      />
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-6 text-[16px] leading-relaxed text-ink-muted">
          <p>We follow all federal and Texas state regulations governing the protection of patient health information, including HIPAA. Information you provide through our website (such as appointment requests) is used solely to schedule and provide care.</p>
          <p>We do not sell or rent your personal information to third parties. Information may be shared with treatment partners, billing services, or government officials only as required by law and with appropriate safeguards.</p>
          <p>For questions about this policy or to request a copy of your medical records, contact our office at <a href="tel:2813671015" className="text-sage">(281) 367-1015</a>.</p>
          <p className="text-[13px] italic text-ink-subtle pt-4">Last updated: 2026</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
