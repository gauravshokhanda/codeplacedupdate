"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { CodePlacedLogo } from "./CodePlacedLogo";
import { NAV_ITEMS } from "@/lib/data";
import { ServicesMegaMenu, MEGA_MENU_CATEGORIES } from "./ServicesMegaMenu";
import { IndustriesMegaMenu, INDUSTRIES_MENU_ITEMS } from "./IndustriesMegaMenu";

interface HeaderProps {
  onOpenBookAudit?: (scope?: string) => void;
}

export function Header({ onOpenBookAudit }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mega menu states
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileActiveCat, setMobileActiveCat] = useState<string | null>("data-platforms");

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-[60px] flex items-center ${
          isScrolled
            ? "glass-nav shadow-sm bg-white/95"
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/60"
        }`}
      >
        <div className="site-container flex items-center justify-between w-full relative">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <CodePlacedLogo size="sm" variant="dark" />
          </Link>

          {/* Desktop Navigation: Centered with hover underline animation & Mega Menu */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
            {NAV_ITEMS.map((item) => {
              const isServices = item.label === "Services";
              const isIndustries = item.label === "Industries";
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
                      className={`relative px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 group inline-flex items-center gap-1 ${
                        megaMenuOpen || isActive
                          ? "text-[#0B4F6C] bg-white shadow-2xs font-bold"
                          : "text-slate-600 hover:text-[#0B4F6C] hover:bg-white/60"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenuOpen
                            ? "rotate-180 text-[#0B4F6C]"
                            : "text-slate-400 group-hover:text-[#0B4F6C]"
                        }`}
                      />
                      {/* Underline hover line */}
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#0B4F6C] transition-transform duration-200 origin-center ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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
                      className={`relative px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 group inline-flex items-center gap-1 ${
                        industriesMenuOpen || isActive
                          ? "text-[#0B4F6C] bg-white shadow-2xs font-bold"
                          : "text-slate-600 hover:text-[#0B4F6C] hover:bg-white/60"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          industriesMenuOpen
                            ? "rotate-180 text-[#0B4F6C]"
                            : "text-slate-400 group-hover:text-[#0B4F6C]"
                        }`}
                      />
                      {/* Underline hover line */}
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#0B4F6C] transition-transform duration-200 origin-center ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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
                  className={`relative px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 group ${
                    isActive
                      ? "text-[#0B4F6C] bg-white shadow-2xs font-bold"
                      : "text-slate-600 hover:text-[#0B4F6C] hover:bg-white/60"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-[#0B4F6C] text-white leading-tight">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {/* Subtle underline hover line */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#0B4F6C] transition-transform duration-200 origin-center ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mega Menu Dropdown Container */}
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

          {/* Industries Mega Menu Dropdown Container */}
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

          {/* Right Side CTA Button */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 h-9 rounded-full bg-[#0F172A] hover:bg-[#0B4F6C] text-white font-bold text-xs tracking-wide transition-all duration-200 shadow-sm active:scale-95 border border-slate-700 hover:border-[#0B4F6C]"
            >
              <span>Schedule Call</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="sm:hidden px-3 py-1 rounded-full bg-[#0F172A] text-white text-xs font-bold"
            >
              Call
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Accordion for Services */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] max-h-[85vh] overflow-y-auto z-30 bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-5 py-6 lg:hidden"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key="Services" className="border-b border-slate-100 pb-2">
                      <div className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#082F49] hover:bg-slate-50 transition-colors">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#0B4F6C]" />
                          <span>Services Overview</span>
                        </Link>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1 rounded-md text-[#0B4F6C]"
                          aria-label="Toggle Services categories"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform text-[#0B4F6C] ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expanded Mobile Services Accordion */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-2 pr-1 pt-2 space-y-2.5"
                          >
                            {MEGA_MENU_CATEGORIES.map((cat) => {
                              const isCatOpen = mobileActiveCat === cat.id;
                              const CatIcon = cat.icon;

                              return (
                                <div
                                  key={cat.id}
                                  className="rounded-xl border border-slate-200/80 bg-[#F8FAFC] overflow-hidden"
                                >
                                  <div className="flex items-center justify-between p-3 text-xs font-bold text-[#082F49]">
                                    <Link
                                      href={cat.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center gap-2.5 flex-1"
                                    >
                                      <div className="w-7 h-7 rounded-lg bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center">
                                        <CatIcon className="w-3.5 h-3.5" />
                                      </div>
                                      <span>{cat.name}</span>
                                    </Link>
                                    <button
                                      onClick={() =>
                                        setMobileActiveCat(isCatOpen ? null : cat.id)
                                      }
                                      className="p-1 text-slate-400"
                                    >
                                      <ChevronDown
                                        className={`w-3.5 h-3.5 transition-transform ${
                                          isCatOpen ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>
                                  </div>

                                  {isCatOpen && (
                                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-200/60 bg-white">
                                      {cat.services.map((svc) => (
                                        <Link
                                          key={svc.title}
                                          href={svc.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="w-full text-left p-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#0B4F6C] hover:bg-[#ECFEFF]/60 flex items-center justify-between group"
                                        >
                                          <div>
                                            <div className="font-bold text-[#082F49] group-hover:text-[#0B4F6C]">
                                              {svc.title}
                                            </div>
                                            <div className="text-[10px] text-slate-500">
                                              {svc.description}
                                            </div>
                                          </div>
                                          <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#0B4F6C] group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.label === "Industries") {
                  return (
                    <div key="Industries" className="border-b border-slate-100 pb-2">
                      <div className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#082F49] hover:bg-slate-50 transition-colors">
                        <Link
                          href="/industries"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
                          <span>Industries Overview</span>
                        </Link>
                        <button
                          onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                          className="p-1 rounded-md text-[#0B4F6C]"
                          aria-label="Toggle Industries list"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform text-[#0B4F6C] ${
                              mobileIndustriesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expanded Mobile Industries List */}
                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-2 pr-1 pt-2 space-y-1.5"
                          >
                            <div className="grid grid-cols-1 gap-1.5">
                              {INDUSTRIES_MENU_ITEMS.map((ind) => {
                                const IndIcon = ind.icon;
                                return (
                                  <Link
                                    key={ind.id}
                                    href={ind.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2.5 rounded-xl border border-slate-200/80 bg-[#F8FAFC] hover:bg-[#ECFEFF]/60 flex items-center justify-between group transition-colors"
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <div className="w-7 h-7 rounded-lg bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center flex-shrink-0">
                                        <IndIcon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-xs font-bold text-[#082F49] group-hover:text-[#0B4F6C] truncate">
                                          {ind.name}
                                        </div>
                                        <div className="text-[10px] text-slate-500 truncate">
                                          {ind.badge}
                                        </div>
                                      </div>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0B4F6C] group-hover:translate-x-0.5 transition-transform" />
                                  </Link>
                                );
                              })}
                            </div>
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
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#ECFEFF] text-[#0B4F6C] font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0B4F6C]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#0B4F6C]/10 text-[#0B4F6C]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F172A] hover:bg-[#0B4F6C] text-white font-bold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                Schedule Audit Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
