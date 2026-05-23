import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CriminalBailPretoria.css'

const GOLD = '#c9a25a'
const GOLD_LIGHT = '#d2ae6d'
const CANONICAL_URL = 'https://www.ahslaw.co.za/services/civil-litigation-attorney-pretoria'

const faqs = [
  {
    question: 'When should I speak to a civil litigation attorney in Pretoria?',
    answer:
      'Speak to an attorney as soon as a dispute looks likely to become formal. Early advice helps preserve evidence, check prescription time limits under the Prescription Act 68 of 1969, choose the correct court, and decide whether negotiation or urgent court action is appropriate.',
  },
  {
    question: 'Which court will hear my civil dispute?',
    answer:
      'The correct forum depends on the amount claimed, the type of relief, where the parties are based, and whether the Magistrates\' Courts Act 32 of 1944 or the Superior Courts Act 10 of 2013 is the appropriate jurisdictional framework. AHS Law assesses the facts before papers are issued.',
  },
  {
    question: 'Can a dispute be settled after summons or application papers are issued?',
    answer:
      'Yes. Many civil disputes settle after pleadings, discovery, exchange of documents, mediation, or focused negotiation. Settlement terms should be recorded carefully so the agreement is enforceable and does not create a new dispute.',
  },
  {
    question: 'What documents help in a civil litigation consultation?',
    answer:
      'Bring the contract, invoices, emails, WhatsApp messages, notices, previous court papers, proof of payment, photographs, and a timeline of key events. The attorney can then assess evidence, remedies, deadlines, and the likely court process.',
  },
]

const disputeTypes = [
  'Contractual disputes and unpaid accounts',
  'Business, partnership and shareholder disagreements',
  'Property, occupation and eviction-related disputes',
  'Interdicts, urgent applications and enforcement steps',
  'Damages claims, defences and settlement negotiations',
  'Appeals, reviews and rescission applications where appropriate',
]

const processSteps = [
  {
    title: 'Assess the dispute and evidence',
    detail:
      'The first step is to understand the facts, documents, parties, deadlines and commercial objective. Litigation strategy should be built around evidence and proportionality, not emotion.',
  },
  {
    title: 'Choose the right route',
    detail:
      'Depending on urgency and the relief needed, the matter may proceed by summons, application, urgent application, settlement negotiation or an alternative dispute-resolution process.',
  },
  {
    title: 'Run the court process carefully',
    detail:
      'Civil procedure may involve notices, pleadings or affidavits, discovery, pre-trial steps, hearings and enforcement. Missing a deadline can affect the case, so diarising and document control matter.',
  },
]

const statutes = [
  {
    name: 'Superior Courts Act 10 of 2013',
    detail:
      'provides the statutory framework for the High Court and superior court structure, including jurisdiction and court administration relevant to larger or more complex civil matters.',
  },
  {
    name: 'Magistrates\' Courts Act 32 of 1944',
    detail:
      'governs the Magistrates\' Courts and is often relevant to civil claims, debt recovery, contractual disputes and local court process within monetary and territorial limits.',
  },
  {
    name: 'Prescription Act 68 of 1969',
    detail:
      'sets time limits for many debts and civil claims. Prescription can become decisive if a claimant waits too long before interrupting prescription or issuing proceedings.',
  },
  {
    name: 'Rules Board for Courts of Law Act 107 of 1985',
    detail:
      'underpins the rules regulating civil procedure, including the steps by which claims, applications, discovery, hearings and enforcement are managed in court.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Civil Litigation Attorney in Pretoria',
  serviceType: 'Civil litigation, disputes and court process',
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
      name: 'Civil Litigation Attorney in Pretoria',
      item: CANONICAL_URL,
    },
  ],
}

export default function CivilLitigationPretoria() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>Civil Litigation Attorney Pretoria | Disputes | AHS Law</title>
        <meta
          name="description"
          content="AHS Law assists with civil litigation, disputes, court process, urgent applications, contractual claims and settlement strategy in Pretoria and Gauteng."
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content="Civil Litigation Attorney Pretoria | Disputes | AHS Law" />
        <meta
          property="og:description"
          content="Authoritative, practical legal guidance for disputes, claims, urgent applications and civil court process in Pretoria and Gauteng."
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
            <p style={eyebrowStyle}>Pretoria disputes and court process</p>
            <h1 style={heroTitleStyle}>Civil Litigation Attorney in Pretoria</h1>
            <p style={heroCopyStyle}>
              Disputes are easier to manage when the evidence, forum and deadlines are understood early.
              AHS Law assists clients in Pretoria with civil litigation, contractual claims, urgent court
              applications, settlement strategy and the practical steps of the court process.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '34px' }}>
              <a href="tel:0129912875" style={primaryButtonStyle}>Call AHS Law</a>
              <a href="/#contact" style={secondaryButtonStyle}>Send a confidential enquiry</a>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Civil disputes</p>
              <h2 style={sectionTitleStyle}>Strategic advice before a dispute becomes expensive</h2>
              <p style={bodyTextStyle}>
                Civil litigation covers disputes between people, businesses, property owners, employers,
                service providers and other private parties. AHS Law helps clients assess whether to
                negotiate, demand performance, defend a claim, issue summons, bring an application or
                seek urgent relief from court.
              </p>
              <p style={bodyTextStyle}>
                The correct route depends on the facts, remedy, court jurisdiction and time limits. For
                related civil matters, AHS Law also assists with <a href="/#services" style={textLinkStyle}>civil services</a>,
                {' '}<Link to="/services/divorce-lawyer-pretoria-east" style={textLinkStyle}>family-law disputes</Link>,
                {' '}<Link to="/blog/pie-act-locks" style={textLinkStyle}>eviction context under the PIE Act</Link>,
                {' '}and <Link to="/services/criminal-lawyer-pretoria-bail" style={textLinkStyle}>criminal court matters</Link>.
              </p>
            </div>

            <aside style={panelStyle}>
              <p style={panelLabelStyle}>Pretoria office</p>
              <p style={{ ...bodyTextStyle, marginBottom: '14px' }}>
                AHS Law is based at 63 Ingersol Rd, Lynnwood Glen, Pretoria, and assists with civil
                litigation and dispute resolution across Pretoria, Pretoria East and Gauteng courts.
              </p>
              <a href="tel:0129912875" style={phoneStyle}>012 991 2875</a>
              <a href="/#contact" style={textLinkStyle}>Request a consultation →</a>
            </aside>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#050505' }}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Disputes we assist with</p>
              <h2 style={sectionTitleStyle}>Commercial, property and personal civil claims</h2>
              <p style={bodyTextStyle}>
                Every dispute needs a proportionate plan. The aim may be settlement, a final order,
                urgent interim protection, payment, performance, or a carefully drafted defence.
              </p>
            </div>
            <div style={checklistGridStyle}>
              {disputeTypes.map(item => (
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
              <p style={eyebrowStyle}>Court process</p>
              <h2 style={sectionTitleStyle}>A clear path through pleadings, applications and hearings</h2>
              <p style={bodyTextStyle}>
                Court papers should be accurate, focused and supported by evidence. AHS Law helps clients
                understand the likely stages, risks, costs and practical timelines before committing to a
                course of action.
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
              <h2 style={sectionTitleStyle}>South African legal sources that often shape civil litigation</h2>
              <p style={bodyTextStyle}>
                Civil litigation is procedure-heavy. The statute, rules and court forum must match the
                remedy sought. These references are common starting points, but the correct route depends
                on the facts of the dispute.
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
            <h2 style={sectionTitleStyle}>Civil litigation and dispute FAQs</h2>
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
            <h2 style={sectionTitleStyle}>Need help with a civil dispute in Pretoria?</h2>
            <p style={{ ...bodyTextStyle, margin: '0 auto 30px' }}>
              Contact AHS Law with the documents and timeline you have. The team can help you assess
              the merits, court process, negotiation options and next legal step.
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
