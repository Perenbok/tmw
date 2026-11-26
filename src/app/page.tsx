"use client";

import { useState } from "react";
import Header from "@/components/Header";
import DynamicHero from "@/components/DynamicHero";
import ProjectsAndServices from "@/components/ProjectsAndServices";

const REVIEWS = [
  {
    name: "CHUCK ABEL",
    role: "WHARTON-SMITH, INC.",
    text: "Kostyantyn showed up on time with a fully equipped mobile rig and handled our structural steel modifications cleanly and to spec. Solid communication and fair pricing.",
  },
  {
    name: "MARIAN JAKUBIK",
    role: "COMMERCIAL CLIENT • TAMPA",
    text: "Top-notch welding and fabrication quality. Over 20 years of real hands-on experience shows in every bead and fit-up. Will definitely call Tampa Mobile Welding again.",
  },
  {
    name: "VIRGINIA CZUBA",
    role: "PROPERTY OWNER • TAMPA BAY",
    text: "Fast same-day service to repair our heavy steel gate. Upfront estimate, zero surprises, and the weld is stronger than the original factory build.",
  },
  {
    name: "BRITTANY MAWBY",
    role: "VERIFIED GOOGLE REVIEW",
    text: "Super reliable, professional, and detail-oriented. Saved us days of downtime with on-site plasma cutting and structural reinforcement.",
  },
];

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("STRUCTURAL STEEL");
  const [submitted, setSubmitted] = useState(false);

  const handleOpenQuote = (service?: string) => {
    if (service) setSelectedService(service);
    setSubmitted(false);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-concrete text-carbon selection:bg-acid selection:text-carbon">
      <Header onOpenQuote={handleOpenQuote} />

      <main>
        <DynamicHero onOpenQuote={handleOpenQuote} />

        <section className="border-b border-carbon bg-acid">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs font-bold uppercase tracking-wider">
            <div>[01] 20+ YEARS HANDS-ON EXPERIENCE</div>
            <div>[02] UPFRONT PRICING • NO HIDDEN FEES</div>
            <div>[03] SELF-POWERED MOBILE WELDING RIG</div>
            <div>[04] SAME-DAY EMERGENCY DISPATCH</div>
          </div>
        </section>

        <ProjectsAndServices onOpenQuote={handleOpenQuote} />

        <section id="reviews" className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-carbon pb-8 mb-12">
              <div>
                <div className="font-mono text-xs uppercase bg-carbon text-acid inline-block px-2 py-0.5 font-bold mb-3">
                  5.0 ★ GOOGLE VERIFIED • TAMPA BAY
                </div>
                <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight leading-none">
                  CLIENT FIELD REPORTS
                </h2>
              </div>
              <div className="font-mono text-xs uppercase text-carbon/80">
                TRUSTED BY GENERAL CONTRACTORS & PROPERTY OWNERS
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIEWS.map((rev, i) => (
                <div
                  key={rev.name}
                  className="border border-carbon p-6 sm:p-8 bg-white flex flex-col justify-between shadow-[4px_4px_0px_#141414]"
                >
                  <p className="font-mono text-xs sm:text-sm leading-relaxed text-carbon mb-6">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                  <div className="border-t border-carbon/20 pt-4 flex items-center justify-between font-mono text-xs">
                    <div>
                      <div className="font-bold">{rev.name}</div>
                      <div className="text-carbon/70 text-[11px]">{rev.role}</div>
                    </div>
                    <span className="bg-acid border border-carbon px-2 py-0.5 font-bold">
                      0{i + 1} / 5.0★
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-carbon text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-white/20">
          <div className="lg:col-span-6">
            <div className="font-mono text-xs uppercase text-acid mb-3">
              TAMPA MOBILE WELDING LLC • KOSTYANTYN
            </div>
            <h2 className="font-display text-5xl sm:text-7xl uppercase leading-none mb-6">
              READY TO WELD ON YOUR SITE.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleOpenQuote()}
                className="bg-acid text-carbon font-mono text-xs sm:text-sm font-bold uppercase px-6 py-4 hover:bg-white transition-colors cursor-pointer"
              >
                GET A FREE ESTIMATE →
              </button>
              <a
                href="tel:+18137557411"
                className="border border-white/40 font-mono text-xs sm:text-sm font-bold uppercase px-6 py-4 hover:border-acid hover:text-acid transition-colors"
              >
                CALL (813) 755-7411
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-xs">
            <div className="border border-white/20 p-6">
              <div className="text-acid font-bold uppercase mb-3">DISPATCH HQ</div>
              <p className="text-white/90 leading-relaxed">
                9430 LAZY LANE
                <br />
                TAMPA, FL 33614
                <br />
                UNITED STATES
              </p>
              <a
                href="tel:+18137557411"
                className="inline-block mt-4 text-acid font-bold underline"
              >
                (813) 755-7411
              </a>
            </div>

            <div className="border border-white/20 p-6">
              <div className="text-acid font-bold uppercase mb-3">OPERATING HOURS</div>
              <p className="text-white/90 leading-relaxed">
                MON – SAT: 7:00 AM – 7:00 PM
                <br />
                SUNDAY: CLOSED
                <br />
                <span className="text-acid mt-2 inline-block">
                  EMERGENCY SAME-DAY DISPATCH
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/60 uppercase">
          <div>© {new Date().getFullYear()} TAMPA MOBILE WELDING LLC. ALL RIGHTS RESERVED.</div>
          <div>TAMPA • ODESSA • BRANDON • CLEARWATER • ST. PETERSBURG</div>
        </div>
      </footer>

      {quoteOpen && (
        <div className="fixed inset-0 z-50 bg-carbon/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-concrete border-2 border-carbon max-w-lg w-full p-6 sm:p-8 shadow-[8px_8px_0px_#C4F000]">
            <div className="flex items-center justify-between border-b border-carbon pb-4 mb-6">
              <div>
                <div className="font-mono text-[11px] uppercase bg-acid px-2 py-0.5 inline-block font-bold border border-carbon">
                  TAMPA MOBILE WELDING LLC
                </div>
                <h3 className="font-display text-3xl uppercase mt-1">
                  REQUEST ON-SITE QUOTE
                </h3>
              </div>
              <button
                onClick={() => setQuoteOpen(false)}
                className="font-mono text-sm font-bold border border-carbon px-3 py-1 hover:bg-carbon hover:text-acid cursor-pointer"
              >
                ESC ✕
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center font-mono">
                <div className="text-2xl font-bold mb-2">REQUEST RECEIVED</div>
                <p className="text-xs text-carbon/80 mb-6">
                  WE WILL CALL YOU BACK SHORTLY. FOR URGENT DISPATCH CALL (813) 755-7411.
                </p>
                <button
                  onClick={() => setQuoteOpen(false)}
                  className="bg-carbon text-acid px-6 py-3 text-xs font-bold uppercase cursor-pointer"
                >
                  CLOSE WINDOW
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 font-mono text-xs"
              >
                <div>
                  <label className="block font-bold uppercase mb-1">SERVICE TYPE</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full border border-carbon bg-white p-3 uppercase"
                  >
                    <option value="STRUCTURAL STEEL">STRUCTURAL STEEL</option>
                    <option value="CUSTOM FABRICATION">CUSTOM FABRICATION</option>
                    <option value="PLASMA CUTTING">PLASMA CUTTING</option>
                    <option value="EMERGENCY 24/7">EMERGENCY 24/7</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold uppercase mb-1">YOUR NAME / COMPANY</label>
                  <input
                    required
                    type="text"
                    placeholder="E.G. JOHN DOE"
                    className="w-full border border-carbon bg-white p-3"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase mb-1">PHONE NUMBER</label>
                  <input
                    required
                    type="tel"
                    placeholder="(813) 000-0000"
                    className="w-full border border-carbon bg-white p-3"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase mb-1">PROJECT DETAILS & ZIP CODE</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="DESCRIBE METAL TYPE, THICKNESS, OR REPAIR NEEDED..."
                    className="w-full border border-carbon bg-white p-3"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-bold uppercase py-4 transition-colors cursor-pointer"
                >
                  SEND ESTIMATE REQUEST →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
