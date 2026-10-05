import { motion, type Variants } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const motionCache = new Map<ElementType, any>()
function getMotion(tag: ElementType) {
  if (!motionCache.has(tag)) motionCache.set(tag, motion.create(tag as never))
  return motionCache.get(tag)
}

const container: Variants = {
  hidden: {},
  show: (stagger: number = 0.035) => ({ transition: { staggerChildren: stagger } }),
}
const word: Variants = {
  hidden: { y: '110%', rotate: 4 },
  show: { y: '0%', rotate: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

/**
 * Splits text into words, each sliding up from behind a mask.
 * The full string is exposed to assistive tech via aria-label.
 */
export function SplitReveal({
  text,
  as: Tag = 'span',
  className = '',
  wordClassName = '',
  stagger = 0.04,
  delay = 0,
  immediate = false,
}: {
  text: string
  as?: ElementType
  className?: string
  wordClassName?: string
  stagger?: number
  delay?: number
  immediate?: boolean
}) {
  const MotionTag = getMotion(Tag)
  const words = text.split(' ')
  return (
    <MotionTag
      aria-label={text}
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      {...(immediate ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, margin: '-10% 0px' } })}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block will-change-transform ${wordClassName}`}
            variants={word}
            transition={{ delay: delay + i * stagger, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/** Generic fade/slide reveal on scroll. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 40,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Section eyebrow + giant title, shared across sections. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  aside,
}: {
  index: string
  eyebrow: string
  title: string
  aside?: ReactNode
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 border-b border-line pb-8 sm:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
          <span className="text-acid">{index}</span>
          <span className="h-px w-10 bg-white/20" />
          <span>{eyebrow}</span>
        </div>
        <SplitReveal
          as="h2"
          text={title}
          className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
        />
      </div>
      {aside && <div className="shrink-0 font-mono text-xs text-white/40">{aside}</div>}
    </div>
  )
}
