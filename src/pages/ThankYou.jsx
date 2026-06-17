import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function ThankYou() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', { send_to: 'AW-18244816230' })
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Thank You | AHS Law</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div style={{
        minHeight: '100vh',
        background: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 5%',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px' }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
          <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>
            Message received
          </h1>
          <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
            Thank you for contacting AHS Law. One of our attorneys will be in touch with you shortly.
          </p>
          <p style={{ color: '#aaa', fontSize: '1rem', marginBottom: '40px' }}>
            If your matter is urgent, please call us directly on{' '}
            <a href="tel:0798981454" style={{ color: '#c9a84c', textDecoration: 'none' }}>
              079 898 1454
            </a>
            .
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              background: '#c9a84c',
              color: '#050505',
              padding: '14px 32px',
              borderRadius: '4px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  )
}
