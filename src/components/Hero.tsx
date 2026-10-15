import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { experienceHighlights, site } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import StoryCard from './StoryCard'

export default function Hero() {
  return (
    <section className="workbench-hero" aria-label="Introduction">
      <div className="wb-container wb-hero-layout">
        <div className="wb-hero-copy">
          <div className="wb-hero-byline">
            <img
              src={site.profile.avatar}
              alt={site.profile.name}
              className="wb-avatar"
              width="52"
              height="52"
            />

            <div>
              <div className="wb-kicker">{site.profile.name}</div>
              <div className="wb-byline-location">
                <MapPin size={13} aria-hidden="true" />
                {site.profile.location}
              </div>
            </div>
          </div>

          <div className="wb-status">
            <span className="wb-status-dot" aria-hidden="true" />
            {site.profile.statusBadge}
          </div>

          <p className="wb-eyebrow">Product-minded builder · Risk &amp; operations</p>

          <h1 className="wb-hero-title">
            Complex problems.
            <br />
            <span>Useful software.</span>
          </h1>

          <p className="wb-hero-description">{site.profile.subheadline}</p>

          <div className="wb-hero-actions">
            <a className="wb-button wb-button-primary" href="#work">
              Explore selected work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              className="wb-button wb-button-secondary"
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="wb-hero-contact">
            <a href={`mailto:${site.links.email}`}>{site.links.email}</a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="wb-social-icon" />
              LinkedIn
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon className="wb-social-icon" />
              GitHub
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        <StoryCard />
      </div>

      <div className="wb-container wb-proof-strip" aria-label="Experience highlights">
        {experienceHighlights.map((item) => (
          <div className="wb-proof-item" key={item.title}>
            <span className="wb-proof-metric">{item.metric}</span>
            <span className="wb-proof-title">{item.title}</span>
            <span className="wb-proof-description">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
