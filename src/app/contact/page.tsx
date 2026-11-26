"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-concrete text-carbon selection:bg-acid selection:text-carbon flex flex-col">
      <Header onOpenQuote={() => {}} />

      <main className="flex-1 bg-concrete">
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase bg-acid inline-block px-2.5 py-1 font-bold border border-carbon mb-4">
                DISPATCH & ESTIMATES • TAMPA BAY
              </div>
              <h1 className="font-display text-6xl sm:text-8xl uppercase tracking-tight leading-[0.9] mb-6">
                CONTACT US
              </h1>
              <p className="font-mono text-xs sm:text-sm uppercase text-carbon/85 leading-relaxed mb-8">
                SELF-CONTAINED MOBILE WELDING UNIT READY FOR COMMERCIAL, INDUSTRIAL, AND SAME-DAY EMERGENCY DISPATCH.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="border border-carbon bg-white p-5">
                <div className="font-bold uppercase text-carbon/60 mb-1">PHONE / DISPATCH</div>
                <a href="tel:+18137557411" className="text-lg font-bold underline">
                  (813) 755-7411
                </a>
              </div>
              <div className="border border-carbon bg-white p-5">
                <div className="font-bold uppercase text-carbon/60 mb-1">ADDRESS</div>
                <div className="font-bold">9430 LAZY LANE, TAMPA, FL 33614</div>
              </div>
              <div className="border border-carbon bg-white p-5">
                <div className="font-bold uppercase text-carbon/60 mb-1">HOURS</div>
                <div className="font-bold">MON – SAT: 7:00 AM – 7:00 PM • SUN: CLOSED</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 border border-carbon bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#141414]">
            <h2 className="font-display text-4xl uppercase mb-2">DIRECT ESTIMATE REQUEST</h2>
            <p className="font-mono text-xs text-carbon/75 mb-6">
              UPFRONT PRICING WITH ZERO HIDDEN FEES.
            </p>

            {submitted ? (
              <div className="py-10 text-center font-mono">
                <div className="text-2xl font-bold mb-2">REQUEST RECEIVED</div>
                <p className="text-xs text-carbon/80 mb-6">
                  WE WILL CALL YOU BACK SHORTLY. FOR URGENT DISPATCH CALL (813) 755-7411.
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
                  <label className="block font-bold uppercase mb-1">SERVICE TYPE</label>
                  <select className="w-full border border-carbon bg-concrete/40 p-3 uppercase">
                    <option value="STRUCTURAL STEEL">STRUCTURAL STEEL</option>
                    <option value="CUSTOM FABRICATION">CUSTOM FABRICATION</option>
                    <option value="PLASMA CUTTING">PLASMA CUTTING</option>
                    <option value="EMERGENCY 24/7">EMERGENCY 24/7</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold uppercase mb-1">YOUR NAME / COMPANY</label>
                  <input required type="text" placeholder="E.G. JOHN DOE" className="w-full border border-carbon bg-concrete/40 p-3" />
                </div>
                <div>
                  <label className="block font-bold uppercase mb-1">PHONE NUMBER</label>
                  <input required type="tel" placeholder="(813) 000-0000" className="w-full border border-carbon bg-concrete/40 p-3" />
                </div>
                <div>
                  <label className="block font-bold uppercase mb-1">PROJECT DETAILS & ZIP CODE</label>
                  <textarea required rows={4} placeholder="DESCRIBE METAL TYPE, THICKNESS, OR REPAIR NEEDED..." className="w-full border border-carbon bg-concrete/40 p-3" />
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
        </section>
      </main>

      <Footer onOpenQuote={() => {}} />
    </div>
  );
}
