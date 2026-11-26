"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function ReviewsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-concrete text-carbon selection:bg-acid selection:text-carbon flex flex-col">
      <Header onOpenQuote={() => setQuoteOpen(true)} />

      <main className="flex-1 bg-concrete">
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-carbon pb-8 mb-12">
            <div>
              <div className="font-mono text-xs uppercase bg-carbon text-acid inline-block px-2 py-0.5 font-bold mb-3">
                5.0 ★ GOOGLE VERIFIED • TAMPA BAY
              </div>
              <h1 className="font-display text-6xl sm:text-8xl uppercase tracking-tight leading-none">
                CLIENT REVIEWS
              </h1>
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
        </section>
      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />

      {quoteOpen && (
        <div className="fixed inset-0 z-50 bg-carbon/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-concrete border-2 border-carbon max-w-lg w-full p-6 sm:p-8 shadow-[8px_8px_0px_#C4F000]">
            <div className="flex items-center justify-between border-b border-carbon pb-4 mb-4">
              <h3 className="font-display text-3xl uppercase">REQUEST ON-SITE QUOTE</h3>
              <button
                onClick={() => setQuoteOpen(false)}
                className="font-mono text-sm font-bold border border-carbon px-3 py-1 hover:bg-carbon hover:text-acid cursor-pointer"
              >
                ESC ✕
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQuoteOpen(false);
              }}
              className="space-y-4 font-mono text-xs"
            >
              <input required type="text" placeholder="YOUR NAME / COMPANY" className="w-full border border-carbon bg-white p-3" />
              <input required type="tel" placeholder="(813) 000-0000" className="w-full border border-carbon bg-white p-3" />
              <textarea required rows={3} placeholder="PROJECT DETAILS & ZIP CODE..." className="w-full border border-carbon bg-white p-3" />
              <button type="submit" className="w-full bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-bold uppercase py-4 cursor-pointer">
                SEND ESTIMATE REQUEST →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
