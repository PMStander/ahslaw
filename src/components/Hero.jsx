export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      >
        <source src="/img/background-video.webm" type="video/webm" />
      </video>
      {/* Decorative large circle - right side */}
      <div
        style={{
          position: 'absolute',
          right: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(210,174,109,0.15)',
          pointerEvents: 'none',
        }}
      />
      {/* Second smaller circle */}
      <div
        style={{
          position: 'absolute',
          right: '80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(210,174,109,0.08)',
          pointerEvents: 'none',
        }}
      />

      {/* Dot grid bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 8px)',
          gap: '8px',
          opacity: 0.3,
        }}
      >
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: '#d2ae6d',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingLeft: '10%',
          paddingRight: '5%',
          maxWidth: '700px',
        }}
      >
        <p
          className="hero-kicker"
          style={{
            color: '#d2ae6d',
            fontFamily: 'Lato, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          ATTORNEYS &bull; NOTARIES &bull; CONVEYANCERS
        </p>

        <h1
          className="hero-title"
          style={{
            color: '#fff',
            fontFamily: 'Raleway, sans-serif',
            fontSize: 'clamp(36px, 5vw, 62px)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '40px',
            margin: '0 0 40px 0',
          }}
        >
          Legal advice and<br /><span className="hero-mobile-space"> </span>expertise you can trust
        </h1>

        <a
          href="#contact"
          style={{
            display: 'inline-block',
            background: '#d2ae6d',
            color: '#000',
            fontFamily: 'Lato, sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            padding: '16px 36px',
            borderRadius: '40px',
            textDecoration: 'none',
            transition: 'background 0.3s, color 0.3s',
          }}
          onMouseEnter={e => {
            e.target.style.background = '#c9a25a'
            e.target.style.color = '#000'
          }}
          onMouseLeave={e => {
            e.target.style.background = '#d2ae6d'
            e.target.style.color = '#000'
          }}
        >
          BOOK A CONSULTATION
        </a>
      </div>
    </section>
  )
}
