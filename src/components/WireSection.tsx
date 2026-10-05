import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Radio, RefreshCw, Search } from 'lucide-react'
import { wireSeed, type WireItem } from '../data/content'
import { SectionHeading } from './Reveal'

const CATEGORY_STYLES: Record<string, { badge: string; text: string }> = {
  AI: { badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20', text: 'text-violet-400' },
  FINTECH: { badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', text: 'text-emerald-400' },
  HEDGE_FUNDS: { badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20', text: 'text-amber-400' },
  ROBOTICS: { badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20', text: 'text-cyan-400' },
  CHINA: { badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20', text: 'text-rose-400' },
  SYSTEMS: { badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20', text: 'text-blue-400' },
}

const CATEGORIES = [
  { label: 'All', value: 'ALL' },
  { label: 'AI', value: 'AI' },
  { label: 'Fintech', value: 'FINTECH' },
  { label: 'Hedge Funds', value: 'HEDGE_FUNDS' },
  { label: 'Robotics', value: 'ROBOTICS' },
  { label: 'China', value: 'CHINA' },
]

function formatTimeAgo(isoString: string): string {
  try {
    const t = new Date(isoString).getTime()
    if (isNaN(t)) return 'recent'
    const diffSec = Math.max(0, Math.floor((Date.now() - t) / 1000))
    if (diffSec < 60) return `${diffSec}s ago`
    const diffMin = Math.floor(diffSec / 60)
    if (diffMin < 60) return `${diffMin}m ago`
    const diffHr = Math.floor(diffMin / 60)
    return diffHr < 24 ? `${diffHr}h ago` : `${Math.floor(diffHr / 24)}d ago`
  } catch {
    return 'recent'
  }
}

export default function WireSection() {
  const [items, setItems] = useState<WireItem[]>(wireSeed)
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [utcTime, setUtcTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setUtcTime(new Date().toUTCString().replace('GMT', 'UTC').split(' ').slice(4).join(' ') + ' UTC')
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCat = activeCategory === 'ALL' || item.category.toUpperCase() === activeCategory.toUpperCase()
      const matchQuery =
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchQuery
    })
  }, [items, activeCategory, searchQuery])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      const res = await fetch('/api/feed/frontier?refresh=true', { headers: { Accept: 'application/json' } })
      if (res.ok) {
        const data = await res.json()
        if (data.items && Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items)
        }
      }
    } catch {
      // Backend offline fallback - maintains seed data cleanly
    } finally {
      setTimeout(() => setIsRefreshing(false), 500)
    }
  }

  return (
    <section id="wire" className="relative w-full py-24 sm:py-32 bg-ink border-b border-line" aria-label="Frontier Wire">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Real-Time Telemetry & Dispatches"
          title="Frontier Tech & Macro Wire"
          aside={<span>Live RSS / API Ingestion</span>}
        />

        {/* Wire Terminal Container */}
        <div className="rounded-3xl border border-white/10 bg-[#090a0f] text-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-[#0c0e14] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-3 h-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </div>
              <span className="font-mono text-xs tracking-wider uppercase font-bold text-zinc-100">
                Frontier Wire Terminal
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-zinc-400">
                HARVEST: LIVE
              </span>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono text-zinc-400">
              <span className="tabular-nums text-zinc-300">{utcTime || 'SYNCING UTC'}</span>
              <span className="text-zinc-600">|</span>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="hover:text-white transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded hover:bg-white/[0.05] disabled:opacity-50 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
                <span className="text-[11px] uppercase tracking-wide">{isRefreshing ? 'Syncing' : 'Poll'}</span>
              </button>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="px-4 py-3 border-b border-white/[0.06] bg-[#090a0f] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="flex overflow-x-auto pb-1.5 sm:pb-0 no-scrollbar gap-1.5 items-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1 rounded-md text-[11px] font-mono tracking-tight transition-all shrink-0 cursor-pointer ${
                    activeCategory === cat.value
                      ? 'bg-white text-black font-semibold shadow-xs'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.08]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter DeepSeek, Citadel, mBridge..."
                className="w-full bg-[#12141c] border border-white/10 focus:border-acid/60 rounded-md pl-8 pr-3 py-1.5 text-xs font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Dispatches List */}
          <div className="divide-y divide-white/[0.06] max-h-[520px] overflow-y-auto fancy-scroll">
            <AnimatePresence mode="popLayout">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-zinc-500 text-xs font-mono">
                  No active dispatches matching filter "{searchQuery}".
                </div>
              ) : (
                filteredItems.map((item) => {
                  const style = CATEGORY_STYLES[item.category.toUpperCase()] || {
                    badge: 'bg-zinc-500/10 text-zinc-300 border-zinc-500/20',
                    text: 'text-zinc-400',
                  }
                  return (
                    <motion.a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="group flex flex-col sm:flex-row sm:items-baseline justify-between p-4 sm:px-6 hover:bg-white/[0.03] transition-colors gap-2 cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 flex-1 min-w-0">
                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-medium ${style.badge}`}
                          >
                            [{item.category}]
                          </span>
                          <span className="font-mono text-xs text-zinc-500">{item.source}</span>
                          <span className="sm:hidden text-zinc-600">•</span>
                          <span className="sm:hidden font-mono text-[11px] text-zinc-400 tabular-nums">
                            {formatTimeAgo(item.timestamp)}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-acid transition-colors line-clamp-2 sm:truncate">
                          {item.title}
                        </h4>
                      </div>

                      <div className="hidden sm:flex items-center gap-2 shrink-0 font-mono text-xs text-zinc-500 pl-3">
                        <span className="text-[11px] text-zinc-400 tabular-nums">
                          {formatTimeAgo(item.timestamp)}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-acid transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.a>
                  )
                })
              )}
            </AnimatePresence>
          </div>

          {/* Footer Status */}
          <div className="px-4 py-2.5 bg-[#0a0b10] border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-zinc-500 gap-1 sm:gap-0">
            <div className="flex items-center gap-2">
              <Radio className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">
                Ingesting: Hacker News, TechCrunch, Finextra, Hedgeweek, Robot Report, SCMP
              </span>
            </div>
            <span className="hidden sm:inline text-zinc-600 shrink-0">Auto-cached • Sub-10ms response</span>
          </div>
        </div>
      </div>
    </section>
  )
}
