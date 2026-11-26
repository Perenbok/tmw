"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DETAILED_SERVICES = [
  {
    code: "SRV-01",
    title: "STRUCTURAL STEEL",
    subtitle: "COMMERCIAL & INDUSTRIAL",
    desc: "On-site structural steel welding, I-beam erection, load-bearing reinforcement, columns, and code-compliant AWS structural repairs across Tampa Bay.",
    items: ["I-Beam & Column Field Welding", "Structural Reinforcement & Retrofits", "Commercial Building Steel", "Mobile Stick / MIG / Flux-Core"],
  },
  {
    code: "SRV-02",
    title: "CUSTOM FABRICATION",
    subtitle: "GATES • RAILINGS • STAIRS",
    desc: "Precision custom metal fabrication from blueprint to installation: driveway gates, architectural railings, steel staircases, frames, and trailers.",
    items: ["Heavy Driveway & Security Gates", "Interior & Exterior Metal Railings", "Steel Stairs, Platforms & Frames", "Trailer & Equipment Fabrication"],
  },
  {
    code: "SRV-03",
    title: "PLASMA CUTTING",
    subtitle: "UP TO 1 INCH THICKNESS",
    desc: "High-precision mobile plasma cutting for heavy steel plates, structural modifications, brackets, and custom industrial cutouts up to 1\" thick.",
    items: ["Steel Plate Cutting Up to 1\"", "On-Site Beam & Bracket Trimming", "Clean Edge Prep for Welding", "Rapid Mobile Rig Setup"],
  },
  {
    code: "SRV-04",
    title: "EMERGENCY 24/7",
    subtitle: "SAME-DAY DISPATCH",
    desc: "Rapid mobile welding response for broken equipment, heavy machinery, cracked frames, gates, and urgent structural failures anywhere in Tampa.",
    items: ["Same-Day Tampa Bay Dispatch", "Heavy Equipment & Machinery Repair", "Broken Gate & Hinge Restoration", "Self-Powered Generator Welding Rig"],
  },
];

export default function ServicesPage() {
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
              CAPABILITIES • MOBILE RIG EQUIPPED
            </div>
            <h1 className="font-display text-6xl sm:text-8xl uppercase tracking-tight leading-[0.9] mb-6">
              CORE WELDING SERVICES
            </h1>
            <p className="font-mono text-xs sm:text-sm uppercase text-carbon/85 max-w-2xl leading-relaxed">
              SELF-CONTAINED MOBILE WELDING UNIT SERVING TAMPA, WESLEY CHAPEL, RIVERVIEW, BRANDON & CLEARWATER. UPFRONT QUOTES WITH ZERO HIDDEN FEES.
            </p>
          </div>
        </section>

        <section className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DETAILED_SERVICES.map((srv) => (
              <div
                key={srv.code}
                className="border border-carbon bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#141414]"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-4">
                    <span className="bg-carbon text-acid px-2 py-0.5 font-bold">{srv.code}</span>
                    <span className="text-carbon/70 uppercase">{srv.subtitle}</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl uppercase mb-3">{srv.title}</h2>
                  <p className="font-mono text-xs sm:text-sm text-carbon/80 leading-relaxed mb-6">{srv.desc}</p>
                  <ul className="space-y-2 font-mono text-xs border-t border-carbon/20 pt-4 mb-6">
                    {srv.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-carbon font-bold">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenQuote(srv.title)}
                  className="w-full py-3.5 px-4 bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>GET QUOTE FOR {srv.title}</span>
                  <span>→</span>
                </button>
              </div>
            ))}
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
                <h3 className="font-display text-3xl uppercase mt-1">REQUEST ON-SITE QUOTE</h3>
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
                  <input required type="text" placeholder="E.G. JOHN DOE" className="w-full border border-carbon bg-white p-3" />
                </div>
                <div>
                  <label className="block font-bold uppercase mb-1">PHONE NUMBER</label>
                  <input required type="tel" placeholder="(813) 000-0000" className="w-full border border-carbon bg-white p-3" />
                </div>
                <div>
                  <label className="block font-bold uppercase mb-1">PROJECT DETAILS & ZIP CODE</label>
                  <textarea required rows={3} placeholder="DESCRIBE METAL TYPE, THICKNESS, OR REPAIR NEEDED..." className="w-full border border-carbon bg-white p-3" />
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
