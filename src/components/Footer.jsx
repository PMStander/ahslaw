export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#000',
        borderTop: '1px solid rgba(210,174,109,0.15)',
        padding: '32px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ textDecoration: 'none' }}>
        <img src="/img/logo.png" alt="AH Stander & Agenbag Inc." style={{ height: '40px', width: 'auto' }} />
      </a>

      {/* Copyright */}
      <p
        style={{
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '12px',
          margin: 0,
          textAlign: 'center',
        }}
      >
        &copy; {year} AH Stander &amp; Agenbag Inc. All rights reserved.
      </p>

      {/* Links */}
      <div style={{ display: 'flex', gap: '24px' }}>
        {['Home', 'Services', 'Team', 'Contact'].map(label => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            style={{
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              fontFamily: 'Lato, sans-serif',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.target.style.color = '#d2ae6d')}
            onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.4)')}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
