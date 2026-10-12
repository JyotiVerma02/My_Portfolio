import Link from 'next/link'

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="logo">Jyoti<span>.</span></Link>
            <p className="footer-tagline">Interfaces with intent.<br /><span>Experiences built for people.</span></p>
            <div className="footer-social">
              <a href="https://github.com/JyotiVerma02" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">&rarr;</span></a>
              <a href="https://linkedin.com/in/jyoti-verma-2933442a3" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">&rarr;</span></a>
              <a href="mailto:jyotiverma.feb9@gmail.com">Email <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <span className="footer-label">Explore</span>
            {footerLinks.map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}
          </nav>

          <a className="footer-top-link" href="#top"><span>Back to top</span><span aria-hidden="true">&uarr;</span></a>
        </div>

        <div className="footer-bottom"><span>&copy; {new Date().getFullYear()} Jyoti Verma</span><span>Built with Next.js</span></div>
      </div>
    </footer>
  )
}
