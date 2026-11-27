"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
}

const SERVICE_DROPDOWN = [
  { label: "ALL SERVICES", href: "/services" },
  { label: "01 / STRUCTURAL STEEL", href: "/services/structural-steel" },
  { label: "02 / CUSTOM FABRICATION", href: "/services/custom-fabrication" },
  { label: "03 / PLASMA CUTTING", href: "/services/plasma-cutting" },
  { label: "04 / EMERGENCY 24/7", href: "/services/emergency-24-7" },
];

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/our-work" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ onOpenQuote }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isHomeActive = pathname === "/";
  const isServicesActive = pathname.startsWith("/services");

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

        <nav className="hidden lg:flex items-center gap-5 font-mono text-xs tracking-widest uppercase">
          <Link
            href="/"
            className={`px-2.5 py-1 transition-colors border ${
              isHomeActive
                ? "bg-acid text-carbon border-carbon font-bold"
                : "border-transparent hover:bg-acid hover:border-carbon"
            }`}
          >
            Home
          </Link>

          <div className="relative group">
            <Link
              href="/services"
              className={`px-2.5 py-1 transition-colors border flex items-center gap-1 ${
                isServicesActive
                  ? "bg-acid text-carbon border-carbon font-bold"
                  : "border-transparent group-hover:bg-acid group-hover:border-carbon"
              }`}
            >
              <span>Services</span>
              <span className="text-[10px]">▾</span>
            </Link>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full pt-2 w-64 z-50">
              <div className="bg-concrete border-2 border-carbon shadow-[4px_4px_0px_#141414] divide-y divide-carbon/20">
                {SERVICE_DROPDOWN.map((srv) => {
                  const activeSrv = pathname === srv.href;
                  return (
                    <Link
                      key={srv.href}
                      href={srv.href}
                      className={`block px-4 py-3 text-xs flex items-center justify-between transition-colors ${
                        activeSrv
                          ? "bg-acid text-carbon font-bold"
                          : "text-carbon hover:bg-acid"
                      }`}
                    >
                      <span>{srv.label}</span>
                      <span>→</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {NAV_ITEMS.slice(1).map((item) => {
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

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="tel:+18137557411"
            className="flex items-center font-mono text-xs font-bold border border-carbon px-4 py-3 hover:bg-carbon hover:text-acid transition-colors"
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

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden w-11 h-11 shrink-0 border border-carbon bg-concrete hover:bg-acid text-carbon flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors"
        >
          <span
            className={`w-5 h-0.5 bg-carbon transition-transform duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-carbon transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-carbon transition-transform duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-carbon bg-concrete px-3 py-4 space-y-2 font-mono text-xs uppercase tracking-widest">
          <nav className="flex flex-col divide-y divide-carbon/15 border border-carbon bg-white/40">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3.5 flex items-center justify-between transition-colors ${
                isHomeActive
                  ? "bg-acid text-carbon font-bold"
                  : "text-carbon hover:bg-acid"
              }`}
            >
              <span>Home</span>
              <span>→</span>
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`w-full px-4 py-3.5 flex items-center justify-between transition-colors cursor-pointer ${
                  isServicesActive
                    ? "bg-acid text-carbon font-bold"
                    : "text-carbon hover:bg-acid"
                }`}
              >
                <span>Services</span>
                <span>{mobileServicesOpen ? "▴" : "▾"}</span>
              </button>
              {mobileServicesOpen && (
                <div className="bg-concrete border-t border-carbon/15 divide-y divide-carbon/10">
                  {SERVICE_DROPDOWN.map((srv) => (
                    <Link
                      key={srv.href}
                      href={srv.href}
                      onClick={() => setMenuOpen(false)}
                      className={`pl-8 pr-4 py-3 flex items-center justify-between text-[11px] ${
                        pathname === srv.href
                          ? "bg-acid/70 font-bold"
                          : "hover:bg-acid/40"
                      }`}
                    >
                      <span>{srv.label}</span>
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_ITEMS.slice(1).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3.5 flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-acid text-carbon font-bold"
                      : "text-carbon hover:bg-acid"
                  }`}
                >
                  <span>{item.label}</span>
                  <span>→</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href="tel:+18137557411"
              className="border border-carbon px-4 py-3 font-bold text-center hover:bg-carbon hover:text-acid transition-colors"
            >
              CALL (813) 755-7411
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenQuote();
              }}
              className="bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon px-4 py-3 font-bold uppercase tracking-wider cursor-pointer transition-colors"
            >
              GET A QUOTE →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
