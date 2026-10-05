import {
  Activity,
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  Database,
  Layers,
  MapPin,
  Network,
  Search,
  Server,
  ShieldAlert,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type CaseStudy = {
  title: string
  entity: string
  image: string
  demoUrl?: string
  githubUrl?: string
  context: string
  problem: string
  contribution: string[]
  solution: { title: string; content: string }[]
  evidence: {
    description: string
    architecture: { icon: LucideIcon; title: string; desc: string }[]
  }
  limits: string
}

const caseStudies: Record<string, CaseStudy> = {
  entitynexus: {
    title: 'EntityNexus — Autonomous AML & SRA Intake Platform',
    entity: 'Enterprise FinCrime & LegalTech Intake Engine',
    image: '/images/entitynexus_mockup.jpg',
    demoUrl: 'https://entitynexus.vercel.app',
    githubUrl: 'https://github.com/gogulashashank/Compliance-Pulse-',
    context:
      'Engineered for UK law firms, corporate lenders, and private wealth teams subject to SRA Code of Conduct (Rules 6.1–6.3) and UK Money Laundering Regulations 2017 (Reg 28/33/37).',
    problem:
      'Law firm MLROs and compliance officers manually spend 4–8 hours per high-value corporate client unwrapping multi-jurisdiction holding structures, tracing non-linear beneficial ownership (UBOs ≥25%), screening indirect sanctions exposure under the OFSI 50% Rule, and drafting statutory Client & Matter Risk Assessments (CMRA).',
    contribution: [
      'Graph Intelligence: Implemented recursive NetworkX graph traversal unwrapping complex multi-tier offshore vehicles, holding companies, and nominee directors.',
      'Regulatory Rule Engine: Built strict deterministic compliance algorithms enforcing UK MLR 2017 (statutory 25% UBO cutoff, Listed PLC Reg 37 exemptions, FATF high-risk corridors) and SRA Code of Conduct 2019 conflict screening (Rules 6.1–6.3).',
      'Global Registry Integration: Integrated real-time Companies House UK PSC registry, GLEIF Level 2 parent relationships, and OFSI/UN/EU consolidated sanctions lists.',
      'Tamper-Evident Audit Trail: Implemented an immutable cryptographic verification vault producing RFC-8785 canonical JSON SHA-256 digital signatures for statutory file auditability.',
    ],
    solution: [
      {
        title: 'Autonomous Corporate Graph Unwrapping & UBO Tracing',
        content:
          'Expands ownership nodes recursively down to Ultimate Beneficial Owners. Accurately aggregates cross-chain shareholding percentages and isolates controlling PSCs with interactive D3.js force-directed graph rendering.',
      },
      {
        title: 'SRA Conflict Check & Matter Risk Assessment (CMRA)',
        content:
          'Screen new matter intake parties against existing client matter rosters to flag Own-Interest Conflicts (Rule 6.1) and Client Conflicts (Rule 6.2). Automatically produces statutory MLR Reg 28 CMRA file notes with statutory EDD mandates.',
      },
      {
        title: 'OFSI 50% Aggregate Sanctions & ECCTA 2023 Verification',
        content:
          'Evaluates aggregate indirect sanctions under the UK OFSI 50% threshold. Flags unverified officers under the Economic Crime and Corporate Transparency Act (ECCTA 2023) and highlights secrecy havens (BVI, Cayman, Panama).',
      },
      {
        title: 'RFC-8785 SHA-256 Cryptographic Audit Vault',
        content:
          'Persists immutable matter audit records with canonical JSON hashes and SHA-256 signatures, ensuring complete defensibility before regulatory auditors and SRA inspections.',
      },
    ],
    evidence: {
      description:
        'EntityNexus operates as a high-throughput async FastAPI microservice backed by SQLite and in-memory TTL caching, passing 41/41 automated tests verifying graph unwrapping, sanctions aggregation, conflict isolation, and statutory file note generation.',
      architecture: [
        { icon: Database, title: 'Companies House & GLEIF Ingestion', desc: 'Streams live PSCs, corporate officers, and Level 2 parent entities' },
        { icon: Network, title: 'NetworkX Recursive Graph Engine', desc: 'Computes effective UBO percentages & traverses offshore corridors' },
        { icon: ShieldAlert, title: 'OFSI & SRA Regulatory Vault', desc: 'Applies 50% sanctions rule, SRA conflict detection & RFC-8785 hashing' },
      ],
    },
    limits:
      'Automated verification depends on official public registry APIs. Unregistered offshore private trusts without LEI disclosure require manual statutory disclosure attestations.',
  },
  'uk-basket-arbitrage': {
    title: 'UK Basket Arbitrage Engine',
    entity: 'Retail Arbitrage & Consumer Transparency Engine',
    image: '/images/uk_basket_mockup.jpg',
    demoUrl: 'https://temporary-turbo-zenith-50t587v.vercel.app',
    context:
      'Designed for UK consumers, personal finance analysts, and retail competition researchers tracking supermarket member-only pricing shifts.',
    problem:
      "Major UK supermarkets (Tesco, Sainsbury's) charge non-cardholders up to 25% extra via member-only Clubcard/Nectar pricing. Consumers lack transparent tools to quantify their personal 'Loyalty Tax' or calculate if multi-store shopping splits beat travel costs.",
    contribution: [
      'Engine: Designed a canonical pricing selector modeling 8 UK supermarket chains across RRP and member tiers.',
      'Geospatial: Integrated postcodes.io API to reverse-geocode 1.7M UK postcodes to real lat/long coordinates with custom vector map overlays.',
      'Optimization: Built a multi-store split shop algorithm weighing itemized savings against vehicle travel friction.',
    ],
    solution: [
      { title: 'Real-Time Loyalty Tax Quantifier', content: 'Instantly computes non-member surcharges and annual drag (£/year) based on 52 weekly shops.' },
      {
        title: 'Nationwide Postcode Proximity & Devolved Regulation',
        content:
          'Auto-sets regional pricing differentials (Scotland MUP, London M25, NI Sea Freight) and renders interactive geographic SVG maps.',
      },
    ],
    evidence: {
      description:
        'The application parses basket items across 8 retail tiers, applying regional multipliers and travel friction formulas to determine optimal checkout routes.',
      architecture: [
        { icon: MapPin, title: 'postcodes.io API', desc: 'Resolves 1.7M postcodes to lat/long & regions' },
        { icon: BrainCircuit, title: 'Pricing Engine', desc: 'Applies 8-store RRP & member pricing tiers' },
        { icon: CheckCircle2, title: 'Split Optimizer', desc: 'Calculates net savings vs travel mileage' },
      ],
    },
    limits:
      'Baseline prices are modeled against canonical SKU datasets. Live continuous price scraping requires API access to supermarket retail feeds.',
  },
  launchstack: {
    title: 'Launchstack',
    entity: 'Cross-Border Mapping Platform',
    image: '/images/launchstack_mockup.jpg',
    demoUrl: 'https://cross-border-mapper.vercel.app/',
    context: 'Designed for FinTech operations teams and regulatory compliance officers managing multi-jurisdiction expansion.',
    problem:
      'Navigating regulatory boundaries for cross-border money movement is highly fragmented. Teams rely on static spreadsheets to determine if a specific corridor (e.g., UK to UAE) is active, blocked, or requires enhanced due diligence.',
    contribution: [
      'Research: Mapped complex regulatory corridors and synthesized them into a searchable node network.',
      'Front End: Built an interactive cross-border visualization interface with React and geospatial mapping tools.',
      'Data Model: Engineered a scalable JSON-based routing schema that instantly flags corridor statuses (Live, Restricted, Blocked).',
    ],
    solution: [
      {
        title: 'Dynamic Corridor Verification',
        content:
          'Instead of searching through compliance PDFs, operators can instantly visualize active payout corridors on an interactive map, reducing verification time from hours to seconds.',
      },
      {
        title: 'Rule-Based Overlays',
        content:
          'Integrated specific compliance rules into the map overlay, allowing users to see exactly what KYC tier is required for each specific country node.',
      },
    ],
    evidence: {
      description: 'The application parses complex corridor rules and projects them onto an interactive map interface.',
      architecture: [
        { icon: Database, title: 'Rule Engine', desc: 'Corridor & KYC requirements' },
        { icon: Network, title: 'Geospatial UI', desc: 'Interactive cross-border visualization' },
        { icon: CheckCircle2, title: 'Live Validation', desc: 'Flags active vs restricted routes' },
      ],
    },
    limits:
      'The current prototype uses synthetic regulatory data and hardcoded geographic bounds. A production version would require an API integration with a live compliance vendor to keep corridor states updated in real-time.',
  },
  'fincrime-platform': {
    title: 'FinCrime Platform',
    entity: 'Investigator Workstation Prototype',
    image: '/images/fincrime_mockup.jpg',
    demoUrl: 'https://fincrime-platform-7epwrozl2obwxk6r2twcvp.streamlit.app/',
    context: 'Targeted at Level 2/3 Financial Crime Investigators & AML Analysts who triage high-stakes alerts in enterprise banks.',
    problem:
      "Investigators are forced to toggle between 5+ discrete systems (KYC databases, transaction ledgers, OSINT) to piece together a single entity's risk profile. This fragmentation slows down critical triage and causes 'swivel-chair' errors.",
    contribution: [
      'UX: Prioritized an asymmetrical layout where context (entity graph) and action (decision logs) are visible simultaneously.',
      'Front End: Built an interactive, single-pane-of-glass workstation prototype.',
      'Data Model: Engineered a unified data schema linking KYC profiles to transactional ledgers and risk scores.',
    ],
    solution: [
      {
        title: 'Unified Pane of Glass',
        content: 'Aggregated transactional data, entity relationships, and decision logging into a single interface without scrolling or tab switching.',
      },
      {
        title: 'Standardized Audit Trails',
        content: 'Every action an investigator takes is appended with an immutable timestamp and user ID, ensuring auditability for regulators.',
      },
    ],
    evidence: {
      description:
        'Below is the architectural flow powering the unified workstation, moving from disparate data silos to a single interactive UI.',
      architecture: [
        { icon: Database, title: 'Data Silos', desc: 'Raw KYC, ledgers, & risk scores' },
        { icon: Layers, title: 'Aggregation Layer', desc: 'Python-based entity resolution' },
        { icon: Activity, title: 'Unified Workstation', desc: 'Single pane of glass UI' },
      ],
    },
    limits:
      'Built entirely with simulated KYC/transaction data. Aggregating all data into one interface requires heavy backend optimization in production. If the underlying data lake is slow, the workstation will inherit that latency.',
  },
  'aml-simulator': {
    title: 'AML Flagged Simulator',
    entity: 'Compliance Training Tool',
    image: '/images/aml_mockup.jpg',
    demoUrl: 'https://aml-flagged-simulator.vercel.app/',
    context: 'Designed for Junior AML Compliance Analysts & Training Managers to bridge the gap between theory and practice.',
    problem:
      'New analysts struggle to translate theoretical AML training (PDFs) into practical investigation skills. Traditional training cannot replicate the pressure, UI density, or nuance of reviewing live transaction queues.',
    contribution: [
      'Research: Mapped core money laundering typologies (structuring, layering, PEPs) into programmable data logic.',
      'Front End: Built an interactive TypeScript simulator replicating enterprise banking software.',
      'Logic: Engineered an immediate feedback loop engine that grades analyst decisions in real-time.',
    ],
    solution: [
      {
        title: "Replicating the 'Queue' Experience",
        content: 'The UI intentionally mimics dense enterprise tables and filterable queues to build genuine muscle memory for new analysts.',
      },
      {
        title: 'Immediate Feedback Engine',
        content:
          "Unlike production environments where feedback takes months, the simulator immediately grades an analyst's decision (Clear vs. Escalate) and explains the underlying typology.",
      },
    ],
    evidence: {
      description: 'The simulator generates synthesized transaction networks and evaluates analyst interactions against a rules engine.',
      architecture: [
        { icon: BrainCircuit, title: 'Typology Engine', desc: 'Generates synthesized illicit behaviors' },
        { icon: Search, title: 'Interactive Queue', desc: 'Analysts review and action alerts' },
        { icon: CheckCircle2, title: 'Feedback Loop', desc: 'Real-time grading and explanations' },
      ],
    },
    limits:
      'The simulated typologies are currently hardcoded and do not dynamically evolve like real-world adversarial behavior. The tool requires frequent manual updates to reflect new money laundering trends.',
  },
  'job-command-center': {
    title: 'Job Command Center',
    entity: 'Full-Stack Career Tracking',
    image: '/images/job_command_mockup.jpg',
    demoUrl: 'https://job-command-center.vercel.app/',
    context: 'Targeted at Job Seekers and Recruiting Operations looking to manage complex application pipelines.',
    problem:
      'Tracking hundreds of job applications across multiple platforms leads to duplicate outreach, lost recruiter contacts, and zero visibility into application conversion rates.',
    contribution: [
      'Data Model: Designed a semantic knowledge graph to map relationships between companies, skills, and recruiter contacts.',
      'Front End: Built a comprehensive Next.js dashboard for pipeline visibility.',
      'Logic: Integrated automated email outreach triggers based on state changes.',
    ],
    solution: [
      {
        title: 'Semantic Knowledge Graphs',
        content:
          'Instead of a flat SQL table, a graph structure allows the system to realize that a contact at Company A previously worked at Company B, surfacing warm intro opportunities.',
      },
      {
        title: 'Automated Direct Outreach',
        content:
          'Integrated an email outreach engine that triggers automated follow-ups based on the application status pipeline, preventing promising leads from going cold.',
      },
    ],
    evidence: {
      description: 'The application relies on a semantic database mapping entities, driving a UI that orchestrates automated outreach.',
      architecture: [
        { icon: Network, title: 'Semantic Graph', desc: 'Maps companies, jobs & contacts' },
        { icon: Workflow, title: 'Pipeline Tracker', desc: 'Tracks application status changes' },
        { icon: Search, title: 'Outreach Engine', desc: 'Automated follow-ups & intros' },
      ],
    },
    limits:
      'Automated outreach requires strict rate limiting to avoid triggering spam filters. The system relies heavily on the user manually updating application statuses if the email API sync fails.',
  },
  caledonian: {
    title: 'Caledonian Risk Atlas',
    entity: 'Financial Crime Investigation Tool',
    image: '/images/caledonian_mockup.jpg',
    demoUrl: 'https://caledonian-risk-atlas-web.vercel.app/',
    context: 'Designed for Level 2/3 AML Investigators & Risk Operations Leads investigating cross-border entity networks.',
    problem:
      "Investigators face a deluge of alerts lacking geographical context. Existing tools require manual SQL pulling and often rely on unexplainable machine learning 'black-box' scores, which are useless for regulatory reporting.",
    contribution: [
      'UX: Designed an interface to highlight exact triggers over opaque risk scores.',
      'Front End: Built a visual graph-based pipeline mapping transactions against high-risk geographic jurisdictions.',
      'Logic: Implemented multi-variable thresholds to heavily control and reduce false positives.',
    ],
    solution: [
      {
        title: 'Explainable Risk Signals',
        content:
          "In regulatory environments, an investigator must explain a decision in a SAR. This tool highlights exact triggers (e.g., 'Velocity spike + High-risk jurisdiction') rather than giving a '98% fraud probability' score.",
      },
      {
        title: 'Controlling False Positives',
        content:
          "A single large transaction doesn't trigger a critical alert unless paired with an anomalous velocity pattern or an offshore beneficiary, reducing noise by an estimated 40%.",
      },
    ],
    evidence: {
      description: 'The tool merges anonymized transactional logs with FATF lists, pushing them through a rules engine into an explainable UI.',
      architecture: [
        { icon: Server, title: 'Raw Data', desc: 'Tx logs & FATF jurisdiction lists' },
        { icon: AlertTriangle, title: 'Rules Engine', desc: 'Multi-variable threshold checks' },
        { icon: BrainCircuit, title: 'Explainable UI', desc: 'Surfaces exact triggers for SARs' },
      ],
    },
    limits:
      'By eschewing deep learning for rule-based graph networks, the system cannot easily detect entirely novel typologies until a new rule is written. However, this trade-off guarantees 100% explainability.',
  },
  'realistic-commute': {
    title: 'Realistic Commute',
    entity: 'Commute Analytics Tool',
    image: '/images/realistic_commute_mockup.jpg',
    demoUrl: 'https://realistic-commute.vercel.app/',
    context: 'Used by London Professionals and Financial Planners calculating the true cost of job offers in complex urban environments.',
    problem:
      "Job seekers calculate net pay without factoring in the severe financial and time costs of specific commuter routes. This creates a 'hidden tax' that dramatically alters the true value of a job offer.",
    contribution: [
      'Research: Analyzed standard UK tax brackets, National Insurance thresholds, and TfL pricing models.',
      'Logic: Built an advanced calculation engine in TypeScript to deduct explicit transport costs and implicit time value from hourly net pay.',
      'Front End: Designed a sleek, interactive financial calculator emphasizing data visualization.',
    ],
    solution: [
      {
        title: 'Translating Time into Financial Metrics',
        content:
          "Applied a user's hourly net pay rate to their total commuting time to reveal the exact financial drain of a long commute, allowing for true A/B testing of job offers.",
      },
      {
        title: 'Net Pay Reality Check',
        content:
          "Automatically deducts standard UK tax and NI before applying commute costs, providing the true 'take-home' value rather than misleading gross figures.",
      },
    ],
    evidence: {
      description:
        'The application parses commute times and gross salary, running them through a strict tax and time-value calculation engine.',
      architecture: [
        { icon: Users, title: 'User Input', desc: 'Gross salary & route parameters' },
        { icon: Search, title: 'Calculation Engine', desc: 'Applies tax brackets & time-cost formulas' },
        { icon: Database, title: 'Net Output', desc: 'Displays final adjusted take-home pay' },
      ],
    },
    limits:
      'The model currently assumes a linear value of time based on salary, ignoring that many professionals value personal time at a premium multiplier. TfL data assumes perfect schedule adherence without accounting for strike disruptions.',
  },
}

// The original site linked some systems to slugs that had no matching case study.
// These aliases fix those dead links.
const aliases: Record<string, string> = {
  'caledonian-risk-atlas': 'caledonian',
  'aml-flagged-simulator': 'aml-simulator',
}

export function getCaseStudy(id: string | undefined): CaseStudy | undefined {
  if (!id) return undefined
  return caseStudies[id] ?? caseStudies[aliases[id] ?? '']
}
