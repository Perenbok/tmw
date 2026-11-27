"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesTreeTabs, {
  SERVICE_TREE,
  ServiceTreeItem,
} from "@/components/ServicesTreeTabs";

interface ServiceDetailViewProps {
  service?: ServiceTreeItem;
}

export default function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const currentService = service ?? SERVICE_TREE[0];
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(currentService.title);
  const [submitted, setSubmitted] = useState(false);

  const handleOpenQuote = (srv?: string) => {
    setSelectedService(srv || currentService.title);
    setSubmitted(false);
    setQuoteOpen(true);
  };

  const otherServices = SERVICE_TREE.filter(
    (item) => item.slug !== currentService.slug
  );

  return (
    <div className="min-h-screen bg-concrete text-carbon selection:bg-acid selection:text-carbon flex flex-col">
      <Header onOpenQuote={handleOpenQuote} />
      <ServicesTreeTabs />

      <main className="flex-1">
        <section className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase mb-4">
              <span className="bg-carbon text-acid px-2.5 py-1 font-bold">
                {currentService.code}
              </span>
              <span className="bg-acid border border-carbon px-2.5 py-1 font-bold">
                {currentService.subtitle}
              </span>
              <Link href="/services" className="underline hover:bg-acid px-1.5 py-0.5">
                ← ALL SERVICES
              </Link>
            </div>

            <h1 className="font-display text-5xl sm:text-8xl uppercase tracking-tight leading-[0.9] mb-6">
              {currentService.title}
            </h1>

            <p className="font-mono text-xs sm:text-sm uppercase text-carbon/85 max-w-2xl leading-relaxed">
              {currentService.desc}
            </p>
          </div>
        </section>

        <section className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 border border-carbon bg-white p-6 sm:p-8 shadow-[4px_4px_0px_#141414]">
              <div className="font-mono text-xs uppercase text-carbon/60 mb-2">
                INCLUDED CAPABILITIES
              </div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase mb-6">
                WHAT WE DELIVER ON SITE
              </h2>

              <ul className="space-y-3 font-mono text-xs sm:text-sm border-t border-carbon/20 pt-5 mb-8">
                {currentService.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-carbon font-bold">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleOpenQuote(currentService.title)}
                  className="bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 transition-colors cursor-pointer"
                >
                  GET QUOTE FOR {currentService.title} →
                </button>
                <a
                  href="tel:+18137557411"
                  className="border border-carbon bg-concrete hover:bg-carbon hover:text-acid text-carbon font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 transition-colors"
                >
                  CALL (813) 755-7411
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 border border-carbon bg-carbon text-white p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs uppercase text-acid font-bold mb-3">
                  OTHER SERVICE BRANCHES
                </div>
                <div className="space-y-2.5">
                  {otherServices.map((other) => (
                    <Link
                      key={other.href}
                      href={other.href}
                      className="block border border-white/20 p-4 hover:border-acid hover:bg-white/5 transition-colors font-mono"
                    >
                      <div className="text-[11px] text-acid uppercase">{other.code}</div>
                      <div className="text-sm font-bold uppercase flex items-center justify-between mt-1">
                        <span>{other.title}</span>
                        <span>→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="font-mono text-[11px] text-white/70 uppercase border-t border-white/15 pt-4 mt-6">
                TAMPA • WESLEY CHAPEL • RIVERVIEW • BRANDON • CLEARWATER
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenQuote={handleOpenQuote} />

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
                    {SERVICE_TREE.map((item) => (
                      <option key={item.code} value={item.title}>
                        {item.title}
                      </option>
                    ))}
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
