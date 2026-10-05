import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LINES = [
  'Initialising entity graph',
  'Streaming Companies House PSC',
  'Resolving GLEIF Level 2 parents',
  'Screening OFSI 50% aggregates',
  'Sealing RFC-8785 audit vault',
]

/** Cinematic boot sequence. Shown once per browser session. */
export default function Preloader() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return sessionStorage.getItem('sg-booted') !== '1'
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = 'hidden'
    const start = performance.now()
    const dur = 2200
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(eased * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
      else
        setTimeout(() => {
          sessionStorage.setItem('sg-booted', '1')
          setShow(false)
          document.documentElement.style.overflow = ''
        }, 350)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      document.documentElement.style.overflow = ''
    }
  }, [show])

  const line = LINES[Math.min(LINES.length - 1, Math.floor((count / 100) * LINES.length))]

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-ink p-6 sm:p-10"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          initial={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
            <span>Shashank Gogula</span>
            <span>Portfolio / v2</span>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs text-acid">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {line}…
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex items-end justify-between gap-6">
              <div className="text-[28vw] font-semibold leading-[0.8] tracking-[-0.06em] text-white tabular-nums sm:text-[20vw]">
                {String(count).padStart(3, '0')}
              </div>
              <div className="mb-4 hidden max-w-xs text-right font-serif text-3xl italic text-white/60 sm:block">
                Turning fragmented risk signals into explainable decisions.
              </div>
            </div>
            <div className="mt-6 h-px w-full bg-white/10">
              <motion.div className="h-px bg-acid" style={{ width: `${count}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
