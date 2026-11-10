"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { CodePlacedLogo } from "./CodePlacedLogo";

interface FooterProps {
  onOpenBookAudit?: (scope?: string) => void;
}

export function Footer({ onOpenBookAudit }: FooterProps) {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000000] text-slate-300 pt-6 sm:pt-10 pb-5 sm:pb-8 border-t border-[#292929] relative overflow-hidden font-sans select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[200px] bg-[#00BCD4]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 188, 212, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 188, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        {/* ========================================================================= */}
        {/* LAYER 1: BRAND POSITIONING & STRATEGY CONTACT ROW */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3.5 sm:gap-6 pb-5 sm:pb-8 border-b border-[#292929]">
          <div className="space-y-1 sm:space-y-2.5 max-w-2xl">
            <Link href="/" className="inline-block">
              <CodePlacedLogo variant="white" size="lg" />
            </Link>
            <p className="text-base sm:text-2xl font-black text-white tracking-tight">
              Technology That Turns Ideas Into Impact.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
              Building scalable digital products, modern data platforms, enterprise AI systems, and growth engines for modern businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/contact#contact-hero"
              onClick={(e) => {
                if (pathname === "/contact") {
                  e.preventDefault();
                  const hero = document.getElementById("contact-hero");
                  if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="h-9 sm:h-12 px-5 sm:px-7 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group cursor-pointer"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="mailto:hello@codeplaced.com"
              className="h-9 sm:h-12 px-4 sm:px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-[#00BCD4]" />
              <span>hello@codeplaced.com</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 2: NAVIGATION COLUMNS (2-COL ON MOBILE, 4-COL ON DESKTOP) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Col 1: Company */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
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
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/services/ai-copilots" className="hover:text-cyan-300 transition-colors block">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/app-web-development" className="hover:text-cyan-300 transition-colors block">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/executive-dashboards" className="hover:text-cyan-300 transition-colors block">
                  Data Analytics & Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering-analytics" className="hover:text-cyan-300 transition-colors block">
                  Data Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Industries
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/industries#ecommerce" className="hover:text-cyan-300 transition-colors block">
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link href="/industries#edtech" className="hover:text-cyan-300 transition-colors block">
                  EdTech
                </Link>
              </li>
              <li>
                <Link href="/industries#insurance" className="hover:text-cyan-300 transition-colors block">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/industries#human-resources" className="hover:text-cyan-300 transition-colors block">
                  Human Resources
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare" className="hover:text-cyan-300 transition-colors block">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#real-estate" className="hover:text-cyan-300 transition-colors block">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Technology Partners */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Technology Partners
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
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
        {/* LAYER 3: BOTTOM ROW (Copyright, Privacy, Terms, LinkedIn, GitHub, Back to Top) */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-slate-400">
          <div>
            © 2026 CodePlaced Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-400">
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
            className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10 cursor-pointer text-[11px] sm:text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
