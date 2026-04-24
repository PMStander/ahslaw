import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'background 0.4s ease',
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ textDecoration: 'none', lineHeight: 1 }}>
        <img src="/img/logo.png" alt="AH Stander & Agenbag Inc." style={{ height: '50px', width: 'auto' }} />
      </a>

      {/* Desktop Nav */}
      <ul
        style={{
          display: 'flex',
          gap: '28px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="nav-desktop"
      >
        {navLinks.map(link => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '12px',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 400,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = '#d2ae6d')}
              onMouseLeave={e => (e.target.style.color = '#fff')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: '1px solid #d2ae6d',
          color: '#d2ae6d',
          padding: '6px 10px',
          cursor: 'pointer',
          fontSize: '18px',
        }}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#0a0a0a',
            padding: '20px 40px',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '13px',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '1px solid rgba(210,174,109,0.15)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
