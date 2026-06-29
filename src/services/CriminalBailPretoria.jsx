import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrackedPhoneLink from '../components/TrackedPhoneLink'
import './CriminalBailPretoria.css'

const GOLD = '#c9a25a'
const GOLD_LIGHT = '#d2ae6d'
const CANONICAL_URL = 'https://www.ahslaw.co.za/services/criminal-lawyer-pretoria-bail'

const faqs = [
  {
    question: 'What should I do first if someone is arrested in Pretoria?',
    answer:
      'Find out which police station or court is involved, the arrested person\'s full name, and the charge if it is known. Do not guess or argue about the facts over the phone. Ask for legal assistance quickly so bail options, rights, and time limits can be handled properly.',
  },
  {
    question: 'Can AHS Law assist with bail after hours?',
    answer:
      'AHS Law lists urgent bail contact numbers for emergency bail applications. Availability depends on the court, police station, and facts of the matter, but early contact gives the attorney more time to prepare the required information.',
  },
  {
    question: 'What information helps with a bail application?',
    answer:
      'Useful information includes the person\'s ID number, address, employment details, medical needs, family contact details, previous convictions if any, the police station or court, and any charge or case number already provided.',
  },
  {
    question: 'Do I have to make a statement before speaking to a lawyer?',
    answer:
      'You have the right to remain silent and the right to legal representation. It is usually safer to get legal advice before making a statement, especially where the facts are disputed or the charge is serious.',
  },
]

const checklist = [
  'Full name and ID number of the arrested person',
  'Police station, holding cells, or court where they are being held',
  'Charge, case number, or reason for arrest if known',
  'Contact details for a family member or employer',
  'Proof of address, employment, and medical needs where available',
  'Any court date, warning, or document already received',
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Criminal Lawyer and Bail Attorney in Pretoria',
  serviceType: 'Criminal defence and bail applications',
  areaServed: ['Pretoria', 'Pretoria East', 'Lynnwood Glen', 'Faerie Glen', 'Gauteng'],
  provider: {
    '@type': 'LegalService',
    '@id': 'https://www.ahslaw.co.za/#legalservice',
    name: 'AH Stander & Agenbag Inc',
    url: 'https://www.ahslaw.co.za/',
    telephone: '+27 12 991 2875',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '63 Ingersol Rd, Lynnwood Glen',
      addressLocality: 'Pretoria',
      postalCode: '0081',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'ZAR',
    },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.ahslaw.co.za/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.ahslaw.co.za/#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Criminal Lawyer and Bail Attorney in Pretoria',
      item: CANONICAL_URL,
    },
  ],
}

export default function CriminalBailPretoria() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>Criminal Lawyer &amp; Bail Attorney Pretoria | AHS Law</title>
        <meta
          name="description"
          content="AHS Law assists with urgent bail applications and criminal defence in Pretoria, Pretoria East, Lynnwood Glen, Faerie Glen, and Gauteng courts."
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content="Criminal Lawyer & Bail Attorney Pretoria | AHS Law" />
        <meta
          property="og:description"
          content="Urgent bail applications, police bail, court bail, trial representation, appeals, and reviews for clients in Pretoria and Gauteng."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.ahslaw.co.za/img/criminal-law.png" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <section
          style={{
            minHeight: '68vh',
            padding: '150px 5% 76px',
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.82) 48%, rgba(0,0,0,0.5) 100%), url(/img/ah-stander.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto', width: '100%' }}>
            <p style={eyebrowStyle}>Pretoria criminal defence</p>
            <h1 style={heroTitleStyle}>Criminal Lawyer and Bail Attorney in Pretoria</h1>
            <p style={heroCopyStyle}>
              When someone is arrested, the first hours matter. AHS Law assists with urgent bail
              applications, police bail, court bail, trial representation, appeals, and reviews
              across Pretoria and Gauteng.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '34px' }}>
              <TrackedPhoneLink
                phone="0798981454"
                label="Call urgent bail line on 079 898 1454"
                style={primaryButtonStyle}
              >
                Call urgent bail line
              </TrackedPhoneLink>
              <a href="/#contact" style={secondaryButtonStyle}>Send a confidential enquiry</a>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Immediate steps</p>
              <h2 style={sectionTitleStyle}>What to do after an arrest</h2>
              <p style={bodyTextStyle}>
                Stay calm, confirm where the person is being held, and avoid sending incomplete
                facts across multiple people. The attorney needs accurate information quickly:
                the police station, charge if known, court date, and contact details for the
                family or employer.
              </p>
              <p style={bodyTextStyle}>
                AHS Law helps clients understand bail options, rights during detention, and the
                practical process that follows an arrest. For a plain-language rights overview,
                read the <Link to="/blog/your-rights-when-arrested-south-africa" style={textLinkStyle}>arrest rights guide</Link>.
              </p>
            </div>

            <aside style={panelStyle}>
              <p style={panelLabelStyle}>Urgent bail numbers</p>
              <TrackedPhoneLink
                phone="0798981454"
                label="Call urgent bail number 079 898 1454"
                style={phoneStyle}
              >
                079 898 1454
              </TrackedPhoneLink>
              <TrackedPhoneLink
                phone="0798404717"
                label="Call urgent bail number 079 840 4717"
                style={phoneStyle}
              >
                079 840 4717
              </TrackedPhoneLink>
              <p style={{ ...bodyTextStyle, fontSize: '13px', marginTop: '18px' }}>
                Office:{' '}
                <TrackedPhoneLink
                  phone="0129912875"
                  label="Call AHS Law office on 012 991 2875"
                  style={textLinkStyle}
                >
                  012 991 2875
                </TrackedPhoneLink>
              </p>
            </aside>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#050505' }}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Bail checklist</p>
              <h2 style={sectionTitleStyle}>Information to collect before calling</h2>
              <p style={bodyTextStyle}>
                You do not need everything before asking for help, but the details below help the
                attorney move faster and prepare the bail position properly.
              </p>
            </div>
            <div style={checklistGridStyle}>
              {checklist.map(item => (
                <div key={item} style={checkItemStyle}>
                  <span style={{ color: GOLD, fontSize: '12px' }}>▸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            <p style={eyebrowStyle}>Common questions</p>
            <h2 style={sectionTitleStyle}>Pretoria bail and criminal defence FAQs</h2>
            <div style={{ display: 'grid', gap: '18px', marginTop: '34px' }}>
              {faqs.map(faq => (
                <article key={faq.question} style={faqStyle}>
                  <h3 style={faqQuestionStyle}>{faq.question}</h3>
                  <p style={{ ...bodyTextStyle, margin: 0 }}>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#050505', textAlign: 'center' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={eyebrowStyle}>Confidential consultation</p>
            <h2 style={sectionTitleStyle}>Need help with a criminal matter in Pretoria?</h2>
            <p style={{ ...bodyTextStyle, margin: '0 auto 30px' }}>
              Contact AHS Law with the facts you have. The team will help you understand the next
              step, the risks, and the documents or information needed.
            </p>
            <TrackedPhoneLink
              phone="0798981454"
              label="Call AHS Law urgent bail line on 079 898 1454"
              style={primaryButtonStyle}
            >
              Call urgent bail line
            </TrackedPhoneLink>
          </div>
        </section>
      </main>

      <div className="mobile-bail-call-bar" aria-label="Urgent bail call options">
        <span className="mobile-bail-call-bar__text">Urgent bail help</span>
        <TrackedPhoneLink
          phone="0798981454"
          label="Call urgent bail line on 079 898 1454"
          className="mobile-bail-call-bar__button"
        >
          Call 079 898 1454
        </TrackedPhoneLink>
      </div>

      <Footer />
    </div>
  )
}

const eyebrowStyle = {
  color: GOLD_LIGHT,
  fontFamily: 'Lato, sans-serif',
  fontSize: '11px',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  margin: '0 0 16px',
}

const heroTitleStyle = {
  color: '#fff',
  fontFamily: 'Raleway, sans-serif',
  fontSize: 'clamp(36px, 7vw, 72px)',
  fontWeight: 300,
  lineHeight: 1.08,
  letterSpacing: '0',
  maxWidth: '840px',
  margin: 0,
}

const heroCopyStyle = {
  color: 'rgba(255,255,255,0.72)',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '17px',
  lineHeight: 1.8,
  maxWidth: '720px',
  margin: '28px 0 0',
}

const sectionStyle = {
  padding: '86px 5%',
  background: '#000',
}

const contentGridStyle = {
  maxWidth: '1180px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.35fr) minmax(280px, 0.65fr)',
  gap: '48px',
  alignItems: 'start',
}

const sectionTitleStyle = {
  color: '#fff',
  fontFamily: 'Raleway, sans-serif',
  fontSize: 'clamp(28px, 4vw, 44px)',
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: '0',
  margin: '0 0 22px',
}

const bodyTextStyle = {
  color: 'rgba(255,255,255,0.68)',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '15px',
  lineHeight: 1.8,
  margin: '0 0 18px',
}

const primaryButtonStyle = {
  display: 'inline-block',
  background: GOLD,
  color: '#000',
  fontFamily: 'Lato, sans-serif',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  padding: '15px 24px',
  textDecoration: 'none',
}

const secondaryButtonStyle = {
  display: 'inline-block',
  border: `1px solid ${GOLD}`,
  color: GOLD_LIGHT,
  fontFamily: 'Lato, sans-serif',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  padding: '14px 24px',
  textDecoration: 'none',
}

const textLinkStyle = {
  color: GOLD_LIGHT,
  textDecoration: 'none',
}

const panelStyle = {
  background: '#0a0a0a',
  border: '1px solid rgba(201,162,90,0.28)',
  borderRadius: '4px',
  padding: '30px',
}

const panelLabelStyle = {
  color: GOLD,
  fontFamily: 'Lato, sans-serif',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '2.5px',
  textTransform: 'uppercase',
  margin: '0 0 18px',
}

const phoneStyle = {
  display: 'block',
  color: '#fff',
  fontFamily: 'Raleway, sans-serif',
  fontSize: '24px',
  fontWeight: 600,
  textDecoration: 'none',
  marginBottom: '12px',
}

const checklistGridStyle = {
  display: 'grid',
  gap: '14px',
}

const checkItemStyle = {
  display: 'flex',
  gap: '12px',
  alignItems: 'flex-start',
  background: '#0a0a0a',
  border: '1px solid rgba(201,162,90,0.16)',
  color: 'rgba(255,255,255,0.72)',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  lineHeight: 1.6,
  padding: '16px',
}

const faqStyle = {
  background: '#0a0a0a',
  border: '1px solid rgba(201,162,90,0.16)',
  borderRadius: '4px',
  padding: '24px',
}

const faqQuestionStyle = {
  color: '#fff',
  fontFamily: 'Raleway, sans-serif',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: 1.4,
  margin: '0 0 10px',
}
