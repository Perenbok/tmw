import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "GK Construction Group | Florida General Contractor #CGC 1539267",
  description:
    "State Certified General Contractor in Odessa & Tampa Bay, FL (License #CGC 1539267). Commercial construction, tenant improvements, structural concrete, and hurricane-rated custom builds.",
  keywords: [
    "General Contractor Odessa FL",
    "Commercial Construction Tampa Bay",
    "CGC 1539267",
    "GK Construction Group",
    "Tenant Improvements Tampa",
    "Structural Concrete Florida",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "GK Construction Group",
    url: "https://www.gk-construction-group.com",
    identifier: "FL License #CGC 1539267",
    areaServed: [
      "Odessa, FL",
      "Tampa, FL",
      "Clearwater, FL",
      "St. Petersburg, FL",
      "Hillsborough County, FL",
      "Pasco County, FL",
    ],
    knowsAbout: [
      "Commercial Construction",
      "Tenant Improvements",
      "Structural Concrete",
      "Hurricane Retrofits",
      "Custom Luxury Homes",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${anton.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-acid selection:text-carbon`}
      >
        {children}
      </body>
    </html>
  );
}
