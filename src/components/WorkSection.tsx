import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getCaseStudy } from '../data/caseStudies'
import { projects } from '../data/content'

type ProjectDetail = 'problem' | 'contribution' | 'today'

const DETAIL_LABELS: Record<ProjectDetail, string> = {
  problem: 'Problem',
  contribution: 'My contribution',
  today: 'What works today',
}

function shorten(text: string, maxLength = 230) {
  const cleanText = text.trim()
  if (cleanText.length <= maxLength) return cleanText
  return `${cleanText.slice(0, maxLength).trimEnd()}…`
}

function getDetail(projectId: string, detail: ProjectDetail, description: string) {
  const study = getCaseStudy(projectId)

  if (!study) return description

  if (detail === 'problem') return study.problem
  if (detail === 'contribution') return study.contribution[0] ?? description
  return study.solution[0]?.content ?? description
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const [activeDetail, setActiveDetail] = useState<ProjectDetail>('problem')
  const study = getCaseStudy(project.id)
  const isFeatured = index === 0
  const detail = getDetail(project.id, activeDetail, project.description)

  return (
    <motion.article
      className={`wb-project${isFeatured ? ' wb-project-featured' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: Math.min(index % 3, 2) * 0.06 }}
    >
      <Link
        to={project.caseStudyUrl}
        className="wb-project-image-link"
        aria-label={`Read the ${project.title} case study`}
      >
        <div className="wb-project-image-frame">
          <img
            src={project.image}
            alt={`${project.title} product preview`}
            className="wb-project-image"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <span className="wb-project-image-label wb-mono">{project.entity}</span>
          <span className="wb-image-link-icon" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>

      <div className="wb-project-content">
        <div className="wb-project-heading">
          <div>
            <p className="wb-project-index wb-mono">
              {String(index + 1).padStart(2, '0')} / Selected work
            </p>
            <h3 className="wb-project-title">{project.title}</h3>
            <p className="wb-project-subtitle">{project.subtitle}</p>
          </div>
        </div>

        <div className="wb-detail-switcher" aria-label={`${project.title} details`}>
          {(Object.keys(DETAIL_LABELS) as ProjectDetail[]).map((key) => (
            <button
              key={key}
              type="button"
              className="wb-detail-button"
              aria-pressed={activeDetail === key}
              onClick={() => setActiveDetail(key)}
            >
              {DETAIL_LABELS[key]}
            </button>
          ))}
        </div>

        <p className="wb-project-detail" aria-live="polite">
          {shorten(detail)}
        </p>

        <div className="wb-project-meta">
          {project.metrics.map((metric) => (
            <span key={metric} className="wb-project-metric">
              {metric}
            </span>
          ))}
        </div>

        <div className="wb-project-tags" aria-label="Technologies and domain tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="wb-project-actions">
          {project.link ? (
            <a
              className="wb-text-link wb-text-link-primary"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Live app"
            >
              Open live app <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : (
            <span className="wb-project-no-link">No live link supplied</span>
          )}

          {study && (
            <Link
              className="wb-text-link"
              to={project.caseStudyUrl}
              data-cursor="Case study"
            >
              <BookOpen size={15} aria-hidden="true" />
              Case study
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function WorkSection() {
  return (
    <section id="work" className="workbench-work" aria-labelledby="work-title">
      <div className="wb-container">
        <div className="wb-work-heading">
          <div>
            <p className="wb-eyebrow">Selected work / 01</p>
            <h2 id="work-title" className="wb-section-title">
              Products built for
              <br className="wb-heading-break" /> complicated work.
            </h2>
          </div>

          <p className="wb-work-intro">
            A selection of products and tools across financial crime, risk,
            operations, and other practical problems.
          </p>
        </div>

        <div className="wb-project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
