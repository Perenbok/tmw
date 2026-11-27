"use client";

import Link from "next/link";

const SERVICES = [
  { title: "STRUCTURAL STEEL", href: "/services/structural-steel" },
  { title: "CUSTOM FABRICATION", href: "/services/custom-fabrication" },
  { title: "PLASMA CUTTING", href: "/services/plasma-cutting" },
  { title: "EMERGENCY 24/7", href: "/services/emergency-24-7" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="border-b border-carbon">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 border-l border-carbon">
        {SERVICES.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group flex items-center justify-between p-8 sm:p-12 border-r border-b border-carbon bg-concrete hover:bg-carbon hover:text-acid transition-colors duration-200"
          >
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide leading-none">
              {service.title}
            </h3>
            <span className="font-mono text-2xl sm:text-3xl transition-transform duration-200 group-hover:translate-x-2">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
