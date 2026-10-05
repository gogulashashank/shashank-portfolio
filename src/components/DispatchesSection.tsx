import { motion } from 'framer-motion'
import { ArrowUpRight, Quote } from 'lucide-react'
import { dispatches } from '../data/content'
import { SectionHeading } from './Reveal'

export default function DispatchesSection() {
  return (
    <section id="insights" className="relative w-full py-24 sm:py-32 bg-ink-2 border-b border-line" aria-label="Risk Intelligence Dispatches">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="Industry Dispatches & Risk Intelligence"
          title="What I'm Tracking"
          aside={<span>Editorial Lens & Market Analysis</span>}
        />

        <div className="flex flex-col gap-6 sm:gap-8">
          {dispatches.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-white/20 bg-white/[0.05] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-white/50">{item.source}</span>
                </div>
                <span className="font-mono text-xs text-acid">{item.date}</span>
              </div>

              {/* Title & Summary */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-acid transition-colors tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal mb-6">
                {item.summary}
              </p>

              {/* Analyst Take */}
              <div className="rounded-2xl border border-acid/20 bg-acid/[0.04] p-5 sm:p-6 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-acid mb-2">
                  <Quote className="h-3.5 w-3.5" />
                  <span>My Take:</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic font-normal">
                  "{item.analystTake}"
                </p>
              </div>

              {/* Reference Link */}
              {item.link && (
                <div className="flex justify-end pt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-white/60 hover:text-white transition-colors"
                  >
                    <span>Reference Source</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-acid" />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
