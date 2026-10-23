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
  isDarkTheme?: boolean;
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
          className="absolute top-full left-0 right-0 w-full z-[1000] border-t border-b border-x border-[#E5EAF0] bg-white rounded-b-[16px] max-h-[calc(100vh-90px)] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.12)] text-[#101820] transition-colors duration-200"
        >
          {/* Main 3-Column Categorized Grid */}
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {INDUSTRY_COLUMNS.map((col, cIdx) => (
                <div key={cIdx} className="space-y-4">
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5EAF0]">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#101820]">
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
                          className="group p-3 -mx-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 block border border-transparent hover:bg-[#EBF9FC] hover:border-[#00C8E8]/25"
                        >
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors text-base mt-0.5 bg-[#F7F9FB] border border-[#E5EAF0] text-[#007F9C] group-hover:bg-[#00C8E8] group-hover:text-black group-hover:border-[#00C8E8]">
                            <span className="group-hover:hidden">{item.emoji}</span>
                            <ItemIcon className="w-4 h-4 hidden group-hover:block" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-bold block leading-tight text-[#101820] group-hover:text-[#007F9C] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-xs block truncate leading-normal mt-0.5 text-[#566171] group-hover:text-[#101820] transition-colors">
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
          <div className="border-t border-[#E5EAF0] px-6 sm:px-8 py-4 sm:py-5 bg-[#F7F9FB]">
            <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-sm font-extrabold text-[#101820]">
                  Looking for industry-specific solutions?
                </h4>
                <p className="text-xs font-medium text-[#566171] mt-0.5">
                  Our domain architects engineer custom platforms tailored to your regulatory and operational requirements.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact#contact-hero"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 h-[40px] rounded-full text-black font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-[#00C8E8] hover:bg-[#00B4D2]"
                >
                  <span>Schedule Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
