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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 relative flex items-center justify-center bg-white border border-carbon overflow-hidden">
            <img
              src="/tmw/images/tmw-logo.jpeg"
              alt="Tampa Mobile Welding"
              className="w-full h-full object-contain"
            />
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
