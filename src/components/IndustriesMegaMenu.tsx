"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingBag,
  Landmark,
  Factory,
  Truck,
  Plane,
  MonitorSmartphone,
  Utensils,
  Film,
  Zap,
  ArrowRight,
} from "lucide-react";

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookAudit?: (scope?: string) => void;
}

interface IndustryItem {
  name: string;
  desc: string;
  href: string;
  icon: React.ElementType;
  emoji: string;
}

const INDUSTRY_COLUMNS: { title: string; items: IndustryItem[] }[] = [
  {
    title: "Healthcare, Public & Commerce",
    items: [
      {
        name: "Healthcare",
        desc: "Clinical data pipelines, HIPAA patient portals & health telemetry",
        href: "/industries#healthcare",
        icon: HeartPulse,
        emoji: "🏥",
      },
      {
        name: "Education",
        desc: "Adaptive learning systems, FERPA portals & student analytics",
        href: "/industries#education",
        icon: GraduationCap,
        emoji: "🎓",
      },
      {
        name: "Real Estate",
        desc: "CRM lead automation, tenant portals & valuation models",
        href: "/industries#realestate",
        icon: Building2,
        emoji: "🏠",
      },
      {
        name: "Ecommerce",
        desc: "Omni-channel storefronts, inventory sync & dynamic pricing",
        href: "/industries#retail",
        icon: ShoppingBag,
        emoji: "🛒",
      },
    ],
  },
  {
    title: "Finance, Supply & Operations",
    items: [
      {
        name: "FinTech",
        desc: "Real-time ledger audit, fraud detection & risk analytics",
        href: "/industries#finance",
        icon: Landmark,
        emoji: "💰",
      },
      {
        name: "Manufacturing",
        desc: "IoT telemetry, predictive maintenance & quality gates",
        href: "/industries#manufacturing",
        icon: Factory,
        emoji: "🏭",
      },
      {
        name: "Logistics",
        desc: "Fleet telematics, route planning & warehouse automation",
        href: "/industries#logistics",
        icon: Truck,
        emoji: "🚚",
      },
      {
        name: "Travel",
        desc: "Booking engines, loyalty platforms & dynamic reservations",
        href: "/industries",
        icon: Plane,
        emoji: "✈️",
      },
    ],
  },
  {
    title: "Technology, Media & Energy",
    items: [
      {
        name: "SaaS & Startups",
        desc: "Multi-tenant platforms, rapid MVP builds & scaling",
        href: "/industries#saas",
        icon: MonitorSmartphone,
        emoji: "📊",
      },
      {
        name: "Food & Restaurant",
        desc: "POS integration, delivery aggregators & order pipelines",
        href: "/industries",
        icon: Utensils,
        emoji: "🍽",
      },
      {
        name: "Media & Entertainment",
        desc: "Streaming infrastructure, digital assets & CMS portals",
        href: "/industries",
        icon: Film,
        emoji: "📱",
      },
      {
        name: "Energy & Utilities",
        desc: "Smart grid telemetry, IoT monitoring & compliance reporting",
        href: "/industries",
        icon: Zap,
        emoji: "⚡",
      },
    ],
  },
];

export function IndustriesMegaMenu({
  isOpen,
  onClose,
  onOpenBookAudit,
}: IndustriesMegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 w-full z-[1000] bg-white border-t border-[rgba(14,165,233,0.12)] border-b border-x border-slate-200/80 rounded-b-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.12)] max-h-[calc(100vh-90px)] overflow-y-auto"
        >
          {/* Main 3-Column Categorized Grid */}
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {INDUSTRY_COLUMNS.map((col, cIdx) => (
                <div key={cIdx} className="space-y-4">
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-sm font-extrabold text-[#082F49] uppercase tracking-wider">
                      {col.title}
                    </h3>
                  </div>

                  {/* Industry Items */}
                  <div className="space-y-1">
                    {col.items.map((item, iIdx) => {
                      const ItemIcon = item.icon;
                      return (
                        <Link
                          key={iIdx}
                          href={item.href}
                          onClick={onClose}
                          className="group p-3 -mx-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 hover:bg-gradient-to-r hover:from-[rgba(6,182,212,0.08)] hover:to-[rgba(14,165,233,0.08)] block"
                        >
                          <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-[#06b6d4] text-[#06b6d4] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors text-base mt-0.5">
                            <span className="group-hover:hidden">{item.emoji}</span>
                            <ItemIcon className="w-4 h-4 hidden group-hover:block text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-bold text-[#12344A] group-hover:text-[#0f4c81] transition-colors block leading-tight">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors block truncate leading-normal mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div
            className="border-t border-slate-200/80 px-6 sm:px-8 py-4 sm:py-5"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,182,212,0.06), rgba(14,165,233,0.06))",
            }}
          >
            <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-sm font-extrabold text-[#082F49]">
                  Looking for industry-specific solutions?
                </h4>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Our domain architects engineer custom platforms tailored to your regulatory and operational requirements.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {onOpenBookAudit ? (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBookAudit("Industry Consultation");
                    }}
                    className="inline-flex items-center gap-2 px-6 h-[40px] rounded-full text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                    style={{
                      background: "linear-gradient(90deg, #0f4c81, #00b7c2)",
                    }}
                  >
                    <span>Schedule Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 h-[40px] rounded-full text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                    style={{
                      background: "linear-gradient(90deg, #0f4c81, #00b7c2)",
                    }}
                  >
                    <span>Schedule Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
