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
  title: "Tampa Mobile Welding LLC | Structural Steel, Fabrication & Plasma Cutting",
  description:
    "Mobile welding and custom metal fabrication in Tampa Bay, FL. Structural steel, gates, railings, plasma cutting up to 1 inch, and same-day emergency repairs. Call (813) 755-7411.",
  keywords: [
    "Tampa Mobile Welding",
    "Mobile Welder Tampa FL",
    "Structural Steel Welding Tampa",
    "Custom Metal Fabrication Tampa Bay",
    "Plasma Cutting Tampa",
    "Emergency Welding Service Tampa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tampa Mobile Welding LLC",
    url: "https://perenbok.github.io/tmw/",
    telephone: "+1-813-755-7411",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9430 Lazy Lane",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33614",
      addressCountry: "US",
    },
    openingHours: "Mo-Sa 07:00-19:00",
    areaServed: [
      "Tampa, FL",
      "Brandon, FL",
      "Clearwater, FL",
      "St. Petersburg, FL",
      "Hillsborough County, FL",
      "Pinellas County, FL",
    ],
    knowsAbout: [
      "Mobile Welding",
      "Structural Steel Welding",
      "Custom Metal Fabrication",
      "Plasma Cutting",
      "Emergency Welding Repair",
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
