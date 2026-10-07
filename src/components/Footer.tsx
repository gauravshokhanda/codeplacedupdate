"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  ArrowUp,
  ArrowRight,
  Globe2,
  MapPin,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { CodePlacedLogo } from "./CodePlacedLogo";

interface FooterProps {
  onOpenBookAudit?: (scope?: string) => void;
}

const GLOBAL_OFFICES = [
  {
    country: "India",
    flag: "🇮🇳",
    city: "Jaipur, Rajasthan",
    specialization: "Data Engineering, AI Systems & Product Development",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    city: "San Francisco / New York",
    specialization: "Enterprise Consulting & Client Partnerships",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    specialization: "Fintech & Cloud Architecture",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    city: "Dubai",
    specialization: "Logistics, Retail & AI Transformation",
  },
];

export function Footer({ onOpenBookAudit }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#071524] text-slate-300 pt-16 sm:pt-20 pb-10 border-t border-cyan-950/60 relative overflow-hidden font-sans select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[200px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[200px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(28, 200, 229, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(28, 200, 229, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* ========================================================================= */}
        {/* LAYER 1: BRAND POSITIONING & STRATEGY CTA BANNER */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-[32px] bg-[#0F2B46]/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <Link href="/" className="inline-block">
              <CodePlacedLogo variant="white" size="lg" />
            </Link>
            <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Technology That Turns Ideas Into Impact.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
              Building scalable digital products, modern data platforms, enterprise AI systems, and growth engines for modern businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
            <Link
              href="/contact"
              className="h-12 px-7 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#0F2B46] font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 group"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="mailto:hello@codeplaced.com"
              className="h-12 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-300" />
              <span>hello@codeplaced.com</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 2: GLOBAL PRESENCE (4 Location Hubs) */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Global Presence & Delivery Centers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{office.flag}</span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {office.country}
                    </span>
                  </div>
                  <MapPin className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div className="text-xs font-semibold text-slate-300">
                  {office.city}
                </div>

                <p className="text-[11px] text-slate-400 leading-snug pt-1">
                  {office.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 3: 4 NAVIGATION COLUMNS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pt-8 border-t border-white/10">
          {/* Col 1: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-cyan-300 transition-colors block">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-300 transition-colors block">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors block">
                  App & Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors block">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors block">
                  Analytics & BI
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors block">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors block">
                  AI Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/industries" className="hover:text-cyan-300 transition-colors block">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-300 transition-colors block">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-300 transition-colors block">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-300 transition-colors block">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-300 transition-colors block">
                  SaaS
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-300 transition-colors block">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Technology Partners */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Technology Partners
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>AWS</span>
              </li>
              <li className="text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Azure</span>
              </li>
              <li className="text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Google Cloud</span>
              </li>
              <li className="text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>OpenAI</span>
              </li>
              <li className="text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Snowflake</span>
              </li>
              <li className="text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Databricks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 4: BOTTOM ROW (Copyright, Privacy, Terms, LinkedIn, GitHub, Back to Top) */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 CodePlaced Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms
            </Link>
            <span>•</span>
            <a
              href="https://www.linkedin.com/company/codeplaced/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
