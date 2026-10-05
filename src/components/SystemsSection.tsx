import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Code, Copy, Cpu, FileText, Layers, ShieldCheck } from 'lucide-react'
import { systems } from '../data/content'
import { SectionHeading } from './Reveal'
import { GithubIcon } from './BrandIcons'

export default function SystemsSection() {
  const [activeId, setActiveId] = useState(systems[0].id)
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'regulations'>('architecture')
  const [copied, setCopied] = useState(false)

  const activeSystem = systems.find((s) => s.id === activeId) || systems[0]

  const copyCode = () => {
    navigator.clipboard.writeText(activeSystem.details.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="systems" className="relative w-full py-24 sm:py-32 bg-ink-2 border-b border-line" aria-label="Systems Architecture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Engineered Systems & Architectural Deep Dives"
          title="Computational Systems Registry"
          aside={<span>Unbiased Deep Dive ({systems.length} Systems)</span>}
        />

        {/* System Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {systems.map((s) => {
            const isSelected = s.id === activeId
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveId(s.id)
                  setActiveTab('architecture')
                }}
                className={`relative px-4 py-2.5 rounded-full text-xs font-mono font-semibold transition-all shrink-0 border ${
                  isSelected
                    ? 'border-acid bg-acid/10 text-acid shadow-[0_0_16px_rgba(52,245,164,0.15)]'
                    : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-system-indicator"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-acid"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {s.title}
              </button>
            )
          })}
        </div>

        {/* Interactive Deep-Dive Card */}
        <motion.div
          key={activeSystem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl border border-white/15 bg-white/[0.02] p-6 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-acid/40 bg-acid/10 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-acid mb-3">
                <Cpu className="h-3.5 w-3.5" />
                {activeSystem.domain}
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeSystem.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                {activeSystem.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {activeSystem.liveUrl && (
                <a
                  href={activeSystem.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Live App"
                  className="inline-flex items-center gap-2 rounded-xl bg-acid px-4 py-2.5 font-mono text-xs font-bold text-ink transition-all hover:bg-white"
                >
                  <span>Live App</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {activeSystem.githubUrl && (
                <a
                  href={activeSystem.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-4 py-2.5 font-mono text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>Code</span>
                </a>
              )}
              <Link
                to={activeSystem.caseStudyUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-4 py-2.5 font-mono text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <FileText className="h-3.5 w-3.5 text-acid" />
                <span>Full Study</span>
              </Link>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 mb-8">
            {activeSystem.metrics.map((m, mi) => (
              <div key={mi} className="flex flex-col">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/40">
                  {m.label}
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-acid mt-1">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Tab Controls */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4 mb-6">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all ${
                activeTab === 'architecture'
                  ? 'bg-acid text-ink shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all ${
                activeTab === 'code'
                  ? 'bg-acid text-ink shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Code className="h-3.5 w-3.5" />
              <span>Algorithmic Code</span>
            </button>
            <button
              onClick={() => setActiveTab('regulations')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all ${
                activeTab === 'regulations'
                  ? 'bg-acid text-ink shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Statutory Baseline</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <AnimatePresence mode="wait">
            {activeTab === 'architecture' && (
              <motion.div
                key="tab-arch"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {activeSystem.details.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-acid/30 hover:bg-white/[0.04]"
                  >
                    <div className="font-mono text-xs font-bold text-acid mb-2">
                      0{idx + 1}. {item.title}
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'code' && (
              <motion.div
                key="tab-code"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl border border-white/10 bg-ink p-5 overflow-hidden font-mono text-xs"
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white/40">
                  <span>Executable Implementation</span>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {copied ? <Check className="h-3 w-3 text-acid" /> : <Copy className="h-3 w-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto text-acid/90 leading-relaxed">
                  <code>{activeSystem.details.code}</code>
                </pre>
              </motion.div>
            )}

            {activeTab === 'regulations' && (
              <motion.div
                key="tab-reg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-xs sm:text-sm font-mono text-white/80 leading-relaxed"
              >
                <div className="font-bold text-acid uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Enforced Statutory Standards & Legal Authorities:
                </div>
                <p className="text-white/80">{activeSystem.details.regulations}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
