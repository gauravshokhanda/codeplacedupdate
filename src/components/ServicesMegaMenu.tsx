"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  BrainCircuit,
  BarChart3,
  Code2,
  Cloud,
  Workflow,
  Layers,
  ShieldCheck,
  Sparkles,
  Search,
  Bot,
  Cpu,
  LayoutGrid,
  TrendingUp,
  Activity,
  Globe,
  Wrench,
  Users,
  CloudCog,
  Terminal,
  LineChart,
  Lock,
  PhoneCall,
  MessageSquareText,
  FileText,
  Building2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export interface MegaMenuCategory {
  id: string;
  name: string;
  tagline: string;
  href: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  services: {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
  }[];
}

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    id: "data-platforms",
    name: "Data Platforms",
    tagline: "Lakehouses & Streaming",
    href: "/services/data-platforms",
    icon: Database,
    headline: "Data Platforms & Pipelines",
    description: "Build robust, fault-tolerant data foundations engineered for high concurrency and petabyte scale.",
    services: [
      {
        title: "Data Platform & Pipelines",
        description: "Build reliable data foundations for scale",
        href: "/services/data-platforms",
        icon: Workflow,
      },
      {
        title: "Data Warehousing",
        description: "Modern cloud warehouses and lakehouses",
        href: "/services/data-platforms",
        icon: Database,
      },
      {
        title: "Data Integration",
        description: "Connect all business systems",
        href: "/services/data-platforms",
        icon: Layers,
      },
      {
        title: "Data Governance",
        description: "Secure and compliant data operations",
        href: "/services/data-platforms",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "ai-copilots",
    name: "AI & Copilots",
    tagline: "LLMs & Agent Swarms",
    href: "/services/ai-copilots",
    icon: BrainCircuit,
    headline: "AI & Autonomous Copilots",
    description: "Deploy private domain LLMs, high-accuracy RAG engines, and self-healing agentic workflows.",
    services: [
      {
        title: "AI Copilots",
        description: "Business-specific AI assistants",
        href: "/services/ai-copilots",
        icon: Sparkles,
      },
      {
        title: "RAG Systems",
        description: "Enterprise knowledge search",
        href: "/services/ai-copilots",
        icon: Search,
      },
      {
        title: "Agentic Workflows",
        description: "Autonomous business automation",
        href: "/services/ai-copilots",
        icon: Bot,
      },
      {
        title: "AI Infrastructure",
        description: "Scalable AI deployment environments",
        href: "/services/ai-copilots",
        icon: Cpu,
      },
    ],
  },
  {
    id: "executive-dashboards",
    name: "Analytics & BI",
    tagline: "Executive Telemetry",
    href: "/services/executive-dashboards",
    icon: BarChart3,
    headline: "Executive Dashboards & BI",
    description: "Transform complex data lakes into intuitive, sub-second dashboards for C-suite and investor visibility.",
    services: [
      {
        title: "Executive Dashboards",
        description: "KPI tracking and executive reporting",
        href: "/services/executive-dashboards",
        icon: BarChart3,
      },
      {
        title: "Embedded Analytics",
        description: "White-label customer SaaS views",
        href: "/services/embedded-analytics",
        icon: LayoutGrid,
      },
      {
        title: "Marketing Analytics",
        description: "Campaign intelligence and attribution",
        href: "/services/executive-dashboards",
        icon: TrendingUp,
      },
      {
        title: "Operational Analytics",
        description: "Real-time business visibility",
        href: "/services/executive-dashboards",
        icon: Activity,
      },
    ],
  },
  {
    id: "embedded-analytics",
    name: "Embedded Analytics",
    tagline: "Customer SaaS Views",
    href: "/services/embedded-analytics",
    icon: LayoutGrid,
    headline: "Embedded Customer Analytics",
    description: "Native white-labeled charts and high-density multi-tenant reporting embedded inside your software.",
    services: [
      {
        title: "Embedded Customer Portals",
        description: "Secure multi-tenant customer analytics",
        href: "/services/embedded-analytics",
        icon: Globe,
      },
      {
        title: "Live Billing Attribution",
        description: "Stripe & billing telemetry embedded views",
        href: "/services/embedded-analytics",
        icon: TrendingUp,
      },
      {
        title: "Role-Based Data Access",
        description: "Granular tenant row-level security",
        href: "/services/embedded-analytics",
        icon: ShieldCheck,
      },
      {
        title: "Export & Automated Reporting",
        description: "Automated PDF and data export daemons",
        href: "/services/embedded-analytics",
        icon: FileText,
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    tagline: "DevOps & FinOps Tuning",
    href: "/services/cloud-infrastructure",
    icon: Cloud,
    headline: "Cloud & Reliability Engineering",
    description: "Modernize infrastructure, automate deployment pipelines, and reduce cloud expenditure by 30-50%.",
    services: [
      {
        title: "Cloud Migration",
        description: "Zero-downtime database & app migration",
        href: "/services/cloud-infrastructure",
        icon: CloudCog,
      },
      {
        title: "DevOps Automation",
        description: "Infrastructure as code & automated CI/CD",
        href: "/services/cloud-infrastructure",
        icon: Terminal,
      },
      {
        title: "Monitoring & Observability",
        description: "End-to-end telemetry and APM",
        href: "/services/cloud-infrastructure",
        icon: LineChart,
      },
      {
        title: "Security Engineering",
        description: "SOC2, HIPAA & ISO 27001 hardening",
        href: "/services/cloud-infrastructure",
        icon: Lock,
      },
    ],
  },
];

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookAudit?: (scope?: string) => void;
}

export function ServicesMegaMenu({
  isOpen,
  onClose,
  onOpenBookAudit,
}: ServicesMegaMenuProps) {
  const [activeCategoryId, setActiveCategoryId] = useState("data-platforms");

  const activeCategory =
    MEGA_MENU_CATEGORIES.find((c) => c.id === activeCategoryId) ||
    MEGA_MENU_CATEGORIES[0];

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
            {/* LEFT COLUMN: Category Navigation (270px) */}
            <div className="col-span-3 bg-[#F8FAFC] border-r border-slate-200/80 p-4 space-y-1 flex flex-col justify-between">
              <div>
                <div className="px-3 pt-2 pb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Service Domains
                </div>

                <div className="space-y-1">
                  {MEGA_MENU_CATEGORIES.map((category) => {
                    const isActive = category.id === activeCategoryId;
                    const IconComponent = category.icon;

                    return (
                      <Link
                        key={category.id}
                        href={category.href}
                        onClick={onClose}
                        onMouseEnter={() => setActiveCategoryId(category.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-150 flex items-center justify-between group ${
                          isActive
                            ? "bg-[#ECFEFF] border-l-4 border-[#0B4F6C] text-[#082F49] font-bold shadow-2xs"
                            : "hover:bg-[#F1F5F9] text-slate-600 border-l-4 border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                              isActive
                                ? "bg-[#0B4F6C] text-white"
                                : "bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] group-hover:bg-[#0B4F6C] group-hover:text-white"
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold leading-tight">
                              {category.name}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">
                              {category.tagline}
                            </div>
                          </div>
                        </div>

                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isActive
                              ? "text-[#0B4F6C] translate-x-0.5"
                              : "text-slate-300 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* View All Services Overview Link */}
              <div className="pt-2 border-t border-slate-200/60">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#0B4F6C] text-[#082F49] hover:text-white text-xs font-bold border border-slate-200 flex items-center justify-between transition-colors shadow-2xs group"
                >
                  <span>All Services Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* CENTER COLUMN: Service Directory (2 Columns) */}
            <div className="col-span-6 p-6 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-5"
                >
                  {/* Category Header with Enterprise Label */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0E7490] block mb-0.5">
                        SOLUTIONS BUILT FOR SCALE
                      </span>
                      <h3 className="text-lg font-black text-[#082F49] tracking-tight">
                        {activeCategory.headline}
                      </h3>
                    </div>

                    <Link
                      href={activeCategory.href}
                      onClick={onClose}
                      className="text-xs font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1 group"
                    >
                      <span>Explore Page</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* 2 x 2 Service Cards -> Direct Route Navigation */}
                  <div className="grid grid-cols-2 gap-3.5">
                    {activeCategory.services.map((service) => {
                      const ServiceIcon = service.icon;

                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={onClose}
                          className="p-4 rounded-[14px] bg-[#F8FAFC] hover:bg-[#ECFEFF]/60 border border-slate-200/60 hover:border-[#0B4F6C]/40 transition-all duration-200 cursor-pointer group flex flex-col justify-between hover:translate-x-1 shadow-2xs hover:shadow-sm"
                        >
                          <div>
                            {/* Icon Container: 40px, radius 10px */}
                            <div className="w-10 h-10 rounded-[10px] bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center mb-3 group-hover:bg-[#0B4F6C] group-hover:text-white transition-all duration-200 shadow-2xs">
                              <ServiceIcon className="w-4 h-4" />
                            </div>

                            <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#0B4F6C] transition-colors leading-snug">
                              {service.title}
                            </h4>

                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Quick Row */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">
                  Fixed-scope enterprise deployments in 2–4 weeks.
                </span>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1 group text-xs"
                >
                  <span>Request Scoping Call</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Quick Links Panel (260px) */}
            <div className="col-span-3 bg-[#F8FAFC] border-l border-slate-200/80 p-4 flex flex-col justify-between">
              <div>
                <div className="px-2 pt-1 pb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Quick Actions
                </div>

                <div className="space-y-2.5">
                  {/* Item 1: Schedule a Call */}
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="p-3.5 rounded-[14px] bg-white hover:bg-white border border-slate-200/80 hover:border-[#0B4F6C]/30 shadow-2xs hover:shadow-[0_10px_25px_rgba(2,6,23,0.06)] cursor-pointer transition-all duration-200 group block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                          Schedule a Call
                        </h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          Book a 30-min discovery session
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Item 2: Contact Us */}
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="p-3.5 rounded-[14px] bg-white hover:bg-white border border-slate-200/80 hover:border-[#0B4F6C]/30 shadow-2xs hover:shadow-[0_10px_25px_rgba(2,6,23,0.06)] cursor-pointer transition-all duration-200 group block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                        <MessageSquareText className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                          Contact Us
                        </h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          Let&apos;s discuss your project
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Item 3: View Case Studies */}
                  <Link
                    href="/case-studies"
                    onClick={onClose}
                    className="p-3.5 rounded-[14px] bg-white hover:bg-white border border-slate-200/80 hover:border-[#0B4F6C]/30 shadow-2xs hover:shadow-[0_10px_25px_rgba(2,6,23,0.06)] cursor-pointer transition-all duration-200 group block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                          View Case Studies
                        </h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          See verified client outcomes
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Item 4: About CodePlaced */}
                  <Link
                    href="/about"
                    onClick={onClose}
                    className="p-3.5 rounded-[14px] bg-white hover:bg-white border border-slate-200/80 hover:border-[#0B4F6C]/30 shadow-2xs hover:shadow-[0_10px_25px_rgba(2,6,23,0.06)] cursor-pointer transition-all duration-200 group block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                          About CodePlaced
                        </h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          Our team & 15+ yr track record
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Bottom Support Badge */}
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
