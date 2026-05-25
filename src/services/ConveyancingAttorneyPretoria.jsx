import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CriminalBailPretoria.css'

const GOLD = '#c9a25a'
const GOLD_LIGHT = '#d2ae6d'
const CANONICAL_URL = 'https://www.ahslaw.co.za/services/conveyancing-attorney-pretoria'

const faqs = [
  {
    question: 'What does a conveyancing attorney in Pretoria do?',
    answer:
      'A conveyancing attorney prepares and manages the legal transfer of property ownership, coordinates transfer duty and clearance certificates, prepares deeds office documents, and attends to registration under the Deeds Registries Act 47 of 1937.',
  },
  {
    question: 'Which laws affect a property transfer in South Africa?',
    answer:
      'Common statutes include the Alienation of Land Act 68 of 1981 for written sale agreements, the Deeds Registries Act 47 of 1937 for deeds office registration, the Transfer Duty Act 40 of 1949 for transfer duty, the Financial Intelligence Centre Act 38 of 2001 for client identification and compliance checks, and the Sectional Titles Act 95 of 1986 where sectional title property is involved.',
  },
  {
    question: 'How long does a property transfer usually take?',
    answer:
      'A straightforward property transfer often takes about eight to twelve weeks from instruction, but timing depends on bond approval or cancellation, municipal or levy clearance, transfer duty, linked transfers, signed documents, and deeds office examination.',
  },
  {
    question: 'What is the deeds office stage?',
    answer:
      'Once transfer documents, guarantees, clearances and transfer duty are ready, the conveyancer lodges the matter at the deeds office. Examiners check the documents before ownership can be registered.',
  },
]

const transferSupport = [
  'Residential property transfers in Pretoria and Pretoria East',
  'Sectional title transfers and body corporate levy clearance coordination',
  'Sale agreement checks before signature or transfer instruction',
  'Transfer duty, SARS receipt and exemption-document coordination',
  'Bond cancellation, bond registration and linked attorney liaison',
  'Deeds office lodgement, registration and post-registration finalisation',
]

const processSteps = [
  {
    title: 'Instruction and agreement review',
    detail:
      'The signed offer to purchase is checked for parties, property description, purchase price, suspensive conditions, occupation, fixtures, costs and dates. Written sale terms matter under the Alienation of Land Act 68 of 1981.',
  },
  {
    title: 'Compliance, clearances and transfer duty',
    detail:
      'FICA documents, municipal rates, levy or HOA clearance, guarantees and transfer duty requirements are coordinated before the matter can be prepared for lodgement.',
  },
  {
    title: 'Signature, lodgement and registration',
    detail:
      'Transfer documents are signed, the matter is lodged at the deeds office, examiners review the deeds, and registration follows once the linked matters and deeds office notes are clear.',
  },
]

const statutes = [
  {
    name: 'Deeds Registries Act 47 of 1937',
    detail:
      'sets the statutory framework for deeds registries, registration of real rights in land and the formal deeds office process used to transfer ownership.',
  },
  {
    name: 'Alienation of Land Act 68 of 1981',
    detail:
      'requires sales of land to be recorded in a written agreement signed by the parties or their authorised agents, making the offer to purchase a critical transfer document.',
  },
  {
    name: 'Transfer Duty Act 40 of 1949',
    detail:
      'regulates transfer duty on property transactions and the SARS process that must usually be addressed before registration can proceed.',
  },
  {
    name: 'Financial Intelligence Centre Act 38 of 2001',
    detail:
      'requires accountable institutions to verify client identity and manage compliance checks, which is why FICA documents are requested early in the transfer.',
  },
  {
    name: 'Sectional Titles Act 95 of 1986',
    detail:
      'is relevant where the property forms part of a sectional title scheme and additional scheme, body corporate or levy-clearance issues need to be coordinated.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Conveyancing Attorney in Pretoria',
  serviceType: 'Property transfer, conveyancing and deeds office lodgement',
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
      name: 'Conveyancing Attorney in Pretoria',
      item: CANONICAL_URL,
    },
  ],
}

export default function ConveyancingAttorneyPretoria() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>Conveyancing Attorney Pretoria | Property Transfer | AHS Law</title>
        <meta
          name="description"
          content="AHS Law assists with conveyancing attorney Pretoria services, property transfer, transfer duty, sectional title transfers and deeds office lodgement in Pretoria and Gauteng."
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content="Conveyancing Attorney Pretoria | Property Transfer | AHS Law" />
        <meta
          property="og:description"
          content="Authoritative, accessible conveyancing guidance for Pretoria property transfers, transfer duty, clearance certificates and deeds office registration."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.ahslaw.co.za/img/about.jpg" />
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
            <p style={eyebrowStyle}>Pretoria property transfers</p>
            <h1 style={heroTitleStyle}>Conveyancing Attorney in Pretoria</h1>
            <p style={heroCopyStyle}>
              Buying or selling property is document-heavy, deadline-driven and registration-dependent.
              AHS Law assists Pretoria clients with property transfer, transfer duty, clearance coordination
              and deeds office lodgement from instruction to registration.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '34px' }}>
              <a href="tel:0129912875" style={primaryButtonStyle}>Call AHS Law</a>
              <a href="/#contact" style={secondaryButtonStyle}>Ask about a transfer</a>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Conveyancing attorney Pretoria</p>
              <h2 style={sectionTitleStyle}>Property transfer handled carefully from offer to registration</h2>
              <p style={bodyTextStyle}>
                A conveyancing matter is not only paperwork. The sale agreement, bond position, municipal
                clearance, transfer duty, compliance certificates and deeds office requirements all affect
                timing and risk. AHS Law gives buyers, sellers and agents a clear transfer process.
              </p>
              <p style={bodyTextStyle}>
                For connected matters, AHS Law also assists with <a href="/#services" style={textLinkStyle}>broader legal services</a>,
                {' '}<Link to="/services/civil-litigation-attorney-pretoria" style={textLinkStyle}>property disputes</Link>,
                {' '}<Link to="/services/eviction-attorney-pretoria" style={textLinkStyle}>eviction matters</Link>,
                {' '}and <Link to="/blog/community-of-property-vs-accrual" style={textLinkStyle}>marital property consequences</Link>.
              </p>
            </div>

            <aside style={panelStyle}>
              <p style={panelLabelStyle}>Pretoria office</p>
              <p style={{ ...bodyTextStyle, marginBottom: '14px' }}>
                AHS Law is based at 63 Ingersol Rd, Lynnwood Glen, Pretoria, and assists with conveyancing
                and property transfer matters across Pretoria, Pretoria East and Gauteng.
              </p>
              <a href="tel:0129912875" style={phoneStyle}>012 991 2875</a>
              <a href="/#contact" style={textLinkStyle}>Request a conveyancing consultation →</a>
            </aside>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#050505' }}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Property transfer support</p>
              <h2 style={sectionTitleStyle}>What AHS Law can assist with</h2>
              <p style={bodyTextStyle}>
                Each transfer is fact-specific. The aim is to identify the required documents early, prevent
                avoidable delays and keep all linked parties aligned before deeds office lodgement.
              </p>
            </div>
            <div style={checklistGridStyle}>
              {transferSupport.map(item => (
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
              <p style={eyebrowStyle}>Transfer process</p>
              <h2 style={sectionTitleStyle}>A practical route to deeds office registration</h2>
              <p style={bodyTextStyle}>
                A conveyancing attorney should give parties a realistic view of what must happen before
                registration. AHS Law focuses on the legal documents, compliance checks and third-party
                dependencies that typically control the timeline.
              </p>
            </div>
            <div style={checklistGridStyle}>
              {processSteps.map(item => (
                <article key={item.title} style={faqStyle}>
                  <h3 style={faqQuestionStyle}>{item.title}</h3>
                  <p style={{ ...bodyTextStyle, margin: 0 }}>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#050505' }}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Statutory framework</p>
              <h2 style={sectionTitleStyle}>South African statutes that often shape property transfer</h2>
              <p style={bodyTextStyle}>
                These statutes are common legal reference points in conveyancing matters. The correct advice
                depends on the agreement, title deed, parties, property type and transfer history.
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

        <section style={sectionStyle}>
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            <p style={eyebrowStyle}>Common questions</p>
            <h2 style={sectionTitleStyle}>Conveyancing and property transfer FAQs</h2>
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
            <h2 style={sectionTitleStyle}>Need help with a Pretoria property transfer?</h2>
            <p style={{ ...bodyTextStyle, margin: '0 auto 30px' }}>
              Contact AHS Law with the signed offer to purchase, title deed details if available, bond
              information and any deadlines. The team can help you understand the next legal step.
            </p>
            <a href="/#contact" style={primaryButtonStyle}>Contact AHS Law</a>
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
