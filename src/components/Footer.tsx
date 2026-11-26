"use client";

interface FooterProps {
  onOpenQuote: (service?: string) => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer className="bg-carbon text-white">
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
              onClick={() => onOpenQuote()}
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
        <div>TAMPA • WESLEY CHAPEL • RIVERVIEW • BRANDON • CLEARWATER • ST. PETERSBURG</div>
      </div>
    </footer>
  );
}
