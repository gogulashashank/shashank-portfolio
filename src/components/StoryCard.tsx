import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { storyChapters, type StoryChapter } from '../data/story'

const ICONS = {
  journey: Compass,
  career: ShieldCheck,
  trips: MapPin,
  passions: Sparkles,
}

export default function StoryCard() {
  const [activeTab, setActiveTab] = useState<StoryChapter['id']>('journey')

  const currentIndex = storyChapters.findIndex((c) => c.id === activeTab)
  const currentChapter = storyChapters[currentIndex] || storyChapters[0]
  const IconComponent = ICONS[currentChapter.id] || Compass

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    const nextIdx = (currentIndex - 1 + storyChapters.length) % storyChapters.length
    setActiveTab(storyChapters[nextIdx].id)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    const nextIdx = (currentIndex + 1) % storyChapters.length
    setActiveTab(storyChapters[nextIdx].id)
  }

  return (
    <div className="wb-story-card" aria-label="Personal story and background">
      {/* Topline Bar */}
      <div className="wb-story-topline">
        <div className="wb-story-topline-left">
          <span className="wb-story-badge-dot" aria-hidden="true" />
          <span className="wb-mono">FIELD NOTES &amp; DOSSIER</span>
        </div>
        <div className="wb-story-counter">
          <span className="wb-mono">
            {currentChapter.chapterNum} / 0{storyChapters.length}
          </span>
          <div className="wb-story-arrows" role="group" aria-label="Chapter navigation">
            <button
              type="button"
              onClick={handlePrev}
              className="wb-story-nav-btn"
              aria-label="Previous chapter"
            >
              <ArrowLeft size={13} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="wb-story-nav-btn"
              aria-label="Next chapter"
            >
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="wb-story-tabs" role="tablist" aria-label="Story topics">
        {storyChapters.map((chapter) => {
          const TabIcon = ICONS[chapter.id]
          const isActive = chapter.id === activeTab
          return (
            <button
              key={chapter.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(chapter.id)}
              className={`wb-story-tab ${isActive ? 'wb-story-tab-active' : ''}`}
            >
              <TabIcon size={12} aria-hidden="true" />
              <span>{chapter.tabLabel}</span>
            </button>
          )
        })}
      </div>

      {/* Animated Story Content */}
      <div className="wb-story-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="wb-story-pane"
          >
            {/* Title & Kicker */}
            <div className="wb-story-header">
              <div className="wb-story-kicker-wrap">
                <span className="wb-story-icon-badge" aria-hidden="true">
                  <IconComponent size={14} />
                </span>
                <span className="wb-story-kicker">{currentChapter.kicker}</span>
              </div>
              <h2 className="wb-story-title">{currentChapter.title}</h2>
            </div>

            {/* Editorial Quote */}
            <blockquote className="wb-story-quote">
              <p>“{currentChapter.quote}”</p>
            </blockquote>

            {/* Narrative Paragraphs */}
            <div className="wb-story-paragraphs">
              {currentChapter.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways / Highlights */}
            <div className="wb-story-highlights" aria-label="Key highlights">
              {currentChapter.highlights.map((h, i) => (
                <div key={i} className="wb-story-highlight-item">
                  <span className="wb-story-highlight-label">{h.label}</span>
                  <span className="wb-story-highlight-detail">{h.detail}</span>
                </div>
              ))}
            </div>

            {/* Tag Pills */}
            <div className="wb-story-tags">
              {currentChapter.tags.map((tag) => (
                <span key={tag} className="wb-story-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation & Call to action */}
      <div className="wb-story-footer">
        <Link to="/for-hiring-managers" className="wb-story-cta">
          <span>Read Hiring Fit Summary</span>
          <ChevronRight size={14} aria-hidden="true" />
        </Link>
        <Link to="/sample-investigation" className="wb-story-subcta">
          <span>Sample Investigation</span>
          <ArrowUpRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
