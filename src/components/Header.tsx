"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { CodePlacedLogo } from "./CodePlacedLogo";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { IndustriesMegaMenu } from "./IndustriesMegaMenu";

interface HeaderProps {
  onOpenBookAudit?: (scope?: string) => void;
}

const NAV_ITEMS_LIST = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: "services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries", hasDropdown: "industries" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header({ onOpenBookAudit }: HeaderProps) {
  const pathname = usePathname();
  const [showSticky, setShowSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mega menu states
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterServices = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesMenuOpen(false);
    setMegaMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  };

  const handleMouseEnterIndustries = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setMegaMenuOpen(false);
    setIndustriesMenuOpen(true);
  };

  const handleMouseLeaveIndustries = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesMenuOpen(false);
    }, 180);
  };

  // Scroll listener: Trigger sticky navbar instantly when user scrolls past 80px (0ms delay)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setShowSticky(scrollPos > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setIndustriesMenuOpen(false);
  }, [pathname]);

  // Shared Navigation Links component
  const renderNavLinks = () => (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
      {NAV_ITEMS_LIST.map((item) => {
        const isServices = item.hasDropdown === "services";
        const isIndustries = item.hasDropdown === "industries";
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : isServices
            ? pathname.startsWith("/services")
            : isIndustries
            ? pathname.startsWith("/industries")
            : pathname === item.href || pathname.startsWith(item.href);

        if (isServices) {
          return (
            <div
              key={item.label}
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
              className="relative"
            >
              <Link
                href="/services"
                className={`relative px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 group inline-flex items-center gap-1 ${
                  megaMenuOpen || isActive
                    ? "text-[#0B6B88] font-bold"
                    : "text-[#12344A] hover:text-[#14B8C5]"
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    megaMenuOpen
                      ? "rotate-180 text-[#14B8C5]"
                      : "text-[#12344A]/60 group-hover:text-[#14B8C5]"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#14B8C5] transition-transform duration-300 origin-center ${
                    isActive && !megaMenuOpen
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </div>
          );
        }

        if (isIndustries) {
          return (
            <div
              key={item.label}
              onMouseEnter={handleMouseEnterIndustries}
              onMouseLeave={handleMouseLeaveIndustries}
              className="relative"
            >
              <Link
                href="/industries"
                className={`relative px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 group inline-flex items-center gap-1 ${
                  industriesMenuOpen || isActive
                    ? "text-[#0B6B88] font-bold"
                    : "text-[#12344A] hover:text-[#14B8C5]"
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    industriesMenuOpen
                      ? "rotate-180 text-[#14B8C5]"
                      : "text-[#12344A]/60 group-hover:text-[#14B8C5]"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#14B8C5] transition-transform duration-300 origin-center ${
                    isActive && !industriesMenuOpen
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`relative px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 group ${
              isActive
                ? "text-[#0B6B88] font-bold"
                : "text-[#12344A] hover:text-[#14B8C5]"
            }`}
          >
            <span>{item.label}</span>
            <span
              className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#14B8C5] transition-transform duration-300 origin-center ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );

  // Shared CTA button
  const renderCtaButton = () => (
    <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
      {onOpenBookAudit ? (
        <button
          onClick={() => onOpenBookAudit("Schedule Architecture Call")}
          className="inline-flex items-center justify-center px-6 h-[42px] rounded-full text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#14B8C5]/25 active:scale-95 cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #0B6B88, #14B8C5)",
          }}
        >
          <span>Schedule Call</span>
        </button>
      ) : (
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 h-[42px] rounded-full text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#14B8C5]/25 active:scale-95 cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #0B6B88, #14B8C5)",
          }}
        >
          <span>Schedule Call</span>
        </Link>
      )}
    </div>
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. INITIAL STATIC NAVBAR (Blends seamlessly with Page Hero Background) */}
      {/* ========================================================================= */}
      <header className="absolute top-0 left-0 w-full h-[78px] sm:h-[84px] bg-transparent z-40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <CodePlacedLogo size="md" variant="dark" />
          </Link>

          {/* Navigation Links */}
          {renderNavLinks()}

          {/* Right CTA */}
          {renderCtaButton()}

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="sm:hidden px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-xs"
              style={{
                background: "linear-gradient(90deg, #0B6B88, #14B8C5)",
              }}
            >
              Call
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#062B38] hover:text-[#0B6B88] hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdowns (Attached to initial navbar) */}
        {!showSticky && (
          <>
            <div
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <ServicesMegaMenu
                isOpen={megaMenuOpen}
                onClose={() => setMegaMenuOpen(false)}
                onOpenBookAudit={onOpenBookAudit}
              />
            </div>

            <div
              onMouseEnter={handleMouseEnterIndustries}
              onMouseLeave={handleMouseLeaveIndustries}
            >
              <IndustriesMegaMenu
                isOpen={industriesMenuOpen}
                onClose={() => setIndustriesMenuOpen(false)}
                onOpenBookAudit={onOpenBookAudit}
              />
            </div>
          </>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. SMART STICKY NAVBAR (Appears instantly at 80px with 0.16s animation) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-[70px] sm:h-[72px] z-[999] bg-white/95 backdrop-blur-[12px] border-b border-[rgba(20,184,197,0.08)] shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
          >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
              {/* Logo on Left */}
              <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
                <CodePlacedLogo size="md" variant="dark" />
              </Link>

              {/* Navigation Links */}
              {renderNavLinks()}

              {/* Right CTA */}
              {renderCtaButton()}

              {/* Mobile Menu Toggle */}
              <div className="flex items-center gap-2 lg:hidden">
                <Link
                  href="/contact"
                  className="sm:hidden px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-xs"
                  style={{
                    background: "linear-gradient(90deg, #0B6B88, #14B8C5)",
                  }}
                >
                  Call
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-xl text-[#062B38] hover:text-[#0B6B88] hover:bg-slate-100 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mega Menu Dropdowns (Attached to sticky navbar) */}
            <div
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <ServicesMegaMenu
                isOpen={megaMenuOpen}
                onClose={() => setMegaMenuOpen(false)}
                onOpenBookAudit={onOpenBookAudit}
              />
            </div>

            <div
              onMouseEnter={handleMouseEnterIndustries}
              onMouseLeave={handleMouseLeaveIndustries}
            >
              <IndustriesMegaMenu
                isOpen={industriesMenuOpen}
                onClose={() => setIndustriesMenuOpen(false)}
                onOpenBookAudit={onOpenBookAudit}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 3. MOBILE SLIDE-DOWN DRAWER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] z-[998] bg-white/98 backdrop-blur-2xl border-b border-slate-200/90 shadow-2xl px-6 py-6 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1.5">
              {NAV_ITEMS_LIST.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key="Services" className="border-b border-slate-100 pb-2">
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold text-[#062B38] hover:bg-slate-50 transition-colors">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#14B8C5]" />
                          <span>Services Overview</span>
                        </Link>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1.5 rounded-md text-[#0B6B88]"
                          aria-label="Toggle Services"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4 space-y-2 pt-1"
                          >
                            <Link
                              href="/services/data-platforms"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B6B88]"
                            >
                              • Data Platforms & Lakehouses
                            </Link>
                            <Link
                              href="/services/ai-copilots"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B6B88]"
                            >
                              • AI Copilots & Enterprise RAG
                            </Link>
                            <Link
                              href="/services/executive-dashboards"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B6B88]"
                            >
                              • Executive & Growth Dashboards
                            </Link>
                            <Link
                              href="/services/cloud-infrastructure"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B6B88]"
                            >
                              • Cloud Modernization & FinOps
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.label === "Industries") {
                  return (
                    <div key="Industries" className="border-b border-slate-100 pb-2">
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold text-[#062B38] hover:bg-slate-50 transition-colors">
                        <Link
                          href="/industries"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#14B8C5]" />
                          <span>Industries Overview</span>
                        </Link>
                        <button
                          onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                          className="p-1.5 rounded-md text-[#0B6B88]"
                          aria-label="Toggle Industries"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileIndustriesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4 space-y-2 pt-1"
                          >
                            <Link
                              href="/industries"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B6B88]"
                            >
                              • Healthcare & Life Sciences
                            </Link>
                            <Link
                              href="/industries"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B6B88]"
                            >
                              • FinTech & Banking
                            </Link>
                            <Link
                              href="/industries"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B6B88]"
                            >
                              • Logistics & Fleet Telematics
                            </Link>
                            <Link
                              href="/industries"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B6B88]"
                            >
                              • SaaS & High-Concurrency
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-base font-bold transition-colors ${
                      isActive
                        ? "text-[#0B6B88] bg-[rgba(20,184,197,0.08)]"
                        : "text-[#12344A] hover:bg-slate-50 hover:text-[#0B6B88]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-200/80">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(90deg, #0B6B88, #14B8C5)",
                }}
              >
                <span>Schedule Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
