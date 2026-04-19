import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import DemoPill from "@/components/DemoPill";

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
  metadataBase: new URL("https://woodlandsfamilypsychiatry.com"),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
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
        <DemoPill realUrl="https://woodlandsfamilypsychiatry.com" />
        {children}
      </body>
    </html>
  );
}
