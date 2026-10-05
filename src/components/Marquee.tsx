import { marqueeTerms } from '../data/content'

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-white/[0.015] py-4 select-none">
      <div className="marquee-track flex gap-8 items-center" style={{ ['--marquee-speed' as string]: '35s' }}>
        {[...marqueeTerms, ...marqueeTerms].map((term, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0 font-mono text-xs uppercase tracking-widest text-white/60">
            <span className="hover:text-acid transition-colors cursor-default">{term}</span>
            <span className="text-acid font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
