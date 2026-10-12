import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Contact | Jyoti Verma', description: 'Contact Jyoti Verma about frontend development opportunities and projects.' }

export default function ContactPage() {
  return (
    <main id="top" className="page-main inner-page contact-page">
      <section className="contact contact-route"><p className="eyebrow">Have a project in mind?</p><h1>Let&apos;s make<br /><span>something useful.</span></h1><p className="contact-intro">I&apos;m open to conversations about frontend opportunities and interesting projects. The best way to reach me is by email.</p><a href="mailto:jyotiverma.feb9@gmail.com" className="contact-email">jyotiverma.feb9@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-items"><a href="https://linkedin.com/in/jyoti-verma-2933442a3" target="_blank" rel="noopener noreferrer" className="contact-item">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://github.com/JyotiVerma02" target="_blank" rel="noopener noreferrer" className="contact-item">GitHub <span aria-hidden="true">↗</span></a></div></section>
      <section className="contact-next"><p className="eyebrow">Before you go</p><p>See what I&apos;ve built or learn a little more about the way I work.</p><div><Link href="/projects" className="text-link">Browse projects <span aria-hidden="true">↗</span></Link><Link href="/about" className="text-link">About Jyoti <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
