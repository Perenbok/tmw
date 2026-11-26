"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PROJECTS = [
  {
    id: "PRJ-01",
    category: "STRUCTURAL",
    title: "COMMERCIAL STRUCTURAL BEAM REINFORCEMENT",
    location: "TAMPA, FL",
    spec: "W12 STEEL BEAMS • STICK WELD",
    image: "/tmw/images/mobile-welding-trailer.webp",
  },
  {
    id: "PRJ-02",
    category: "FABRICATION",
    title: "CUSTOM ARCHITECTURAL STAIRCASE & RAILING",
    location: "WESTSHORE, TAMPA",
    spec: "HEAVY GAUGE STEEL • POWDER COATED",
    image: "/tmw/images/welder-working.webp",
  },
  {
    id: "PRJ-03",
    category: "PLASMA",
    title: "HEAVY EQUIPMENT & TRAILER FRAME OVERHAUL",
    location: "BRANDON / TAMPA BAY",
    spec: "1\" PLATE PLASMA CUT • MIG",
    image: "/tmw/images/emergency-work.webp",
  },
];

export default function OurWorkPage() {
  const [filter, setFilter] = useState("ALL");
  const [quoteOpen, setQuoteOpen] = useState(false);

  const visible = filter === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-concrete text-carbon selection:bg-acid selection:text-carbon flex flex-col">
      <Header onOpenQuote={() => setQuoteOpen(true)} />

      <main className="flex-1 bg-carbon text-white">
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/20 pb-8 mb-12">
            <div>
              <div className="font-mono text-xs uppercase bg-acid text-carbon inline-block px-2 py-0.5 font-bold mb-3">
                FIELD LOG • TAMPA BAY, FL
              </div>
              <h1 className="font-display text-6xl sm:text-8xl uppercase tracking-tight leading-none text-white">
                OUR WORK
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {["ALL", "STRUCTURAL", "FABRICATION", "PLASMA"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-2 border cursor-pointer transition-colors ${
                    filter === tab
                      ? "bg-acid text-carbon border-acid font-bold"
                      : "border-white/30 text-white hover:border-acid"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((project) => (
              <div key={project.id} className="border border-white/20 bg-white/5 flex flex-col justify-between group">
                <div className="relative h-64 overflow-hidden border-b border-white/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-carbon/90 border border-white/20 px-2.5 py-1 font-mono text-[11px] text-acid">
                    {project.id} • {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-mono text-[11px] text-white/60 uppercase mb-2">{project.location}</div>
                  <h2 className="font-display text-2xl uppercase tracking-wide text-white mb-3">{project.title}</h2>
                  <div className="font-mono text-xs text-acid border-t border-white/15 pt-3">{project.spec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />

      {quoteOpen && (
        <div className="fixed inset-0 z-50 bg-carbon/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-concrete border-2 border-carbon max-w-lg w-full p-6 sm:p-8 shadow-[8px_8px_0px_#FF6A00]">
            <div className="flex items-center justify-between border-b border-carbon pb-4 mb-4">
              <h3 className="font-display text-3xl uppercase">REQUEST ON-SITE QUOTE</h3>
              <button
                onClick={() => setQuoteOpen(false)}
                className="font-mono text-sm font-bold border border-carbon px-3 py-1 hover:bg-carbon hover:text-acid cursor-pointer"
              >
                ESC ✕
              </button>
            </div>
            <p className="font-mono text-xs text-carbon/80 mb-6">
              CALL <a href="tel:+18137557411" className="font-bold underline">(813) 755-7411</a> OR LEAVE YOUR DETAILS BELOW.
            </p>
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
