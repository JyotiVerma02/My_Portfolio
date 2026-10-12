import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '../../../lib/portfolio'

type ProjectPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) return { title: 'Project not found | Jyoti Verma' }
  return { title: `${project.title} | Jyoti Verma`, description: project.summary }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()
  const github = 'github' in project ? project.github : undefined
  const live = 'live' in project ? project.live : undefined

  return (
    <main id="top" className="page-main inner-page project-detail-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/projects">Projects</Link><span aria-hidden="true">/</span><span>{project.title}</span></nav>
      <header className="project-detail-header"><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p className="page-lede">{project.summary}</p></header>
      <div className="project-detail-layout">
        <div className="project-detail-content">
          <section><p className="eyebrow">The problem</p><h2>What it needed to solve</h2><p>{project.problem}</p></section>
          <section><p className="eyebrow">My contribution</p><h2>How I worked on it</h2><p>{project.contribution}</p></section>
          <section><p className="eyebrow">Implementation</p><h2>Features &amp; decisions</h2><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><p>{project.decisions}</p></section>
        </div>
        <aside className="project-detail-aside">{project.technologies.length > 0 ? <div><p className="eyebrow">Technology</p><div className="skill-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div> : <p className="link-unavailable">Technology details were not available in the supplied project information.</p>}<div><p className="eyebrow">Links</p>{live && <a className="text-link" href={live} target="_blank" rel="noopener noreferrer">Visit live website <span aria-hidden="true">↗</span></a>}{github && <a className="text-link" href={github} target="_blank" rel="noopener noreferrer">Source repository <span aria-hidden="true">↗</span></a>}{!live && !github && <p className="link-unavailable">No public repository or live demo link was included in the supplied project files.</p>}</div><p className="link-unavailable">No project screenshot was available; this page describes the implementation without presenting an invented preview.</p></aside>
      </div>
      <div className="detail-back"><Link href="/projects" className="text-link"><span aria-hidden="true">←</span> Back to projects</Link><Link href="/contact" className="text-link">Discuss a project <span aria-hidden="true">↗</span></Link></div>
    </main>
  )
}
