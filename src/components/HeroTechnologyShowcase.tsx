"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Bot,
  Code2,
  Database,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

interface EcosystemNode {
  id: string;
  num: string;
  title: string;
  sla: string;
  tags: string[];
  href: string;
  icon: React.ElementType;
  baseAngleDeg: number;
  particleDurationOut: string;
  particleDurationIn: string;
  particleDelay: string;
}

const ORBIT_DURATION_MS = 72000; // Calm ~72s full revolution
const ORBIT_ANGULAR_SPEED = (Math.PI * 2) / ORBIT_DURATION_MS;

const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "ai-automation",
    num: "01",
    title: "AI & Automation",
    sla: "50-400ms RAG",
    tags: ["LangGraph", "Python", "OpenAI"],
    href: "/services/ai-copilots",
    icon: Bot,
    baseAngleDeg: -135,
    particleDurationOut: "2.9s",
    particleDurationIn: "4.1s",
    particleDelay: "0s",
  },
  {
    id: "software-development",
    num: "02",
    title: "Software Development",
    sla: "99.99% Uptime",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "/services/app-web-development",
    icon: Code2,
    baseAngleDeg: -45,
    particleDurationOut: "3.3s",
    particleDurationIn: "4.4s",
    particleDelay: "-0.7s",
  },
  {
    id: "data-analytics-engineering",
    num: "03",
    title: "Data Analytics & Engineering",
    sla: "Real-Time Data & BI",
    tags: ["Snowflake", "dbt", "Power BI"],
    href: "/services/data-analytics-engineering",
    icon: Database,
    baseAngleDeg: 45,
    particleDurationOut: "2.7s",
    particleDurationIn: "3.8s",
    particleDelay: "-1.3s",
  },
  {
    id: "digital-marketing",
    num: "04",
    title: "Digital Marketing",
    sla: "AEO & Growth",
    tags: ["AEO & SEO", "Google Ads", "GA4"],
    href: "/services/digital-marketing",
    icon: TrendingUp,
    baseAngleDeg: 135,
    particleDurationOut: "3.4s",
    particleDurationIn: "4.3s",
    particleDelay: "-2.1s",
  },
];

const AMBIENT_PARTICLES = [
  { top: "10%", left: "34%", size: "w-1 h-1", color: "bg-[#00BCD4]", delay: "0s", duration: "6.5s" },
  { top: "22%", left: "62%", size: "w-1.5 h-1.5", color: "bg-[#20D7F5]", delay: "-1.2s", duration: "7.8s" },
  { top: "30%", left: "26%", size: "w-1 h-1", color: "bg-[#22D3EE]", delay: "-2.4s", duration: "8.2s" },
  { top: "44%", left: "58%", size: "w-1 h-1", color: "bg-[#00BCD4]", delay: "-3.1s", duration: "6.9s" },
  { top: "68%", left: "32%", size: "w-1.5 h-1.5", color: "bg-[#087FA5]", delay: "-1.8s", duration: "7.4s" },
  { top: "79%", left: "54%", size: "w-1 h-1", color: "bg-[#22D3EE]", delay: "-4.0s", duration: "8.5s" },
  { top: "15%", left: "50%", size: "w-1 h-1", color: "bg-[#00BCD4]", delay: "-0.6s", duration: "7.1s" },
  { top: "86%", left: "24%", size: "w-1 h-1", color: "bg-[#087FA5]", delay: "-2.9s", duration: "6.2s" },
  { top: "54%", left: "70%", size: "w-1 h-1", color: "bg-[#00BCD4]", delay: "-3.6s", duration: "7.9s" },
  { top: "36%", left: "16%", size: "w-1 h-1", color: "bg-[#20D7F5]", delay: "-4.8s", duration: "8.1s" },
];

interface StageMetrics {
  width: number;
  height: number;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  hubAttachR: number;
  cards: Record<string, { w: number; h: number }>;
}

export function HeroTechnologyShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const hubRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const outerTrackRef = useRef<SVGEllipseElement | null>(null);
  const innerTrackRef = useRef<SVGEllipseElement | null>(null);
  const cardWrapperRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pathRefs = useRef<Record<string, (SVGPathElement | null)[]>>({});
  const dotRefs = useRef<Record<string, SVGCircleElement | null>>({});

  const metricsRef = useRef<StageMetrics | null>(null);
  const angleOffsetRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const speedFactorRef = useRef<number>(1);
  const reducedMotionRef = useRef<boolean>(false);

  const setHovered = useCallback((id: string | null) => {
    setHoveredId(id);
    isPausedRef.current = id !== null;
  }, []);

  const setPathRef = useCallback(
    (nodeId: string, slot: number) => (el: SVGPathElement | null) => {
      if (!pathRefs.current[nodeId]) {
        pathRefs.current[nodeId] = [];
      }
      pathRefs.current[nodeId][slot] = el;
    },
    []
  );

  // Compute stage bounds and safe elliptical orbital radii inside the hero container
  const measureMetrics = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const width = stage.clientWidth;
    const height = stage.clientHeight;
    if (width === 0 || height === 0) {
      metricsRef.current = null;
      return;
    }

    const cx = width / 2;
    const cy = height / 2;
    const hubW = hubRef.current?.offsetWidth || 154;
    const hubAttachR = hubW * 0.43;

    let maxCardW = 200;
    let maxCardH = 120;
    const cards: Record<string, { w: number; h: number }> = {};

    for (const node of ECOSYSTEM_NODES) {
      const wrapper = cardWrapperRefs.current[node.id];
      const w = wrapper?.offsetWidth || 200;
      const h = wrapper?.offsetHeight || 118;
      cards[node.id] = { w, h };
      if (w > maxCardW) maxCardW = w;
      if (h > maxCardH) maxCardH = h;
    }

    // Clamp orbital radii so orbiting cards stay strictly inside the stage without clipping or touching left hero copy
    const rx = Math.max(90, Math.min(width * 0.37, cx - maxCardW / 2 - 6));
    const ry = Math.max(95, Math.min(height * 0.37, cy - maxCardH / 2 - 6));

    metricsRef.current = { width, height, cx, cy, rx, ry, hubAttachR, cards };

    if (svgRef.current) {
      svgRef.current.setAttribute("viewBox", `0 0 ${width} ${height}`);
    }
    if (outerTrackRef.current) {
      outerTrackRef.current.setAttribute("cx", cx.toFixed(1));
      outerTrackRef.current.setAttribute("cy", cy.toFixed(1));
      outerTrackRef.current.setAttribute("rx", rx.toFixed(1));
      outerTrackRef.current.setAttribute("ry", ry.toFixed(1));
    }
    if (innerTrackRef.current) {
      innerTrackRef.current.setAttribute("cx", cx.toFixed(1));
      innerTrackRef.current.setAttribute("cy", cy.toFixed(1));
      innerTrackRef.current.setAttribute("rx", (rx * 0.62).toFixed(1));
      innerTrackRef.current.setAttribute("ry", (ry * 0.62).toFixed(1));
    }
  }, []);

  // Apply orbital card transforms and dynamically anchored SVG curved paths directly to DOM nodes (zero React re-renders)
  const renderOrbitFrame = useCallback((angleOffset: number) => {
    const m = metricsRef.current;
    if (!m) return;

    const { cx, cy, rx, ry, hubAttachR, cards } = m;

    for (const node of ECOSYSTEM_NODES) {
      const wrapper = cardWrapperRefs.current[node.id];
      const cardDim = cards[node.id];
      if (!wrapper || !cardDim) continue;

      const theta = (node.baseAngleDeg * Math.PI) / 180 + angleOffset;
      const px = cx + rx * Math.cos(theta);
      const py = cy + ry * Math.sin(theta);

      // Keep each card horizontal/upright via GPU translate3d
      const txLeft = px - cardDim.w / 2;
      const tyTop = py - cardDim.h / 2;
      wrapper.style.transform = `translate3d(${txLeft.toFixed(2)}px, ${tyTop.toFixed(2)}px, 0)`;

      // Compute ray from card center back toward core hub center & intersect card border cleanly
      const toCenterDx = cx - px;
      const toCenterDy = cy - py;
      const halfW = cardDim.w / 2;
      const halfH = cardDim.h / 2;
      const hitScale =
        1 / Math.max(Math.abs(toCenterDx) / halfW, Math.abs(toCenterDy) / halfH, 0.0001);

      const borderX = px + toCenterDx * hitScale;
      const borderY = py + toCenterDy * hitScale;

      // Tuck path endpoint 2px behind card border so line never separates visually
      const lenToCenter = Math.hypot(toCenterDx, toCenterDy) || 1;
      const ux = toCenterDx / lenToCenter;
      const uy = toCenterDy / lenToCenter;
      const pathEndX = borderX - ux * 2;
      const pathEndY = borderY - uy * 2;

      // Start at hub outer energy ring toward planet node
      const hx = cx - ux * hubAttachR;
      const hy = cy - uy * hubAttachR;

      // Gentle tangential orbital sweep for curved solar-system energy spline
      const perpX = uy;
      const perpY = -ux;
      const bend = Math.min(26, lenToCenter * 0.14);
      const ctrlX = (hx + pathEndX) / 2 + perpX * bend;
      const ctrlY = (hy + pathEndY) / 2 + perpY * bend;

      const d = `M ${hx.toFixed(1)} ${hy.toFixed(1)} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)}, ${pathEndX.toFixed(1)} ${pathEndY.toFixed(1)}`;

      const paths = pathRefs.current[node.id];
      if (paths) {
        for (let i = 0; i < paths.length; i++) {
          const p = paths[i];
          if (p) p.setAttribute("d", d);
        }
      }

      const dot = dotRefs.current[node.id];
      if (dot) {
        dot.setAttribute("cx", borderX.toFixed(1));
        dot.setAttribute("cy", borderY.toFixed(1));
      }
    }
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    measureMetrics();
    renderOrbitFrame(angleOffsetRef.current);

    let rafId = 0;
    let readyFrame = window.requestAnimationFrame(() => {
      measureMetrics();
      renderOrbitFrame(angleOffsetRef.current);
      setIsReady(true);
    });

    const resizeObserver = new ResizeObserver(() => {
      measureMetrics();
      renderOrbitFrame(angleOffsetRef.current);
    });

    resizeObserver.observe(stage);
    Object.values(cardWrapperRefs.current).forEach((el) => {
      if (el) resizeObserver.observe(el);
    });

    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 64);
      lastTime = now;

      if (metricsRef.current && !reducedMotionRef.current) {
        // Smooth velocity easing on hover pause & resume
        const targetSpeed = isPausedRef.current ? 0 : 1;
        speedFactorRef.current += (targetSpeed - speedFactorRef.current) * Math.min(1, dt * 0.012);

        if (speedFactorRef.current > 0.001) {
          angleOffsetRef.current =
            (angleOffsetRef.current + dt * ORBIT_ANGULAR_SPEED * speedFactorRef.current) %
            (Math.PI * 2);
          renderOrbitFrame(angleOffsetRef.current);
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(readyFrame);
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", handleMotionChange);
      readyFrame = 0;
    };
  }, [measureMetrics, renderOrbitFrame]);

  return (
    <div className="hidden md:block relative w-full max-w-[780px] mx-auto select-none">
      {/* Borderless Atmospheric Cyan & Deep Blue Glow — Blends into #000000 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 sm:-inset-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 188, 212, 0.14) 0%, rgba(8, 127, 165, 0.08) 38%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      {/* Subtle Ambient Particle Field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {AMBIENT_PARTICLES.map((p, index) => (
          <span
            key={index}
            className={`absolute rounded-full ${p.size} ${p.color} opacity-40 blur-[0.5px] animate-ambient-drift`}
            style={{
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* =================================================================== */}
      {/* DESKTOP / TABLET SOLAR-SYSTEM ORBITAL ECOSYSTEM (md: & above)       */}
      {/* =================================================================== */}
      <div
        ref={stageRef}
        className={`hidden md:block relative w-full h-[500px] lg:h-[535px] xl:h-[570px] transition-opacity duration-300 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Dynamic SVG Orbital Tracks & Synchronized Cyan Connections */}
        <svg
          ref={svgRef}
          viewBox="0 0 760 560"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        >
          <defs>
            <filter id="hudCyanGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="particleBloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="splineCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.88" />
              <stop offset="55%" stopColor="#22D3EE" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#087FA5" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* Primary Elliptical Planetary Orbit Track */}
          <ellipse
            ref={outerTrackRef}
            cx={380}
            cy={280}
            rx={240}
            ry={190}
            fill="none"
            stroke={hoveredId ? "rgba(0, 188, 212, 0.22)" : "rgba(0, 188, 212, 0.13)"}
            strokeWidth="1"
            strokeDasharray="4 8"
            vectorEffect="non-scaling-stroke"
            className="transition-colors duration-300"
          />

          {/* Inner Concentric Elliptical Orbit Ring */}
          <ellipse
            ref={innerTrackRef}
            cx={380}
            cy={280}
            rx={148}
            ry={118}
            fill="none"
            stroke={hoveredId ? "rgba(0, 188, 212, 0.32)" : "rgba(8, 127, 165, 0.2)"}
            strokeWidth="1"
            strokeDasharray="5 5"
            vectorEffect="non-scaling-stroke"
            className="transition-colors duration-300"
          />

          {ECOSYSTEM_NODES.map((node) => {
            const isActive = hoveredId === node.id;
            const isDimmed = hoveredId !== null && !isActive;

            return (
              <g
                key={node.id}
                style={{
                  opacity: isDimmed ? 0.24 : 1,
                  transition: "opacity 280ms ease",
                }}
              >
                {/* Faint ambient substrate path */}
                <path
                  ref={setPathRef(node.id, 0)}
                  d="M 380 280 Q 380 280, 380 280"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.06)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Dashed cyan orbital tether */}
                <path
                  ref={setPathRef(node.id, 1)}
                  d="M 380 280 Q 380 280, 380 280"
                  fill="none"
                  stroke={isActive ? "#00BCD4" : "url(#splineCyanGrad)"}
                  strokeWidth={isActive ? 2.4 : 1.4}
                  strokeDasharray={isActive ? "7 5" : "5 7"}
                  filter={isActive ? "url(#hudCyanGlow)" : undefined}
                  vectorEffect="non-scaling-stroke"
                  className="animate-spline-dash transition-all duration-300"
                  style={{
                    animationDuration: isActive ? "0.95s" : "2.8s",
                  }}
                />

                {/* Outbound glowing light particle (Core Hub -> Planet Node) */}
                <path
                  ref={setPathRef(node.id, 2)}
                  d="M 380 280 Q 380 280, 380 280"
                  pathLength={100}
                  fill="none"
                  stroke={isActive ? "#67E8F9" : "#00BCD4"}
                  strokeWidth={isActive ? 3.6 : 2.3}
                  strokeLinecap="round"
                  strokeDasharray="6 94"
                  filter="url(#particleBloom)"
                  vectorEffect="non-scaling-stroke"
                  className={
                    isActive ? "animate-spline-surge-fast" : "animate-spline-particle-out"
                  }
                  style={{
                    animationDuration: isActive ? "1.05s" : node.particleDurationOut,
                    animationDelay: isActive ? "0s" : node.particleDelay,
                  }}
                />

                {/* Inbound telemetry light particle (Planet Node -> Core Hub) */}
                <path
                  ref={setPathRef(node.id, 3)}
                  d="M 380 280 Q 380 280, 380 280"
                  pathLength={100}
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth={isActive ? 3 : 1.75}
                  strokeLinecap="round"
                  strokeDasharray="4 96"
                  filter="url(#particleBloom)"
                  vectorEffect="non-scaling-stroke"
                  className={
                    isActive ? "animate-spline-surge-return" : "animate-spline-particle-in"
                  }
                  style={{
                    animationDuration: isActive ? "1.35s" : node.particleDurationIn,
                    animationDelay: isActive ? "-0.55s" : node.particleDelay,
                    opacity: isActive ? 0.95 : 0.65,
                  }}
                />

                {/* Active surge boost particle */}
                <path
                  ref={setPathRef(node.id, 4)}
                  d="M 380 280 Q 380 280, 380 280"
                  pathLength={100}
                  fill="none"
                  stroke="#67E8F9"
                  strokeWidth={3.8}
                  strokeLinecap="round"
                  strokeDasharray="3 97"
                  filter="url(#particleBloom)"
                  vectorEffect="non-scaling-stroke"
                  className={isActive ? "animate-spline-surge-fast" : "opacity-0"}
                  style={{
                    animationDuration: "0.85s",
                    animationDelay: "-0.42s",
                    opacity: isActive ? 1 : 0,
                  }}
                />

                {/* Terminal Node Socket Dot Attached Flush to Card Perimeter */}
                <circle
                  ref={(el) => {
                    dotRefs.current[node.id] = el;
                  }}
                  cx={380}
                  cy={280}
                  r={isActive ? 5.2 : 3.2}
                  fill={isActive ? "#00BCD4" : "#050A0E"}
                  stroke={isActive ? "#67E8F9" : "#00BCD4"}
                  strokeWidth={isActive ? 2 : 1.4}
                  filter={isActive ? "url(#hudCyanGlow)" : undefined}
                />
              </g>
            );
          })}
        </svg>

        {/* STATIONARY CENTRAL SUN ("CODEPLACED CORE HUB") */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
          <div
            ref={hubRef}
            className="relative flex items-center justify-center w-[132px] h-[132px] xl:w-[168px] xl:h-[168px]"
          >
            {/* Pulsing Deep Core Cyan & Subtle Blue Bloom */}
            <div
              className={`absolute inset-2 rounded-full animate-core-pulse transition-all duration-300 ${
                hoveredId
                  ? "bg-gradient-to-tr from-[#00BCD4]/35 via-[#20D7F5]/20 to-[#087FA5]/30 blur-xl"
                  : "bg-gradient-to-tr from-[#00BCD4]/22 via-transparent to-[#087FA5]/20 blur-lg"
              }`}
            />

            {/* Outer Dashed Concentric Ring (Clockwise Spin) */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#00BCD4]/40 animate-orbit-cw">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00BCD4] shadow-[0_0_10px_#00BCD4]" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />
            </div>

            {/* Secondary Intersecting Orbital Track (Counter-Clockwise Spin) */}
            <div className="absolute inset-3 rounded-full border border-[#087FA5]/40 border-t-[#00BCD4]/85 border-r-transparent animate-orbit-ccw">
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#67E8F9] shadow-[0_0_10px_#00BCD4]" />
            </div>

            {/* Inner Elliptical Data Orbit */}
            <div
              className="absolute inset-5 rounded-full border border-[#00BCD4]/25 animate-orbit-cw"
              style={{ animationDuration: "14s", transformOrigin: "center" }}
            />

            {/* Center Core Hub Badge */}
            <div
              className={`relative z-10 w-[88px] h-[88px] xl:w-[112px] xl:h-[112px] rounded-full bg-[#06090D]/92 backdrop-blur-xl border flex flex-col items-center justify-center text-center px-2 transition-all duration-300 ${
                hoveredId
                  ? "border-[#00BCD4]/90 scale-105 shadow-[0_0_38px_rgba(0,188,212,0.42),inset_0_0_18px_rgba(0,188,212,0.2)]"
                  : "border-[#00BCD4]/45 shadow-[0_0_26px_rgba(0,188,212,0.24),inset_0_0_14px_rgba(8,127,165,0.16)]"
              }`}
            >
              <span className="font-[family-name:var(--font-jakarta)] text-[10px] xl:text-xs font-extrabold tracking-[0.13em] text-white leading-none">
                CODEPLACED
              </span>
              <span className="mt-1.5 font-mono text-[8px] xl:text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#00BCD4] leading-none">
                CORE HUB
              </span>
            </div>
          </div>
        </div>

        {/* 4 ORBITING SERVICE CARDS (ALWAYS UPRIGHT VIA translate3d WRAPPER) */}
        {ECOSYSTEM_NODES.map((node) => {
          const Icon = node.icon;
          const isActive = hoveredId === node.id;
          const isDimmed = hoveredId !== null && !isActive;

          return (
            <div
              key={node.id}
              ref={(el) => {
                cardWrapperRefs.current[node.id] = el;
              }}
              className={`absolute top-0 left-0 will-change-transform w-[168px] lg:w-[178px] xl:w-[216px] 2xl:w-[232px] ${
                isActive ? "z-40" : "z-30"
              }`}
            >
              <Link
                href={node.href}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(node.id)}
                onBlur={() => setHovered(null)}
                aria-label={`${node.title} — ${node.sla}. Open service details.`}
                className={`group block w-full rounded-xl backdrop-blur-md bg-gradient-to-br from-white/[0.06] via-[#0B1016]/85 to-[#05080B]/92 border p-2.5 lg:p-3 xl:p-3.5 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#00BCD4] focus-visible:outline-offset-2 ${
                  isActive
                    ? "scale-[1.055] border-[#00BCD4]/85 shadow-[0_0_32px_rgba(0,188,212,0.28),inset_0_1px_0_rgba(255,255,255,0.14)]"
                    : isDimmed
                    ? "opacity-60 scale-[0.985] border-white/[0.09] shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                    : "opacity-100 border-white/[0.12] hover:border-[#00BCD4]/75 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]"
                }`}
              >
                {/* Node Header: Icon + Node Num + Arrow */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-md border transition-colors ${
                        isActive
                          ? "bg-[#00BCD4]/20 border-[#00BCD4]/70 text-[#22D3EE]"
                          : "bg-white/[0.04] border-white/[0.1] text-[#00BCD4]"
                      }`}
                    >
                      <Icon className="w-3 h-3" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      NODE {node.num}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`w-5 h-5 xl:w-6 xl:h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? "bg-[#00BCD4] border-[#00BCD4] text-[#050505]"
                        : "bg-white/[0.04] border-white/[0.12] text-slate-400 group-hover:border-[#00BCD4] group-hover:text-[#00BCD4]"
                    }`}
                  >
                    <ArrowUpRight className="w-3 h-3 xl:w-3.5 xl:h-3.5" />
                  </span>
                </div>

                {/* Service Name */}
                <h2
                  className={`font-[family-name:var(--font-jakarta)] text-[12px] xl:text-[13.5px] font-bold leading-snug tracking-tight transition-colors ${
                    isActive ? "text-[#22D3EE]" : "text-white group-hover:text-[#00BCD4]"
                  }`}
                >
                  {node.title}
                </h2>

                {/* SLA Telemetry Pill */}
                <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00BCD4]/[0.1] border border-[#00BCD4]/30">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                  <span className="font-mono text-[9px] font-semibold text-[#00BCD4]">
                    {node.sla}
                  </span>
                </div>

                {/* Stack Tags */}
                <div className="mt-2 flex flex-wrap gap-1">
                  {node.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[8.5px] xl:text-[9.5px] px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
