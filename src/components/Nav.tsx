import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { site } from '../data/content'

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

  const hrefFor = (href: string) =>
    pathname === '/' ? href.replace('/', '') : href

  return (
    <>
      <motion.div
        className="wb-reading-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <header className="wb-nav-shell">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`wb-nav${scrolled ? ' wb-nav-scrolled' : ''}`}
          aria-label="Main navigation"
        >
          <Link to="/" className="wb-nav-brand" aria-label="Shashank Gogula, home">
            <span className="wb-nav-monogram">SG</span>
            <span>{site.profile.name}</span>
          </Link>

          <ul className="wb-nav-links">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={hrefFor(item.href)}>{item.label}</a>
              </li>
            ))}
            <li>
              <Link to="/for-hiring-managers">Hiring Path</Link>
            </li>
          </ul>

          <div className="wb-nav-actions">
            <a className="wb-nav-contact" href={`mailto:${site.links.email}`}>
              Get in touch <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <button
              className="wb-menu-toggle"
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="wb-mobile-menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="wb-mobile-menu"
            className="wb-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <ul>
              {[...NAV, { href: '/for-hiring-managers', label: 'Hiring Path' }].map(
                (item) => (
                  <li key={item.href}>
                    {item.href.startsWith('/#') ? (
                      <a
                        href={hrefFor(item.href)}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    )}
                  </li>
                ),
              )}
            </ul>

            <a className="wb-mobile-email" href={`mailto:${site.links.email}`}>
              {site.links.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
