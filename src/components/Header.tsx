"use client";

import Link from "next/link";

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-concrete/95 backdrop-blur-sm border-b border-carbon">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 relative flex items-center justify-center">
            <svg viewBox="0 0 44 44" className="w-full h-full">
              <rect x="2" y="2" width="18" height="18" fill="#C4F000" stroke="#141414" strokeWidth="1.5" />
              <rect x="24" y="2" width="18" height="18" fill="#141414" />
              <rect x="2" y="24" width="18" height="18" fill="#141414" />
              <rect x="16" y="16" width="14" height="14" fill="#C4F000" fillOpacity="0.85" stroke="#141414" strokeWidth="1.5" />
              <rect x="26" y="26" width="16" height="16" fill="#C4F000" stroke="#141414" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl tracking-wide leading-none text-carbon">
              TAMPA MOBILE WELDING
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-carbon/80 mt-0.5">
              STRUCTURAL • FABRICATION • PLASMA CUTTING
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          <Link href="/services" className="hover:bg-acid px-2 py-1 transition-colors">Services</Link>
          <Link href="/#projects" className="hover:bg-acid px-2 py-1 transition-colors">Our Work</Link>
          <Link href="/#reviews" className="hover:bg-acid px-2 py-1 transition-colors">Reviews</Link>
          <Link href="/#contact" className="hover:bg-acid px-2 py-1 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+18137557411"
            className="hidden sm:flex items-center font-mono text-xs font-bold border border-carbon px-4 py-3 hover:bg-carbon hover:text-acid transition-colors"
          >
            (813) 755-7411
          </a>
          <button
            onClick={() => onOpenQuote()}
            className="bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>GET A QUOTE</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </header>
  );
}
