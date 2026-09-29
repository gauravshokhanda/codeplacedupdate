"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS_DATA, TRUSTED_BRANDS } from "@/lib/data";

function CounterItem({
  value,
  suffix,
  label,
  subtext,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  subtext: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const increment = Math.ceil(value / (duration / 25));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div className="relative group p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 shadow-lg shadow-black/20 transition-all duration-300 text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-center justify-center">
        <span>{count}</span>
        <span className="text-[#38BDF8] ml-0.5">{suffix}</span>
      </div>
      <div className="text-sm sm:text-base font-bold text-slate-200 mt-2">
        {label}
      </div>
      <div className="text-xs text-slate-400 mt-0.5">{subtext}</div>

      {/* Subtle glow border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0B4F6C]/0 to-[#0284C7]/0 group-hover:from-[#0B4F6C]/25 group-hover:to-[#0284C7]/25 rounded-2xl blur-xs -z-10 transition-all" />
    </div>
  );
}

export function MetricsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="metrics"
      ref={containerRef}
      className="min-h-[400px] py-16 lg:py-20 relative flex flex-col justify-center bg-gradient-to-b from-[#082F49] via-[#083344] to-[#041d27] text-white overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[250px] bg-[#0284C7]/15 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="site-container w-full relative z-10 space-y-12">
        {/* Top: 5 Glowing Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {METRICS_DATA.map((metric) => (
            <CounterItem
              key={metric.id}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              subtext={metric.subtext}
              inView={inView}
            />
          ))}
        </div>

        {/* Below: Client Logos */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
          {TRUSTED_BRANDS.slice(0, 6).map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 hover:opacity-100 transition-opacity"
            >
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center font-bold text-[10px] text-[#38BDF8]">
                {brand.name.slice(0, 2)}
              </div>
              <span className="text-sm font-bold text-slate-300 tracking-wide">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
