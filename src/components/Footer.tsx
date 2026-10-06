"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { CodePlacedLogo } from "./CodePlacedLogo";

interface FooterProps {
  onOpenBookAudit?: (scope?: string) => void;
}

export function Footer({ onOpenBookAudit }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#082F49] text-slate-300 py-6 sm:py-8 border-t border-sky-900/40 relative overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-[#00b7c2]/10 rounded-full blur-[80px] pointer-events-none -z-0" />

      <div className="site-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand Logo */}
          <Link href="/" className="inline-block flex-shrink-0">
            <CodePlacedLogo variant="white" size="md" />
          </Link>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300">
            <Link href="/about" className="hover:text-cyan-300 transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-cyan-300 transition-colors">
              Services
            </Link>
            <Link href="/industries" className="hover:text-cyan-300 transition-colors">
              Industries
            </Link>
            <Link href="/case-studies" className="hover:text-cyan-300 transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social & Contact */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@codeplaced.com"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors border border-white/10"
              aria-label="Email CodePlaced"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-300" />
              <span>hello@codeplaced.com</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#00b7c2]/20 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-colors border border-white/10"
              aria-label="CodePlaced LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div>
            © 2026 CodePlaced Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
