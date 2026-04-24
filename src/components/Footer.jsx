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

      {/* Social links */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {[
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/ahstander',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            ),
          },
          {
            label: 'Instagram',
            href: 'https://www.instagram.com/ahsa_incorporated',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            ),
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/ah-stander-agenbag-inc',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
          },
        ].map(social => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            style={{
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#d2ae6d')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
