import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogIndex from './blog/BlogIndex'
import BlogPost from './blog/BlogPost'

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://www.ahslaw.co.za/#legalservice',
  name: 'AH Stander & Agenbag Inc',
  alternateName: 'AHS Law',
  url: 'https://www.ahslaw.co.za/',
  logo: 'https://www.ahslaw.co.za/img/logo.png',
  image: 'https://www.ahslaw.co.za/img/logo.png',
  telephone: '+27 12 991 2875',
  email: 'rs@ahslaw.co.za',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '63 Ingersol Rd, Lynnwood Glen',
    addressLocality: 'Pretoria',
    postalCode: '0081',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  areaServed: [
    'Pretoria',
    'Pretoria East',
    'Lynnwood Glen',
    'Faerie Glen',
    'Gauteng',
    'South Africa',
  ],
  knowsAbout: [
    'Criminal defence',
    'Bail applications',
    'Family law',
    'Divorce',
    'Maintenance',
    'Civil litigation',
    'Evictions',
    'Conveyancing',
    'Labour law',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Criminal Defence and Bail Applications',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Family Law, Divorce and Maintenance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Civil Litigation and Evictions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Property Transfers and Conveyancing',
        },
      },
    ],
  },
}

function Home() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>AH Stander &amp; Agenbag Inc | Attorneys, Notaries &amp; Conveyancers</title>
        <meta name="description" content="AHS Law offers expert legal services across eviction, labour, criminal, family, property, and debt law. Contact our team for a confidential consultation." />
        <link rel="canonical" href="https://www.ahslaw.co.za/" />
        <meta property="og:title" content="AH Stander & Agenbag Inc | Attorneys, Notaries & Conveyancers" />
        <meta property="og:description" content="AHS Law offers practical legal help across criminal defence, family law, civil litigation, evictions, property, labour, and debt matters." />
        <meta property="og:url" content="https://www.ahslaw.co.za/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.ahslaw.co.za/img/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify(legalServiceSchema)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
