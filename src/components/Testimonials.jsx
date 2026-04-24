const reviews = [
  {
    text: 'I received impeccable service from this outstanding legal firm. Whichever legal difficulty you may face, this is the team you absolutely need. Their passion for the law and their clients is clear in the way they keep on fighting and strategizing regardless of the challenges. Mr Rikus Stander is an absolute force of nature in any courtroom displaying a brilliant legal mind, expert negotiation skills and fortitude to achieve the best outcome for his clients. The firm is upfront and transparent regarding current and future costs involved, communicates swiftly and has a personal approach.',
    author: 'Lindi du Preez',
    source: 'Google Review',
  },
  {
    text: 'I would just like to thank AH Stander Attorneys and especially Gert for being so professional through the whole process. After 3 years of struggling with a fraud of a lawyer which was unprofessional and ran away with our money, Gert helped us within only a few months with exactly what we asked for. Gert guided us through the whole process. Would recommend this EXCELLENT team to anyone in need of an attorney.',
    author: 'Narentia Del Frate',
    source: 'Google Review',
  },
  {
    text: 'I\'m very impressed with the service from the attorneys, they\'re very professional and always go above and beyond for their clients.',
    author: 'Onkarabetse Mputle',
    source: 'Google Review',
  },
  {
    text: 'Knowledgeable and very friendly down to earth — a legal firm I can highly recommend for any matter!',
    author: 'Christo Hugo',
    source: 'Google Review',
  },
]

function StarRow() {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d2ae6d">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div
      style={{
        background: '#0d0d0d',
        border: '1px solid rgba(210,174,109,0.12)',
        borderRadius: '4px',
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StarRow />
      <p
        style={{
          color: 'rgba(255,255,255,0.65)',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '13px',
          lineHeight: '1.9',
          margin: '0 0 28px 0',
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        "{review.text}"
      </p>
      <div style={{ borderTop: '1px solid rgba(210,174,109,0.15)', paddingTop: '20px' }}>
        <p
          style={{
            color: '#fff',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            margin: '0 0 4px 0',
            letterSpacing: '1px',
          }}
        >
          {review.author}
        </p>
        <p
          style={{
            color: '#d2ae6d',
            fontFamily: 'Lato, sans-serif',
            fontSize: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          {review.source}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: '#000', padding: '100px 5%' }}
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
            Client Feedback
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
            What Clients Say
          </h2>
          <div style={{ width: '60px', height: '2px', background: '#d2ae6d' }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {reviews.map(r => (
            <ReviewCard key={r.author} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
