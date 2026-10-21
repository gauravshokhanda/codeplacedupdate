"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Plus,
  Minus,
  Bot,
  Code2,
  Smartphone,
  Database,
  Cloud,
  BarChart3,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  GraduationCap,
  Truck,
  Building2,
  Film,
  Users,
  Star,
  Lock,
  Search,
  Calendar,
  Clock,
  Sparkles,
  Video,
} from "lucide-react";
import { ServicesMarquee } from "@/components/ServicesMarquee";

// =========================================================================
// 1. DATA: SERVICES (6 EQUAL CARDS - PREMIUM BLACK THEME #05090C)
// =========================================================================
const SERVICES_DATA = [
  {
    title: "AI Solutions & Automation",
    description:
      "Custom LLM copilots, private enterprise RAG pipelines, and autonomous agent swarms engineered to eliminate manual operational workflows.",
    icon: Bot,
    href: "/services/ai-copilots",
  },
  {
    title: "Web Development",
    description:
      "High-performance Next.js and React enterprise applications engineered for sub-second speeds, flawless responsiveness, and global scale.",
    icon: Code2,
    href: "/services",
  },
  {
    title: "Mobile App Development",
    description:
      "Native iOS & Android apps alongside high-performance cross-platform Flutter solutions built for engagement, retention, and speed.",
    icon: Smartphone,
    href: "/services",
  },
  {
    title: "Data Engineering",
    description:
      "Modern lakehouse architectures, automated real-time ETL pipelines, and scalable Snowflake & Databricks data platforms.",
    icon: Database,
    href: "/services/data-platforms",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Multi-cloud architectures on AWS, Azure, and GCP with automated CI/CD pipelines, Kubernetes orchestration, and 99.99% uptime.",
    icon: Cloud,
    href: "/services/cloud-infrastructure",
  },
  {
    title: "Analytics & Business Intelligence",
    description:
      "Executive Power BI, Tableau, and embedded telemetry dashboards transforming messy raw data into actionable decision intelligence.",
    icon: BarChart3,
    href: "/services/executive-dashboards",
  },
];

// =========================================================================
// 2. DATA: INDUSTRIES (8 REFINED CARDS - LIGHT BACKGROUND)
// =========================================================================
const INDUSTRIES_DATA = [
  {
    title: "Healthcare",
    description:
      "HIPAA-compliant patient portals, diagnostic AI telemetry, and clinical data pipelines.",
    icon: HeartPulse,
    href: "/industries#healthcare",
  },
  {
    title: "Finance",
    description:
      "Algorithmic ledgers, real-time risk telemetry, fraud monitoring, and automated compliance engines.",
    icon: Landmark,
    href: "/industries#finance",
  },
  {
    title: "Retail & eCommerce",
    description:
      "Omnichannel sync, headless commerce platforms, and personalized AI recommendation systems.",
    icon: ShoppingBag,
    href: "/industries#retail",
  },
  {
    title: "Manufacturing",
    description:
      "IoT sensor telematics, supply chain tracking, and predictive equipment maintenance models.",
    icon: Factory,
    href: "/industries#manufacturing",
  },
  {
    title: "Education",
    description:
      "Adaptive learning marketplaces, tutor discovery platforms, and classroom scheduling engines.",
    icon: GraduationCap,
    href: "/industries#education",
  },
  {
    title: "Logistics",
    description:
      "Fleet tracking telematics, dynamic route optimization, and intelligent warehouse dispatching.",
    icon: Truck,
    href: "/industries#logistics",
  },
  {
    title: "Real Estate",
    description:
      "Property valuation models, tenant portals, and automated digital lease processing pipelines.",
    icon: Building2,
    href: "/industries#realestate",
  },
  {
    title: "Media & Entertainment",
    description:
      "High-throughput streaming analytics, DRM integrations, and programmatic asset pipelines.",
    icon: Film,
    href: "/industries#media",
  },
];

// =========================================================================
// 3. DATA: OUR PROCESS (4 CONNECTED STEPS - DARK NAVY)
// =========================================================================
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover & Plan",
    description:
      "Deep technical audits, architecture mapping, and sprint roadmapping aligned with strategic business objectives.",
  },
  {
    step: "02",
    title: "Design & Build",
    description:
      "Agile 2-week execution cycles delivering production-grade code, scalable microservices, and modern UI systems.",
  },
  {
    step: "03",
    title: "Test & Launch",
    description:
      "Rigorous end-to-end QA, security compliance, stress benchmarking, and zero-downtime deployment pipelines.",
  },
  {
    step: "04",
    title: "Scale & Support",
    description:
      "24/7 SLA infrastructure monitoring, predictive telemetry, performance tuning, and continuous feature expansion.",
  },
];

// =========================================================================
// 4. DATA: TESTIMONIALS (3 REFINED CARDS - WHITE BACKGROUND)
// =========================================================================
const TESTIMONIALS_DATA = [
  {
    quote:
      "CodePlaced re-architected our core data platform in record time. Their engineering rigor, technical depth, and communication allowed us to ship months ahead of our internal timeline.",
    author: "Marcus Vance",
    role: "VP of Engineering, Enterprise SaaS",
    rating: 5,
    initials: "MV",
  },
  {
    quote:
      "The Tuitionstime marketplace launch required complex multi-sided payments, automated tutor scheduling, and absolute zero downtime. CodePlaced executed with flawless precision.",
    author: "Rohit Sharma",
    role: "Product Director, Tuitionstime",
    rating: 5,
    initials: "RS",
  },
  {
    quote:
      "Their AI copilot integration transformed how our analysts evaluate institutional market signals. Context retrieval is instantaneous, secure, and rigorously validated.",
    author: "Dr. Elena Rostova",
    role: "Chief Data Officer, FinTech Partners",
    rating: 5,
    initials: "ER",
  },
];

// =========================================================================
// 5. DATA: FAQS (5 ACCORDION ITEMS - DARK NAVY)
// =========================================================================
const FAQ_ITEMS = [
  {
    question: "What services does CodePlaced provide?",
    answer:
      "CodePlaced specializes in end-to-end technology engineering: custom full-stack web and mobile application development, enterprise AI copilots & autonomous agents, modern cloud data engineering, business intelligence dashboards, and scalable cloud DevOps infrastructure.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Our agile engineering pods operate in rapid 2-week sprint cycles. Initial MVP deployments and targeted modules typically ship in 2 to 6 weeks, while large-scale enterprise platforms are rolled out through structured, milestone-driven phases.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer dedicated post-launch maintenance, 24/7 infrastructure telemetry, SLA uptime guarantees, security patching, and continuous feature iteration retainers.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes Next.js, React, Node.js, Python, TypeScript, AWS, Microsoft Azure, Google Cloud, Snowflake, Databricks, PostgreSQL, and state-of-the-art LLM orchestration frameworks.",
  },
  {
    question: "How do we get started?",
    answer:
      "You can schedule a complimentary 30-minute strategy call with our engineering leadership to review your technical architecture, requirements, and milestones. We typically provide a scoping proposal within 48 hours.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#06151C] text-[#FFFFFF] font-sans antialiased selection:bg-[#00BCD4] selection:text-[#06151C]">
      {/* ===================================================================== */}
      {/* SECTION 1: HERO SECTION — FULL VIEWPORT EXPERIENCE (100svh) */}
      {/* ===================================================================== */}
      <section className="relative min-h-[100svh] w-full flex flex-col justify-center pt-[90px] sm:pt-[105px] pb-12 sm:pb-16 bg-[#06151C] overflow-hidden">
        {/* Full-Width Background Video covering entire hero container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          {!prefersReducedMotion ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero-corporate-collab.jpg"
              className="w-full h-full object-cover object-[75%_center] lg:object-[82%_center]"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/images/hero-corporate-collab.jpg"
              alt="CodePlaced technology collaboration"
              fill
              priority
              className="object-cover object-[75%_center] lg:object-[82%_center]"
            />
          )}

          {/* Precision Gradient Overlays for Maximum Text Readability */}
          {/* 1. Left-to-right gradient: dense on left, clear on right to showcase video subjects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06151C]/95 via-[#06151C]/75 to-[#06151C]/25" />

          {/* 2. Top-to-bottom gradient: seamless navbar blend and dark bottom transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#06151C]/70 via-transparent to-[#06151C]" />
        </div>

        {/* Hero Foreground Content */}
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="max-w-3xl space-y-5 sm:space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00BCD4]/40 bg-[#06151C]/80 backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00BCD4]">
                AI • SOFTWARE • BUSINESS GROWTH
              </span>
            </div>

            {/* Main Headline (Responsive typography for 320px up to 4K) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-extrabold tracking-tight text-white leading-[1.09]">
              Build AI & Software Products That Drive{" "}
              <span className="text-[#00BCD4]">Business Growth.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs">
              We help businesses design, develop, and scale intelligent software solutions — from AI-powered products and data platforms to enterprise systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 sm:h-13 rounded-full bg-[#00BCD4] hover:bg-[#26c6da] text-[#06151C] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-lg shadow-[#00BCD4]/30 hover:shadow-xl hover:shadow-[#00BCD4]/40 hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 sm:h-13 rounded-full bg-[#06151C]/80 hover:bg-[#0A2029] text-white font-bold text-sm sm:text-base border border-[#163340] hover:border-[#00BCD4]/60 backdrop-blur-md transition-all duration-200 text-center"
              >
                <span>Our Services</span>
              </Link>
            </div>

            {/* 3 Compact Trust Indicators */}
            <div className="pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#00BCD4]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="text-sm sm:text-lg font-extrabold text-white">100+</span>
                </div>
                <p className="text-[11px] sm:text-sm text-slate-300 font-medium leading-snug">
                  Enterprise Deployments
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#00BCD4]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-base sm:text-lg font-extrabold text-white">99.99%</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                  Production SLA
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#00BCD4]">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span className="text-base sm:text-lg font-extrabold text-white">2–4 Wks</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                  Sprint Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2: SERVICES MARQUEE — HORIZONTAL SCROLLING TECHNOLOGY STRIP */}
      {/* ===================================================================== */}
      <ServicesMarquee />

      {/* ===================================================================== */}
      {/* SECTION 3: SERVICES SECTION — PREMIUM BLACK THEME (#05090C) */}
      {/* ===================================================================== */}
      <section className="py-22 sm:py-28 bg-[#05090C] border-b border-[#1C3038]/50 relative text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 sm:mb-20">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Comprehensive Technology Services for Modern Businesses.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                From intelligent AI automation and robust cloud infrastructure to full-stack web and mobile platforms, we deliver end-to-end technology engineering designed to scale.
              </p>
            </div>
          </div>

          {/* 6 Equal-Height Cards in Dark (#0B151B) with Subtle Borders (#1C3038) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {SERVICES_DATA.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 sm:p-10 rounded-2xl bg-[#0B151B] border border-[#1C3038] hover:border-[#00BCD4]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00BCD4]/5"
                >
                  <div className="space-y-6">
                    {/* Pale Cyan / Dark Icon Container (~28-32px icon) */}
                    <div className="w-14 h-14 rounded-2xl bg-[#00BCD4]/10 border border-[#00BCD4]/25 flex items-center justify-center text-[#00BCD4] group-hover:scale-105 transition-transform duration-300">
                      <ServiceIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#00BCD4]" />
                    </div>

                    {/* Bold Service Heading */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00BCD4] transition-colors tracking-tight">
                      {service.title}
                    </h3>

                    {/* Soft Gray Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Consistently Aligned Learn More Link */}
                  <div className="pt-6 mt-8 border-t border-[#1C3038]">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#00BCD4] hover:text-[#26C6DA] group-hover:translate-x-1.5 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 4: ABOUT CODEPLACED (BALANCED 50/50 EDITORIAL SECTION #F7F9FA) */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-24 bg-[#F7F9FA] border-b border-[#E5EAF0] text-[#101820]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Header: Displayed first on mobile, hidden on desktop */}
          <div className="block lg:hidden space-y-3 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
              ABOUT CODEPLACED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101820] leading-tight">
              Your Technology Partner for What&apos;s Next.
            </h2>
            <p className="text-sm sm:text-base text-[#56616B] leading-relaxed">
              CodePlaced is an elite technology engineering consultancy. We partner with ambitious organizations to build, modernize, and scale through intelligent digital products, cloud architectures, and production-ready AI automation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
            {/* Left Column (50%): Premium Large Team Image matching content height */}
            <div className="w-full lg:w-1/2 flex">
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#E5EAF0] bg-white shadow-xl min-h-[300px] sm:min-h-[420px] lg:min-h-[520px] group">
                <Image
                  src="/images/about-team-collab.jpg"
                  alt="CodePlaced senior engineering team collaborating in modern office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Right Column (50%): Concise Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
              {/* Desktop Header: Hidden on mobile */}
              <div className="hidden lg:block space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
                  ABOUT CODEPLACED
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#101820] leading-[1.15]">
                  Your Technology Partner for What&apos;s Next.
                </h2>
                <p className="text-base text-[#56616B] leading-relaxed">
                  CodePlaced is an elite technology engineering consultancy. We partner with ambitious organizations to build, modernize, and scale through intelligent digital products, cloud architectures, and production-ready AI automation.
                </p>
              </div>

              {/* Subsection: What Drives Our Work (3 Value Highlights) */}
              <div className="space-y-3 pt-1">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#101820]">
                  What Drives Our Work
                </h3>
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
                  {/* Principle 1: Ownership */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5EAF0] shadow-2xs space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] border border-[#B2EBF2] text-[#00BCD4] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#00BCD4]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#101820]">Ownership</h4>
                      <p className="text-xs text-[#56616B] leading-relaxed mt-0.5">
                        End-to-end accountability, treating every system as our own.
                      </p>
                    </div>
                  </div>

                  {/* Principle 2: Transparency */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5EAF0] shadow-2xs space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] border border-[#B2EBF2] text-[#00BCD4] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-[#00BCD4]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#101820]">Transparency</h4>
                      <p className="text-xs text-[#56616B] leading-relaxed mt-0.5">
                        Clear sprint milestones, open visibility, and zero surprises.
                      </p>
                    </div>
                  </div>

                  {/* Principle 3: Innovation */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5EAF0] shadow-2xs space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] border border-[#B2EBF2] text-[#00BCD4] flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-[#00BCD4]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#101820]">Innovation</h4>
                      <p className="text-xs text-[#56616B] leading-relaxed mt-0.5">
                        Modern architectures and AI solutions that build a lasting moat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Metrics: 2x2 Grid with exact statistics */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5EAF0] space-y-0.5 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black text-[#101820] tracking-tight">100+</div>
                  <div className="text-xs font-semibold text-[#56616B]">Deployments Delivered</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5EAF0] space-y-0.5 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black text-[#101820] tracking-tight">95%</div>
                  <div className="text-xs font-semibold text-[#56616B]">Client Retention Rate</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5EAF0] space-y-0.5 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black text-[#101820] tracking-tight">2–4 Wks</div>
                  <div className="text-xs font-semibold text-[#56616B]">Average Sprint Delivery</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5EAF0] space-y-0.5 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black text-[#101820] tracking-tight">99.99%</div>
                  <div className="text-xs font-semibold text-[#56616B]">Production SLA Guarantee</div>
                </div>
              </div>

              {/* Prominent CTA Button */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#101820] hover:bg-[#00BCD4] text-white hover:text-[#06151C] text-sm font-extrabold tracking-tight transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-[#00BCD4]/20 hover:-translate-y-0.5 active:scale-95 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5: FEATURED CASE STUDY — COMPACT PRODUCT SHOWCASE (#06171D) */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-[#06171D] relative text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
              FEATURED CASE STUDY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Real Projects. Measurable Impact.
            </h2>
          </div>

          {/* Compact Case Study Card Container: 48% Laptop Image / 52% Content Split */}
          <div className="rounded-3xl bg-[#0B222B] border border-[#163B47] overflow-hidden p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Area (48%): High-Resolution Laptop Showing Live Tuitionstime Interface */}
              <div className="w-full lg:w-[48%] shrink-0 flex items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden bg-transparent group flex items-center justify-center">
                  <Image
                    src="/images/case-studies/tuitionstime/tuitionstime-photorealistic-laptop-hero.webp"
                    alt="Tuitionstime marketplace website interface on MacBook Pro"
                    width={1100}
                    height={730}
                    priority
                    className="w-full h-auto object-contain transform group-hover:scale-[1.01] transition-transform duration-500 max-h-[340px] sm:max-h-[380px] lg:max-h-[420px]"
                  />
                </div>
              </div>

              {/* Right Area (52%): Compact Project Information, Feature Grid & Metrics */}
              <div className="w-full lg:w-[52%] space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] text-xs font-bold uppercase tracking-wider">
                  EdTech / SaaS Marketplace
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight">
                  Tuitionstime — Complete EdTech Marketplace
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  An education technology marketplace connecting students, tutors, and parents through tutor discovery, class scheduling, learning resources, and integrated platform experiences.
                </p>

                {/* Compact Feature Showcase (4 Short Labels with Small Cyan Icons) */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#06171D] border border-[#163B47] flex items-center gap-2.5">
                    <Search className="w-4 h-4 text-[#00BCD4] shrink-0" />
                    <span className="text-xs font-semibold text-slate-200 truncate">
                      Tutor Discovery & Matching
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#06171D] border border-[#163B47] flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#00BCD4] shrink-0" />
                    <span className="text-xs font-semibold text-slate-200 truncate">
                      Online Class Booking
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#06171D] border border-[#163B47] flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#00BCD4] shrink-0" />
                    <span className="text-xs font-semibold text-slate-200 truncate">
                      Class & Schedule Management
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#06171D] border border-[#163B47] flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#00BCD4] shrink-0" />
                    <span className="text-xs font-semibold text-slate-200 truncate">
                      Student & Tutor Experience
                    </span>
                  </div>
                </div>

                {/* Verified Metrics in Compact Format */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#06171D] border border-[#163B47] text-center space-y-0.5">
                    <div className="text-lg sm:text-2xl font-black text-[#00BCD4]">10K+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Active Students</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#06171D] border border-[#163B47] text-center space-y-0.5">
                    <div className="text-lg sm:text-2xl font-black text-[#00BCD4]">2K+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Expert Tutors</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#06171D] border border-[#163B47] text-center space-y-0.5">
                    <div className="text-lg sm:text-2xl font-black text-[#00BCD4]">50K+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Classes Completed</div>
                  </div>
                </div>

                {/* Prominent CTA Button */}
                <div className="pt-1">
                  <Link
                    href="/case-studies/tuitionstime"
                    className="inline-flex items-center justify-center gap-2 px-7 h-11 rounded-full bg-[#00BCD4] hover:bg-[#26c6da] text-[#06171D] font-extrabold text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00BCD4]/30 active:scale-95"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 6: IMPACT STATISTICS STRIP (TEAL / SECONDARY DARK #0A2029) */}
      {/* ===================================================================== */}
      <section className="py-14 bg-[#0A2029] border-y border-[#163340]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#163340]">
            {/* Metric 1 */}
            <div className="flex items-center gap-4 lg:px-6 justify-start lg:justify-center">
              <div className="w-13 h-13 rounded-full border-2 border-[#00BCD4] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#00BCD4]" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">100+</div>
                <div className="text-xs text-slate-300 font-medium">Enterprise Deployments</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-4 lg:px-6 justify-start lg:justify-center">
              <div className="w-13 h-13 rounded-full border-2 border-[#00BCD4] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#00BCD4]" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">99.99%</div>
                <div className="text-xs text-slate-300 font-medium">Production SLA Guarantee</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-4 lg:px-6 justify-start lg:justify-center">
              <div className="w-13 h-13 rounded-full border-2 border-[#00BCD4] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#00BCD4]" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">95%</div>
                <div className="text-xs text-slate-300 font-medium">Client Retention Rate</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-4 lg:px-6 justify-start lg:justify-center">
              <div className="w-13 h-13 rounded-full border-2 border-[#00BCD4] flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-[#00BCD4]" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">$140M+</div>
                <div className="text-xs text-slate-300 font-medium">Client Value Unlocked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 7: INDUSTRIES SECTION (LIGHT BACKGROUND #F7F9FA) */}
      {/* ===================================================================== */}
      <section className="py-22 sm:py-28 bg-[#F7F9FA] border-b border-[#E5EAF0] text-[#101820]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading & Description */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
              CROSS-INDUSTRY EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] leading-tight">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-[#56616B] leading-relaxed">
              We build practical technology solutions for businesses across industries, addressing operational challenges and supporting long-term growth.
            </p>
          </div>

          {/* 8 Refined Industry Cards (4-column, 2-row grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {INDUSTRIES_DATA.map((industry, idx) => {
              const IndIcon = industry.icon;
              return (
                <Link
                  key={idx}
                  href={industry.href}
                  className="group p-7 rounded-2xl bg-white border border-[#E5EAF0] hover:border-[#00BCD4] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#E0F7FA]/50 border border-[#B2EBF2] group-hover:border-[#00BCD4]/40 flex items-center justify-center transition-colors">
                        <IndIcon className="w-6 h-6 text-[#00BCD4]" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00BCD4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <h3 className="text-lg font-bold text-[#101820] group-hover:text-[#00BCD4] transition-colors">
                      {industry.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#657381] leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 8: OUR PROCESS — CONNECTED STEPS (DARK NAVY #06151C) */}
      {/* ===================================================================== */}
      <section className="py-22 sm:py-28 bg-[#06151C] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Clear Path From Idea to Impact.
            </h2>
          </div>

          {/* 4 Steps Horizontal Layout with Connecting Flow */}
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#00BCD4]/30 via-[#00BCD4]/50 to-[#00BCD4]/30 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#0A2029] border border-[#163340] hover:border-[#00BCD4]/60 transition-all duration-300 space-y-4 group hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Cyan Outlined Circular Number */}
                  <div className="w-13 h-13 rounded-full border-2 border-[#00BCD4] bg-[#06151C] flex items-center justify-center text-base font-extrabold text-[#00BCD4] group-hover:bg-[#00BCD4]/15 transition-colors shadow-sm">
                    {step.step}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00BCD4] transition-colors tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 9: TESTIMONIALS (WHITE BACKGROUND #FFFFFF) */}
      {/* ===================================================================== */}
      <section className="py-22 sm:py-28 bg-[#FFFFFF] border-y border-[#E5EAF0] text-[#101820]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
              CLIENT SUCCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] leading-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* 3-Column Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-[#F7F9FA] border border-[#E5EAF0] hover:border-[#00BCD4] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Real Testimonial Quote */}
                  <p className="text-sm sm:text-base text-[#101820] leading-relaxed italic font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 mt-6 border-t border-[#E5EAF0] flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#101820] text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#101820]">{t.author}</div>
                    <div className="text-xs text-[#657381]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 10: FAQ SECTION (DARK NAVY #06151C) */}
      {/* ===================================================================== */}
      <section className="py-22 sm:py-28 bg-[#06151C] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
                FAQS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Got Questions? We&apos;ve Got Answers.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Find quick answers to common questions about our technical capabilities, engagement models, and delivery timelines.
              </p>

              <div className="pt-4">
                <div className="p-6 rounded-2xl bg-[#0A2029] border border-[#163340] space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white">Have a custom question?</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Reach out to our leadership directly at{" "}
                    <a href="mailto:hello@codeplaced.com" className="text-[#00BCD4] hover:underline font-semibold">
                      hello@codeplaced.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (5 Accordion Items with Increased Hierarchy) */}
            <div className="lg:col-span-7 space-y-4">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0A2029] border border-[#163340] overflow-hidden transition-all duration-200 hover:border-[#00BCD4]/40"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-bold text-white hover:text-[#00BCD4] transition-colors">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#163340] flex items-center justify-center shrink-0 text-[#00BCD4]">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-[#163340]/40">
                            {faq.answer}
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

      {/* ===================================================================== */}
      {/* SECTION 11: FINAL CTA BANNER (DARK PHOTOGRAPHIC SECTION #06151C) */}
      {/* ===================================================================== */}
      <section className="py-18 sm:py-22 bg-[#06151C] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0A2029] border border-[#163340] shadow-2xl">
            {/* Background Photographic Image on Right with Smooth Gradient Overlay */}
            <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full opacity-45 lg:opacity-70 pointer-events-none">
              <Image
                src="/images/cta-office-collab.jpg"
                alt="CodePlaced senior software architects collaborating at glass-wall conference room"
                fill
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2029] via-[#0A2029]/80 to-transparent" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4]">
                START YOUR PROJECT
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Build Something Intelligent?
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Have a project in mind? Let&apos;s discuss how CodePlaced can turn your ideas into scalable digital solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 h-13 rounded-full bg-[#00BCD4] hover:bg-[#26c6da] text-[#06151C] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-lg shadow-[#00BCD4]/30 hover:shadow-xl hover:shadow-[#00BCD4]/40 hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 h-13 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 transition-all duration-200"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>

              {/* 3 Small Supporting Trust Points */}
              <div className="pt-6 border-t border-[#163340]/80 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00BCD4]" />
                  <span>Fixed 2–4 Wk Sprints</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#00BCD4]" />
                  <span>Bilateral NDA Guardrails</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00BCD4]" />
                  <span>100% IP Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
