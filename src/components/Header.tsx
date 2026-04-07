import { useEffect, useState } from 'react'

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

  return (
    <header id="nav" className={scrolled ? 'scrolled' : ''}>
      <a className="logo" href="#hero">
        <LogoSvg />
        Абріс<em>Рей</em>
      </a>
      <nav>
        <ul id="nav-menu" className={menuOpen ? 'open' : ''}>
          <li><a href="#about" onClick={closeMenu}>Про нас</a></li>
          <li><a href="#services" onClick={closeMenu}>Послуги</a></li>
          <li><a href="#equipment" onClick={closeMenu}>Обладнання</a></li>
          <li><a href="#process" onClick={closeMenu}>Як ми працюємо</a></li>
          <li><a href="#contact" onClick={closeMenu}>Контакти</a></li>
        </ul>
      </nav>
      <a className="nav-cta" href="#contact">Отримати консультацію</a>
      <button className="burger" onClick={toggleMenu} aria-label="Меню">
        <span /><span /><span />
      </button>
    </header>
  )
}
