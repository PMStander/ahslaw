export default function About() {
  return (
    <section
      id="about"
      style={{ background: '#050505', padding: '100px 5%' }}
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
            Who We Are
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
            About The Firm
          </h2>
          <div style={{ width: '60px', height: '2px', background: '#d2ae6d' }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Left — main description */}
          <div>
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '15px',
                lineHeight: '1.9',
                marginBottom: '24px',
              }}
            >
              Our firm is built on the belief that legal services should be both effective and accessible. We combine strong legal expertise in criminal, family, and civil law with a practical, client-focused approach that prioritizes clear communication and realistic outcomes. Rather than taking a one-size-fits-all approach, we invest time in understanding each client's unique circumstances and tailoring strategies accordingly.
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '15px',
                lineHeight: '1.9',
                marginBottom: '24px',
              }}
            >
              We also place a strong emphasis on efficiency and integrity. By focusing on practical resolutions — whether through negotiation or litigation — we aim to achieve results without unnecessary delay or cost. Above all, we are dedicated to building trust and delivering dependable legal support when it matters most.
            </p>

            {/* Service area + language pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
              {['Gauteng Region', 'Nationwide (Correspondent)', 'English', 'Afrikaans'].map(tag => (
                <span
                  key={tag}
                  style={{
                    border: '1px solid rgba(210,174,109,0.35)',
                    color: '#d2ae6d',
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: '40px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — differentiators */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                title: 'Professionalism & Approachability',
                body: 'We keep clients informed at every stage, explaining legal processes in plain language and ensuring they feel supported throughout what can often be a stressful experience.',
              },
              {
                title: 'Collaborative Team',
                body: 'Our team works collaboratively, drawing on diverse experience across criminal, family, and civil law to provide well-rounded, effective solutions.',
              },
              {
                title: 'Efficiency & Integrity',
                body: 'We focus on practical resolutions — whether through negotiation or litigation — aiming to achieve results without unnecessary delay or cost.',
              },
            ].map(item => (
              <div
                key={item.title}
                style={{
                  borderLeft: '2px solid #d2ae6d',
                  paddingLeft: '24px',
                }}
              >
                <h4
                  style={{
                    color: '#fff',
                    fontFamily: 'Raleway, sans-serif',
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '13px',
                    lineHeight: '1.8',
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
