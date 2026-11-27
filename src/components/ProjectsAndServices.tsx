"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectsAndServicesProps {
  onOpenQuote: (service?: string) => void;
}

const SERVICES = [
  { title: "STRUCTURAL STEEL", href: "/services/structural-steel" },
  { title: "CUSTOM FABRICATION", href: "/services/custom-fabrication" },
  { title: "PLASMA CUTTING", href: "/services/plasma-cutting" },
  { title: "EMERGENCY 24/7", href: "/services/emergency-24-7" },
];

const PROJECTS = [
  {
    id: "PRJ-01",
    category: "STRUCTURAL",
    title: "COMMERCIAL STRUCTURAL BEAM REINFORCEMENT",
    location: "TAMPA, FL",
    spec: "W12 STEEL BEAMS • STICK WELD",
    image: "/tmw/images/02_Welder_working_on_steel_structure.jpg",
  },
  {
    id: "PRJ-02",
    category: "FABRICATION",
    title: "CUSTOM ARCHITECTURAL STAIRCASE & RAILING",
    location: "WESTSHORE, TAMPA",
    spec: "HEAVY GAUGE STEEL • POWDER COATED",
    image: "/tmw/images/01_Welder_working_on_steel.jpg",
  },
  {
    id: "PRJ-03",
    category: "PLASMA & REPAIR",
    title: "HEAVY EQUIPMENT & TRAILER FRAME OVERHAUL",
    location: "BRANDON / TAMPA BAY",
    spec: "1\" PLATE PLASMA CUT • MIG",
    image: "/tmw/images/03_Specialist_operating_plasma_cutt.jpg",
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
          <div className="border-b border-carbon pb-8 mb-12">
            <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight leading-none">
              SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-carbon">
            {SERVICES.map((srv) => (
              <Link
                key={srv.href}
                href={srv.href}
                className="group border-r border-b border-carbon p-8 sm:p-10 flex items-center justify-between bg-concrete hover:bg-carbon hover:text-acid transition-colors"
              >
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-wide leading-none">
                  {srv.title}
                </h3>
                <span className="font-mono text-2xl transition-transform duration-200 group-hover:translate-x-2">
                  →
                </span>
              </Link>
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

          <div className="mt-10">
            <button
              onClick={() => onOpenQuote()}
              className="bg-acid text-carbon font-mono text-xs font-bold uppercase px-6 py-3.5 hover:bg-white transition-colors cursor-pointer"
            >
              GET A FREE ESTIMATE →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
