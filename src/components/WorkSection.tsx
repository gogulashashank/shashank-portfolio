import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { projects } from '../data/content'
import { SectionHeading } from './Reveal'

export default function WorkSection() {
  return (
    <section id="work" className="relative w-full py-24 sm:py-32 bg-ink border-b border-line" aria-label="Selected Work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="Proven Systems & Casework"
          title="Engineered Products & Regulatory Tools"
          aside={<span>{projects.length} Shipped Deployments</span>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const isFeatured = index === 0
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group spotlight relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-acid/40 hover:bg-white/[0.04] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Header / Preview Image */}
                <div>
                  <div className="relative mb-6 overflow-hidden rounded-xl border border-white/10 bg-ink-2 aspect-video group-hover:border-white/20 transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-acid backdrop-blur-md">
                        {project.entity}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-acid transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-white/50 mt-1">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, mi) => (
                      <span
                        key={mi}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] font-semibold text-white/90"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Tags & Actions */}
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, ti) => (
                      <span key={ti} className="font-mono text-[10px] text-white/50">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="Live App"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 font-mono text-xs font-bold text-ink transition-all hover:bg-acid shadow-sm"
                      >
                        <span>Launch App</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-white/30">Prototype</span>
                    )}

                    <Link
                      to={project.caseStudyUrl}
                      data-cursor="Case Study"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-white/70 hover:text-white transition-colors"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-acid" />
                      <span>Case Study</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
