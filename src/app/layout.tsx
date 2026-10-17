import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import DemoPill from "@/components/DemoPill";
import {
  COPYRIGHT_LINE,
  COPYRIGHT_NOTICE,
  COPYRIGHT_OWNER,
  COPYRIGHT_YEAR,
  PRACTICE_NAME,
  SITE_URL,
  THIRD_PARTY_LINE,
} from "@/components/Copyright";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: "Family Psychiatry of The Woodlands — Individualized Mental Health Care",
  description:
    "For over 30 years, Family Psychiatry of The Woodlands has provided thoughtful, individualized psychiatric care for children, adolescents, and adults in Spring, TX. Medication management, TMS therapy, and clinical trials.",
  metadataBase: new URL(SITE_URL),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  authors: [{ name: COPYRIGHT_OWNER, url: "https://makoai.studio" }],
  creator: COPYRIGHT_OWNER,
  publisher: COPYRIGHT_OWNER,
  other: { copyright: COPYRIGHT_LINE },
};

// Copyright schema for the demo itself (the design and build), not for the
// practice: the practice's own name and marks stay theirs.
const owner = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#copyright-holder`,
  name: COPYRIGHT_OWNER,
  url: "https://makoai.studio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    owner,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${PRACTICE_NAME} website redesign (demo)`,
      description: `A website redesign demo designed and built by ${COPYRIGHT_OWNER}. ${THIRD_PARTY_LINE}`,
      creator: { "@id": owner["@id"] },
      publisher: { "@id": owner["@id"] },
      copyrightHolder: { "@id": owner["@id"] },
      copyrightYear: COPYRIGHT_YEAR,
      copyrightNotice: COPYRIGHT_NOTICE,
      license: `${SITE_URL}/license`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-canvas text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <DemoPill realUrl="https://woodlandsfamilypsychiatry.com" />
        {children}
      </body>
    </html>
  );
}
