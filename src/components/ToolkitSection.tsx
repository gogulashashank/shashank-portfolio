import { motion } from 'framer-motion'
import { ShieldCheck, Binary, Terminal } from 'lucide-react'
import { toolkit } from '../data/content'
import { SectionHeading } from './Reveal'

const ICONS = [ShieldCheck, Binary, Terminal]

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="relative w-full py-24 sm:py-32 bg-ink border-b border-line" aria-label="Technical Toolkit">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Verified Competencies & Stack"
          title="Technical Toolkit & Domain Skill Set"
          aside={<span>Curriculum Vitae Profile</span>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {toolkit.map((pillar, index) => {
            const Icon = ICONS[index] || Terminal
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="spotlight group rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-all hover:border-acid/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-acid/30 bg-acid/10 text-acid mb-6 shadow-[0_0_15px_rgba(52,245,164,0.1)]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-mono text-xs uppercase tracking-wider text-white font-extrabold pb-4 border-b border-white/10 mb-6">
                  {pillar.title}
                </h3>

                <ul className="space-y-3.5">
                  {pillar.skills.map((skill, si) => (
                    <li key={si} className="flex items-start gap-3 text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-acid mt-1.5 shrink-0" />
                      <span className="group-hover:text-white/90 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
