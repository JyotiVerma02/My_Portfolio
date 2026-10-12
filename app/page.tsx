import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import { experience, projects } from '../lib/portfolio'

export default function Home() {
  return (
    <main id="top" className="page-main">
      <section className="home hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> Frontend developer <span className="eyebrow-divider">·</span> India</p>
          <h1>Thoughtful interfaces.<br /><span>Built for people.</span></h1>
          <span className="hero-signature-dots" aria-hidden="true"><i /><i /><i /></span>
          <p className="hero-description">I&apos;m Jyoti, a frontend developer building responsive, reliable web experiences with React, Next.js, and TypeScript.</p>
          <div className="hero-actions"><Link href="/projects" className="btn btn-primary">Explore my work <span aria-hidden="true">↘</span></Link><Link href="/contact" className="text-link">Get in touch <span aria-hidden="true">↗</span></Link></div>
          <div className="hero-stack" aria-label="Core technologies">{['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
        <div className="hero-visual"><div className="portrait-frame"><div className="portrait-inner"><Image src="/Jyoti_image.png" alt="Portrait illustration of Jyoti Verma" width={800} height={1365} priority /></div></div><div className="portrait-note"><span className="note-mark" aria-hidden="true">✳</span><span>Design-minded<br /><strong>developer</strong></span></div><span className="visual-index">PORTFOLIO · FRONTEND</span></div>
        <a className="scroll-cue" href="#featured-work"><span /> Scroll to explore</a>
      </section>

      <section id="featured-work" className="section-shell home-featured">
        <div className="section-heading section-heading-row"><div><p className="eyebrow">Selected work</p><h2>Made to be <span>useful.</span></h2></div><Link href="/projects" className="text-link">All projects <span aria-hidden="true">↗</span></Link></div>
        <div className="project-container">
          {projects.slice(0, 2).map((project, index) => <ProjectCard key={project.slug} title={project.title} description={project.summary} eyebrow={project.category} tech={project.technologies.slice(0, 3)} motif={`0${index + 1}`} href={`/projects/${project.slug}`} live={'live' in project ? project.live : undefined} />)}
        </div>
      </section>

      <section className="section-shell home-experience">
        <div><p className="eyebrow">Currently building</p><h2>{experience.role}<br /><span>{experience.company}</span></h2></div>
        <div><p className="experience-summary">{experience.summary}</p><p className="experience-date-static">{experience.dates}</p><Link href="/experience" className="text-link">Experience details <span aria-hidden="true">↗</span></Link></div>
      </section>


      <section className="home-contact"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make<br /><span>something useful.</span></h2><Link href="/contact" className="btn btn-primary">Start a conversation <span aria-hidden="true">↗</span></Link></section>
    </main>
  )
}
