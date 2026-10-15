export type StoryChapter = {
  id: 'journey' | 'career' | 'trips' | 'passions'
  tabLabel: string
  chapterNum: string
  title: string
  kicker: string
  quote: string
  content: string[]
  highlights: {
    label: string
    detail: string
  }[]
  tags: string[]
}

export const storyChapters: StoryChapter[] = [
  {
    id: 'journey',
    tabLabel: 'Story & Path',
    chapterNum: '01',
    title: 'From Casework to Builder',
    kicker: 'Frontline investigations forged my engineering instincts',
    quote:
      'Human investigators shouldn’t be spending 6 hours manually cross-referencing registries. The real leverage is turning fuzzy risk signals into deterministic, automated software.',
    content: [
      'My career began in the operational trenches of Amazon and LinkedIn, investigating high-velocity fraud rings, complex scam syndicates, and adversarial abuse networks.',
      'Handling thousands of escalations showed me the structural flaw in modern compliance: teams rely on manual queues and brittle checklists that burn out analysts while missing subtle, multi-tiered offshore holding structures.',
      'That frustration drove me to build. I transitioned from executing manual workflows to designing graph traversal algorithms, deterministic regulatory rule engines, and explainable AI interfaces that solve the problem at the root.',
    ],
    highlights: [
      { label: 'Amazon', detail: 'Reduced fraud detection gaps by 69% via SQL anomaly clustering.' },
      { label: 'LinkedIn', detail: 'Dismantled scam networks and cut repeat violations by ~30%.' },
      { label: 'RegTech Builder', detail: 'Engineered 10+ systems including EntityNexus and Risk Atlas.' },
    ],
    tags: ['Amazon Casework', 'LinkedIn Trust & Safety', 'RegTech Engineering', 'Graph Intelligence'],
  },
  {
    id: 'career',
    tabLabel: 'Why FinCrime & AI',
    chapterNum: '02',
    title: 'The Career Choice',
    kicker: 'Choosing hard, adversarial problems over generic SaaS fluff',
    quote:
      'Most software solves comfort problems. Financial crime and risk solve high-stakes adversarial games where bad actors constantly adapt.',
    content: [
      'I chose Financial Crime and Risk Intelligence because it sits at the high-consequence crossroads of law, economics, and software engineering. When systems fail here, real people and institutions suffer.',
      'My philosophy on AI in regulated environments is uncompromising: deterministic before speculative, explainable before generative.',
      'Regulators and MLROs cannot rely on black-box predictions that hallucinate. They need mathematically provable ownership paths, strict statutory citations (UK MLR 2017, SRA Rules, ECCTA 2023), and immutable cryptographic audit trails that hold up in court.',
    ],
    highlights: [
      { label: 'Deterministic First', detail: 'Statutory compliance math with zero hallucination risk.' },
      { label: 'Explainable AI', detail: 'Explicit regulatory citations for every automated decision.' },
      { label: 'High Stakes Focus', detail: 'Built for enterprise MLROs, legal counsel, and risk teams.' },
    ],
    tags: ['Adversarial Mindset', 'UK MLR 2017 & SRA Rules', 'Deterministic AI', 'Cryptographic Audits'],
  },
  {
    id: 'trips',
    tabLabel: 'Trips & Perspective',
    chapterNum: '03',
    title: 'Exploration & Real-World Friction',
    kicker: 'Understanding how cities, transit, and people actually move',
    quote:
      'My best product ideas don’t happen staring at screens—they happen observing real-world friction on train platforms, grocery aisles, and urban transit nodes.',
    content: [
      'Outside work, I am an avid traveler and explorer. Navigating London’s intricate rail network, walking historic city neighborhoods, and hiking British coastal paths gives me a tangible feel for urban economics and human flow.',
      'Observing real-life systems inspired several of my popular open tools:',
      '• Realistic Commute: Born from analyzing TfL zone fares, transit delays, and the uncompensated hourly drag of city commutes.',
      '• UK Basket Arbitrage: Born from spotting the £680/yr two-tier loyalty card penalty across 8 UK supermarket chains and 1.7M postcodes.',
    ],
    highlights: [
      { label: 'London & UK', detail: 'Mapping transit isochrones, pedestrian corridors, and rail dynamics.' },
      { label: 'Global Curiosity', detail: 'Studying international payment corridors and cross-border flow.' },
      { label: 'Consumer Fairness', detail: 'Turning everyday consumer frictions into transparent calculations.' },
    ],
    tags: ['London Transit', 'Coastal Trails', 'Urban Economics', 'Curiosity-Driven'],
  },
  {
    id: 'passions',
    tabLabel: 'Passions & Mindset',
    chapterNum: '04',
    title: 'Curiosity & What’s Next',
    kicker: 'Continuous learning, strategic games, and high-impact teams',
    quote:
      'I love taking messy, intimidating domains and building software that turns confusion into clarity.',
    content: [
      'When I’m not coding or analyzing compliance topologies, you’ll find me exploring macroeconomics, playing strategic chess, testing new open-source models, or hunting for the best flat white in London.',
      'I am fascinated by how global geopolitical shifts and sanctions policies ripple through international banking rails.',
      'What I’m looking for next: Joining high-ambition product, engineering, or risk intelligence teams building the next generation of explainable AI and trust infrastructure.',
    ],
    highlights: [
      { label: 'Strategic Thinking', detail: 'Chess and game theory applied to risk modeling.' },
      { label: 'Weekend Craft', detail: 'Rapidly prototyping full-stack tools with React, FastAPI, & D3.' },
      { label: 'Next Chapter', detail: 'Eager for high-ownership AI Product & FinCrime roles.' },
    ],
    tags: ['Game Theory', 'Geopolitics', 'Specialty Coffee', 'Available for Roles'],
  },
]
