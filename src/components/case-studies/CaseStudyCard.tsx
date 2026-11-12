"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Database,
  BarChart3,
  Globe2,
  Users,
  GraduationCap,
  Layers,
  Bot,
  Target,
  Code2,
  Cpu,
  Building2,
  Workflow,
} from "lucide-react";

export interface CaseStudyData {
  id: string;
  slug: string;
  category: string;
  brand: string;
  brandIcon: React.ElementType;
  brandLogoUrl?: string;
  titlePrefix: string;
  highlightWord: string;
  description: string;
  image: string;
  mobileImage?: string;
  imageAlt: string;
  techTags: string[];
  metrics: {
    value: string;
    label: string;
    icon?: React.ElementType;
  }[];
}

interface CaseStudyCardProps {
  study: CaseStudyData;
  className?: string;
}

export function CaseStudyCard({ study, className = "" }: CaseStudyCardProps) {
  const BrandIcon = study.brandIcon;

  // Resolve metric icons safely
  const getMetricIcon = (idx: number, customIcon?: React.ElementType) => {
    if (customIcon) return customIcon;
    if (study.id === "collectiq") {
      return idx === 0 ? Building2 : idx === 1 ? Workflow : Bot;
    }
    if (study.id === "topplaced-ai") {
      return idx === 0 ? Bot : idx === 1 ? Target : Code2;
    }
    if (study.id === "tuitionstime") {
      return idx === 0 ? Users : idx === 1 ? GraduationCap : Layers;
    }
    if (study.id === "hoopwrld") {
      return idx === 0 ? Database : idx === 1 ? BarChart3 : Globe2;
    }
    return idx === 0 ? Database : idx === 1 ? BarChart3 : Users;
  };

  return (
    <div className={`relative ${className}`}>
      {/* ===================================================================== */}
      {/* 1. MOBILE & SMALL TABLET VIEW (< 1024px)                              */}
      {/* Shared, compact, standardized card with identical structure & height  */}
      {/* ===================================================================== */}
      <div className="block lg:hidden">
        <Link
          href={`/case-studies/${study.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View case study: ${study.brand}`}
          className="block relative rounded-[18px] sm:rounded-[20px] border border-[#00BCD4]/30 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden p-3.5 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.85),0_0_30px_rgba(0,188,212,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_35px_rgba(0,188,212,0.12)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
        >
          <div className="flex flex-col space-y-2.5 sm:space-y-3">
            {/* 1. Category Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
              <span>{study.category}</span>
            </div>

            {/* 2. Brand Name & Icon */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center shrink-0 bg-[#00BCD4]/10 border border-[#00BCD4]/30">
                {study.brandLogoUrl ? (
                  <Image
                    src={study.brandLogoUrl}
                    alt={`${study.brand} Logo`}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                ) : (
                  <BrandIcon className="w-3.5 h-3.5 text-[#00BCD4]" />
                )}
              </div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                {study.brand}
              </span>
            </div>

            {/* 3. Case Study Heading (18-20px, consistent 2-line layout) */}
            <h3 className="text-[17px] sm:text-[19px] font-extrabold text-white tracking-tight leading-[1.2] min-h-[42px] sm:min-h-[46px] flex items-center">
              <span>
                {study.titlePrefix}
                <span className="text-[#00BCD4]">{study.highlightWord}</span>
              </span>
            </h3>

            {/* 4. Short Description (13-14px, consistent 2-line preview) */}
            <p className="text-[12.5px] sm:text-[13.5px] text-[#A1A1AA] leading-relaxed line-clamp-2 min-h-[36px] sm:min-h-[40px]">
              {study.description}
            </p>

            {/* 5. Technology Tags (Compact, top 4 tags for row alignment) */}
            <div className="flex flex-wrap items-center gap-1.5 min-h-[22px]">
              {study.techTags.slice(0, 4).map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                >
                  {tech}
                </span>
              ))}
              {study.techTags.length > 4 && (
                <span className="text-[9px] font-mono px-1 py-0.5 text-[#71717A]">
                  +{study.techTags.length - 4}
                </span>
              )}
            </div>

            {/* 6. View Case Study CTA Button */}
            <div className="pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-[11px] sm:text-xs font-bold transition-all duration-200 shadow-sm">
                <span>View Case Study</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* 7. Three Project Metrics (Horizontal 3-column row) */}
            <div className="pt-2.5 sm:pt-3 border-t border-white/[0.08] grid grid-cols-3 gap-2">
              {study.metrics.map((metric, idx) => {
                const MetricIcon = getMetricIcon(idx, metric.icon);
                return (
                  <div key={idx} className="flex flex-col text-left">
                    <div className="flex items-center gap-1">
                      <MetricIcon className="w-3 h-3 text-[#00BCD4] shrink-0" />
                      <span className="text-xs sm:text-sm font-black text-white font-mono tracking-tight truncate">
                        {metric.value}
                      </span>
                    </div>
                    <span className="text-[9.5px] sm:text-[10.5px] text-[#A1A1AA] mt-0.5 font-medium leading-tight line-clamp-2">
                      {metric.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* 8. Project Image (16:10 aspect ratio, centered, prominent, contained) */}
            <div
              className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden flex items-center justify-center mt-1 ${
                study.id === "topplaced-ai"
                  ? "bg-transparent"
                  : "bg-[#0A0D12] border border-[#00BCD4]/25 p-2"
              }`}
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.12)_0%,transparent_70%)] pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative w-full h-full">
                <Image
                  src={study.mobileImage || study.image}
                  alt={study.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ===================================================================== */}
      {/* 2. DESKTOP VIEW (>= 1024px) — 100% PRESERVED EXACTLY AS ORIGINAL     */}
      {/* ===================================================================== */}
      <div className="hidden lg:block">
        {study.id === "hoopwrld" ? (
          <Link
            href={`/case-studies/${study.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View case study: ${study.brand}`}
            className="block relative rounded-[20px] border border-[#00BCD4]/25 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden min-h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,188,212,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,188,212,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000000]"
          >
            <div className="flex flex-row h-full items-center p-10 xl:p-12 gap-10">
              {/* Left Side (~45%) — Editorial Information */}
              <div className="w-[45%] xl:w-[46%] flex flex-col justify-between text-left z-10 space-y-8">
                <div className="space-y-4 max-w-xl">
                  {/* Eyebrow Tag */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                    <span>{study.category}</span>
                  </div>

                  {/* Brand Logo & Name */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0 bg-[#00BCD4]/10 border border-[#00BCD4]/30">
                      <Image
                        src="/images/case-studies/hoopwrld-logo-badge.png"
                        alt="Hoopwrld Logo"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                      {study.brand}
                    </span>
                  </div>

                  {/* Title with Cyan Highlight */}
                  <h2 className="text-[30px] xl:text-[34px] font-extrabold text-white tracking-tight leading-[1.18]">
                    {study.titlePrefix}
                    <span className="text-[#00BCD4] block">{study.highlightWord}</span>
                  </h2>

                  {/* Short Description */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {study.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {study.techTags.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study CTA Button */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Metrics Strip with Icons */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-3 xl:gap-5">
                  {study.metrics.map((metric, idx) => {
                    const MetricIcon = getMetricIcon(idx, metric.icon);
                    return (
                      <div key={idx} className="flex items-start gap-2.5">
                        <MetricIcon className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
                        <div className="text-left">
                          <div className="text-lg xl:text-xl font-black text-white font-mono tracking-tight whitespace-nowrap">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-[#A1A1AA] mt-0.5 font-medium leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right side (~55%) — Large Contained Basketball & Analytics Dashboard Mockup */}
              <div className="w-[55%] xl:w-[54%] relative flex items-center justify-center select-none overflow-hidden">
                <div
                  className="absolute top-[40%] right-[25%] -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.15)_0%,rgba(0,188,212,0.02)_45%,transparent_70%)] blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative w-full aspect-[2200/1350] transition-transform duration-500 ease-out group-hover:scale-[1.02] drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    priority
                    sizes="55vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </Link>
        ) : study.id === "progress-partners" ? (
          <Link
            href={`/case-studies/${study.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View case study: ${study.brand}`}
            className="block relative rounded-[20px] border border-[#00BCD4]/30 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden min-h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,188,212,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,188,212,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000000]"
          >
            <div className="flex flex-row h-full items-center p-10 xl:p-12 gap-10">
              {/* Left Side (48%) — Solid Black Content */}
              <div className="w-[48%] flex flex-col justify-between text-left z-10 space-y-8">
                <div className="space-y-4 max-w-xl">
                  {/* Eyebrow Tag */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                    <span>{study.category}</span>
                  </div>

                  {/* Brand Logo & Name */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0">
                      <BarChart3 className="w-4 h-4 text-[#00BCD4]" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                      {study.brand}
                    </span>
                  </div>

                  {/* Title with Cyan Highlight */}
                  <h2 className="text-[32px] xl:text-[36px] font-extrabold text-white tracking-tight leading-[1.15]">
                    {study.titlePrefix}
                    <span className="text-[#00BCD4] block">{study.highlightWord}</span>
                  </h2>

                  {/* Short Description */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {study.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {study.techTags.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study CTA Button */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Bottom Group: Metrics Row with Icons */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 xl:gap-6">
                  {study.metrics.map((metric, idx) => {
                    const MetricIcon = getMetricIcon(idx, metric.icon);
                    return (
                      <div key={idx} className="flex items-start gap-2.5">
                        <MetricIcon className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
                        <div className="text-left">
                          <div className="text-lg xl:text-xl font-black text-white font-mono tracking-tight whitespace-nowrap">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-[#A1A1AA] mt-0.5 font-medium leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side (52%) — Authentic AFTER Analytics Dashboard Display */}
              <div className="w-[52%] relative flex items-center justify-center select-none overflow-hidden">
                <div
                  className="absolute top-[40%] right-[25%] -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.15)_0%,rgba(0,188,212,0.02)_45%,transparent_70%)] blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative w-full aspect-[1071/712] rounded-2xl overflow-hidden border border-[#00BCD4]/35 bg-[#07090D] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(0,188,212,0.1)] p-2.5 transition-transform duration-500 ease-out group-hover:scale-[1.01]">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0A0D12]">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      priority
                      className="object-contain object-center"
                      sizes="52vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : study.id === "topplaced-ai" ? (
          <Link
            href={`/case-studies/${study.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View case study: ${study.brand}`}
            className="block relative rounded-[20px] border border-[#00BCD4]/30 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden min-h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,188,212,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,188,212,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000000]"
          >
            <div className="flex flex-row h-full items-center p-10 xl:p-12 gap-10">
              {/* Left Side (48%) — Solid Black Content */}
              <div className="w-[48%] flex flex-col justify-between text-left z-10 space-y-8">
                <div className="space-y-4 max-w-xl">
                  {/* Eyebrow Tag */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                    <span>{study.category}</span>
                  </div>

                  {/* Brand Logo & Name */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0">
                      <Cpu className="w-4 h-4 text-[#00BCD4]" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                      {study.brand}
                    </span>
                  </div>

                  {/* Title with Cyan Highlight */}
                  <h2 className="text-[32px] xl:text-[36px] font-extrabold text-white tracking-tight leading-[1.15]">
                    {study.titlePrefix}
                    <span className="text-[#00BCD4] block">{study.highlightWord}</span>
                  </h2>

                  {/* Short Description */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {study.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {study.techTags.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study CTA Button */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Bottom Group: Capabilities Row with Icons */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 xl:gap-6">
                  {study.metrics.map((metric, idx) => {
                    const MetricIcon = getMetricIcon(idx, metric.icon);
                    return (
                      <div key={idx} className="flex items-start gap-2.5">
                        <MetricIcon className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
                        <div className="text-left">
                          <div className="text-sm xl:text-base font-black text-white font-mono tracking-tight whitespace-nowrap">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-[#A1A1AA] mt-0.5 font-medium leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side (52%) — Authentic Live Interview Workspace Display */}
              <div className="w-[52%] relative flex items-center justify-center select-none">
                <div
                  className="absolute top-[40%] right-[25%] -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.14)_0%,rgba(0,188,212,0.02)_45%,transparent_70%)] blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative w-full aspect-[2330/1314] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(0,188,212,0.08)] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    priority
                    className="object-cover object-center rounded-xl"
                    sizes="(max-width: 1280px) 50vw, 640px"
                  />
                </div>
              </div>
            </div>
          </Link>
        ) : study.id === "collectiq" ? (
          <Link
            href={`/case-studies/${study.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View case study: ${study.brand}`}
            className="block relative rounded-[20px] border border-[#00BCD4]/30 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden min-h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,188,212,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,188,212,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000000]"
          >
            <div className="flex flex-row h-full items-center p-10 xl:p-12 gap-10">
              {/* Left Side (48%) — Solid Black Content */}
              <div className="w-[48%] flex flex-col justify-between text-left z-10 space-y-8">
                <div className="space-y-4 max-w-xl">
                  {/* Eyebrow Tag */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                    <span>{study.category}</span>
                  </div>

                  {/* Brand Logo & Name */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0">
                      <Building2 className="w-4 h-4 text-[#00BCD4]" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                      {study.brand}
                    </span>
                  </div>

                  {/* Title with Cyan Highlight */}
                  <h2 className="text-[32px] xl:text-[36px] font-extrabold text-white tracking-tight leading-[1.15]">
                    {study.titlePrefix}
                    <span className="text-[#00BCD4] block">{study.highlightWord}</span>
                  </h2>

                  {/* Short Description */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {study.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {study.techTags.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study CTA Button */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Bottom Group: Capabilities Row with Icons */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 xl:gap-6">
                  {study.metrics.map((metric, idx) => {
                    const MetricIcon = getMetricIcon(idx, metric.icon);
                    return (
                      <div key={idx} className="flex items-start gap-2.5">
                        <MetricIcon className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
                        <div className="text-left">
                          <div className="text-sm xl:text-base font-black text-white font-mono tracking-tight whitespace-nowrap">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-[#A1A1AA] mt-0.5 font-medium leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side (52%) — Authentic CollectIQ Showcase Display */}
              <div className="w-[52%] relative flex items-center justify-center select-none overflow-hidden">
                <div
                  className="absolute top-[40%] right-[25%] -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.15)_0%,rgba(0,188,212,0.02)_45%,transparent_70%)] blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative w-full aspect-[2355/1575] rounded-2xl overflow-hidden border border-[#00BCD4]/35 bg-[#07090D] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(0,188,212,0.1)] p-2 transition-transform duration-500 ease-out group-hover:scale-[1.01]">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0A0D12]">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      priority
                      className="object-contain object-center"
                      sizes="52vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          /* Tuitionstime Desktop Flagship Card */
          <Link
            href={`/case-studies/${study.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View case study: ${study.brand}`}
            className="block relative rounded-[20px] border border-[#00C7E8]/25 hover:border-[#00C7E8]/60 bg-[#050505] overflow-hidden h-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,199,232,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,199,232,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C7E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            {/* Product Imagery */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                priority
                className="object-cover object-right transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
                sizes="(max-width: 1400px) 92vw, 1400px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-transparent w-[54%] xl:w-[48%] pointer-events-none" />
            </div>

            {/* Real HTML Content Layer */}
            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
              <div className="space-y-3.5 max-w-md xl:max-w-[500px] text-left">
                {/* Eyebrow Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00C7E8]/10 border border-[#00C7E8]/30 text-[#00C7E8] w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C7E8] animate-pulse" />
                  <span>{study.category}</span>
                </div>

                {/* Brand Logo & Name */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00C7E8]/15 border border-[#00C7E8]/35 flex items-center justify-center text-[#00C7E8]">
                    <BrandIcon className="w-4 h-4" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-white">
                    {study.brand}
                  </span>
                </div>

                {/* Title with Cyan Highlight */}
                <h2 className="text-[30px] xl:text-[32px] font-extrabold text-white tracking-tight leading-[1.18] max-w-[460px]">
                  {study.titlePrefix}
                  <span className="text-[#00C7E8]">{study.highlightWord}</span>
                </h2>

                {/* Short Description */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-md">
                  {study.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  {study.techTags.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Case Study CTA Button */}
                <div className="pt-1.5">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00C7E8] text-[#00C7E8] group-hover:bg-[#00C7E8] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Bottom Row: Metrics Strip with Divider Lines */}
              <div className="pt-6 flex flex-wrap items-center gap-8 xl:gap-10">
                {study.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className={`text-left ${
                      idx !== 0 ? "border-l border-white/15 pl-8" : ""
                    }`}
                  >
                    <div className="text-2xl xl:text-3xl font-black text-white font-mono tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-[#A1A1AA] mt-0.5 font-medium whitespace-nowrap">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

