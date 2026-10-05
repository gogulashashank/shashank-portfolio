import { Link } from 'react-router-dom'
import { ArrowLeft, Target, ShieldCheck, Wrench, Mail, Download } from 'lucide-react'
import { site } from '../data/content'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

export default function HiringManagers() {
  const roles = [
    'Financial Crime Analyst / Investigator',
    'Risk Operations & Fraud Strategy',
    'Data / Business Analyst (Trust & Safety)',
    'Product Management & Full-Stack roles in RegTech',
  ]

  const evidence = [
    {
      emoji: '🔍',
      title: 'Deep Investigation Experience',
      desc: 'Handling complex, high-stakes investigations (Amazon, LinkedIn) mirroring Level 2/3 AML alert triage.',
    },
    {
      emoji: '📊',
      title: 'SQL & Data Competency',
      desc: 'Writing complex queries, building models, and deriving actionable insights from messy transactional data.',
    },
    {
      emoji: '💻',
      title: 'Production-Ready Portfolio',
      desc: 'The projects built aren’t simple notebooks; they are end-to-end interactive systems demonstrating workflow improvement.',
    },
  ]

  const capabilities = [
    {
      title: 'Explainable Risk Tools',
      desc: 'Tools that generate explicit reasoning for SAR filings, not black-box ML scores.',
    },
    {
      title: 'Analyst Dashboards',
      desc: 'Consolidating multiple data sources into a single pane of glass for faster triage.',
    },
    {
      title: 'Workflow Automation',
      desc: 'Automating repetitive KYC/OSINT checks so investigators focus on high-level decisions.',
    },
    {
      title: 'Investigation Systems',
      desc: 'Building graph-based visualizers to map cross-border entity networks and UBOs.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-ink pt-28 pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-acid transition-colors mb-10 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-acid block mb-3">
            // Fast-Track Evaluation
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            For Hiring Managers
          </h1>
          <p className="text-base sm:text-xl text-white/60 max-w-2xl font-normal leading-relaxed">
            A 90-second executive summary of my fit for hybrid FinCrime, Product, and Data roles.
          </p>
        </div>

        {/* 2-Column Grid: Roles + Evidence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Roles */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 transition-all hover:border-white/20">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-acid mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">What roles do I fit?</h2>
            <ul className="space-y-4">
              {roles.map((r, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-acid shrink-0 shadow-[0_0_8px_rgba(52,245,164,0.5)]" />
                  <span className="text-base sm:text-lg text-white/80 font-medium">{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Evidence */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 transition-all hover:border-white/20">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-acid mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">What evidence supports this?</h2>
            <ul className="space-y-5">
              {evidence.map((e, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="text-xl shrink-0 mt-0.5">{e.emoji}</span>
                  <div>
                    <strong className="block text-white font-bold text-sm mb-1">{e.title}</strong>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">{e.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* What Can I Build */}
        <section className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 mb-16 overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-acid mb-6">
            <Wrench className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
            What can I build for your team?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((c, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <h3 className="font-bold text-white text-base mb-2">{c.title}</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Actions / Direct Contact */}
        <section className="text-center pt-8 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <a
              href={`mailto:${site.links.email}`}
              className="flex items-center gap-2 px-6 py-3.5 bg-acid text-ink rounded-full font-mono text-xs font-bold hover:bg-white transition-all shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-full font-mono text-xs font-semibold hover:bg-white/20 transition-all border border-white/10"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-full font-mono text-xs font-semibold hover:bg-white/20 transition-all border border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="/Shashank_Gogula_CV.pdf"
              download="Shashank_Gogula_CV.pdf"
              className="flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-full font-mono text-xs font-semibold hover:bg-white/20 transition-all border border-white/10"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
