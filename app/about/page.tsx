import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Jyoti Verma',
  description: 'Meet Jyoti Verma, a frontend developer in Gurugram building clear, responsive web experiences with React and Next.js.',
}

const strengths = ['Responsive interfaces', 'Reusable components', 'REST API integration', 'Firebase', 'TypeScript']

export default function AboutPage() {
  return (
    <main id="top" className="page-main inner-page about-route">
      <section className="page-intro about-intro">
        <p className="eyebrow"><span className="availability-dot" aria-hidden="true" /> A little introduction</p>
        <h1>Thoughtful interfaces,<br /><span>built with care.</span></h1>
        <p className="page-lede">I&apos;m Jyoti Verma, a frontend developer in Gurugram, India. I turn product needs into responsive web experiences that feel clear, useful, and dependable.</p>
      </section>

      <section className="about-page-grid" aria-label="About Jyoti">
        <article className="editorial-copy about-story">
          <p className="eyebrow">My approach</p>
          <h2>Good frontend work makes complex things feel simple.</h2>
          <p>I build web applications with React, Next.js, TypeScript, and Tailwind CSS. I enjoy shaping a feature from its first layout through the details that make it work well on different screens and feel natural to use.</p>
          <p>My work includes building reusable UI, connecting interfaces to REST APIs and Firebase services, and refining responsive behavior and performance. I care about code that is easy for a team to understand and extend, as well as the small visual details that make a product feel cohesive.</p>
          <p>I currently work at Webshlok Digital Services LLP, contributing to production applications with an Agile team. Collaborating across a project helps me keep the user experience, implementation, and product requirements moving together.</p>
          <div className="about-strengths" aria-label="Areas of focus">
            {strengths.map((strength) => <span key={strength}>{strength}</span>)}
          </div>
        </article>

        <aside className="about-aside clay-card">
          <div className="about-aside-top"><span className="aside-symbol" aria-hidden="true">✳</span><span className="about-card-index">01 / PROFILE</span></div>
          <p className="about-card-title">Frontend developer<br /><strong>with a product mindset.</strong></p>
          <dl className="about-facts">
            <div><dt>Based in</dt><dd>Gurugram, India</dd></div>
            <div><dt>Working with</dt><dd>React · Next.js · TypeScript</dd></div>
            <div><dt>Experience</dt><dd>Webshlok Digital Services LLP</dd></div>
          </dl>
          <Link href="/experience" className="text-link">Explore my experience <span aria-hidden="true">↗</span></Link>
        </aside>
      </section>

      <section className="about-education" aria-labelledby="education-title">
        <div className="about-section-heading"><p className="eyebrow">Learning and foundations</p><h2 id="education-title">Education</h2></div>
        <div className="education-grid">
          <article className="education-card clay-card"><span className="education-year">2023 — 2025</span><h3>Master of Computer Applications</h3><p>K.R. Mangalam University</p><span className="education-location">Sohna, Haryana</span></article>
          <article className="education-card clay-card"><span className="education-year">2017 — 2020</span><h3>B.Sc. Mathematics (Honours)</h3><p>Rajendra Memorial Women&apos;s College</p><span className="education-location">Bihar, India</span></article>
        </div>
      </section>

      <section className="page-next"><p className="eyebrow">Keep exploring</p><div><Link href="/skills" className="next-link">Technical skills <span aria-hidden="true">↗</span></Link><Link href="/projects" className="next-link">Selected projects <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
