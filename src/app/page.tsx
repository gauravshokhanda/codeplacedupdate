"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
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
  Database,
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
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { ServicesMarquee } from "@/components/ServicesMarquee";

// =========================================================================
// HERO BACKGROUND IMAGE CONFIGURATION
// Easily replace the static hero background image by changing this path:
// =========================================================================
const HERO_BACKGROUND_IMAGE = "/images/hero-team-consulting-v2.jpg";

// =========================================================================
// 1. DATA: EXACTLY FOUR CORE SERVICES (APPINVENTIV 4-COLUMN STAGGERED SHOWCASE)
// =========================================================================
const SERVICES_DATA = [
  {
    num: "01",
    title: "Software Development",
    description:
      "Build scalable digital products, web applications, mobile applications, and custom business software.",
    capabilities: [
      "Web & Mobile Applications",
      "SaaS Development",
      "Custom Software",
      "API Integrations",
    ],
    icon: Code2,
    href: "/services/app-web-development",
  },
  {
    num: "02",
    title: "Data Engineering",
    description:
      "Build reliable data infrastructure that connects systems, automates pipelines, and makes information accessible.",
    capabilities: [
      "Data Pipelines & ETL/ELT",
      "Data Warehousing",
      "Data Integration",
      "Data Architecture",
    ],
    icon: Database,
    href: "/services/data-engineering-analytics",
  },
  {
    num: "03",
    title: "Data Analytics & Business Intelligence",
    description:
      "Turn business data into actionable insights through dashboards, reporting, and performance measurement.",
    capabilities: [
      "Executive Dashboards",
      "Power BI & Tableau",
      "Business Reporting",
      "Data Visualization",
    ],
    icon: BarChart3,
    href: "/services/executive-dashboards",
  },
  {
    num: "04",
    title: "AI & Automation",
    description:
      "Build intelligent applications and automate business workflows with practical AI solutions.",
    capabilities: [
      "AI Agents & RAG",
      "Workflow Automation",
      "AI Integrations",
      "Intelligent Applications",
    ],
    icon: Bot,
    href: "/services/ai-copilots",
  },
];

// =========================================================================
// 2. DATA: INDUSTRIES WE SERVE (8 STRUCTURED ENTERPRISE CATEGORIES)
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
// 3. DATA: OUR DELIVERY PROCESS (4 CLEAR CONNECTED PHASES)
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
// 4. DATA: CLIENT TESTIMONIALS (VERIFIED ENTERPRISE QUOTES)
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
// 5. DATA: FREQUENTLY ASKED QUESTIONS
// =========================================================================
const FAQ_ITEMS = [
  {
    question: "What services does CodePlaced provide?",
    answer:
      "CodePlaced specializes in end-to-end technology engineering: custom full-stack software development, modern data engineering, business intelligence dashboards, and production enterprise AI & automation workflows.",
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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const col4Ref = useRef<HTMLDivElement>(null);
  const servicesBtnRef = useRef<HTMLDivElement>(null);

  // =========================================================================
  // GSAP SCROLLTRIGGER: APPINVENTIV-INSPIRED STAIRCASE SERVICES ANIMATION
  // Phase A: Initial descending staircase (Col 1 at top, Col 2 +70, Col 3 +140, Col 4 +210)
  // Phase B (0.00 -> 0.72): Progressive column rising toward Column 1
  // Phase C (0.72 -> 0.90): Stationary hold of the fully aligned 4-column layout & CTA
  // Phase D (0.90 -> 1.00): Natural release into About CodePlaced
  // =========================================================================
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    const ctx = gsap.context(() => {
      const section = servicesSectionRef.current;
      if (!section) return;

      if (mediaQuery.matches) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const col2 = col2Ref.current;
        const col3 = col3Ref.current;
        const col4 = col4Ref.current;
        const btn = servicesBtnRef.current;
        if (!col2 || !col3 || !col4) return;

        // Viewport height calculation: ensure pinned section and stagger fit comfortably within viewport
        const navbarHeight = 80;
        const availableHeight = window.innerHeight - navbarHeight;
        if (availableHeight < 620) {
          gsap.set([col2, col3, col4], { y: 0 });
          if (btn) gsap.set(btn, { y: 0 });
          return;
        }

        // Appinventiv-style staircase offsets:
        // Col 1 baseline: 0px
        // Col 2: ~110px below Col 1
        // Col 3: ~220px below Col 1
        // Col 4: ~330px below Col 1
        // Proportioned on standard and compact viewports to prevent clipping
        let staggerStep = 110;
        if (availableHeight >= 960) {
          staggerStep = 110; // Large desktop (1920x1080): Col 2 = +110, Col 3 = +220, Col 4 = +330
        } else if (availableHeight >= 800) {
          staggerStep = 75;  // Standard desktop / MacBook (1440x900): Col 2 = +75, Col 3 = +150, Col 4 = +225
        } else if (availableHeight >= 650) {
          staggerStep = 45;  // Compact laptop (1366x768): Col 2 = +45, Col 3 = +90, Col 4 = +135
        } else {
          staggerStep = 30;
        }

        const col2Offset = staggerStep;
        const col3Offset = staggerStep * 2;
        const col4Offset = staggerStep * 3;
        const btnOffset = col3Offset;

        gsap.set(col2, { y: col2Offset });
        gsap.set(col3, { y: col3Offset });
        gsap.set(col4, { y: col4Offset });
        if (btn) gsap.set(btn, { y: btnOffset });

        // Single coordinated ScrollTrigger timeline pinned right below the 80px navbar
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80px",
            end: "+=700",
            pin: true,
            pinSpacing: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 70% of scroll timeline (0.00 -> 0.70) for upward column alignment
        // Col 2 begins first and rises toward Col 1: col2Offset -> 0px
        tl.to(col2, { y: 0, duration: 0.45, ease: "none" }, 0.00);

        // Col 3 follows shortly: col3Offset -> 0px
        tl.to(col3, { y: 0, duration: 0.48, ease: "none" }, 0.10);

        // Col 4 rises last starting from lowest position and reaches alignment at 0.70: col4Offset -> 0px
        tl.to(col4, { y: 0, duration: 0.50, ease: "none" }, 0.20);

        // View All Services button rises in sync with Column 3 to arrive directly below the aligned cards
        if (btn) {
          tl.to(btn, { y: 0, duration: 0.48, ease: "none" }, 0.10);
        }

        // Remaining 30% of scroll timeline (0.70 -> 1.00): Hold fully aligned layout stationary
        tl.to({}, { duration: 0.30 }, 0.70);

        // Ensure ScrollTrigger measurements are freshly calculated
        ScrollTrigger.refresh();
      });

      mm.add("(max-width: 1023px)", () => {
        const col2 = col2Ref.current;
        const col3 = col3Ref.current;
        const col4 = col4Ref.current;
        const btn = servicesBtnRef.current;
        if (col2 && col3 && col4) {
          gsap.set([col2, col3, col4], { y: 0 });
        }
        if (btn) {
          gsap.set(btn, { y: 0 });
        }
      });
    }, servicesSectionRef);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      ctx.revert();
    };
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#000000] text-[#FFFFFF] font-sans antialiased selection:bg-[#00BCD4] selection:text-[#050505]">
      {/* ===================================================================== */}
      {/* SECTION 1: HERO SECTION — EXACTLY 100VH ON DESKTOP WITH INTEGRATED MARQUEE */}
      {/* ===================================================================== */}
      <section className="relative w-full h-[100vh] min-h-[100dvh] max-lg:h-auto max-lg:min-h-[100svh] flex flex-col justify-between pt-[76px] sm:pt-[80px] bg-[#000000] overflow-hidden">
        {/* Full-Width Static Background Image Container covering entire 100vh hero */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <Image
            src={HERO_BACKGROUND_IMAGE}
            alt="CodePlaced senior engineering consultants collaborating in modern glass corporate office"
            fill
            priority
            className="object-cover object-[75%_center] lg:object-[82%_center]"
          />

          {/* Precision Gradient Overlays for Maximum Text Readability while showcasing the collaborative team on right */}
          {/* Left-to-right gradient: dense on left for text contrast, clear on right to showcase image subjects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/92 via-[#000000]/60 to-transparent" />

          {/* Top-to-bottom gradient: seamless navbar blend and dark bottom transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-transparent to-[#000000]/85" />
        </div>

        {/* Hero Foreground Content — Vertically centered within available hero area */}
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto py-3 sm:py-4">
          <div className="max-w-3xl space-y-4 sm:space-y-6 lg:space-y-6">
            {/* Enterprise Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#00BCD4]/40 bg-[#000000]/80 backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#00BCD4]">
                ENGINEERING &bull; DATA &bull; AI CONSULTING
              </span>
            </div>

            {/* Main Headline (Bold, Confident Typography ~68–76px) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-extrabold tracking-tight text-white leading-[1.06]">
              Build AI & Software Products That Drive{" "}
              <span className="text-[#00BCD4]">Business Growth.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs">
              We help businesses turn complex challenges into practical digital solutions through software development, data analytics, business intelligence, and AI-powered automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <Link
                href="/contact#contact-hero"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-11 sm:h-12 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-lg shadow-[#00BCD4]/30 hover:shadow-xl hover:shadow-[#00BCD4]/40 hover:-translate-y-0.5 active:scale-95 text-center cursor-pointer"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>

              <a
                href="#featured-work"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-11 sm:h-12 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 hover:border-[#00BCD4]/60 backdrop-blur-md transition-all duration-200 text-center cursor-pointer"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* 3 Compact Credibility Indicators */}
            <div className="pt-4 sm:pt-5 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
              <div className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center gap-1.5 text-[#00BCD4]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="text-sm sm:text-lg font-extrabold text-white">100+</span>
                </div>
                <p className="text-[11px] sm:text-sm text-slate-300 font-medium leading-snug">
                  Enterprise Deployments
                </p>
              </div>

              <div className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center gap-1.5 text-[#00BCD4]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-sm sm:text-lg font-extrabold text-white">99.99%</span>
                </div>
                <p className="text-[11px] sm:text-sm text-slate-300 font-medium leading-snug">
                  Production SLA
                </p>
              </div>

              <div className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center gap-1.5 text-[#00BCD4]">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span className="text-sm sm:text-lg font-extrabold text-white">2–4 Wks</span>
                </div>
                <p className="text-[11px] sm:text-sm text-slate-300 font-medium leading-snug">
                  Sprint Delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Technology Marquee Anchored at the Bottom of the 100vh Hero */}
        <ServicesMarquee className="shrink-0" />
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2: SERVICES — PINNED 3-PHASE GSAP SCROLL ANIMATION */}
      {/* ===================================================================== */}
      <section
        id="services"
        ref={servicesSectionRef}
        className="w-full bg-[#FFFFFF] lg:min-h-[calc(100vh-80px)] flex flex-col justify-start py-6 sm:py-10 lg:py-4 xl:py-5.5 2xl:py-8 relative text-[#111827] z-20 border-b border-[#E5E7EB]"
      >
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative bg-white">
          {/* Centered Editorial Section Header with Clean Breathing Room */}
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-4 xl:mb-5.5 2xl:mb-8 space-y-1.5 lg:space-y-2 2xl:space-y-2.5 shrink-0">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              OUR EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] xl:text-[36px] 2xl:text-[44px] font-extrabold tracking-tight text-[#111827] leading-[1.12] max-w-[760px] xl:max-w-[820px] mx-auto">
              Technology Services Built Around Your Business Goals.
            </h2>
            <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] 2xl:text-[16px] text-[#56616B] leading-relaxed max-w-2xl mx-auto font-normal pt-0.5">
              From building scalable digital products to engineering data foundations and intelligent automation, we build practical technology solutions tailored for business outcomes.
            </p>
          </div>

          {/* DESKTOP 4-COLUMN STAGGERED SCROLL-ALIGNED GRID */}
          <div className="hidden lg:block w-full relative">
            <div className="grid grid-cols-4 border-t border-[#E5E5E5] relative bg-white">
              {SERVICES_DATA.map((service, idx) => {
                const ServiceIcon = service.icon;
                const colRefs = [col1Ref, col2Ref, col3Ref, col4Ref];
                return (
                  <div
                    key={idx}
                    ref={colRefs[idx]}
                    className="p-3.5 xl:p-4.5 2xl:p-6.5 bg-white border-r border-[#E5E5E5] last:border-r-0 border-t border-[#E5E5E5] -mt-[1px] flex flex-col justify-between group transition-colors hover:bg-[#FAFAFA] min-h-[335px] xl:min-h-[360px] 2xl:min-h-[415px] will-change-transform shadow-xs"
                  >
                    <div className="space-y-2 xl:space-y-2.5 2xl:space-y-3.5">
                      {/* Top Row: Circular Service Icon with Cyan Dot Accent */}
                      <div className="w-8.5 h-8.5 xl:w-9.5 xl:h-9.5 2xl:w-11 2xl:h-11 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center text-[#101820] relative group-hover:border-[#00BCD4]/50 transition-colors shrink-0 mb-1.5 xl:mb-2 2xl:mb-3">
                        <ServiceIcon className="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-5 2xl:h-5 text-[#101820]" />
                        <span className="absolute bottom-0.5 right-0.5 xl:bottom-1 xl:right-1 w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-[#00BCD4]" />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-[16px] xl:text-[18px] 2xl:text-[21px] font-bold text-[#101820] tracking-tight leading-snug min-h-[38px] xl:min-h-[44px] 2xl:min-h-[52px] flex items-center">
                        {service.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-[11.5px] xl:text-[12.5px] 2xl:text-[14px] text-[#56616B] leading-relaxed font-normal min-h-[40px] xl:min-h-[46px] 2xl:min-h-[52px]">
                        {service.description}
                      </p>

                      {/* Capabilities with Thin Dashed Separators */}
                      <div className="pt-1.5 xl:pt-2 2xl:pt-2.5 border-t border-dashed border-[#E5E5E5]">
                        {service.capabilities.map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="py-1 xl:py-1.5 2xl:py-2 border-b border-dashed border-[#E5E5E5] flex items-center justify-between text-[11px] xl:text-[12.5px] 2xl:text-[13.5px] font-medium text-[#101820] group/cap"
                          >
                            <span className="group-hover/cap:text-[#00BCD4] transition-colors">
                              {cap}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/cap:text-[#00BCD4] group-hover/cap:translate-x-0.5 group-hover/cap:-translate-y-0.5 transition-all shrink-0 ml-1.5" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Explore Service Link with Cyan Arrow */}
                    <div className="pt-2 xl:pt-2.5 2xl:pt-3.5 mt-auto">
                      <Link
                        href={service.href}
                        className="flex items-center justify-between text-[12px] xl:text-[13.5px] 2xl:text-[14.5px] font-bold text-[#101820] hover:text-[#00BCD4] group/link transition-colors pt-1.5 xl:pt-2 2xl:pt-2.5 border-t border-[#E5E5E5]"
                      >
                        <span>Explore Service</span>
                        <div className="w-5.5 h-5.5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-full bg-slate-100 group-hover/link:bg-[#00BCD4]/10 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3.5 h-3.5 text-[#00BCD4] group-hover/link:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DESKTOP Centered 'View All Services' Button — Synchronized with Column 3 Rising */}
          <div ref={servicesBtnRef} className="hidden lg:block text-center mt-3.5 xl:mt-5 2xl:mt-8 will-change-transform">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 xl:px-8 2xl:px-9 h-10 xl:h-11 2xl:h-12 rounded-full bg-white border border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-[#050505] text-xs sm:text-sm 2xl:text-base font-extrabold tracking-tight transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-[#00BCD4]/20 group cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* TABLET (2-COLUMN) & MOBILE (1-COLUMN) RESPONSIVE PRESENTATION (lg:hidden) */}
          <div className="lg:hidden mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-b border-[#E5E5E5] py-4">
              {SERVICES_DATA.map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#E5E5E5] rounded-xl space-y-3.5 shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center text-[#101820] relative shrink-0">
                          <ServiceIcon className="w-5 h-5 text-[#101820]" />
                          <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {service.num}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#101820] tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#56616B] leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-2 border-t border-dashed border-[#E5E5E5]">
                        {service.capabilities.map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="py-2 border-b border-dashed border-[#E5E5E5] flex items-center justify-between text-sm font-medium text-[#101820]"
                          >
                            <span>{cap}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E5E5E5] mt-4">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-between w-full text-sm font-extrabold text-[#00BCD4] hover:text-[#101820] transition-colors"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* TABLET & MOBILE Centered 'View All Services' Button */}
            <div className="text-center pt-6">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-white border border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-[#050505] text-sm font-extrabold tracking-tight transition-all duration-200 shadow-xs group cursor-pointer"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3: ABOUT CODEPLACED — COMPACT BLACK SECTION (#000000) */}
      {/* ===================================================================== */}
      <section className="py-8 sm:py-9.5 bg-[#000000] border-b border-[#292929] text-white flex items-center">
        <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column (45%): Team Photograph */}
            <div className="w-full lg:w-[45%] flex items-center">
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#292929] bg-[#0B0B0B] shadow-2xl h-[260px] sm:h-[330px] lg:h-[390px] min-h-[260px] group">
                <Image
                  src="/images/about-team-collab.jpg"
                  alt="CodePlaced senior engineering team collaborating in modern office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Right Column (55%): Company Content, Principles, Verified Stats & CTA */}
            <div className="w-full lg:w-[55%] flex flex-col justify-between space-y-4 lg:pl-3">
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
                  ABOUT CODEPLACED
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-white leading-tight">
                  Your Technology Partner for What&apos;s Next.
                </h2>
                <div className="space-y-2 text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  <p>
                    CodePlaced works with businesses to understand their challenges and develop technology solutions that make a practical difference.
                  </p>
                  <p>
                    Our work brings together software engineering, data platforms, analytics, and AI to help organizations improve operations, connect systems, and build scalable digital products.
                  </p>
                </div>
              </div>

              {/* Three Value Highlights / Principles */}
              <div className="space-y-2 pt-0.5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  What Drives Our Work
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Highlight 1 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00BCD4]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Business-First</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                        Focusing on measurable ROI before writing code.
                      </p>
                    </div>
                  </div>

                  {/* Highlight 2 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] flex items-center justify-center shrink-0">
                      <Layers className="w-3.5 h-3.5 text-[#00BCD4]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Practical Engineering</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                        Battle-tested architectures your teams can maintain.
                      </p>
                    </div>
                  </div>

                  {/* Highlight 3 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] flex items-center justify-center shrink-0">
                      <Users className="w-3.5 h-3.5 text-[#00BCD4]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Long-Term Partnership</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                        High velocity, transparent milestones, real value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Cards: Clean 4-Column Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-0.5">
                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-0.5 shadow-xs">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">100+</div>
                  <div className="text-xs font-medium text-slate-400">Deployments</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-0.5 shadow-xs">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">95%</div>
                  <div className="text-xs font-medium text-slate-400">Retention Rate</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-0.5 shadow-xs">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">2–4 Wks</div>
                  <div className="text-xs font-medium text-slate-400">Sprint Delivery</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-0.5 shadow-xs">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">99.99%</div>
                  <div className="text-xs font-medium text-slate-400">Production SLA</div>
                </div>
              </div>

              {/* Prominent Learn More CTA */}
              <div className="pt-1.5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] text-sm sm:text-base font-extrabold tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00BCD4]/30 hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
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
      {/* SECTION 4: FEATURED CASE STUDY — COMPACT WHITE SECTION WITH BLACK CARD */}
      {/* ===================================================================== */}
      <section id="featured-work" className="py-8 sm:py-9.5 bg-[#FFFFFF] border-b border-[#E5E7EB] text-[#111827]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Left-Aligned Title and Right-Aligned Link (Nexora Reference) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 sm:mb-6">
            <div className="space-y-1.5 max-w-2xl text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                FEATURED CASE STUDY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
                Real Projects. Measurable Impact.
              </h2>
              <p className="text-sm sm:text-base text-[#56616B] leading-relaxed font-normal">
                Explore how we transform business requirements into working digital products.
              </p>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#111827] hover:text-[#00AFC8] transition-colors group self-start md:self-end pb-1 border-b-2 border-[#111827]/20 hover:border-[#00AFC8]"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Premium Black Project Showcase Card (12-14px border radius, subtle hover scale & border) */}
          <div className="group bg-[#000000] rounded-[14px] border border-[#242424] hover:border-[#383838] p-5 sm:p-7 lg:p-8 text-white shadow-2xl relative overflow-hidden transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-center">
              {/* Left Column (55%): Device Showcase with Authentic Tuitionstime Screens */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
                <div className="relative w-full flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-300 ease-out">
                  {/* Large MacBook Pro displaying authentic Tuitionstime website */}
                  <Image
                    src="/images/case-studies/tuitionstime/tuitionstime-photorealistic-laptop-hero.webp"
                    alt="Tuitionstime marketplace website interface on MacBook Pro"
                    width={1100}
                    height={730}
                    priority
                    className="w-full h-auto object-contain max-h-[320px] sm:max-h-[360px] lg:max-h-[400px] drop-shadow-2xl"
                  />

                  {/* Photorealistic Black Titanium Smartphone Mockup displaying Tuitionstime Tutor Discovery */}
                  <div className="absolute -bottom-3 sm:-bottom-4 right-0 sm:right-3 md:right-5 lg:right-2 xl:right-5 w-[110px] xs:w-[125px] sm:w-[145px] md:w-[160px] lg:w-[170px] xl:w-[185px] z-10 pointer-events-none select-none transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <Image
                      src="/images/case-studies/tuitionstime/tuitionstime-phone-photorealistic.webp"
                      alt="Tuitionstime mobile tutor discovery platform on premium smartphone"
                      width={690}
                      height={1285}
                      className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column (45%): Project Information & Features */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] text-xs font-mono font-bold uppercase tracking-wider">
                  EDTECH &bull; DIGITAL MARKETPLACE
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[30px] font-extrabold text-white tracking-tight leading-tight">
                  Tuitionstime — A Complete EdTech Marketplace
                </h3>

                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-normal">
                  A connected education platform bringing students, tutors, and parents together through tutor discovery, online classes, learning management, and communication tools.
                </p>

                {/* Four Concise Platform Features */}
                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#0B0B0B] border border-[#242424] flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-[#00BCD4] shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-200">
                      Tutor Discovery & Matching
                    </span>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#0B0B0B] border border-[#242424] flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#00BCD4] shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-200">
                      Online Class Booking
                    </span>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#0B0B0B] border border-[#242424] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#00BCD4] shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-200">
                      Class & Schedule Management
                    </span>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#0B0B0B] border border-[#242424] flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-[#00BCD4] shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-200">
                      Student & Tutor Experiences
                    </span>
                  </div>
                </div>

                {/* Verified Project Metrics in Clean Horizontal Row */}
                <div className="grid grid-cols-3 gap-2 pt-0.5">
                  <div className="p-2.5 rounded-xl bg-[#0B0B0B] border border-[#242424] text-center space-y-0.5">
                    <div className="text-lg sm:text-xl font-black text-[#00BCD4]">10K+</div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Active Students</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#0B0B0B] border border-[#242424] text-center space-y-0.5">
                    <div className="text-lg sm:text-xl font-black text-[#00BCD4]">2K+</div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Expert Tutors</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#0B0B0B] border border-[#242424] text-center space-y-0.5">
                    <div className="text-lg sm:text-xl font-black text-[#00BCD4]">50K+</div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Classes Completed</div>
                  </div>
                </div>

                {/* Primary CTA Button with Smooth Hover Motion */}
                <div className="pt-0.5">
                  <Link
                    href="/case-studies/tuitionstime"
                    className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00BCD4]/30 cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5: INDUSTRIES WE SERVE — PURE BLACK WITH WHITE HOVER CARDS */}
      {/* ===================================================================== */}
      <section className="py-8 sm:py-9.5 bg-[#000000] border-b border-[#292929] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading & Supporting Text */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              CROSS-INDUSTRY DOMAIN EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
              We work with businesses across industries to build solutions that address real operational and technology challenges.
            </p>
          </div>

          {/* 8 Structured Industry Cards (4-Column Desktop Grid) with Refined White Hover Transition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
            {INDUSTRIES_DATA.map((industry, idx) => {
              const IndIcon = industry.icon;
              return (
                <Link
                  key={idx}
                  href={industry.href}
                  className="group p-5 rounded-2xl bg-[#0B0B0B] hover:bg-[#FFFFFF] focus-visible:bg-[#FFFFFF] border border-[#262626] hover:border-[#E5E7EB] focus-visible:border-[#E5E7EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-xs flex flex-col justify-between h-full outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      {/* Icon Container: retains cyan icon, subtle container with hover transition */}
                      <div className="w-10 h-10 rounded-xl bg-[#161616] group-hover:bg-[#00BCD4]/10 group-focus-visible:bg-[#00BCD4]/10 border border-[#262626] group-hover:border-[#00BCD4]/30 flex items-center justify-center transition-colors duration-300">
                        <IndIcon className="w-5 h-5 text-[#00BCD4]" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00BCD4] group-focus-visible:text-[#00BCD4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>

                    {/* Title: white by default, near-black #111111 on hover */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#111111] group-focus-visible:text-[#111111] transition-colors duration-300 tracking-tight">
                      {industry.title}
                    </h3>

                    {/* Description: light gray by default, dark gray #4B5563 on hover */}
                    <p className="text-xs sm:text-sm text-[#9CA3AF] group-hover:text-[#4B5563] group-focus-visible:text-[#4B5563] leading-relaxed transition-colors duration-300">
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
      {/* SECTION 6: OUR PROCESS — COMPACT WHITE SECTION (#FFFFFF) */}
      {/* ===================================================================== */}
      <section className="py-7.5 sm:py-9 bg-[#FFFFFF] border-b border-[#E5E7EB] text-[#111827]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              HOW WE WORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
              A Clear Path From Idea to Impact.
            </h2>
            <p className="text-sm sm:text-base text-[#56616B] leading-relaxed font-normal">
              Our proven delivery framework ensures transparency, velocity, and measurable business outcomes.
            </p>
          </div>

          {/* 4 Connected Phases with Subtle Flow Connector */}
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-8 sm:top-9 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#00AFC8]/20 via-[#00AFC8]/50 to-[#00AFC8]/20 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4.5 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#00AFC8] transition-all duration-300 space-y-3 group hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Cyan Outlined Circular Step Badge */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#00AFC8] bg-[#FFFFFF] flex items-center justify-center text-xs sm:text-sm font-mono font-extrabold text-[#00AFC8] group-hover:bg-[#00AFC8]/10 transition-colors shadow-xs">
                    {step.step}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#00AFC8] transition-colors tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#56616B] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 7: CLIENT TESTIMONIALS — COMPACT BLACK BACKGROUND (#000000) */}
      {/* ===================================================================== */}
      <section className="py-7.5 sm:py-9 bg-[#000000] border-b border-[#292929] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
              CLIENT SUCCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* 3-Column Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={idx}
                className="p-4.5 sm:p-5.5 rounded-2xl bg-[#0B0B0B] border border-[#292929] hover:border-[#00BCD4]/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg"
              >
                <div className="space-y-2.5">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {/* Real Testimonial Quote */}
                  <p className="text-sm sm:text-base text-[#E5E7EB] leading-relaxed italic font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3.5 mt-3.5 border-t border-[#292929] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#161616] border border-[#292929] text-[#00BCD4] flex items-center justify-center font-bold text-xs">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.author}</div>
                    <div className="text-xs text-[#9CA3AF]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 8: FAQ SECTION — COMPACT WHITE BACKGROUND (#FFFFFF) */}
      {/* ===================================================================== */}
      <section className="py-8 sm:py-9.5 bg-[#FFFFFF] relative text-[#111827] border-b border-[#E5E7EB]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
                FAQS
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
                Got Questions? We&apos;ve Got Answers.
              </h2>

              <p className="text-sm sm:text-base text-[#56616B] leading-relaxed font-normal">
                Find quick answers to common questions about our technical capabilities, engagement models, and delivery timelines.
              </p>

              <div className="pt-1.5">
                <div className="p-4 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] space-y-1">
                  <h4 className="text-sm font-bold text-[#111827]">Have a custom inquiry?</h4>
                  <p className="text-xs sm:text-sm text-[#56616B]">
                    Reach out to our leadership directly at{" "}
                    <a href="mailto:hello@codeplaced.com" className="text-[#00AFC8] hover:underline font-semibold">
                      hello@codeplaced.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Accordion with Clean Dividers & Cyan Active State) */}
            <div className="lg:col-span-7 space-y-2 sm:space-y-2.5">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] overflow-hidden transition-all duration-200 hover:border-[#00AFC8]/60"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#111827] hover:text-[#00AFC8] transition-colors">
                        {faq.question}
                      </span>
                      <div className="w-7 h-7 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center shrink-0 text-[#00AFC8]">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          <div className="px-3.5 sm:px-4 pb-3.5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E5E7EB]">
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
      {/* SECTION 9: FINAL CTA BANNER — COMPACT BLACK PHOTOGRAPHIC BANNER (#000000) */}
      {/* ===================================================================== */}
      <section className="py-6 sm:py-8 bg-[#000000] relative">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0B0B0B] border border-[#292929] shadow-2xl">
            {/* Background Photographic Image on Right with Tuned Contrast Gradient Overlay */}
            <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full opacity-65 lg:opacity-85 pointer-events-none">
              <Image
                src="/images/cta-office-collab.jpg"
                alt="CodePlaced senior software architects collaborating at modern conference room"
                fill
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 max-w-2xl space-y-3.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00BCD4] block">
                START YOUR PROJECT
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Build Something Intelligent?
              </h2>

              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-normal max-w-xl">
                Tell us what you&apos;re working on. We&apos;ll help you explore the right technology approach for your business.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center justify-center gap-2 px-7 h-11 sm:h-12 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-lg shadow-[#00BCD4]/30 hover:shadow-xl hover:shadow-[#00BCD4]/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 h-11 sm:h-12 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 transition-all duration-200 cursor-pointer"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>

              {/* 3 Small Supporting Trust Points */}
              <div className="pt-3.5 border-t border-[#292929] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-medium">
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
