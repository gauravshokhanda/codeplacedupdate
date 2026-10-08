export interface CaseStudyMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface CaseStudyProcessStep {
  step: string;
  title: string;
  desc: string;
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
}

export interface ShowcaseModule {
  name: string;
  tag: string;
  desc: string;
  image: string;
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
  technologies: string[];
  problemStatement: string;
  businessGoals: string[];
  projectScope: string[];
  challenges: string[];
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

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    slug: "healthcare-analytics-platform",
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
    activeUsers: "4,200+ Clinicians",
    availability: "99.99% SLA",
    metrics: [
      { value: "18,000 hrs/yr", label: "Clinical Hours Saved", detail: "Automated triage charting" },
      { value: "99.99%", label: "Platform Uptime", detail: "HIPAA & SOC2 SLA compliance" },
      { value: "42%", label: "Efficiency Gain", detail: "Emergency intake throughput" },
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
    solution:
      "CodePlaced engineered a modern data lakehouse on AWS and Snowflake, paired with an edge-deployed private RAG triage engine. The solution continuously aggregates vitals, history, and lab reports into a unified longitudinal record with automated risk stratifications.",
    solutionHighlights: [
      "High-throughput event streaming ingestion processing 25,000+ clinical events per second.",
      "Deterministic private LLM summarizer with strict validation guardrails against clinical hallucinations.",
      "Custom React command center dashboard for emergency nurses with real-time WebSocket alert triggers.",
    ],
    architectureNodes: [
      { title: "01. EHR Ingestion Tier", subtitle: "Kafka & HL7/FHIR", desc: "Real-time streaming ingestion from 14 hospital centers", status: "25k events/s" },
      { title: "02. Snowflake Lakehouse", subtitle: "dbt Medallion DAG", desc: "Automated deduplication, schema enforcement & HIPAA encryption", status: "Sub-second Query" },
      { title: "03. Private AI Triage Engine", subtitle: "Domain RAG & LLM", desc: "Risk stratification & automated structured charting summaries", status: "< 400ms Inference" },
      { title: "04. Clinical Cockpit", subtitle: "React & Power BI", desc: "Live nurse command center & executive hospital telemetry", status: "99.99% SLA" },
    ],
    engineeringDecisions: [
      {
        technology: "Snowflake + dbt",
        problem: "Legacy relational databases crashed under high-concurrency analytical queries across 14 million records.",
        decision: "Implemented decoupled compute lakehouse with automated dbt CI/CD data models.",
        benefit: "18x query performance boost and instantaneous daily refreshes with zero table locking.",
      },
      {
        technology: "Apache Kafka",
        problem: "Batch ETL sync resulted in 4-hour stale bed occupancy numbers and triage delays.",
        decision: "Deployed an event-driven Kafka streaming pipeline with dead-letter queue recovery.",
        benefit: "Sub-second event propagation from bedside telemetry monitors directly into analytical marts.",
      },
      {
        technology: "Private VPC RAG Engine",
        problem: "Commercial cloud LLMs posed data leak risks under strict federal HIPAA compliance rules.",
        decision: "Constructed an isolated private VPC embedding search with zero-data-retention endpoints.",
        benefit: "100% compliance audit clearance with zero external patient data transmission.",
      },
      {
        technology: "Power BI Embedded",
        problem: "Hospital executives had no real-time visibility into regional emergency bed capacity.",
        decision: "Integrated Power BI Embedded with Row-Level Security (RLS) across all department heads.",
        benefit: "Live, unified executive cockpits displaying real-time ICU and ED utilization across 14 sites.",
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
      { step: "01", title: "Discovery", desc: "Clinical workflow audits, HIPAA threat modeling, and FHIR data schema mapping across 14 hospital sites." },
      { step: "02", title: "Architecture", desc: "Designed HIPAA-compliant dual-lakehouse topology with automated Row-Level Security (RLS) policies." },
      { step: "03", title: "Engineering", desc: "Rapid 3-week sprint build of ingestion pipelines, private RAG summarization engine, and React frontends." },
      { step: "04", title: "Testing", desc: "Penetration audits, clinical trial simulation gates, and high-concurrency 100k synthetic load tests." },
      { step: "05", title: "Deployment", desc: "Zero-downtime blue/green deployment across AWS US-East and US-West with automatic failover." },
      { step: "06", title: "Support", desc: "24/7 telemetry monitoring, latency optimization, and ongoing model accuracy benchmarking." },
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
  {
    slug: "real-time-inventory-sync",
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
    technologies: ["Next.js", "Node.js", "Snowflake", "Kafka", "Redis", "Google Cloud"],
    problemStatement:
      "The client suffered over $3.2M in annual refunded orders and overselling penalties because their legacy batch-sync process ran every 4 hours, causing severe inventory discrepancies between retail POS registers and high-velocity web flash sales.",
    businessGoals: [
      "Achieve sub-2-second global inventory propagation across 2.4M active SKUs worldwide.",
      "Eliminate overselling penalties on Shopify Plus and Amazon Marketplace entirely.",
      "Expose high-concurrency inventory APIs for dynamic localized Google and Meta ad campaigns.",
    ],
    projectScope: [
      "Event-driven Kafka streaming architecture connecting POS terminals, ERP, and online storefronts.",
      "Distributed in-memory Redis cluster for sub-10ms stock reservation locks during flash sales.",
      "Custom Next.js executive dashboard tracking real-time sell-through rates and regional warehouse burn.",
    ],
    challenges: [
      "Handling sudden 50x traffic spikes during Black Friday flash sales without locking POS checkouts.",
      "Bi-directional synchronization with legacy SAP ERP without overloading ERP compute limits.",
    ],
    solution:
      "CodePlaced engineered an event-driven sync engine powered by Apache Kafka, Redis Enterprise caching, and GCP Cloud Functions. Every barcode scan or online checkout publishes an event that resolves global inventory in under 1.5 seconds.",
    solutionHighlights: [
      "Optimistic locking algorithms preventing overselling during concurrent checkout attempts.",
      "Real-time ETL streaming to Snowflake for instantaneous gross merchandise value (GMV) tracking.",
      "Automated stock-out protection pausing high-spend digital ad campaigns when localized stock dips.",
    ],
    architectureNodes: [
      { title: "01. POS & Web Ingestion", subtitle: "Edge Gateways", desc: "180+ store POS checkouts & Shopify webhooks", status: "< 100ms Ingestion" },
      { title: "02. Kafka Stream Bus", subtitle: "Event Partitioning", desc: "Event ordering & idempotent stock reservation locks", status: "1.2M events/min" },
      { title: "03. Redis Enterprise", subtitle: "In-Memory Cache", desc: "Sub-10ms atomic inventory counts with multi-region replication", status: "< 2ms Latency" },
      { title: "04. Global Storefront Sync", subtitle: "Next.js & Ad APIs", desc: "Live web availability display & programmatic ad bid triggers", status: "Real-Time Sync" },
    ],
    engineeringDecisions: [
      {
        technology: "Redis Enterprise",
        problem: "Relational database locks choked under 50,000 simultaneous checkout requests during flash sales.",
        decision: "Implemented atomic in-memory reservation locks in Redis with automated TTL expiration.",
        benefit: "Zero overselling errors recorded during Black Friday with sub-5ms lock response times.",
      },
      {
        technology: "Apache Kafka",
        problem: "SAP ERP was overwhelmed and crashed whenever high-frequency store scans flooded its API.",
        decision: "Introduced Kafka event buffering to decouple store registers from legacy ERP sync.",
        benefit: "100% store register uptime during peak shopping hours with guaranteed event delivery.",
      },
    ],
    beforeAfter: [
      { metric: "Inventory Sync Delay", before: "4 Hours (Batch)", after: "< 1.5 Seconds (Event)", improvement: "99.9% Faster" },
      { metric: "Overselling Refund Rate", before: "4.8% of Web Orders", after: "0.01% (Eliminated)", improvement: "Zero Penalties" },
      { metric: "Stock Accuracy Audits", before: "88.2%", after: "99.99%", improvement: "Flawless Sync" },
      { metric: "Annual Refunded Losses", before: "$3.2M Lost", after: "< $40K Managed", improvement: "$3.16M Saved" },
    ],
    showcaseModules: [
      { name: "Omnichannel Command Dashboard", tag: "Executive Portal", desc: "Live regional sell-through heatmaps and cross-channel inventory distribution views.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" },
      { name: "Store Associate Barcode App", tag: "POS Companion", desc: "Sub-second scanner verifying nearest warehouse stock and instant click-and-collect reservations.", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Audit of 180+ store POS systems, warehouse management software (WMS), and e-commerce APIs." },
      { step: "02", title: "Architecture", desc: "Constructed distributed event-driven topology with Redis caching and Kafka streaming buffers." },
      { step: "03", title: "Engineering", desc: "Built microservices for bi-directional inventory reconciliation and real-time ad bid triggers." },
      { step: "04", title: "Testing", desc: "Executed 100k synthetic concurrent checkout load tests to guarantee zero overselling under stress." },
      { step: "05", title: "Deployment", desc: "Phased rollout across store clusters with zero register downtime during active trading hours." },
      { step: "06", title: "Support", desc: "24/7 telemetry monitoring with Datadog alerts and automated cache self-healing." },
    ],
    results: [
      { title: "Overselling Eliminated", value: "99.99%", description: "Reduced refunded orders and marketplace overselling penalties from $3.2M to near zero." },
      { title: "Sync Propagation", value: "< 1.5s", description: "Replaced 4-hour batch cycles with instantaneous global inventory updates across all channels." },
      { title: "Customer Conversion", value: "+18.4%", description: "Real-time stock badges on product pages significantly boosted shopper checkout confidence." },
      { title: "Annual ROI", value: "$3.16M", description: "Direct financial recovery from eliminated inventory stock-out penalties and refunded orders." },
    ],
    businessImpact:
      "The platform unified online and physical retail channels into a synchronized omnichannel engine, unlocking millions in recovered sales and enabling high-efficiency programmatic advertising.",
    testimonial: {
      quote: "CodePlaced transformed our inventory infrastructure from a constant liability into our greatest competitive advantage. We scaled 3x with zero overselling.",
      author: "Marcus Vance",
      role: "Chief Operating Officer",
      company: "Nordic Luxury Apparel Group",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
  },
  {
    slug: "ai-workflow-financial-ledger",
    title: "Autonomous AI Financial Ledger & Invoice Copilot",
    tagline: "End-to-end invoice OCR, reconciliation & ERP sync for $450M in annual volume",
    industry: "Finance & Fintech",
    clientType: "Enterprise Financial Services & Asset Management",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Engineered an autonomous multi-agent financial processing platform that ingests unstructured PDFs, performs line-item extraction with 99.4% accuracy, and automatically matches transactions against multi-currency bank ledgers.",
    teamSize: "5 Senior Engineers",
    duration: "8 Weeks",
    activeUsers: "Enterprise AP Team & CFO",
    availability: "99.99% SLA",
    metrics: [
      { value: "92%", label: "Manual Effort Cut", detail: "Accounts payable automated" },
      { value: "99.4%", label: "Extraction Accuracy", detail: "Multi-language invoice OCR" },
      { value: "$780K", label: "Annual Labor Saved", detail: "Direct operational ROI" },
    ],
    technologies: ["Claude 3.5 Sonnet", "Python", "FastAPI", "PostgreSQL", "React", "Docker"],
    problemStatement:
      "A 40-person accounting department spent 35,000+ hours annually manually typing invoice details from 80,000+ supplier PDFs across 12 countries into legacy Oracle ERP ledgers, resulting in frequent reconciliation delays and payment disputes.",
    businessGoals: [
      "Automate over 85% of standard accounts payable invoice processing end-to-end.",
      "Achieve greater than 99% extraction accuracy across multi-currency, multi-language supplier invoices.",
      "Provide human-in-the-loop review screens for low-confidence edge cases in under 10 seconds.",
    ],
    projectScope: [
      "Multi-modal document vision pipeline powered by Claude 3.5 Sonnet with JSON schema enforcement.",
      "Automated 3-way matching algorithm reconciling POs, delivery receipts, and invoices.",
      "Secure role-based React dashboard for accountant review and single-click ERP reconciliation.",
    ],
    challenges: [
      "Handling thousands of wildly varying invoice layouts, scanned faxes, and skewed mobile camera uploads.",
      "Strict financial compliance audits requiring immutable change logs and double-entry validation.",
    ],
    solution:
      "CodePlaced developed an agentic financial workflow engine utilizing vision LLMs and deterministic Python rule validators. The platform extracts line items, validates tax IDs, matches against purchase orders, and syncs approved records directly into Oracle ERP.",
    solutionHighlights: [
      "Zero-shot layout recognition handling previously unseen invoice formats with 99.4% precision.",
      "Automated anomaly detection flagging duplicate invoice submissions and bank account mismatches.",
      "Comprehensive immutable audit ledger recording every LLM extraction confidence score and human edit.",
    ],
    architectureNodes: [
      { title: "01. Document Ingestion", subtitle: "Email & Upload Webhooks", desc: "Multi-channel PDF, TIFF & scan intake pipeline", status: "Instant Parse" },
      { title: "02. Vision LLM OCR", subtitle: "Claude 3.5 Sonnet", desc: "Structured JSON schema extraction & confidence scoring", status: "99.4% Precision" },
      { title: "03. 3-Way Reconciliation", subtitle: "Python Rules Engine", desc: "Automated PO, receipt and tax ID verification", status: "< 1s Match" },
      { title: "04. ERP Ledger Sync", subtitle: "Oracle & SAP APIs", desc: "Two-way transactional sync with rollback safeguards", status: "Audit Compliant" },
    ],
    engineeringDecisions: [
      {
        technology: "Claude 3.5 Sonnet Vision",
        problem: "Traditional OCR engines (Tesseract/AWS Textract) failed on complex tables and non-standard tax layouts.",
        decision: "Deployed Claude 3.5 Sonnet with structured Pydantic schema validation.",
        benefit: "Extraction precision jumped from 68% to 99.4% on multilingual international invoices.",
      },
      {
        technology: "Immutable Audit Ledger",
        problem: "Financial regulators required proof that AI was not making unvalidated changes to accounting records.",
        decision: "Built a cryptographically signed PostgreSQL append-only audit ledger.",
        benefit: "Passed external SOC1 & SOC2 financial audits with zero compliance deficiencies.",
      },
    ],
    beforeAfter: [
      { metric: "Invoice Processing Time", before: "18 minutes / invoice", after: "12 seconds (AI)", improvement: "90x Faster" },
      { metric: "Human Review Needed", before: "100% of Invoices", after: "8% (Edge Cases Only)", improvement: "92% Automated" },
      { metric: "Data Entry Error Rate", before: "3.6% Error Margin", after: "< 0.05% Error Rate", improvement: "Flawless Accuracy" },
      { metric: "Monthly Closing Cycle", before: "14 Business Days", after: "2 Business Days", improvement: "7x Faster Closing" },
    ],
    showcaseModules: [
      { name: "Autonomous Ledger Command", tag: "Accountant Portal", desc: "Live financial reconciliation stream with confidence heatmaps and instant approval queues.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" },
      { name: "3-Way Match Verification", tag: "Auditor Console", desc: "Side-by-side PO and invoice visual mapping with highlighted discrepancy flags.", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Audited 5,000 historical supplier invoices and mapped accounts payable validation business logic." },
      { step: "02", title: "Architecture", desc: "Constructed secure cloud ingestion pipeline with vision LLMs and deterministic Python checkers." },
      { step: "03", title: "Engineering", desc: "Developed human-in-the-loop review React UI and automated two-way Oracle ERP connector." },
      { step: "04", title: "Testing", desc: "Ran parallel shadow testing across 10,000 invoices to benchmark accuracy against human accountants." },
      { step: "05", title: "Deployment", desc: "Seamless rollout with SSO authorization, department segregation, and bank-grade encryption." },
      { step: "06", title: "Support", desc: "Weekly prompt tuning, confidence threshold calibration, and continuous accuracy monitoring." },
    ],
    results: [
      { title: "Manual Labor Eliminated", value: "92%", description: "Over 9 out of 10 incoming invoices process, match, and sync into ERP with zero human intervention." },
      { title: "Cycle Time Reduction", value: "90x", description: "Invoice processing time plummeted from 18 minutes of manual typing to 12 seconds." },
      { title: "Extraction Precision", value: "99.4%", description: "Zero-shot line-item extraction reliably captures tax, currency, and line items across 12 countries." },
      { title: "Annual Financial ROI", value: "$780K", description: "Direct operational savings allowing accounting staff to transition into strategic financial analysis." },
    ],
    businessImpact:
      "The AI financial copilot turned a high-friction administrative bottleneck into a touchless automated ledger, accelerating financial month-end closing from 14 days down to 48 hours.",
    testimonial: {
      quote: "The CodePlaced financial copilot felt like adding 30 experienced accountants overnight. It paid for itself within 60 days.",
      author: "Sarah Jenkins",
      role: "VP of Global Financial Operations",
      company: "Apex Capital Logistics",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
  },
  {
    slug: "autonomous-logistics-route-optimization",
    title: "Autonomous Fleet Dispatch & Dynamic Route Engine",
    tagline: "Sub-second combinatorial route optimization for 1,200 commercial freight vehicles",
    industry: "Logistics",
    clientType: "Nationwide Freight & Last-Mile Delivery Carrier",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Engineered an autonomous dispatch engine solving dynamic vehicle routing problems (VRP) in real time, factoring in traffic, fuel stops, driver hours-of-service, and urgent pickup re-routes across 1,200 trucks.",
    teamSize: "4 Senior Engineers",
    duration: "10 Weeks",
    activeUsers: "1,200 Trucks & 45 Dispatchers",
    availability: "99.99% SLA",
    metrics: [
      { value: "-18.2%", label: "Fuel Expenses Saved", detail: "Optimized route geometry" },
      { value: "99.2%", label: "On-Time Delivery", detail: "Real-time traffic evasion" },
      { value: "$2.1M", label: "Annual Fleet Savings", detail: "Lower mileage & idle time" },
    ],
    technologies: ["Go", "Python", "PostGIS", "Redis", "Kafka", "AWS EKS", "Mapbox"],
    problemStatement:
      "Legacy dispatch software took 45 minutes to compute nightly static routes and could not adjust to mid-day highway closures, sudden customer cancellations, or emergency pickup requests without causing costly driver idle time.",
    businessGoals: [
      "Re-compute optimal delivery sequences across 1,200 active vehicles in under 3 seconds.",
      "Reduce total fleet mileage by at least 15% to cut fuel consumption and carbon footprint.",
      "Provide drivers with turn-by-turn mobile navigation synced to live dispatch updates.",
    ],
    projectScope: [
      "High-performance Go routing service utilizing custom genetic algorithms and spatial PostGIS indexes.",
      "Kafka telemetry pipeline ingesting live GPS pings from 1,200 vehicles every 3 seconds.",
      "Dispatcher command center in React with live interactive Mapbox fleet layers.",
    ],
    challenges: [
      "Solving NP-hard multi-depot vehicle routing problems with complex legal driver rest break constraints.",
      "Maintaining continuous low-latency WebSocket connections with trucks traversing rural cellular dead zones.",
    ],
    solution:
      "CodePlaced built a dynamic combinatorial optimization engine in Go, deployed on autoscaling AWS EKS clusters. The system continuously ingests GPS telemetry, recalibrating fleet routes in real time as traffic conditions or delivery priorities change.",
    solutionHighlights: [
      "Sub-2-second heuristic re-routing adjusting active driver paths to live road closures.",
      "Driver hours-of-service (HOS) compliance safeguards automatically scheduling required rest stops.",
      "Real-time customer SMS tracking with dynamic 15-minute delivery appointment windows.",
    ],
    architectureNodes: [
      { title: "01. Telemetry Ingestion", subtitle: "IoT GPS & ELD", desc: "Live vehicle coordinates & engine telemetry streamed every 3s", status: "1,200 Trucks" },
      { title: "02. Routing Engine", subtitle: "Go & Genetic Alg", desc: "Sub-2s combinatorial vehicle routing problem solver", status: "< 1.8s Compute" },
      { title: "03. Spatial Data Core", subtitle: "PostGIS & Redis", desc: "Geofencing, traffic vector matrices & active route states", status: "Sub-10ms Lookup" },
      { title: "04. Dispatch Command", subtitle: "Mapbox & WebSockets", desc: "Live interactive map cockpit with instant dispatcher overrides", status: "Live Telemetry" },
    ],
    engineeringDecisions: [
      {
        technology: "Golang Spatial Microservices",
        problem: "Python routing libraries were too slow for real-time recalculations across 1,200 concurrent routes.",
        decision: "Rewrote core heuristic solver in Go using parallel goroutines and custom spatial memory caching.",
        benefit: "Reduced route computation time from 45 minutes to 1.8 seconds.",
      },
      {
        technology: "PostGIS & Redis Spatial",
        problem: "Geofencing queries overloaded standard relational tables.",
        decision: "Implemented Redis geospatial indexes backed by PostGIS.",
        benefit: "Sub-10ms geofence trigger times with zero database latency.",
      },
    ],
    beforeAfter: [
      { metric: "Route Computation Time", before: "45 Minutes (Static)", after: "1.8 Seconds (Dynamic)", improvement: "1500x Faster" },
      { metric: "Fleet Fuel Consumption", before: "Baseline 100%", after: "81.8% (-18.2%)", improvement: "18.2% Saved" },
      { metric: "On-Time Delivery Rate", before: "84.5%", after: "99.2%", improvement: "Industry Leading" },
      { metric: "Dispatcher Route Capacity", before: "15 Trucks / Person", after: "60 Trucks / Person", improvement: "4x Productivity" },
    ],
    showcaseModules: [
      { name: "Live Dispatch Fleet Map", tag: "Command Cockpit", desc: "Interactive Mapbox dashboard tracking live truck locations, traffic delays, and ETA accuracy.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" },
      { name: "Driver Turn-by-Turn Mobile", tag: "Native Driver App", desc: "Offline-capable navigation with automated geofence delivery confirmation and signature capture.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Audited historical route logs, depot constraints, driver HOS regulations, and telematics hardware." },
      { step: "02", title: "Architecture", desc: "Designed Go routing microservices and high-throughput Kafka GPS ingestion pipeline on AWS." },
      { step: "03", title: "Engineering", desc: "Constructed combinatorial routing engine, Mapbox dispatcher UI, and driver mobile clients." },
      { step: "04", title: "Testing", desc: "Simulated 100,000 historical delivery trips to prove a verified 18%+ reduction in fleet mileage." },
      { step: "05", title: "Deployment", desc: "Depot-by-depot fleet rollout with zero disruption to daily scheduled freight deliveries." },
      { step: "06", title: "Support", desc: "Continuous model optimization against seasonal traffic patterns and urban congestion shifts." },
    ],
    results: [
      { title: "Fleet Fuel Saved", value: "-18.2%", description: "Eliminated millions of wasted transit miles through dynamic geometry and traffic evasion." },
      { title: "On-Time Arrival Rate", value: "99.2%", description: "Drastically reduced missed appointment penalties across enterprise retail deliveries." },
      { title: "Dispatcher Capacity", value: "4x", description: "Individual dispatchers now effortlessly manage 60 vehicles instead of 15." },
      { title: "Annual Operational ROI", value: "$2.1M", description: "Direct savings across fuel, vehicle maintenance, and avoided driver overtime." },
    ],
    businessImpact:
      "The dynamic routing platform turned the logistics provider into the industry's most reliable and fuel-efficient carrier, unlocking multimillion-dollar contract renewals with enterprise retailers.",
    testimonial: {
      quote: "CodePlaced gave our dispatch team superpowers. We cut over $2M in annual fuel while boosting our on-time delivery rate to 99.2%.",
      author: "Robert Kowalski",
      role: "Chief Logistics Officer",
      company: "TransNational Freight Carriers",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
  },
  {
    slug: "enterprise-rag-customer-intelligence",
    title: "Enterprise Hybrid RAG & Customer Intelligence Copilot",
    tagline: "Sub-50ms hybrid semantic retrieval over 120,000+ technical documentation pages",
    industry: "Enterprise AI",
    clientType: "Global B2B Enterprise SaaS Platform",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Engineered an enterprise-grade hybrid Retrieval-Augmented Generation (RAG) platform connecting internal wikis, Jira tickets, and API documentation into an instant context-aware technical assistant with citation transparency.",
    teamSize: "4 Senior Engineers",
    duration: "6 Weeks",
    activeUsers: "8,500+ Internal Staff & Customers",
    availability: "99.99% SLA",
    metrics: [
      { value: "6.4x", label: "Faster Resolution", detail: "Technical support ticket speed" },
      { value: "< 50ms", label: "Semantic Retrieval", detail: "Pinecone hybrid vector DB" },
      { value: "+38 NPS", label: "Customer Satisfaction", detail: "Accurate cited answers" },
    ],
    technologies: ["Pinecone", "LangChain", "OpenAI GPT-4o", "FastAPI", "React", "AWS VPC"],
    problemStatement:
      "Tier-3 technical support engineers and solutions architects spent 4.5 hours daily searching through fragmented Confluence wikis, GitHub repos, and PDF manuals to troubleshoot complex client API integration bugs.",
    businessGoals: [
      "Cut complex technical support ticket resolution time from 4 hours to under 30 minutes.",
      "Ensure 100% citation transparency so engineers can verify source documents with one click.",
      "Maintain zero enterprise data leakage and strict role-based access control (RBAC).",
    ],
    projectScope: [
      "Automated document crawler indexing Confluence, Notion, GitHub Markdown, and PDF schemas.",
      "Hybrid vector retrieval combining dense semantic embeddings with sparse BM25 keyword matching.",
      "Embedded conversational React widget with streaming token responses and clickable citation footnotes.",
    ],
    challenges: [
      "Eliminating AI hallucinations on mission-critical API documentation and compliance policies.",
      "Enforcing strict document-level permissions ensuring junior staff only access authorized information.",
    ],
    solution:
      "CodePlaced developed an enterprise hybrid RAG pipeline using Pinecone vector indexing, customized embedding models, and strict reranking algorithms. Every generated answer provides clickable citations directly to the authoritative original document.",
    solutionHighlights: [
      "Hybrid retrieval fusing vector semantic similarity with exact keyword lexical matching.",
      "Dynamic permission filtering pruning search vectors based on user Active Directory group memberships.",
      "Automated feedback telemetry tracking answer quality and surfacing knowledge base gaps to team leads.",
    ],
    architectureNodes: [
      { title: "01. Knowledge Connectors", subtitle: "Confluence, Jira & GitHub", desc: "Automated incremental scrapers with markdown chunking", status: "120k Pages" },
      { title: "02. Hybrid Pinecone DB", subtitle: "Dense & Sparse Vectors", desc: "Sub-50ms hybrid semantic retrieval with Cohere reranking", status: "< 50ms Search" },
      { title: "03. Agent Router", subtitle: "LangGraph Orchestration", desc: "Intent parsing, citation mapping & hallucination safeguards", status: "GPT-4o Stream" },
      { title: "04. Conversational UI", subtitle: "React Streaming Copilot", desc: "Markdown syntax rendering with clickable verified footnotes", status: "Zero Leakage" },
    ],
    engineeringDecisions: [
      {
        technology: "Pinecone Hybrid Search",
        problem: "Pure dense vector search failed when users searched for exact error codes and method names.",
        decision: "Implemented hybrid search combining dense semantic embeddings with sparse BM25 lexical tokens.",
        benefit: "Search recall jumped from 71% to 96.8% on technical syntax queries.",
      },
      {
        technology: "Cohere Reranker",
        problem: "First-stage vector search returned relevant but noisy chunks.",
        decision: "Introduced a cross-encoder reranking step before passing context to GPT-4o.",
        benefit: "Halved prompt token costs while reducing hallucination rates to near zero.",
      },
    ],
    beforeAfter: [
      { metric: "Support Ticket Resolution", before: "4.2 Hours / Ticket", after: "38 Minutes (AI Copilot)", improvement: "6.4x Faster" },
      { metric: "Engineer Onboarding Ramp", before: "6 Weeks to Velocity", after: "3 Weeks to Velocity", improvement: "-50% Ramp Time" },
      { metric: "Citation Accuracy", before: "N/A (Manual Search)", after: "100% Clickable Footnotes", improvement: "Verified Truth" },
      { metric: "Internal Support NPS", before: "+14 NPS", after: "+52 NPS", improvement: "+38 Points" },
    ],
    showcaseModules: [
      { name: "Streaming Technical Copilot", tag: "Internal & Customer UI", desc: "Context-aware conversational assistant with syntax-highlighted code and document source citations.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" },
      { name: "Knowledge Lineage Analytics", tag: "Engineering Admin", desc: "Real-time telemetry on top searched topics, unresolved queries, and documentation gaps.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Enterprise data source auditing, SSO permission mapping, and domain terminology glossary curation." },
      { step: "02", title: "Architecture", desc: "Designed secure zero-data-retention hybrid vector search pipeline with automated re-indexing workers." },
      { step: "03", title: "Engineering", desc: "Constructed document parsers, vector ingestion pipelines, and intuitive React conversation interfaces." },
      { step: "04", title: "Testing", desc: "Evaluated 2,500 domain questions against expert human benchmarks with 94%+ factual precision." },
      { step: "05", title: "Deployment", desc: "Enterprise-wide rollout with single sign-on (SSO) integration and role-based permissions." },
      { step: "06", title: "Support", desc: "Weekly embedding fine-tuning, analytics dashboard monitoring, and prompt optimization." },
    ],
    results: [
      { title: "Tier-3 Support Speed", value: "6.4x Faster", description: "Complex customer technical escalations resolved in minutes rather than hours." },
      { title: "Developer Onboarding", value: "-50% Time", description: "New engineering hires reached full commit velocity in 3 weeks instead of 6 weeks." },
      { title: "Employee Time Reclaimed", value: "4.5 hrs/wk", description: "Per technical employee saved on repetitive internal documentation searches." },
      { title: "Customer Satisfaction", value: "+38 NPS", description: "Significant increase in enterprise support NPS driven by rapid, precise answers." },
    ],
    businessImpact:
      "The copilot became the organization's central knowledge operating system, accelerating customer ticket resolutions, reducing onboarding ramp times, and boosting employee productivity.",
    testimonial: {
      quote: "Our engineers can't imagine working without the CodePlaced copilot. It has become our single source of truth across the entire company.",
      author: "David Chen",
      role: "VP of Engineering & Cloud Infrastructure",
      company: "CloudScale Systems",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    },
  },
  {
    slug: "iot-predictive-maintenance-platform",
    title: "IoT Predictive Maintenance & Anomaly Platform",
    tagline: "Edge sensor stream ingestion & ML predictive failure modeling",
    industry: "Manufacturing",
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
    technologies: ["Azure IoT Hub", "Python", "PyTorch", "TimescaleDB", "dbt", "Docker", "Grafana"],
    problemStatement:
      "Unanticipated turbine and pump mechanical breakdowns cost the manufacturer $45,000 per hour in idle factory lines, emergency repair parts shipping, and missed client delivery deadlines.",
    businessGoals: [
      "Ingest vibration, thermal, acoustic, and pressure sensor streams from 4,500 factory machines.",
      "Detect mechanical bearing wear and lubrication degradation up to 14 days before failure.",
      "Provide plant managers with automated work orders and replacement parts dispatch workflows.",
    ],
    projectScope: [
      "Edge gateway ingestion microservices with local anomaly filtering and secure TLS uplink to Azure.",
      "Time-series ML forecasting models trained on millions of hours of machine acoustic signatures.",
      "Factory floor command center dashboards with real-time machine health indices and acoustic heatmaps.",
    ],
    challenges: [
      "Extracting clean signal telemetry from high-noise industrial factory floor acoustic environments.",
      "High-frequency 10,000 Hz vibration sampling rate requiring distributed edge compression.",
    ],
    solution:
      "CodePlaced deployed an edge-to-cloud predictive analytics pipeline. Edge gateways perform continuous fast Fourier transform (FFT) frequency analysis, streaming compressed anomaly vectors to an Azure-hosted PyTorch neural network.",
    solutionHighlights: [
      "Edge Fourier analysis filtering out ambient factory floor noise before cloud transmission.",
      "Continuous unsupervised anomaly detection identifying unusual vibration signatures without manual calibration.",
      "Automated maintenance ticket generation syncing directly into SAP Plant Maintenance.",
    ],
    architectureNodes: [
      { title: "01. Industrial Edge Gateways", subtitle: "Modbus / OPC-UA", desc: "High-frequency 10kHz vibration & thermal FFT sampling", status: "4,500 Machines" },
      { title: "02. Azure IoT Hub Stream", subtitle: "TLS Telemetry Bus", desc: "Encrypted stream ingestion & device twin state synchronization", status: "Real-Time Telemetry" },
      { title: "03. PyTorch ML Anomaly Core", subtitle: "Time-Series Neural Net", desc: "Bearing fatigue prediction & acoustic anomaly classification", status: "14-Day Warning" },
      { title: "04. Plant Floor Cockpit", subtitle: "Grafana & SAP Sync", desc: "Machine health indices & automated work order dispatch", status: "99.99% Reliability" },
    ],
    engineeringDecisions: [
      {
        technology: "Edge FFT Frequency Compression",
        problem: "Transmitting raw 10,000 Hz vibration data from 4,500 machines consumed enormous cloud bandwidth.",
        decision: "Implemented local fast Fourier transform (FFT) feature extraction on edge micro-gateways.",
        benefit: "Reduced cloud telemetry bandwidth by 94% while retaining 100% of anomaly detection fidelity.",
      },
      {
        technology: "TimescaleDB Time-Series Core",
        problem: "Standard relational databases stalled when indexing billions of industrial time-series sensor points.",
        decision: "Deployed TimescaleDB hypertables with automated data tiering and chunk compression.",
        benefit: "Maintained sub-50ms analytics query speeds across 2+ billion historical telemetry points.",
      },
    ],
    beforeAfter: [
      { metric: "Unplanned Factory Downtime", before: "182 hrs / year", after: "38 hrs / year (-78%)", improvement: "78% Less Downtime" },
      { metric: "Failure Lead Time Notice", before: "0 Days (Breakdown)", after: "14 Days in Advance", improvement: "Predictive Alert" },
      { metric: "Spare Parts Inventory Cost", before: "$4.1M Stockpiled", after: "$2.6M (-35%)", improvement: "$1.5M Capital Freed" },
      { metric: "Annual Downtime Losses", before: "$3.6M Lost", after: "$800K Managed", improvement: "$2.8M Saved" },
    ],
    showcaseModules: [
      { name: "Factory Health Overview Cockpit", tag: "Plant Manager Portal", desc: "Real-time acoustic health index map for 4,500 machines across 6 manufacturing production plants.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" },
      { name: "Vibration Spectrogram Anomaly", tag: "Diagnostic Console", desc: "FFT frequency waterfall chart highlighting micro-fractures in high-speed turbine bearings.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Machine asset mapping, sensor telemetry protocol audit (Modbus, OPC-UA), and historical failure log analysis." },
      { step: "02", title: "Architecture", desc: "Designed edge FFT processing nodes and scalable TimescaleDB time-series ingestion cluster." },
      { step: "03", title: "Engineering", desc: "Trained PyTorch vibration models, constructed edge microservices, and developed Grafana plant dashboards." },
      { step: "04", title: "Testing", desc: "Validated predictive models against 6 months of historical failure benchmarks with 96% detection rate." },
      { step: "05", title: "Deployment", desc: "Factory-by-factory sensor gateway installations across 6 manufacturing production plants." },
      { step: "06", title: "Optimization", desc: "Continuous model retraining on newly captured mechanical wear signatures to further improve lead time." },
    ],
    results: [
      { title: "Catastrophic Failures Prevented", value: "19 Incidents", description: "Flagged critical turbine bearing faults weeks before breakdown in the first year." },
      { title: "Unplanned Plant Downtime", value: "-78%", description: "Factory lines maintained record uptime, eliminating emergency repair overtime wages." },
      { title: "Parts Inventory Waste", value: "-35%", description: "Shifted from precautionary parts stockpiling to precision just-in-time maintenance ordering." },
      { title: "Total Annual ROI", value: "410%", description: "The platform completely paid for itself within the first 4 months of live production." },
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
];
