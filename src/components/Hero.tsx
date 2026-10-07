"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Check,
  Zap,
  ShieldCheck,
  Clock,
  ChevronRight,
  Boxes,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";

interface HeroProps {
  onOpenBookAudit?: (scope?: string) => void;
}

const TRUSTED_LOGOS = [
  { name: "AWS", tag: "Cloud Infrastructure" },
  { name: "Google Cloud", tag: "Vertex AI & Data" },
  { name: "Microsoft Azure", tag: "Enterprise Cloud" },
  { name: "OpenAI", tag: "GPT-4o Partner" },
  { name: "Snowflake", tag: "Data Lakehouse" },
  { name: "Databricks", tag: "AI & Analytics" },
];

const HERO_STATS = [
  { value: "250+", label: "Projects Delivered" },
  { value: "150+", label: "Clients Served" },
  { value: "1,200+", label: "Automated Workflows" },
  { value: "18+", label: "Industries Supported" },
  { value: "250M+", label: "Records Processed Monthly" },
];

export function Hero({ onOpenBookAudit }: HeroProps) {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeLogos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-20 border-b border-slate-200/80"
      style={{
        background: "linear-gradient(180deg, #F4FBFD 0%, #EDF8FB 60%, #FFFFFF 100%)",
      }}
    >
      {/* Ambient Soft Glow Behind Content */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,184,197,0.14), rgba(11,107,136,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* ========================================================================= */}
        {/* 1. BADGE */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>MODERN TECHNOLOGY PARTNER</span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. MAIN HEADING */}
        {/* ========================================================================= */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-[38px] sm:text-[56px] lg:text-[72px] font-[800] leading-[1.05] tracking-[-0.03em] text-[#082F49] mb-6 max-w-[1050px] mx-auto [text-wrap:balance]"
        >
          Technology That Turns{" "}
          <span
            className="bg-clip-text text-transparent font-extrabold inline-block"
            style={{
              backgroundImage: "linear-gradient(90deg, #0f4c81, #00b7c2)",
            }}
          >
            Ideas Into Impact
          </span>
        </motion.h1>

        {/* ========================================================================= */}
        {/* 3. DESCRIPTION */}
        {/* ========================================================================= */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-base sm:text-[18px] text-slate-600 leading-[1.65] max-w-[760px] mx-auto mb-9 font-normal"
        >
          CodePlaced helps businesses build scalable digital products, transform data into actionable
          insights, and accelerate growth through modern digital marketing.
        </motion.p>

        {/* ========================================================================= */}
        {/* 4. CTA BUTTONS */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7"
        >
          <Link
            href="/services"
            className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-gradient-to-r from-[#0f4c81] to-[#00b7c2] hover:from-[#082F49] hover:to-[#0f4c81] text-white font-extrabold text-[15px] shadow-xl shadow-[#00b7c2]/20 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/case-studies"
            className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-white hover:bg-slate-50 text-[#082F49] font-bold text-[15px] border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-200 hover:border-[#00b7c2]/40"
          >
            <span>View Our Work</span>
          </Link>
        </motion.div>

        {/* ========================================================================= */}
        {/* 5. TRUST INDICATORS */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700 mb-14"
        >
          <div className="flex items-center gap-1.5 text-slate-700">
            <span className="text-[#00b7c2] font-black">✓</span>
            <span>30-Min Consultation</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700">
            <span className="text-[#00b7c2] font-black">✓</span>
            <span>NDA Signed</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700">
            <span className="text-[#00b7c2] font-black">✓</span>
            <span>2–4 Week Delivery</span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 6. TRUSTED BY SECTION (Infinite Marquee Animation) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-14 pt-8 border-t border-slate-200/70"
        >
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-6">
            Trusted by modern businesses using world-class technology
          </div>

          <div
            className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)] select-none"
            onMouseEnter={() => setIsMarqueePaused(true)}
            onMouseLeave={() => setIsMarqueePaused(false)}
          >
            <motion.div
              animate={{ x: isMarqueePaused ? undefined : ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 22,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-10 sm:gap-16 w-max cursor-pointer py-1"
            >
              {marqueeLogos.map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/70 border border-slate-200/80 shadow-2xs hover:border-[#00b7c2]/40 hover:bg-white transition-all flex-shrink-0 group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00b7c2] group-hover:scale-125 transition-transform" />
                  <span className="font-extrabold text-sm sm:text-base text-[#082F49] tracking-tight group-hover:text-[#0f4c81] transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    ({brand.tag})
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 7. HERO STATISTICS ROW (5 White Cards with Subtle Shadows) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              } p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#00b7c2]/30 transition-all duration-200 text-center flex flex-col justify-center`}
            >
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-[900] tracking-tight mb-1 bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0f4c81, #00b7c2)",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-[13px] font-bold text-[#082F49] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
