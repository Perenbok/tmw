"use client";

import { useEffect, useRef, useState } from "react";

interface DynamicHeroProps {
  onOpenQuote: (service?: string) => void;
}

interface SlideItem {
  num: string;
  lines: string[];
  subcopy: string;
  video?: string;
  image: string;
  spec1: string;
  spec2: string;
  spec3: string;
  phase: string;
  pillars: string[];
}

const SLIDES: SlideItem[] = [
  {
    num: "01",
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
    lines: ["CUT.", "REPAIR.", "RESTORE."],
    subcopy:
      "PRECISE PLASMA CUTTING UP TO 1 INCH THICKNESS & SAME-DAY EMERGENCY WELDING RESPONSE ACROSS TAMPA.",
    video: "/tmw/videos/03_cut.mp4",
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
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const SLIDE_DURATION = 4000;

  const selectSlide = (idx: number) => {
    if (idx === current) return;
    setIsFading(true);
    setProgress(0);
    setTimeout(() => {
      setCurrent(idx);
      setIsFading(false);
    }, 160);
  };

  const nextSlide = () => {
    selectSlide((current + 1) % SLIDES.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => {
      const next = !prev;
      const el = videoRef.current;
      if (el) {
        if (next) {
          el.pause();
        } else {
          const p = el.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        }
      }
      return next;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + 100 >= SLIDE_DURATION) {
          setIsFading(true);
          setTimeout(() => {
            setCurrent((c) => (c + 1) % SLIDES.length);
            setIsFading(false);
          }, 160);
          return 0;
        }
        return prev + 100;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const el = videoRef.current;
    const activeVideo = SLIDES[current]?.video;
    if (!el || !activeVideo) return;

    el.muted = true;
    if (el.getAttribute("src") !== activeVideo) {
      el.setAttribute("src", activeVideo);
    }
    if (!isPaused) {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [current, isPaused]);

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
      className="relative w-full border-b border-carbon overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[100dvh] lg:min-h-[calc(100dvh-5rem)]">
        <div className="lg:col-span-6 p-5 sm:p-8 xl:p-10 flex flex-col justify-between gap-5 border-b lg:border-b-0 lg:border-r border-carbon relative min-w-0">
          <div className="my-auto py-4 relative min-w-0">
            <div className="inline-block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] border border-carbon px-2.5 py-1 mb-3 bg-concrete">
              TAMPA MOBILE WELDING LLC • 20+ YEARS EXP
            </div>
            <h1 className="font-display text-[52px] sm:text-[72px] lg:text-[84px] xl:text-[98px] leading-[0.88] tracking-tight uppercase text-carbon break-words">
              {slide.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="font-mono text-xs sm:text-[13px] uppercase tracking-wider text-carbon/85 mt-4 max-w-lg leading-relaxed">
              {slide.subcopy}
            </p>
          </div>

          <div className="pt-4 border-t border-carbon/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="bg-acid hover:bg-carbon hover:text-acid text-carbon border border-carbon font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3.5 transition-all duration-200 flex items-center gap-3 cursor-pointer shadow-[4px_4px_0px_#141414] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
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
                  className={`px-3 py-2 border border-carbon cursor-pointer transition-colors ${
                    current === idx
                      ? "bg-carbon text-acid font-bold"
                      : "bg-transparent text-carbon hover:bg-acid"
                  }`}
                >
                  {item.num}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative w-full h-[55dvh] min-h-[360px] lg:h-auto lg:min-h-[calc(100dvh-5rem)] bg-carbon overflow-hidden select-none min-w-0">
          {slide.video ? (
            <video
              ref={videoRef}
              poster={slide.image}
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90 transition-opacity duration-300 will-change-transform ${
                isFading ? "opacity-50" : "opacity-100"
              }`}
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.phase}
              className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90 transition-opacity duration-300 ${
                isFading ? "opacity-50" : "opacity-100"
              }`}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-carbon/40 pointer-events-none" />

          <div
            style={{
              transform: `translate3d(${mouseOffset.x * 24}px, ${mouseOffset.y * 24}px, 0)`,
            }}
            className="hidden sm:block absolute top-12 left-8 w-36 lg:w-44 h-36 lg:h-44 bg-acid/55 mix-blend-screen pointer-events-none transition-transform duration-150 ease-out"
          />
          <div
            style={{
              transform: `translate3d(${mouseOffset.x * -30}px, ${mouseOffset.y * 18}px, 0)`,
            }}
            className="hidden sm:block absolute top-32 left-36 lg:left-44 w-44 lg:w-56 h-28 lg:h-36 bg-acid/45 mix-blend-lighten pointer-events-none transition-transform duration-200 ease-out"
          />
          <div
            style={{
              transform: `translate3d(${mouseOffset.x * 18}px, ${mouseOffset.y * -20}px, 0)`,
            }}
            className="hidden sm:block absolute bottom-24 right-8 lg:right-12 w-28 lg:w-36 h-40 lg:h-48 border-2 border-acid/80 bg-acid/20 pointer-events-none transition-transform duration-150 ease-out"
          />

          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-px bg-white/15 absolute top-1/3" />
            <div className="w-full h-px bg-white/15 absolute top-2/3" />
            <div className="h-full w-px bg-white/15 absolute left-1/2" />
          </div>

          {slide.video && (
            <button
              type="button"
              onClick={togglePause}
              aria-label={isPaused ? "Play video" : "Pause video"}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-carbon/50 hover:bg-acid/50 text-white hover:text-carbon border border-white/40 hover:border-carbon px-6 py-4 font-mono text-base sm:text-lg font-bold uppercase tracking-widest flex items-center gap-3 cursor-pointer backdrop-blur-xs transition-all duration-200"
            >
              <span>{isPaused ? "▶ PLAY" : "❚❚ PAUSE"}</span>
            </button>
          )}

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-carbon/90 border border-white/25 px-3.5 py-2.5 sm:px-4 sm:py-3 font-mono text-[11px] sm:text-xs text-white text-right backdrop-blur-xs z-10">
            <div className="text-acid font-bold">{slide.spec1}</div>
            <div>{slide.spec2}</div>
            <div className="text-white/70">{slide.spec3}</div>
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-white/15 z-10">
            <div
              style={{ width: `${progressPct}%` }}
              className="h-full bg-acid transition-all duration-100"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-3 z-10">
            <div className="font-mono text-[11px] text-white/80 bg-carbon/85 border border-white/20 px-3 py-2 hidden sm:block">
              ACTIVE PHASE:{" "}
              <span className="text-acid font-bold">{slide.phase}</span>
              {isPaused && (
                <span className="ml-2 text-acid/90">• PAUSED</span>
              )}
            </div>

            <div
              onClick={nextSlide}
              title="Click to cycle phase"
              className="ml-auto flex items-center gap-3 sm:gap-4 bg-carbon/90 border border-white/20 px-4 py-2.5 sm:px-5 sm:py-3 cursor-pointer hover:border-acid transition-colors"
            >
              <span className="font-display text-5xl sm:text-7xl leading-none outline-num">
                {slide.num}
              </span>
              <div className="font-mono text-[10px] sm:text-xs uppercase leading-snug text-white tracking-wider">
                {slide.pillars.map((p, i) => (
                  <div key={p} className={i === 0 ? "text-acid font-bold" : ""}>
                    {p}
                  </div>
                ))}
              </div>
              <span className="font-mono text-acid text-lg ml-1 sm:ml-2">↻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
