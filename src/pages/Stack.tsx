import { Link } from 'react-router-dom'
import { ArrowLeft, Database, Code, LayoutTemplate, Shield } from 'lucide-react'

export default function Stack() {
  const tools = [
    {
      icon: Database,
      title: 'SQL & Data Extraction',
      desc: 'The backbone of any investigation. I write complex joins, window functions, and CTEs to extract hidden connections across disparate transactional and identity databases.',
      usedFor: 'Pattern Detection, Typology Modeling, Reporting',
    },
    {
      icon: Code,
      title: 'Python & Scikit-Learn',
      desc: 'Moving beyond manual rules. I leverage Pandas for high-volume data cleaning and Scikit-Learn for building baseline anomaly detection models (e.g., Isolation Forests) to surface unknown unknowns.',
      usedFor: 'Anomaly Detection, Automation, Data Cleaning',
    },
    {
      icon: LayoutTemplate,
      title: 'React & Next.js',
      desc: "Data is useless if it's not actionable. I build rapid, high-fidelity prototypes of investigation dashboards to test UI/UX hypotheses before engineering teams commit to production builds.",
      usedFor: 'Explainable AI Interfaces, Internal Tools',
    },
    {
      icon: Shield,
      title: 'Vendor Platforms',
      desc: 'Deep operational experience navigating and configuring enterprise Risk platforms. I know how to translate regulatory policy into operational alert queues.',
      usedFor: 'NICE Actimize, Quantexa, Sift',
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

        <div className="mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-acid block mb-3">
            // Core Capabilities
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            Methods &amp; Tools
          </h1>
          <p className="text-base sm:text-xl text-white/60 max-w-2xl font-normal leading-relaxed">
            The practical stack I use to build automated risk pipelines, identify anomalies, and design investigator-facing tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {tools.map((t, idx) => {
            const Icon = t.icon
            return (
              <div
                key={idx}
                className="group spotlight rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-acid/40 hover:bg-white/[0.04]"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-acid mb-6 shadow-md group-hover:border-acid/30 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-acid transition-colors">
                  {t.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-normal mb-6">
                  {t.desc}
                </p>
                <div className="pt-4 border-t border-white/10 font-mono text-[11px] uppercase tracking-wider text-white/40">
                  <span className="text-acid">Used For:</span> {t.usedFor}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
