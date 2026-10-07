"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Globe,
  Layers,
  Database,
  LineChart,
  Target,
  Zap,
} from "lucide-react";

interface ServiceSlide {
  id: string;
  num: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  badge: string;
  bullets: string[];
  href: string;
  metrics: { label: string; value: string };
  previewType: "app-dev" | "data-analytics" | "digital-growth";
}

const SERVICES_SLIDES: ServiceSlide[] = [
  {
    id: "app-web-dev",
    num: "01",
    title: "App & Web Development",
    tagline: "Build scalable digital products from MVP to enterprise platforms with sub-second API speeds.",
    icon: Code2,
    badge: "Full-Cycle Engineering",
    bullets: [
      "Native iOS & Android Mobile Apps",
      "Next.js SaaS Platforms & Web Applications",
      "Headless Shopify & Custom E-Commerce",
      "WordPress & Modern Headless CMS",
    ],
    href: "/services",
    metrics: { label: "App Store SLA", value: "99.99%" },
    previewType: "app-dev",
  },
  {
    id: "data-analytics",
    num: "02",
    title: "Data Engineering & Analytics",
    tagline: "Transform fragmented data into connected, real-time executive dashboards and predictive lakehouses.",
    icon: BarChart3,
    badge: "Enterprise Intelligence",
    bullets: [
      "Medallion Lakehouses (Snowflake & Databricks)",
      "Automated ETL & dbt SQL Transformation Pipelines",
      "Executive Power BI & Looker Studio Cockpits",
      "Real-Time Telemetry & Predictive ML Models",
    ],
    href: "/services",
    metrics: { label: "Query Speedup", value: "18x" },
    previewType: "data-analytics",
  },
  {
    id: "digital-marketing",
    num: "03",
    title: "Digital & Social Marketing",
    tagline: "Turn your digital footprint into an automated engine for qualified enterprise pipeline and revenue.",
    icon: TrendingUp,
    badge: "Growth & Demand Gen",
    bullets: [
      "Technical SEO & First-Page Google Positioning",
      "High-ROAS Paid Acquisition (Google, Meta, LinkedIn)",
      "Technical Content Strategy & Thought Leadership",
      "Multi-Touch Attribution & Conversion Rate Optimization",
    ],
    href: "/services",
    metrics: { label: "Blended ROAS", value: "+340%" },
    previewType: "digital-growth",
  },
];

export function ServicesStickyShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active index on scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIndex(Math.min(Math.max(index, 0), SERVICES_SLIDES.length - 1));
  };

  // Translate vertical mouse wheel to horizontal movement
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        const isAtStart = el.scrollLeft <= 2 && e.deltaY < 0;
        const isAtEnd = el.scrollLeft >= maxScrollLeft - 4 && e.deltaY > 0;

        if (!isAtStart && !isAtEnd) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const targetEl = scrollContainerRef.current.children[index] as HTMLElement;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const scrollPrev = () => {
    const nextIdx = Math.max(activeIndex - 1, 0);
    scrollToSlide(nextIdx);
  };

  const scrollNext = () => {
    const nextIdx = Math.min(activeIndex + 1, SERVICES_SLIDES.length - 1);
    scrollToSlide(nextIdx);
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0D3B66] border border-[#1CC8E5]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#1CC8E5]" />
              <span>OUR CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B46]">
              Built For Scale, Data & Growth
            </h2>
            <p className="text-[#5B6B7C] text-base sm:text-lg">
              Swipe or scroll horizontally to discover our three specialized engineering practices.
            </p>
          </div>

          {/* Controls: Prev/Next & Slide Indicator */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#0D3B66] mr-2">
              <span className="text-[#18B6D8]">0{activeIndex + 1}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-400">03</span>
            </div>
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              aria-label="Previous service"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-[#0F2B46] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === SERVICES_SLIDES.length - 1}
              aria-label="Next service"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-[#0F2B46] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Snap-Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {SERVICES_SLIDES.map((svc, idx) => {
            const Icon = svc.icon;
            const isActive = activeIndex === idx;

            return (
              <div
                key={svc.id}
                className="w-[90vw] sm:w-[85vw] lg:w-[1080px] shrink-0 snap-center rounded-[32px] bg-white border border-sky-100 p-6 sm:p-10 lg:p-12 shadow-xl shadow-sky-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* LEFT: 20% Punchy Core Narrative (5 Cols) */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#F4FAFC] border border-sky-100 text-[#0F2B46] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#18B6D8]" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-[#18B6D8] uppercase tracking-wider">
                          PRACTICE {svc.num}
                        </div>
                        <span className="text-[11px] font-bold text-slate-500">
                          {svc.badge}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2B46] tracking-tight leading-tight">
                        {svc.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#5B6B7C] mt-2.5 leading-relaxed font-normal">
                        {svc.tagline}
                      </p>
                    </div>

                    {/* 4 Crisp Value Bullets (Home = 20%) */}
                    <div className="space-y-2.5 pt-1">
                      {svc.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F2B46]"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0F2B46] hover:bg-[#0D3B66] text-white font-bold text-xs sm:text-sm shadow-md transition-all group/btn"
                      >
                        <span>Explore {svc.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#1CC8E5] group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT: Visual Showcase Panel (6 Cols) */}
                  <div className="lg:col-span-6 rounded-2xl bg-[#F4FAFC] border border-sky-100 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 border-b border-sky-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-[#0F2B46]">
                          Enterprise Delivery Architecture
                        </span>
                      </div>
                      <div className="text-[11px] font-mono font-bold text-[#18B6D8] bg-white px-2.5 py-0.5 rounded-full border border-sky-100">
                        {svc.metrics.label}: {svc.metrics.value}
                      </div>
                    </div>

                    {/* App Dev Visual */}
                    {svc.previewType === "app-dev" && (
                      <div className="space-y-3">
                        <div className="rounded-xl bg-[#0F2B46] text-white p-4 font-mono text-xs shadow-md space-y-1.5">
                          <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1.5 border-b border-white/10">
                            <span>production/app.config.ts</span>
                            <span className="text-emerald-400 font-bold">EDGE SSR • 60 FPS</span>
                          </div>
                          <div className="text-cyan-300">export const config = &#123;</div>
                          <div className="pl-3 text-slate-300">stack: [&quot;Next.js 15&quot;, &quot;React Native&quot;],</div>
                          <div className="pl-3 text-emerald-300">p99Latency: &quot;&lt; 25ms&quot;,</div>
                          <div className="pl-3 text-slate-300">concurrency: &quot;Auto-Scaling VPC&quot;,</div>
                          <div className="text-cyan-300">&#125;;</div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <Smartphone className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">iOS & Android</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <Globe className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">Next.js SaaS</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <Layers className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">Shopify Plus</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Data Analytics Visual */}
                    {svc.previewType === "data-analytics" && (
                      <div className="space-y-3">
                        <div className="rounded-xl bg-white border border-sky-100 p-4 space-y-2.5 shadow-xs">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[#0F2B46]">Lakehouse Stream</span>
                            <span className="font-mono text-emerald-600 font-bold">1.2M rows/sec</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                            <div className="p-2 rounded-lg bg-[#F4FAFC] border border-sky-100 font-semibold text-[#0F2B46]">
                              Bronze Stream
                            </div>
                            <div className="p-2 rounded-lg bg-[#F4FAFC] border border-sky-100 font-semibold text-[#0F2B46]">
                              Silver dbt
                            </div>
                            <div className="p-2 rounded-lg bg-[#F4FAFC] border border-sky-100 font-bold text-[#18B6D8]">
                              Gold BI Mart
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <Database className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">Snowflake</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <LineChart className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">Power BI</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <Zap className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">&lt; 12ms OLAP</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Digital Growth Visual */}
                    {svc.previewType === "digital-growth" && (
                      <div className="space-y-3">
                        <div className="rounded-xl bg-white border border-sky-100 p-4 space-y-2 shadow-xs">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[#0F2B46]">Pipeline Velocity</span>
                            <span className="font-mono text-emerald-600 font-bold">+340% ROAS</span>
                          </div>
                          <div className="space-y-1.5 text-[11px]">
                            <div className="flex justify-between font-semibold text-slate-700">
                              <span>Organic Search Intent</span>
                              <span className="text-[#0D3B66]">4.8x Lift</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                              <div className="h-full rounded-full bg-gradient-to-r from-[#0F2B46] to-[#1CC8E5] w-[85%]" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <Target className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">Top 1 SEO</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <TrendingUp className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">Paid ROAS</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-sky-100">
                            <Zap className="w-4 h-4 text-[#18B6D8] mx-auto mb-1" />
                            <div className="font-bold text-[#0F2B46]">High CRO</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {SERVICES_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === i ? "w-8 bg-[#0F2B46]" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
