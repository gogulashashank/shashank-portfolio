import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, MapPin, Network, Sparkles } from 'lucide-react'
import { site, flagship, experienceHighlights } from '../data/content'
import HeroScene from './three/HeroScene'
import Magnetic from './Magnetic'
import { SplitReveal } from './Reveal'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24"
      aria-label="Introduction"
    >
      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-85">
        <HeroScene progress={scrollYProgress} />
      </div>

      {/* Radial fade to ground the canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_0%,var(--color-ink)_80%)]"
      />

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8"
      >
        {/* Top Badges Bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/20 p-0.5 shadow-2xl">
            <img
              src={site.profile.avatar}
              alt={site.profile.name}
              className="h-full w-full rounded-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-ink bg-acid" />
          </div>

          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-tight text-white/90">
              {site.profile.statusBadge}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-xs text-white/60">
            <MapPin className="h-3 w-3 text-acid" />
            {site.profile.location}
          </div>
        </div>

        {/* Main Kinetic Headline */}
        <div className="mb-6 max-w-4xl">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">
            // Financial Crime Investigator & Systems Technologist
          </div>
          <SplitReveal
            as="h1"
            text={site.profile.headline}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
            wordClassName="text-white"
          />
        </div>

        {/* Subheadline with highlighted pedigree */}
        <p className="mb-10 max-w-2xl text-base sm:text-lg text-white/70 font-normal leading-relaxed">
          5+ years of high-stakes fraud &amp; AML casework at{' '}
          <span className="font-semibold text-white underline decoration-acid/60 underline-offset-4">Amazon</span>{' '}
          and{' '}
          <span className="font-semibold text-white underline decoration-acid/60 underline-offset-4">LinkedIn</span>
          . Engineering recursive entity resolution, deterministic regulatory engines, and explainable AI interfaces.
        </p>

        {/* Flagship Interactive Engine Card */}
        <div className="mb-12 w-full rounded-2xl border border-white/15 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-acid/50 hover:bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-acid/40 bg-acid/10 text-acid shadow-[0_0_20px_rgba(52,245,164,0.15)]">
                <Network className="h-6 w-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded border border-acid/40 bg-acid/10 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-acid uppercase">
                    {flagship.badge}
                  </span>
                  <span className="font-mono text-xs text-white/50">0.24s Graph Traversal</span>
                </div>
                <h3 className="mt-1 text-lg sm:text-xl font-bold text-white tracking-tight">
                  {flagship.title} — {flagship.tagline}
                </h3>
                <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-white/60 line-clamp-2">
                  {flagship.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2 lg:pt-0 border-t border-white/10 lg:border-t-0">
              <Magnetic strength={0.3}>
                <a
                  href={flagship.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Live App"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-acid px-5 py-2.5 font-mono text-xs font-bold text-ink transition-all hover:bg-white hover:shadow-[0_0_24px_rgba(52,245,164,0.4)]"
                >
                  <span>Launch Live App</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Magnetic>
              <a
                href="#systems"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-white/20 bg-white/[0.05] px-4 py-2.5 font-mono text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <span>Inspect Stack</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Metrics Ribbon */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 mb-10">
          {experienceHighlights.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-acid tracking-tight">
                {stat.metric}
              </div>
              <div className="mt-1 text-xs font-semibold text-white">{stat.title}</div>
              <div className="mt-1 text-xs text-white/50 leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Quick Social & Coordinates Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/10 pt-6 font-mono text-xs text-white/60">
          <span className="flex items-center gap-1.5 text-white">
            <Sparkles className="h-3.5 w-3.5 text-acid" />
            {site.profile.location}
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <a
            href={`mailto:${site.links.email}`}
            className="text-white hover:text-acid transition-colors underline decoration-white/20 underline-offset-4"
          >
            {site.links.email}
          </a>
          <span className="hidden sm:inline text-white/20">•</span>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-acid transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            GitHub
            <ArrowUpRight className="h-3 w-3 text-white/40" />
          </a>
          <span className="hidden sm:inline text-white/20">•</span>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-acid transition-colors"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
            LinkedIn
            <ArrowUpRight className="h-3 w-3 text-white/40" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
