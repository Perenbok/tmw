"use client";

import { useState } from "react";

interface ProjectsAndServicesProps {
  onOpenQuote: (service?: string) => void;
}

const SERVICES = [
  {
    code: "SRV-01",
    title: "STRUCTURAL STEEL",
    subtitle: "COMMERCIAL & INDUSTRIAL",
    desc: "On-site structural steel welding, I-beam erection, load-bearing reinforcement, columns, and code-compliant AWS structural repairs across Tampa Bay.",
    specs: ["AWS Certified Welds", "MIG / Stick / Flux-Core", "Commercial & Industrial"],
    image: "/images/structural-beam.jpg",
  },
  {
    code: "SRV-02",
    title: "CUSTOM FABRICATION",
    subtitle: "GATES • RAILINGS • STAIRS",
    desc: "Precision custom metal fabrication from blueprint to installation: driveway gates, architectural railings, steel staircases, frames, and trailers.",
    specs: ["Steel, Aluminum & Stainless", "Custom Blueprint Fit-Up", "On-Site Installation"],
    image: "/images/welder-working.webp",
  },
  {
    code: "SRV-03",
    title: "PLASMA CUTTING",
    subtitle: "UP TO 1 INCH THICKNESS",
    desc: "High-precision mobile plasma cutting for heavy steel plates, structural modifications, brackets, and custom industrial cutouts up to 1\" thick.",
    specs: ["Up to 1\" Steel Plate", "Clean Edge Tolerance", "Mobile On-Site Rig"],
    image: "/images/emergency-work.webp",
  },
  {
    code: "SRV-04",
    title: "EMERGENCY 24/7",
    subtitle: "SAME-DAY DISPATCH",
    desc: "Rapid mobile welding response for broken equipment, heavy machinery, cracked frames, gates, and urgent structural failures anywhere in Tampa.",
    specs: ["Same-Day Response", "Self-Powered Rig", "Call (813) 755-7411"],
    image: "/images/emergency-work.webp",
  },
];

const PROJECTS = [
  {
    id: "PRJ-01",
    category: "STRUCTURAL",
    title: "COMMERCIAL STRUCTURAL BEAM REINFORCEMENT",
    location: "TAMPA, FL",
    spec: "W12 STEEL BEAMS • STICK WELD",
    image: "/images/structural-beam.jpg",
  },
  {
    id: "PRJ-02",
    category: "FABRICATION",
    title: "CUSTOM ARCHITECTURAL STAIRCASE & RAILING",
    location: "WESTSHORE, TAMPA",
    spec: "HEAVY GAUGE STEEL • POWDER COATED",
    image: "/images/welder-working.webp",
  },
  {
    id: "PRJ-03",
    category: "PLASMA & REPAIR",
    title: "HEAVY EQUIPMENT & TRAILER FRAME OVERHAUL",
    location: "BRANDON / TAMPA BAY",
    spec: "1\" PLATE PLASMA CUT • MIG",
    image: "/images/emergency-work.webp",
  },
];

export default function ProjectsAndServices({ onOpenQuote }: ProjectsAndServicesProps) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeFilter));

  return (
    <>
      <section id="services" className="border-b border-carbon bg-concrete">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-carbon pb-8 mb-12">
            <div>
              <div className="font-mono text-xs uppercase bg-acid inline-block px-2 py-0.5 font-bold mb-3 border border-carbon">
                CAPABILITIES • MOBILE RIG EQUIPPED
              </div>
              <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight leading-none">
                CORE WELDING SERVICES
              </h2>
            </div>
            <p className="font-mono text-xs uppercase text-carbon/80 max-w-md leading-relaxed">
              SELF-CONTAINED MOBILE WELDING UNIT SERVING TAMPA, WESLEY CHAPEL, RIVERVIEW, BRANDON & CLEARWATER. UPFRONT QUOTES WITH ZERO HIDDEN FEES.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-carbon">
            {SERVICES.map((srv) => (
              <div
                key={srv.code}
                className="border-r border-b border-carbon p-6 sm:p-8 flex flex-col justify-between bg-concrete hover:bg-white transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-4">
                    <span className="bg-carbon text-acid px-2 py-0.5 font-bold">
                      {srv.code}
                    </span>
                    <span className="text-carbon/70 uppercase">{srv.subtitle}</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mb-3">
                    {srv.title}
                  </h3>

                  <p className="font-mono text-xs sm:text-sm text-carbon/80 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {srv.specs.map((spec) => (
                      <span
                        key={spec}
                        className="font-mono text-[11px] uppercase border border-carbon/40 px-2.5 py-1 bg-concrete"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenQuote(srv.title)}
                    className="w-full py-3 px-4 border border-carbon font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between group-hover:bg-acid transition-colors cursor-pointer"
                  >
                    <span>REQUEST {srv.title} ESTIMATE</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-carbon bg-carbon text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/20 pb-8 mb-12">
            <div>
              <div className="font-mono text-xs uppercase bg-acid text-carbon inline-block px-2 py-0.5 font-bold mb-3">
                FIELD LOG • TAMPA BAY, FL
              </div>
              <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight leading-none text-white">
                FEATURED WORK
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {["ALL", "STRUCTURAL", "FABRICATION", "PLASMA"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-2 border cursor-pointer transition-colors ${
                    activeFilter === tab
                      ? "bg-acid text-carbon border-acid font-bold"
                      : "border-white/30 text-white hover:border-acid"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-white/20 bg-white/5 flex flex-col justify-between group"
              >
                <div className="relative h-64 overflow-hidden border-b border-white/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-carbon/90 border border-white/20 px-2.5 py-1 font-mono text-[11px] text-acid">
                    {project.id} • {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="font-mono text-[11px] text-white/60 uppercase mb-2">
                    {project.location}
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-3">
                    {project.title}
                  </h3>
                  <div className="font-mono text-xs text-acid border-t border-white/15 pt-3">
                    {project.spec}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
