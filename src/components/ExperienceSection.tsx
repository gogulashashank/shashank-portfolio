import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase } from 'lucide-react'
import { experience } from '../data/content'
import { SectionHeading } from './Reveal'

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 bg-ink-2 border-b border-line" aria-label="Work Experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Investigative Provenance & Work History"
          title="Career Casework & Tenure"
          aside={<span>2019 – Present</span>}
        />

        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {experience.map((item, index) => {
            const isExpanded = expandedIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="py-6 sm:py-8 transition-colors group"
              >
                <div
                  onClick={() => toggle(index)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-acid group-hover:border-acid/40 transition-colors">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-acid transition-colors tracking-tight">
                        {item.role}{' '}
                        <span className="text-white/40 font-normal">at</span>{' '}
                        <span className="text-white font-semibold underline decoration-white/20 underline-offset-4">
                          {item.company}
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pl-14 sm:pl-0">
                    <span className="font-mono text-xs text-white/50">{item.period}</span>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/70 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-acid text-ink border-acid' : 'group-hover:border-white/30'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden pl-14 pt-6"
                    >
                      <ul className="space-y-3.5 border-l-2 border-white/10 pl-5 text-sm sm:text-base text-white/70 font-normal leading-relaxed">
                        {item.bullets.map((bullet, bi) => (
                          <li key={bi} className="relative">
                            <span className="absolute -left-[27px] top-2 h-1.5 w-1.5 rounded-full bg-acid" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
