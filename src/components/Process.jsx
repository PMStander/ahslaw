const steps = [
  {
    number: '01',
    title: 'Make Contact',
    body: 'Call our office or bail hotline. We respond promptly and will discuss the nature of your matter to point you in the right direction.',
  },
  {
    number: '02',
    title: 'Pay Consultation Deposit',
    body: 'A deposit is required before your consultation. The amount varies depending on which attorney you consult with. We will confirm this amount when you call.',
  },
  {
    number: '03',
    title: 'Book Your Consultation',
    body: 'A consultation date is normally available within the same week you call, or the week after. We are flexible as we are in office most days except when court appearances are scheduled.',
  },
  {
    number: '04',
    title: 'We Prepare Your Matter',
    body: 'After the consultation we begin drafting the necessary documents. Turnaround depends on the urgency of your matter — all documents are ready before any court appearance.',
  },
  {
    number: '05',
    title: 'Ongoing Representation',
    body: 'We keep you informed at every stage, whether your matter proceeds through negotiation, court appearances, or both. You are never left in the dark.',
  },
]

const bailSteps = [
  {
    number: '01',
    title: 'Call Our Bail Hotline',
    body: 'Phone one of our 24/7 bail numbers. We will gather the details of the matter immediately.',
  },
  {
    number: '02',
    title: 'Pay the Bail Deposit',
    body: 'Upon receiving your deposit, we begin work immediately — there is no delay.',
  },
  {
    number: '03',
    title: 'Bail Affidavit Drafted',
    body: 'We draft your bail affidavit and prepare it for presentation on your assigned court day.',
  },
  {
    number: '04',
    title: 'Court Appearance',
    body: 'Your bail affidavit is presented in court. Once bail is granted, we continue working to settle the matter or have charges withdrawn.',
  },
]

function StepCard({ step }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: '1px solid rgba(210,174,109,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#d2ae6d',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '1px',
          }}
        >
          {step.number}
        </span>
      </div>
      <div style={{ paddingTop: '12px' }}>
        <h4
          style={{
            color: '#fff',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '8px',
          }}
        >
          {step.title}
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
          {step.body}
        </p>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section
      id="process"
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
            What to Expect
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
            How We Work
          </h2>
          <div style={{ width: '60px', height: '2px', background: '#d2ae6d' }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '80px',
          }}
        >
          {/* Consultation process */}
          <div>
            <h3
              style={{
                color: '#d2ae6d',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '40px',
              }}
            >
              General Consultation
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {steps.map(s => <StepCard key={s.number} step={s} />)}
            </div>
          </div>

          {/* Bail process */}
          <div>
            <h3
              style={{
                color: '#d2ae6d',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '40px',
              }}
            >
              Urgent Bail
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {bailSteps.map(s => <StepCard key={s.number} step={s} />)}
            </div>

            {/* Bail hotline callout */}
            <div
              style={{
                marginTop: '48px',
                background: 'rgba(210,174,109,0.06)',
                border: '1px solid rgba(210,174,109,0.3)',
                borderRadius: '4px',
                padding: '28px',
              }}
            >
              <p
                style={{
                  color: '#d2ae6d',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  margin: '0 0 12px 0',
                  fontWeight: 700,
                }}
              >
                24/7 Bail Hotline
              </p>
              <a
                href="tel:0798981454"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                079 898 1454
              </a>
              <a
                href="tel:0798404717"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                079 840 4717
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
