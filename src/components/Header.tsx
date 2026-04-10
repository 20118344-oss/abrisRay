import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LogoSvg = () => (
  <svg viewBox="0 0 34 34" fill="none">
    <circle cx="17" cy="17" r="6.5" fill="url(#nLg)" />
    <g stroke="url(#nLg)" strokeWidth="1.8" strokeLinecap="round">
      <line x1="17" y1="1.5" x2="17" y2="6" />
      <line x1="17" y1="28" x2="17" y2="32.5" />
      <line x1="1.5" y1="17" x2="6" y2="17" />
      <line x1="28" y1="17" x2="32.5" y2="17" />
      <line x1="5.5" y1="5.5" x2="8.8" y2="8.8" />
      <line x1="25.2" y1="25.2" x2="28.5" y2="28.5" />
      <line x1="28.5" y1="5.5" x2="25.2" y2="8.8" />
      <line x1="8.8" y1="25.2" x2="5.5" y2="28.5" />
    </g>
    <defs>
      <linearGradient id="nLg" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f5a623" />
        <stop offset="1" stopColor="#ff6b2b" />
      </linearGradient>
    </defs>
  </svg>
)

const navItems = [
  { href: '#about', label: 'Про нас' },
  { href: '#services', label: 'Послуги' },
  { href: '#equipment', label: 'Обладнання' },
  { href: '#process', label: 'Як ми працюємо' },
  { href: '#contact', label: 'Контакти' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const handleNavClick = (href: string) => {
    closeMenu()
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <header id="nav" className={scrolled ? 'scrolled' : ''}>
        <a className="logo" href="#hero">
          <LogoSvg />
          Абріс<em>Рей</em>
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA — hidden on mobile via CSS */}
        <a className="nav-cta" href="#contact">Отримати консультацію</a>

        {/* Burger button */}
        <button className="burger" onClick={toggleMenu} aria-label="Меню">
          <Menu className="w-6 h-6" style={{ color: 'var(--text)' }} />
        </button>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'mobile-menu-overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Закрити меню">
          <X className="w-6 h-6" style={{ color: 'var(--text)' }} />
        </button>

        {/* Nav items */}
        <nav className="mobile-menu-nav">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA inside menu */}
        <a
          className="mobile-menu-cta"
          href="#contact"
          style={{ transitionDelay: menuOpen ? `${navItems.length * 60}ms` : '0ms' }}
          onClick={() => handleNavClick('#contact')}
        >
          Отримати консультацію
        </a>
      </div>
    </>
  )
}
