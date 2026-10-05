import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, AlertTriangle, Layers } from 'lucide-react'
import { getCaseStudy } from '../data/caseStudies'
import { GithubIcon } from '../components/BrandIcons'

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const study = getCaseStudy(id)

  if (!study) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center pt-32 pb-20">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Case Study Not Found</h1>
        <p className="text-white/60 mb-8 max-w-md">The case study documentation you requested could not be found.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-acid px-5 py-2.5 font-mono text-xs font-bold text-ink hover:bg-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-ink pt-28 pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-acid transition-colors mb-10 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 pb-8 border-b border-white/10">
          <div>
            <span className="inline-block rounded-md border border-acid/40 bg-acid/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-acid mb-3">
              {study.entity}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              {study.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-4 py-2.5 font-mono text-xs font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Repo</span>
              </a>
            )}
            {study.demoUrl && (
              <a
                href={study.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-acid px-5 py-2.5 font-mono text-xs font-bold text-ink hover:bg-white transition-colors shadow-lg"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-ink-2 shadow-2xl mb-16 aspect-video max-h-[580px]">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover object-top opacity-95 hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-40" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          {/* Main Context, Problem & Contribution Column */}
          <div className="lg:col-span-8 space-y-14">
            {/* 1. Context */}
            <section>
              <h2 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid mb-4">
                <span className="text-white/40">01.</span> Context &amp; Mandate
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                {study.context}
              </p>
            </section>

            {/* 2. Problem */}
            <section>
              <h2 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid mb-4">
                <span className="text-white/40">02.</span> Core Investigation Bottleneck
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                {study.problem}
              </p>
            </section>

            {/* 3. Contribution */}
            <section>
              <h2 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid mb-4">
                <span className="text-white/40">03.</span> Engineering &amp; Operational Contribution
              </h2>
              <ul className="space-y-4">
                {study.contribution.map((item, idx) => {
                  const parts = item.split(': ')
                  return (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-white/70 leading-relaxed">
                      <span className="text-acid font-bold mt-0.5 shrink-0">›</span>
                      <span>
                        {parts.length > 1 ? (
                          <>
                            <strong className="text-white font-semibold">{parts[0]}:</strong> {parts.slice(1).join(': ')}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </section>
          </div>

          {/* Sticky Solution Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid flex items-center gap-2 pb-4 border-b border-white/10">
                <Layers className="h-4 w-4" />
                <span>04. Solution &amp; Trade-Offs</span>
              </h2>

              <div className="space-y-5">
                {study.solution.map((sol, si) => (
                  <div key={si} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h3 className="font-bold text-white text-sm mb-1.5">{sol.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{sol.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5. Evidence & Architecture Flow */}
        <section className="border-t border-white/10 pt-16 mb-16">
          <h2 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid mb-4">
            <span className="text-white/40">05.</span> Evidence &amp; System Architecture
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8 max-w-3xl">
            {study.evidence.description}
          </p>

          <div className="rounded-3xl border border-white/10 bg-[#090a0f] p-6 sm:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {study.evidence.architecture.map((arch, ai) => {
                const Icon = arch.icon
                return (
                  <div key={ai} className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                    <div className="flex flex-col items-center text-center max-w-[200px] w-full">
                      <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 text-acid shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1">{arch.title}</h4>
                      <p className="text-xs text-white/50 leading-snug">{arch.desc}</p>
                    </div>

                    {ai < study.evidence.architecture.length - 1 && (
                      <div className="hidden md:block h-0.5 w-12 lg:w-20 bg-gradient-to-r from-white/10 to-acid/50 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-acid" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 6. Limits & Constraints (Alert Box) */}
        <section className="rounded-3xl border border-rose-500/30 bg-rose-500/[0.04] p-6 sm:p-10">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-rose-400 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>06. Limits, Adversarial Realities &amp; System Constraints</span>
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {study.limits}
          </p>
        </section>
      </div>
    </div>
  )
}
