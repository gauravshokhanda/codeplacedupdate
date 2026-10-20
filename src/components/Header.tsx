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
  Mail,
  MapPin,
} from "lucide-react";
import { CodePlacedLogo } from "./CodePlacedLogo";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { IndustriesMegaMenu } from "./IndustriesMegaMenu";

interface HeaderProps {
  onOpenBookAudit?: (scope?: string) => void;
}

const NAV_ITEMS_LIST = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: "services" },
  { label: "Solutions", href: "/services" },
  { label: "Industries", href: "/industries", hasDropdown: "industries" },
  { label: "Case Studies", href: "/case-studies" },
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

  // Scroll listener: Trigger sticky navbar immediately after scrolling 30px
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setShowSticky(scrollPos > 30);
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

  // Global unified dark navbar across all routes with seamless #050505 canvas
  const isDarkTheme = true;

  // Shared Navigation Links component (Centered)
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
            : item.href === "/blog"
            ? pathname.startsWith("/blog") || pathname.startsWith("/blogs")
            : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        const linkColorClass = isDarkTheme
          ? isActive
            ? "text-[#00C7E8] font-bold"
            : "text-[#E2E8F0] hover:text-[#00C7E8]"
          : megaMenuOpen || isActive
          ? "text-[#0B6B88] font-bold"
          : "text-[#12344A] hover:text-[#14B8C5]";

        const chevronColorClass = isDarkTheme
          ? megaMenuOpen
            ? "rotate-180 text-[#00C7E8]"
            : "text-[#E2E8F0]/70 group-hover:text-[#00C7E8]"
          : megaMenuOpen
          ? "rotate-180 text-[#14B8C5]"
          : "text-[#12344A]/60 group-hover:text-[#14B8C5]";

        const underlineBg = isDarkTheme ? "bg-[#00C7E8]" : "bg-[#14B8C5]";

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
                className={`relative px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 group inline-flex items-center gap-1 ${linkColorClass}`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${chevronColorClass}`}
                />
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] ${underlineBg} transition-transform duration-300 origin-center ${
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
                className={`relative px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 group inline-flex items-center gap-1 ${linkColorClass}`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${chevronColorClass}`}
                />
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] ${underlineBg} transition-transform duration-300 origin-center ${
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
            className={`relative px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 group ${linkColorClass}`}
          >
            <span>{item.label}</span>
            <span
              className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] ${underlineBg} transition-transform duration-300 origin-center ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );

  // Shared CTA button: bright cyan rounded pill (#00C8E8 with dark text #06151C)
  const renderCtaButton = () => (
    <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
      {onOpenBookAudit ? (
        <button
          onClick={() => onOpenBookAudit("Schedule Strategy Call")}
          className="inline-flex items-center justify-center gap-1.5 px-6 h-[42px] rounded-full text-[#06151C] bg-[#00C8E8] hover:bg-[#20d7f5] font-extrabold text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00C8E8]/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        >
          <span>Book Strategy Call</span>
          <ArrowRight className="w-4 h-4 ml-0.5" />
        </button>
      ) : (
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 px-6 h-[42px] rounded-full text-[#06151C] bg-[#00C8E8] hover:bg-[#20d7f5] font-extrabold text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00C8E8]/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        >
          <span>Book Strategy Call</span>
          <ArrowRight className="w-4 h-4 ml-0.5" />
        </Link>
      )}
    </div>
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. INITIAL STATIC NAVBAR WITH TOP INFORMATION BAR */}
      {/* ========================================================================= */}
      <header
        className="absolute top-0 left-0 w-full z-40 transition-colors bg-transparent"
      >
        {/* Main Navbar */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] sm:h-[84px] flex items-center justify-between">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <CodePlacedLogo size="md" variant={isDarkTheme ? "light" : "dark"} />
          </Link>

          {/* Navigation Links (Centered) */}
          <div className="flex-1 flex justify-center">
            {renderNavLinks()}
          </div>

          {/* Right CTA */}
          {renderCtaButton()}

          {/* Mobile Menu Toggle (Clean Hamburger on Right) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl transition-colors text-white hover:text-[#00C8E8] hover:bg-white/10 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                isDarkTheme={isDarkTheme}
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
                isDarkTheme={isDarkTheme}
              />
            </div>
          </>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. STICKY NAVBAR (Full width, Clean TechAhead Style) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 w-full h-[72px] sm:h-[76px] z-[999] backdrop-blur-[12px] transition-colors duration-200 ${
              isDarkTheme
                ? "bg-[#06151C]/95 border-b border-[#163340]/80 shadow-lg shadow-black/40"
                : "bg-white/95 border-b border-slate-200/80 shadow-xs"
            }`}
          >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
              {/* Logo on Left */}
              <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
                <CodePlacedLogo size="md" variant={isDarkTheme ? "light" : "dark"} />
              </Link>

              {/* Navigation Links (Centered) */}
              <div className="flex-1 flex justify-center">
                {renderNavLinks()}
              </div>

              {/* Right CTA */}
              {renderCtaButton()}

              {/* Mobile Menu Toggle (Clean Hamburger on Right) */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 rounded-xl transition-colors text-white hover:text-[#00C8E8] hover:bg-white/10 cursor-pointer"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                isDarkTheme={isDarkTheme}
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
                isDarkTheme={isDarkTheme}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 3. MOBILE SLIDE-DOWN DRAWER (Clean White Background, Dark Text, Cyan Accents) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] sm:top-[76px] z-[998] backdrop-blur-2xl bg-white/98 border-b border-slate-200/90 text-[#111827] shadow-2xl px-6 py-6 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1.5">
              {NAV_ITEMS_LIST.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div
                      key="Services"
                      className="border-b border-slate-100 pb-2"
                    >
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold text-[#111827] hover:bg-slate-50 transition-colors">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
                          <span>Services Overview</span>
                        </Link>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1.5 rounded-md text-[#00BCD4] hover:bg-[#00BCD4]/10 transition-colors"
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
                            className="overflow-hidden pl-3 pr-1 space-y-3 pt-2"
                          >
                            {/* 1. App & Web Development */}
                            <div className="space-y-1">
                              <Link
                                href="/services/app-web-development"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs font-bold uppercase tracking-wider text-[#00BCD4]"
                              >
                                01. App & Web Development
                              </Link>
                              <div className="pl-2 space-y-1">
                                <Link
                                  href="/services/app-web-development"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-slate-600 hover:text-[#00BCD4]"
                                >
                                  • Mobile & Web Applications
                                </Link>
                                <Link
                                  href="/services/cloud-infrastructure"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-slate-600 hover:text-[#00BCD4]"
                                >
                                  • Cloud Modernization & FinOps
                                </Link>
                              </div>
                            </div>

                            {/* 2. Data Engineering & Analytics */}
                            <div className="space-y-1">
                              <Link
                                href="/services/data-engineering-analytics"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs font-bold uppercase tracking-wider text-[#00BCD4]"
                              >
                                02. Data Engineering & Analytics
                              </Link>
                              <div className="pl-2 space-y-1">
                                <Link
                                  href="/services/data-platforms"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-slate-600 hover:text-[#00BCD4]"
                                >
                                  • Data Platforms & Lakehouses
                                </Link>
                                <Link
                                  href="/services/executive-dashboards"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-slate-600 hover:text-[#00BCD4]"
                                >
                                  • Executive BI & Power BI Cockpits
                                </Link>
                              </div>
                            </div>

                            {/* 3. AI Services & Agents */}
                            <div className="space-y-1">
                              <Link
                                href="/services/ai-services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs font-bold uppercase tracking-wider text-[#00BCD4]"
                              >
                                03. AI Services & Agents
                              </Link>
                              <div className="pl-2 space-y-1">
                                <Link
                                  href="/services/ai-copilots"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-slate-600 hover:text-[#00BCD4]"
                                >
                                  • AI Copilots & Enterprise RAG
                                </Link>
                                <Link
                                  href="/services/ai-services"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-slate-600 hover:text-[#00BCD4]"
                                >
                                  • Autonomous Multi-Agent Swarms
                                </Link>
                              </div>
                            </div>

                            {/* 4. Digital & Social Marketing */}
                            <div className="space-y-1">
                              <Link
                                href="/services/digital-social-marketing"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs font-bold uppercase tracking-wider text-[#00BCD4]"
                              >
                                04. Digital & Social Marketing
                              </Link>
                              <div className="pl-2 space-y-1">
                                <Link
                                  href="/services/digital-social-marketing"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-slate-600 hover:text-[#00BCD4]"
                                >
                                  • Paid Ads & Programmatic SEO
                                </Link>
                                <Link
                                  href="/services/digital-social-marketing"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 text-sm text-slate-600 hover:text-[#00BCD4]"
                                >
                                  • Marketing Analytics & Attribution
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.label === "Industries") {
                  return (
                    <div key="Industries" className="border-b border-slate-100 pb-2">
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold text-[#111827] hover:bg-slate-50 transition-colors">
                        <Link
                          href="/industries"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
                          <span>Industries Overview</span>
                        </Link>
                        <button
                          onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                          className="p-1.5 rounded-md text-[#00BCD4] hover:bg-[#00BCD4]/10 transition-colors"
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
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • Healthcare & Life Sciences
                            </Link>
                            <Link
                              href="/industries"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • FinTech & Banking
                            </Link>
                            <Link
                              href="/industries"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • Logistics & Fleet Telematics
                            </Link>
                            <Link
                              href="/industries"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • SaaS & High-Concurrency
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : item.href === "/blog"
                    ? pathname.startsWith("/blog") || pathname.startsWith("/blogs")
                    : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-base font-bold transition-colors ${
                      isActive
                        ? "text-[#00BCD4] bg-[#00BCD4]/10 font-bold"
                        : "text-[#111827] hover:bg-slate-50 hover:text-[#00BCD4]"
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
                className="w-full py-3.5 rounded-full text-[#06151C] bg-[#00C8E8] hover:bg-[#20d7f5] font-extrabold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
