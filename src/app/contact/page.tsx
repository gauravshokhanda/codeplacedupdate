"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Lock,
  Star,
  Database,
  Cpu,
  Cloud,
  Code2,
  Layers,
  ChevronDown,
  Check,
  Send,
  HelpCircle,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import confetti from "canvas-confetti";

// =========================================================================
// OFFICIAL ENTERPRISE PLATFORM LOGOS
// =========================================================================

const GoogleCloudBrandLogo = () => (
  <div className="flex items-center gap-2.5 select-none" aria-label="Google Cloud">
    <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        fill="#4285F4"
      />
      <path
        d="M19 14h-6v6h6c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96-.35.96-.75 2.16-1.35 2.96.6.6 1 1.2 1 2z"
        fill="#34A853"
      />
      <path
        d="M12 4c2.2 0 4.1 1 5.3 2.6l-3.3 3.3C13.4 9.3 12.7 9 12 9c-1.7 0-3.2 1.1-3.7 2.7l-3.5-2.7C6.1 6.2 8.8 4 12 4z"
        fill="#EA4335"
      />
      <path
        d="M4.8 9C4.3 9.9 4 10.9 4 12c0 1.1.3 2.1.8 3l3.5-2.7C8.2 12 8 11.5 8 11s.2-1 .3-1.3L4.8 9z"
        fill="#FBBC05"
      />
    </svg>
    <span className="text-sm sm:text-base font-semibold tracking-tight text-white whitespace-nowrap">
      Google Cloud
    </span>
  </div>
);

const MicrosoftAzureBrandLogo = () => (
  <div className="flex items-center gap-2.5 select-none" aria-label="Microsoft Azure">
    <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <path
        d="M53.8 9.6L16.2 73.1a3.6 3.6 0 0 0 3.1 5.4h24.2a3.6 3.6 0 0 0 3.1-1.8l6.7-11.8 17.6 11.9a3.6 3.6 0 0 0 2 0.6H89a3.6 3.6 0 0 0 3-5.5L59.9 11.5a3.6 3.6 0 0 0-6.1-1.9z"
        fill="#0089D6"
      />
      <path
        d="M53.8 9.6a3.6 3.6 0 0 0-3.1 1.8L16.2 73.1a3.6 3.6 0 0 0 3.1 5.4h24.2a3.6 3.6 0 0 0 3.1-1.8l7.2-12.5-9.3-24.9 9.9-29.7z"
        fill="#39B5FF"
      />
    </svg>
    <span className="text-sm sm:text-base font-semibold tracking-tight text-white whitespace-nowrap">
      Microsoft Azure
    </span>
  </div>
);

const AwsBrandLogo = () => (
  <div className="flex items-center select-none" aria-label="AWS">
    <svg className="w-14 h-8 sm:w-16 sm:h-9 shrink-0" viewBox="0 0 75 45" fill="none" aria-hidden="true">
      <path
        d="M18.3 14.5c-.3-1.8-1.5-3.3-3.9-3.3-3.1 0-4.6 2.4-4.6 5.8 0 4.1 2 5.9 4.7 5.9 2 0 3.2-1.3 3.7-2.7h3.4c-.6 3.1-2.9 5.5-7.1 5.5-4.9 0-8.2-3.4-8.2-8.7 0-5.1 3.4-8.7 8.1-8.7 4.1 0 6.6 2.5 7.1 6.2h-3.2zm11.3 10.9h-3.3l-5.6-16.8h3.5l3.8 12.3 3.7-12.3h3.5l-5.6 16.8zm17-1.1c-.8.8-2 1.4-3.5 1.4-2.8 0-4.5-1.7-4.5-4.3 0-3.1 2.4-4.4 5.7-4.4h2.2v-1.1c0-1.7-.9-2.7-2.7-2.7-1.4 0-2.4.6-2.8 1.8h-3.2c.5-2.8 2.8-4.4 6-4.4 3.7 0 5.8 1.9 5.8 5.2v9.6h-3.1v-1.1zm-4.7-2.3c1.5 0 2.6-.7 3.3-1.6v-2.1h-2c-1.8 0-3 .6-3 2.1 0 1.1.7 1.6 1.7 1.6z"
        fill="#FFFFFF"
      />
      <path
        d="M60.1 31.6C48.6 37.8 33.3 38.6 18.2 34c-2.1-.6-4.1-1.5-6.2-2.5-.6-.3-.3-.9.3-.6 14.7 8 33.6 7.4 47.1.6 1-.5 1.7.5.7 1.1z"
        fill="#FF9900"
      />
      <path
        d="M63.7 29.8c-.8-1.1-5.3-1.2-7.8-1-.4 0-.4-.5 0-.7 2.7-1.3 7.8-.9 8.5.1.8 1.1-.3 6.1-3 7.6-.4.2-.7 0-.5-.4 1.2-2.2 3.6-4.5 2.8-5.6z"
        fill="#FF9900"
      />
    </svg>
  </div>
);

const OpenAiBrandLogo = () => (
  <div className="flex items-center gap-2 select-none" aria-label="OpenAI">
    <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.475 4.475 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.47 4.47 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1458-1.9939l2.5473-1.4677 2.5473 1.4677v2.9355l-2.5473 1.4677-2.5473-1.4677z" />
    </svg>
    <span className="text-sm sm:text-base font-semibold tracking-tight text-white whitespace-nowrap">
      OpenAI
    </span>
  </div>
);

const SnowflakeBrandLogo = () => (
  <div className="flex items-center gap-2 select-none" aria-label="Snowflake">
    <svg
      className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#29B5E8"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12,9.8 13.9,10.9 13.9,13.1 12,14.2 10.1,13.1 10.1,10.9" />
      <g>
        <line x1="12" y1="9.8" x2="12" y2="2.2" />
        <polyline points="9.6,4.6 12,6.9 14.4,4.6" />
      </g>
      <g transform="rotate(60 12 12)">
        <line x1="12" y1="9.8" x2="12" y2="2.2" />
        <polyline points="9.6,4.6 12,6.9 14.4,4.6" />
      </g>
      <g transform="rotate(120 12 12)">
        <line x1="12" y1="9.8" x2="12" y2="2.2" />
        <polyline points="9.6,4.6 12,6.9 14.4,4.6" />
      </g>
      <g transform="rotate(180 12 12)">
        <line x1="12" y1="9.8" x2="12" y2="2.2" />
        <polyline points="9.6,4.6 12,6.9 14.4,4.6" />
      </g>
      <g transform="rotate(240 12 12)">
        <line x1="12" y1="9.8" x2="12" y2="2.2" />
        <polyline points="9.6,4.6 12,6.9 14.4,4.6" />
      </g>
      <g transform="rotate(300 12 12)">
        <line x1="12" y1="9.8" x2="12" y2="2.2" />
        <polyline points="9.6,4.6 12,6.9 14.4,4.6" />
      </g>
    </svg>
    <span className="text-sm sm:text-base font-bold tracking-tight text-white lowercase whitespace-nowrap">
      snowflake
    </span>
  </div>
);

const DatabricksBrandLogo = () => (
  <div className="flex items-center gap-2 select-none" aria-label="Databricks">
    <svg
      className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FF3621"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12,2.5 21,7.5 12,12.5 3,7.5" />
      <polyline points="3,12 12,17 21,12" />
      <polyline points="3,16.5 12,21.5 21,16.5" />
    </svg>
    <span className="text-sm sm:text-base font-bold tracking-tight text-white lowercase whitespace-nowrap">
      databricks
    </span>
  </div>
);

const PowerBiBrandLogo = () => (
  <div className="flex items-center gap-2 select-none" aria-label="Power BI">
    <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="11" width="4.5" height="10" rx="1" fill="#F2C811" />
      <rect x="9.5" y="7" width="4.5" height="14" rx="1" fill="#E8A200" />
      <rect x="16" y="3" width="5" height="18" rx="1.2" fill="#C87D00" />
    </svg>
    <span className="text-sm sm:text-base font-semibold tracking-tight text-white whitespace-nowrap">
      Power BI
    </span>
  </div>
);

const PLATFORM_LOGOS = [
  { id: "google-cloud", name: "Google Cloud", render: GoogleCloudBrandLogo },
  { id: "microsoft-azure", name: "Microsoft Azure", render: MicrosoftAzureBrandLogo },
  { id: "aws", name: "AWS", render: AwsBrandLogo },
  { id: "openai", name: "OpenAI", render: OpenAiBrandLogo },
  { id: "snowflake", name: "Snowflake", render: SnowflakeBrandLogo },
  { id: "databricks", name: "Databricks", render: DatabricksBrandLogo },
  { id: "power-bi", name: "Power BI", render: PowerBiBrandLogo },
];

// =========================================================================
// DATA CONSTANTS
// =========================================================================

const CAPABILITY_CARDS = [
  {
    title: "AI & Automation",
    desc: "AI agents, private RAG knowledge bases, and workflow automation.",
    icon: Cpu,
  },
  {
    title: "Software Development",
    desc: "Scalable web apps, native mobile platforms, and SaaS systems.",
    icon: Code2,
  },
  {
    title: "Data Analytics & BI",
    desc: "Executive command centers, KPI telemetry, and predictive metrics.",
    icon: Cloud,
  },
  {
    title: "Data Engineering",
    desc: "Modern lakehouse architectures, ETL pipelines, and warehousing.",
    icon: Database,
  },
  {
    title: "Digital Marketing",
    desc: "AEO, SEO, Google & Meta Ads, GA4 analytics, social media, and branding.",
    icon: TrendingUp,
  },
];

const WHY_CONTACT_REASONS = [
  {
    title: "Build Data Platforms",
    desc: "Modern warehouses, ETL pipelines and reporting systems.",
    icon: Database,
    tag: "Lakehouse Architecture",
  },
  {
    title: "Deploy AI Solutions",
    desc: "LLM applications, AI copilots and business automation.",
    icon: Cpu,
    tag: "Sub-200ms RAG",
  },
  {
    title: "Modernize Infrastructure",
    desc: "Cloud-native architecture and DevOps optimization.",
    icon: Cloud,
    tag: "Cloud-Native Scale",
  },
  {
    title: "Scale Software Products",
    desc: "Enterprise applications and digital platforms.",
    icon: Layers,
    tag: "High Concurrency",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Global Logistics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote:
      "CodePlaced delivered what three previous consulting agencies couldn't in 18 months: a bulletproof, real-time analytics lakehouse in just 3 weeks. Our leadership makes decisions with complete clarity.",
    rating: 5,
  },
  {
    name: "Dr. Elena Rostova",
    role: "VP of Product Engineering",
    company: "BioSynaptics Health",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    quote:
      "The CodePlaced engineering team feels like an elite in-house Special Ops squad. Their mastery of agentic workflows and LLM latency optimization cut our onboarding cycle by 70%.",
    rating: 5,
  },
  {
    name: "David H. Steinberg",
    role: "Founder & Managing Director",
    company: "CapitalFlow FinTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote:
      "Working with CodePlaced was the single best technical investment our company made. They audited our schemas, killed redundant cloud spend, and helped us scale smoothly.",
    rating: 5,
  },
];

const FAQ_ITEMS = [
  {
    q: "What services does CodePlaced provide?",
    a: "We specialize in end-to-end Data Engineering (pipelines, lakehouses, warehousing), AI & Automation (agentic workflows, private RAG systems, LLMs), Cloud Architecture & FinOps (AWS, Azure, GCP), and Custom Software Development (high-concurrency web, mobile, and SaaS platforms).",
  },
  {
    q: "How long does a project typically take?",
    a: "Most scoped initiatives—such as executive dashboards, data platform foundations, MVP applications, or AI copilots—are delivered in fixed 2 to 4 week milestone cycles. Larger enterprise transformations are phased into predictable 2-week agile sprints.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolutely. We execute bilateral Non-Disclosure Agreements (NDAs) before discussing any system architecture, sensitive datasets, or technical requirements. All project code and intellectual property belong 100% to you from day one.",
  },
  {
    q: "Can you work with existing teams?",
    a: "Yes. Our senior pods integrate directly into your existing engineering workflows, whether joining your Jira/Slack cadences as autonomous squads or pairing with your in-house architects to accelerate critical roadmaps.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer flexible post-launch SLA maintenance, proactive 24/7 cloud telemetry monitoring, automated security patching, and continuous feature scaling to support your long-term operational growth.",
  },
  {
    q: "How do we get started?",
    a: "Simply submit the inquiry form on this page. A Principal Engineer will review your requirements and coordinate an initial discovery session with clear timelines, architecture recommendations, and estimated scope within 24 hours.",
  },
];

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
  }>({});
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#contact-hero") {
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 120);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const validateForm = () => {
    const errors: { fullName?: string; email?: string; phone?: string } = {};
    if (formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid work email address.";
    }
    if (
      formData.phone.trim().length > 0 &&
      !/^[+\d().\s-]{7,20}$/.test(formData.phone.trim())
    ) {
      errors.phone = "Please enter a valid phone number.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const buildMailtoHref = () => {
    const subject = `Project Inquiry from ${formData.fullName.trim() || "Prospective Client"}${
      formData.company.trim() ? ` (${formData.company.trim()})` : ""
    }`;
    const bodyLines = [
      `Name: ${formData.fullName.trim()}`,
      `Work Email: ${formData.email.trim()}`,
      formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : null,
      formData.company.trim() ? `Company: ${formData.company.trim()}` : null,
      "",
      "Project Description:",
      formData.description.trim() || "(Not provided)",
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    return `mailto:contact@codeplaced.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines)}`;
  };

  const handleCopyInquiry = async () => {
    const summary = [
      `Name: ${formData.fullName.trim()}`,
      `Work Email: ${formData.email.trim()}`,
      formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : null,
      formData.company.trim() ? `Company: ${formData.company.trim()}` : null,
      formData.description.trim()
        ? `Description: ${formData.description.trim()}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      setCopiedSummary(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;

    // No backend form endpoint is currently connected; do not display a false confirmation.
    setIsSubmitting(true);
    setCopiedSummary(false);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="text-white selection:bg-[#00C8E8] selection:text-black font-sans min-h-screen relative bg-[#050505]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & IMMEDIATE CONTACT FORM */}
      {/* Mobile: Hero Heading -> Direct Contact Form (Visible Above Fold) */}
      {/* Desktop: Balanced 50/50 Top-Aligned Split */}
      {/* ========================================================================= */}
      <section
        id="contact-hero"
        ref={formRef}
        className="relative pt-[77px] sm:pt-[81px] overflow-x-clip bg-[#050505] border-b border-[#1B242B]"
      >
        <div className="min-h-[calc(100dvh-77px)] sm:min-h-[calc(100dvh-81px)] flex flex-col justify-start py-6 sm:py-8 lg:pt-8 xl:pt-10 lg:pb-12">
          <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,49fr)_minmax(0,51fr)] gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start">
              {/* LEFT SIDE (~49%): Heading, Description & 5-Card Overview */}
              <div className="space-y-2.5 sm:space-y-3 text-left">
                {/* Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/5 text-[#00C8E8] border border-[#1B242B]"
                >
                  <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00C8E8]" />
                  <span>TRUSTED DATA, AI & DIGITAL PARTNER</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[38px] xl:text-[42px] font-[900] leading-[1.12] tracking-tight text-white"
                >
                  Let&apos;s Build Your Next <br />
                  <span className="text-[#00C8E8] font-extrabold">
                    Data, AI & Digital Product
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                  className="text-[13px] sm:text-sm lg:text-[14.5px] text-[#A1AAB7] leading-[1.6] font-normal max-w-[540px]"
                >
                  From data engineering and analytics platforms to AI-powered applications and
                  cloud-native software, CodePlaced helps organizations transform ideas into scalable
                  digital solutions.
                </motion.p>

                {/* Desktop Only: Compact 2x2 Grid + Full-Width Digital Marketing Card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.24 }}
                  className="hidden lg:grid grid-cols-2 gap-3 xl:gap-3.5 pt-2 items-stretch"
                >
                  {CAPABILITY_CARDS.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={idx}
                        className={`h-full p-3.5 xl:p-4 rounded-2xl bg-[#101820] border border-[#1B242B] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00C8E8]/55 flex flex-col group ${
                          idx === 4 ? "col-span-2" : ""
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#050505] text-[#00C8E8] border border-[#1B242B] group-hover:bg-[#00C8E8] group-hover:text-black transition-colors flex items-center justify-center mb-2.5">
                          <Icon className="w-4 h-4 text-[#00C8E8] group-hover:text-black transition-colors" />
                        </div>
                        <h3 className="text-[13.5px] xl:text-sm font-extrabold text-white group-hover:text-[#00C8E8] transition-colors mb-1">
                          {card.title}
                        </h3>
                        <p className="text-xs text-[#A1AAB7] leading-[1.45]">
                          {card.desc}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* RIGHT SIDE (~51%) / MOBILE IMMEDIATE: Substantial Inquiry Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="w-full relative"
              >
                {/* Form Card: Clean white container on mobile, dark on desktop */}
                <div
                  className="rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-7 lg:p-8 transition-all relative overflow-x-clip bg-white text-neutral-900 border border-slate-200 lg:bg-[#101820] lg:text-white lg:border-[#1B242B] shadow-2xl"
                >
                  {/* Form Header */}
                  <div className="mb-4 sm:mb-5 pb-3.5 border-b border-slate-100 lg:border-[#1B242B]">
                    <h2 className="text-xl sm:text-[23px] font-black text-neutral-900 lg:text-white tracking-tight">
                      Send an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 lg:text-[#A1AAB7] mt-1">
                      Direct architectural conversation with our Principal Engineers.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      role="status"
                      className="py-5 sm:py-8 text-center space-y-4"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 lg:text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                        Backend Submission Unavailable
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-neutral-900 lg:text-white">
                        Send Your Inquiry Directly via Email
                      </h3>
                      <p className="text-neutral-600 lg:text-[#A1AAB7] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                        Automated form submission is not yet connected to a mail server, so your message has{" "}
                        <strong className="text-neutral-950 lg:text-white">not</strong> been transmitted automatically. Use your email app below to send these pre-filled details to{" "}
                        <span className="font-semibold text-neutral-900 lg:text-white">contact@codeplaced.com</span>.
                      </p>
                      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 lg:bg-[#050505] border border-slate-200 lg:border-[#1B242B] text-left text-xs text-neutral-700 lg:text-[#A1AAB7] space-y-1.5 max-w-md mx-auto">
                        <div>
                          <strong className="text-neutral-900 lg:text-white">Name:</strong> {formData.fullName.trim()}
                        </div>
                        <div>
                          <strong className="text-neutral-900 lg:text-white">Email:</strong> {formData.email.trim()}
                        </div>
                        {formData.phone.trim() && (
                          <div>
                            <strong className="text-neutral-900 lg:text-white">Phone:</strong> {formData.phone.trim()}
                          </div>
                        )}
                        {formData.company.trim() && (
                          <div>
                            <strong className="text-neutral-900 lg:text-white">Company:</strong> {formData.company.trim()}
                          </div>
                        )}
                      </div>
                      <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                        <a
                          href={buildMailtoHref()}
                          className="px-5 py-2.5 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-black text-xs font-extrabold transition-all inline-flex items-center gap-2"
                        >
                          <Send className="w-3.5 h-3.5 text-black" />
                          <span>Open Email App</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyInquiry}
                          className="px-4 py-2.5 rounded-full border border-slate-200 lg:border-[#1B242B] text-neutral-800 lg:text-white hover:border-[#00C8E8] text-xs font-bold transition-all cursor-pointer"
                        >
                          {copiedSummary ? "Copied Summary" : "Copy Details"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-black text-white lg:bg-white/10 lg:hover:bg-white/15 lg:text-white text-xs font-bold transition-all cursor-pointer"
                        >
                          Edit Form
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} noValidate className="space-y-3.5 sm:space-y-4">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="contact-full-name" className="block text-xs sm:text-[13px] font-bold text-neutral-800 lg:text-white mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="contact-full-name"
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Alex Mercer"
                          aria-invalid={Boolean(formErrors.fullName)}
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: undefined });
                          }}
                          className="w-full h-11 sm:h-[46px] px-3.5 sm:px-4 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all bg-[#F8FAFC] lg:bg-[#050505]"
                        />
                        {formErrors.fullName && (
                          <p role="alert" className="mt-1 text-xs text-rose-500 font-medium">
                            {formErrors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Work Email & Phone Number (Single column on mobile, 2 cols on tablet+) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label htmlFor="contact-email" className="block text-xs sm:text-[13px] font-bold text-neutral-800 lg:text-white mb-1.5">
                            Work Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="alex@company.com"
                            aria-invalid={Boolean(formErrors.email)}
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                            }}
                            className="w-full h-11 sm:h-[46px] px-3.5 sm:px-4 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all bg-[#F8FAFC] lg:bg-[#050505]"
                          />
                          {formErrors.email && (
                            <p role="alert" className="mt-1 text-xs text-rose-500 font-medium">
                              {formErrors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="contact-phone" className="block text-xs sm:text-[13px] font-bold text-neutral-800 lg:text-white mb-1.5">
                            Phone Number
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+1 (555) 000-0000"
                            aria-invalid={Boolean(formErrors.phone)}
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                            }}
                            className="w-full h-11 sm:h-[46px] px-3.5 sm:px-4 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all bg-[#F8FAFC] lg:bg-[#050505]"
                          />
                          {formErrors.phone && (
                            <p role="alert" className="mt-1 text-xs text-rose-500 font-medium">
                              {formErrors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Company Name */}
                      <div>
                        <label htmlFor="contact-company" className="block text-xs sm:text-[13px] font-bold text-neutral-800 lg:text-white mb-1.5">
                          Company Name
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Acme Global Inc."
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full h-11 sm:h-[46px] px-3.5 sm:px-4 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all bg-[#F8FAFC] lg:bg-[#050505]"
                        />
                      </div>

                      {/* Project Description */}
                      <div>
                        <label htmlFor="contact-description" className="block text-xs sm:text-[13px] font-bold text-neutral-800 lg:text-white mb-1.5">
                          Project Description
                        </label>
                        <textarea
                          id="contact-description"
                          name="description"
                          rows={4}
                          placeholder="Tell us about your objectives, architecture scale, timeline, or current bottlenecks..."
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                          }
                          className="w-full min-h-[100px] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 lg:border-[#1B242B] text-neutral-900 lg:text-white placeholder:text-neutral-400 lg:placeholder:text-[#A1AAB7]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E8]/30 focus:border-[#00C8E8] transition-all resize-y bg-[#F8FAFC] lg:bg-[#050505]"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-1.5">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 rounded-xl text-black font-extrabold text-sm sm:text-[15px] shadow-md flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-70 cursor-pointer bg-[#00BCD4] hover:bg-[#20d7f5]"
                        >
                          {isSubmitting ? (
                            <span>Connecting with Engineering...</span>
                          ) : (
                            <>
                              <span>Send an Inquiry</span>
                              <Send className="w-4 h-4 text-black" />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Under Button Trust Guarantees */}
                      <div className="pt-1.5 flex items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-neutral-500 lg:text-[#A1AAB7] font-semibold flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                          NDA Available
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                          Free Consultation
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                          24 Hour Response
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HELPING BUSINESSES TRANSFORM WITH TECHNOLOGY (TESTIMONIALS) */}
      {/* Mobile: Horizontal Swipeable Carousel | Desktop: 3-Column Grid */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-11 lg:py-14 bg-[#F7F9FB] border-b border-[#E5EAF0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px] mx-auto text-center mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white text-[#101820] border border-[#E5EAF0]">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>PROVEN CLIENT OUTCOMES</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#101820]">
              Helping Businesses Transform With Technology
            </h2>
            <p className="text-xs sm:text-base text-[#566171] max-w-[650px] mx-auto leading-relaxed">
              Read how our dedicated engineering squads deliver measurable velocity, architecture
              resilience, and business growth.
            </p>
          </div>

          {/* Mobile View: Swipeable Carousel */}
          <div className="md:hidden flex items-stretch overflow-x-auto gap-3 pb-2 snap-x snap-mandatory">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="w-[86vw] max-w-[330px] shrink-0 snap-start rounded-2xl p-4 sm:p-5 flex flex-col justify-between bg-white border border-[#E5EAF0] shadow-xs relative overflow-hidden"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-2.5">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xs text-[#101820] leading-relaxed mb-4 font-normal line-clamp-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Client Profile */}
                <div className="pt-3 border-t border-[#E5EAF0] flex items-center gap-2.5">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#00C8E8] shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-[#101820] truncate">{t.name}</div>
                    <div className="text-[10px] text-[#566171] truncate">{t.role}</div>
                    <div className="text-[10px] font-bold text-[#007F9C] truncate">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="h-full rounded-[18px] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] bg-white border border-[#E5EAF0] relative overflow-hidden"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-[15px] text-[#101820] leading-relaxed mb-5 font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Client Profile */}
                <div className="pt-4 border-t border-[#E5EAF0] flex items-center gap-3.5">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#00C8E8] shrink-0"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-[#101820]">{t.name}</div>
                    <div className="text-xs text-[#566171]">{t.role}</div>
                    <div className="text-[11px] font-bold text-[#007F9C]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ENTERPRISE PLATFORMS SECTION — DARK VISUAL TRANSITION */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#050505] border-b border-[#1B242B]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00C8E8] mb-5 sm:mb-6">
            Engineered Across Leading Enterprise Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10 lg:gap-x-12">
            {PLATFORM_LOGOS.map((platform) => {
              const LogoComponent = platform.render;
              return (
                <div
                  key={platform.id}
                  className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-200 py-0.5"
                  title={platform.name}
                >
                  <LogoComponent />
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OFFICE CONTACT + BUSINESS HOURS & SUPPORT */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-6 sm:pt-11 sm:pb-8 lg:pt-14 lg:pb-10 bg-white text-neutral-900">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile View: Compact 2-Column Grid */}
          <div className="lg:hidden space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#007F9C]">
                DIRECT COMMUNICATION
              </span>
              <h2 className="text-xl font-black text-[#101820] tracking-tight">
                Direct Contact Channels
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="mailto:hello@codeplaced.com"
                className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1 block hover:border-[#00BCD4] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-[#007F9C]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  General Inquiries
                </div>
                <div className="text-xs font-bold text-[#101820] truncate">
                  hello@codeplaced.com
                </div>
              </a>

              <a
                href="mailto:contact@codeplaced.com"
                className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1 block hover:border-[#00BCD4] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-[#007F9C]">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Business & Sales
                </div>
                <div className="text-xs font-bold text-[#101820] truncate">
                  contact@codeplaced.com
                </div>
              </a>

              <a
                href="tel:+919999999999"
                className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1 block hover:border-[#00BCD4] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-emerald-600">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Direct Phone
                </div>
                <div className="text-xs font-bold text-[#101820] truncate">
                  +91 99999 99999
                </div>
              </a>

              <a
                href="mailto:careers@codeplaced.com"
                className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1 block hover:border-[#00BCD4] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-[#007F9C]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Careers & Talent
                </div>
                <div className="text-xs font-bold text-[#101820] truncate">
                  careers@codeplaced.com
                </div>
              </a>

              <div className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-[#007F9C]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Business Hours
                </div>
                <div className="text-xs font-bold text-[#101820]">
                  Mon–Fri, 9AM–6PM
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] space-y-1">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E5EAF0] flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#566171]">
                  Response Promise
                </div>
                <div className="text-xs font-bold text-emerald-700">
                  Within 24 Hours
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View: Original Two-Column Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Direct Office Contact */}
            <div className="col-span-6 h-full rounded-[18px] bg-white border border-[#E5EAF0] p-6 lg:p-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF9FC] text-[#007F9C] border border-[#00C8E8]/20 mb-4">
                  <Mail className="w-3.5 h-3.5 text-[#007F9C]" />
                  <span>COMMUNICATION CHANNELS</span>
                </div>
                <h3 className="text-2xl font-black text-[#101820] mb-2">
                  Office Contact
                </h3>
                <p className="text-xs sm:text-sm text-[#566171] mb-6">
                  Direct channels to reach our technical leadership, partnerships, and talent pods.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white text-[#101820] border border-[#E5EAF0] flex items-center justify-center">
                        <Mail className="w-4 h-4 text-[#007F9C]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#566171]">
                          General Inquiries
                        </div>
                        <a
                          href="mailto:hello@codeplaced.com"
                          className="text-sm font-extrabold text-[#101820] hover:text-[#007F9C] transition-colors"
                        >
                          hello@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-[#566171] font-medium">Primary</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white text-[#101820] border border-[#E5EAF0] flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-[#007F9C]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#566171]">
                          Business & Partnerships
                        </div>
                        <a
                          href="mailto:contact@codeplaced.com"
                          className="text-sm font-extrabold text-[#101820] hover:text-[#007F9C] transition-colors"
                        >
                          contact@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-[#566171] font-medium">Sales</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F9FB] border border-[#E5EAF0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white text-[#101820] border border-[#E5EAF0] flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-[#007F9C]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#566171]">
                          Careers & Engineering
                        </div>
                        <a
                          href="mailto:careers@codeplaced.com"
                          className="text-sm font-extrabold text-[#101820] hover:text-[#007F9C] transition-colors"
                        >
                          careers@codeplaced.com
                        </a>
                      </div>
                    </div>
                    <span className="text-xs text-[#566171] font-medium">Talent</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5EAF0] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#566171]">
                    Direct Phone Line
                  </div>
                  <div className="text-sm font-extrabold text-[#101820]">
                    +91 99999 99999
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Business Hours & Response Promise */}
            <div className="col-span-6 h-full rounded-[18px] bg-[#0B1117] border border-[#1B242B] text-white p-6 lg:p-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#00C8E8] border border-white/20 mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#00C8E8]" />
                  <span>OPERATIONAL CADENCE</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Business Hours & Support
                </h3>
                <p className="text-xs sm:text-sm text-[#A1AAB7] mb-6">
                  Standard headquarters operations with active shift options for North American and
                  European timezones.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#050505] border border-[#1B242B] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#00C8E8] uppercase tracking-wider">
                        Business Hours
                      </div>
                      <div className="text-base font-extrabold text-white mt-0.5">
                        Monday – Friday
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">9:00 AM – 6:00 PM IST</div>
                      <div className="text-xs text-[#A1AAB7]">Standard IST HQ</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#050505] border border-[#1B242B] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#00C8E8] uppercase tracking-wider">
                        Response Promise
                      </div>
                      <div className="text-base font-extrabold text-white mt-0.5">
                        Within 24 Hours
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-emerald-400">Guaranteed Review</div>
                      <div className="text-xs text-[#A1AAB7]">Senior Engineer Scoping</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1B242B] flex items-center justify-between text-xs text-[#A1AAB7]">
                <span className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#00C8E8]" />
                  <span>Strict NDA Guardrails Active</span>
                </span>
                <button
                  onClick={scrollToForm}
                  className="px-4 py-2 rounded-full text-black font-extrabold text-xs transition-colors cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #087FA5 0%, #00C8E8 100%)",
                  }}
                >
                  Send an Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY COMPANIES CONTACT CODEPLACED — VISUALLY CONNECTED LIGHT BAND */}
      {/* ========================================================================= */}
      <section className="pt-7 pb-8 sm:pt-9 sm:pb-11 lg:pt-10 lg:pb-14 bg-[#FAFBFD] border-t border-b border-[#E5EAF0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[850px] mx-auto text-center mb-5 sm:mb-8 space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#EBF9FC] text-[#007F9C] border border-[#00C8E8]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007F9C]" />
              <span>CORE ARCHITECTURAL STRENGTHS</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#101820]">
              Why Companies Contact CodePlaced
            </h2>
            <p className="text-xs sm:text-base text-[#566171] max-w-[680px] mx-auto leading-relaxed">
              We eliminate technical debt and bridge the gap between complex data architectures and
              high-growth digital execution.
            </p>
          </div>

          {/* 2-Column on Mobile, 4-Column on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 items-stretch">
            {WHY_CONTACT_REASONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="h-full rounded-xl sm:rounded-[18px] bg-white border border-[#E5EAF0] p-3.5 sm:p-5 lg:p-6 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:border-[#00C8E8] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F7F9FB] text-[#101820] border border-[#E5EAF0] group-hover:bg-[#101820] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#007F9C]" />
                      </div>
                      <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold bg-[#EBF9FC] text-[#007F9C] border border-[#00C8E8]/20 truncate max-w-[85px] sm:max-w-none">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#101820] mb-1 sm:mb-1.5 group-hover:text-[#00C8E8] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-[#566171] leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-5 pt-2 sm:pt-3.5 border-t border-[#E5EAF0] flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#101820]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#007F9C]" />
                    <span>Production Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ SECTION (LIGHT GREY) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-11 lg:py-14 bg-[#F4F6F9] border-b border-[#E5EAF0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-5 sm:mb-8 space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white text-[#101820] border border-[#E5EAF0]">
                <HelpCircle className="w-3.5 h-3.5 text-[#007F9C]" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#101820]">
                Questions About Working With Us
              </h2>
              <p className="text-xs sm:text-base text-[#566171] max-w-[620px] mx-auto leading-relaxed">
                Clear answers on how we scope, partner, deploy, and support enterprise systems.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-2.5 sm:space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl sm:rounded-[16px] bg-white border border-[#E5EAF0] overflow-hidden hover:border-[#00C8E8]/50 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs sm:text-base lg:text-lg font-bold text-[#101820]">
                        {item.q}
                      </span>
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F7F9FB] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-[#101820] text-[#00C8E8]" : "text-[#101820]"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm lg:text-base text-[#566171] leading-relaxed border-t border-[#E5EAF0]">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
