import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import {
  COPYRIGHT_LINE,
  COPYRIGHT_OWNER,
  LICENSE_CONTACT_URL,
  PRACTICE_NAME,
} from "@/components/Copyright";

export const metadata: Metadata = {
  title: `License & Copyright — ${PRACTICE_NAME} demo`,
  description: `What ${COPYRIGHT_OWNER} owns on this website demo, what belongs to ${PRACTICE_NAME}, and how to license the design.`,
};

const oursItems = [
  {
    title: "The design",
    body: "The look and arrangement of the site taken together: the layout of each page, the order of the sections, the card and panel styles, and the way color, type and spacing are combined.",
  },
  {
    title: "The code",
    body: "The source code that builds and runs this demo, including its page templates and components.",
  },
  {
    title: "The copy we wrote",
    body: "The headlines, section introductions, service summaries and other wording written for this redesign.",
  },
];

const theirsItems = [
  `The ${PRACTICE_NAME} name, logo and trademarks.`,
  "Provider names, photos and biographies.",
  "The practice's address, phone numbers, hours, policies and details about its services.",
];

const notAllowed = [
  "Copying the design, layout or section order for another website, even with different wording.",
  "Reusing the source code, or the copy we wrote, anywhere else.",
  "Using screenshots or recordings of this demo as a reference or prompt for an AI design tool to recreate it.",
  "Removing or covering the copyright notices.",
];

export default function LicensePage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHero
        eyebrow="License & copyright"
        title={<>This demo is <em className="italic font-light text-sage">protected by copyright.</em></>}
        subtitle={`${COPYRIGHT_LINE} This is a demonstration of a website redesign that ${COPYRIGHT_OWNER} designed and built for ${PRACTICE_NAME}. You are welcome to look around and to share the link.`}
      />

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-16 text-[16px] leading-relaxed text-ink-muted">
          <div>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-tight text-ink">
              What {COPYRIGHT_OWNER} owns
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {oursItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-hairline bg-surface p-6">
                  <h3 className="font-serif text-[20px] text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-tight text-ink">
              What belongs to the practice
            </h2>
            <p className="mt-4">
              These belong to {PRACTICE_NAME} and are shown here for demonstration only.{" "}
              {COPYRIGHT_OWNER} does not claim them, and nothing on this page grants anyone rights to them.
            </p>
            <ul className="mt-5 space-y-2.5">
              {theirsItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5">
              The background video on the home page is third-party stock footage and is not claimed by{" "}
              {COPYRIGHT_OWNER} either.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-tight text-ink">
              Not allowed without a license
            </h2>
            <ul className="mt-5 space-y-2.5">
              {notAllowed.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="font-semibold text-clay">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] p-2 border border-hairline bg-white/60">
            <div className="rounded-[calc(2rem-0.5rem)] bg-ink text-canvas p-8 md:p-12">
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-tight">
                How to license the design
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-canvas/75">
                Get in touch with {COPYRIGHT_OWNER} through our studio site. Tell us what you have in mind
                and you will get a reply with terms and pricing, or a quote for a custom build.
              </p>
              <a
                href={LICENSE_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-canvas py-3.5 pl-6 pr-2 text-[14px] font-medium text-ink transition-transform active:scale-[0.98]"
              >
                <span>Contact {COPYRIGHT_OWNER}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-transform group-hover:translate-x-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
