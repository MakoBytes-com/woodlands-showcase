import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Medical References — Family Psychiatry of The Woodlands",
  description: "Curated mental health resources, support groups, treatment programs, and reading lists organized by condition.",
};

type Section = { heading: string; subgroups?: { label: string; items: string[] }[]; items?: string[] };

const sections: Section[] = [
  {
    heading: "Bipolar Disorder",
    items: [
      "National Institute of Mental Health",
      "Internet Mental Health",
      "Depression Bipolar Support Alliance Houston",
      "Bipolar Disorder for Dummies",
      "An Unquiet Mind: A Memoir of Moods and Madness",
      "Touched with Fire: Manic-Depressive Illness and the Artistic Temperament",
      "Omega 3 Fatty Acids in Bipolar Disorder",
      "Wikipedia – List of People Affected by Bipolar Disorder",
      "Child and Adolescent Bipolar Foundation",
    ],
  },
  {
    heading: "Borderline Personality Disorder",
    items: [
      "National Institute of Mental Health",
      "HealthyPlace.com",
      "I Hate You, Don't Leave Me: Understanding the Borderline Personality",
      "Stop Walking on Eggshells",
      "The Menninger Clinic",
      "Dialectical Behavioral Therapy (DBT) Center of Houston",
    ],
  },
  {
    heading: "Depression",
    items: [
      "National Institute of Mental Health",
      "Down Came the Rain: My Journey Through Postpartum Depression",
      "Wikipedia – List of People Who Have Suffered from Depression",
    ],
  },
  {
    heading: "Obsessive Compulsive Disorder",
    items: [
      "National Institute of Mental Health",
      "Obsessive Compulsive Foundation",
      "Exploring OCD Subtypes and Treatment Resistance",
      "Managing Treatment-Resistant OCD",
    ],
  },
  {
    heading: "ADHD",
    items: [
      "ADDitude Magazine",
      "National Resource Center on ADHD",
      "A.D.D. WareHouse",
    ],
  },
  {
    heading: "Eating Disorders",
    items: ["Timberlawn", "Sierra Tucson", "The Renfrew Center Foundation", "The Healthy Weigh"],
  },
  {
    heading: "Schizophrenia",
    items: ["Schizophrenia.com"],
  },
  {
    heading: "Substance Abuse Disorders",
    subgroups: [
      { label: "Inpatient Detox", items: ["Cypress Creek Hospital"] },
      {
        label: "Residential Treatment Programs",
        items: [
          "The Right Step",
          "Memorial Hermann Prevention and Recovery Center",
          "La Hacienda Treatment Center",
          "Timberlawn",
          "Burning Tree Programs",
          "Starlite Recovery Center",
          "Sundown Ranch",
          "Austin Recovery",
          "Hazelden Betty Ford Foundation",
          "Sierra Tucson",
          "Palmetto Addiction Recovery Center",
          "Santa Maria Hostel",
          "Passages Residential Treatment for Women",
          "Brazos Place",
        ],
      },
      { label: "Transitional Living", items: ["The Next Step", "The Texas House", "Cheyenne Center"] },
      {
        label: "Support Groups",
        items: [
          "The Council on Alcohol and Drugs Houston",
          "Alcoholics Anonymous Houston",
          "Cocaine Anonymous Houston",
          "Narcotics Anonymous",
          "Al-Anon Houston",
          "Big Book Online",
        ],
      },
    ],
  },
  {
    heading: "Community Mental Health Resources",
    items: [
      "Harris County MHMRA",
      "Neuropsychiatric Center of MHMRA",
      "Harris County Psychiatric Center",
      "Houston Area Personal Care Homes",
      "Houston Area Mental Health Resources",
      "Mental Health Association of Greater Houston – The Guide",
      "Montgomery County Tri-County MHMRA",
    ],
  },
  {
    heading: "Pharmacy & Medication Assistance",
    items: [
      "Walmart $4 Prescriptions",
      "Target $4 Generic Drugs",
      "HEB $4 Generic Drugs",
      "Kroger Pharmacy Generic Prescription Drugs",
      "Randalls Pharmacy",
      "Walgreens Prescription Savings Club",
      "Drugstore.com",
      "Partnership for Prescription Assistance",
      "Together Rx",
    ],
  },
  {
    heading: "Geriatrics",
    items: [
      "Alzheimer's Association Houston",
      "Texas Department of Aging and Disability Services Nursing Home Search",
      "A Place for Mom – Eldercare Advisor",
      "Silverado Senior Living",
    ],
  },
  {
    heading: "Grief",
    items: ["Elisabeth Kübler-Ross", "Compassionate Friends Texas"],
  },
  {
    heading: "Other resources",
    subgroups: [
      { label: "Disability", items: ["Social Security Online"] },
      { label: "Head Trauma", items: ["Touchstone Neurorecovery Center"] },
      { label: "Narcissistic Personality Disorder", items: ["Malignant Self Love – Narcissism Revisited"] },
      { label: "Pain Management", items: ["Woodlands Pain Management"] },
      { label: "Guardianship", items: ["Guardianship Program", "Texas Guide to Adult Guardianship", "Texas Guardianship Association"] },
      { label: "Online Gaming Addiction", items: ["Online Gaming Addiction", "Wikipedia – Video Game Addiction"] },
      { label: "Home Health Services", items: ["All Nursing Home Health Services", "Amedisys Home Health Services"] },
      { label: "Emotional Support Animals", items: ["CertaPet", "Emotional Support Animal Center"] },
    ],
  },
];

export default function MedicalReferencesPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHero
        eyebrow="Medical references"
        title={
          <>
            A library of <em className="italic font-light text-sage">trusted resources.</em>
          </>
        }
        subtitle="Books, organizations, treatment programs, and support groups our team recommends for further reading and help between visits."
      />

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {sections.map((s) => (
            <div key={s.heading}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-sage mb-5">
                {s.heading}
              </div>
              {s.items && (
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2 text-[15px] text-ink-muted">
                  {s.items.map((i) => <li key={i} className="border-b border-hairline pb-2">· {i}</li>)}
                </ul>
              )}
              {s.subgroups && (
                <div className="space-y-8">
                  {s.subgroups.map((sg) => (
                    <div key={sg.label}>
                      <div className="font-serif italic text-[15px] text-ink mb-3">{sg.label}</div>
                      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2 text-[15px] text-ink-muted">
                        {sg.items.map((i) => <li key={i} className="border-b border-hairline pb-2">· {i}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-8">
            <Link href="/types-of-practitioners" className="text-[14px] text-sage underline decoration-sage/30 underline-offset-4 hover:decoration-sage">
              Not sure what kind of practitioner you need? →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
