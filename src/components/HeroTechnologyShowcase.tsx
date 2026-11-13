"use client";

import React, { useState } from "react";
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
  positionClass: string;
  pathD: string;
  target: { x: number; y: number };
  particleDurationOut: string;
  particleDurationIn: string;
  particleDelay: string;
}

const CX = 380;
const CY = 280;

const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "ai-automation",
    num: "01",
    title: "AI & Automation",
    sla: "50-400ms RAG",
    tags: ["LangGraph", "Python", "OpenAI"],
    href: "/services/ai-copilots",
    icon: Bot,
    positionClass: "top-[3%] left-[0%]",
    pathD: `M ${CX} ${CY} C 305 235, 272 118, 212 104`,
    target: { x: 212, y: 104 },
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
    positionClass: "top-[2%] right-[0%]",
    pathD: `M ${CX} ${CY} C 455 210, 500 105, 578 88`,
    target: { x: 578, y: 88 },
    particleDurationOut: "3.3s",
    particleDurationIn: "4.4s",
    particleDelay: "-0.7s",
  },
  {
    id: "data-analytics-bi",
    num: "03",
    title: "Data Analytics & Engineering",
    sla: "Real-Time Data & BI",
    tags: ["Snowflake", "dbt", "Power BI"],
    href: "/services/data-platforms",
    icon: Database,
    positionClass: "top-[37%] right-[0%]",
    pathD: `M ${CX} ${CY} C 455 282, 515 262, 576 266`,
    target: { x: 576, y: 266 },
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
    positionClass: "top-[57%] left-[0%]",
    pathD: `M ${CX} ${CY} C 302 325, 272 382, 214 388`,
    target: { x: 214, y: 388 },
    particleDurationOut: "3.4s",
    particleDurationIn: "4.3s",
    particleDelay: "-2.4s",
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

export function HeroTechnologyShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="hidden md:block relative w-full max-w-[780px] mx-auto select-none">
      {/* Borderless Atmospheric Cyan & Deep Blue Glow — Blends into #000000 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 sm:-inset-10"
        style={{
          background:
            "radial-gradient(circle at 48% 50%, rgba(0, 188, 212, 0.14) 0%, rgba(8, 127, 165, 0.08) 38%, rgba(0, 0, 0, 0) 70%)",
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
      {/* DESKTOP / TABLET ORGANIC ORBITAL NETWORK (md: & above)              */}
      {/* =================================================================== */}
      <div className="hidden md:block relative w-full h-[520px] lg:h-[545px] xl:h-[570px]">
        {/* Animated Dashed-Neon SVG Neural Splines */}
        <svg
          viewBox="0 0 800 560"
          preserveAspectRatio="none"
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

          {/* Subtle Outer Orbital Radar Hairlines Around Center Core */}
          <circle
            cx={CX}
            cy={CY}
            r="142"
            fill="none"
            stroke="rgba(0, 188, 212, 0.12)"
            strokeWidth="1"
            strokeDasharray="3 7"
            vectorEffect="non-scaling-stroke"
          />
          <circle
            cx={CX}
            cy={CY}
            r="102"
            fill="none"
            stroke={hoveredId ? "rgba(0, 188, 212, 0.4)" : "rgba(8, 127, 165, 0.22)"}
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
                  opacity: isDimmed ? 0.28 : 1,
                  transition: "opacity 280ms ease",
                }}
              >
                {/* Faint ambient substrate path */}
                <path
                  d={node.pathD}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.06)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Dashed-neon spline with continuous stroke-dashoffset flow */}
                <path
                  d={node.pathD}
                  fill="none"
                  stroke={isActive ? "#00BCD4" : "url(#splineCyanGrad)"}
                  strokeWidth={isActive ? 2.4 : 1.35}
                  strokeDasharray={isActive ? "7 5" : "5 7"}
                  filter={isActive ? "url(#hudCyanGlow)" : undefined}
                  vectorEffect="non-scaling-stroke"
                  className="animate-spline-dash transition-all duration-300"
                  style={{
                    animationDuration: isActive ? "0.95s" : "2.8s",
                  }}
                />

                {/* Outbound glowing light particle (Core -> Service Node) */}
                <path
                  d={node.pathD}
                  pathLength={100}
                  fill="none"
                  stroke={isActive ? "#67E8F9" : "#00BCD4"}
                  strokeWidth={isActive ? 3.6 : 2.2}
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

                {/* Inbound telemetry light particle (Service Node -> Core) */}
                <path
                  d={node.pathD}
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

                {/* Additional high-energy digital particle surge when active */}
                {isActive && (
                  <path
                    d={node.pathD}
                    pathLength={100}
                    fill="none"
                    stroke="#67E8F9"
                    strokeWidth={3.8}
                    strokeLinecap="round"
                    strokeDasharray="3 97"
                    filter="url(#particleBloom)"
                    vectorEffect="non-scaling-stroke"
                    className="animate-spline-surge-fast"
                    style={{
                      animationDuration: "0.85s",
                      animationDelay: "-0.42s",
                    }}
                  />
                )}

                {/* Terminal Node Socket Dot */}
                <circle
                  cx={node.target.x}
                  cy={node.target.y}
                  r={isActive ? 5.5 : 3.2}
                  fill={isActive ? "#00BCD4" : "#050A0E"}
                  stroke={isActive ? "#67E8F9" : "#00BCD4"}
                  strokeWidth={isActive ? 2 : 1.4}
                  filter={isActive ? "url(#hudCyanGlow)" : undefined}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* CENTER REACTOR ("CODEPLACED CORE HUB") */}
        <div className="pointer-events-none absolute left-[47.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-[154px] h-[154px] xl:w-[178px] xl:h-[178px]">
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
            <div className="absolute inset-3.5 rounded-full border border-[#087FA5]/40 border-t-[#00BCD4]/85 border-r-transparent animate-orbit-ccw">
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#67E8F9] shadow-[0_0_10px_#00BCD4]" />
            </div>

            {/* Inner Elliptical Data Orbit */}
            <div
              className="absolute inset-5 rounded-full border border-[#00BCD4]/25 animate-orbit-cw"
              style={{ animationDuration: "14s", transformOrigin: "center" }}
            />

            {/* Center Reactor Core Typography */}
            <div
              className={`relative z-10 w-[100px] h-[100px] xl:w-[116px] xl:h-[116px] rounded-full bg-[#06090D]/90 backdrop-blur-xl border flex flex-col items-center justify-center text-center px-2 transition-all duration-300 ${
                hoveredId
                  ? "border-[#00BCD4]/90 scale-105 shadow-[0_0_38px_rgba(0,188,212,0.42),inset_0_0_18px_rgba(0,188,212,0.2)]"
                  : "border-[#00BCD4]/45 shadow-[0_0_26px_rgba(0,188,212,0.24),inset_0_0_14px_rgba(8,127,165,0.16)]"
              }`}
            >
              <span className="font-[family-name:var(--font-jakarta)] text-[11px] xl:text-xs font-extrabold tracking-[0.14em] text-white leading-none">
                CODEPLACED
              </span>
              <span className="mt-1.5 font-mono text-[8.5px] xl:text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#00BCD4] leading-none">
                CORE HUB
              </span>
            </div>
          </div>
        </div>

        {/* 5 FULL-CARD CLICKABLE FLOATING HUD SERVICE NODES */}
        {ECOSYSTEM_NODES.map((node) => {
          const Icon = node.icon;
          const isActive = hoveredId === node.id;
          const isDimmed = hoveredId !== null && !isActive;

          return (
            <Link
              key={node.id}
              href={node.href}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(node.id)}
              onBlur={() => setHoveredId(null)}
              aria-label={`${node.title} — ${node.sla}. Open service details.`}
              className={`group block absolute ${node.positionClass} w-[184px] lg:w-[196px] xl:w-[234px] 2xl:w-[246px] rounded-xl backdrop-blur-md bg-gradient-to-br from-white/[0.06] via-[#0B1016]/82 to-[#05080B]/92 border p-3 xl:p-3.5 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#00BCD4] focus-visible:outline-offset-2 ${
                isActive
                  ? "z-40 scale-[1.055] border-[#00BCD4]/85 shadow-[0_0_32px_rgba(0,188,212,0.28),inset_0_1px_0_rgba(255,255,255,0.14)]"
                  : isDimmed
                  ? "z-30 opacity-60 scale-[0.985] border-white/[0.09] shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                  : "z-30 opacity-100 border-white/[0.12] hover:border-[#00BCD4]/75 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]"
              }`}
            >
              {/* Node Header: Icon + Node Num + Arrow */}
              <div className="flex items-center justify-between gap-2 mb-2">
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
                  <span className="font-mono text-[9.5px] font-semibold uppercase tracking-wider text-slate-400">
                    NODE {node.num}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? "bg-[#00BCD4] border-[#00BCD4] text-[#050505]"
                      : "bg-white/[0.04] border-white/[0.12] text-slate-400 group-hover:border-[#00BCD4] group-hover:text-[#00BCD4]"
                  }`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Service Name */}
              <h2
                className={`font-[family-name:var(--font-jakarta)] text-[12.5px] xl:text-[13.5px] font-bold leading-snug tracking-tight transition-colors ${
                  isActive ? "text-[#22D3EE]" : "text-white group-hover:text-[#00BCD4]"
                }`}
              >
                {node.title}
              </h2>

              {/* SLA Telemetry Pill */}
              <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00BCD4]/[0.1] border border-[#00BCD4]/30">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                <span className="font-mono text-[9.5px] font-semibold text-[#00BCD4]">
                  {node.sla}
                </span>
              </div>

              {/* Stack Tags */}
              <div className="mt-2.5 flex flex-wrap gap-1">
                {node.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] xl:text-[9.5px] px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
