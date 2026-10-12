import type { Metadata } from 'next'
import Link from 'next/link'
import { skillGroups } from '../../lib/portfolio'

export const metadata: Metadata = { title: 'Technical Skills | Jyoti Verma', description: 'Frontend, application development, data, and developer tools used by Jyoti Verma.' }

export default function SkillsPage() {
  return (
    <main id="top" className="page-main inner-page">
      <section className="page-intro"><p className="eyebrow">What I work with</p><h1>A practical <span>toolkit.</span></h1><p className="page-lede">Technologies and tools I use across frontend application work, integrations, and everyday development.</p></section>
      <section className="skills-container skills-page-grid">
        {skillGroups.map((group, index) => <article className="skill-box" key={group.title}><span className="skill-number">0{index + 1}</span><h2>{group.title}</h2><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}
      </section>
      <section className="page-note"><p className="eyebrow">How I use them</p><p>My focus is on responsive interfaces, reusable UI, API integration, and keeping application flows clear for the people using them.</p><Link href="/projects" className="text-link">See these skills in projects <span aria-hidden="true">↗</span></Link></section>
    </main>
  )
}
