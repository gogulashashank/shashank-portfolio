import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/content'
import Magnetic from './Magnetic'
import { SplitReveal } from './Reveal'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Footer() {
  const { profile, links } = site
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pt-36">
        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">● Open channel</div>
        <SplitReveal
          as="h2"
          text="Looking for an investigator or regulatory systems engineer?"
          className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl"
        />
        <p className="mt-8 max-w-xl text-base text-white/60 sm:text-lg">
          Available for Senior FinCrime, AML Product, and Graph Analytics opportunities.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Magnetic strength={0.4}>
            <a
              href={`mailto:${links.email}`}
              data-cursor="Email"
              className="group relative inline-flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-acid text-center text-sm font-bold text-ink sm:h-48 sm:w-48"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative flex flex-col items-center gap-1">
                <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
                Get in Touch
              </span>
            </a>
          </Magnetic>
          <a
            href={`mailto:${links.email}`}
            className="font-mono text-sm text-white/70 underline decoration-white/20 underline-offset-8 transition-colors hover:text-acid hover:decoration-acid sm:text-lg"
          >
            {links.email}
          </a>
        </div>
      </div>

      {/* Giant name marquee */}
      <div className="relative select-none overflow-hidden border-y border-line py-6" aria-hidden>
        <div className="marquee-track" style={{ ['--marquee-speed' as string]: '60s' }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex shrink-0 items-center gap-10 pr-10 text-[16vw] font-semibold leading-none tracking-[-0.06em] sm:text-[11vw]">
              <span className="text-outline">Shashank</span>
              <span className="font-serif font-normal italic text-acid">Gogula</span>
              <span className="text-acid">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 font-mono text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          © {new Date().getFullYear()} {profile.name}. · {profile.location}
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-acid">
            <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-acid">
            <GithubIcon className="h-3.5 w-3.5" /> GitHub
          </a>
          <a href={links.entitynexus} target="_blank" rel="noopener noreferrer" className="hover:text-acid">
            EntityNexus
          </a>
          <a href={links.caledonianRiskAtlas} target="_blank" rel="noopener noreferrer" className="hover:text-acid">
            Caledonian
          </a>
          <a href={links.amlFlaggedSimulator} target="_blank" rel="noopener noreferrer" className="hover:text-acid">
            Simulator
          </a>
        </div>
      </div>
    </footer>
  )
}
