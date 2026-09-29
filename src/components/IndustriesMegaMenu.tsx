"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Truck,
  ShoppingBag,
  Building2,
  GraduationCap,
  Factory,
  ShieldCheck,
  Plane,
  Radio,
  Zap,
  Building,
  ArrowRight,
  Sparkles,
  PhoneCall,
  FileText,
  Workflow,
  ChevronRight,
} from "lucide-react";

export interface IndustryMenuItem {
  id: string;
  name: string;
  desc: string;
  href: string;
  icon: React.ElementType;
  badge: string;
}

export const INDUSTRIES_MENU_ITEMS: IndustryMenuItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    desc: "HIPAA Clinical Triage & EHR Lakehouses",
    href: "/industries#healthcare",
    icon: HeartPulse,
    badge: "HIPAA Ready",
  },
  {
    id: "fintech",
    name: "Finance & FinTech",
    desc: "Real-time Ledger Reconciliations & SEC Audits",
    href: "/industries#finance",
    icon: Landmark,
    badge: "SOC 2 Ready",
  },
  {
    id: "saas",
    name: "SaaS & Technology",
    desc: "Embedded Analytics & In-App AI Copilots",
    href: "/industries#saas",
    icon: MonitorSmartphone,
    badge: "Multi-Tenant",
  },
  {
    id: "retail",
    name: "Retail & Commerce",
    desc: "Multi-Touch ROAS & Dynamic Pricing ML",
    href: "/industries#retail",
    icon: ShoppingBag,
    badge: "ROAS ML",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    desc: "Fleet Telematics & Route Optimization",
    href: "/industries#logistics",
    icon: Truck,
    badge: "Sub-25ms GPS",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    desc: "Sensor Streaming & Predictive Downtime",
    href: "/industries#manufacturing",
    icon: Factory,
    badge: "Industry 4.0",
  },
  {
    id: "education",
    name: "Education & EdTech",
    desc: "Adaptive Learning & Student Retention BI",
    href: "/industries#education",
    icon: GraduationCap,
    badge: "FERPA Ready",
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    desc: "Lease OCR & Portfolio Valuation ML",
    href: "/industries#realestate",
    icon: Building2,
    badge: "Doc AI",
  },
  {
    id: "insurance",
    name: "Insurance & Underwriting",
    desc: "Claims Triage OCR & Actuarial Risk Models",
    href: "/industries#insurance",
    icon: ShieldCheck,
    badge: "Risk AI",
  },
  {
    id: "hospitality",
    name: "Hospitality & Travel",
    desc: "Dynamic Yield Management & RevPAR BI",
    href: "/industries#hospitality",
    icon: Plane,
    badge: "Yield ML",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    desc: "Smart Meter Kafka Streams & Grid Load ML",
    href: "/industries#energy",
    icon: Zap,
    badge: "Grid Analytics",
  },
  {
    id: "public-sector",
    name: "Public Sector & Gov",
    desc: "FedRAMP Data Environments & Citizen Portals",
    href: "/industries#government",
    icon: Building,
    badge: "FedRAMP Ready",
  },
];

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookAudit?: (scope?: string) => void;
}

export function IndustriesMegaMenu({
  isOpen,
  onClose,
  onOpenBookAudit,
}: IndustriesMegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => {}}
          onMouseLeave={onClose}
          className="absolute top-[54px] left-1/2 -translate-x-1/2 w-[1140px] max-w-[92vw] bg-white rounded-[24px] border border-slate-200 shadow-[0_25px_80px_rgba(2,6,23,0.12)] overflow-hidden z-50 text-slate-900"
        >
          <div className="grid grid-cols-12 min-h-[440px]">
            {/* LEFT 9 COLUMNS: 3x4 Grid of 12 Major Industries */}
            <div className="col-span-9 p-6 flex flex-col justify-between border-r border-slate-200/80">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E7490] block mb-0.5">
                      MISSION-CRITICAL DOMAINS
                    </span>
                    <h3 className="text-lg font-black text-[#082F49] tracking-tight">
                      Industry Solutions & Architecture Blueprints
                    </h3>
                  </div>

                  <Link
                    href="/industries"
                    onClick={onClose}
                    className="text-xs font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1 group"
                  >
                    <span>View All Industries Hub</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 3 Columns x 4 Rows = 12 Industries */}
                <div className="grid grid-cols-3 gap-3">
                  {INDUSTRIES_MENU_ITEMS.map((ind) => {
                    const IndIcon = ind.icon;
                    return (
                      <Link
                        key={ind.id}
                        href={ind.href}
                        onClick={onClose}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#ECFEFF]/60 border border-slate-200/70 hover:border-[#0B4F6C]/40 transition-all duration-200 group flex items-start gap-3 shadow-2xs hover:shadow-xs"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                          <IndIcon className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-xs font-bold text-[#082F49] group-hover:text-[#0B4F6C] truncate">
                              {ind.name}
                            </h4>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-tight line-clamp-1">
                            {ind.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Trust Ribbon in Mega Menu */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-2 text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" />
                  <span>Battle-tested architecture blueprints delivered in 2–4 week sprints.</span>
                </span>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1 group text-xs"
                >
                  <span>Schedule Domain Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT 3 COLUMNS: Quick Domain Actions & Blueprint Downloads */}
            <div className="col-span-3 bg-[#F8FAFC] p-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Featured Blueprint
                </div>

                {/* Featured Card */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Live Case Study
                  </span>
                  <h5 className="text-xs font-bold text-[#082F49] leading-snug">
                    Healthcare Clinical Triage & EHR Lakehouse
                  </h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    How MedHealth cut patient intake time by 4.8x with zero hallucinations.
                  </p>
                  <Link
                    href="/case-studies"
                    onClick={onClose}
                    className="text-xs font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1 pt-1"
                  >
                    <span>Read Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Quick Action: Book Call */}
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="p-3.5 rounded-xl bg-white hover:bg-white border border-slate-200/80 hover:border-[#0B4F6C]/30 shadow-2xs cursor-pointer transition-all duration-200 group block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                        Book Domain Review
                      </h6>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        30-min architecture session
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Security Badge */}
              <div className="pt-3 border-t border-slate-200/70 text-center">
                <span className="text-[10px] font-semibold text-slate-400">
                  NDA Signed Upfront • SOC2 Ready
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
