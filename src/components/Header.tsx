"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
}

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ onOpenQuote }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-concrete/95 backdrop-blur-sm border-b border-carbon">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
          <img
            src="/tmw/images/tmw-logo.jpeg"
            alt="Tampa Mobile Welding"
            className="h-9 sm:h-12 w-auto max-w-[48px] sm:max-w-[64px] shrink-0 object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-105"
          />
          <div className="min-w-0">
            <div className="font-display text-lg sm:text-3xl tracking-wide leading-none text-carbon truncate">
              TAMPA MOBILE WELDING
            </div>
            <div className="font-mono text-[8px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.18em] uppercase text-carbon/80 mt-0.5 leading-tight truncate">
              STRUCTURAL • FABRICATION • PLASMA
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs tracking-widest uppercase">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1 transition-colors border ${
                  isActive
                    ? "bg-acid text-carbon border-carbon font-bold"
                    : "border-transparent hover:bg-acid hover:border-carbon"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:+18137557411"
            className="hidden md:flex items-center font-mono text-xs font-bold border border-carbon px-4 py-3 hover:bg-carbon hover:text-acid transition-colors"
          >
            (813) 755-7411
          </a>
          <button
            onClick={() => onOpenQuote()}
            className="bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-2.5 sm:px-5 sm:py-3 transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>QUOTE</span>
            <span className="hidden sm:inline">GET A QUOTE</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </header>
  );
}
