"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export interface ServiceTreeItem {
  code: string;
  slug: string;
  href: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  image: string;
  imageCaption: string;
  items: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  workflow: string[];
}

export const SERVICE_TREE: ServiceTreeItem[] = [
  {
    code: "SRV-01",
    slug: "structural-steel",
    href: "/services/structural-steel",
    tabLabel: "01 / STRUCTURAL STEEL",
    title: "STRUCTURAL STEEL",
    subtitle: "COMMERCIAL & INDUSTRIAL",
    badge: "AWS CODE-COMPLIANT FIELD WELDING",
    desc: "On-site structural steel welding, wide-flange I-beam erection, load-bearing column reinforcement, base plates, and structural retrofits across Tampa Bay commercial and industrial jobsites.",
    image: "/tmw/images/02_Welder_working_on_steel_structure.jpg",
    imageCaption: "W-BEAM & STRUCTURAL CONNECTION FIELD WELDING • TAMPA BAY",
    items: [
      "Wide-Flange I-Beam & Steel Column Field Welding",
      "Load-Bearing Reinforcement & Structural Retrofits",
      "Embed Plates, Shear Tabs, Gussets & Moment Connections",
      "Heavy Stick (SMAW) & Flux-Core (FCAW) Structural Processes",
    ],
    specs: [
      { label: "PROCESSES", value: "SMAW (STICK) / FCAW / MIG" },
      { label: "MATERIALS", value: "A36, A992, HSS TUBING & PLATE" },
      { label: "POWER SOURCE", value: "SELF-CONTAINED ENGINE WELDER" },
      { label: "SERVICE AREA", value: "HILLSBOROUGH, PINELLAS & PASCO" },
    ],
    applications: [
      "Commercial Warehouses & Retail Build-Outs",
      "Mezzanines, Catwalks & Rooftop Mechanical Frames",
      "Damaged Structural Column & Beam Restoration",
      "General Contractor & Steel Erector Field Support",
    ],
    workflow: [
      "BLUEPRINT & FIELD VERIFICATION — Review structural drawings, joint prep, and plumb/level alignment on site.",
      "SURFACE PREP & FIT-UP — Beveling, mill-scale removal, clamping, and tack verification prior to root pass.",
      "MULTI-PASS STRUCTURAL WELDING — Code-compliant root, fill, and cap passes with slag and spatter cleanup.",
    ],
  },
  {
    code: "SRV-02",
    slug: "custom-fabrication",
    href: "/services/custom-fabrication",
    tabLabel: "02 / CUSTOM FABRICATION",
    title: "CUSTOM FABRICATION",
    subtitle: "GATES • RAILINGS • STAIRS",
    badge: "BLUEPRINT TO ON-SITE INSTALLATION",
    desc: "Custom architectural and heavy-duty metal fabrication built to exact field measurements: automated driveway gates, commercial railings, steel staircases, security cages, and custom frames.",
    image: "/tmw/images/01_Welder_working_on_steel.jpg",
    imageCaption: "CUSTOM STEEL STAIRCASE, RAILING & ARCHITECTURAL METALWORK",
    items: [
      "Heavy Driveway, Cantilever & Swing Security Gates",
      "Code-Compliant Commercial & Residential Handrails",
      "Custom Steel Stair Stringers, Landings & Platforms",
      "Steel, Aluminum & Stainless Custom Brackets and Frames",
    ],
    specs: [
      { label: "ALLOYS", value: "CARBON STEEL, ALUMINUM, STAINLESS" },
      { label: "WELDING", value: "PRECISION MIG & TIG FINISHES" },
      { label: "DELIVERY", value: "FABRICATE, FIT-UP & INSTALL" },
      { label: "FINISH PREP", value: "GROUND SMOOTH FOR PRIMER / POWDER" },
    ],
    applications: [
      "HOA & Commercial Entry Gates with Heavy Hinges",
      "Interior Loft & Exterior Industrial Stair Systems",
      "ADA Handrails, Guardrails & Balcony Enclosures",
      "Custom Dumpster Enclosures, Bollards & Rack Systems",
    ],
    workflow: [
      "ON-SITE LASER MEASUREMENT — Exact field dimensions captured before cutting a single piece of steel.",
      "SHOP & RIG FABRICATION — Precision mitering, jig alignment, and distortion-controlled welding.",
      "ANCHORING & FINAL FIT — Solid concrete/steel anchoring, hinge tuning, and weld seam dressing.",
    ],
  },
  {
    code: "SRV-03",
    slug: "plasma-cutting",
    href: "/services/plasma-cutting",
    tabLabel: "03 / PLASMA CUTTING",
    title: "PLASMA CUTTING",
    subtitle: "UP TO 1 INCH THICKNESS",
    badge: "MOBILE HEAVY PLATE SEVERANCE",
    desc: "High-amperage mobile plasma cutting directly at your jobsite or yard. Clean, fast severance and precision cutouts on thick steel plates, structural beams, and heavy machinery up to 1 inch thick.",
    image: "/tmw/images/03_Specialist_operating_plasma_cutt.jpg",
    imageCaption: "HEAVY STEEL PLATE PLASMA SEVERANCE UP TO 1\" THICKNESS",
    items: [
      "Clean Steel Plate Cutting Up to 1\" Thickness",
      "On-Site Beam Coping, Flanges & Anchor Slot Cutouts",
      "Heavy Demolition & Seized Pin / Bracket Removal",
      "Bevel Edge Preparation Ready for Structural Welding",
    ],
    specs: [
      { label: "MAX CAPACITY", value: "UP TO 1.00 INCH (25 MM) STEEL" },
      { label: "METALS", value: "CARBON STEEL, STAINLESS, ALUMINUM" },
      { label: "MOBILITY", value: "100% TRUCK-MOUNTED GENERATOR" },
      { label: "EDGE QUALITY", value: "LOW DROSS • NARROW KERF" },
    ],
    applications: [
      "Field Modifications on Installed Structural Steel",
      "Custom Gusset Plates, Base Plates & Mounting Brackets",
      "Truck Bed, Flatbed & Heavy Trailer Alterations",
      "Industrial Tank, Hopper & Machinery Dismantling",
    ],
    workflow: [
      "LAYOUT & TEMPLATE MARKING — Scribing exact cut lines, radii, and bolt clearances on the workpiece.",
      "CONTROLLED PLASMA SEVERANCE — High-velocity arc cutting with minimal heat-affected zone.",
      "GRINDING & WELD PREP — Dross removal and edge dressing for immediate bolt-up or welding.",
    ],
  },
  {
    code: "SRV-04",
    slug: "emergency-24-7",
    href: "/services/emergency-24-7",
    tabLabel: "04 / EMERGENCY 24/7",
    title: "EMERGENCY 24/7",
    subtitle: "SAME-DAY DISPATCH",
    badge: "RAPID MOBILE RIG RESPONSE • (813) 755-7411",
    desc: "Urgent mobile welding dispatch when downtime costs money. We roll directly to your site, warehouse, roadside, or jobsite with a self-powered welding rig to repair critical steel failures the same day.",
    image: "/tmw/images/mobile-welding-trailer.webp",
    imageCaption: "SELF-CONTAINED MOBILE WELDING RIG • TAMPA BAY DISPATCH",
    items: [
      "Same-Day Urgent Dispatch Across Tampa Bay",
      "Excavator, Loader, Forklift & Heavy Machinery Cracks",
      "Broken Trailer Axles, Tongues, Hitches & Frames",
      "Damaged Security Gates, Hinges & Dock Levelers",
    ],
    specs: [
      { label: "DISPATCH", value: "SAME-DAY TAMPA BAY RESPONSE" },
      { label: "AUTONOMY", value: "NO SITE POWER REQUIRED" },
      { label: "DIRECT LINE", value: "(813) 755-7411" },
      { label: "COVERAGE", value: "TAMPA, BRANDON, RIVERVIEW, CLEARWATER" },
    ],
    applications: [
      "Construction Fleet & Earthmoving Equipment Breakdowns",
      "Commercial Loading Dock Plates & Warehouse Doors",
      "Commercial Semi-Trailers, Goosenecks & Utility Rigs",
      "Storm-Damaged or Impact-Damaged Gates & Railings",
    ],
    workflow: [
      "IMMEDIATE PHONE TRIAGE — Call (813) 755-7411 or text photos for instant dispatch and upfront estimate.",
      "CRACK ARREST & GOUGING — Drilling crack ends, V-grooving fatigued metal, and aligning fractured parts.",
      "HIGH-STRENGTH REINFORCEMENT — Full-penetration weld plus fish-plate gusseting stronger than factory.",
    ],
  },
];

interface ServiceDetailViewProps {
  slug?: string;
}

export default function ServiceDetailView({ slug }: ServiceDetailViewProps) {
  const pathname = usePathname();
  const currentService =
    SERVICE_TREE.find((item) => item.slug === slug) ||
    SERVICE_TREE.find((item) => pathname.includes(item.slug)) ||
    SERVICE_TREE[0];

  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(currentService.title);
  const [submitted, setSubmitted] = useState(false);

  const handleOpenQuote = (srv?: string) => {
    setSelectedService(srv || currentService.title);
    setSubmitted(false);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-concrete text-carbon selection:bg-acid selection:text-carbon flex flex-col">
      <Header onOpenQuote={handleOpenQuote} />

      <main className="flex-1">
        <section className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
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

              <p className="font-mono text-xs sm:text-sm uppercase text-carbon/85 max-w-2xl leading-relaxed mb-8">
                {currentService.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleOpenQuote(currentService.title)}
                  className="bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 transition-colors cursor-pointer shadow-[4px_4px_0px_#141414]"
                >
                  GET QUOTE FOR {currentService.title} →
                </button>
                <a
                  href="tel:+18137557411"
                  className="border border-carbon bg-white hover:bg-carbon hover:text-acid text-carbon font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 transition-colors"
                >
                  CALL (813) 755-7411
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 border border-carbon bg-carbon text-white shadow-[6px_6px_0px_#141414]">
              <div className="relative h-64 sm:h-72 overflow-hidden border-b border-carbon">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute top-3 left-3 bg-acid text-carbon border border-carbon px-2.5 py-1 font-mono text-[11px] font-bold uppercase">
                  {currentService.badge}
                </div>
              </div>
              <div className="p-4 font-mono text-[11px] text-acid uppercase tracking-wider">
                {currentService.imageCaption}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-carbon bg-acid">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs uppercase">
            {currentService.specs.map((spec) => (
              <div key={spec.label} className="border border-carbon bg-concrete px-4 py-3">
                <div className="text-[10px] text-carbon/70 font-bold">{spec.label}</div>
                <div className="font-bold text-carbon mt-0.5">{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 border border-carbon bg-white p-6 sm:p-8 shadow-[4px_4px_0px_#141414]">
              <div className="font-mono text-xs uppercase text-carbon/60 mb-2">
                {currentService.code} • SCOPE OF WORK
              </div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase mb-6">
                INCLUDED CAPABILITIES
              </h2>

              <ul className="space-y-3.5 font-mono text-xs sm:text-sm border-t border-carbon/20 pt-5">
                {currentService.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-carbon font-bold mt-0.5">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 border border-carbon bg-white p-6 sm:p-8 shadow-[4px_4px_0px_#141414]">
              <div className="font-mono text-xs uppercase text-carbon/60 mb-2">
                {currentService.code} • FIELD SECTORS
              </div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase mb-6">
                TYPICAL APPLICATIONS
              </h2>

              <ul className="space-y-3.5 font-mono text-xs sm:text-sm border-t border-carbon/20 pt-5">
                {currentService.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <span className="bg-acid border border-carbon px-1.5 text-[10px] font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-carbon bg-concrete">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
            <div className="font-mono text-xs uppercase text-carbon/70 mb-2">
              EXECUTION PROTOCOL • {currentService.title}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl uppercase mb-8">
              HOW WE EXECUTE ON SITE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentService.workflow.map((step, idx) => (
                <div
                  key={step}
                  className="border border-carbon bg-white p-6 shadow-[4px_4px_0px_#141414]"
                >
                  <div className="font-mono text-xs font-bold bg-carbon text-acid inline-block px-2.5 py-1 mb-4">
                    STEP 0{idx + 1}
                  </div>
                  <p className="font-mono text-xs leading-relaxed text-carbon">
                    {step}
                  </p>
                </div>
              ))}
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
