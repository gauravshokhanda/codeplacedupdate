"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Play,
  Check,
  Search,
  Calendar,
  CreditCard,
  Video,
  Star,
  Users,
  Smartphone,
  Globe,
  ChevronLeft,
  ChevronRight,
  Shield,
  Briefcase,
  X,
  Laptop,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

import { TuitionstimeThreePhonesShowcase } from "./TuitionstimePhoneScreens";

// =============================================================================
// DATA DEFINITIONS (PRESERVING AUTHENTIC TUITIONSTIME DATA & VERIFIED METRICS)
// =============================================================================

const HERO_METRICS = [
  { value: "10K+", label: "Active Students" },
  { value: "2K+", label: "Expert Tutors" },
  { value: "50K+", label: "Classes Completed" },
];

const OVERVIEW_METADATA = [
  { label: "Client", value: "Tuitionstime" },
  { label: "Industry", value: "Education Technology" },
  { label: "Our Role", value: "Web App, Mobile App, Backend, Integrations" },
];

const THREE_SIDED_ECOSYSTEM = [
  {
    role: "Students",
    action: "Find, Demo, Learn",
    description:
      "Discover suitable tutors, book demonstrations, attend classes, and access learning resources.",
  },
  {
    role: "Tutors",
    action: "Teach, Earn, Grow",
    description:
      "Connect with students, manage classes, share educational content, and track earnings.",
  },
  {
    role: "Platform",
    action: "Match, Operate, Verify",
    description:
      "Coordinate users, verify tutors, oversee learning workflows, and manage platform operations.",
  },
];

const CHALLENGES = [
  {
    step: "01",
    title: "Tutor Matching",
    description:
      "Helping students discover relevant tutors based on subject, location, availability, learning preferences, and budget.",
    cardBg: "bg-[#FFF1F2]", // Soft pastel rose
    cardBorder: "border-[#FFE4E6]",
    badgeBg: "bg-[#FFE4E6]",
    badgeText: "text-[#E11D48]",
    icon: (
      <svg className="w-5 h-5 text-[#E11D48]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Manual Operations",
    description:
      "Reducing repetitive coordination across demo requests, classes, schedules, and online meetings.",
    cardBg: "bg-[#FEFCE8]", // Soft pastel cream-yellow
    cardBorder: "border-[#FEF08A]",
    badgeBg: "bg-[#FEF08A]",
    badgeText: "text-[#D97706]",
    icon: (
      <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Trust & Verification",
    description:
      "Supporting tutor verification, payout ownership checks, and reliable financial workflows.",
    cardBg: "bg-[#F0FDF4]", // Soft pastel mint-green
    cardBorder: "border-[#DCFCE7]",
    badgeBg: "bg-[#DCFCE7]",
    badgeText: "text-[#16A34A]",
    icon: (
      <svg className="w-5 h-5 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Platform Growth",
    description:
      "Supporting multiple learning and revenue models while improving organic discoverability.",
    cardBg: "bg-[#F0F9FF]", // Soft pastel sky blue
    cardBorder: "border-[#BAE6FD]",
    badgeBg: "bg-[#BAE6FD]",
    badgeText: "text-[#0284C7]",
    icon: (
      <svg className="w-5 h-5 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m22 7-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
      </svg>
    ),
  },
];

const SOLUTION_FEATURES = [
  {
    icon: Search,
    label: "Tutor Discovery",
    desc: "Search and filter tutors using structured preferences.",
  },
  {
    icon: Calendar,
    label: "Demo & Class Scheduling",
    desc: "Coordinate trial sessions and regular learning.",
  },
  {
    icon: Video,
    label: "Meeting Automation",
    desc: "Support online class meeting workflows.",
  },
  {
    icon: CreditCard,
    label: "Secure Payments",
    desc: "Manage transactions, tutor wallets, and payouts.",
  },
  {
    icon: Laptop,
    label: "Learning Resources",
    desc: "Support group batches and digital notes.",
  },
  {
    icon: Users,
    label: "Analytics & Administration",
    desc: "Track activity and manage platform operations.",
  },
];

const PLATFORM_WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Student Requirement",
    desc: "Learners define their specific academic needs, subject, and learning preferences.",
  },
  {
    step: "02",
    title: "Tutor Matching",
    desc: "Smart matching surfaces suitable verified tutors based on expertise, location, and budget.",
  },
  {
    step: "03",
    title: "Demo Request",
    desc: "Students book trial sessions with shortlisted educators to assess learning fit.",
  },
  {
    step: "04",
    title: "Meeting & Scheduling",
    desc: "Structured coordination schedules sessions and automated online classroom links.",
  },
  {
    step: "05",
    title: "Regular Classes",
    desc: "Continuous learning sessions, progress tracking, and structured ongoing class management.",
  },
];

const PLATFORM_ROLES = [
  {
    id: "student",
    name: "Student App",
    heading: "Tailored Experience for Curious Learners",
    points: [
      "Find and connect with verified tutors",
      "Book online or in-person classes",
      "Track upcoming and past classes",
      "Make secure payments",
      "Rate and review tutors",
    ],
  },
  {
    id: "tutor",
    name: "Tutor App",
    heading: "Complete Teaching Business Hub",
    points: [
      "Receive real-time student requirement leads",
      "Set custom hourly and monthly batch rates",
      "Automate classroom links and schedule sync",
      "Monitor multi-state wallet and payouts",
      "Publish revision notes for digital sales",
    ],
  },
  {
    id: "parent",
    name: "Parent App",
    heading: "Transparency and Safety for Families",
    points: [
      "Monitor academic progression and session logs",
      "Direct verified messaging with mentors",
      "Review transparent billing and receipts",
      "Verify tutor background check documents",
      "Timely schedule notifications and reminders",
    ],
  },
  {
    id: "web",
    name: "Web Platform",
    heading: "Central Command Center & Operations",
    points: [
      "Administrative oversight and dispute management",
      "Programmatic SEO landing architecture",
      "Lead routing algorithms and analytics",
      "Browser video classroom with whiteboard",
      "Escrow settlements and commission tracking",
    ],
  },
];

const ROLE_MOCKUPS: Record<
  string,
  {
    screen1: { src: string; alt: string };
    screen2: { src: string; alt: string };
    screen3: { src: string; alt: string };
  }
> = {
  student: {
    screen1: {
      src: "/images/case-studies/tuitionstime/phone-find-tutor.png",
      alt: "Tuitionstime Student App — Find a Tutor Screen",
    },
    screen2: {
      src: "/images/case-studies/tuitionstime/phone-my-classes.png",
      alt: "Tuitionstime Student App — Class Management & Schedule",
    },
    screen3: {
      src: "/images/case-studies/tuitionstime/phone-live-class.png",
      alt: "Tuitionstime Live Online Video Tutoring Classroom",
    },
  },
  tutor: {
    screen1: {
      src: "/images/case-studies/tuitionstime/find-students-ui.png",
      alt: "Tuitionstime Tutor App — Student Requirement Leads",
    },
    screen2: {
      src: "/images/case-studies/tuitionstime/group-batches-hd.png",
      alt: "Tuitionstime Tutor App — Group Batches & Scheduling",
    },
    screen3: {
      src: "/images/case-studies/tuitionstime/phone-live-class.png",
      alt: "Tuitionstime Tutor App — Live Classroom Session",
    },
  },
  parent: {
    screen1: {
      src: "/images/case-studies/tuitionstime/matching-preferences-clean.png",
      alt: "Tuitionstime Parent App — Tutor Matching & Background Verification",
    },
    screen2: {
      src: "/images/case-studies/tuitionstime/phone-my-classes.png",
      alt: "Tuitionstime Parent App — Schedule & Attendance Logs",
    },
    screen3: {
      src: "/images/case-studies/tuitionstime/phone-live-class.png",
      alt: "Tuitionstime Parent App — Live Session Transparency",
    },
  },
  web: {
    screen1: {
      src: "/images/case-studies/tuitionstime/phone-find-tutor.png",
      alt: "Tuitionstime Web Platform — Marketplace Discovery",
    },
    screen2: {
      src: "/images/case-studies/tuitionstime/phone-my-classes.png",
      alt: "Tuitionstime Web Platform — Class Operations",
    },
    screen3: {
      src: "/images/case-studies/tuitionstime/phone-live-class.png",
      alt: "Tuitionstime Web Platform — Video Classroom",
    },
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Business Discovery",
    desc: "Understanding student acquisition, tutor onboarding, and tuition operations.",
  },
  {
    step: "02",
    title: "Marketplace Architecture",
    desc: "Designing connected experiences for students, tutors, and administrators.",
  },
  {
    step: "03",
    title: "Full-Stack Development",
    desc: "Building discovery, demos, classes, learning resources, and commerce workflows.",
  },
  {
    step: "04",
    title: "Automation",
    desc: "Reducing repetitive coordination across meetings and class operations.",
  },
  {
    step: "05",
    title: "Trust & Analytics",
    desc: "Supporting verification, payouts, and performance visibility.",
  },
  {
    step: "06",
    title: "SEO & Optimization",
    desc: "Improving organic discovery, performance, and the evolving product experience.",
  },
];

const TECH_STACK = [
  {
    name: "React.js",
    role: "Web App",
    svg: (
      <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#00C8E8" />
        <g stroke="#00C8E8" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "React Native",
    role: "Mobile App",
    svg: (
      <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#38BDF8" />
        <g stroke="#38BDF8" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    role: "Backend",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3.5 6.9V17.1L12 22L20.5 17.1V6.9L12 2Z"
          stroke="#16A34A"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12 6.5V17.5M7.5 9.2L12 11.8L16.5 9.2M7.5 14.8L12 17.5L16.5 14.8"
          stroke="#16A34A"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    role: "Database",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 6 7.5 6 13.5C6 17.1 8.7 20 12 20.5C15.3 20 18 17.1 18 13.5C18 7.5 12 2 12 2Z"
          stroke="#059669"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12 2V22"
          stroke="#059669"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Firebase",
    role: "Database",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path
          d="M4.5 18L10 3.5L13.5 10.5L4.5 18Z"
          fill="#F59E0B"
          fillOpacity="0.4"
        />
        <path
          d="M4.5 18L17.5 6.5L19.5 10.5L13 21.5L4.5 18Z"
          stroke="#F59E0B"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M13 21.5L10 3.5L4.5 18L13 21.5Z"
          stroke="#D97706"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Stripe",
    role: "Notifications",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="4"
          stroke="#6366F1"
          strokeWidth="1.8"
        />
        <path
          d="M9 14.5C9.5 15.2 10.5 15.8 11.8 15.8C13.5 15.8 14.5 14.8 14.5 13.5C14.5 10.8 9.5 11.2 9.5 9.2C9.5 8.2 10.4 7.5 11.7 7.5C12.8 7.5 13.6 8 14 8.7"
          stroke="#6366F1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Twilio",
    role: "Communication",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#E11D48" strokeWidth="1.8" />
        <circle cx="9" cy="9.5" r="1.5" fill="#E11D48" />
        <circle cx="15" cy="9.5" r="1.5" fill="#E11D48" />
        <circle cx="9" cy="14.5" r="1.5" fill="#E11D48" />
        <circle cx="15" cy="14.5" r="1.5" fill="#E11D48" />
      </svg>
    ),
  },
  {
    name: "Zoom",
    role: "Video Classes",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="6"
          width="12"
          height="12"
          rx="3"
          stroke="#0284C7"
          strokeWidth="1.8"
        />
        <path
          d="M15 10L21 6.5V17.5L15 14V10Z"
          stroke="#0284C7"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const RESULTS_METRICS = [
  { value: "10K+", label: "Active Students" },
  { value: "2K+", label: "Expert Tutors" },
  { value: "50K+", label: "Classes Completed" },
  { value: "4.8/5", label: "Average Rating" },
];

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Tuitionstime has made it so easy to find the right tutor for my daughter. The platform is intuitive, and the support team is excellent!",
    author: "Neha Verma",
    role: "Parent",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80",
  },
  {
    id: 2,
    quote:
      "Finding serious students in my local neighborhood used to take weeks of word-of-mouth. Now, student demo requests are organized directly on my phone.",
    author: "Rajesh Sharma",
    role: "Senior Mathematics Tutor",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80",
  },
  {
    id: 3,
    quote:
      "The trial class gave us complete confidence before paying. The classroom video call and schedule reminders work like clockwork.",
    author: "Pooja Malhotra",
    role: "Parent",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=80",
  },
];

const RELATED_CASE_STUDIES = [
  {
    id: "kfc",
    title: "KFC Mobile App",
    description:
      "Expanded KFC's digital presence with 7 mobile apps across global markets.",
    image:
      "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=800&q=80",
    href: "/case-studies",
  },
  {
    id: "amalfi",
    title: "Property Management Platform",
    description:
      "A complete solution for property planning, 3D design, and cost estimation.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    href: "/case-studies/amalfi-acquisition",
  },
  {
    id: "receivables",
    title: "Receivables Marketplace",
    description:
      "A platform connecting buyers and sellers for distressed receivables.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    href: "/case-studies",
  },
];

// =============================================================================
// MAIN COMPONENT (ALTERNATING DARK & CLEAN WHITE CONTRAST SECTIONS)
// =============================================================================

export function TuitionstimeCaseStudy() {
  const [activeRoleTab, setActiveRoleTab] = useState<string>("student");
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  const activeRole =
    PLATFORM_ROLES.find((r) => r.id === activeRoleTab) || PLATFORM_ROLES[0];
  const currentScreens =
    ROLE_MOCKUPS[activeRoleTab] || ROLE_MOCKUPS.student;
  const activeTestimonial = TESTIMONIALS[testimonialIndex];

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#00C8E8] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (SOLID BLACK #050505 WITH ENLARGED STATIC LAPTOP MOCKUP)  */}
      {/* ========================================================================= */}
      <section id="hero" className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 bg-[#050505] text-white overflow-hidden scroll-mt-20">
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Heading, Subtitle, Stats & Dual CTAs (~42% width) */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-7 text-left z-10">
              {/* Outlined Case Study Pill */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-white/[0.12] text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C8E8] animate-pulse" />
                  <span>CASE STUDY</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white">Tuitionstime</span>
                </span>
              </div>

              {/* Large Bold Headline with Cyan Emphasis */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-black tracking-tight text-white leading-[1.06]">
                Tuitionstime <br />
                A Complete{" "}
                <span className="text-[#00C8E8]">EdTech</span> <br />
                Marketplace
              </h1>

              {/* Supporting Summary */}
              <p className="text-base sm:text-[17px] text-[#94A3B8] leading-relaxed font-normal max-w-xl">
                An end-to-end EdTech marketplace connecting students, tutors, and
                administrators through intelligent discovery, structured
                matching, class management, payments, and learning experiences.
              </p>

              {/* Compact Metrics Row */}
              <div className="pt-1">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 py-3.5 px-4 sm:px-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] max-w-lg">
                  {HERO_METRICS.map((m, idx) => (
                    <div
                      key={idx}
                      className={`text-left ${
                        idx > 0 ? "border-l border-white/[0.08] pl-3 sm:pl-4" : ""
                      }`}
                    >
                      <div className="text-2xl sm:text-3xl font-black text-[#00C8E8] tracking-tight font-mono">
                        {m.value}
                      </div>
                      <div className="text-xs text-white/90 mt-0.5 font-medium whitespace-nowrap">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dual CTAs: View Live Project + Read Case Study */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://www.tuitionstime.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-mono text-xs sm:text-[13px] font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
                >
                  <span>View Live Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black" />
                </a>

                <a
                  href="#about-project"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("about-project");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#about-project");
                    }
                  }}
                  className="px-7 py-3.5 rounded-full bg-transparent hover:bg-white/[0.05] text-white border border-[#00C8E8] font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00C8E8] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Prominent Completely Static Laptop & Mobile Product Composition (~58% width) */}
            <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-start lg:-ml-2 pt-6 lg:pt-0">
              <div className="relative w-full max-w-[850px] aspect-[2040/1380] drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                <Image
                  src="/images/case-studies/tuitionstime/tuitionstime-hero-laptop-phone.webp"
                  alt="Tuitionstime Official Web Platform and Mobile Showcase"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 58vw, 850px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT THE PROJECT (CLEAN WHITE #FFFFFF SECTION - NO PARTITION BORDER)  */}
      {/* ========================================================================= */}
      <section id="about-project" className="py-20 lg:py-24 bg-white text-[#111111] scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          {/* Header & Narrative */}
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
              ABOUT THE PROJECT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111111] tracking-tight leading-[1.14]">
              Building a Smarter Way <br />
              to <span className="text-[#00C8E8]">Learn and Teach</span>
            </h2>

            <div className="space-y-3.5 text-base sm:text-[17px] text-[#555C68] leading-relaxed font-normal">
              <p>
                Tuitionstime is a multi-sided EdTech marketplace designed to
                simplify how students find tutors, how educators manage their
                teaching, and how administrators operate the platform.
              </p>
              <p>
                Rather than functioning as a basic tutor directory, it brings
                tutor discovery, demo bookings, class scheduling, learning
                resources, payments, and platform operations into one connected
                ecosystem.
              </p>
            </div>
          </div>

          {/* Compact Three-Part Horizontal Explanation with Comfortable Padding */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
            {THREE_SIDED_ECOSYSTEM.map((eco, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-[#F7F7F7] border border-[#E5E7EB] space-y-3 text-left shadow-xs flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#00C8E8] uppercase tracking-wider">
                    {eco.role}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-sm sm:text-base font-bold text-[#111111]">
                    {eco.action}
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] text-[#555C68] leading-relaxed">
                  {eco.description}
                </p>
              </div>
            ))}
          </div>

          {/* Metadata 3-Column Strip */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200 text-left">
            {OVERVIEW_METADATA.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  {item.label}
                </span>
                <span className="text-base font-bold text-[#111111] block">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE CHALLENGE (SOLID WHITE #FFFFFF - FLOWS SEAMLESSLY FROM ABOUT)      */}
      {/* ========================================================================= */}
      <section id="challenges" className="py-20 lg:py-24 bg-white text-[#111111] scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12 text-left">
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
              THE CHALLENGE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111111] tracking-tight leading-[1.14]">
              Solving Key Challenges <br />
              in <span className="text-[#00C8E8]">Education</span>
            </h2>

            <p className="text-base sm:text-[17px] text-[#555555] leading-relaxed">
              Building a tutoring marketplace involves more than connecting
              students with teachers. The platform must coordinate discovery,
              trust, scheduling, payments, and ongoing learning while supporting
              different user needs.
            </p>
          </div>

          {/* 4 Compact Pastel Cards: 1 Row Desktop, 2 Columns Tablet, Stacked Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHALLENGES.map((ch) => (
              <div
                key={ch.step}
                className={`p-7 sm:p-8 rounded-2xl ${ch.cardBg} border ${ch.cardBorder} flex flex-col justify-between space-y-6 transition-transform duration-300 hover:-translate-y-1 min-h-[260px]`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl ${ch.badgeBg} flex items-center justify-center shrink-0`}
                  >
                    {ch.icon}
                  </div>
                  <span className={`text-xs font-mono font-black ${ch.badgeText}`}>
                    {ch.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                    {ch.title}
                  </h3>
                  <p className="text-sm sm:text-[14.5px] text-[#475569] leading-relaxed">
                    {ch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE SOLUTION (SOLID BLACK #050505 WITH CENTERED DASHBOARD LAPTOP)      */}
      {/* ========================================================================= */}
      <section id="solution" className="py-20 lg:py-24 bg-[#050505] text-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Heading, Narrative & 6 Compact Feature Cards */}
            <div className="lg:col-span-6 space-y-7 text-left">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
                  THE SOLUTION
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-[1.14]">
                  A Unified Learning <br />
                  <span className="text-[#00C8E8]">Ecosystem</span>
                </h2>

                <p className="text-base sm:text-[17px] text-[#94A3B8] leading-relaxed max-w-xl">
                  CodePlaced engineered a connected marketplace experience
                  covering tutor discovery, student requirements,
                  demo-to-class conversion, scheduling, learning resources,
                  verification, payments, and analytics. The platform brings
                  multiple user journeys and operational workflows together
                  instead of relying on disconnected tools.
                </p>
              </div>

              {/* 6 Capability Cards with Explanatory Lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {SOLUTION_FEATURES.map((feat, idx) => {
                  const IconComp = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#00C8E8]/40 transition-colors flex items-start gap-3.5 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#00C8E8]/10 text-[#00C8E8] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-sm sm:text-[15px] font-bold text-slate-100 group-hover:text-white transition-colors">
                          {feat.label}
                        </div>
                        <div className="text-xs sm:text-[13px] text-[#94A3B8] leading-snug">
                          {feat.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: 20% Enlarged Dashboard Laptop Mockup */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[700px] lg:max-w-[740px]">
                {/* Modern Laptop Mockup Chassis */}
                <div className="relative w-full">
                  {/* Screen Lid */}
                  <div className="relative w-full aspect-[16/10] rounded-t-2xl bg-[#14161B] border-[3px] border-[#2C3038] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.85)]">
                    {/* Web Camera Dot */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/90 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-[#00C8E8]/50" />
                    </div>
                    {/* Dashboard Screen */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0A0A0A]">
                      <Image
                        src="/images/case-studies/tuitionstime/hero-tutor-listing-clean.png"
                        alt="Tuitionstime Student Dashboard Interface"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 95vw, 740px"
                      />
                    </div>
                  </div>
                  {/* Laptop Base Notch */}
                  <div className="relative w-[106%] -left-[3%] h-3.5 bg-[#1F232B] rounded-b-lg border-t border-white/10 shadow-lg flex items-center justify-center">
                    <div className="w-16 h-1 bg-[#14161B] rounded-b" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOW THE PLATFORM WORKS (CLEAN WHITE #FFFFFF MINIMAL WORKFLOW TIMELINE) */}
      {/* ========================================================================= */}
      <section id="discovery-workflow" className="py-16 sm:py-20 lg:py-22 bg-white text-[#111111] scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12 text-left">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
              HOW THE PLATFORM WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111111] tracking-tight leading-[1.14]">
              From Tutor Discovery to <span className="text-[#00C8E8]">Regular Learning</span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#555C68] leading-relaxed">
              Tuitionstime connects the complete student journey, from
              identifying a learning requirement to finding a suitable tutor,
              attending a demo, and continuing with regular classes.
            </p>
          </div>

          {/* Minimal 5-Step Connected Timeline */}
          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[22px] left-[5%] right-[5%] h-[2px] bg-[#E2E8F0] -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
              {PLATFORM_WORKFLOW_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center space-y-3.5"
                >
                  {/* Small Cyan Numbered Circle */}
                  <div className="w-11 h-11 rounded-full bg-[#00C8E8] text-black font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-xs ring-4 ring-white">
                    {idx + 1}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#111111] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555C68] leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Supporting Sentence */}
          <p className="text-sm text-[#64748B] pt-3 text-left lg:text-center font-medium">
            Structured workflows help reduce repetitive coordination while
            making each stage of the learning journey easier to manage.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PLATFORM OVERVIEW (SOLID WHITE #FFFFFF SECTION - NO PARTITION BORDER)  */}
      {/* ========================================================================= */}
      <section id="platform-overview" className="py-20 lg:py-24 bg-white text-[#111111] scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading, Role Tabs & Role-Specific Checklist */}
            <div className="lg:col-span-5 space-y-7 text-left">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
                  PLATFORM OVERVIEW
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111111] tracking-tight leading-[1.14]">
                  Three Experiences, <br />
                  One <span className="text-[#00C8E8]">Connected Platform</span>
                </h2>

                <p className="text-base sm:text-[17px] text-[#555C68] leading-relaxed max-w-xl">
                  Tuitionstime provides dedicated experiences for students, tutors,
                  and parents, supported by a connected web platform and
                  centralized operations.
                </p>
              </div>

              {/* 4 Interactive Persona Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {PLATFORM_ROLES.map((role) => {
                  const isActive = activeRoleTab === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setActiveRoleTab(role.id)}
                      className={`px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#00C8E8] text-black shadow-xs"
                          : "bg-[#F1F5F9] text-[#334155] hover:text-[#111111] border border-slate-200"
                      }`}
                    >
                      {role.name}
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Checklist */}
              <div className="space-y-3.5 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  {activeRole.heading}
                </div>
                {activeRole.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#00C8E8] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold text-[#111111]">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 3 Mobile Phone Screens in Clean Horizontal Row */}
            <div className="lg:col-span-7 relative flex items-center justify-center pt-8 lg:pt-0">
              <TuitionstimeThreePhonesShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR PROCESS (SOLID WHITE #FFFFFF SECTION - NO PARTITION BORDER)        */}
      {/* ========================================================================= */}
      <section id="process" className="py-20 lg:py-24 bg-white text-[#111111] scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12 text-left">
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111111] tracking-tight leading-[1.14]">
              From Idea to <span className="text-[#00C8E8]">Impact</span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#555C68] leading-relaxed">
              We followed a structured development process to ensure a scalable,
              secure, and user-friendly platform.
            </p>
          </div>

          {/* 6-Step Connected Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-5 relative">
            {/* Horizontal Line behind nodes on desktop */}
            <div className="hidden lg:block absolute top-6 left-[5%] right-[5%] h-[2px] bg-slate-200 -z-0" />

            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-start lg:items-center text-left lg:text-center space-y-3.5"
              >
                {/* Numbered Circular Node filled with Solid Cyan */}
                <div className="w-12 h-12 rounded-full bg-[#00C8E8] text-black font-mono font-black text-sm flex items-center justify-center shadow-xs ring-4 ring-white">
                  {step.step}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#111111] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#555C68] leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TECHNOLOGY STACK (SOLID WHITE #FFFFFF SECTION - NO PARTITION BORDER)   */}
      {/* ========================================================================= */}
      <section id="tech-stack" className="py-20 lg:py-24 bg-white text-[#111111] scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12 text-left">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111111] tracking-tight leading-[1.14]">
              Modern Technologies <br className="hidden sm:inline" />
              for a <span className="text-[#00C8E8]">Scalable Platform</span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#555C68] leading-relaxed">
              The platform combines modern web and mobile development, backend
              services, data management, payment integrations, and communication
              tools to support a connected learning marketplace.
            </p>
          </div>

          {/* 8 Tech Cards Grid on Light Neutral #F7F7F7 Background */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="p-4 sm:p-5 rounded-2xl bg-[#F7F7F7] border border-[#E5E7EB] hover:border-[#00C8E8] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[145px] shadow-xs group hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {tech.svg}
                </div>
                <div className="space-y-0.5 mt-2">
                  <div className="text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#00C8E8] transition-colors leading-tight">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-[#64748B] font-mono">
                    {tech.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. RESULTS AND OUTCOMES (SOLID BLACK #050505 SECTION + WHITE TESTIMONIAL) */}
      {/* ========================================================================= */}
      <section id="results" className="py-20 lg:py-24 bg-[#050505] text-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Eyebrow, Heading, Description, 4 Stats Cards & Ongoing Partnership */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
                  THE RESULTS
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-[1.14]">
                  Making a Real Impact <br />
                  in <span className="text-[#00C8E8]">Education</span>
                </h2>

                <p className="text-base sm:text-[17px] text-[#94A3B8] leading-relaxed max-w-xl">
                  Tuitionstime has evolved into a connected EdTech marketplace
                  bringing together tutor discovery, structured matching,
                  demonstrations, classes, meeting workflows, learning
                  resources, payments, analytics, and administrative oversight.
                </p>
              </div>

              {/* 4 Stats Cards in a 4-Column Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {RESULTS_METRICS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] min-h-[105px] flex flex-col justify-between shadow-sm"
                  >
                    <div className="text-3xl sm:text-[34px] font-black text-[#00C8E8] font-mono tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-[13px] text-white/90 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ongoing Product Partnership Strip */}
              <div className="pt-5 border-t border-white/[0.08] space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#00C8E8] uppercase tracking-wider block">
                  Ongoing Product Partnership
                </span>
                <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xl">
                  CodePlaced continues supporting platform development,
                  automation, optimization, and SEO as Tuitionstime evolves.
                </p>
              </div>
            </div>

            {/* Right Column: Clean White Testimonial Card with Carousel Controls */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-8 sm:p-9 rounded-3xl bg-white text-[#111111] border border-slate-200/80 shadow-lg space-y-6 text-left relative">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00C8E8] shrink-0">
                    <Image
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111111]">
                      {activeTestimonial.author}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#00C8E8]">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-[17px] text-[#222222] italic leading-relaxed font-normal">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </p>

                {/* Carousel Pagination Indicator & Controls */}
                <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setTestimonialIndex(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          testimonialIndex === idx
                            ? "w-6 bg-[#00C8E8]"
                            : "w-2 bg-slate-200"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevTestimonial}
                      className="w-8 h-8 rounded-full bg-[#F7F7F7] hover:bg-slate-200 text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextTestimonial}
                      className="w-8 h-8 rounded-full bg-[#F7F7F7] hover:bg-slate-200 text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. MORE CASE STUDIES (SOLID WHITE #FFFFFF SECTION + 3 CLIENT CARDS)       */}
      {/* ========================================================================= */}
      <section id="more-case-studies" className="py-20 lg:py-24 bg-white text-[#111111] scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 space-y-10 text-left">
          {/* Header Row with 'View All Case Studies' CTA */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
                MORE CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111111] tracking-tight leading-[1.14]">
                Explore More Success Stories
              </h2>
              <p className="text-base sm:text-[17px] text-[#555C68] leading-relaxed">
                Discover how we&apos;ve helped businesses across different
                industries build powerful digital solutions.
              </p>
            </div>

            <div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-[#00C8E8] text-[#111111] hover:text-[#00C8E8] font-mono text-xs font-bold transition-all shadow-xs"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3 Related Case Study Cards on White Surfaces */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {RELATED_CASE_STUDIES.map((cs) => (
              <Link
                key={cs.id}
                href={cs.href}
                className="group rounded-3xl bg-white border border-slate-200/80 hover:border-[#00C8E8] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6 sm:p-7 space-y-2.5">
                    <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#00C8E8] transition-colors tracking-tight">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-[#555C68] leading-relaxed">
                      {cs.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00C8E8] group-hover:translate-x-1 transition-transform">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA SECTION (SOLID BLACK #050505 WITH NO GRADIENT OR GLOW)      */}
      {/* ========================================================================= */}
      <section id="final-cta" className="relative py-20 sm:py-24 lg:py-28 bg-[#050505] text-white overflow-hidden scroll-mt-20">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C8E8] uppercase">
              Have a project in mind?
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-white tracking-tight leading-[1.12]">
              Let&apos;s Build Something{" "}
              <span className="text-[#00C8E8]">Amazing Together</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal max-w-2xl mx-auto">
              We help businesses turn ideas into powerful digital products.
              Whether it&apos;s a web app, mobile app, or AI-powered solution,
              we&apos;re here to make it happen.
            </p>

            {/* Dual CTA Buttons (Solid Colors, No Gradients) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-mono font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0A0A0A] hover:bg-white/[0.05] text-white border border-white/[0.12] hover:border-[#00C8E8] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Schedule a Call</span>
                <Calendar className="w-4 h-4 text-[#00C8E8]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* VIDEO DEMO MODAL                                                          */}
      {/* ========================================================================= */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-4 text-left text-white">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#00C8E8] uppercase">
                  TUITIONSTIME DEMO WALKTHROUGH
                </span>
                <h3 className="text-xl font-bold text-white">
                  EdTech Marketplace Architecture &amp; Live Walkthrough
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/[0.08] flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/hero-tutor-discovery-showcase.png"
                alt="Tuitionstime Interactive Platform Demo"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <a
                  href="https://www.tuitionstime.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-mono font-bold text-xs uppercase flex items-center gap-2 shadow-xl"
                >
                  <span>Explore Live Platform on Tuitionstime</span>
                  <ExternalLink className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>

            <p className="text-xs text-[#94A3B8]">
              Platform walkthrough showcases live student requirement matching,
              tutor schedule management, demo class conversions, and wallet
              escrow settlement.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
