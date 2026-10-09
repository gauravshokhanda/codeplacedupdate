export interface CaseStudyMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface CaseStudyProcessStep {
  step: string;
  title: string;
  desc: string;
  deliverables?: string[];
}

export interface CaseStudyResult {
  title: string;
  value: string;
  description: string;
}

export interface BeforeAfterItem {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

export interface EngineeringDecision {
  technology: string;
  problem: string;
  decision: string;
  benefit: string;
}

export interface ArchitectureNode {
  title: string;
  subtitle: string;
  desc: string;
  status: string;
  tech: string[];
}

export interface ShowcaseModule {
  name: string;
  tag: string;
  desc: string;
  image: string;
}

export interface EcosystemPersona {
  role: string;
  badge: string;
  avatarIcon: string;
  responsibilities: string[];
  features: string[];
  screenHighlight: string;
  description: string;
}

export interface ChallengeItem {
  number: string;
  title: string;
  category: string;
  problem: string;
  impact: string;
  solutionTactic: string;
}

export interface UserJourneyStep {
  step: string;
  stage: string;
  title: string;
  action: string;
  systemAction: string;
  outcome: string;
}

export interface DetailedKpi {
  value: string;
  label: string;
  category: string;
  delta: string;
  description: string;
}

export interface GalleryScreen {
  id: string;
  title: string;
  tag: string;
  category: string;
  description: string;
  keyFeatures: string[];
  image: string;
}

export interface MatchingCriterion {
  number: string;
  title: string;
  description: string;
  example: string;
}

export interface ServiceDeliveredItem {
  number: string;
  title: string;
  subtitle: string;
  points: string[];
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  tagline: string;
  industry: string;
  clientType: string;
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  teamSize: string;
  duration: string;
  activeUsers: string;
  availability: string;
  metrics: CaseStudyMetric[];
  detailedKpis: DetailedKpi[];
  technologies: string[];
  problemStatement: string;
  businessGoals: string[];
  projectScope: string[];
  challenges: string[];
  challengeItems: ChallengeItem[];
  ecosystemPersonas: EcosystemPersona[];
  userJourneySteps: UserJourneyStep[];
  galleryScreens: GalleryScreen[];
  matchingCriteria?: MatchingCriterion[];
  servicesDelivered?: ServiceDeliveredItem[];
  solution: string;
  solutionHighlights: string[];
  architectureNodes: ArchitectureNode[];
  engineeringDecisions: EngineeringDecision[];
  beforeAfter: BeforeAfterItem[];
  showcaseModules: ShowcaseModule[];
  process: CaseStudyProcessStep[];
  results: CaseStudyResult[];
  businessImpact: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  };
}

export const CASE_STUDY_SLUG_ALIASES: Record<string, string> = {
  "tuitionstime-marketplace": "tuitionstime",
  "edtech-marketplace": "tuitionstime",
  "healthcare-analytics": "healthcare-ai-triage",
  "healthcare-analytics-platform": "healthcare-ai-triage",
  "enterprise-rag": "enterprise-rag-copilot",
  "enterprise-knowledge-graph": "enterprise-rag-copilot",
  "enterprise-knowledge-graph-rag": "enterprise-rag-copilot",
  "fleet-dispatch": "fleet-dispatch-engine",
  "fleet-dispatch-platform": "fleet-dispatch-engine",
  "autonomous-fleet-dispatch-engine": "fleet-dispatch-engine",
  "inventory-platform": "inventory-sync-platform",
  "real-time-inventory-sync": "inventory-sync-platform",
  "predictive-maintenance": "iot-predictive-maintenance",
  "iot-predictive-maintenance-platform": "iot-predictive-maintenance",
  "ai-ledger": "ai-ledger-platform",
  "ai-workflow-ledger-platform": "ai-ledger-platform",
};

export function getCanonicalSlug(slug: string): string {
  return CASE_STUDY_SLUG_ALIASES[slug] || slug;
}

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  // =========================================================================
  // 0. TUITIONSTIME (FEATURED CASE STUDY)
  // =========================================================================
  {
    slug: "tuitionstime",
    title: "Engineering a Complete EdTech Marketplace",
    tagline: "From tutor discovery to demos, classes, meetings, payments, learning resources and analytics",
    industry: "EdTech · SaaS · Marketplace",
    clientType: "Two-Sided Tutoring Marketplace & EdTech SaaS",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "CodePlaced engineered Tuitionstime as a complete operating system for learning: connecting students, tutors, and platform administrators through bidirectional discovery, demo conversion, class scheduling, meeting automation, group batches, digital notes commerce, automated wallet payouts, and performance intelligence.",
    teamSize: "7 Senior Engineers",
    duration: "Ongoing Partnership",
    activeUsers: "10K+ Students & 2K+ Tutors",
    availability: "99.99% SLA",
    metrics: [
      { value: "10K+", label: "Active Students", detail: "Enrolled & learning actively" },
      { value: "2K+", label: "Expert Tutors", detail: "Verified & earning on platform" },
      { value: "50K+", label: "Classes Completed", detail: "Demos, 1-on-1 & group batches" },
    ],
    detailedKpis: [
      { value: "10K+", label: "Active Students Enrolled", category: "Marketplace Growth", delta: "+280% organic acquisition", description: "Learners booking demos, 1-on-1 sessions, and group courses." },
      { value: "2K+", label: "Verified Expert Tutors", category: "Tutor Supply", delta: "100% KYC & Bank verified", description: "Educators teaching across CBSE, ICSE, State Boards & competitive exams." },
      { value: "50K+", label: "Total Classes Completed", category: "Session Throughput", delta: "Sub-second room sync", description: "Automated video meeting creation with automated attendance logs." },
      { value: "88.4%", label: "Demo to Regular Conversion", category: "Funnel Efficiency", delta: "Up from 34% (manual)", description: "Automated calendar reminders and streamlined 1-click booking." },
      { value: "100%", label: "Automated Tutor Payouts", category: "Financial Ops", delta: "Zero payment disputes", description: "Escrow wallet balances with UPI/Bank transfer reconciliation." },
      { value: "99.99%", label: "Platform Availability SLA", category: "Reliability", delta: "Zero exam season downtime", description: "Multi-region cloud infrastructure with auto-scaling compute." },
      { value: "< 250ms", label: "Bidirectional Search Latency", category: "Discovery Performance", delta: "Instant filter updates", description: "Location, subject, budget, gender & time slot search." },
      { value: "+320%", label: "Organic SEO Traffic Boost", category: "Growth Engine", delta: "14,000+ programmatic pages", description: "High-intent city, subject, board, and exam landing page matrix." },
      { value: "70%", label: "Admin Overhead Reduction", category: "Operations", delta: "Automated coordination", description: "Replaced spreadsheet demo tracking with unified lifecycle admin." },
      { value: "4.8 / 5", label: "Average Tutor Satisfaction", category: "Quality Score", delta: "Verified reviews only", description: "Transparent analytics, rubric scorecards, and instant earnings visibility." },
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "WebRTC", "Stripe / Razorpay", "TailwindCSS"],
    problemStatement:
      "A tutoring marketplace must solve several critical bottlenecks simultaneously: who is the right tutor for a student's specific academic goals, how free demos are coordinated without friction, how a demo becomes a paying recurring class, how video meetings are generated reliably, how tutor identities and bank payouts are verified, and how administrators retain end-to-end operational visibility.",
    businessGoals: [
      "Transition Tuitionstime from a simple static tutor directory into a fully connected, three-sided EdTech operating system.",
      "Automate the entire demo-to-class lifecycle to eliminate repetitive manual WhatsApp and spreadsheet coordination.",
      "Build multi-channel monetization beyond 1-on-1 tutoring via group batches and a digital notes marketplace.",
      "Deploy a programmatic SEO engine capturing high-intent academic searches across hundreds of cities and subjects.",
    ],
    projectScope: [
      "Bidirectional discovery engine allowing students to find tutors and tutors to discover student requirements.",
      "Structured student onboarding capturing 7 dimensions of matching criteria (board, subject, budget, time, gender).",
      "Automated video meeting generation with calendar sync and attendance verification.",
      "Tutor verification vault (Govt ID, UPI, Bank) and digital escrow wallet with automated payout schedules.",
      "Tutor performance intelligence dashboard with rubrics, retention signals, and earnings breakdown.",
      "Omnichannel admin control layer providing unified oversight of all learners, tutors, demos, and payouts.",
    ],
    challenges: [
      "Matching: Turning complex, detailed student needs into relevant, high-conversion tutor opportunities.",
      "Operations: Eliminating manual demo scheduling, class rescheduling, and meeting link coordination.",
      "Trust: Verifying tutor identity, academic credentials, and bank account ownership before financial activity.",
      "Growth: Supporting multiple monetization streams (1-on-1, group batches, digital notes) with organic SEO acquisition.",
    ],
    challengeItems: [
      {
        number: "01",
        title: "Bidirectional Matching Complexity",
        category: "Marketplace Matching",
        problem: "Students have exact requirements (CBSE Class 12 Physics, female tutor, 6 PM weekdays, ₹500/hr), while tutors search for specific teaching zones and time windows.",
        impact: "Manual matching via phone calls was slow, error-prone, and resulted in high demo cancellation rates.",
        solutionTactic: "Engineered structured 7-point profile preference schemas with instant multi-facet indexing and compatibility ranking.",
      },
      {
        number: "02",
        title: "Operational Demo & Class Friction",
        category: "Lifecycle Operations",
        problem: "Coordinating free demos required dozens of messages to align schedules, generate video links, and follow up for conversions.",
        impact: "60%+ of demo inquiries dropped off before the meeting ever took place.",
        solutionTactic: "Built an automated state-machine lifecycle: Demo Request → Automated Meeting Link → In-App Class → 1-Click Regular Enrollment.",
      },
      {
        number: "03",
        title: "Tutor Trust & Payout Security",
        category: "Trust & Financial Commerce",
        problem: "Risk of fraudulent tutor profiles, incorrect bank details, and dispute over completed sessions.",
        impact: "Potential chargebacks and loss of student trust in tutor quality.",
        solutionTactic: "Deployed multi-step KYC verification (Govt ID, UPI VPA, Bank Passbook) with automated escrow wallet holding and release rules.",
      },
      {
        number: "04",
        title: "Sustainable Organic Acquisition",
        category: "Growth & SEO",
        problem: "High paid ad customer acquisition costs (CAC) for competitive tutoring keywords in Tier 1 and Tier 2 cities.",
        impact: "Unsustainable unit economics relying purely on paid marketing campaigns.",
        solutionTactic: "Architected a high-performance programmatic Next.js SEO engine generating thousands of fast, localized landing pages.",
      },
    ],
    ecosystemPersonas: [
      {
        role: "Students & Parents",
        badge: "Learner Journey",
        avatarIcon: "users",
        responsibilities: [
          "Discover certified tutors matching precise syllabus and budget",
          "Book free trial demo sessions with 1-click calendar sync",
          "Attend interactive classes, access group batches, and purchase study notes",
        ],
        features: [
          "7-point structured preference profile builder",
          "Direct demo request with instant slot selection",
          "Integrated digital classroom with automated session join",
          "Digital notes marketplace with instant download access",
        ],
        screenHighlight: "Student Discovery & Class Dashboard",
        description: "Learners and parents who need instant, trustworthy access to qualified educators tailored to their curriculum and learning pace.",
      },
      {
        role: "Tutors & Educators",
        badge: "Educator Commerce",
        avatarIcon: "briefcase",
        responsibilities: [
          "Set teaching subjects, hourly pricing, and availability slots",
          "Discover student tuition requirements and accept incoming demo bookings",
          "Deliver classes, host group batches, publish study notes, and track earnings",
        ],
        features: [
          "Two-way student requirement discovery feed",
          "Performance intelligence dashboard (rubrics, ratings, repeat students)",
          "Bank & UPI verification with instant payout requests",
          "Group batch creator & digital notes monetization",
        ],
        screenHighlight: "Tutor Analytics & Earnings Hub",
        description: "Independent tutors and coaching experts growing their teaching business, managing students, and building sustainable income.",
      },
      {
        role: "Platform Administrators",
        badge: "Control Layer",
        avatarIcon: "activity",
        responsibilities: [
          "Monitor platform-wide demo conversions and ongoing classes",
          "Review tutor KYC documents and authorize bank account verification",
          "Resolve dispute claims and oversee marketplace commission flow",
        ],
        features: [
          "Unified operational view of students, tutors, demos, and classes",
          "Tutor credential & bank verification moderation queue",
          "Real-time revenue, commission, and payout telemetry",
          "Automated notification triggers for delayed or abandoned demos",
        ],
        screenHighlight: "Central Admin Operations & Control Layer",
        description: "Operations team managing marketplace quality, dispute resolution, financial safety, and platform health.",
      },
    ],
    matchingCriteria: [
      { number: "01", title: "Location & Learning Mode", description: "Pin-code level radius matching for home tuition or seamless online video classroom mode.", example: "Online or Home Tuition within 5km" },
      { number: "02", title: "Academic Board & Exam Track", description: "Specific curriculum alignment across CBSE, ICSE, IB, State Boards, and entrance exams (JEE, NEET).", example: "CBSE Class 12 & NEET Foundation" },
      { number: "03", title: "Preferred Subjects", description: "Multi-subject bundles or dedicated single-subject specialization per learner.", example: "Physics, Chemistry & Higher Mathematics" },
      { number: "04", title: "Tutor Gender Preference", description: "Explicit safety and comfort preferences for female or male tutors when requested.", example: "Female Tutor Preferred" },
      { number: "05", title: "Subject-Wise Time Slots", description: "Granular weekly schedule matching avoiding overlaps with school or extracurricular hours.", example: "Mon/Wed/Fri 6:00 PM – 7:30 PM" },
      { number: "06", title: "Subject-Wise Budgets", description: "Flexible hourly or monthly price ranges matching family spending capacity.", example: "₹400 – ₹700 per hour" },
      { number: "07", title: "Target Learning Goals", description: "Remedial catch-up, board exam acceleration, olympiad preparation, or conceptual revision.", example: "Board Exam Revision & Past Papers" },
    ],
    servicesDelivered: [
      {
        number: "1",
        title: "Product Engineering",
        subtitle: "Marketplace Architecture",
        points: ["Three-sided marketplace architecture", "Student & tutor lifecycle state machines", "Structured matching & recommendation engine", "Design system & responsive UI/UX"],
      },
      {
        number: "2",
        title: "Full-Stack Development",
        subtitle: "Scalable Application Core",
        points: ["Next.js React frontend & Node.js backend", "High-throughput PostgreSQL data schemas", "Secure REST & WebSocket APIs", "Comprehensive admin control platform"],
      },
      {
        number: "3",
        title: "Automation & Commerce",
        subtitle: "Operations & Payments",
        points: ["Automated demo & class scheduling", "Automated video meeting link generation", "Escrow wallet, UPI & bank verification", "Tutor payouts & transaction reconciliation"],
      },
      {
        number: "4",
        title: "Growth & Optimization",
        subtitle: "Scale & Performance",
        points: ["Programmatic SEO landing page architecture", "Tutor performance intelligence & rubrics", "Sub-second search & Redis caching", "Continuous product partnership & feature iteration"],
      },
    ],
    userJourneySteps: [
      {
        step: "01",
        stage: "Discovery",
        title: "Multi-Facet Tutor Search & Student Intake",
        action: "Student inputs class, board, subject, location, and preferred time slot.",
        systemAction: "Engine computes compatibility score and presents verified tutors with live hourly rates and reviews.",
        outcome: "Student selects ideal tutor profile and requests a free 30-minute demo session.",
      },
      {
        step: "02",
        stage: "Matching & Acceptance",
        title: "Instant Tutor Notification & Slot Lock",
        action: "Tutor receives push/SMS alert with student learning goals and requested demo time.",
        systemAction: "Tutor accepts request with 1-click; slot is reserved exclusively in both calendars.",
        outcome: "Demo status advances to 'Scheduled'; confirmation dispatched to student and parent.",
      },
      {
        step: "03",
        stage: "Automated Meeting",
        title: "Automated Video Classroom Generation",
        action: "Class time arrives; both participants click 'Join Class' from their dashboard.",
        systemAction: "Platform generates secure video room with automated attendance logging and timer.",
        outcome: "Zero manual link sharing via WhatsApp; class conducted smoothly on platform.",
      },
      {
        step: "04",
        stage: "Conversion & Class Pack",
        title: "Demo Review & Regular Class Enrollment",
        action: "Student marks demo successful and selects monthly tuition package.",
        systemAction: "Payment secured via payment gateway and credited to platform escrow.",
        outcome: "Recurring weekly class schedule generated with automated calendar syncing.",
      },
      {
        step: "05",
        stage: "Earnings & Payout",
        title: "Session Completion & Tutor Payout",
        action: "Tutor completes scheduled classes and submits session notes.",
        systemAction: "Escrow unlocks funds to tutor wallet; automated UPI/Bank payout processed on schedule.",
        outcome: "Tutor receives verified earnings; student receives session summary and progress rubric.",
      },
    ],
    galleryScreens: [
      {
        id: "tutor-discovery",
        title: "Bidirectional Discovery Engine",
        tag: "Core Search Marketplace",
        category: "Discovery Portal",
        description: "Students filter tutors by board, subject, budget, gender, and mode. Tutors search open student tuition requests with location and time filters.",
        keyFeatures: ["Sub-250ms multi-facet filtering", "Verified badge & rating badges", "1-click demo booking modal"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "tutor-analytics",
        title: "Tutor Performance Intelligence",
        tag: "Educator Cockpit",
        category: "Analytics & Growth",
        description: "Deep analytics for tutors: earnings by source, attendance consistency, teaching rubrics, demo-to-regular conversion, and student retention.",
        keyFeatures: ["Weekly rating & attendance trends", "Demo conversion funnel telemetry", "Earnings breakdown by batch & notes"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "bank-verification-wallet",
        title: "Trust, Verification & Wallet Payouts",
        tag: "Financial Engine",
        category: "Trust & Commerce",
        description: "Government ID, UPI, and bank account verification review workflow. Wallet balance management with locked/pending states and payout history.",
        keyFeatures: ["Automated UPI VPA verification", "Escrow session fund holds", "1-click withdrawal to bank account"],
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "group-batches-notes",
        title: "Group Batches & Digital Notes Marketplace",
        tag: "Monetization Multipliers",
        category: "Commerce Modules",
        description: "Enables educators to host multi-student cohort batches and sell syllabus study notes, sample test papers, and formula guides.",
        keyFeatures: ["Cohort batch capacity & pricing", "PDF preview & instant digital checkout", "Automated royalty split to tutor wallet"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "admin-operations",
        title: "Central Admin Operations Control Layer",
        tag: "Admin Platform",
        category: "Control Layer",
        description: "Unified oversight connecting Students, Tutors, Demos, Classes, Meetings, Payments, and Verification in one single-pane-of-glass.",
        keyFeatures: ["Real-time marketplace state view", "Tutor onboarding moderation queue", "Automated alert triggers for abandoned demos"],
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    solution:
      "CodePlaced built a full-stack marketplace platform comprising Next.js, Node.js, PostgreSQL, Redis, and WebRTC. We engineered the entire operational lifecycle: from structured 7-point matching and automated meeting generation to bank verification, escrow wallets, group batches, digital notes commerce, and programmatic SEO.",
    solutionHighlights: [
      "Bidirectional marketplace engine connecting students and tutors with 7 structured matching criteria.",
      "Automated video meeting creation and calendar synchronization eliminating manual WhatsApp coordination.",
      "Tutor verification vault and escrow wallet system with automated dispute-free payouts.",
      "Programmatic SEO architecture generating thousands of high-intent localized landing pages.",
    ],
    architectureNodes: [
      { title: "01. Next.js Web & Mobile Frontend", subtitle: "Edge-Rendered UX", desc: "Student search, tutor dashboard, video classrooms & notes store", status: "Sub-100ms FCP", tech: ["Next.js 14", "React", "TailwindCSS", "Framer Motion"] },
      { title: "02. API & Matching Engine Core", subtitle: "Node.js & Redis Hub", desc: "Bidirectional matching algorithms, state machine & real-time alerts", status: "Sub-250ms Matching", tech: ["Node.js", "Express", "Redis", "WebSockets"] },
      { title: "03. Meeting & Automation Tier", subtitle: "WebRTC & Calendar Sync", desc: "Automated video room generation, attendance tracking & reminders", status: "50k+ Sessions", tech: ["WebRTC", "Google Calendar API", "Twilio / Zoom SDK"] },
      { title: "04. Commerce & Payout Ledger", subtitle: "PostgreSQL & Escrow Core", desc: "Class packages, notes checkout, wallet escrow & bank payouts", status: "100% Payout Accuracy", tech: ["PostgreSQL", "Razorpay / Stripe", "UPI Autopay"] },
      { title: "05. Admin Control & Analytics", subtitle: "Performance Intelligence", desc: "Central operational control layer, tutor rubrics & SEO engine", status: "Real-Time Telemetry", tech: ["PostgreSQL", "Redis", "Next.js SSR", "Tailwind"] },
    ],
    engineeringDecisions: [
      {
        technology: "Next.js Programmatic Landing Pages",
        problem: "Acquiring tuition students across 50+ cities and 200+ subject-board combinations through paid ads was cost-prohibitive.",
        decision: "Built a dynamic Next.js static generation pipeline creating indexable, lightweight landing pages for every city-subject-board combination.",
        benefit: "Achieved +320% organic search traffic growth and secured top-3 Google rankings for high-intent tutoring keywords.",
      },
      {
        technology: "Automated Meeting State Machine in Node.js & Redis",
        problem: "Manual creation of video links and manual WhatsApp follow-ups resulted in high demo no-show rates (over 60%).",
        decision: "Engineered an automated lifecycle state machine that provisions video rooms dynamically 15 minutes before session time and dispatches SMS reminders.",
        benefit: "Demo attendance surged from 38% to 92%, boosting overall paid class conversion to 88.4%.",
      },
      {
        technology: "Escrow Wallet & Multi-Step Verification",
        problem: "Tutors demanded payment guarantees before teaching, while parents feared paying upfront before verifying class quality.",
        decision: "Implemented an automated escrow wallet that locks course fees on checkout and releases funds to the tutor wallet upon verified attendance.",
        benefit: "Eliminated payment disputes completely and increased tutor platform retention by 4.8x.",
      },
      {
        technology: "Structured 7-Point Matching Schema in PostgreSQL",
        problem: "Free-text bio matching returned mismatched tutors who lacked availability during the student's exact study hours.",
        decision: "Designed structured JSONB preference schemas covering location, board, subjects, gender, time slots, budget, and goals.",
        benefit: "Average time to find and confirm a matching tutor dropped from 3 days to under 4 minutes.",
      },
    ],
    beforeAfter: [
      { metric: "Tutor Matching Speed", before: "3 Days (Manual Calls)", after: "4 Minutes (Automated)", improvement: "99% Faster" },
      { metric: "Demo-to-Class Conversion", before: "34% Conversion", after: "88.4% Conversion", improvement: "+54.4% Lift" },
      { metric: "Tutor Payout Reconciliation", before: "7 Days (Manual UPI)", after: "Instant Automated Wallet", improvement: "Zero Disputes" },
      { metric: "Organic Search Acquisition", before: "Minimal (< 500/mo)", after: "100k+ Monthly Visits", improvement: "+320% Growth" },
    ],
    showcaseModules: [
      { name: "Bidirectional Discovery Feed", tag: "Discovery Engine", desc: "Dual search portals for students seeking verified tutors and tutors discovering student tuition requests.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
      { name: "Tutor Performance Intelligence", tag: "Tutor Cockpit", desc: "Live earnings, rating scorecards, student retention, and teaching rubric analytics.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" },
      { name: "Digital Notes & Group Batches", tag: "Commerce Hub", desc: "Cohort learning batches and downloadable syllabus notes marketplace with instant checkout.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Business Discovery", desc: "Understand student acquisition, tutor onboarding, and tuition operational bottlenecks.", deliverables: ["Business Model Blueprint", "Stakeholder Journey Maps", "Marketplace Feature Matrix"] },
      { step: "02", title: "Marketplace Architecture", desc: "Design connected student, tutor, and administrator experiences and state machines.", deliverables: ["System Architecture DAG", "Database Entity Schemas", "UI/UX Design System"] },
      { step: "03", title: "Full-Stack Build", desc: "Engineer discovery feeds, demos, classes, group batches, digital notes, and commerce.", deliverables: ["Next.js Frontend", "Node.js Core Backend", "PostgreSQL Database Engine"] },
      { step: "04", title: "Automation & Meetings", desc: "Automate video meeting room generation, attendance tracking, and calendar synchronization.", deliverables: ["WebRTC Meeting Engine", "Calendar Sync Service", "SMS / WhatsApp Alerts"] },
      { step: "05", title: "Trust & Analytics", desc: "Deploy tutor verification, wallet payouts, and educator performance intelligence.", deliverables: ["KYC Verification Vault", "Escrow Wallet Engine", "Tutor Analytics Portal"] },
      { step: "06", title: "SEO & Continuous Iteration", desc: "Optimize programmatic organic acquisition and continuously scale the platform.", deliverables: ["Programmatic SEO Engine", "Performance Tuning", "Ongoing Feature Releases"] },
    ],
    results: [
      { title: "Active Student Community", value: "10,000+", description: "Enrolled students actively learning across academic syllabuses, languages, and competitive exams." },
      { title: "Verified Expert Tutors", value: "2,000+", description: "Educators successfully onboarded, verified, and earning predictable income on the platform." },
      { title: "Completed Class Sessions", value: "50,000+", description: "Live 1-on-1 classes, group cohort sessions, and free demo lessons conducted seamlessly." },
      { title: "Long-Term Engineering Partnership", value: "Ongoing Client", description: "CodePlaced continues to support product development, automation, optimization, and SEO as the platform scales." },
    ],
    businessImpact:
      "Tuitionstime evolved from a static tutor directory into a high-growth, three-sided EdTech operating system that powers tens of thousands of learning sessions, provides predictable livelihood to educators, and automates multi-sided commercial operations.",
    testimonial: {
      quote: "CodePlaced engineered our entire platform from scratch. They didn't just build a website—they built the complete operational machine behind Tuitionstime: matching, meetings, wallet, payouts, and SEO. The results speak for themselves.",
      author: "Abhijeet Sodan",
      role: "Founder & CEO",
      company: "Tuitionstime",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
  },

  // =========================================================================
  // 1. HEALTHCARE AI TRIAGE
  // =========================================================================
  {
    slug: "healthcare-ai-triage",
    title: "Healthcare Analytics Platform & AI Triage Engine",
    tagline: "HIPAA-compliant data lakehouse & autonomous clinical triage assistant",
    industry: "Healthcare",
    clientType: "Hospital Network & Telehealth Provider",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Built an AI-powered clinical analytics platform and automated triage engine that reduced emergency wait times, eliminated manual charting waste, and delivered sub-second executive telemetry across 14 hospital centers.",
    teamSize: "6 Senior Engineers",
    duration: "12 Weeks",
    activeUsers: "4,200+ Clinicians & 14 Centers",
    availability: "99.99% SLA",
    metrics: [
      { value: "18,000 hrs/yr", label: "Clinical Hours Saved", detail: "Automated triage charting" },
      { value: "99.99%", label: "Platform Uptime", detail: "HIPAA & SOC2 SLA compliance" },
      { value: "42%", label: "Efficiency Gain", detail: "Emergency intake throughput" },
    ],
    detailedKpis: [
      { value: "18,000 hrs", label: "Annual Clinical Hours Saved", category: "Staff Productivity", delta: "+42% shift efficiency", description: "Automated charting summaries generated in < 2 seconds." },
      { value: "99.99%", label: "System Availability SLA", category: "Reliability", delta: "Zero downtime surges", description: "Multi-region AWS cluster with automated health checks." },
      { value: "42%", label: "Emergency Intake Velocity", category: "Patient Throughput", delta: "-19 mins per patient", description: "Average triage dropped from 45 min to under 26 min." },
      { value: "14 Sites", label: "Hospital Centers Unified", category: "Data Ingestion", delta: "100% EHR consolidation", description: "Single-pane-of-glass data lakehouse across 5 legacy EHRs." },
      { value: "25k /sec", label: "Telemetry Event Throughput", category: "Streaming Core", delta: "Sub-50ms ingestion", description: "Continuous bedside vitals and lab update event streams." },
      { value: "99.9%", label: "Triage Summary Accuracy", category: "AI Safety", delta: "Zero diagnostic drift", description: "Private VPC RAG engine with strict clinical guardrails." },
      { value: "$1.85M", label: "First-Year Cost Reduction", category: "Financial ROI", delta: "340% direct ROI", description: "Eliminated outsourced transcription & administrative overtime." },
      { value: "< 400ms", label: "Clinical Search Latency", category: "Performance", delta: "Instant record lookup", description: "Vectorized EHR queries across 14 million historical charts." },
      { value: "0 Breaches", label: "HIPAA & SOC2 Audit Security", category: "Compliance", delta: "100% audit pass", description: "Zero patient data egress beyond isolated hospital VPC." },
      { value: "70%", label: "Faster Operations Handoff", category: "Hospital Ops", delta: "Automated bed dispatch", description: "Real-time ICU and ward occupancy telemetry updates." },
    ],
    technologies: ["React", "Python", "AWS HealthLake", "OpenAI", "Snowflake", "Power BI", "dbt", "Kafka"],
    problemStatement:
      "Hospital triage staff faced severe cognitive overload and 45-minute average patient intake delays due to disconnected legacy electronic health record (EHR) databases, fragmented lab results, and manual triage checklists across 14 regional sites.",
    businessGoals: [
      "Cut average emergency intake triage latency by over 40% without compromising diagnostic accuracy.",
      "Consolidate 14 siloed hospital EHR feeds into a single HIPAA-compliant, real-time analytics warehouse.",
      "Empower department directors with live bed-occupancy and clinical acuity telemetry dashboards.",
    ],
    projectScope: [
      "Zero-downtime FHIR/HL7 compliant data ingestion pipeline from legacy EHR databases.",
      "Domain-tuned LLM clinical assistant to automatically draft structured intake summaries.",
      "Interactive executive dashboards in Power BI with row-level role-based security.",
      "Automated load testing and multi-region failover cluster on AWS.",
    ],
    challenges: [
      "Strict HIPAA compliance requiring end-to-end encryption with zero external patient data leakage.",
      "Heterogeneous data schemas across 5 different legacy EHR vendor systems.",
      "Sub-500ms latency requirement for real-time patient risk scoring during peak emergency room surges.",
    ],
    challengeItems: [
      {
        number: "01",
        title: "Heterogeneous Data Schemas",
        category: "Data Ingestion",
        problem: "14 hospital centers utilized 5 incompatible EHR platforms with conflicting HL7 formats and duplicate patient keys.",
        impact: "Clinicians wasted 8-12 minutes per intake reconciling historical patient records across disconnected silos.",
        solutionTactic: "Engineered a normalized FHIR data pipeline on AWS with automated deduplication and schema harmonization.",
      },
      {
        number: "02",
        title: "Emergency Cognitive Overload",
        category: "Clinical Operations",
        problem: "Nurses had to manually review 40+ pages of unstructured medical history during critical triage minutes.",
        impact: "Severe intake bottlenecks leading to 45-minute average ER waiting times and physician burnout.",
        solutionTactic: "Deployed private RAG summarizer extracting acute vitals, contraindications, and ICD-10 notes in seconds.",
      },
      {
        number: "03",
        title: "HIPAA Security & Trust",
        category: "Security & Compliance",
        problem: "Commercial LLMs presented severe risks of protected health information (PHI) egress.",
        impact: "Inability to leverage state-of-the-art AI without violating federal healthcare compliance.",
        solutionTactic: "Isolated the entire inference pipeline inside an encrypted private VPC with zero data retention endpoints.",
      },
      {
        number: "04",
        title: "Surge Scale & Concurrency",
        category: "Scalability",
        problem: "Flu season and regional spikes caused 8x traffic surges that crashed legacy relational databases.",
        impact: "Critical dashboard freeze during peak emergency department admissions.",
        solutionTactic: "Re-architected compute with Snowflake lakehouse, Redis caching, and Kafka event buffering.",
      },
    ],
    ecosystemPersonas: [
      {
        role: "Emergency Triage Nurses",
        badge: "Frontline Point-of-Care",
        avatarIcon: "stethoscope",
        responsibilities: [
          "Rapid patient intake & vitals recording",
          "Acuity color scoring & initial symptom assessment",
          "Automated medical history summarization review",
        ],
        features: [
          "Voice-to-ICD-10 clinical transcription",
          "1-click EHR medication allergy alerts",
          "Sub-second patient profile lookup",
        ],
        screenHighlight: "Live Nurse Intake Console & Vitals Triage Stream",
        description: "Frontline caregivers who rely on instant, synthesized medical summaries to make split-second triage decisions without administrative friction.",
      },
      {
        role: "Attending Physicians & Specialists",
        badge: "Clinical Decision Makers",
        avatarIcon: "users",
        responsibilities: [
          "Diagnostic review & clinical treatment authorization",
          "Longitudinal lab trend inspection & differential diagnosis",
          "Automated discharge and transfer order sign-off",
        ],
        features: [
          "Historical lab & imaging timeline slider",
          "AI-generated differential diagnosis prompts",
          "Secure multi-specialist chat and handoff notes",
        ],
        screenHighlight: "Diagnostic Copilot & Longitudinal Patient Timeline",
        description: "Doctors who leverage deep longitudinal records and automated contraindication flags to deliver precise, rapid patient treatments.",
      },
      {
        role: "Hospital Operations Directors",
        badge: "Executive Leadership",
        avatarIcon: "briefcase",
        responsibilities: [
          "Regional bed capacity & ICU utilization oversight",
          "Nurse-to-patient staffing ratio balance",
          "Emergency intake bottleneck detection and resolution",
        ],
        features: [
          "Real-time 14-hospital facility heatmap",
          "Predictive 6-hour admission surge forecasting",
          "Executive Power BI telemetry & exportable audits",
        ],
        screenHighlight: "Executive Operations Cockpit & Bed Capacity Telemetry",
        description: "Leadership teams managing bed capacity, clinical throughput, and compliance across 14 distributed hospital campuses.",
      },
    ],
    userJourneySteps: [
      {
        step: "01",
        stage: "Patient Arrival",
        title: "Rapid Intake & Biometric Check-In",
        action: "Nurse scans patient ID or speaks initial symptoms into bedside tablet.",
        systemAction: "FHIR pipeline fetches longitudinal medical history across 14 hospital databases in 180ms.",
        outcome: "Full historical record unified with active allergies and contraindications highlighted.",
      },
      {
        step: "02",
        stage: "AI Risk Scoring",
        title: "Autonomous Clinical Triage & Acuity Scoring",
        action: "Vitals monitor streams blood pressure, SpO2, and ECG data automatically.",
        systemAction: "Private VPC RAG engine computes clinical acuity index and flags emergency risk factors.",
        outcome: "Patient assigned priority code (ESI 1-5) and routed to optimal emergency bay.",
      },
      {
        step: "03",
        stage: "Doctor Review",
        title: "Synthesized Diagnostic Briefing",
        action: "Attending physician opens patient profile on mobile clinical cockpit.",
        systemAction: "AI generates a 3-bullet structured intake brief with cited lab trends and ICD-10 suggestions.",
        outcome: "Physician spends 30 seconds reviewing rather than 12 minutes reading raw EHR pages.",
      },
      {
        step: "04",
        stage: "Bed Allocation",
        title: "Real-Time Facility Resource Dispatch",
        action: "Clinical team submits admission request for specialized telemetry ward.",
        systemAction: "Operations engine matches patient acuity with live regional bed and staffing capacity.",
        outcome: "Bed reserved instantly; hospital director cockpit reflects updated occupancy metrics.",
      },
      {
        step: "05",
        stage: "Continuous Telemetry",
        title: "Live Monitoring & Executive Insights",
        action: "Patient transferred to recovery while automated discharge plan initializes.",
        systemAction: "Kafka streams post-intake telemetry to Snowflake analytical lakehouse for shift analytics.",
        outcome: "100% audit logging completed automatically with zero administrative overtime.",
      },
    ],
    galleryScreens: [
      {
        id: "nurse-intake",
        title: "Clinical Command Center",
        tag: "Nurse Station Cockpit",
        category: "Point-of-Care",
        description: "Real-time emergency patient queue with automated acuity color scoring, bed allocation, and live vitals streaming.",
        keyFeatures: ["Sub-second FHIR record retrieval", "Dynamic acuity color coding (ESI 1-5)", "Integrated allergy contraindication alerts"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "ai-copilot",
        title: "AI Triage Summary Console",
        tag: "Diagnostic Assistant",
        category: "AI & NLP",
        description: "Generates structured ICD-10 notes, lab synthesis, and risk assessments from raw EHR streams in under 2 seconds.",
        keyFeatures: ["Zero-data-retention VPC LLM", "Deterministic medical citation links", "1-click physician sign-off and export"],
        image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "exec-cockpit",
        title: "Executive Capacity Cockpit",
        tag: "Hospital Operations BI",
        category: "Executive Telemetry",
        description: "Sub-second Power BI dashboard tracking ICU occupancy, regional staffing ratios, and discharge forecasting across 14 sites.",
        keyFeatures: ["Real-time bed utilization heatmaps", "Predictive 6-hour ER surge alerts", "Row-level security per department head"],
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    solution:
      "CodePlaced engineered a modern data lakehouse on AWS and Snowflake, paired with an edge-deployed private RAG triage engine. The solution continuously aggregates vitals, history, and lab reports into a unified longitudinal record with automated risk stratifications.",
    solutionHighlights: [
      "High-throughput event streaming ingestion processing 25,000+ clinical events per second.",
      "Deterministic private LLM summarizer with strict validation guardrails against clinical hallucinations.",
      "Custom React command center dashboard for emergency nurses with real-time WebSocket alert triggers.",
    ],
    architectureNodes: [
      { title: "01. EHR Ingestion Tier", subtitle: "Kafka & HL7/FHIR", desc: "Real-time streaming ingestion from 14 hospital centers", status: "25k events/s", tech: ["Kafka", "AWS HealthLake", "FHIR / HL7"] },
      { title: "02. Snowflake Lakehouse", subtitle: "dbt Medallion DAG", desc: "Automated deduplication, schema enforcement & HIPAA encryption", status: "Sub-second Query", tech: ["Snowflake", "dbt", "PostgreSQL"] },
      { title: "03. Private AI Triage Engine", subtitle: "Domain RAG & LLM", desc: "Risk stratification & automated structured charting summaries", status: "< 400ms Inference", tech: ["Private VPC", "Python", "Vector DB"] },
      { title: "04. Clinical Cockpit & BI", subtitle: "React & Power BI", desc: "Live nurse command center & executive hospital telemetry", status: "99.99% SLA", tech: ["React", "Power BI", "WebSockets"] },
    ],
    engineeringDecisions: [
      {
        technology: "Snowflake + dbt Medallion Architecture",
        problem: "Legacy relational databases crashed under high-concurrency analytical queries across 14 million historical records.",
        decision: "Implemented a decoupled compute lakehouse with automated dbt CI/CD data modeling and automated schema enforcement.",
        benefit: "Achieved an 18x query performance boost and instantaneous daily refreshes with zero production table locking.",
      },
      {
        technology: "Apache Kafka Event Bus",
        problem: "Batch ETL synchronization resulted in 4-hour stale bed occupancy numbers and dangerous triage delays during surges.",
        decision: "Deployed an event-driven Kafka streaming pipeline with dead-letter queue recovery and strict partition ordering.",
        benefit: "Enabled sub-second event propagation from bedside telemetry monitors directly into analytical marts.",
      },
      {
        technology: "Private VPC RAG Engine",
        problem: "Commercial public cloud LLMs posed severe data leak risks under strict federal HIPAA & SOC2 compliance rules.",
        decision: "Constructed an isolated private VPC embedding search with zero-data-retention endpoints and prompt validation guardrails.",
        benefit: "100% compliance audit clearance with zero external patient data transmission and 99.9% summary accuracy.",
      },
      {
        technology: "Power BI Embedded with Row-Level Security",
        problem: "Hospital executives had no real-time visibility into regional emergency bed capacity and staffing imbalances.",
        decision: "Integrated Power BI Embedded with dynamic Row-Level Security (RLS) configured for each clinical department head.",
        benefit: "Live, unified executive cockpits displaying real-time ICU and ED utilization across 14 distributed sites.",
      },
    ],
    beforeAfter: [
      { metric: "Patient Intake Lookup", before: "8 minutes (manual)", after: "15 seconds (automated)", improvement: "96% Faster" },
      { metric: "Executive Capacity Reporting", before: "3 Days (Batch)", after: "Real-Time (Streaming)", improvement: "Instant Telemetry" },
      { metric: "Triage Summary Accuracy", before: "74% (Varying)", after: "99.9% (Validated)", improvement: "Clinical Grade" },
      { metric: "Annual Administrative Waste", before: "$2.4M Lost", after: "$550K Managed", improvement: "$1.85M Saved" },
    ],
    showcaseModules: [
      { name: "Live Clinical Command Center", tag: "Nurse Station Cockpit", desc: "Real-time emergency patient queue with automated acuity color scoring and bed allocation.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" },
      { name: "AI Triage Summary Console", tag: "Diagnostic Copilot", desc: "Generates structured ICD-10 notes from voice transcripts and lab records in under 2 seconds.", image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80" },
      { name: "Executive Capacity Cockpit", tag: "Director BI Portal", desc: "Sub-second Power BI dashboard tracking ICU occupancy, staffing ratios, and discharge forecasts.", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Discovery & Audit", desc: "Clinical workflow audits, HIPAA threat modeling, and FHIR data schema mapping across 14 hospital sites.", deliverables: ["HIPAA Architecture Spec", "FHIR Schema Mapping", "Threat Matrix"] },
      { step: "02", title: "Lakehouse Topology", desc: "Designed HIPAA-compliant dual-lakehouse topology with automated Row-Level Security (RLS) policies.", deliverables: ["Snowflake dbt DAG", "Kafka Ingestion Cluster", "IAM Isolation Plan"] },
      { step: "03", title: "Full-Stack Build", desc: "Rapid 3-week sprint build of ingestion pipelines, private RAG summarization engine, and React frontends.", deliverables: ["Private VPC RAG Core", "React Command Center", "WebSocket Alert Hub"] },
      { step: "04", title: "Rigorous Testing", desc: "Penetration audits, clinical trial simulation gates, and high-concurrency 100k synthetic load tests.", deliverables: ["Penetration Audit", "100k Synthetic Load Test", "Clinical Sign-off"] },
      { step: "05", title: "Zero-Downtime Go-Live", desc: "Zero-downtime blue/green deployment across AWS US-East and US-West with automatic failover.", deliverables: ["Blue/Green AWS Pipeline", "Multi-Region Cluster", "Monitoring Runbooks"] },
      { step: "06", title: "Telemetry & Scaling", desc: "24/7 telemetry monitoring, latency optimization, and ongoing model accuracy benchmarking.", deliverables: ["Datadog Telemetry", "Latency Guardrails", "Accuracy Benchmarks"] },
    ],
    results: [
      { title: "Clinical Time Reclaimed", value: "18,000 hrs/yr", description: "Physicians and nurses save an average of 42 minutes per 8-hour shift on administrative charting." },
      { title: "Emergency Triage Latency", value: "-42%", description: "Patient intake reduced from 45 minutes to under 26 minutes across all hospital departments." },
      { title: "System Reliability", value: "99.99%", description: "Zero recorded downtime during seasonal influenza and winter emergency surges." },
      { title: "Annual Operational Savings", value: "$1.85M", description: "Direct labor and administrative cost reduction achieved within the first 12 months." },
    ],
    businessImpact:
      "The platform transformed emergency department throughput across all 14 hospital centers, providing clinicians with instant, trustworthy intelligence at the point of care while unlocking millions in annual operational efficiencies.",
    testimonial: {
      quote: "CodePlaced delivered in 4 weeks what our internal vendor teams struggled with for over 18 months. The clinical adoption was instantaneous.",
      author: "Dr. Elena Rostova",
      role: "Chief Medical Information Officer",
      company: "MedHealth Regional Health Network",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
    },
  },

  // =========================================================================
  // 2. ENTERPRISE RAG COPILOT
  // =========================================================================
  {
    slug: "enterprise-rag-copilot",
    title: "Enterprise Knowledge Graph & Secure RAG Copilot",
    tagline: "Deterministic hybrid vector-graph search across 12M+ technical documents",
    industry: "Enterprise AI & SaaS",
    clientType: "Fortune 500 Infrastructure & Cloud Services Firm",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Architected a secure enterprise RAG copilot combining Neo4j knowledge graphs and Milvus vector search across 12M+ technical documents, slashing support resolution times by 68%.",
    teamSize: "5 Senior Engineers",
    duration: "11 Weeks",
    activeUsers: "12,000+ Engineers & 12M Docs",
    availability: "99.99% SLA",
    metrics: [
      { value: "68%", label: "Resolution Velocity", detail: "Tier-3 support ticket resolution" },
      { value: "99.2%", label: "Citation Accuracy", detail: "Zero hallucination deterministic RAG" },
      { value: "12M+", label: "Technical Docs Indexed", detail: "Real-time incremental embeddings" },
    ],
    detailedKpis: [
      { value: "68%", label: "Support Ticket Resolution Velocity", category: "Support Efficiency", delta: "-4.2 hrs per ticket", description: "Engineers find exact code snippets and root causes instantly." },
      { value: "99.2%", label: "Deterministic Citation Accuracy", category: "AI Safety", delta: "Zero hallucinations", description: "Hybrid vector + Neo4j knowledge graph validation." },
      { value: "12M+", label: "Enterprise Technical Documents", category: "Data Scale", delta: "Continuous sync", description: "Indexed from Jira, Confluence, GitHub, and Slack." },
      { value: "< 350ms", label: "End-to-End Query Latency", category: "Speed", delta: "Sub-second response", description: "Optimized Milvus HNSW indexing and streaming token responses." },
      { value: "12,000+", label: "Active Enterprise Engineers", category: "Adoption", delta: "91% daily active usage", description: "Integrated into developer IDEs, Slack, and web portal." },
      { value: "100%", label: "ACL Permission Inheritance", category: "Security", delta: "Zero data leakage", description: "Row-level access control matching enterprise LDAP/Okta." },
      { value: "$2.1M", label: "Annual Engineering Hours Saved", category: "Productivity ROI", delta: "240k hours reclaimed", description: "Drastically reduced context switching and redundant debugging." },
      { value: "99.99%", label: "Copilot Service Availability", category: "Reliability", delta: "Zero downtime", description: "Multi-region AWS cluster with automatic model fallbacks." },
      { value: "450k", label: "Queries Answered Monthly", category: "Scale", delta: "+35% month-over-month", description: "High-concurrency streaming response infrastructure." },
      { value: "94%", label: "First-Response Resolution Rate", category: "Customer Satisfaction", delta: "Up from 61%", description: "Support engineers solve complex customer escalations on first contact." },
    ],
    technologies: ["Next.js", "Python", "Neo4j", "Milvus", "FastAPI", "OpenAI", "AWS Bedrock"],
    problemStatement:
      "Over 12,000 global software engineers and tier-3 support teams wasted an estimated 4.5 hours per week searching across fragmented Jira tickets, GitHub repositories, Confluence wikis, and Slack threads for root-cause diagnostic information.",
    businessGoals: [
      "Unify 12M+ cross-platform documents into a real-time searchable semantic knowledge graph.",
      "Achieve deterministic, fully-cited AI answers with strict zero-hallucination guardrails.",
      "Enforce granular LDAP/Okta enterprise access permissions across every query.",
    ],
    projectScope: [
      "Incremental data ingestion connectors for GitHub, Confluence, Jira, and Slack.",
      "Hybrid vector + knowledge graph retrieval engine utilizing Milvus and Neo4j.",
      "Custom Next.js developer workbench and IDE plugin with real-time streaming citations.",
    ],
    challenges: [
      "Eliminating AI hallucinations on complex, multi-repo technical architectural questions.",
      "Enforcing complex access control lists (ACLs) so junior staff cannot query confidential IP.",
    ],
    challengeItems: [
      {
        number: "01",
        title: "Complex Entity Relationship Hallucinations",
        category: "AI Accuracy",
        problem: "Pure vector search returned semantically similar documents that lacked exact architectural dependency relationships.",
        impact: "LLM generated plausible-sounding code advice that broke microservice dependencies.",
        solutionTactic: "Constructed a hybrid retrieval pipeline combining Milvus vector embeddings with Neo4j entity graph traversals.",
      },
      {
        number: "02",
        title: "Enterprise Access Control (ACL) Leaks",
        category: "Security & Governance",
        problem: "Indexing company-wide code and documentation risked exposing confidential M&A and executive records to unauthorized staff.",
        impact: "Compliance block on AI deployment by Chief Information Security Officer (CISO).",
        solutionTactic: "Embedded user Okta/LDAP group tokens into vector search filters, enforcing real-time row-level ACL validation.",
      },
      {
        number: "03",
        title: "High Document Ingestion Churn",
        category: "Data Pipelines",
        problem: "12,000 engineers pushed thousands of code commits and Confluence edits hourly, rendering static vector indices stale.",
        impact: "AI copilot provided outdated architectural documentation and superseded API guides.",
        solutionTactic: "Engineered an incremental event-driven embedding pipeline that re-indexes modified files in < 15 seconds.",
      },
      {
        number: "04",
        title: "Sub-Second Query Latency SLA",
        category: "Performance",
        problem: "Multi-hop graph traversal combined with vector search and LLM synthesis resulted in 8-second response delays.",
        impact: "Developers abandoned the tool due to workflow disruption.",
        solutionTactic: "Implemented asynchronous speculative graph fetching and token-streaming responses via Server-Sent Events (SSE).",
      },
    ],
    ecosystemPersonas: [
      {
        role: "Tier-3 Support & SREs",
        badge: "Incident Response",
        avatarIcon: "activity",
        responsibilities: [
          "Rapid root-cause analysis during critical production outages",
          "Cross-service dependency failure tracing",
          "Customer escalation resolution and post-mortem drafting",
        ],
        features: [
          "1-click incident post-mortem generator",
          "Interactive microservice dependency graph viewer",
          "Direct code snippet citation with GitHub line links",
        ],
        screenHighlight: "Incident War-Room & SRE Diagnostic Console",
        description: "SREs and escalation engineers who need instant, verifiable answers and code links to resolve high-severity enterprise outages.",
      },
      {
        role: "Core Software Engineers & Architects",
        badge: "Product Engineering",
        avatarIcon: "code2",
        responsibilities: [
          "Cross-repo API discovery and architectural integration",
          "Legacy codebase refactoring & dependency auditing",
          "Internal developer documentation lookup in IDE",
        ],
        features: [
          "VS Code & IntelliJ IDE copilot extension",
          "Semantic code search with AST syntax awareness",
          "Automated architectural decision record (ADR) lookup",
        ],
        screenHighlight: "Developer Knowledge Workbench & IDE Copilot",
        description: "Software developers navigating millions of lines of distributed code across dozens of microservice repositories.",
      },
      {
        role: "Enterprise CISO & Compliance Officers",
        badge: "Security & Governance",
        avatarIcon: "shieldCheck",
        responsibilities: [
          "Data boundary enforcement & ACL compliance auditing",
          "IP protection & employee query audit inspection",
          "Model safety guardrails & hallucination benchmarking",
        ],
        features: [
          "Real-time query audit & prompt security vault",
          "Automated Okta group permission synchronization",
          "Zero-retention private cloud VPC deployment",
        ],
        screenHighlight: "CISO Security Governance & Prompt Audit Vault",
        description: "Security leaders guaranteeing strict access control, zero intellectual property leakage, and regulatory compliance.",
      },
    ],
    userJourneySteps: [
      {
        step: "01",
        stage: "Engineer Inquiry",
        title: "Natural Language Technical Query",
        action: "Engineer asks: 'How does authentication token refresh propagate across the billing microservices?'",
        systemAction: "System verifies engineer's Okta permissions and extracts entity keywords via syntactic parser.",
        outcome: "Query sanitized and enriched with developer's project scope context in 45ms.",
      },
      {
        step: "02",
        stage: "Hybrid Retrieval",
        title: "Parallel Vector & Knowledge Graph Search",
        action: "Engine dispatches search across 12M+ documents.",
        systemAction: "Milvus retrieves semantically relevant text chunks while Neo4j traces exact microservice dependency edges.",
        outcome: "Unified context graph created combining exact code definitions with documentation explanations.",
      },
      {
        step: "03",
        stage: "Citation Validation",
        title: "Deterministic Verification & Guardrails",
        action: "LLM synthesizes technical answer.",
        systemAction: "Validation guardrails cross-examine output against retrieved facts, verifying line-by-line source citations.",
        outcome: "100% verified response with clickable GitHub, Confluence, and Jira links.",
      },
      {
        step: "04",
        stage: "Streaming Delivery",
        title: "Instant Sub-Second Token Response",
        action: "Engineer receives synthesized architectural brief in web portal or IDE.",
        systemAction: "Server-Sent Events (SSE) stream tokens with interactive code blocks and visual architecture snippet.",
        outcome: "Engineer resolves root cause in 2 minutes without opening 15 browser tabs.",
      },
      {
        step: "05",
        stage: "Continuous Feedback",
        title: "Feedback Loop & Graph Self-Enrichment",
        action: "Engineer upvotes answer and tags resolved Jira ticket.",
        systemAction: "Engine records successful query-resolution pair, strengthening graph relationship weights for future queries.",
        outcome: "System knowledge base becomes progressively smarter with every resolved inquiry.",
      },
    ],
    galleryScreens: [
      {
        id: "dev-workbench",
        title: "Developer Knowledge Workbench",
        tag: "Developer Portal",
        category: "Developer Experience",
        description: "Interactive hybrid search console with multi-repo code explorer, interactive graph visualizer, and streaming AI assistant.",
        keyFeatures: ["Deterministic GitHub line citations", "Interactive Neo4j graph viewer", "Sub-350ms streaming token generation"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "sre-incident-console",
        title: "SRE Incident Diagnostic Console",
        tag: "Incident Response",
        category: "Site Reliability",
        description: "Real-time production outage investigator matching live error stack traces to past post-mortems and resolved GitHub PRs.",
        keyFeatures: ["Stack trace automated matching", "Past post-mortem similarity score", "1-click Slack war-room summary post"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "ciso-audit-vault",
        title: "CISO Security Governance Vault",
        tag: "Security Suite",
        category: "Governance",
        description: "Enterprise ACL mapping audit, user query logs, model prompt safety benchmarks, and Okta group synchronization.",
        keyFeatures: ["Real-time Okta ACL enforcement", "Prompt injection attack defense", "Exportable compliance audit logs"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    solution:
      "CodePlaced engineered a hybrid retrieval system pairing Milvus vector search with a Neo4j architectural knowledge graph. Real-time document webhooks continuously embed changes, while strict ACL validators guarantee zero unauthorized data access.",
    solutionHighlights: [
      "Hybrid Vector + Graph retrieval eliminating hallucinations on complex codebases.",
      "Real-time Okta/LDAP access token enforcement across all query pipelines.",
      "Sub-350ms streaming response time across 12M+ technical documents.",
    ],
    architectureNodes: [
      { title: "01. Enterprise Ingestion Connectors", subtitle: "GitHub, Jira & Slack", desc: "Incremental webhook sync indexing code commits and docs in < 15s", status: "12M+ Docs Live", tech: ["FastAPI", "Webhooks", "Kafka", "Celery"] },
      { title: "02. Milvus Vector Engine", subtitle: "HNSW Embeddings", desc: "Dense semantic vector indexing with cosine similarity search", status: "< 50ms Vector Search", tech: ["Milvus", "OpenAI text-3-large", "HNSW"] },
      { title: "03. Neo4j Knowledge Graph", subtitle: "Entity Dependency Graph", desc: "Explicit microservice, API schema, and team relationship modeling", status: "Deterministic Links", tech: ["Neo4j", "Cypher", "GraphQL"] },
      { title: "04. Next.js Workbench & IDE", subtitle: "SSE Token Streaming", desc: "Real-time developer portal, VS Code extension & Slack bot", status: "Sub-350ms Stream", tech: ["Next.js", "React", "Server-Sent Events", "Tailwind"] },
    ],
    engineeringDecisions: [
      {
        technology: "Hybrid Neo4j Knowledge Graph + Milvus Vector Search",
        problem: "Standard RAG vector similarity hallucinated microservice relationships that sounded plausible but were factually incorrect.",
        decision: "Paired dense vector search in Milvus with explicit entity relation traversal in Neo4j, using graph paths to constrain context.",
        benefit: "Elevated answer accuracy from 76% to 99.2% with 100% verified source citations.",
      },
      {
        technology: "Streaming Token Pipeline via Server-Sent Events (SSE)",
        problem: "Waiting for full LLM generation created a 6-to-8 second perceived delay that broke developer flow.",
        decision: "Implemented an asynchronous streaming pipeline utilizing FastAPI and Server-Sent Events in Next.js.",
        benefit: "First token arrives in under 350ms, providing instantaneous interactive feedback.",
      },
    ],
    beforeAfter: [
      { metric: "Tier-3 Support Ticket Latency", before: "6.2 Hours / ticket", after: "1.9 Hours / ticket", improvement: "68% Faster" },
      { metric: "Hallucination Rate on Architecture", before: "24.0% of Queries", after: "0.8% (Near Zero)", improvement: "99.2% Accuracy" },
      { metric: "Engineering Time Spent Searching", before: "4.5 hrs / engineer / week", after: "1.1 hrs / engineer / week", improvement: "3.4 hrs Reclaimed" },
      { metric: "Annual Developer Productivity Value", before: "Base Budget", after: "$2.1M Hours Reclaimed", improvement: "$2.1M Value" },
    ],
    showcaseModules: [
      { name: "Developer Knowledge Workbench", tag: "Developer Portal", desc: "Interactive hybrid search console with multi-repo code explorer and streaming AI assistant.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" },
      { name: "SRE Incident Diagnostic Console", tag: "Incident Response", desc: "Matches live error stack traces to past post-mortems and resolved GitHub pull requests.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Enterprise Knowledge Audit", desc: "Audited 12M+ documents across GitHub, Confluence, Jira, and Slack, identifying critical architectural taxonomy.", deliverables: ["Document Taxonomy Matrix", "ACL Security Spec", "Connector Architecture"] },
      { step: "02", title: "Hybrid Graph & Vector Core", desc: "Constructed Neo4j entity graph schemas and optimized Milvus HNSW dense embedding indices.", deliverables: ["Neo4j Schema Design", "Milvus Cluster Config", "Hybrid Query Planner"] },
      { step: "03", title: "CDC Ingestion Connectors", desc: "Engineered high-throughput webhook connectors with automated deduplication and change-data-capture.", deliverables: ["Incremental Ingestion Pipeline", "Kafka Event Bus", "Chunking Guardrails"] },
      { step: "04", title: "Developer Workbench & IDE SDK", desc: "Built modern Next.js search portal, VS Code extension, and streaming citation viewer.", deliverables: ["Next.js Workbench UI", "VS Code Extension", "SSE Token Stream SDK"] },
      { step: "05", title: "Security & Penetration Testing", desc: "Executed comprehensive Okta ACL isolation audits and adversarial prompt injection defense tests.", deliverables: ["Penetration Test Report", "Prompt Defense Suite", "CISO Approval Sign-off"] },
      { step: "06", title: "Enterprise-Wide Rollout", desc: "Deployed to 12,000+ engineers globally with automated query telemetry and feedback loops.", deliverables: ["Global Production Launch", "Telemetry Monitoring", "Continuous Accuracy Loop"] },
    ],
    results: [
      { title: "Resolution Velocity", value: "68%", description: "Support engineers and SREs cut complex technical ticket resolution times from 6.2 hours to 1.9 hours." },
      { title: "Citation Integrity", value: "99.2%", description: "Hybrid graph-vector architecture eliminated hallucinations, ensuring every code recommendation is verifiable." },
      { title: "Productivity Reclaimed", value: "240,000 hrs", description: "Saved an estimated 3.4 hours per engineer weekly across 12,000 active global developers." },
      { title: "Annual Engineering ROI", value: "$2.1M", description: "Direct productivity value unlocked through eliminated context switching and faster onboarding." },
    ],
    businessImpact:
      "The copilot became the foundational intelligence backbone for the enterprise, allowing 12,000 engineers to build, debug, and ship mission-critical infrastructure twice as fast.",
    testimonial: {
      quote: "The combination of Neo4j knowledge graphs with Milvus vector search was a game-changer. Our SREs solve complex production outages in minutes that used to take half a day.",
      author: "Vikram Malhotra",
      role: "VP of Engineering & Cloud Infrastructure",
      company: "CloudScale Systems",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    },
  },

  // =========================================================================
  // 3. FLEET DISPATCH ENGINE
  // =========================================================================
  {
    slug: "fleet-dispatch-engine",
    title: "Autonomous Fleet Dispatch & Telematics Engine",
    tagline: "Dynamic vehicle routing optimization & real-time IoT driver telemetry",
    industry: "Logistics & Supply Chain",
    clientType: "Nationwide Freight & Last-Mile Delivery Network",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Engineered an autonomous dispatch engine that dynamic-routes 6,200+ commercial freight trucks, cutting fuel consumption by 19% and boosting on-time delivery rates to 98.4%.",
    teamSize: "6 Senior Engineers",
    duration: "14 Weeks",
    activeUsers: "6,200 Vehicles & 50 Hubs",
    availability: "99.99% SLA",
    metrics: [
      { value: "19%", label: "Fuel Reduction", detail: "Dynamic route optimization" },
      { value: "98.4%", label: "On-Time Deliveries", detail: "Real-time traffic & weather rerouting" },
      { value: "6,200+", label: "Active Vehicles", detail: "Real-time GPS telematics streaming" },
    ],
    detailedKpis: [
      { value: "19%", label: "Fuel Expense Reduction", category: "Cost Efficiency", delta: "$4.2M saved annually", description: "Dynamic vehicle routing solver with traffic heuristics." },
      { value: "98.4%", label: "On-Time Delivery Rate", category: "Customer SLA", delta: "Up from 82.1%", description: "Sub-minute automated rerouting based on live congestion." },
      { value: "6,200+", label: "Commercial Trucks Managed", category: "Fleet Scale", delta: "Across 50 nationwide hubs", description: "Real-time CAN-bus and GPS streaming every 2 seconds." },
      { value: "48,000", label: "Daily Route Iterations Solved", category: "Compute Engine", delta: "< 120ms solve time", description: "GPU-accelerated Vehicle Routing Problem (VRP) solver." },
      { value: "32%", label: "Reduction in Empty Miles", category: "Asset Utilization", delta: "Optimized backhaul matching", description: "Automated return-trip freight allocation." },
      { value: "99.99%", label: "Dispatch System Uptime", category: "Reliability", delta: "Zero dispatch delays", description: "Kubernetes edge cluster with AWS multi-region failover." },
      { value: "$4.2M", label: "Annual Total ROI", category: "Financial ROI", delta: "Payback in 3.5 months", description: "Fuel savings, vehicle maintenance, and avoided SLA penalties." },
    ],
    technologies: ["React Native", "Go", "Python", "Kubernetes", "AWS IoT Core", "PostGIS", "Redis"],
    problemStatement:
      "Legacy dispatch systems relied on static morning route sheets that failed whenever highway accidents, weather delays, or emergency pickup requests occurred, resulting in 18% wasted fuel and 82% on-time delivery rates.",
    businessGoals: [
      "Implement real-time dynamic rerouting that recalculates optimal routes in under 5 seconds upon traffic disruptions.",
      "Reduce nationwide fleet fuel consumption by at least 15% through intelligent load consolidation.",
      "Provide dispatch managers with a live 60fps telematics map tracking 6,200+ vehicles simultaneously.",
    ],
    projectScope: [
      "High-throughput MQTT telemetry ingestion pipeline on AWS IoT Core.",
      "GPU-accelerated Vehicle Routing Problem (VRP) heuristic optimization solver in Go/C++.",
      "Driver companion mobile app in React Native with turn-by-turn offline navigation.",
    ],
    challenges: [
      "Solving multi-constraint Vehicle Routing Problems (time windows, driver hours, truck weight limits) for 6,200 trucks in real-time.",
      "Maintaining continuous driver connectivity through remote rural cellular dead zones.",
    ],
    challengeItems: [
      {
        number: "01",
        title: "Combinatorial Route Optimization",
        category: "Algorithms & Math",
        problem: "Calculating optimal multi-stop routes with 14 strict constraints for 6,200 vehicles.",
        impact: "Legacy solvers took 45 minutes to compute static routes that became invalid within 10 minutes of departure.",
        solutionTactic: "Engineered a distributed VRP heuristic solver in Go utilizing spatial partitioning and GPU acceleration.",
      },
      {
        number: "02",
        title: "High-Frequency IoT CAN-Bus Streaming",
        category: "IoT & Telematics",
        problem: "6,200 vehicles transmitting GPS, fuel level, tire pressure, and speed vectors every 2 seconds.",
        impact: "Database latency spikes and delayed vehicle location markers on dispatch screens.",
        solutionTactic: "Deployed AWS IoT Core MQTT broker paired with Redis geospatial indexing and time-series aggregation.",
      },
    ],
    ecosystemPersonas: [
      {
        role: "Central Dispatch Controllers",
        badge: "Fleet Command",
        avatarIcon: "activity",
        responsibilities: [
          "Nationwide fleet oversight across 50 distribution hubs",
          "Emergency disruption rerouting and incident management",
          "Driver hours-of-service (HOS) regulatory compliance",
        ],
        features: [
          "60fps WebGL nationwide telematics map",
          "1-click automated fleet reroute trigger",
          "Live weather & traffic overlay simulation",
        ],
        screenHighlight: "Central Dispatch 60fps Telematics Command Wall",
        description: "Dispatchers managing nationwide logistics networks who require sub-second situational awareness to optimize asset deployment.",
      },
      {
        role: "Commercial Freight Drivers",
        badge: "Field Operations",
        avatarIcon: "truck",
        responsibilities: [
          "Safe freight transport & turn-by-turn route navigation",
          "Electronic Proof of Delivery (ePOD) & barcode capture",
          "Vehicle pre-trip inspection reporting",
        ],
        features: [
          "Truck-specific navigation (bridge height & weight alerts)",
          "1-click digital signature & photo capture",
          "Offline mode with automated background upload",
        ],
        screenHighlight: "Driver Companion Mobile App & Turn-by-Turn GPS",
        description: "Professional drivers navigating highway and urban delivery routes with truck-specific constraints.",
      },
      {
        role: "Regional Terminal Managers",
        badge: "Hub Logistics",
        avatarIcon: "briefcase",
        responsibilities: [
          "Hub dock scheduling & trailer cross-docking",
          "Fleet maintenance scheduling & fuel consumption audits",
          "On-time delivery SLA reporting to enterprise clients",
        ],
        features: [
          "Terminal dock door assignment matrix",
          "Vehicle health & diagnostic trouble code (DTC) alerts",
          "Automated client SLA performance reports",
        ],
        screenHighlight: "Terminal Hub Dock & Maintenance Cockpit",
        description: "Hub operators ensuring smooth freight intake and trailer turnaround times.",
      },
    ],
    userJourneySteps: [
      {
        step: "01",
        stage: "Order Batching",
        title: "Dynamic Manifest Assembly",
        action: "Enterprise clients submit 45,000 daily delivery orders via EDI/API.",
        systemAction: "VRP optimization engine clusters stops by geographic density and truck payload constraints.",
        outcome: "Optimal delivery routes generated with 32% fewer required vehicles.",
      },
      {
        step: "02",
        stage: "Driver Departure",
        title: "Digital Manifest & Pre-Trip Inspection",
        action: "Driver logs into mobile tablet and completes digital vehicle walk-around.",
        systemAction: "System validates driver hours-of-service and unlocks truck-specific navigation profile.",
        outcome: "Driver departs with turn-by-turn directions respecting low bridges and weight limits.",
      },
    ],
    galleryScreens: [
      {
        id: "dispatch-wall",
        title: "Central Dispatch Command Wall",
        tag: "Dispatch Portal",
        category: "Fleet Telematics",
        description: "60fps WebGL map tracking 6,200 commercial trucks, live traffic congestion layers, and instant fleet reroute triggers.",
        keyFeatures: ["Sub-2s vehicle GPS latency", "Dynamic traffic reroute solver", "Driver HOS compliance tracker"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "driver-app",
        title: "Driver Companion Mobile App",
        tag: "Driver Mobile UX",
        category: "Mobile Navigation",
        description: "Truck-specific GPS navigation respecting weight/height limits with offline maps and electronic proof of delivery.",
        keyFeatures: ["Offline vector map caching", "1-click barcode & photo ePOD", "Automated pre-trip safety checklist"],
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    solution:
      "CodePlaced engineered an autonomous routing engine utilizing Go, PostGIS, and GPU-accelerated spatial heuristics. Connected to an AWS IoT Core telemetry pipeline, the engine continuously re-optimizes delivery routes as live conditions evolve.",
    solutionHighlights: [
      "Sub-second VRP optimization solving thousands of stops dynamically.",
      "Offline-first React Native mobile app with SQLite spatial tile caching for rural drivers.",
      "Real-time 60fps WebGL fleet command dashboard built for dual-monitor dispatch rooms.",
    ],
    architectureNodes: [
      { title: "01. IoT CAN-Bus Telemetry", subtitle: "AWS IoT Core & MQTT", desc: "GPS, fuel, speed & diagnostic trouble code streaming every 2s", status: "6,200 Trucks Live", tech: ["AWS IoT Core", "MQTT", "Go Microservices"] },
      { title: "02. Spatial Geospatial Hub", subtitle: "Redis & PostGIS", desc: "Sub-10ms geofence triggers and spatial proximity indexing", status: "< 10ms Latency", tech: ["Redis Geohash", "PostGIS", "TimescaleDB"] },
      { title: "03. VRP Route Optimization", subtitle: "GPU Heuristics Core", desc: "Multi-constraint dynamic route solver adapting to live traffic", status: "48k Routes/Day", tech: ["Go / C++", "CUDA", "Spatial Graph DAG"] },
      { title: "04. WebGL Dispatch & Mobile", subtitle: "React & React Native", desc: "60fps nationwide command map & offline driver navigation app", status: "99.99% Uptime", tech: ["React", "Deck.gl", "React Native", "Mapbox"] },
    ],
    engineeringDecisions: [
      {
        technology: "GPU-Accelerated Spatial Heuristics in Go/C++",
        problem: "Standard open-source routing solvers took 45+ minutes to compute nationwide multi-stop routes.",
        decision: "Engineered a custom spatial clustering heuristic in Go with CUDA GPU acceleration for heavy matrix distance calculations.",
        benefit: "Reduced route computation time from 45 minutes to 8 seconds, enabling real-time rerouting during active transit.",
      },
    ],
    beforeAfter: [
      { metric: "Fleet Fuel Consumption", before: "14.2M Gal / year", after: "11.5M Gal / year (-19%)", improvement: "19% Less Fuel" },
      { metric: "On-Time Delivery Rate", before: "82.1%", after: "98.4%", improvement: "+16.3% Boost" },
      { metric: "Route Calculation Time", before: "45 Minutes (Batch)", after: "8 Seconds (Real-Time)", improvement: "Instant Reroute" },
      { metric: "Annual Operational Savings", before: "Base Budget", after: "$4.2M Recovered", improvement: "$4.2M Saved" },
    ],
    showcaseModules: [
      { name: "Live Nationwide Dispatch Wall", tag: "Dispatch Center", desc: "60fps WebGL map tracking 6,200 vehicles, traffic overlays, and weather storm fronts.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Fleet Architecture Audit", desc: "CAN-bus protocol investigation, driver workflow mapping, and dispatch constraint modeling.", deliverables: ["Telematics Protocol Spec", "VRP Constraint Matrix"] },
      { step: "02", title: "Optimization Core Engineering", desc: "Built GPU-accelerated spatial routing solver with real-time traffic heuristics.", deliverables: ["Go/C++ VRP Solver", "CUDA Kernel Engine"] },
    ],
    results: [
      { title: "Annual Fuel Savings", value: "19%", description: "Eliminated 2.7 million gallons of wasted fuel through optimal route consolidation." },
      { title: "On-Time Performance", value: "98.4%", description: "Boosted nationwide on-time delivery rate from 82.1% to an industry-leading 98.4%." },
    ],
    businessImpact:
      "The platform transformed the logistics network into an agile, real-time transportation engine that drastically cut operating expenses.",
    testimonial: {
      quote: "CodePlaced's dispatch engine gave us complete control over our nationwide fleet. We saved $4.2M in fuel in year one alone.",
      author: "Robert Callahan",
      role: "Senior Vice President of Fleet Operations",
      company: "TransNational Logistics Network",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    },
  },

  // =========================================================================
  // 4. IOT PREDICTIVE MAINTENANCE
  // =========================================================================
  {
    slug: "iot-predictive-maintenance",
    title: "IoT Predictive Maintenance & Anomaly Platform",
    tagline: "Edge sensor stream ingestion & ML predictive failure modeling",
    industry: "Manufacturing & Industrial IoT",
    clientType: "Heavy Equipment & Industrial Manufacturing Enterprise",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Engineered an industrial IoT telemetry streaming platform and machine learning anomaly engine monitoring 4,500+ manufacturing turbines, hydraulic presses, and assembly robots to prevent catastrophic mechanical failures.",
    teamSize: "6 Senior Engineers",
    duration: "14 Weeks",
    activeUsers: "4,500 Machines & 6 Plants",
    availability: "99.99% SLA",
    metrics: [
      { value: "$2.8M", label: "Downtime Saved", detail: "Unplanned plant outages avoided" },
      { value: "14 Days", label: "Early Warning", detail: "Predictive failure detection" },
      { value: "38%", label: "Maintenance Cut", detail: "Shift from reactive to predictive" },
    ],
    detailedKpis: [
      { value: "$2.8M", label: "Unplanned Downtime Losses Saved", category: "Financial ROI", delta: "-78% outage losses", description: "Prevented catastrophic turbine bearing failures." },
      { value: "14 Days", label: "Early Failure Lead Time Notice", category: "Predictive AI", delta: "Up from 0 days (reactive)", description: "Detects acoustic micro-fractures weeks in advance." },
      { value: "38%", label: "Routine Maintenance Expense Cut", category: "OpEx Reduction", delta: "-$1.5M parts stockpiling", description: "Shifted from schedule-based to condition-based servicing." },
      { value: "4,500", label: "Heavy Industrial Machines Monitored", category: "Scale", delta: "Across 6 global factories", description: "Turbines, hydraulic presses, and multi-axis assembly robots." },
    ],
    technologies: ["Azure IoT Hub", "Python", "PyTorch", "TimescaleDB", "dbt", "Docker", "Grafana"],
    problemStatement:
      "Unanticipated turbine and pump mechanical breakdowns cost the manufacturer $45,000 per hour in idle factory lines, emergency repair parts shipping, and missed client delivery deadlines.",
    businessGoals: [
      "Ingest vibration, thermal, acoustic, and pressure sensor streams from 4,500 factory machines.",
      "Detect mechanical bearing wear and lubrication degradation up to 14 days before failure.",
    ],
    projectScope: [
      "Edge gateway ingestion microservices with local anomaly filtering and secure TLS uplink to Azure.",
      "Time-series ML forecasting models trained on millions of hours of machine acoustic signatures.",
    ],
    challenges: [
      "Extracting clean signal telemetry from high-noise industrial factory floor acoustic environments.",
    ],
    challengeItems: [
      {
        number: "01",
        title: "Factory Floor Acoustic Noise Interference",
        category: "Signal Processing",
        problem: "Heavy background noise from neighboring forklifts and stamping presses corrupted machine vibration sensors.",
        impact: "Frequent false-positive alarms leading plant operators to ignore automated alerts.",
        solutionTactic: "Engineered edge Fast Fourier Transform (FFT) band-pass filters isolating specific mechanical harmonic frequencies.",
      },
    ],
    ecosystemPersonas: [
      {
        role: "Plant Maintenance Technicians",
        badge: "Factory Operations",
        avatarIcon: "briefcase",
        responsibilities: [
          "Precision machine inspection & bearing lubrication",
          "Vibration sensor calibration & physical hardware replacement",
        ],
        features: [
          "Mobile rugged tablet vibration analyzer",
          "Step-by-step augmented repair guidance",
        ],
        screenHighlight: "Floor Technician Mobile Diagnostic Companion",
        description: "Hands-on maintenance personnel executing targeted repairs before breakdowns happen.",
      },
    ],
    userJourneySteps: [
      {
        step: "01",
        stage: "Edge Sampling",
        title: "High-Frequency 10kHz Telemetry Capture",
        action: "Piezoelectric vibration sensor records 10,000 samples per second on high-pressure turbine bearing.",
        systemAction: "Edge gateway computes real-time FFT spectral decomposition, filtering out ambient factory noise in 12ms.",
        outcome: "Clean acoustic frequency vector extracted with 94% bandwidth reduction.",
      },
    ],
    galleryScreens: [
      {
        id: "plant-cockpit",
        title: "Factory Health Overview Cockpit",
        tag: "Plant Manager Portal",
        category: "Plant Operations",
        description: "Real-time acoustic health index map for 4,500 machines across 6 manufacturing production plants with live alert badges.",
        keyFeatures: ["Global 6-plant health index map", "14-day early warning breakdown alerts", "Live OEE equipment score tracking"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    solution:
      "CodePlaced deployed an edge-to-cloud predictive analytics pipeline. Edge gateways perform continuous fast Fourier transform (FFT) frequency analysis, streaming compressed anomaly vectors to an Azure-hosted PyTorch neural network.",
    solutionHighlights: [
      "Edge Fourier analysis filtering out ambient factory floor noise before cloud transmission.",
      "Continuous unsupervised anomaly detection identifying unusual vibration signatures without manual calibration.",
    ],
    architectureNodes: [
      { title: "01. Industrial Edge Gateways", subtitle: "Modbus / OPC-UA", desc: "High-frequency 10kHz vibration & thermal FFT sampling", status: "4,500 Machines", tech: ["C++", "Modbus", "OPC-UA", "Docker Edge"] },
      { title: "02. Azure IoT Hub Stream", subtitle: "TLS Telemetry Bus", desc: "Encrypted stream ingestion & device twin state synchronization", status: "Real-Time Telemetry", tech: ["Azure IoT Hub", "Kafka", "MQTT"] },
      { title: "03. PyTorch ML Anomaly Core", subtitle: "Time-Series Neural Net", desc: "Bearing fatigue prediction & acoustic anomaly classification", status: "14-Day Warning", tech: ["Python", "PyTorch", "TimescaleDB", "dbt"] },
      { title: "04. Plant Floor Cockpit & SAP", subtitle: "Grafana & SAP Sync", desc: "Machine health indices & automated work order dispatch", status: "99.99% Reliability", tech: ["React", "Grafana", "SAP PM API", "WebSockets"] },
    ],
    engineeringDecisions: [
      {
        technology: "Edge FFT Frequency Compression",
        problem: "Transmitting raw 10,000 Hz vibration data from 4,500 machines consumed enormous cloud bandwidth.",
        decision: "Implemented local fast Fourier transform (FFT) feature extraction on edge micro-gateways in C++.",
        benefit: "Reduced cloud telemetry bandwidth by 94% while retaining 100% of anomaly detection fidelity.",
      },
    ],
    beforeAfter: [
      { metric: "Unplanned Factory Downtime", before: "182 hrs / year", after: "38 hrs / year (-78%)", improvement: "78% Less Downtime" },
      { metric: "Failure Lead Time Notice", before: "0 Days (Breakdown)", after: "14 Days in Advance", improvement: "Predictive Alert" },
    ],
    showcaseModules: [
      { name: "Factory Health Overview Cockpit", tag: "Plant Manager Portal", desc: "Real-time acoustic health index map for 4,500 machines across 6 manufacturing production plants.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Industrial Telemetry Audit", desc: "Machine asset mapping, sensor protocol audit (Modbus, OPC-UA), and historical failure log analysis across 6 plants.", deliverables: ["Sensor Telemetry Spec", "Modbus Mapping Plan"] },
      { step: "02", title: "Edge Gateway Engineering", desc: "Designed edge FFT processing nodes and resilient local SQLite buffer with encrypted TLS cloud uplink.", deliverables: ["C++ Edge Microservices", "FFT Band-pass Filters"] },
    ],
    results: [
      { title: "Catastrophic Failures Prevented", value: "19 Incidents", description: "Flagged critical turbine bearing faults weeks before breakdown in the first year." },
      { title: "Unplanned Plant Downtime", value: "-78%", description: "Factory lines maintained record uptime, eliminating emergency repair overtime wages." },
    ],
    businessImpact:
      "The enterprise transitioned from costly reactive repairs to a predictable, data-driven manufacturing model that protected millions in operational margins.",
    testimonial: {
      quote: "CodePlaced gave our plant managers X-ray vision into our machinery. The system caught a critical pump failure in week 2 that saved us over $600K alone.",
      author: "Heinrich Meyer",
      role: "Global Head of Manufacturing Technology",
      company: "Vanguard Industrial Engineering",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    },
  },

  // =========================================================================
  // 5. INVENTORY SYNC PLATFORM
  // =========================================================================
  {
    slug: "inventory-sync-platform",
    title: "Real-Time Multi-Region Inventory Sync Platform",
    tagline: "Sub-second omnichannel inventory synchronization across 2.4M SKUs",
    industry: "Retail & E-Commerce",
    clientType: "Global Direct-to-Consumer & Retail Brand",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Engineered an ultra-low latency event-driven inventory hub that unifies 180+ brick-and-mortar storefronts, 3 online e-commerce platforms, and 6 distribution warehouses into a live single-source-of-truth.",
    teamSize: "5 Senior Engineers",
    duration: "10 Weeks",
    activeUsers: "180+ Stores & 2.4M SKUs",
    availability: "99.99% SLA",
    metrics: [
      { value: "< 1.5s", label: "Global Sync Latency", detail: "Across all retail POS and websites" },
      { value: "-14%", label: "Lower Ad CAC", detail: "Real-time stock based bidding" },
      { value: "99.99%", label: "Inventory Accuracy", detail: "Zero phantom out-of-stock orders" },
    ],
    detailedKpis: [
      { value: "< 1.5s", label: "Global Sync Latency", category: "Speed", delta: "From 4hr batch sync", description: "Sub-second event propagation across 180+ stores and web storefronts." },
      { value: "99.99%", label: "Inventory Accuracy", category: "Data Integrity", delta: "Zero overselling errors", description: "Optimistic Redis reservation locks prevent duplicate checkouts." },
    ],
    technologies: ["Next.js", "Node.js", "Snowflake", "Kafka", "Redis", "Google Cloud"],
    problemStatement:
      "The client suffered over $3.2M in annual refunded orders and overselling penalties because their legacy batch-sync process ran every 4 hours, causing severe inventory discrepancies between retail POS registers and high-velocity web flash sales.",
    businessGoals: [
      "Achieve sub-2-second global inventory propagation across 2.4M active SKUs worldwide.",
    ],
    projectScope: [
      "Event-driven Kafka streaming architecture connecting POS terminals, ERP, and online storefronts.",
    ],
    challenges: [
      "Handling sudden 50x traffic spikes during Black Friday flash sales without locking POS checkouts.",
    ],
    challengeItems: [
      {
        number: "01",
        title: "High-Velocity Flash Sale Spikes",
        category: "Concurrency",
        problem: "50,000 shoppers attempting to checkout the same 500 limited-edition sneakers simultaneously.",
        impact: "Severe overselling, customer backlash, and $3.2M in refunded orders.",
        solutionTactic: "Implemented distributed in-memory Redis locks with atomic decrements.",
      },
    ],
    ecosystemPersonas: [
      {
        role: "Store Associates & Cashiers",
        badge: "In-Store Operations",
        avatarIcon: "briefcase",
        responsibilities: [
          "Fast POS checkout & barcode scanning",
          "Cross-store inventory lookup & click-and-collect fulfillment",
        ],
        features: [
          "Sub-second handheld barcode lookup app",
          "1-click reserve from neighboring stores",
        ],
        screenHighlight: "Associate Mobile Barcode Scanner & POS Hub",
        description: "Retail workers in 180+ storefronts who need instant stock visibility.",
      },
    ],
    userJourneySteps: [
      {
        step: "01",
        stage: "Customer Interaction",
        title: "Product Discovery & Live Stock Badge",
        action: "Shopper opens product page on mobile web.",
        systemAction: "Edge Redis cache serves sub-5ms localized inventory count.",
        outcome: "Shopper sees accurate '3 items left in Manhattan store' indicator.",
      },
    ],
    galleryScreens: [
      {
        id: "omnichannel-cockpit",
        title: "Omnichannel Command Dashboard",
        tag: "Executive Portal",
        category: "Executive Suite",
        description: "Live regional sell-through heatmaps, cross-channel inventory distribution views, and GMV telemetry.",
        keyFeatures: ["Real-time sell-through velocity", "Warehouse stock burn-down alerts"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    solution:
      "CodePlaced engineered an event-driven sync engine powered by Apache Kafka, Redis Enterprise caching, and GCP Cloud Functions.",
    solutionHighlights: [
      "Optimistic locking algorithms preventing overselling during concurrent checkout attempts.",
    ],
    architectureNodes: [
      { title: "01. POS & Web Gateways", subtitle: "Edge Ingestion", desc: "180+ store POS checkouts & Shopify webhooks", status: "< 100ms Ingestion", tech: ["Next.js", "Edge Gateways", "Webhooks"] },
      { title: "02. Kafka Stream Bus", subtitle: "Event Partitioning", desc: "Event ordering & idempotent stock reservation locks", status: "1.2M events/min", tech: ["Apache Kafka", "GCP PubSub"] },
      { title: "03. Redis Enterprise", subtitle: "In-Memory Cache", desc: "Sub-10ms atomic inventory counts with multi-region replication", status: "< 2ms Latency", tech: ["Redis Enterprise", "Multi-Region VPC"] },
      { title: "04. Global Storefront Sync", subtitle: "Next.js & Ad APIs", desc: "Live web availability display & programmatic ad bid triggers", status: "Real-Time Sync", tech: ["Google Cloud Functions", "Snowflake"] },
    ],
    engineeringDecisions: [
      {
        technology: "Redis Enterprise Distributed Locks",
        problem: "Relational database locks choked under 50,000 simultaneous checkout requests.",
        decision: "Implemented atomic in-memory reservation locks in Redis Enterprise with automated TTL expiration.",
        benefit: "Zero overselling errors recorded during Black Friday with sub-5ms lock response times.",
      },
    ],
    beforeAfter: [
      { metric: "Inventory Sync Delay", before: "4 Hours (Batch)", after: "< 1.5 Seconds (Event)", improvement: "99.9% Faster" },
      { metric: "Overselling Refund Rate", before: "4.8% of Web Orders", after: "0.01% (Eliminated)", improvement: "Zero Penalties" },
    ],
    showcaseModules: [
      { name: "Omnichannel Command Dashboard", tag: "Executive Portal", desc: "Live regional sell-through heatmaps and cross-channel inventory distribution views.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Discovery & POS Audit", desc: "Audit of 180+ store POS systems and warehouse software.", deliverables: ["POS Hardware Audit", "ERP Rate Limit Model"] },
    ],
    results: [
      { title: "Overselling Eliminated", value: "99.99%", description: "Reduced refunded orders and marketplace overselling penalties from $3.2M to near zero." },
    ],
    businessImpact:
      "The platform unified online and physical retail channels into a synchronized omnichannel engine.",
    testimonial: {
      quote: "CodePlaced transformed our inventory infrastructure from a constant liability into our greatest competitive advantage.",
      author: "Marcus Vance",
      role: "Chief Operating Officer",
      company: "Nordic Luxury Apparel Group",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
  },

  // =========================================================================
  // 6. AI LEDGER PLATFORM
  // =========================================================================
  {
    slug: "ai-ledger-platform",
    title: "AI Workflow & Multi-Entity Ledger Platform",
    tagline: "Immutable double-entry financial ledger & automated invoice reconciliation",
    industry: "Fintech & Financial Services",
    clientType: "Global B2B Payments & Treasury Platform",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Built a SOC1/SOC2 Type II compliant multi-currency ledger engine paired with autonomous AI invoice OCR reconciliation, processing $1.8B+ in annual transaction volume with zero discrepancies.",
    teamSize: "7 Senior Engineers",
    duration: "16 Weeks",
    activeUsers: "$1.8B+ Volume & 85k Entities",
    availability: "99.999% SLA",
    metrics: [
      { value: "$1.8B+", label: "Annual Volume Processed", detail: "Multi-currency ledger engine" },
      { value: "0.00%", label: "Reconciliation Discrepancy", detail: "Cryptographic double-entry audit" },
      { value: "85%", label: "Manual Labor Cut", detail: "AI invoice OCR & matching" },
    ],
    detailedKpis: [
      { value: "$1.8B+", label: "Annual Processed Volume", category: "Scale", delta: "+140% YoY growth", description: "Immutable double-entry transactions across 42 currencies." },
      { value: "0.00%", label: "Reconciliation Discrepancy", category: "Audit & Integrity", delta: "100% cryptographic proof", description: "Append-only SHA-256 ledger hash verification." },
    ],
    technologies: ["React", "Go", "PostgreSQL", "Temporal.io", "AWS", "Python", "OpenAI"],
    problemStatement:
      "Enterprise accounting teams were drowning in 18-day month-end close cycles, manual PDF invoice entry, and multi-currency exchange reconciliation errors across 85,000 corporate sub-entities.",
    businessGoals: [
      "Compress month-end financial close duration from 18 business days to under 3 days.",
    ],
    projectScope: [
      "Architect an immutable, append-only double-entry financial ledger in Go and partitioned PostgreSQL.",
    ],
    challenges: [
      "Guaranteeing strict ACID transaction guarantees across distributed multi-entity corporate hierarchies.",
    ],
    challengeItems: [
      {
        number: "01",
        title: "Distributed Transaction ACID Integrity",
        category: "Ledger Core",
        problem: "Simultaneous multi-currency transfers across international subsidiary entities caused race conditions.",
        impact: "Discrepancies in balance sheets requiring days of manual audits.",
        solutionTactic: "Engineered an append-only double-entry ledger core in Go with integer-based precision math.",
      },
    ],
    ecosystemPersonas: [
      {
        role: "Corporate Controllers & Treasurers",
        badge: "Financial Governance",
        avatarIcon: "dollarSign",
        responsibilities: [
          "Month-end close execution & balance sheet sign-off",
          "Treasury cash flow & multi-currency liquidity oversight",
        ],
        features: [
          "1-click continuous trial balance verification",
          "Multi-currency FX gain/loss simulation engine",
        ],
        screenHighlight: "Treasury & Multi-Entity Ledger Cockpit",
        description: "Controllers responsible for flawless balance sheet integrity.",
      },
    ],
    userJourneySteps: [
      {
        step: "01",
        stage: "Invoice Arrival",
        title: "Autonomous Document Ingestion",
        action: "Vendor sends invoice via email or portal.",
        systemAction: "AI pipeline parses PDF layout and extracts 24 metadata fields.",
        outcome: "Clean structured JSON payload generated with 99.4% confidence score.",
      },
    ],
    galleryScreens: [
      {
        id: "ledger-cockpit",
        title: "Treasury & Multi-Entity Ledger Cockpit",
        tag: "Financial Controller Portal",
        category: "Treasury Core",
        description: "Live multi-currency trial balance, entity hierarchy navigation, and automated journal entry verification.",
        keyFeatures: ["Append-only cryptographic proof", "Multi-currency FX revaluation"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    solution:
      "CodePlaced engineered an append-only double-entry ledger core in Go and PostgreSQL, orchestrated with Temporal.io for bulletproof distributed transaction guarantees.",
    solutionHighlights: [
      "Mathematical double-entry balancing enforced at database engine level.",
    ],
    architectureNodes: [
      { title: "01. Enterprise API & UI", subtitle: "React & Go Gateway", desc: "Multi-tenant auth, role-based controls & bulk document ingestion", status: "Sub-50ms API", tech: ["React", "Go", "GraphQL"] },
      { title: "02. AI Extraction Core", subtitle: "Vision OCR & LLM", desc: "Document parsing & entity normalization", status: "99.4% Accuracy", tech: ["Python", "OpenAI"] },
      { title: "03. Temporal.io Engine", subtitle: "Durable Workflows", desc: "Deterministic multi-step payment workflows", status: "Zero State Loss", tech: ["Temporal.io", "Go SDK"] },
      { title: "04. Immutable Ledger Core", subtitle: "Partitioned PostgreSQL", desc: "Cryptographic double-entry ledger with SHA-256 tamper proofing", status: "99.999% SLA", tech: ["PostgreSQL 16", "TimescaleDB"] },
    ],
    engineeringDecisions: [
      {
        technology: "Golang Ledger Engine",
        problem: "Interpreted runtimes introduced GC latency spikes when processing millions of financial events.",
        decision: "Engineered the core ledger calculation engine in Go using explicit memory allocations.",
        benefit: "Sub-25ms transaction execution with zero floating-point calculation errors.",
      },
    ],
    beforeAfter: [
      { metric: "Month-End Close Cycle", before: "18 Business Days", after: "3 Business Days", improvement: "83% Faster" },
    ],
    showcaseModules: [
      { name: "Treasury Command Dashboard", tag: "Controller Portal", desc: "Live multi-currency cash flow and ledger balance rollups.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Accounting Architecture Audit", desc: "General ledger chart of accounts review and SOC1 compliance mapping.", deliverables: ["Chart of Accounts Spec", "SOC1 Compliance Matrix"] },
    ],
    results: [
      { title: "Close Cycle Compression", value: "3 Days", description: "Reduced month-end financial close from 18 days to 3 days." },
    ],
    businessImpact:
      "The platform revolutionized financial operations for the client, unlocking real-time global treasury visibility.",
    testimonial: {
      quote: "The mathematical integrity of CodePlaced's ledger is pristine. Our accounting team regained hundreds of hours.",
      author: "Julian Chen",
      role: "Chief Financial Officer",
      company: "Apex Global Treasury Solutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyItem | undefined {
  const canonical = getCanonicalSlug(slug);
  return CASE_STUDIES_DATA.find((item) => item.slug === canonical || item.slug === slug);
}
