"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LOCATION_URL = "https://share.google/6ezev2ohbbukjVlex";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=9430+Lazy+Lane,+Tampa,+FL+33614&t=&z=14&ie=UTF8&iwloc=&output=embed";

export default function ContactPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("STRUCTURAL STEEL");
  const [submitted, setSubmitted] = useState(false);

  const handleOpenQuote = (service?: string) => {
    if (service) setSelectedService(service);
    setSubmitted(false);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-concrete text-carbon selection:bg-acid selection:text-carbon flex flex-col">
      <Header onOpenQuote={handleOpenQuote} />

      <main className="flex-1">
        <section className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-14 sm:py-20">
            <div className="font-mono text-xs uppercase bg-acid inline-block px-2.5 py-1 font-bold border border-carbon mb-4">
              DIRECT DISPATCH & LOCATION • TAMPA BAY, FL
            </div>
            <h1 className="font-display text-6xl sm:text-8xl uppercase tracking-tight leading-[0.9] mb-6">
              CONTACT & LOCATION
            </h1>
            <p className="font-mono text-xs sm:text-sm uppercase text-carbon/85 max-w-2xl leading-relaxed">
              CALL OR TEXT FOR ON-SITE ESTIMATES, STRUCTURAL STEEL JOBS, CUSTOM FABRICATION, PLASMA CUTTING, OR SAME-DAY EMERGENCY DISPATCH.
            </p>
          </div>
        </section>

        <section className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 border border-carbon bg-white p-6 sm:p-8 shadow-[4px_4px_0px_#141414] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-xs uppercase text-carbon/60 mb-2">
                  <span>LOCATION PIN & DISPATCH BASE</span>
                  <span className="text-carbon font-bold">27.9506° N, 82.4572° W</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl uppercase mb-3">
                  TAMPA BAY LOCATION
                </h2>
                <p className="font-mono text-xs sm:text-sm uppercase text-carbon/85 leading-relaxed mb-5">
                  9430 LAZY LANE, TAMPA, FL 33614 • MOBILE RIG DISPATCH ACROSS HILLSBOROUGH, PINELLAS & PASCO COUNTIES.
                </p>

                <a
                  href={LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Tampa Mobile Welding location on Google Maps"
                  className="group block relative w-full h-72 sm:h-80 border-2 border-carbon bg-carbon overflow-hidden mb-6 shadow-[4px_4px_0px_#141414]"
                >
                  <iframe
                    src={MAP_EMBED_URL}
                    title="Tampa Mobile Welding Location Map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0 grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-carbon/20 pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-acid text-carbon border border-carbon px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider">
                    TAMPA MOBILE WELDING LLC
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 bg-carbon/95 text-white border border-white/25 px-3.5 py-2.5 font-mono text-xs uppercase group-hover:border-acid transition-colors">
                    <span className="truncate">9430 LAZY LANE, TAMPA, FL 33614</span>
                    <span className="text-acid font-bold shrink-0">OPEN MAP ↗</span>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 transition-colors inline-flex items-center gap-2"
                >
                  <span>OPEN LOCATION ON MAP</span>
                  <span>→</span>
                </a>
                <a
                  href="tel:+18137557411"
                  className="border border-carbon bg-concrete hover:bg-carbon hover:text-acid text-carbon font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 transition-colors"
                >
                  CALL (813) 755-7411
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 border border-carbon bg-white p-6 sm:p-8 shadow-[4px_4px_0px_#141414]">
              <div className="font-mono text-xs uppercase text-carbon/60 mb-2">
                INSTANT ESTIMATE REQUEST
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase mb-6">
                REQUEST A QUOTE
              </h2>

              {submitted ? (
                <div className="py-8 font-mono">
                  <div className="text-xl font-bold uppercase mb-2">REQUEST RECEIVED</div>
                  <p className="text-xs text-carbon/80 mb-6">
                    WE WILL CONTACT YOU SHORTLY. FOR IMMEDIATE DISPATCH CALL (813) 755-7411.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-carbon text-acid px-6 py-3 text-xs font-bold uppercase cursor-pointer"
                  >
                    SEND ANOTHER REQUEST
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
                    <label className="block font-bold uppercase mb-1">SERVICE NEEDED</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full border border-carbon bg-concrete p-3 uppercase"
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
                      className="w-full border border-carbon bg-concrete p-3"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase mb-1">PHONE NUMBER</label>
                    <input
                      required
                      type="tel"
                      placeholder="(813) 000-0000"
                      className="w-full border border-carbon bg-concrete p-3"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase mb-1">PROJECT DETAILS & LOCATION</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="DESCRIBE THE WORK NEEDED AND JOBSITE ADDRESS OR ZIP CODE..."
                      className="w-full border border-carbon bg-concrete p-3"
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
        </section>
      </main>

      <Footer onOpenQuote={handleOpenQuote} />

      {quoteOpen && (
        <div className="fixed inset-0 z-50 bg-carbon/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-concrete border-2 border-carbon max-w-lg w-full p-6 sm:p-8 shadow-[8px_8px_0px_#FF6A00]">
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
            <p className="font-mono text-xs uppercase mb-4">
              CALL <a href="tel:+18137557411" className="underline font-bold">(813) 755-7411</a> OR OPEN{" "}
              <a href={LOCATION_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold">
                LOCATION MAP
              </a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
