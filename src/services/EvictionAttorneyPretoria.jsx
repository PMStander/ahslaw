import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CriminalBailPretoria.css'

const GOLD = '#c9a25a'
const GOLD_LIGHT = '#d2ae6d'
const CANONICAL_URL = 'https://www.ahslaw.co.za/services/eviction-attorney-pretoria'

const faqs = [
  {
    question: 'Can a landlord evict someone in Pretoria without a court order?',
    answer:
      'No. In South Africa a residential occupier may not be removed without a court order. The PIE Act requires proper notice, service of papers, and a court decision that an eviction is just and equitable before removal can take place.',
  },
  {
    question: 'What is the PIE Act?',
    answer:
      'The Prevention of Illegal Eviction from and Unlawful Occupation of Land Act 19 of 1998, commonly called the PIE Act, regulates eviction from homes. It gives effect to section 26(3) of the Constitution, which protects people from eviction without an order of court after all relevant circumstances have been considered.',
  },
  {
    question: 'How long does an eviction application take?',
    answer:
      'Timing depends on the court roll, service of notices, whether the matter is opposed, and whether vulnerable occupiers or municipal reporting issues arise. AHS Law can assess the lease, notices and facts before giving a realistic process estimate.',
  },
  {
    question: 'What can I do if locks were changed or services were cut?',
    answer:
      'Changing locks, removing belongings or cutting essential services without a court order can expose a landlord to urgent legal action and potential criminal consequences. Get advice quickly and keep evidence such as photos, messages, receipts and witness details.',
  },
]

const processSteps = [
  'Review the lease, cancellation notice, arrears record and occupation facts',
  'Confirm whether the occupier is unlawful and whether urgent relief is justified',
  'Prepare the eviction application and PIE Act notices for proper service',
  'Place the matter before the appropriate court and deal with opposition or settlement',
  'Obtain and enforce the court order through lawful sheriff-assisted steps',
]

const statutes = [
  {
    name: 'Constitution of the Republic of South Africa, 1996',
    detail:
      'section 26(3) states that no one may be evicted from their home or have their home demolished without an order of court made after considering all relevant circumstances.',
  },
  {
    name: 'Prevention of Illegal Eviction from and Unlawful Occupation of Land Act 19 of 1998',
    detail:
      'the PIE Act governs residential eviction applications, including notice, service, court oversight and the just-and-equitable enquiry.',
  },
  {
    name: 'Rental Housing Act 50 of 1999',
    detail:
      'regulates landlord and tenant relationships and recognises the Rental Housing Tribunal process for unfair practices in residential leases.',
  },
  {
    name: 'Magistrates\' Courts Act 32 of 1944 and Superior Courts Act 10 of 2013',
    detail:
      'provide court frameworks that may apply depending on the forum, property, relief and jurisdictional facts of the eviction matter.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Eviction Attorney in Pretoria',
  serviceType: 'Eviction applications, PIE Act notices, landlord and tenant litigation',
  areaServed: ['Pretoria', 'Pretoria East', 'Lynnwood Glen', 'Faerie Glen', 'Gauteng'],
  provider: {
    '@type': 'LegalService',
    '@id': 'https://www.ahslaw.co.za/#legalservice',
    name: 'AH Stander & Agenbag Inc',
    alternateName: 'AHS Law',
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
      name: 'Eviction Attorney in Pretoria',
      item: CANONICAL_URL,
    },
  ],
}

export default function EvictionAttorneyPretoria() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>Eviction Attorney Pretoria | PIE Act Court Orders | AHS Law</title>
        <meta
          name="description"
          content="AHS Law assists landlords and occupiers in Pretoria with eviction applications, PIE Act notices, court orders and urgent unlawful eviction advice."
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content="Eviction Attorney Pretoria | PIE Act Court Orders | AHS Law" />
        <meta
          property="og:description"
          content="Authoritative Pretoria eviction advice for PIE Act notices, residential lease disputes, unlawful occupation and court order enforcement."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.ahslaw.co.za/img/litigation.png" />
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
              'linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.84) 48%, rgba(0,0,0,0.58) 100%), url(/img/about.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto', width: '100%' }}>
            <p style={eyebrowStyle}>Pretoria eviction law</p>
            <h1 style={heroTitleStyle}>Eviction Attorney in Pretoria</h1>
            <p style={heroCopyStyle}>
              Eviction disputes need lawful procedure, clear evidence and careful timing. AHS Law assists
              Pretoria landlords, property owners and occupiers with PIE Act notices, unlawful occupation,
              lease cancellation disputes, urgent unlawful eviction issues and court order enforcement.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '34px' }}>
              <a href="tel:0129912875" style={primaryButtonStyle}>Call AHS Law</a>
              <a href="/#contact" style={secondaryButtonStyle}>Send an eviction enquiry</a>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>PIE Act and court process</p>
              <h2 style={sectionTitleStyle}>A lawful eviction starts before the court date</h2>
              <p style={bodyTextStyle}>
                Residential eviction in South Africa is not a self-help remedy. Section 26(3) of the
                Constitution and the PIE Act require a court order before anyone may be evicted from a
                home. The court must consider the relevant circumstances before deciding whether eviction
                is just and equitable.
              </p>
              <p style={bodyTextStyle}>
                AHS Law helps prepare the matter properly from the start: lease terms, breach notices,
                cancellation, proof of ownership or authority, occupation facts, service of PIE notices and
                the evidence needed for a court to grant enforceable relief.
              </p>
            </div>

            <aside style={panelStyle}>
              <p style={panelLabelStyle}>Pretoria office</p>
              <p style={{ ...bodyTextStyle, marginBottom: '14px' }}>
                AHS Law is based at 63 Ingersol Rd, Lynnwood Glen, Pretoria, and assists with eviction
                and civil litigation matters across Pretoria, Pretoria East and surrounding areas.
              </p>
              <a href="tel:0129912875" style={phoneStyle}>012 991 2875</a>
              <a href="/#contact" style={textLinkStyle}>Request a consultation →</a>
            </aside>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#050505' }}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Court order pathway</p>
              <h2 style={sectionTitleStyle}>From lease breach to enforceable order</h2>
              <p style={bodyTextStyle}>
                The correct route depends on the facts: arrear rental, expiry or cancellation of a lease,
                refusal to vacate after sale or transfer, unlawful occupation, or an urgent interference
                with possession. Each step should be documented before papers are issued.
              </p>
              <p style={bodyTextStyle}>
                For landlords, the goal is a compliant application that can withstand scrutiny. For
                occupiers, the goal is to understand the papers, time periods, settlement options and any
                lawful defence. For a related warning on unlawful self-help, read AHS Law&apos;s guide on{' '}
                <Link to="/blog/pie-act-locks" style={textLinkStyle}>why landlords cannot just change the locks</Link>.
              </p>
            </div>
            <div style={checklistGridStyle}>
              {processSteps.map(item => (
                <div key={item} style={checkItemStyle}>
                  <span style={{ color: GOLD, fontSize: '12px' }}>▸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Statutory framework</p>
              <h2 style={sectionTitleStyle}>South African law that shapes eviction matters</h2>
              <p style={bodyTextStyle}>
                Eviction advice must be grounded in the statute and the forum. These are common reference
                points, but the correct strategy depends on the property, occupation history, documents and
                urgency of the dispute.
              </p>
            </div>
            <div style={checklistGridStyle}>
              {statutes.map(item => (
                <article key={item.name} style={faqStyle}>
                  <h3 style={faqQuestionStyle}>{item.name}</h3>
                  <p style={{ ...bodyTextStyle, margin: 0 }}>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#050505' }}>
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            <p style={eyebrowStyle}>Common questions</p>
            <h2 style={sectionTitleStyle}>Eviction attorney Pretoria FAQs</h2>
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

        <section style={{ ...sectionStyle, textAlign: 'center' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={eyebrowStyle}>Civil litigation support</p>
            <h2 style={sectionTitleStyle}>Need an eviction attorney in Pretoria?</h2>
            <p style={{ ...bodyTextStyle, margin: '0 auto 30px' }}>
              Contact AHS Law before issuing papers, changing locks, cutting services or responding to an
              eviction notice. The team can assess the documents and help you choose the next lawful step.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <a href="/#contact" style={primaryButtonStyle}>Contact AHS Law</a>
              <Link to="/services/divorce-lawyer-pretoria-east" style={secondaryButtonStyle}>View family law services</Link>
            </div>
          </div>
        </section>
      </main>

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
  maxWidth: '760px',
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
  gridTemplateColumns: 'minmax(0, 1.25fr) minmax(280px, 0.75fr)',
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
  lineHeight: 1.35,
  margin: '0 0 12px',
}
