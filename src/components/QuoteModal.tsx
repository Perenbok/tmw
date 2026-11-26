"use client";

import { useState, useEffect } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  initialService: string;
  onClose: () => void;
}

export default function QuoteModal({
  isOpen,
  initialService,
  onClose,
}: QuoteModalProps) {
  const [service, setService] = useState(initialService);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setService(initialService || "Commercial Construction");
    setSubmitted(false);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon/80 backdrop-blur-xs p-4">
      <div className="bg-concrete border-2 border-carbon max-w-lg w-full p-6 sm:p-8 relative shadow-[8px_8px_0px_#C4F000]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-sm font-bold border border-carbon px-2.5 py-1 hover:bg-carbon hover:text-acid cursor-pointer"
        >
          ✕
        </button>
        <div className="font-mono text-xs uppercase bg-acid inline-block px-2 py-0.5 font-bold mb-2">
          LIC #CGC 1539267
        </div>
        <h3 className="font-display text-4xl uppercase tracking-tight mb-2">
          REQUEST PROJECT ESTIMATE
        </h3>
        <p className="font-mono text-xs text-carbon/75 mb-6">
          Submit your site location and project scope. Our pre-construction team
          responds within 1 business day.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
          <div>
            <label className="block font-bold uppercase mb-1">
              Full Name / Company *
            </label>
            <input
              type="text"
              required
              placeholder="John Miller / Miller Holdings"
              className="w-full bg-white border border-carbon px-3 py-2.5 focus:outline-none focus:bg-acid/20"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold uppercase mb-1">Phone *</label>
              <input
                type="tel"
                required
                placeholder="(813) 555-0194"
                className="w-full bg-white border border-carbon px-3 py-2.5 focus:outline-none focus:bg-acid/20"
              />
            </div>
            <div>
              <label className="block font-bold uppercase mb-1">
                Project City (FL) *
              </label>
              <input
                type="text"
                required
                placeholder="Odessa / Tampa, FL"
                className="w-full bg-white border border-carbon px-3 py-2.5 focus:outline-none focus:bg-acid/20"
              />
            </div>
          </div>
          <div>
            <label className="block font-bold uppercase mb-1">
              Scope / Service
            </label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-white border border-carbon px-3 py-2.5 focus:outline-none focus:bg-acid/20"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-carbon text-acid hover:bg-acid hover:text-carbon border border-carbon font-bold uppercase py-3.5 tracking-wider transition-colors cursor-pointer"
          >
            TRANSMIT INQUIRY →
          </button>
        </form>

        {submitted && (
          <div className="mt-4 p-3 bg-acid border border-carbon font-mono text-xs font-bold">
            ✓ INQUIRY LOGGED. GK CONSTRUCTION PRE-CONSTRUCTION TEAM WILL CONTACT
            YOU SHORTLY.
          </div>
        )}
      </div>
    </div>
  );
}
