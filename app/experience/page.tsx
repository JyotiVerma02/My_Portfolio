import type { Metadata } from 'next'
import Link from 'next/link'
import { experience } from '../../lib/portfolio'

export const metadata: Metadata = { title: 'Experience | Jyoti Verma', description: 'Professional experience of Jyoti Verma as a frontend developer.' }

export default function ExperiencePage() {
  return (
    <main id="top" className="page-main inner-page">
      <section className="page-intro"><p className="eyebrow">Where I&apos;ve been</p><h1>Experience in <span>practice.</span></h1><p className="page-lede">A focused record of the work and collaboration behind the interfaces I build.</p></section>
      <section className="experience-box experience-page-card"><div className="experience-date"><span className="timeline-dot" />{experience.dates}</div><div className="experience-details"><p className="experience-company">{experience.company}</p><h2>{experience.role}</h2><p className="experience-summary">{experience.summary}</p><ul>{experience.contributions.map((item) => <li key={item}>{item}</li>)}</ul><div className="experience-tags"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>Firebase</span><span>Git &amp; GitHub</span></div></div></section>
      <section className="page-note"><p className="eyebrow">Areas of contribution</p><p>Production application development, reusable interface components, REST API and Firebase integration, responsive implementation, and collaborative delivery.</p><Link href="/contact" className="text-link">Get in touch <span aria-hidden="true">↗</span></Link></section>
    </main>
  )
}
