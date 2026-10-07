"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Layers,
  Boxes,
  Palette,
  ShieldCheck,
  Bot,
  Sparkles,
  Database,
  BarChart3,
  LineChart,
  Cloud,
  Workflow,
  Terminal,
  Cpu,
  ArrowRight,
  Zap,
} from "lucide-react";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookAudit?: (scope?: string) => void;
}

interface ServiceLink {
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
}

interface ServiceCategory {
  title: string;
  badge: string;
  items: ServiceLink[];
}

const SERVICE_COLUMNS: ServiceCategory[] = [
  {
    title: "App & Web Development",
    badge: "01 — Engineering",
    items: [
      {
        title: "Mobile App Development",
        desc: "Native iOS & Android high-performance applications",
        href: "/services",
        icon: Smartphone,
      },
      {
        title: "Web & Custom Web Apps",
        desc: "Modern Next.js, React & full-stack web platforms",
        href: "/services",
        icon: Code2,
      },
      {
        title: "SaaS Development",
        desc: "Multi-tenant platforms, RBAC & subscription systems",
        href: "/services",
        icon: Boxes,
      },
      {
        title: "Shopify & WordPress",
        desc: "Custom e-commerce & content management systems",
        href: "/services",
        icon: Layers,
      },
      {
        title: "APIs & Integrations",
        desc: "Third-party APIs, backends & admin panels",
        href: "/services",
        icon: Terminal,
      },
      {
        title: "Maintenance & Support",
        desc: "Proactive security, updates & zero-downtime SLA",
        href: "/services",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Data Engineering & Analytics",
    badge: "02 — Intelligence",
    items: [
      {
        title: "Data Engineering & ETL",
        desc: "Automated lakehouse pipelines & real-time streaming",
        href: "/services",
        icon: Database,
      },
      {
        title: "Data Warehousing",
        desc: "Snowflake, BigQuery & data integration schemas",
        href: "/services",
        icon: Cloud,
      },
      {
        title: "Business Intelligence",
        desc: "Connected data modeling & operational analytics",
        href: "/services",
        icon: BarChart3,
      },
      {
        title: "Power BI Dashboards",
        desc: "Executive command centers & automated DAX reporting",
        href: "/services",
        icon: BarChart3,
      },
      {
        title: "Looker Studio",
        desc: "Visual business analytics & interactive reports",
        href: "/services",
        icon: LineChart,
      },
      {
        title: "Predictive Analytics",
        desc: "Predictive modeling, visualization & automation",
        href: "/services",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "Digital & Social Marketing",
    badge: "03 — Growth",
    items: [
      {
        title: "Social Media Management",
        desc: "End-to-end channel strategy & community engagement",
        href: "/services",
        icon: Bot,
      },
      {
        title: "Content Strategy & Creation",
        desc: "High-impact storytelling & brand narrative assets",
        href: "/services",
        icon: Palette,
      },
      {
        title: "Graphic Design & Copywriting",
        desc: "Conversion-optimized visuals & technical copywriting",
        href: "/services",
        icon: Palette,
      },
      {
        title: "Reels & Short-Form Videos",
        desc: "Engaging video production & viral format editing",
        href: "/services",
        icon: Sparkles,
      },
      {
        title: "Paid Advertising & SEO",
        desc: "Meta, Google Ads & high-ranking organic SEO",
        href: "/services",
        icon: Zap,
      },
      {
        title: "Marketing Analytics",
        desc: "Multi-touch attribution & campaign ROI tracking",
        href: "/services",
        icon: LineChart,
      },
    ],
  },
];

export function ServicesMegaMenu({
  isOpen,
  onClose,
  onOpenBookAudit,
}: ServicesMegaMenuProps) {
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
              {SERVICE_COLUMNS.map((col, cIdx) => (
                <div key={cIdx} className="space-y-4">
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-sm font-extrabold text-[#082F49] uppercase tracking-wider">
                      {col.title}
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ECFEFF] text-[#06b6d4] border border-[#06b6d4]/20">
                      {col.badge}
                    </span>
                  </div>

                  {/* Services List */}
                  <div className="space-y-1">
                    {col.items.map((item, iIdx) => {
                      const ItemIcon = item.icon;
                      return (
                        <Link
                          key={iIdx}
                          href={item.href}
                          onClick={onClose}
                          className="group p-2.5 -mx-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 hover:bg-gradient-to-r hover:from-[rgba(6,182,212,0.08)] hover:to-[rgba(14,165,233,0.08)] block"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#06b6d4] text-[#06b6d4] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-bold text-[#12344A] group-hover:text-[#0f4c81] transition-colors block leading-tight">
                              {item.title}
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
                  Need a custom solution?
                </h4>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Tell us your business goals and our team will recommend the right technology stack.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {onOpenBookAudit ? (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBookAudit("Schedule Strategy Call");
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
