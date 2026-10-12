'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        closeMenu()
        menuToggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link href="/" className="logo" onClick={closeMenu}>Jyoti<span>.</span></Link>
        <button ref={menuToggleRef} className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
        <ul id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          {links.map(({ href, label }) => (
            <li key={href} className={pathname === href || (href === '/projects' && pathname.startsWith('/projects/')) ? 'active' : ''}>
              <Link href={href} aria-current={pathname === href ? 'page' : undefined} onClick={closeMenu}>{label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="header-cta" onClick={closeMenu}>Let&apos;s talk <span aria-hidden="true">&rarr;</span></Link>
      </nav>
    </header>
  )
}
