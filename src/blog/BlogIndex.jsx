import { Link } from 'react-router-dom'
import { posts } from './posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GOLD = '#c9a25a'
const GOLD_LIGHT = '#d2ae6d'

const pillarColors = {
  'Eviction & Tenant Rights': '#c9a25a',
  'Labour': '#c9a25a',
  'Criminal': '#c9a25a',
  'Family': '#c9a25a',
  'Debt': '#c9a25a',
  'POPIA': '#c9a25a',
  'Property': '#c9a25a',
}

export default function BlogIndex() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar />

      {/* Header */}
      <div style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center', borderBottom: '1px solid rgba(201,162,90,0.2)' }}>
        <p style={{
          fontFamily: 'Lato, sans-serif',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: GOLD,
          margin: '0 0 16px',
        }}>
          Legal Insight
        </p>
        <h1 style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 300,
          color: '#fff',
          margin: '0 0 20px',
          letterSpacing: '1px',
        }}>
          Law, Plain and Simple
        </h1>
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '15px',
          color: 'rgba(255,255,255,0.55)',
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: '1.7',
        }}>
          Practical answers to the questions South Africans actually ask — written by lawyers, readable by everyone.
        </p>
      </div>

      {/* Post grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px 100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '32px',
      }}>
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

function PostCard({ post }) {
  const formatted = new Date(post.published).toLocaleDateString('en-ZA', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <Link
      to={`/blog/${post.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        style={{
          background: '#0a0a0a',
          border: '1px solid rgba(201,162,90,0.12)',
          borderRadius: '2px',
          overflow: 'hidden',
          transition: 'border-color 0.3s, transform 0.3s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(201,162,90,0.45)'
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(201,162,90,0.12)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Hero image */}
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={post.hero}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Pillar tag */}
          <span style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(0,0,0,0.85)',
            border: `1px solid ${GOLD}`,
            color: GOLD,
            fontFamily: 'Lato, sans-serif',
            fontSize: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '4px 10px',
          }}>
            {post.pillar}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '11px',
            letterSpacing: '1.5px',
            color: 'rgba(255,255,255,0.35)',
            margin: '0 0 12px',
            textTransform: 'uppercase',
          }}>
            {formatted}
          </p>
          <h2 style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            color: '#fff',
            margin: '0 0 12px',
            lineHeight: '1.4',
          }}>
            {post.title}
          </h2>
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '1.7',
            margin: '0 0 20px',
          }}>
            {post.excerpt}
          </p>
          <span style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: GOLD_LIGHT,
          }}>
            Read More →
          </span>
        </div>
      </article>
    </Link>
  )
}
