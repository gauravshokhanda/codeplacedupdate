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
    title: "Development Services",
    badge: "Full-Stack",
    items: [
      {
        title: "Web Development",
        desc: "Modern Next.js, React & high-performance web apps",
        href: "/services",
        icon: Code2,
      },
      {
        title: "Mobile App Development",
        desc: "iOS, Android, React Native & Flutter applications",
        href: "/services",
        icon: Smartphone,
      },
      {
        title: "Full Stack Development",
        desc: "End-to-end frontend, backend & database systems",
        href: "/services",
        icon: Layers,
      },
      {
        title: "SaaS Development",
        desc: "Multi-tenant platforms, RBAC & subscription systems",
        href: "/services",
        icon: Boxes,
      },
      {
        title: "UI/UX Design",
        desc: "User research, wireframes & design systems",
        href: "/services",
        icon: Palette,
      },
      {
        title: "QA & Testing",
        desc: "Automated test suites, security & performance audits",
        href: "/services",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "AI & Data",
    badge: "Intelligence",
    items: [
      {
        title: "AI Agents",
        desc: "Autonomous workflow solvers & agent swarms",
        href: "/services/ai-copilots",
        icon: Bot,
      },
      {
        title: "Generative AI",
        desc: "Custom LLMs, fine-tuning & prompt architectures",
        href: "/services/ai-copilots",
        icon: Sparkles,
      },
      {
        title: "RAG Systems",
        desc: "Private domain retrieval & vector search engines",
        href: "/services/ai-copilots",
        icon: Cpu,
      },
      {
        title: "Data Engineering",
        desc: "Lakehouse pipelines, dbt transforms & Kafka streaming",
        href: "/services/data-platforms",
        icon: Database,
      },
      {
        title: "Power BI Dashboards",
        desc: "Executive command centers & automated DAX reporting",
        href: "/services/executive-dashboards",
        icon: BarChart3,
      },
      {
        title: "Looker Studio",
        desc: "Visual business analytics & embedded customer reports",
        href: "/services/embedded-analytics",
        icon: LineChart,
      },
    ],
  },
  {
    title: "Cloud & Enterprise",
    badge: "Scale & Infra",
    items: [
      {
        title: "AWS Solutions",
        desc: "Cloud-native architectures, Lambda, ECS & S3",
        href: "/services/cloud-infrastructure",
        icon: Cloud,
      },
      {
        title: "Azure Solutions",
        desc: "Microsoft cloud systems, Fabric & Entra security",
        href: "/services/cloud-infrastructure",
        icon: Cloud,
      },
      {
        title: "DevOps",
        desc: "CI/CD pipelines, GitHub Actions & Terraform IaC",
        href: "/services/cloud-infrastructure",
        icon: Workflow,
      },
      {
        title: "Kubernetes",
        desc: "Container orchestration & autoscaling clusters",
        href: "/services/cloud-infrastructure",
        icon: Boxes,
      },
      {
        title: "API Development",
        desc: "Secure RESTful & GraphQL microservices at scale",
        href: "/services",
        icon: Terminal,
      },
      {
        title: "Enterprise Automation",
        desc: "Zero-touch operational processes & ERP workflows",
        href: "/services/ai-copilots",
        icon: Zap,
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
