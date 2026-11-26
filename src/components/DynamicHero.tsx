"use client";

import { useEffect, useState } from "react";

interface DynamicHeroProps {
  onOpenQuote: (service?: string) => void;
}

const SLIDES = [
  {
    num: "01",
    coords: "27.9506° N, 82.4572° W",
    loc: "9430 LAZY LANE • TAMPA, FL 33614",
    lines: ["WELD.", "FABRICATE.", "DELIVER."],
    subcopy:
      "THE MOST RELIABLE MOBILE WELDING AND FABRICATION SERVICE IN TAMPA BAY. UPFRONT PRICING & NO HIDDEN FEES.",
    video: "/tmw/videos/01_welding.mp4",
    image: "/tmw/images/01_Welder_working_on_steel.jpg",
    spec1: "20+ YEARS EXP",
    spec2: "MIG / TIG / STICK",
    spec3: "ON-SITE MOBILE RIG",
    phase: "MOBILE WELDING",
    pillars: ["MEASURE", "WELD", "INSPECT", "DELIVER"],
  },
  {
    num: "02",
    coords: "28.0395° N, 82.5180° W",
    loc: "TAMPA BAY COMMERCIAL & INDUSTRIAL",
    lines: ["STEEL.", "STRENGTH.", "PRECISION."],
    subcopy:
      "COMMERCIAL & INDUSTRIAL STRUCTURAL STEEL, CUSTOM GATES, RAILINGS, STAIRS & ARCHITECTURAL METAL.",
    video: "/tmw/videos/02_steel.mp4",
    image: "/tmw/images/02_Welder_working_on_steel_structure.jpg",
    spec1: "AWS CERTIFIED",
    spec2: "STRUCTURAL STEEL",
    spec3: "100% SATISFACTION",
    phase: "STRUCTURAL & FAB",
    pillars: ["CUT", "FIT UP", "FABRICATE", "INSTALL"],
  },
  {
    num: "03",
    coords: "27.9659° N, 82.8001° W",
    loc: "SAME-DAY EMERGENCY DISPATCH",
    lines: ["CUT.", "REPAIR.", "RESTORE."],
    subcopy:
      "PRECISE PLASMA CUTTING UP TO 1 INCH THICKNESS & SAME-DAY EMERGENCY WELDING RESPONSE ACROSS TAMPA.",
    image: "/tmw/images/03_Specialist_operating_plasma_cutt.jpg",
    spec1: 'UP TO 1" PLASMA',
    spec2: "SAME-DAY SERVICE",
    spec3: "(813) 755-7411",
    phase: "PLASMA & EMERGENCY",
    pillars: ["DISPATCH", "PLASMA CUT", "REINFORCE", "CERTIFY"],
  },
];

export default function DynamicHero({ onOpenQuote }: DynamicHeroProps) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isFading, setIsFading] = useState(false);

  const SLIDE_DURATION = 6500;

  const selectSlide = (idx: number) => {
    if (idx === current) return;
    setIsFading(true);
    setProgress(0);
    setTimeout(() => {
      setCurrent(idx);
      setIsFading(false);
    }, 180);
  };

  const nextSlide = () => {
    selectSlide((current + 1) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + 100 >= SLIDE_DURATION) {
          setIsFading(true);
          setTimeout(() => {
            setCurrent((c) => (c + 1) % SLIDES.length);
            setIsFading(false);
          }, 180);
          return 0;
        }
        return prev + 100;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const slide = SLIDES[current];
  const progressPct = Math.min((progress / SLIDE_DURATION) * 100, 100);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative border-b border-carbon overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-carbon relative">
          <div className="flex items-start justify-between gap-4 border-b border-carbon/20 pb-6">
            <div className="font-mono text-xs leading-relaxed">
              <div className="flex items-center gap-2 font-bold">
                <span className="w-2 h-2 bg-carbon inline-block live-dot" />
                <span>{slide.coords}</span>
              </div>
              <div className="text-carbon/70 mt-0.5">{slide.loc}</div>
            </div>

            <div className="font-mono text-xs uppercase text-right leading-relaxed max-w-[215px]">
              DO IT RIGHT THE FIRST TIME
              <br />
              INDUSTRIAL • COMMERCIAL
              <br />
              <span className="bg-acid px-1 font-bold">CALL (813) 755-7411</span>
            </div>
          </div>

          <div className="my-10 lg:my-12 relative">
            <div className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] border border-carbon px-2.5 py-1 mb-4 bg-concrete">
              TAMPA MOBILE WELDING LLC • 20+ YEARS EXP
            </div>
            <h1 className="font-display text-[68px] sm:text-[92px] xl:text-[108px] leading-[0.88] tracking-tight uppercase text-carbon">
              {slide.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-carbon/85 mt-6 max-w-md leading-relaxed">
              {slide.subcopy}
            </p>
          </div>

          <div className="pt-6 border-t border-carbon/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 transition-all duration-200 flex items-center gap-3 cursor-pointer shadow-[4px_4px_0px_#141414] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <span>GET A QUOTE</span>
                <span>→</span>
              </button>
              <a
                href="tel:+18137557411"
                className="font-mono text-[11px] uppercase leading-tight hover:underline"
              >
                <span className="text-carbon/60">→</span> SAME-DAY EMERGENCY
                <br />
                <span className="pl-3 font-bold">(813) 755-7411</span>
              </a>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs">
              {SLIDES.map((item, idx) => (
                <button
                  key={item.num}
                  onClick={() => selectSlide(idx)}
                  className={`px-3 py-2 border border-carbon cursor-pointer transition-colors ${current === idx ? "bg-carbon text-acid font-bold" : "bg-transparent text-carbon hover:bg-acid"}`}
                >
                  {item.num}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative min-h-[480px] lg:min-h-full bg-carbon overflow-hidden select-none">
          {slide.video ? (
            <video
              key={slide.video}
              src={slide.video}
              poster={slide.image}
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-500 ${isFading ? "opacity-40 scale-110" : "opacity-100 scale-105"}`}
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.phase}
              className={`w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-500 ${isFading ? "opacity-40 scale-110" : "opacity-100 scale-105"}`}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-carbon/40 pointer-events-none" />

          <div
            style={{ transform: `translate(${mouseOffset.x * 28}px, ${mouseOffset.y * 28}px)` }}
            className="absolute top-12 left-8 w-44 h-44 bg-acid/55 mix-blend-screen pointer-events-none transition-transform duration-150 ease-out"
          />
          <div
            style={{ transform: `translate(${mouseOffset.x * 28}px, ${mouseOffset.y * 28}px)` }}
            className="absolute top-36 left-44 w-56 h-36 bg-acid/45 mix-blend-lighten pointer-events-none transition-transform duration-200 ease-out"
          />
          <div
            style={{ transform: `translate(${mouseOffset.x * 28}px, ${mouseOffset.y * 28}px)` }}
            className="absolute bottom-28 right-12 w-36 h-48 border-2 border-acid/80 bg-acid/20 pointer-events-none transition-transform duration-150 ease-out"
          />

          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-px bg-white/15 absolute top-1/3" />
            <div className="w-full h-px bg-white/15 absolute top-2/3" />
            <div className="h-full w-px bg-white/15 absolute left-1/2" />
          </div>

          <div className="absolute top-6 right-6 bg-carbon/90 border border-white/25 px-4 py-3 font-mono text-xs text-white text-right backdrop-blur-xs">
            <div className="text-acid font-bold">{slide.spec1}</div>
            <div>{slide.spec2}</div>
            <div className="text-white/70">{slide.spec3}</div>
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-white/15">
            <div
              style={{ width: `${progressPct}%` }}
              className="h-full bg-acid transition-all duration-100"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <div className="font-mono text-[11px] text-white/80 bg-carbon/85 border border-white/20 px-3 py-2 hidden sm:block">
              ACTIVE PHASE:{" "}
              <span className="text-acid font-bold">{slide.phase}</span>
            </div>

            <div
              onClick={nextSlide}
              title="Click to cycle phase"
              className="flex items-center gap-4 bg-carbon/90 border border-white/20 px-5 py-3 cursor-pointer hover:border-acid transition-colors"
            >
              <span className="font-display text-6xl sm:text-7xl leading-none outline-num">
                {slide.num}
              </span>
              <div className="font-mono text-xs uppercase leading-snug text-white tracking-wider">
                {slide.pillars.map((p, i) => (
                  <div key={p} className={i === 0 ? "text-acid font-bold" : ""}>
                    {p}
                  </div>
                ))}
              </div>
              <span className="font-mono text-acid text-lg ml-2">↻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
