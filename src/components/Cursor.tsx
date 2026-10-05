import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Two-part cursor: a precise dot and a lagging ring that morphs over interactive
 * elements. Elements can set data-cursor="Label" to show a text label.
 * Only mounts for fine pointers; touch devices keep the native behaviour.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const [down, setDown] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 })
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 })
  const visible = useRef(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      visible.current = true
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>('a, button, [data-cursor], input, [role="tab"]')
      setHovering(!!target)
      setLabel(target?.dataset.cursor ?? null)
    }
    const dn = () => setDown(true)
    const up = () => setDown(false)
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', dn)
    window.addEventListener('pointerup', up)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', dn)
      window.removeEventListener('pointerup', up)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  const size = label ? 92 : hovering ? 56 : 34

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-acid/70 mix-blend-difference"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: size,
          height: size,
          scale: down ? 0.85 : 1,
          backgroundColor: label ? 'rgba(52,245,164,1)' : hovering ? 'rgba(52,245,164,0.12)' : 'rgba(52,245,164,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        {label && (
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink">{label}</span>
        )}
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 rounded-full bg-acid"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
