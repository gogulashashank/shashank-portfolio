import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { site } from '../data/content'
import Magnetic from './Magnetic'

const NAV = [
  { href: '/#work', label: 'Work' },
  { href: '/#systems', label: 'Systems' },
  { href: '/#experience', label: 'Provenance' },
  { href: '/#toolkit', label: 'Toolkit' },
  { href: '/#insights', label: 'Dispatches' },
  { href: '/#wire', label: 'Wire' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const hrefFor = (h: string) => (pathname === '/' ? h.replace('/', '') : h)

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left bg-acid" style={{ scaleX: progress }} />

      <header className="fixed inset-x-0 top-0 z-[70] flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
            scrolled ? 'border-white/10 bg-ink/60 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl' : 'border-transparent bg-transparent'
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5 pl-1" aria-label="Home">
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-acid font-mono text-[11px] font-bold text-ink">
              SG
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">{site.profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={hrefFor(n.href)}
                  className="group relative block overflow-hidden rounded-full px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
                >
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">{n.label}</span>
                  <span className="absolute inset-x-0 top-full block px-3.5 py-2 text-acid transition-transform duration-300 group-hover:-translate-y-full">
                    {n.label}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/for-hiring-managers"
                className={`block rounded-full px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors hover:text-white ${
                  pathname === '/for-hiring-managers' ? 'text-acid' : 'text-white/60'
                }`}
              >
                Hiring Path
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${site.links.email}`}
                className="group hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-acid sm:inline-flex"
              >
                Get in Touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[65] flex flex-col justify-end bg-ink/95 px-6 pb-12 pt-28 backdrop-blur-2xl lg:hidden"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="space-y-1">
              {[...NAV, { href: '/for-hiring-managers', label: 'Hiring Path' }].map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={n.href.startsWith('/#') ? hrefFor(n.href) : n.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/10 py-3 text-5xl font-semibold tracking-[-0.04em] text-white"
                  >
                    <span className="font-mono text-xs text-acid">0{i + 1}</span>
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href={`mailto:${site.links.email}`} className="mt-10 font-mono text-sm text-acid">
              {site.links.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
