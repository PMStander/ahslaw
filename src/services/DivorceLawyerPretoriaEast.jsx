import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CriminalBailPretoria.css'

const GOLD = '#c9a25a'
const GOLD_LIGHT = '#d2ae6d'
const CANONICAL_URL = 'https://www.ahslaw.co.za/services/divorce-lawyer-pretoria-east'

const faqs = [
  {
    question: 'Do I need a divorce lawyer in Pretoria East if my divorce is uncontested?',
    answer:
      'Even an uncontested divorce must be properly drafted and placed before the court. A lawyer can help record the settlement, parenting arrangements, maintenance terms, and property division so that the divorce order is clear and enforceable.',
  },
  {
    question: 'What is the difference between accrual and community of property?',
    answer:
      'In community of property, the spouses generally share one joint estate. Under the accrual system in the Matrimonial Property Act 88 of 1984, each spouse keeps a separate estate during the marriage, but the growth in the estates may be shared when the marriage ends, subject to the antenuptial contract and exclusions allowed by law.',
  },
  {
    question: 'Can child care and contact be agreed in a settlement?',
    answer:
      'Yes. Parenting arrangements can be recorded in a settlement agreement or parenting plan, but the court must still consider the best interests of the child under the Children\'s Act 38 of 2005 before making an order.',
  },
  {
    question: 'Which court handles a divorce in Pretoria?',
    answer:
      'Divorce proceedings are usually issued in a court with jurisdiction, commonly the High Court or a Regional Court with divorce jurisdiction. The correct forum depends on the facts, residence, and practical court requirements.',
  },
]

const propertyChecklist = [
  'Marriage certificate and antenuptial contract, if one was signed',
  'Identity documents and contact details for both spouses',
  'Children\'s birth certificates and existing parenting arrangements',
  'Payslips, bank statements, bond statements, vehicle finance and policy details',
  'A list of assets, debts, household goods and retirement interests',
  'Any previous maintenance, protection order or court documents',
]

const statutes = [
  {
    name: 'Divorce Act 70 of 1979',
    detail:
      'sets out the grounds for divorce and empowers the court to deal with patrimonial consequences and orders connected to the dissolution of a marriage.',
  },
  {
    name: 'Matrimonial Property Act 88 of 1984',
    detail:
      'governs matrimonial property systems, including marriages out of community of property with the accrual system.',
  },
  {
    name: 'Children\'s Act 38 of 2005',
    detail:
      'requires decisions about children to place the child\'s best interests at the centre of care, contact and guardianship arrangements.',
  },
  {
    name: 'Maintenance Act 99 of 1998',
    detail:
      'provides the framework for maintenance duties and maintenance court processes where financial support is disputed.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Divorce Lawyer in Pretoria East',
  serviceType: 'Family law, divorce, accrual and community of property advice',
  areaServed: ['Pretoria East', 'Pretoria', 'Lynnwood Glen', 'Faerie Glen', 'Gauteng'],
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
      name: 'Divorce Lawyer in Pretoria East',
      item: CANONICAL_URL,
    },
  ],
}

export default function DivorceLawyerPretoriaEast() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>Divorce Lawyer Pretoria East | Family Law | AHS Law</title>
        <meta
          name="description"
          content="AHS Law assists with divorce, family law, maintenance, children, accrual and community of property matters in Pretoria East and Gauteng."
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content="Divorce Lawyer Pretoria East | Family Law | AHS Law" />
        <meta
          property="og:description"
          content="Clear family law guidance for divorce, settlement agreements, children, maintenance, accrual and community of property in Pretoria East."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.ahslaw.co.za/img/family-law.png" />
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
            <p style={eyebrowStyle}>Pretoria East family law</p>
            <h1 style={heroTitleStyle}>Divorce Lawyer in Pretoria East</h1>
            <p style={heroCopyStyle}>
              Divorce changes property, parenting, maintenance and future financial planning. AHS Law
              gives practical family law guidance for clients in Pretoria East who need a clear route
              through settlement negotiations, opposed divorce proceedings, accrual calculations and
              community of property consequences.
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
              <p style={eyebrowStyle}>Divorce and family law</p>
              <h2 style={sectionTitleStyle}>Legal advice before the paperwork becomes a dispute</h2>
              <p style={bodyTextStyle}>
                South African divorce law is not only about ending a marriage. The court must consider
                the legal basis for divorce under the Divorce Act 70 of 1979, the terms of any settlement,
                and the orders needed for property, maintenance and children.
              </p>
              <p style={bodyTextStyle}>
                AHS Law assists with uncontested and opposed divorce, settlement agreements, parenting
                arrangements, maintenance, domestic and family-related disputes, and the property
                consequences of marriage in community of property or out of community with accrual.
                For a deeper plain-language explanation, read the guide to{' '}
                <Link to="/blog/community-of-property-vs-accrual" style={textLinkStyle}>community of property vs accrual</Link>.
              </p>
            </div>

            <aside style={panelStyle}>
              <p style={panelLabelStyle}>Pretoria East office area</p>
              <p style={{ ...bodyTextStyle, marginBottom: '14px' }}>
                AHS Law is based at 63 Ingersol Rd, Lynnwood Glen, Pretoria, with family law services
                for Pretoria East, Faerie Glen, Lynnwood, Menlyn, Garsfontein and surrounding areas.
              </p>
              <a href="tel:0129912875" style={phoneStyle}>012 991 2875</a>
              <a href="/#contact" style={textLinkStyle}>Request a consultation →</a>
            </aside>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#050505' }}>
          <div className="service-location-grid" style={contentGridStyle}>
            <div>
              <p style={eyebrowStyle}>Property consequences</p>
              <h2 style={sectionTitleStyle}>Accrual, community of property and settlement terms</h2>
              <p style={bodyTextStyle}>
                The matrimonial property system determines the starting point for dividing assets and
                liabilities. A marriage in community of property generally creates a joint estate. A
                marriage out of community of property may include or exclude accrual, depending on the
                antenuptial contract and the Matrimonial Property Act 88 of 1984.
              </p>
              <p style={bodyTextStyle}>
                Because the outcome depends on the marriage regime, asset growth, exclusions, debts and
                settlement wording, early advice helps avoid signing an agreement that does not reflect
                the real financial position.
              </p>
            </div>
            <div style={checklistGridStyle}>
              {propertyChecklist.map(item => (
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
              <h2 style={sectionTitleStyle}>South African statutes that often shape a divorce</h2>
              <p style={bodyTextStyle}>
                Every family matter turns on its own facts. These statutes are common reference points,
                and AHS Law applies them to the documents, court process and settlement strategy in each
                case.
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
            <h2 style={sectionTitleStyle}>Divorce and family law FAQs</h2>
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
            <p style={eyebrowStyle}>Confidential consultation</p>
            <h2 style={sectionTitleStyle}>Need a divorce lawyer in Pretoria East?</h2>
            <p style={{ ...bodyTextStyle, margin: '0 auto 30px' }}>
              Contact AHS Law before signing a settlement or filing papers. The team can help you
              understand the process, risks and documents needed for a practical next step.
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
