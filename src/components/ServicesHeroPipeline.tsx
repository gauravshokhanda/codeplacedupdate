"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Bot,
  Code2,
  Database,
  TrendingUp,
} from "lucide-react";

interface ServicePillar {
  id: string;
  num: string;
  title: string;
  pills: string[];
  icon: React.ElementType;
  positionClass: string;
  floatDelay: string;
}

interface StreamConfig {
  id: string;
  from: string;
  to: string;
  pulseDuration: string;
  pulseDelay: string;
}

interface ComputedStream extends StreamConfig {
  pathD: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
}

const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "pillar-04",
    num: "04",
    title: "DIGITAL MARKETING & GROWTH",
    pills: ["AEO & SEO", "Google & Meta Ads", "GA4 Tracking & Branding"],
    icon: TrendingUp,
    positionClass: "top-[3%] right-[0%]",
    floatDelay: "-1.2s",
  },
  {
    id: "pillar-03",
    num: "03",
    title: "DATA ANALYTICS & ENGINEERING",
    pills: ["ETL/ELT & Lakehouses", "Power BI & Looker", "Predictive Analytics"],
    icon: Database,
    positionClass: "top-[28%] left-[0%]",
    floatDelay: "-2.4s",
  },
  {
    id: "pillar-01",
    num: "01",
    title: "AI & AUTOMATION",
    pills: ["AI Copilots & RAG", "Agent Swarms", "Workflow Automation", "Document AI"],
    icon: Bot,
    positionClass: "top-[56%] right-[0%]",
    floatDelay: "0s",
  },
  {
    id: "pillar-02",
    num: "02",
    title: "SOFTWARE DEVELOPMENT",
    pills: ["SaaS Development", "Web & Mobile Apps", "APIs & Microservices"],
    icon: Code2,
    positionClass: "bottom-[0%] left-[0%]",
    floatDelay: "-3.6s",
  },
];

// Connected bottom-up network across all 4 services:
// Software Development (02) -> AI & Automation (01) -> Data Analytics & Engineering (03) -> Digital Marketing (04)
const STREAM_CONFIGS: StreamConfig[] = [
  {
    id: "stream-02-01",
    from: "pillar-02",
    to: "pillar-01",
    pulseDuration: "2.2s",
    pulseDelay: "0s",
  },
  {
    id: "stream-01-03",
    from: "pillar-01",
    to: "pillar-03",
    pulseDuration: "2.3s",
    pulseDelay: "-0.75s",
  },
  {
    id: "stream-03-04",
    from: "pillar-03",
    to: "pillar-04",
    pulseDuration: "2.1s",
    pulseDelay: "-1.5s",
  },
];

// Bottom-up pipeline order for responsive mobile stacked flow (02 -> 01 -> 03 -> 04)
const MOBILE_FLOW_PILLARS: ServicePillar[] = [
  SERVICE_PILLARS[3], // 02 Software Development
  SERVICE_PILLARS[2], // 01 AI & Automation
  SERVICE_PILLARS[1], // 03 Data Analytics & Engineering
  SERVICE_PILLARS[0], // 04 Digital Marketing & Growth
];

interface CardBox {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export function ServicesHeroPipeline() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [svgData, setSvgData] = useState<{
    width: number;
    height: number;
    streams: ComputedStream[];
  } | null>(null);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeId = hoveredId ?? selectedId;

  const handleToggleSelect = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const recomputeStreams = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const stageWidth = stage.clientWidth;
    const stageHeight = stage.clientHeight;
    if (stageWidth === 0 || stageHeight === 0) return;

    const getBox = (id: string): CardBox | null => {
      const el = cardRefs.current[id];
      if (!el || el.offsetWidth === 0 || el.offsetHeight === 0) return null;
      return {
        left: el.offsetLeft,
        top: el.offsetTop,
        right: el.offsetLeft + el.offsetWidth,
        bottom: el.offsetTop + el.offsetHeight,
        width: el.offsetWidth,
        height: el.offsetHeight,
      };
    };

    const c01 = getBox("pillar-01");
    const c02 = getBox("pillar-02");
    const c03 = getBox("pillar-03");
    const c04 = getBox("pillar-04");
    if (!c01 || !c02 || !c03 || !c04) return;

    const boxes: Record<string, CardBox> = {
      "pillar-01": c01,
      "pillar-02": c02,
      "pillar-03": c03,
      "pillar-04": c04,
    };

    const computed: ComputedStream[] = STREAM_CONFIGS.map((cfg) => {
      const fromBox = boxes[cfg.from];
      const toBox = boxes[cfg.to];
      const fromIsLeft = fromBox.left < toBox.left;

      // Anchor smoothly from the open top corridor of the lower card to the facing side edge of the upper card.
      const startX = fromIsLeft
        ? Math.min(fromBox.left + fromBox.width * 0.56, toBox.left - 24)
        : Math.max(fromBox.left + fromBox.width * 0.44, toBox.right + 24);
      const startY = fromBox.top + 2;

      const endX = fromIsLeft ? toBox.left + 2 : toBox.right - 2;
      const endY = toBox.top + toBox.height * 0.55;

      const dx = Math.max(40, Math.abs(endX - startX));
      const dy = Math.max(40, Math.abs(startY - endY));

      const cp1X = startX;
      const cp1Y = startY - dy * 0.62;
      const cp2X = fromIsLeft ? endX - dx * 0.55 : endX + dx * 0.55;
      const cp2Y = endY;

      return {
        ...cfg,
        pathD: `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${cp1X.toFixed(1)} ${cp1Y.toFixed(1)}, ${cp2X.toFixed(1)} ${cp2Y.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`,
        start: { x: startX, y: fromBox.top },
        end: { x: fromIsLeft ? toBox.left : toBox.right, y: endY },
      };
    });

    setSvgData({ width: stageWidth, height: stageHeight, streams: computed });
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const rafId = window.requestAnimationFrame(recomputeStreams);
    const observer = new ResizeObserver(() => {
      recomputeStreams();
    });

    observer.observe(stage);
    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [recomputeStreams]);

  return (
    <div className="relative w-full max-w-[700px] mx-auto select-none">
      {/* Seamless Obsidian Radial Cyan Aura (Zero Rectangular Box Frame) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8"
        style={{
          background:
            "radial-gradient(circle at 52% 48%, rgba(6, 182, 212, 0.16) 0%, rgba(6, 182, 212, 0.05) 42%, rgba(7, 11, 14, 0) 74%)",
        }}
      />

      {/* =================================================================== */}
      {/* DESKTOP / TABLET FLOATING 3D STEPPED ARCHITECTURAL CASCADE (md+)    */}
      {/* =================================================================== */}
      <div
        ref={stageRef}
        className="hidden md:block relative w-full h-[610px] lg:h-[630px]"
      >
        {/* Architectural Isometric Perspective Guides + Dynamically Anchored Streams */}
        {svgData && (
          <svg
            viewBox={`0 0 ${svgData.width} ${svgData.height}`}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none z-25 overflow-visible"
          >
            <defs>
              <filter id="servicesCyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="servicesWhitePulse" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Subtle Isometric Depth Reference Grid Lines (Proportional to Container) */}
            <path
              d={`M ${(svgData.width * 0.06).toFixed(1)} ${(svgData.height * 0.85).toFixed(1)} L ${(svgData.width * 0.94).toFixed(1)} ${(svgData.height * 0.45).toFixed(1)} M ${(svgData.width * 0.06).toFixed(1)} ${(svgData.height * 0.58).toFixed(1)} L ${(svgData.width * 0.94).toFixed(1)} ${(svgData.height * 0.18).toFixed(1)} M ${(svgData.width * 0.21).toFixed(1)} ${(svgData.height * 0.96).toFixed(1)} L ${(svgData.width * 0.79).toFixed(1)} ${(svgData.height * 0.06).toFixed(1)}`}
              fill="none"
              stroke="rgba(255, 255, 255, 0.045)"
              strokeWidth="1"
              strokeDasharray="4 8"
              vectorEffect="non-scaling-stroke"
            />

            {svgData.streams.map((stream) => {
              const isConnected =
                activeId === stream.from || activeId === stream.to;
              const isDimmed = activeId !== null && !isConnected;

              return (
                <g
                  key={stream.id}
                  style={{
                    opacity: isDimmed ? 0.2 : 1,
                    transition: "opacity 280ms ease",
                  }}
                >
                  {/* Structural base hairline */}
                  <path
                    d={stream.pathD}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1.25"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Animated dashed cyan stream */}
                  <path
                    d={stream.pathD}
                    fill="none"
                    stroke={isConnected ? "#06B6D4" : "rgba(6, 182, 212, 0.6)"}
                    strokeWidth={isConnected ? 2.4 : 1.6}
                    strokeDasharray={isConnected ? "7 5" : "5 7"}
                    filter={isConnected ? "url(#servicesCyanGlow)" : undefined}
                    vectorEffect="non-scaling-stroke"
                    className="animate-spline-dash transition-all duration-300"
                    style={{
                      animationDuration: isConnected ? "0.9s" : "2.4s",
                    }}
                  />

                  {/* Traveling Electric Cyan Light Pulse */}
                  <path
                    d={stream.pathD}
                    pathLength={100}
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth={isConnected ? 3.8 : 2.6}
                    strokeLinecap="round"
                    strokeDasharray="9 91"
                    filter="url(#servicesCyanGlow)"
                    vectorEffect="non-scaling-stroke"
                    className={
                      isConnected
                        ? "animate-spline-surge-fast"
                        : "animate-spline-particle-out"
                    }
                    style={{
                      animationDuration: isConnected ? "0.95s" : stream.pulseDuration,
                      animationDelay: stream.pulseDelay,
                    }}
                  />

                  {/* Crisp Pure White Lead Spark Traveling with Cyan Stream */}
                  <path
                    d={stream.pathD}
                    pathLength={100}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth={isConnected ? 3.2 : 2.1}
                    strokeLinecap="round"
                    strokeDasharray="3.5 96.5"
                    filter="url(#servicesWhitePulse)"
                    vectorEffect="non-scaling-stroke"
                    className={
                      isConnected
                        ? "animate-spline-surge-fast"
                        : "animate-spline-particle-out"
                    }
                    style={{
                      animationDuration: isConnected ? "0.95s" : stream.pulseDuration,
                      animationDelay: isConnected
                        ? "-0.42s"
                        : `${parseFloat(stream.pulseDelay) - 0.18}s`,
                    }}
                  />

                  {/* Source & Destination Terminal Ports Anchored Exactly on Card Edges */}
                  <circle
                    cx={stream.start.x}
                    cy={stream.start.y}
                    r={isConnected ? 4.5 : 3.2}
                    fill={isConnected ? "#FFFFFF" : "#070B0E"}
                    stroke="#06B6D4"
                    strokeWidth={isConnected ? 2 : 1.5}
                    filter={isConnected ? "url(#servicesCyanGlow)" : undefined}
                  />
                  <circle
                    cx={stream.end.x}
                    cy={stream.end.y}
                    r={isConnected ? 4.5 : 3.2}
                    fill={isConnected ? "#06B6D4" : "#070B0E"}
                    stroke="#FFFFFF"
                    strokeWidth={isConnected ? 2 : 1.35}
                    filter={isConnected ? "url(#servicesWhitePulse)" : undefined}
                  />
                </g>
              );
            })}
          </svg>
        )}

        {/* 4 FLOATING STEPPED PILLAR CARDS */}
        {SERVICE_PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          const isActive = activeId === pillar.id;
          const isSelected = selectedId === pillar.id;
          const isDimmed = activeId !== null && !isActive;

          return (
            <div
              key={pillar.id}
              ref={(el) => {
                cardRefs.current[pillar.id] = el;
              }}
              className={`absolute ${pillar.positionClass} w-[51.5%] max-w-[338px] transition-opacity duration-300 ${
                isActive ? "z-40" : isDimmed ? "z-20 opacity-45" : "z-30 opacity-100"
              }`}
            >
              {/* Subtle Staggered Floating Levitation Wrapper */}
              <div
                className="animate-pillar-levitate"
                style={{
                  animationDelay: pillar.floatDelay,
                }}
              >
                <button
                  type="button"
                  onClick={() => handleToggleSelect(pillar.id)}
                  onMouseEnter={() => setHoveredId(pillar.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(pillar.id)}
                  onBlur={() => setHoveredId(null)}
                  aria-pressed={isSelected}
                  aria-label={`Pillar ${pillar.num}: ${pillar.title}`}
                  style={{
                    transform: isActive
                      ? "perspective(1100px) rotateX(1deg) rotateY(0deg) scale(1.03)"
                      : "perspective(1100px) rotateX(4deg) rotateY(-2deg) scale(1)",
                    boxShadow: isActive
                      ? "0 0 32px rgba(6, 182, 212, 0.25), 0 18px 40px rgba(0, 0, 0, 0.65)"
                      : "0 14px 32px rgba(0, 0, 0, 0.55)",
                  }}
                  className={`group w-full text-left rounded-xl p-3.5 lg:p-4 backdrop-blur-md transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#06B6D4] focus-visible:outline-offset-2 ${
                    isActive
                      ? "bg-[#06B6D4]/[0.08] border border-[#06B6D4]"
                      : "bg-white/[0.03] border border-white/15 hover:border-[#06B6D4]"
                  }`}
                >
                  {/* Top Row: Pillar Number Badge & Cyber Icon */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-md border transition-colors ${
                          isActive
                            ? "bg-[#06B6D4]/20 border-[#06B6D4] text-[#FFFFFF]"
                            : "bg-white/[0.03] border-white/15 text-[#06B6D4]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span
                        className={`font-mono text-[10px] font-bold tracking-[0.18em] uppercase transition-colors ${
                          isActive ? "text-[#06B6D4]" : "text-white/65"
                        }`}
                      >
                        PILLAR {pillar.num}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#06B6D4] shadow-[0_0_10px_#06B6D4] scale-125"
                          : "bg-white/30"
                      }`}
                    />
                  </div>

                  {/* Pillar Title */}
                  <h2
                    className={`font-[family-name:var(--font-jakarta)] text-xs lg:text-[13px] xl:text-sm font-extrabold tracking-tight leading-snug transition-colors ${
                      isActive ? "text-[#FFFFFF]" : "text-white/90"
                    }`}
                  >
                    {pillar.title}
                  </h2>

                  {/* Sub-capability Pills */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {pillar.pills.map((pill) => (
                      <span
                        key={pill}
                        className={`font-mono text-[9.5px] xl:text-[10px] px-2 py-0.5 rounded-full border transition-all duration-200 ${
                          isActive
                            ? "bg-[#06B6D4]/15 border-[#06B6D4]/75 text-[#FFFFFF]"
                            : "bg-white/[0.03] border-white/15 text-white/65"
                        }`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* =================================================================== */}
      {/* MOBILE / TABLET STEPPED VERTICAL PIPELINE (< md)                    */}
      {/* Flow: 04 -> 02 -> 01 -> 03 -> 05                                    */}
      {/* =================================================================== */}
      <div className="md:hidden relative space-y-3 py-2">
        {/* Continuous Vertical Cyan & White Spine Behind Cards */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 500"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-5 top-4 bottom-4 w-6 h-[calc(100%-32px)] z-0"
        >
          <path
            d="M 12 0 L 12 500"
            fill="none"
            stroke="rgba(255, 255, 255, 0.14)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M 12 0 L 12 500"
            pathLength={100}
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="12 88"
            className="animate-spline-particle-out"
          />
          <path
            d="M 12 0 L 12 500"
            pathLength={100}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 96"
            className="animate-spline-particle-out"
            style={{ animationDelay: "-0.2s" }}
          />
        </svg>

        {MOBILE_FLOW_PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          const isActive = activeId === pillar.id;
          const isDimmed = activeId !== null && !isActive;

          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => handleToggleSelect(pillar.id)}
              aria-pressed={selectedId === pillar.id}
              aria-label={`Pillar ${pillar.num}: ${pillar.title}`}
              className={`relative z-10 w-full text-left rounded-xl p-3.5 backdrop-blur-md transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#06B6D4] focus-visible:outline-offset-2 ${
                isActive
                  ? "bg-[#06B6D4]/[0.08] border border-[#06B6D4] shadow-[0_0_24px_rgba(6,182,212,0.25)]"
                  : isDimmed
                  ? "bg-white/[0.03] border border-white/10 opacity-55"
                  : "bg-white/[0.03] border border-white/15"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-md border ${
                      isActive
                        ? "bg-[#06B6D4]/20 border-[#06B6D4] text-[#FFFFFF]"
                        : "bg-[#070B0E] border-white/15 text-[#06B6D4]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span
                    className={`font-mono text-[10px] font-bold tracking-[0.16em] uppercase ${
                      isActive ? "text-[#06B6D4]" : "text-white/65"
                    }`}
                  >
                    PILLAR {pillar.num}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" : "bg-white/30"
                  }`}
                />
              </div>

              <h2
                className={`font-[family-name:var(--font-jakarta)] text-xs sm:text-sm font-extrabold tracking-tight ${
                  isActive ? "text-[#FFFFFF]" : "text-white/90"
                }`}
              >
                {pillar.title}
              </h2>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {pillar.pills.map((pill) => (
                  <span
                    key={pill}
                    className={`font-mono text-[9.5px] px-2 py-0.5 rounded-full border ${
                      isActive
                        ? "bg-[#06B6D4]/15 border-[#06B6D4]/75 text-[#FFFFFF]"
                        : "bg-white/[0.03] border-white/15 text-white/65"
                    }`}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
