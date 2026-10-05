// All copy is carried over verbatim from the original portfolio build.

export const site = {
  profile: {
    name: 'Shashank Gogula',
    role: 'Risk Analytics, AML Graph Intelligence & AI Systems Builder',
    headline:
      'Building autonomous graph intelligence & AI products at the intersection of financial crime, compliance, and enterprise data.',
    headlineLine1: 'Turning Fragmented Risk Signals',
    headlineLine2: 'Into Explainable Decisions.',
    subheadline:
      '5+ years of high-stakes fraud & AML casework at Amazon and LinkedIn. Engineering recursive entity resolution, deterministic regulatory engines, and explainable AI interfaces.',
    statusBadge: 'Available for AI Product & Risk Intelligence roles',
    location: 'London, United Kingdom',
    avatar: '/images/avatar.jpg',
  },
  links: {
    email: 'shashankgogula98@gmail.com',
    github: 'https://github.com/gogulashashank',
    linkedin: 'https://www.linkedin.com/in/shashank-gogula-473a9a126/',
    entitynexus: 'https://entitynexus.vercel.app/',
    crossBorderMapper: 'https://cross-border-mapper.vercel.app/',
    caledonianRiskAtlas: 'https://caledonian-risk-atlas-web.vercel.app/',
    amlFlaggedSimulator: 'https://aml-flagged-simulator.vercel.app/',
    ukBasketArbitrage: 'https://temporary-turbo-zenith-50t587v.vercel.app',
    realisticCommute: 'https://realistic-commute.vercel.app/',
  },
  regulations: {
    ukMlr2017: 'UK Money Laundering Regulations 2017 (Regulations 5, 28, 33, 37)',
    poca2002: 'Proceeds of Crime Act 2002 (POCA Part 7 SAR Thresholds)',
    sraCode: 'SRA Code of Conduct 2019 (Rules 6.1, 6.2, and 6.3 Conflict of Interest)',
    eccta2023: 'Economic Crime and Corporate Transparency Act 2023 (ECCTA Identity Verification)',
    ofsiSanctions: 'OFSI 50% Aggregate Sanctions Ownership and Control Guidance',
  },
}

const { links, regulations } = site

export const flagship = {
  id: 'entitynexus',
  title: 'EntityNexus',
  tagline: 'Autonomous AML & SRA Regulatory Intake Platform',
  badge: 'FLAGSHIP REGULATORY GRAPH ENGINE',
  image: '/images/entitynexus_mockup.jpg',
  description:
    'Production legaltech engine unwrapping multi-jurisdiction corporate structures down to ultimate beneficial owners (UBOs ≥25%), auditing OFSI 50% aggregate sanctions, detecting SRA Rules 6.1–6.3 conflicts, and auto-generating statutory CMRA file notes with RFC-8785 cryptographic SHA-256 signatures.',
  demoUrl: links.entitynexus,
  githubUrl: 'https://github.com/gogulashashank/Compliance-Pulse-',
  caseStudyUrl: '/case-study/entitynexus',
  tags: ['Python', 'FastAPI', 'NetworkX', 'D3.js', 'UK MLR 2017', 'SRA Rules 6.1/6.2', 'ECCTA 2023', 'GLEIF API'],
  metrics: [
    { label: 'UBO Threshold', value: '≥ 25% Statutory', detail: 'Recursive Ownership Math' },
    { label: 'Conflict Screening', value: 'Rules 6.1–6.3', detail: 'SRA Code of Conduct' },
    { label: 'Sanctions Aggregation', value: 'OFSI 50% Rule', detail: 'Multi-Tier Group Exposure' },
    { label: 'Audit Defensibility', value: 'RFC-8785', detail: 'Canonical SHA-256 Vault' },
  ],
}

export const experienceHighlights = [
  {
    metric: '5+ Years',
    title: 'FinCrime & Trust Operations',
    desc: 'Casework at Amazon & LinkedIn managing AML typologies, sanctions screening, and adversarial fraud rings.',
  },
  {
    metric: '10+ Systems',
    title: 'Shipped Prototypes & Tools',
    desc: 'Interactive graph engines, cross-border KYC rule mappers, and autonomous compliance pipelines.',
  },
  {
    metric: '<15ms',
    title: 'Deterministic Engine Latency',
    desc: 'High-throughput in-memory registry caching and multi-tier UBO resolution algorithms.',
  },
]

export const techStack = [
  { name: 'Python / FastAPI', category: 'Backend & Systems', highlight: true },
  { name: 'NetworkX / Graph Algorithms', category: 'Graph Intelligence', highlight: true },
  { name: 'SQL & Relational Schemas', category: 'Data Engineering', highlight: true },
  { name: 'React 19 / Next.js / TypeScript', category: 'Frontend Engineering', highlight: true },
  { name: 'Framer Motion & D3.js', category: 'Interactive Data Visuals', highlight: false },
  { name: 'Docker & Container Ops', category: 'Infrastructure', highlight: false },
  { name: 'UK MLR 2017 & SRA Rules', category: 'Regulatory Knowledge', highlight: true },
  { name: 'Power BI & DAX Analytics', category: 'BI & Telemetry', highlight: false },
]

export const projects = [
  {
    id: 'entitynexus',
    title: 'EntityNexus',
    subtitle: 'Autonomous AML & SRA Regulatory Intake Platform',
    entity: 'FLAGSHIP REGULATORY GRAPH ENGINE',
    image: '/images/entitynexus_mockup.jpg',
    description: flagship.description,
    link: links.entitynexus,
    caseStudyUrl: '/case-study/entitynexus',
    tags: ['Python', 'FastAPI', 'NetworkX', 'D3.js', 'GLEIF API'],
    metrics: ['≥ 25% Statutory', 'OFSI 50% Rule', 'RFC-8785'],
  },
  {
    id: 'launchstack',
    title: 'Launchstack Cross-Border Mapper',
    subtitle: 'Founder OS for cross-border expansion & corridor KYC compliance',
    entity: 'CROSS-BORDER EXPANSION ENGINE',
    image: '/images/launchstack_mockup.jpg',
    description:
      'Interactive cross-border money movement compliance corridor mapping, 10-point regulatory assessment, and KYC rule verification across international corridors.',
    link: links.crossBorderMapper,
    caseStudyUrl: '/case-study/launchstack',
    tags: ['Next.js', 'Cobe Globe', 'FATF Travel Rule', 'Corridor Scoring'],
    metrics: ['40+ Corridors', '6 Score Dimensions', '90-Day Plan'],
  },
  {
    id: 'caledonian-risk-atlas',
    title: 'Caledonian Risk Atlas',
    subtitle: 'Multi-layered geospatial intelligence & typologies drill-down platform',
    entity: 'GEOSPATIAL AML INTELLIGENCE',
    image: '/images/caledonian_mockup.jpg',
    description:
      'Intelligence-led AML OS featuring 3D WebGL globe flow corridors, UK H3 hexagonal risk binning, and building-level forensic entity network pivots.',
    link: links.caledonianRiskAtlas,
    caseStudyUrl: '/case-study/caledonian-risk-atlas',
    tags: ['MapLibre GL', 'Three.js', 'react-globe.gl', 'react-force-graph-2d', 'H3 Spatial Binning'],
    metrics: ['Layer 0-3 Funnel', 'H3 Hexagons', 'Entity Graph Pivot'],
  },
  {
    id: 'aml-flagged-simulator',
    title: 'Flagged: AML Detection Simulator',
    subtitle: 'Tactical training workbench modeling Placement, Layering, and Integration',
    entity: 'AML SIMULATION WORKBENCH',
    image: '/images/aml_mockup.jpg',
    description:
      'Interactive simulation workbench modeling $100k illicit cash laundering across Placement, Layering, and Integration phases against deterministic FIU rules & SAR thresholds.',
    link: links.amlFlaggedSimulator,
    caseStudyUrl: '/case-study/aml-flagged-simulator',
    tags: ['React', 'Zustand', 'AML Typologies', 'SAR Thresholds', 'Audio SFX'],
    metrics: ['3 AML Phases', 'Heat Score Engine', 'SAR Threshold Logic'],
  },
  {
    id: 'uk-basket-arbitrage',
    title: 'UK Basket Arbitrage Engine',
    subtitle: 'Quantifying loyalty taxes & regional price differentials',
    entity: 'RETAIL ARBITRAGE & COMPLIANCE',
    image: '/images/uk_basket_mockup.jpg',
    description:
      'Quantifies two-tier supermarket member loyalty taxes (£680/yr drag) & computes multi-store grocery split optimization across 1.7M UK postcodes.',
    link: links.ukBasketArbitrage,
    caseStudyUrl: '/case-study/uk-basket-arbitrage',
    tags: ['TypeScript', 'postcodes.io API', 'SVG Geo Mapping', 'Pricing Engine'],
    metrics: ['1.7M Postcodes', '8 Supermarkets', 'Devolved MUP Rules'],
  },
  {
    id: 'realistic-commute',
    title: 'Realistic Commute Analytics',
    subtitle: 'Hourly reality check factoring TfL travel costs & time value',
    entity: 'ISOCHRONE MAP',
    image: '/images/realistic_commute_mockup.jpg',
    description: 'Transit routing and net pay hourly reality check calculator factoring TfL travel costs & time value.',
    link: links.realisticCommute,
    caseStudyUrl: '/case-study/realistic-commute',
    tags: ['Transit API', 'TypeScript', 'Isochrone Maps'],
    metrics: ['TfL Fare Matrix', 'Isochrone Polygons', 'Net Real Wage'],
  },
]

export type SystemEntry = {
  id: string
  title: string
  domain: string
  summary: string
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl: string
  image: string
  metrics: { label: string; value: string }[]
  details: {
    architecture: { title: string; desc: string }[]
    code: string
    regulations: string
  }
}

export const systems: SystemEntry[] = [
  {
    id: 'entitynexus',
    title: 'EntityNexus',
    domain: 'Corporate Graph Intelligence & SRA Intake',
    summary:
      'Production regulatory engine unwrapping multi-jurisdiction holding structures down to natural persons (UBOs ≥25%), evaluating OFSI 50% aggregate sanctions, and generating sealed statutory CMRA file notes.',
    liveUrl: flagship.demoUrl,
    githubUrl: flagship.githubUrl,
    caseStudyUrl: '/case-study/entitynexus',
    image: flagship.image,
    metrics: [
      { label: 'Graph Traversal', value: '0.24s Latency' },
      { label: 'Statutory Cutoff', value: '≥25% Ownership' },
      { label: 'Conflict Checks', value: 'SRA Rules 6.1–6.3' },
      { label: 'Audit Integrity', value: 'RFC-8785 SHA-256' },
    ],
    details: {
      architecture: [
        {
          title: 'Dual Registry Streaming',
          desc: 'Live ingestion from UK Companies House PSC and GLEIF Level 2 APIs with 24-hr TTL in-memory caching.',
        },
        {
          title: 'Recursive NetworkX Traversal',
          desc: 'Computes cross-shareholding percentage products across all simple directed paths to isolate controlling UBOs.',
        },
        {
          title: 'Deterministic Decision Vault',
          desc: 'Automatically screens adverse client conflicts, checks OFSI 50% rules, and seals CMRA file notes with SHA-256 signatures.',
        },
      ],
      code: `// Recursive Ownership Product Algorithm (UK MLR 2017 Regs 5, 28, 33)
async def compute_statutory_ubos(target_org: str, graph: nx.DiGraph):
    ubos = {}
    for node in graph.nodes():
        if graph.out_degree(node) == 0:  # Terminal natural person
            paths = nx.all_simple_paths(graph, source=node, target=target_org)
            share = sum([math.prod([graph[u][v]["share_pct"] for u, v in zip(p[:-1], p[1:])]) for p in paths])
            if share >= 0.25:  # UK MLR 2017 Statutory Threshold
                ubos[node] = {"effective_share": share, "statutory_ubo": True}
    return ubos`,
      regulations: `${regulations.ukMlr2017} • ${regulations.sraCode} • ${regulations.ofsiSanctions} • ${regulations.eccta2023}.`,
    },
  },
  {
    id: 'launchstack',
    title: 'Launchstack Cross-Border',
    domain: 'Cross-Border Money Movement & KYC Verification',
    summary:
      'Interactive regulatory corridor engine evaluating payment rails, licensing requirements, and AML compliance across multi-jurisdictional financial routes.',
    liveUrl: links.crossBorderMapper,
    caseStudyUrl: '/case-study/launchstack',
    image: '/images/launchstack_mockup.jpg',
    metrics: [
      { label: 'Corridor Matrix', value: '40+ Corridors' },
      { label: 'FATF Monitoring', value: 'Grey List Alerts' },
      { label: 'Rule Evaluation', value: 'Deterministic KYC' },
      { label: 'Visualization', value: 'Geospatial Nodes' },
    ],
    details: {
      architecture: [
        {
          title: 'Jurisdiction Risk Index',
          desc: 'Cross-references origin and destination corridors against FATF grey/black lists and offshore secrecy indices.',
        },
        {
          title: 'KYC Requirement Engine',
          desc: 'Determines whether Standard Due Diligence (SDD) or statutory Enhanced Due Diligence (EDD) is mandated under UK MLR 2017 Reg 33.',
        },
        {
          title: 'Graph Rail Visualization',
          desc: 'Renders real-time money movement compliance paths with interactive node inspection.',
        },
      ],
      code: `// Corridor Risk Evaluator (FATF Recommendation 16 & MLR Reg 33)
function evaluateCorridor(origin: string, destination: string, transferAmountGbp: number) {
  const riskWeight = jurisdictionRiskTable[destination].secrecyScore;
  const requiresEdd = riskWeight > 65 || transferAmountGbp > 10000;
  return { status: requiresEdd ? "EDD_MANDATORY" : "SDD_PERMITTED", riskWeight };
}`,
      regulations: `FATF 40 Recommendations (Rec 16 Travel Rule) • FinCEN Travel Rule • ${regulations.ukMlr2017} (Regulation 33 High-Risk Jurisdictions).`,
    },
  },
  {
    id: 'caledonian-risk-atlas',
    title: 'Caledonian Risk Atlas',
    domain: 'Intelligence-Led AML OS & Spatial Risk Atlas',
    summary:
      'High-performance geospatial intelligence platform allowing FinCrime analysts to drill down from a 3D WebGL macro-risk globe into H3 hexagonal densities and forensic entity relationship networks.',
    liveUrl: links.caledonianRiskAtlas,
    caseStudyUrl: '/case-study/caledonian-risk-atlas',
    image: '/images/caledonian_mockup.jpg',
    metrics: [
      { label: 'Drill-Down Funnel', value: 'Layer 0 to Layer 3' },
      { label: 'Spatial Binning', value: 'Uber H3 Hexagons' },
      { label: '3D Globe View', value: 'WebGL Corridor Arcs' },
      { label: 'Forensic Graph', value: 'react-force-graph-2d' },
    ],
    details: {
      architecture: [
        {
          title: 'Layer 0-1 Macro to Meso Drill-Down',
          desc: '3D WebGL globe with 170+ jurisdictions flowing into a 2D MapLibre UK regional profile with H3 spatial bins.',
        },
        {
          title: 'DENS / ENTR / PROX Model',
          desc: 'Three-dimensional risk engine calculating entity density, director turnover entropy, and bad-actor network proximity.',
        },
        {
          title: 'Forensic Network Pivot',
          desc: 'CSS 3D map-pivot reveals a physics-driven force graph resolving UBOs, PSCs, bank accounts, and shell fronts.',
        },
      ],
      code: `// Multi-Factor Geospatial Risk Engine (DENS / ENTR / PROX)
function computeHexRiskScore(hex: H3Index, entities: EntityRecord[]): HexRiskMetrics {
  const dens = calculateSpatialDensity(hex, entities);
  const entr = computeStructuralEntropy(entities); // director churn & velocity
  const prox = measureSanctionProximity(entities); // graph distance to OFSI list
  return { compositeScore: (dens * 0.4) + (entr * 0.35) + (prox * 0.25) };
}`,
      regulations: `FCA/NCA Trade-Based Money Laundering (TBML) • ${regulations.ukMlr2017} (Reg 33 & 37) • ${regulations.poca2002}.`,
    },
  },
  {
    id: 'aml-flagged-simulator',
    title: 'Flagged: AML Simulator',
    domain: 'Gamified AML Typologies & Transaction Monitoring',
    summary:
      'Interactive training workbench modeling the laundering of $100k illicit cash across Placement, Layering, and Integration stages against deterministic FIU rules & SAR thresholds.',
    liveUrl: links.amlFlaggedSimulator,
    caseStudyUrl: '/case-study/aml-flagged-simulator',
    image: '/images/aml_mockup.jpg',
    metrics: [
      { label: 'Simulation Phases', value: 'Placement • Layering • Integration' },
      { label: 'Heat Score Model', value: 'Dynamic FIU Suspicion' },
      { label: 'Decision Engine', value: 'Zustand State Store' },
      { label: 'Fidelity', value: 'SAR Thresholds & Audio SFX' },
    ],
    details: {
      architecture: [
        {
          title: 'Sequential Typology Mechanics',
          desc: 'Simulates placement into smurfing accounts, offshore layering loops, and luxury asset integration.',
        },
        {
          title: 'Heat & SAR Trigger Engine',
          desc: 'Calculates cumulative risk exposure; crossing velocity thresholds triggers automated SAR alerts and freeze orders.',
        },
        {
          title: 'FIU Telemetry Terminal',
          desc: 'Streams real-time event logs, regulatory citations, and institutional risk warnings.',
        },
      ],
      code: `// State-Driven FIU Rule & SAR Generator (POCA 2002 Part 7)
export const evaluateTransactionHeat = (state: SimulatorState, choice: ActionChoice) => {
  const newHeat = Math.min(100, state.heatScore + choice.heatImpact);
  const sarTriggered = newHeat >= 75 || choice.triggersSar;
  return {
    heatScore: newHeat,
    sarCount: sarTriggered ? state.sarCount + 1 : state.sarCount,
    log: generateFiuLog(choice, sarTriggered)
  };
};`,
      regulations: `${regulations.poca2002} • Suspicious Activity Report (SAR) Thresholds • FATF 3-Stage Laundering Typologies.`,
    },
  },
  {
    id: 'uk-basket-arbitrage',
    title: 'UK Basket Arbitrage Engine',
    domain: 'Retail Pricing Transparency & Spatial Econometrics',
    summary:
      'High-throughput spatial calculation engine quantifying £680/year consumer grocery loyalty penalties across 8 UK supermarket chains and 1.7M postcodes.',
    liveUrl: links.ukBasketArbitrage,
    caseStudyUrl: '/case-study/uk-basket-arbitrage',
    image: '/images/uk_basket_mockup.jpg',
    metrics: [
      { label: 'Coverage', value: '1.7M Postcodes' },
      { label: 'Retail Chains', value: '8 UK Supermarkets' },
      { label: 'Loyalty Drag', value: '£680/yr Quantified' },
      { label: 'Geospatial Routing', value: 'postcodes.io API' },
    ],
    details: {
      architecture: [
        {
          title: 'Postcode Vector Resolution',
          desc: 'Reverse geocodes nationwide UK postcodes into geospatial coordinate matrices with regional retail boundaries.',
        },
        {
          title: 'Two-Tier Price Parser',
          desc: 'Calculates real-time price differentials between member-cardholder SKUs and non-member shelf tags.',
        },
        {
          title: 'Multi-Store Route Optimizer',
          desc: 'Weighs vehicle transit friction against split-store savings to output mathematically optimal shopping trips.',
        },
      ],
      code: `// Multi-Store Split Arbitrage Optimizer
function optimizeBasketRoute(userPostcode: string, items: BasketItem[]) {
  const storeCoordinates = resolveStoreLocations(userPostcode);
  const priceMatrix = calculateTieredPricing(items, ['tesco', 'sainsburys', 'asda']);
  return computeParetoOptimalTrip(priceMatrix, storeCoordinates, { fuelCostPerMile: 0.18 });
}`,
      regulations:
        'UK Competition and Markets Authority (CMA) Retail Pricing Transparency Guidelines • Devolved Scottish Minimum Unit Pricing (MUP).',
    },
  },
  {
    id: 'realistic-commute',
    title: 'Realistic Commute Analytics',
    domain: 'Transit Econometrics & Real-Wage Calculation',
    summary:
      'Algorithmic transit calculator modeling TfL fare zone multipliers, journey time opportunity costs, and true net hourly earnings for London professionals.',
    liveUrl: links.realisticCommute,
    caseStudyUrl: '/case-study/realistic-commute',
    image: '/images/realistic_commute_mockup.jpg',
    metrics: [
      { label: 'Transit Network', value: 'TfL Fare Matrix' },
      { label: 'Isochrone Model', value: 'Travel Polygons' },
      { label: 'Calculation', value: 'Net Real Hourly' },
      { label: 'Commute Drag', value: 'Time Value Loss' },
    ],
    details: {
      architecture: [
        {
          title: 'TfL Zone Fare Matrix',
          desc: 'Integrates multi-modal transit fares across tube, rail, and bus zones with peak/off-peak logic.',
        },
        {
          title: 'Opportunity Cost Modeling',
          desc: 'Deducts monthly travel card expenditures and uncompensated transit hours from gross compensation.',
        },
        {
          title: 'Isochrone Radius Generator',
          desc: 'Renders real-time reachable work zones based on maximum acceptable daily commute friction.',
        },
      ],
      code: `// Real Hourly Wage Formula factoring Commute
function calculateRealWage(grossSalary: number, weeklyHours: number, monthlyTflCost: number, dailyCommuteMinutes: number) {
  const annualCommuteHours = (dailyCommuteMinutes * 5 * 48) / 60;
  const netPay = computeUKNetIncome(grossSalary) - (monthlyTflCost * 12);
  return netPay / ((weeklyHours * 48) + annualCommuteHours);
}`,
      regulations:
        'Transport for London (TfL) Fare Schedules • UK PAYE & National Insurance Brackets • Urban Transportation Economics.',
    },
  },
]

export const experience = [
  {
    company: 'Concentrix',
    role: 'Advisor I',
    period: 'June 2026 – Present',
    bullets: [
      'Handle high-volume customer interactions for pay-as-you-go mobile services, resolving account, billing, and product queries while meeting quality and compliance standards.',
      'Hit individual sales and service targets through structured needs discovery, clear product explanation, and accurate order capture.',
      'Maintain CSAT and AHT benchmarks in a KPI-driven contact-centre environment; coach on process accuracy and customer risk flags where relevant.',
    ],
  },
  {
    company: 'Vimeo',
    role: 'Global Support Engineer II',
    period: 'May 2023 – Dec 2023',
    bullets: [
      'Directed the resolution of 10,000+ complex compliance and security escalations for enterprise clients, maintaining a 98.65% CSAT by implementing a tiered response system that prioritized high-risk policy breaches and payment disputes.',
      'Partnered with Legal and Engineering on data-integrity and policy incidents under GDPR and platform governance standards.',
      'Delivered multi-channel technical support (email, chat, phone, tickets) during the PRISM Zendesk consolidation, helping streamline workflows and improve response consistency across a restructured global support organisation.',
      'Investigated and resolved complex product, account, and integration issues for Enterprise and self-serve users, translating technical changes into clear customer guidance and contributing to knowledge-base updates during high-change periods.',
    ],
  },
  {
    company: 'LinkedIn',
    role: 'Senior Trust & Safety Analyst',
    period: 'Nov 2021 – May 2023',
    bullets: [
      'Orchestrated end-to-end investigations into sophisticated global scam networks and fake profile clusters, leveraging OSINT and internal signal correlation to mitigate platform abuse and protect high-value member segments.',
      'Reduced repeat policy violations by ~30% through tighter enforcement patterns, escalation standards, and feedback into detection/rules (not queue volume alone).',
      'Partnered with Product, Engineering, and Policy on abuse trends and edge cases; translated frontline investigation into clearer rules, tooling asks, and process fixes.',
      'Identified a systemic vulnerability in the onboarding workflow for enterprise accounts and drafted a remediation strategy that was adopted globally, leading to a measurable 10% increase in early-stage detection of fraudulent entities.',
    ],
  },
  {
    company: 'Amazon',
    role: 'Transactions & Risk Investigations',
    period: 'Dec 2019 – Nov 2021',
    bullets: [
      'Engineered a data-driven investigation framework that transitioned the team from reactive manual clearing to proactive control hardening, utilizing SQL-based anomaly detection to identify high-risk transaction clusters across three global markets.',
      'Reduced fraud detection gaps by 69% and improved investigative accuracy by 22% through root-cause analysis, typology review, and workflow redesign.',
      'Designed MI / KRI dashboards tracking emerging fraud typologies so leadership had real-time visibility into control performance.',
      'Trained 50+ investigators on global fraud indicators, escalation standards, and SAR-related obligations, lifting consistency and QA.',
      'Collaborated with Product Engineering to implement real-time risk filters based on identified fraud typologies, which reduced manual review volume by 15% while maintaining a 99.8% precision rate in high-velocity fraud detection.',
    ],
  },
]

export const toolkit = [
  {
    title: 'FinCrime, AML & Regulatory Compliance',
    skills: [
      'CDD / EDD & KYC User Authenticity Verification',
      'Transaction Monitoring & Placement / Layering Typologies',
      'SAR / UAR Drafting & Regulatory Escalation Narratives',
      'UK MLR 2017 (Reg 28/33/37) & POCA 2002 Compliance',
      'OFSI & Global Sanctions Screening (50% Aggregate Rule)',
      'ECCTA 2023 Identity Verification & SRA Code of Conduct',
      'PEP Screening, Adverse Media & High-Risk Corridors',
    ],
  },
  {
    title: 'Data Analytics, Modeling & Fraud Strategy',
    skills: [
      'Advanced SQL (Complex CTEs, Window Functions, Joins)',
      'Python for Analytics (Pandas, NumPy, Scikit-Learn)',
      'Rule Lifecycle Tuning (Backtesting, Staging, Production)',
      'Machine Learning Anomaly Detection (XGBoost, Isolation Forest)',
      'Power BI, DAX & MI/KRI Executive Dashboard Design',
      'Root-Cause Analysis & Fraud Loss Prevention',
      'Dispute & Chargeback Defense Operations (PSD2 / GDPR)',
    ],
  },
  {
    title: 'Systems Engineering, Graph & RegTech Tooling',
    skills: [
      'Python (FastAPI, Asyncio, Pydantic)',
      'NetworkX (Recursive Graph Traversal & UBO Tracing)',
      'Neo4j Cypher & Corporate Entity Resolution',
      'Public APIs (Companies House REST/Streaming, GLEIF L2, OpenSanctions)',
      'Enterprise Platforms (NICE Actimize, Quantexa, Sift)',
      'RFC-8785 Canonical JSON Cryptographic Hashing',
      'React 19, TypeScript, Tailwind & Docker Containerization',
    ],
  },
]

export const dispatches = [
  {
    tag: 'REGULATORY ENFORCEMENT',
    source: 'UK Companies House / ECCTA',
    date: 'Statutory Enforcement',
    title: 'ECCTA 2023 Enforcement: Mandatory Identity Verification for Corporate Directors',
    summary:
      'Companies House is transitioning from passive registrar to active regulatory gatekeeper under the Economic Crime and Corporate Transparency Act 2023. Unverified offshore directors and opaque nominee holdings face automated rejection and civil penalties.',
    analystTake:
      'This is why EntityNexus exists. Law firms, lenders, and regulated institutions can no longer rely on unverified self-certifications; they need automated Level 2 GLEIF and Companies House recursive graph reconciliation.',
    link: 'https://www.gov.uk/government/publications/economic-crime-and-corporate-transparency-act-2023',
  },
  {
    tag: 'FINCRIME & SANCTIONS',
    source: 'HM Treasury / OFSI',
    date: 'Enforcement Priority',
    title: 'OFSI 50% Aggregate Sanctions: Unmasking Multi-Tiered Ownership Shields',
    summary:
      'UK sanctions enforcement strictly applies the 50% Rule across aggregated cross-holdings, closing the loophole where multiple sanctioned entities hold minority stakes totaling majority control.',
    analystTake:
      'Manual compliance reviews consistently miss fractional ownership split across 3+ offshore vehicles (e.g. 24% BVI + 27% Cyprus). Recursive path-product calculation under UK MLR 2017 Regulations 5 & 28 is no longer optional.',
    link: 'https://www.gov.uk/government/organisations/office-of-financial-sanctions-implementation',
  },
  {
    tag: 'SAR THRESHOLDS & AML',
    source: 'NCA / POCA Part 7',
    date: 'Statutory Guidance',
    title: 'POCA 2002 Part 7: Modernising Suspicious Activity Reports (SARs)',
    summary:
      'National Crime Agency guidance stresses the necessity of clear, defensible evidence trails and objective suspicion articulation rather than defensive mass reporting.',
    analystTake:
      'Having reviewed thousands of fraud alerts at Amazon and LinkedIn, the solution to false-positive alert fatigue is deterministic graph reasoning that outputs tamper-evident, audit-sealed decision trails.',
    link: links.entitynexus,
  },
]

export type WireItem = {
  id: string
  title: string
  source: string
  category: string
  timestamp: string
  url: string
  summary: string
}

const ago = (s: number) => new Date(Date.now() - s * 1000).toISOString()

export const wireSeed: WireItem[] = [
  { id: 'seed-1', title: 'DeepSeek MoE Architecture: Sparse Cross-Attention Scaling Across Low-Precision Clusters', source: 'Frontier AI Wire', category: 'AI', timestamp: ago(840), url: 'https://github.com/deepseek-ai', summary: 'Benchmarking low-precision FP8 tensor parallel dispatch on distributed memory fabrics.' },
  { id: 'seed-2', title: 'Citadel Securities Expands High-Frequency Automated Market-Making into Tokyo Liquidity Hubs', source: 'Hedgeweek', category: 'HEDGE_FUNDS', timestamp: ago(1920), url: 'https://www.hedgeweek.com', summary: 'Multi-asset quantitative models capitalize on cross-currency basis shifts following BoJ rate adjustments.' },
  { id: 'seed-3', title: 'Shenzhen Automakers Deploy 500+ Humanoid Bipedal Units to Assembly Line Stations', source: 'SCMP Tech', category: 'ROBOTICS', timestamp: ago(3240), url: 'https://www.scmp.com/tech', summary: 'Factory floor automation tests reach 99.4% precision on wire harness assembly.' },
  { id: 'seed-4', title: 'PBOC Pilots Cross-Border mBridge Programmable Smart Contracts for Bilateral Settlements', source: 'Finextra', category: 'CHINA', timestamp: ago(4680), url: 'https://www.finextra.com', summary: 'Multi-CBDC platform conducts sub-second gross settlement for commodities financing.' },
  { id: 'seed-5', title: 'FCA Mandates Synthetic Transaction Screening Audits under Consumer Duty Guidelines', source: 'Finextra', category: 'FINTECH', timestamp: ago(6600), url: 'https://www.finextra.com', summary: 'Regulators demand verifiable feature attribution and graph lineage for machine learning AML flags.' },
  { id: 'seed-6', title: 'Two Sigma and Millennium Allocate to Quantum-Resistant Microsecond Order Routers', source: 'Hedgeweek', category: 'HEDGE_FUNDS', timestamp: ago(8700), url: 'https://www.hedgeweek.com', summary: 'Next-generation FPGA networking stack minimizes kernel bypass overhead in colocation racks.' },
  { id: 'seed-7', title: 'Boston Dynamics & Toyota Research Institute Pioneer Whole-Body Diffusion Policy', source: 'Robot Report', category: 'ROBOTICS', timestamp: ago(11400), url: 'https://www.therobotreport.com', summary: 'Unified neural controller solves real-time balance recovery under dynamic payload perturbations.' },
  { id: 'seed-8', title: 'Zero-Knowledge Rollups Achieve 40,000 TPS in Institutional Treasury Proof-of-Concept', source: 'Finextra', category: 'SYSTEMS', timestamp: ago(14400), url: 'https://www.finextra.com', summary: 'Cryptographic proof aggregation allows instant clearing without disclosing counterparty exposure.' },
]

export const marqueeTerms = [
  'UK MLR 2017',
  'OFSI 50% Rule',
  'POCA 2002',
  'ECCTA 2023',
  'SRA Rules 6.1–6.3',
  'RFC-8785',
  'NetworkX',
  'FastAPI',
  'GLEIF L2',
  'Companies House PSC',
  'H3 Hexagons',
  'React 19',
  'FATF Rec 16',
  'Neo4j Cypher',
]
