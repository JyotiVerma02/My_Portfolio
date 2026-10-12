import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  eyebrow: string
  tech: readonly string[]
  motif: string
  href: string
  live?: string
}

export default function ProjectCard({ title, description, eyebrow, tech, motif, href, live }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className={`project-art project-art-${motif}`} aria-hidden="true">
        <span className="project-art-orbit" /><span className="project-art-index">{motif}</span>
        <span className="project-art-window"><span /><span /><span /></span>
        <span className="project-art-lines"><i /><i /><i /></span>
      </div>
      <div className="project-card-body">
        <p className="project-eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        {tech.length > 0 && <div className="project-tech">{tech.map((item) => <span key={item}>{item}</span>)}</div>}
        <div className="project-card-links"><Link className="learn-more-btn" href={href}>Project details <span aria-hidden="true">↗</span></Link>{live && <a className="live-project-link" href={live} target="_blank" rel="noopener noreferrer">Live site <span aria-hidden="true">↗</span></a>}</div>
      </div>
    </article>
  )
}
