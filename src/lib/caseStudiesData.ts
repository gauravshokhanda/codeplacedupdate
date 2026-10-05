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

export interface CaseStudyItem {
  slug: string;
  title: string;
  tagline: string;
  industry: string;
  clientType: string;
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  metrics: CaseStudyMetric[];
  technologies: string[];
  problemStatement: string;
  businessGoals: string[];
  projectScope: string[];
  challenges: string[];
  solution: string;
  solutionHighlights: string[];
  process: CaseStudyProcessStep[];
  results: CaseStudyResult[];
  businessImpact: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
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
    metrics: [
      { value: "18,000 hrs/yr", label: "Clinical Hours Saved", detail: "Automated triage charting" },
      { value: "99.9%", label: "Platform Uptime", detail: "HIPAA & SOC2 SLA compliance" },
      { value: "42%", label: "Efficiency Gain", detail: "Emergency intake throughput" },
    ],
    technologies: ["React", "Python", "AWS HealthLake", "OpenAI", "Snowflake", "Power BI"],
    problemStatement:
      "Hospital triage staff faced severe cognitive overload and 45-minute average patient intake delays due to disconnected legacy electronic health record (EHR) databases, fragmented lab results, and manual triage checklists.",
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
    metrics: [
      { value: "< 1.5s", label: "Global Sync Latency", detail: "Across all retail POS and websites" },
      { value: "14%", label: "Lower Ad CAC", detail: "Real-time stock based bidding" },
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
    process: [
      { step: "01", title: "Discovery", desc: "Audit of 180+ store POS systems, warehouse management software (WMS), and e-commerce APIs." },
      { step: "02", title: "Architecture", desc: "Designed distributed multi-region Kafka event streaming architecture with Redis cache tiers." },
      { step: "03", title: "Engineering", desc: "Built microservices for bi-directional inventory reconciliations, webhooks, and reservation locks." },
      { step: "04", title: "Testing", desc: "Simulated 100,000 simultaneous checkouts on a single SKU to guarantee zero duplicate reservations." },
      { step: "05", title: "Deployment", desc: "Staged store-by-store pilot followed by full global rollout with zero interruption to live sales." },
      { step: "06", title: "Optimization", desc: "FinOps tuning of cloud caches and automatic autoscaling policies for holiday peak seasons." },
    ],
    results: [
      { title: "Sync Propagation Time", value: "< 1.5s", description: "Reduced from 4-hour batch intervals to real-time sub-second sync across all channels." },
      { title: "Overselling Complaints", value: "0.00%", description: "Completely eliminated phantom stock cancellations and customer chargeback disputes." },
      { title: "Marketing Spend ROI", value: "+28%", description: "Dynamic ad pausing when local stock is exhausted prevented wasted advertising spend." },
      { title: "Black Friday Peak Throughput", value: "85K req/sec", description: "Handled record holiday surge with zero latency degradation or store checkout delays." },
    ],
    businessImpact:
      "The client unlocked immediate margin expansion, preserved brand credibility during viral sales events, and eliminated millions in inventory waste.",
    testimonial: {
      quote: "Our inventory sync is now our biggest competitive advantage. CodePlaced's engineering precision gave us the confidence to scale globally.",
      author: "Marcus Vance",
      role: "VP of Digital Engineering",
      company: "OmniRetail Collective",
    },
  },
  {
    slug: "ai-workflow-financial-ledger",
    title: "AI Workflow & Multi-Entity Ledger Platform",
    tagline: "Automated institutional transaction reconciliation & dual-entry ledger",
    industry: "Finance",
    clientType: "FinTech Platform & Asset Management Firm",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Engineered an automated multi-entity financial ledger and AI reconciliation engine that audits institutional transactions, validates foreign exchange rates, and eliminates 70% of manual month-end closing hours.",
    metrics: [
      { value: "99.98%", label: "Audit Accuracy", detail: "Automated dual-entry balancing" },
      { value: "$420M+", label: "Annual Volume", detail: "Processed across 12 currencies" },
      { value: "70%", label: "Close Time Cut", detail: "Month-end accounting cycles" },
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "AWS KMS", "Docker", "dbt"],
    problemStatement:
      "Managing cross-border fund flows across 26 institutional entities required 12 senior financial analysts working 80-hour weeks at month-end, creating high audit risk and human reconciliation errors.",
    businessGoals: [
      "Automate continuous multi-entity dual-entry journal entry generation.",
      "Achieve real-time continuous reconciliation against bank feeds and SWIFT clearing rails.",
      "Implement tamper-evident cryptographic audit logs satisfying SOC1 and SOC2 standards.",
    ],
    projectScope: [
      "Scalable Python/FastAPI microservices ingestion engine with rule-based and ML exception matching.",
      "Immutable append-only PostgreSQL ledger structure with cryptographic block hashing.",
      "Automated dbt transformation models generating instant balance sheets and trial balances.",
    ],
    challenges: [
      "Zero tolerance for rounding or precision errors across multi-currency FX conversions.",
      "Strict data privacy and SOC2 compliance with cryptographic key management via AWS KMS.",
    ],
    solution:
      "CodePlaced built a distributed immutable ledger and automated matching pipeline that parses bank statements, wire transfers, and internal ledgers in real-time, flagging only true statistical anomalies for human review.",
    solutionHighlights: [
      "Multi-currency arithmetic engine built with arbitrary-precision fixed decimal formats.",
      "Machine learning pattern matcher that learns recurring vendor transaction classifications.",
      "Automated PDF & CSV statement parser ingesting 150+ banking formats without manual data entry.",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Accounting schema mapping, multi-entity chart of accounts review, and compliance requirement alignment." },
      { step: "02", title: "Architecture", desc: "Designed double-entry immutable ledger data models and cryptographic signature verification tiers." },
      { step: "03", title: "Engineering", desc: "Constructed bank ingestion workers, rule engines, and automated daily trial-balance generators." },
      { step: "04", title: "Testing", desc: "Backtested against 5 years of historical financial transactions with 100% numerical match validation." },
      { step: "05", title: "Deployment", desc: "Parallel run alongside legacy accounting system followed by full automated cutover." },
      { step: "06", title: "Support", desc: "Ongoing SOC compliance maintenance, automated reporting extensions, and audit support." },
    ],
    results: [
      { title: "Monthly Close Time", value: "2 Days", description: "Reduced from 14 business days to just 48 hours for multi-entity consolidations." },
      { title: "Reconciliation Precision", value: "99.98%", description: "Over 99% of transactions matched and posted with zero human intervention." },
      { title: "Annual Labor Savings", value: "920 hrs/yr", description: "Finance team shifted from manual copy-paste spreadsheet entry to strategic capital allocation." },
      { title: "Audit Verification Speed", value: "10x Faster", description: "External auditors granted direct access to cryptographic proof logs, slashing audit fees by 40%." },
    ],
    businessImpact:
      "The client scaled from $80M to $420M in processed transaction volume without adding a single administrative headcount to their finance department.",
    testimonial: {
      quote: "CodePlaced transformed our back-office from our biggest bottleneck into our most automated asset. The system is mathematically airtight.",
      author: "Julian Thorne",
      role: "Chief Financial Officer",
      company: "CapitalFlow Institutional Partners",
    },
  },
  {
    slug: "autonomous-fleet-telematics",
    title: "Autonomous Fleet Dispatch & Telematics Engine",
    tagline: "Real-time route optimization & dynamic telematics streaming",
    industry: "Logistics",
    clientType: "Nationwide Freight & Cold-Chain Logistics Provider",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Developed a real-time IoT fleet telematics platform and dynamic dispatch engine ingesting millions of telemetry pings to optimize driver routes, monitor cold-chain temperatures, and reduce fuel consumption.",
    metrics: [
      { value: "32%", label: "Fuel Reduction", detail: "Dynamic route optimization" },
      { value: "3.8M+", label: "Daily Pings", detail: "Ingested IoT sensor events" },
      { value: "24 min", label: "Faster Delivery", detail: "Per linehaul route average" },
    ],
    technologies: ["Go", "Kafka", "Kubernetes", "Mapbox", "ClickHouse", "AWS"],
    problemStatement:
      "Inefficient static routing and lack of real-time temperature telemetry resulted in high fuel waste, late delivery penalties, and spoiled perishable cargo during cross-country freight transits.",
    businessGoals: [
      "Ingest real-time GPS, speed, and cargo temperature telemetry from 1,200+ trucks.",
      "Recalculate optimal transit routes dynamically based on weather, traffic, and delivery windows.",
      "Provide dispatchers with a responsive web-based command center displaying live fleet states.",
    ],
    projectScope: [
      "High-throughput Golang ingestion microservices deployed on AWS EKS.",
      "OLAP time-series database in ClickHouse for real-time telemetry querying.",
      "Custom React & Mapbox interactive fleet visualization dashboard.",
    ],
    challenges: [
      "Maintaining continuous connectivity and message delivery across intermittent cellular dead zones.",
      "Sub-second geofencing calculation across hundreds of simultaneous vehicle waypoints.",
    ],
    solution:
      "CodePlaced created a resilient edge-to-cloud IoT architecture using MQTT protocol, Apache Kafka, and ClickHouse, paired with dynamic routing heuristics that re-optimize driver paths every 60 seconds.",
    solutionHighlights: [
      "Edge caching on vehicle telematics hardware buffering data during cellular dropouts.",
      "Automated geofencing alerts notifying receiving warehouses 15 minutes before truck arrival.",
      "Automated cold-chain anomaly detection triggering immediate driver cabin notifications.",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Fleet telematics hardware audit, cellular protocol analysis, and dispatch routing workflow evaluation." },
      { step: "02", title: "Architecture", desc: "Designed resilient MQTT broker cluster with Kafka streaming and ClickHouse time-series storage." },
      { step: "03", title: "Engineering", desc: "Built Golang microservices, route optimization algorithms, and high-performance WebGL map layers." },
      { step: "04", title: "Testing", desc: "Conducted simulated vehicle convoy stress tests with intermittent packet loss injections." },
      { step: "05", title: "Deployment", desc: "Over-the-air firmware updates to fleet hardware and phased regional dispatch cutover." },
      { step: "06", title: "Support", desc: "Real-time infrastructure auto-tuning and ongoing fuel consumption analytics modeling." },
    ],
    results: [
      { title: "Fleet Fuel Consumption", value: "-32%", description: "Saved over 640,000 gallons of diesel annually through smart congestion avoidance." },
      { title: "Cargo Spoilage Claims", value: "-91%", description: "Immediate temperature anomaly alerts prevented perishable cargo losses." },
      { title: "On-Time Arrival Rate", value: "98.4%", description: "Improved from 83% to 98.4% across all nationwide long-haul transit routes." },
      { title: "Dispatcher Capacity", value: "3.2x", description: "A single dispatcher now oversees 75 active trucks instead of 23 with automated workflows." },
    ],
    businessImpact:
      "The client achieved major operational margin improvements, strengthened tier-1 retail client retention, and won multiple sustainable supply chain certifications.",
    testimonial: {
      quote: "The real-time visibility has completely revolutionized how our dispatch teams operate. CodePlaced built an engineering masterpiece.",
      author: "Sarah Jenkins",
      role: "Director of Fleet Operations",
      company: "Apex Global Logistics",
    },
  },
  {
    slug: "domain-tuned-rag-copilot",
    title: "Domain-Tuned Enterprise RAG Knowledge Copilot",
    tagline: "Private vector search engine indexing 10M+ technical and product docs",
    industry: "Enterprise AI",
    clientType: "Enterprise B2B SaaS Corporation",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Architected a private Retrieval-Augmented Generation (RAG) assistant and semantic search engine indexing 10M+ internal technical wikis, Jira tickets, code repositories, and customer support archives.",
    metrics: [
      { value: "6.4x", label: "Ticket Resolution", detail: "Faster Tier-3 support response" },
      { value: "94%", label: "Zero-Hallucination", detail: "Strict factual citation engine" },
      { value: "85%", label: "Org Adoption", detail: "Within 30 days of release" },
    ],
    technologies: ["OpenAI", "Pinecone", "Python", "FastAPI", "React", "LangChain"],
    problemStatement:
      "Technical support engineers and solutions architects spent 35% of their workday searching through disconnected Confluence spaces, outdated Slack threads, and GitHub repos to answer complex customer enterprise support inquiries.",
    businessGoals: [
      "Build a private AI copilot that returns grounded answers with exact source document citations.",
      "Integrate bi-directional sync across Confluence, Jira, Google Docs, and private GitHub repos.",
      "Enforce granular role-based access control (RBAC) so users only query information they have clearance to see.",
    ],
    projectScope: [
      "Automated document chunking, semantic embedding generation, and vector indexing pipeline.",
      "Low-latency retrieval pipeline combining dense vector embeddings with sparse BM25 keyword search (hybrid search).",
      "Embedded web application and Slack bot interface for cross-functional employee interactions.",
    ],
    challenges: [
      "Preventing LLM hallucinations on sensitive technical documentation.",
      "Synchronizing real-time document permission updates across multiple enterprise SSO providers.",
    ],
    solution:
      "CodePlaced developed an enterprise hybrid RAG pipeline using Pinecone vector indexing, customized embedding models, and strict reranking algorithms. Every generated answer provides clickable citations directly to the authoritative original document.",
    solutionHighlights: [
      "Hybrid retrieval fusing vector semantic similarity with exact keyword lexical matching.",
      "Dynamic permission filtering pruning search vectors based on user Active Directory group memberships.",
      "Automated feedback telemetry tracking answer quality and surfacing knowledge base gaps to team leads.",
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
    },
  },
];
