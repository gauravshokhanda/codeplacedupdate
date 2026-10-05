"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Layers,
  Database,
  BarChart3,
  Workflow,
  CheckCircle2,
  Cpu,
  Code2,
  Server,
  Cloud,
  ChevronDown,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Factory,
  Landmark,
  Compass,
  HelpCircle,
  Search,
  SlidersHorizontal,
  Award,
} from "lucide-react";

// =========================================================================
// DATA STRUCTURES
// =========================================================================

const COMPANY_STATS = [
  { value: "250+", label: "Projects Delivered", sub: "Web, Mobile, BI & AI Solutions" },
  { value: "20+", label: "Industries Served", sub: "Healthcare, Fintech, Retail & SaaS" },
  { value: "99.9%", label: "Platform Reliability", sub: "Enterprise SLA & Uptime Standards" },
  { value: "Global", label: "Delivery Model", sub: "Direct Senior Engineering Pods" },
];

const CAPABILITIES = [
  {
    title: "Data Engineering",
    desc: "Scalable data lakehouses, event streaming pipelines, automated ETL/ELT, and dbt transformation layers.",
    icon: Database,
  },
  {
    title: "AI & Automation",
    desc: "Private RAG architectures, domain-tuned LLMs, autonomous agentic workflows, and predictive ML systems.",
    icon: Cpu,
  },
  {
    title: "Cloud Architecture",
    desc: "Cloud-native infrastructure (AWS, Azure, GCP), Kubernetes orchestration, and FinOps cost optimization.",
    icon: Cloud,
  },
  {
    title: "Analytics Platforms",
    desc: "Executive command centers, embedded customer dashboards (Power BI, Looker), and real-time OLAP queries.",
    icon: BarChart3,
  },
  {
    title: "Custom Software",
    desc: "High-concurrency web applications, microservices, mobile apps, and secure enterprise workflow portals.",
    icon: Code2,
  },
];

const WHY_WORK_WITH_US = [
  {
    title: "Data & AI Expertise",
    desc: "Specialized architects who turn complex, unstructured enterprise data into deterministic intelligence and real-time decision engines.",
    icon: Database,
    badge: "Specialized Pods",
  },
  {
    title: "Cloud-Native Architecture",
    desc: "Engineered on AWS, Azure, and GCP with automated autoscaling, infrastructure as code (Terraform), and zero single points of failure.",
    icon: Cloud,
    badge: "99.99% Uptime",
  },
  {
    title: "Fast Delivery Cycles",
    desc: "Agile sprints and pre-tested blueprints that deploy working, audited production systems in 2–4 weeks rather than months.",
    icon: Zap,
    badge: "2–4 Weeks",
  },
  {
    title: "Enterprise Security",
    desc: "Bilateral NDAs upfront, SOC2 Type II alignment, HIPAA compliance, row-level security, and cryptographic audit logging.",
    icon: ShieldCheck,
    badge: "SOC2 & HIPAA",
  },
  {
    title: "Business-Focused Solutions",
    desc: "Every line of code and dashboard metric is engineered to unlock measurable revenue, eliminate manual waste, and prove ROI.",
    icon: TrendingUp,
    badge: "Outcome Driven",
  },
  {
    title: "Long-Term Partnership",
    desc: "We build enduring relationships with flexible SLA maintenance, dedicated support pods, and continuous feature scaling.",
    icon: Users,
    badge: "24/7 SLA Options",
  },
];

const LEADERSHIP_TEAM = [
  {
    name: "Maanya Tyagi",
    role: "Founder & CEO",
    bio: "Maanya leads analytics, AI initiatives, and business intelligence solutions at CodePlaced. She specializes in transforming complex datasets into actionable insights that help organizations make better decisions.",
    image: "/team/Manya.png",
    skills: ["Data Analytics", "Power BI", "AI Solutions", "Business Intelligence"],
    linkedin: "https://linkedin.com",
  },
  {
    name: "Gaurav Shokhanda",
    role: "Co-Founder & CTO",
    bio: "Gaurav oversees technology strategy, software architecture, cloud infrastructure, and product engineering. He helps businesses build scalable systems that support long-term growth and operational excellence.",
    image: "/team/gaurav.jpg",
    skills: ["Software Architecture", "Cloud Engineering", "Product Development", "AI Automation"],
    linkedin: "https://linkedin.com",
  },
];

const ENGINEERING_TEAM = [
  {
    name: "Ankit",
    role: "AI & Machine Learning Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Prajjwal Kumar Rathi",
    role: "Data & Analytics Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Naman",
    role: "Full Stack Software Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Anubhav",
    role: "Cloud & DevOps Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Kashish",
    role: "UI/UX & Product Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sadiya Ansari",
    role: "QA & Solutions Engineer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
];

const DELIVERY_METHODOLOGY = [
  {
    step: "01",
    title: "Discovery",
    desc: "Technical requirements gathering, data audits, system dependency mapping, and milestone roadmap alignment.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architecture",
    desc: "System blueprints, data schemas, cloud infrastructure sizing, security protocols, and SLA definitions.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Development",
    desc: "Rapid agile sprints led by senior developers with clean code commits, weekly demos, and transparent Slack updates.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Testing",
    desc: "Automated QA validation, security penetration testing, load testing, and deterministic evaluation gates.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Zero-downtime production deployment, private repository transfer, and complete infrastructure handoff.",
    icon: Server,
  },
  {
    step: "06",
    title: "Optimization",
    desc: "Continuous telemetry monitoring, performance fine-tuning, cloud cost governance, and feature scaling.",
    icon: SlidersHorizontal,
  },
];

const INDUSTRIES_SUPPORTED = [
  {
    name: "Healthcare",
    desc: "Clinical data pipelines, HIPAA-compliant patient portals & real-time telemetry.",
    icon: HeartPulse,
  },
  {
    name: "Finance & Fintech",
    desc: "Real-time portfolio command centers, risk analytics & automated fraud audits.",
    icon: Landmark,
  },
  {
    name: "SaaS & Tech",
    desc: "Embedded customer analytics, multi-tenant RBAC & microservices at scale.",
    icon: Building2,
  },
  {
    name: "Retail & E-Commerce",
    desc: "Inventory forecasting, customer lifetime value analytics & omni-channel sync.",
    icon: ShoppingBag,
  },
  {
    name: "Education",
    desc: "Admissions CRM workflows, student engagement portals & LMS analytics.",
    icon: GraduationCap,
  },
  {
    name: "Manufacturing",
    desc: "IoT sensor data ingestion, predictive maintenance & supply chain automation.",
    icon: Factory,
  },
];

const TECH_PARTNERSHIPS = [
  { name: "AWS", category: "Cloud & Compute" },
  { name: "Azure", category: "Enterprise Partner" },
  { name: "Google Cloud", category: "BigQuery & Vertex AI" },
  { name: "OpenAI", category: "Enterprise LLMs" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "Power BI", category: "Executive Analytics" },
  { name: "Databricks", category: "Lakehouse Platform" },
  { name: "Docker & K8s", category: "Containerization" },
  { name: "React / Next.js", category: "Modern Frontend" },
  { name: "Node.js", category: "Backend Services" },
  { name: "Python / PyTorch", category: "AI & ML Models" },
  { name: "Java Spring", category: "Enterprise Systems" },
];

const CERTIFICATIONS = [
  "SOC2 Type II Aligned",
  "HIPAA Compliant Blueprints",
  "ISO 27001 Security Standard",
  "100% Client Code & IP Ownership",
];

const FAQ_ITEMS = [
  {
    q: "What industries does CodePlaced work with?",
    a: "We partner with Healthcare, Financial Services, SaaS, Retail, Education, and Manufacturing enterprises. Our engineering pods tailor each architecture to industry-specific compliance requirements like HIPAA, SOC2, and GDPR.",
  },
  {
    q: "How long do projects typically take to deliver?",
    a: "Most scoped projects—such as executive dashboards, data lakehouses, MVP apps, and AI copilots—are delivered in fixed 2–4 week production cycles. Larger enterprise transformations are phased into predictable 2-week agile sprints.",
  },
  {
    q: "Do you provide AI consulting and production implementation?",
    a: "Yes. We offer end-to-end AI consulting and implementation, including domain-specific RAG architectures, multi-agent automated workflows, private LLM fine-tuning, and low-latency vector search systems with strict hallucination guardrails.",
  },
  {
    q: "Can you modernize our existing legacy systems and databases?",
    a: "Absolutely. We specialize in zero-downtime database migrations, monolith-to-microservices re-architectures, legacy CRM integrations, and cloud cost optimizations without causing downtime to live business operations.",
  },
  {
    q: "What cloud platforms do you support?",
    a: "We are cloud-agnostic with deep, certified specialization across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), as well as hybrid on-premises and containerized Kubernetes environments.",
  },
  {
    q: "How do you handle security, confidentiality, and IP ownership?",
    a: "We execute strict bilateral NDAs before discussing any architecture. All code, dbt models, and infrastructure scripts are committed directly to your private GitHub or GitLab repositories. You retain 100% intellectual property ownership from day one.",
  },
];

// =========================================================================
// EASING & MOTION CONFIGURATION (Linear / Vercel / Stripe Grade)
// =========================================================================
const EASING = [0.22, 1, 0.36, 1] as const;

// Stagger container for stats cards
const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const statCardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: EASING,
    },
  },
};

// Capabilities list stagger
const capabilitiesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const capabilityItemVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: EASING,
    },
  },
};

// Directional subtle floating variants for Why Choose cards
const getWhyChooseVariant = (direction: "left" | "center" | "right") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
    y: direction === "center" ? 24 : 0,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: EASING,
    },
  },
});

// Team sequential reveal container
const teamGridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const teamMemberVariant = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: EASING,
    },
  },
};

// Methodology timeline sequence
const methodologyContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const methodologyStepVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: EASING,
    },
  },
};

// =========================================================================
// MAIN ABOUT PAGE COMPONENT
// =========================================================================

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans">
      {/* ========================================================================= */}
      {/* SECTION 1 — HERO SECTION (Gentle Fade-Up & Soft Slide from Right) */}
      {/* ========================================================================= */}
      <div
        className="relative overflow-hidden border-b border-slate-200/80"
        style={{
          background: "linear-gradient(180deg, #F4FBFD 0%, #EDF8FB 60%, #FFFFFF 100%)",
        }}
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none -z-0">
          <div
            className="absolute inset-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(20,184,197,0.12), rgba(11,107,136,0.05), transparent 70%)",
            }}
          />
        </div>

        <section className="relative pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-18">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Headline & CTAs (Gently settles with y: 24 -> 0, scale: 0.99 -> 1, duration: 1.0s) */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, ease: EASING }}
                className="lg:col-span-7 space-y-6 text-left"
              >
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
                  <span>ABOUT CODEPLACED</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] xl:text-[64px] font-[800] leading-[1.08] tracking-[-0.035em] text-[#082F49] [text-wrap:balance]">
                  The Team Behind <br className="hidden sm:inline" />
                  Scalable{" "}
                  <span
                    className="bg-clip-text text-transparent font-extrabold inline-block"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #0f4c81, #00b7c2)",
                    }}
                  >
                    Data, AI & Digital Products
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-600 max-w-[620px] leading-relaxed font-normal">
                  CodePlaced partners with startups and enterprises to build modern data platforms,
                  AI-powered applications, cloud infrastructure, and analytics systems that drive
                  measurable business growth.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                  <a
                    href="#leadership-team"
                    className="h-[52px] px-8 rounded-full bg-gradient-to-r from-[#0f4c81] to-[#00b7c2] hover:from-[#082F49] hover:to-[#0f4c81] text-white font-extrabold text-[15px] shadow-lg shadow-[#00b7c2]/20 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
                  >
                    <span>Meet Our Leadership</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  <Link
                    href="/services"
                    className="h-[52px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#082F49] font-bold text-[15px] border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-300 hover:border-[#00b7c2]/40"
                  >
                    <span>View Our Services</span>
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: Hero Visual Card (Soft slide from right x: 30 -> 0, duration: 1.1s) */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.99 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.1, ease: EASING }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 h-[380px] sm:h-[460px] group card-shadow-subtle">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                    alt="CodePlaced Engineering Collective"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00b7c2]">
                      ENGINEERING COLLECTIVE
                    </span>
                    <h4 className="text-lg font-bold">Data • AI • Cloud Teams</h4>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Integrated Stats Bar at Bottom of Hero (Staggered 140ms, translateY(-4px) hover) */}
            <motion.div
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {COMPANY_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={statCardVariant}
                  className="p-6 rounded-[22px] text-center card-shadow-subtle bg-white/90 backdrop-blur-md border border-cyan-500/15 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(15,23,42,0.07),0_24px_60px_rgba(15,23,42,0.09)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f4c81] tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#082F49] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2 — ENGINEERING TEAMS THAT BUILD FOR SCALE (Image Left, Content Right) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Professional Engineering Image (Slides in softly from Left x: -30 -> 0, duration: 1.05s) */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.99 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.05, ease: EASING }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-[32px] overflow-hidden card-shadow-subtle border-4 border-white bg-slate-100 relative min-h-[380px] sm:min-h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="CodePlaced Engineering Pod"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                    Engineering Pods
                  </span>
                  <h4 className="text-lg font-bold">Autonomous Senior Squads</h4>
                  <p className="text-xs text-slate-300">Dedicated architecture, sprint execution, and DevOps</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Content (Slides in softly from Right x: 30 -> 0, Feature cards staggered) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.05, ease: EASING }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-[#00b7c2]" />
                <span>OUR CAPABILITIES & SCOPE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49] leading-[1.12]">
                Engineering Teams That Build For Scale
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Founded to help businesses unlock value from data, AI, and modern engineering, CodePlaced
                bridges the gap between complex enterprise data and high-velocity digital execution. We partner
                with fast-moving teams to engineer scalable platforms, automated cloud systems, and real-time
                analytics engines that eliminate operational waste and prove measurable ROI.
              </p>

              {/* 5 Capabilities List (Staggered Flow) */}
              <motion.div
                variants={capabilitiesContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="space-y-3 pt-1"
              >
                {CAPABILITIES.map((cap, cIdx) => {
                  const CapIcon = cap.icon;
                  return (
                    <motion.div
                      key={cIdx}
                      variants={capabilityItemVariant}
                      className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-4 card-shadow-subtle hover:-translate-y-1 hover:border-[#00b7c2]/40 hover:shadow-[0_14px_32px_rgba(15,23,42,0.07),0_24px_60px_rgba(15,23,42,0.09)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CapIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#082F49]">
                          {cap.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — WHY BUSINESSES CHOOSE CODEPLACED (Floating Into Position) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.95, ease: EASING }}
            className="max-w-[900px] mx-auto text-center mb-14 lg:mb-18 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE CODEPLACED ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49]">
              Why Businesses Choose CodePlaced
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[750px] mx-auto font-normal">
              We replace bureaucratic, junior-heavy agency models with senior engineering velocity,
              transparent communication, and guaranteed delivery.
            </p>
          </motion.div>

          {/* 6 Feature Cards: Row 1 (Left, Center, Right), Row 2 (Left, Center, Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_WORK_WITH_US.map((item, idx) => {
              const ItemIcon = item.icon;
              // Direction pattern: 0 -> left, 1 -> center, 2 -> right, 3 -> left, 4 -> center, 5 -> right
              const direction = (idx % 3 === 0 ? "left" : idx % 3 === 1 ? "center" : "right") as "left" | "center" | "right";
              const cardVariants = getWhyChooseVariant(direction);
              const delay = (idx % 3) * 0.14;

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.0, delay, ease: EASING }}
                  className="rounded-[24px] bg-white border border-slate-200/90 p-8 card-shadow-subtle hover:shadow-[0_14px_32px_rgba(15,23,42,0.07),0_24px_60px_rgba(15,23,42,0.09)] hover:-translate-y-1 hover:border-[#00b7c2]/40 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center group-hover:bg-[#0f4c81] group-hover:text-white transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        <ItemIcon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#082F49] mb-3 group-hover:text-[#0f4c81] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00b7c2]" />
                    <span>Guaranteed Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — LEADERSHIP SECTION (Opposite Slow Slide, 400ms Hover Lift) */}
      {/* ========================================================================= */}
      <section id="leadership-team" className="py-24 lg:py-32 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.95, ease: EASING }}
            className="max-w-[850px] mx-auto text-center mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>TRUSTED LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49]">
              Meet The Leadership Team
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[760px] mx-auto font-normal">
              CodePlaced is led by experienced builders, data specialists, and technology strategists focused on creating scalable digital products, AI-powered solutions, and business growth systems.
            </p>
          </motion.div>

          {/* 2 Large 50/50 Founder Cards: Maanya (x: -30 -> 0), Gaurav (x: 30 -> 0), hover: translateY(-4px) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {LEADERSHIP_TEAM.map((founder, fIdx) => {
              const isFirst = fIdx === 0;
              return (
                <motion.div
                  key={fIdx}
                  initial={{ opacity: 0, x: isFirst ? -30 : 30, scale: 0.985 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.05, ease: EASING }}
                  className="group rounded-[28px] overflow-hidden bg-white border border-[rgba(15,61,94,0.08)] card-shadow-subtle hover:shadow-[0_14px_32px_rgba(15,23,42,0.07),0_24px_60px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col"
                >
                  {/* Large Founder Image (3:4 portrait aspect ratio ready) */}
                  <div className="relative h-[360px] sm:h-[440px] w-full overflow-hidden bg-slate-900">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/85 via-transparent to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-400" />

                    {/* Floating Role Badge on Image */}
                    <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white">
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#00b7c2] drop-shadow-xs">
                          {founder.role}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-sm">
                          {founder.name}
                        </h3>
                      </div>

                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#0f4c81] flex items-center justify-center transition-all duration-300 shadow-md"
                        aria-label={`LinkedIn profile of ${founder.name}`}
                      >
                        <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Content Below */}
                  <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {founder.bio}
                    </p>

                    <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                      {founder.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F0FDFA] text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — MEET OUR ENGINEERING TEAM (Sequential 1 -> 6 Stagger) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.95, ease: EASING }}
            className="max-w-[850px] mx-auto text-center mb-14 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CORE SPECIALISTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Meet Our Engineering Team
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[700px] mx-auto font-normal">
              A multidisciplinary team of software engineers, AI specialists, cloud architects, designers, and product strategists helping businesses build scalable digital solutions.
            </p>
          </motion.div>

          {/* Sequential Stagger Grid (1 -> 6) */}
          <motion.div
            variants={teamGridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto"
          >
            {ENGINEERING_TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                variants={teamMemberVariant}
                className="group rounded-[22px] bg-white border border-slate-200/80 p-6 text-center card-shadow-subtle hover:shadow-[0_14px_32px_rgba(15,23,42,0.07),0_24px_60px_rgba(15,23,42,0.09)] hover:-translate-y-1 hover:border-[#00b7c2]/40 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Circular Avatar */}
                  <div className="relative w-[84px] h-[84px] mb-3.5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-3 border-white shadow-md group-hover:scale-104 transition-transform duration-400 ease-out"
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-base font-extrabold text-[#082F49] group-hover:text-[#0f4c81] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#00b7c2] mt-0.5 tracking-tight">
                    {member.role}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-[#0f4c81] transition-colors duration-300"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — HOW WE DELIVER SUCCESSFUL DIGITAL PRODUCTS (Guided Flow) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.95, ease: EASING }}
            className="max-w-[900px] mx-auto text-center mb-14 lg:mb-18 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>THE ENGINEERING BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49]">
              How We Deliver Successful Digital Products
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[750px] mx-auto font-normal">
              A disciplined, milestone-driven 6-step engineering methodology that guarantees reliable code and fixed timelines.
            </p>
          </motion.div>

          {/* 6-Step Timeline Grid (Reveals sequentially) */}
          <motion.div
            variants={methodologyContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
          >
            {DELIVERY_METHODOLOGY.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={methodologyStepVariant}
                  className="rounded-[22px] bg-white border border-slate-200/90 p-5 card-shadow-subtle hover:shadow-[0_14px_32px_rgba(15,23,42,0.07),0_24px_60px_rgba(15,23,42,0.09)] hover:-translate-y-1 hover:border-[#00b7c2]/40 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black text-[#00b7c2] tracking-wider">
                        {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-[#ECFEFF] flex items-center justify-center text-[#0f4c81]">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-extrabold text-[#082F49] mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Verified Gate</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — INDUSTRIES WE SUPPORT (Domain Expertise — Subtle / Mostly Static) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-[900px] mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>DOMAIN EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#082F49]">
              Industries We Support
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[750px] mx-auto font-normal">
              Delivering customized architectures and data platforms tailored to specific enterprise sectors.
            </p>
          </div>

          {/* 6 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SUPPORTED.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[22px] bg-[#F8FAFC] border border-slate-200/90 p-7 card-shadow-subtle hover:shadow-[0_14px_32px_rgba(15,23,42,0.07),0_24px_60px_rgba(15,23,42,0.09)] hover:-translate-y-1 hover:border-[#00b7c2]/40 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center flex-shrink-0">
                    <IndIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#082F49] mb-1">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8 — TECHNOLOGIES & PARTNERSHIPS (Compact Ecosystem Grid — Subtle) */}
      {/* ========================================================================= */}
      <section className="py-18 lg:py-22 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px] mx-auto text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>TECHNOLOGY ECOSYSTEM & COMPLIANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#082F49]">
              Technologies & Partnerships We Build On
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Certified cloud providers, modern data warehousing engines, and enterprise frameworks.
            </p>
          </div>

          {/* Compact Logo / Technology Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
            {TECH_PARTNERSHIPS.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="p-3.5 rounded-xl bg-white border border-slate-200/80 card-shadow-subtle text-center flex flex-col items-center justify-center hover:border-[#00b7c2]/40 transition-colors duration-300"
              >
                <span className="text-sm font-extrabold text-[#082F49]">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>

          {/* 4 Security / IP Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {CERTIFICATIONS.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 text-center flex items-center justify-center gap-2 text-xs font-bold text-slate-700 card-shadow-subtle"
              >
                <ShieldCheck className="w-4 h-4 text-[#00b7c2]" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9 — ENTERPRISE FAQ (Smooth 0.45s Accordion Animation) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#082F49] text-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.95, ease: EASING }}
            className="text-center mb-14 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-300" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Questions About Working With Us
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[650px] mx-auto font-normal">
              Clear answers on how we partner, scope, build, and support enterprise systems.
            </p>
          </motion.div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] bg-white/[0.04] border border-white/10 overflow-hidden transition-colors duration-300 hover:bg-white/[0.06]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white">
                      {item.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "rotate-180 bg-[#00b7c2] text-[#082F49]" : "text-white"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASING }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
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
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — FINAL CTA (Gentle Fade-Up & Micro-Scale 0.985 -> 1) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#082F49] to-[#041E2A] text-white text-center relative overflow-hidden border-t border-white/10">
        {/* Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,183,194,0.18), transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0, ease: EASING }}
          className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s Build Your Next Data, AI or Digital Product
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our technical leadership to scope your next initiative with fixed milestones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#082F49] hover:text-white font-extrabold text-[15px] transition-all duration-300 shadow-xl shadow-[#38BDF8]/20 flex items-center justify-center gap-2.5 active:scale-95 group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-[15px] border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Case Studies</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>30-Min Strategy Call</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Bilateral NDA Upfront</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Senior Engineers</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
