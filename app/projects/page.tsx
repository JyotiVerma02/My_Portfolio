import type { Metadata } from 'next'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../lib/portfolio'

export const metadata: Metadata = { title: 'Projects | Jyoti Verma', description: 'Selected frontend applications and workflow tools built by Jyoti Verma.' }

export default function ProjectsPage() {
  return (
    <main id="top" className="page-main inner-page projects-page">
      <section className="page-intro"><p className="eyebrow">Selected work</p><h1>Projects built to be <span>useful.</span></h1><p className="page-lede">A selection of interfaces and workflow tools I&apos;ve worked on, with the available implementation details and technologies.</p></section>
      <section className="project-container projects-page-grid" aria-label="Project list">
        {projects.map((project, index) => <ProjectCard key={project.slug} title={project.title} description={project.summary} eyebrow={project.category} tech={project.technologies} motif={String(index + 1).padStart(2, '0')} href={`/projects/${project.slug}`} live={'live' in project ? project.live : undefined} />)}
      </section>
      <p className="projects-disclosure">Project previews are illustrative UI studies. Screenshots and public demo links were not available in the supplied project files.</p>
    </main>
  )
}
