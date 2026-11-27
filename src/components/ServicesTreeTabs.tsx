"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface ServiceTreeItem {
  code: string;
  slug: string;
  href: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
}

export const SERVICE_TREE: ServiceTreeItem[] = [
  {
    code: "SRV-01",
    slug: "structural-steel",
    href: "/services/structural-steel",
    tabLabel: "01 / STRUCTURAL STEEL",
    title: "STRUCTURAL STEEL",
    subtitle: "COMMERCIAL & INDUSTRIAL",
    desc: "On-site structural steel welding, I-beam erection, load-bearing reinforcement, columns, and code-compliant AWS structural repairs across Tampa Bay.",
    items: [
      "I-Beam & Column Field Welding",
      "Structural Reinforcement & Retrofits",
      "Commercial Building Steel",
      "Mobile Stick / MIG / Flux-Core",
    ],
  },
  {
    code: "SRV-02",
    slug: "custom-fabrication",
    href: "/services/custom-fabrication",
    tabLabel: "02 / CUSTOM FABRICATION",
    title: "CUSTOM FABRICATION",
    subtitle: "GATES • RAILINGS • STAIRS",
    desc: "Precision custom metal fabrication from blueprint to installation: driveway gates, architectural railings, steel staircases, frames, and trailers.",
    items: [
      "Heavy Driveway & Security Gates",
      "Interior & Exterior Metal Railings",
      "Steel Stairs, Platforms & Frames",
      "Trailer & Equipment Fabrication",
    ],
  },
  {
    code: "SRV-03",
    slug: "plasma-cutting",
    href: "/services/plasma-cutting",
    tabLabel: "03 / PLASMA CUTTING",
    title: "PLASMA CUTTING",
    subtitle: "UP TO 1 INCH THICKNESS",
    desc: "High-precision mobile plasma cutting for heavy steel plates, structural modifications, brackets, and custom industrial cutouts up to 1\" thick.",
    items: [
      "Steel Plate Cutting Up to 1\"",
      "On-Site Beam & Bracket Trimming",
      "Clean Edge Prep for Welding",
      "Rapid Mobile Rig Setup",
    ],
  },
  {
    code: "SRV-04",
    slug: "emergency-24-7",
    href: "/services/emergency-24-7",
    tabLabel: "04 / EMERGENCY 24/7",
    title: "EMERGENCY 24/7",
    subtitle: "SAME-DAY DISPATCH",
    desc: "Rapid mobile welding response for broken equipment, heavy machinery, cracked frames, gates, and urgent structural failures anywhere in Tampa.",
    items: [
      "Same-Day Tampa Bay Dispatch",
      "Heavy Equipment & Machinery Repair",
      "Broken Gate & Hinge Restoration",
      "Self-Powered Generator Welding Rig",
    ],
  },
];

export default function ServicesTreeTabs() {
  const pathname = usePathname();
  const isAllServices = pathname === "/services";

  return (
    <div className="border-y border-carbon bg-concrete/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider mb-4">
          <Link
            href="/services"
            className={`px-2.5 py-1 border border-carbon transition-colors ${
              isAllServices ? "bg-acid font-bold" : "bg-white hover:bg-acid"
            }`}
          >
            SERVICES ROOT
          </Link>
          <span className="text-carbon/50">└─</span>
          <span className="text-carbon/80 font-bold">SERVICE TREE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 font-mono text-xs uppercase">
          <Link
            href="/services"
            className={`px-4 py-3 border border-carbon flex items-center justify-between transition-colors ${
              isAllServices
                ? "bg-carbon text-acid font-bold shadow-[3px_3px_0px_#C4F000]"
                : "bg-white text-carbon hover:bg-acid"
            }`}
          >
            <span>ALL SERVICES</span>
            <span>→</span>
          </Link>

          {SERVICE_TREE.map((srv) => {
            const active = pathname === srv.href;
            return (
              <Link
                key={srv.href}
                href={srv.href}
                className={`px-4 py-3 border border-carbon flex items-center justify-between transition-colors ${
                  active
                    ? "bg-acid text-carbon font-bold shadow-[3px_3px_0px_#141414]"
                    : "bg-white text-carbon hover:bg-acid"
                }`}
              >
                <span className="truncate">{srv.tabLabel}</span>
                <span className="ml-2 shrink-0">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
