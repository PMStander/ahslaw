import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TrackedPhoneLink from './TrackedPhoneLink'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      navigate('/thank-you')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <section
      id="contact"
      style={{ background: '#050505', padding: '100px 5% 60px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '64px' }}>
          <p
            style={{
              color: '#d2ae6d',
              fontFamily: 'Lato, sans-serif',
              fontSize: '12px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Get in touch
          </p>
          <h2
            style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              margin: '0 0 16px 0',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Contact Us
          </h2>
          <div style={{ width: '60px', height: '2px', background: '#d2ae6d' }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Contact Form */}
          <div>
            <h3
              style={{
                color: '#fff',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '28px',
                letterSpacing: '1px',
              }}
            >
              Send us a message
            </h3>

            {(
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: true },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+27 xx xxx xxxx', required: false },
                ].map(field => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      style={{
                        display: 'block',
                        color: 'rgba(255,255,255,0.6)',
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '11px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.id]}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        background: '#0d0d0d',
                        border: '1px solid rgba(210,174,109,0.2)',
                        borderRadius: '2px',
                        color: '#fff',
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '14px',
                        padding: '12px 16px',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(210,174,109,0.7)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(210,174,109,0.2)')}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.6)',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your legal matter..."
                    required
                    value={form.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      background: '#0d0d0d',
                      border: '1px solid rgba(210,174,109,0.2)',
                      borderRadius: '2px',
                      color: '#fff',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '14px',
                      padding: '12px 16px',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(210,174,109,0.7)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(210,174,109,0.2)')}
                  />
                </div>

                {status === 'error' && (
                  <p
                    style={{
                      color: '#e07070',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '13px',
                      margin: 0,
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    background: '#d2ae6d',
                    color: '#000',
                    border: 'none',
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    padding: '16px 36px',
                    borderRadius: '40px',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    alignSelf: 'flex-start',
                    opacity: status === 'sending' ? 0.6 : 1,
                    transition: 'background 0.2s, opacity 0.2s',
                  }}
                  onMouseEnter={e => { if (status !== 'sending') e.target.style.background = '#c9a25a' }}
                  onMouseLeave={e => (e.target.style.background = '#d2ae6d')}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h3
              style={{
                color: '#fff',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '28px',
                letterSpacing: '1px',
              }}
            >
              Our Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Office */}
              <ContactBlock
                label="Office"
                lines={[
                  <TrackedPhoneLink
                    key="phone"
                    phone="0129912875"
                    label="Call AHS Law office on 012 991 2875"
                    style={linkStyle}
                  >
                    012 991 2875
                  </TrackedPhoneLink>,
                  <a key="email" href="mailto:rs@ahslaw.co.za" style={linkStyle}>rs@ahslaw.co.za</a>,
                ]}
              />

              {/* Address */}
              <ContactBlock
                label="Address"
                lines={[
                  <a
                    key="address"
                    href="https://maps.google.com/?q=63+Ingersol+Rd,+Lynnwood+Glen,+Pretoria,+0081"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    63 Ingersol Rd<br />Lynnwood Glen<br />Pretoria, 0081
                  </a>,
                ]}
              />

              {/* Urgent Bail Line */}
              <div
                style={{
                  background: 'rgba(210,174,109,0.06)',
                  border: '1px solid rgba(210,174,109,0.3)',
                  borderRadius: '4px',
                  padding: '24px',
                }}
              >
                <p
                  style={{
                    color: '#d2ae6d',
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    margin: '0 0 12px 0',
                    fontWeight: 700,
                  }}
                >
                  Urgent Bail Line
                </p>
                <TrackedPhoneLink
                  phone="0798981454"
                  label="Call urgent bail number 079 898 1454"
                  style={{ ...linkStyle, display: 'block', fontSize: '18px', marginBottom: '6px', fontWeight: 700 }}
                >
                  079 898 1454
                </TrackedPhoneLink>
                <TrackedPhoneLink
                  phone="0798404717"
                  label="Call urgent bail number 079 840 4717"
                  style={{ ...linkStyle, display: 'block', fontSize: '18px', fontWeight: 700 }}
                >
                  079 840 4717
                </TrackedPhoneLink>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.68)',
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '12px',
                    margin: '10px 0 0 0',
                  }}
                >
                  Available 24/7 for emergency bail applications
                </p>
              </div>

              {/* Quick Links */}
              <ContactBlock
                label="Quick Links"
                lines={[
                  <a key="home" href="#home" style={navLinkStyle}>Home</a>,
                  <a key="about" href="#about" style={navLinkStyle}>About</a>,
                  <a key="services" href="#services" style={navLinkStyle}>Services</a>,
                  <a key="process" href="#process" style={navLinkStyle}>How We Work</a>,
                  <a key="team" href="#team" style={navLinkStyle}>Our Team</a>,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const linkStyle = {
  color: 'rgba(255,255,255,0.75)',
  textDecoration: 'none',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '15px',
  transition: 'color 0.2s',
}

const navLinkStyle = {
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '13px',
  letterSpacing: '1px',
  display: 'block',
  marginBottom: '8px',
  transition: 'color 0.2s',
}

function ContactBlock({ label, lines }) {
  return (
    <div>
      <p
        style={{
          color: '#d2ae6d',
          fontFamily: 'Lato, sans-serif',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          margin: '0 0 12px 0',
          fontWeight: 700,
        }}
      >
        {label}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {lines}
      </div>
    </div>
  )
}
