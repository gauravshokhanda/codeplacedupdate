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
import { ServicesMegaMenu, SERVICE_COLUMNS } from "./ServicesMegaMenu";
import { IndustriesMegaMenu } from "./IndustriesMegaMenu";
import { SHOW_INDUSTRIES } from "@/lib/featureFlags";

interface HeaderProps {
  onOpenBookAudit?: (scope?: string) => void;
}

const NAV_ITEMS_LIST = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: "services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries", hasDropdown: "industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const VISIBLE_NAV_ITEMS = NAV_ITEMS_LIST.filter(
  (item) => SHOW_INDUSTRIES || item.hasDropdown !== "industries"
);

export function Header({ onOpenBookAudit }: HeaderProps) {
  const pathname = usePathname();
  const [showSticky, setShowSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mega menu states
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
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

  // Close menus on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setIndustriesMenuOpen(false);
  }, [pathname]);

  // Dismiss menus on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMegaMenuOpen(false);
        setIndustriesMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
        setIndustriesMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  // Global unified dark navbar across all routes with seamless #050505 canvas
  const isDarkTheme = true;

  // Shared Navigation Links component (Centered)
  const renderNavLinks = () => (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
      {VISIBLE_NAV_ITEMS.map((item) => {
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

        const linkColorClass = isActive
          ? "text-[#00BCD4] font-bold"
          : "text-white hover:text-[#00BCD4] transition-colors";

        const chevronColorClass = megaMenuOpen
          ? "rotate-180 text-[#00BCD4]"
          : "text-white/80 group-hover:text-[#00BCD4] transition-colors";

        const underlineBg = "bg-[#00BCD4]";

        if (isServices) {
          return (
            <div
              key={item.label}
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
              className="relative flex items-center"
            >
              <Link
                href="/services"
                onClick={() => setMegaMenuOpen(false)}
                className={`relative pl-3.5 pr-1 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-200 group inline-flex items-center ${linkColorClass}`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-3.5 right-1 h-[2px] ${underlineBg} transition-transform duration-300 origin-center ${
                    isActive && !megaMenuOpen
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMegaMenuOpen((prev) => !prev)}
                aria-label="Toggle Services menu"
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
                className="p-1.5 pr-2.5 rounded-md text-white/80 hover:text-[#00BCD4] transition-colors cursor-pointer"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${chevronColorClass}`}
                />
              </button>
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
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    industriesMenuOpen ? "rotate-180 text-[#00BCD4]" : "text-white/80 group-hover:text-[#00BCD4] transition-colors"
                  }`}
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
  // Navigates to /contact#contact-hero, or smooth-scrolls if already on the contact page
  const handleStrategyCallClick = (e: React.MouseEvent) => {
    if (pathname === "/contact") {
      e.preventDefault();
      const hero = document.getElementById("contact-hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderCtaButton = () => (
    <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
      <Link
        href="/contact#contact-hero"
        onClick={handleStrategyCallClick}
        className="inline-flex items-center justify-center gap-1.5 px-6 h-[42px] rounded-full text-[#050A0E] bg-[#06B6D4] hover:bg-[#22D3EE] font-extrabold text-sm tracking-tight transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.28)] hover:shadow-[0_0_28px_rgba(6,182,212,0.48)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
      >
        <span>Send an Inquiry</span>
        <ArrowRight className="w-4 h-4 ml-0.5" />
      </Link>
    </div>
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. UNIFIED FIXED NAVBAR — OBSIDIAN #070B0E AT ALL SCROLL POSITIONS */}
      {/* ========================================================================= */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 bg-[#070B0E]/92 backdrop-blur-xl border-b border-white/[0.08] ${
          showSticky ? "shadow-lg shadow-black/70" : ""
        }`}
      >
        {/* Main Navbar */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] sm:h-[80px] flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] gap-3">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0 justify-self-start">
            <CodePlacedLogo size="md" variant="light" />
          </Link>

          {/* Navigation Links (Centered) */}
          <div className="hidden lg:flex justify-center justify-self-center">
            {renderNavLinks()}
          </div>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 justify-self-end flex-shrink-0">
            {renderCtaButton()}

            {/* Mobile Menu Toggle (Clean Hamburger on Right) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                className="p-2.5 rounded-xl transition-colors text-white hover:text-[#00C8E8] hover:bg-white/10 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdowns (Attached directly to navbar) */}
        <div
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
        >
          <ServicesMegaMenu
            isOpen={megaMenuOpen}
            onClose={() => setMegaMenuOpen(false)}
            onOpenBookAudit={onOpenBookAudit}
            isDarkTheme={true}
          />
        </div>

        {SHOW_INDUSTRIES && (
          <div
            onMouseEnter={handleMouseEnterIndustries}
            onMouseLeave={handleMouseLeaveIndustries}
          >
            <IndustriesMegaMenu
              isOpen={industriesMenuOpen}
              onClose={() => setIndustriesMenuOpen(false)}
              onOpenBookAudit={onOpenBookAudit}
              isDarkTheme={true}
            />
          </div>
        )}
      </header>

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
            className="fixed inset-x-0 top-[76px] sm:top-[80px] z-[998] backdrop-blur-2xl bg-white/98 border-b border-slate-200/90 text-[#111827] shadow-2xl px-6 py-6 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1.5">
              {VISIBLE_NAV_ITEMS.map((item) => {
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
                            {SERVICE_COLUMNS.map((col) => (
                              <div key={col.title} className="space-y-1">
                                <Link
                                  href={col.categoryHref}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-xs font-bold uppercase tracking-wider text-[#00BCD4] hover:text-[#00C8E8] transition-colors"
                                >
                                  {col.title}
                                </Link>
                                <div className="pl-2 space-y-1">
                                  {col.items.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-[#00BCD4] transition-colors"
                                    >
                                      • {item.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
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
                              href="/industries#ecommerce"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • Ecommerce (D2C, B2B & B2C)
                            </Link>
                            <Link
                              href="/industries#edtech"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • EdTech
                            </Link>
                            <Link
                              href="/industries#insurance"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • Insurance
                            </Link>
                            <Link
                              href="/industries#human-resources"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • Human Resources
                            </Link>
                            <Link
                              href="/industries#healthcare"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • Healthcare
                            </Link>
                            <Link
                              href="/industries#real-estate"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm font-semibold text-slate-600 hover:text-[#00BCD4]"
                            >
                              • Real Estate
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
                href="/contact#contact-hero"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleStrategyCallClick(e);
                }}
                className="w-full py-3.5 rounded-full text-[#06151C] bg-[#00C8E8] hover:bg-[#20d7f5] font-extrabold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Send an Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
