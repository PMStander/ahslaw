import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost } from './posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './BlogPost.css'

const GOLD = '#c9a25a'
const GOLD_LIGHT = '#d2ae6d'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <Navigate to="/blog" replace />

  const formatted = new Date(post.published).toLocaleDateString('en-ZA', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const canonicalUrl = `https://www.ahslaw.co.za/blog/${post.slug}`
  const ogImage = `https://www.ahslaw.co.za${post.hero}`
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: ogImage,
    datePublished: post.published,
    dateModified: post.updated || post.published,
    mainEntityOfPage: canonicalUrl,
    author: {
      '@type': 'Organization',
      name: 'AH Stander & Agenbag Inc',
      url: 'https://www.ahslaw.co.za/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AH Stander & Agenbag Inc',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ahslaw.co.za/img/logo.png',
      },
    },
    about: post.pillar,
  }

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>{post.title} | AH Stander &amp; Agenbag Inc</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 45vw, 520px)', overflow: 'hidden' }}>
        <img
          src={post.hero}
          alt={post.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: post.heroPosition || 'center center',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '780px',
          padding: '0 24px',
        }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(0,0,0,0.7)',
            border: `1px solid ${GOLD}`,
            color: GOLD,
            fontFamily: 'Lato, sans-serif',
            fontSize: '10px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            padding: '5px 12px',
            marginBottom: '14px',
          }}>
            {post.pillar}
          </span>
          <h1 style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: 'clamp(22px, 4vw, 40px)',
            fontWeight: 400,
            color: '#fff',
            margin: '0',
            lineHeight: '1.3',
            textShadow: '0 2px 20px rgba(0,0,0,0.8)',
          }}>
            {post.title}
          </h1>
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
            margin: '12px 0 0',
            letterSpacing: '1px',
          }}>
            {formatted}
          </p>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '60px 24px 40px' }}>
        {/* Back link */}
        <Link
          to="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'Lato, sans-serif',
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            textDecoration: 'none',
            marginBottom: '48px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
        >
          ← All Articles
        </Link>

        <div className="blog-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Suppress the H1 from markdown — the hero already renders the title
              h1: () => null,
              img: ({ src, alt }) => {
                const filename = src ? src.split('/').pop() : ''
                const correctedSrc = `/img/blog/${filename}`
                return (
                  <img
                    src={correctedSrc}
                    alt={alt}
                    style={{ maxWidth: '100%', borderRadius: '2px', margin: '32px 0' }}
                  />
                )
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '64px',
          padding: '40px',
          border: `1px solid rgba(201,162,90,0.3)`,
          background: '#0a0a0a',
        }}>
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '10px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: GOLD,
            margin: '0 0 12px',
          }}>
            AHS Law
          </p>
          <h3 style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '22px',
            fontWeight: 400,
            color: '#fff',
            margin: '0 0 12px',
          }}>
            Need legal advice?
          </h3>
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: '1.7',
            margin: '0 0 24px',
          }}>
            Our team handles matters across evictions, labour disputes, criminal law, family law, property transfers, and more. Contact us for a confidential consultation.
          </p>
          <a
            href="/#contact"
            style={{
              display: 'inline-block',
              background: GOLD,
              color: '#000',
              fontFamily: 'Lato, sans-serif',
              fontSize: '11px',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              fontWeight: 700,
              padding: '14px 28px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = GOLD_LIGHT)}
            onMouseLeave={e => (e.currentTarget.style.background = GOLD)}
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
