import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Sleep Hygiene — Family Psychiatry of The Woodlands",
  description: "Five practices from Dr. Lucas for getting your best night's sleep and performing your best the next day.",
};

const tips = [
  {
    title: "Create a bedtime routine that works for you",
    body: "Prepare your mind for a restful night of sleep. A consistent routine leading up to bedtime helps your body understand it&rsquo;s time to wind down. Plan something realistic that you can stick to each night.",
  },
  {
    title: "Limit screen use leading up to bedtime",
    body: "Shut off screens between 2–3 hours before bed. This reduces strain on your eyes and helps you begin to relax for a good night&rsquo;s sleep.",
  },
  {
    title: "Prepare your room",
    body: "Sleep in a cool, dark environment with as little potential interruption as possible. Removing your phone from the nightstand and using a standard alarm clock can eliminate notification interruptions.",
  },
  {
    title: "Get the right gear for you",
    body: "You&rsquo;ll spend up to ⅓ of your life in bed — caring for your sleep is as important as caring for your diet. Find a mattress, pillow, and sheet set that work for you. A sleep mask, white noise, or sounds of nature may also help.",
  },
  {
    title: "Set a timer in 90-minute increments",
    body: "Ninety minutes mimics your circadian sleep cycle. Our body&rsquo;s sleep clock revolves in 90-minute increments, ending in REM — the deepest and most important phase of sleep, crucial for memory and retention.",
  },
];

export default function SleepHygienePage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="From Dr. Lucas"
        title={
          <>
            Better sleep, <em className="italic font-light text-sage">better days.</em>
          </>
        }
        subtitle="A quality night&rsquo;s sleep is essential for everyone to function at their best, but most of us neglect to give our sleep routine the care it needs. Optimizing your routine and practicing healthy sleep hygiene can give you more energy, less day-to-day stress, and lower your risk of contracting a variety of illnesses."
      />

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {tips.map((t, i) => (
            <article key={t.title} className="rounded-[2rem] p-2 border border-hairline bg-white/60">
              <div className="rounded-[calc(2rem-0.5rem)] bg-surface p-9 md:p-11" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}>
                <div className="flex items-start justify-between gap-6">
                  <h2 className="font-serif text-[24px] leading-tight tracking-tight text-ink">{t.title}</h2>
                  <span className="font-serif italic text-[14px] text-ink-subtle shrink-0">0{i + 1}</span>
                </div>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-muted" dangerouslySetInnerHTML={{ __html: t.body }} />
              </div>
            </article>
          ))}
          <p className="text-[15px] italic text-ink-subtle pt-6 max-w-2xl">
            Finally, take into consideration your partner&rsquo;s sleep hygiene routine. Not everyone requires the same conditions or amount of sleep to function at their best the following day.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
