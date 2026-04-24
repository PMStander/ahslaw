const team = [
  {
    name: 'RIKUS STANDER',
    role: 'DIRECTOR',
    bio: 'LLB — University of South Africa. Admitted 2013. Rikus is one of the Directors of the firm, with extensive experience across criminal, family, and civil law. He provides strategic leadership while maintaining an active practice, representing clients in complex and sensitive matters. Known for sound judgment and a client-focused approach, he plays an active role in shaping the firm\'s direction and strengthening its reputation for dependable, results-oriented service.',
    photo: '/img/Rikus-Stander.jpg',
    initials: 'RS',
    vcard: '/vcards/adriaan-stander.vcf',
  },
  {
    name: 'GERT AGENBAG',
    role: 'DIRECTOR',
    bio: 'LLB — North West University. Admitted 2020. Gert is a Director of the firm, bringing a pragmatic and hands-on approach to legal practice. Known for being direct and solutions-driven, he prioritizes cutting through complexity to deliver straightforward, practical guidance and is committed to achieving fair and effective outcomes.',
    photo: '/img/Gert-Agenbag.jpg',
    initials: 'GA',
    vcard: '/vcards/gert-agenbag.vcf',
  },
  {
    name: 'GWEN MYNHARDT',
    role: 'ASSOCIATE',
    bio: 'LLB — University of Pretoria. Admitted 2012. Certificate in Commercial and Contract Law — University of Cape Town (2022). Gwen is an Associate Attorney known for a practical, solutions-driven mindset. She assists clients in resolving disputes efficiently, whether through negotiation or litigation, combining legal knowledge with a pragmatic approach to help clients reach workable outcomes.',
    photo: null,
    initials: 'GM',
    vcard: '/vcards/gwen-mynhardt.vcf',
  },
  {
    name: 'CHANEL LOUW',
    role: 'ASSOCIATE',
    bio: 'LLB — University of Pretoria. Admitted 2024. Chanel is an Associate Attorney dedicated to guiding clients through challenging legal situations with clarity and care. She works across the firm\'s practice areas, ensuring clients remain informed and supported at every stage. Chanel is valued for a compassionate approach and strong communication skills.',
    photo: '/img/Chanel-Louw.jpeg',
    initials: 'CL',
    vcard: '/vcards/chanel-louw.vcf',
  },
  {
    name: 'ENZA PIETERSE',
    role: 'SECRETARY',
    bio: 'Enza is the firm\'s dedicated Secretary, ensuring the office runs smoothly and that clients receive prompt, professional assistance from the moment they make contact.',
    photo: null,
    initials: 'EP',
    vcard: '/vcards/enze-pieterse.vcf',
  },
  {
    name: 'ZANDER FERREIRA',
    role: 'CANDIDATE ATTORNEY',
    bio: 'LLB — University of South Africa. Currently completing articles. Zander is a Candidate Attorney with a strong interest in client engagement and practical problem-solving. He works closely with clients in criminal, family, and civil matters, assisting with case preparation, consultations, and court representation. Known for a calm and approachable manner, he is committed to making the legal process more accessible.',
    photo: '/img/Zander-Ferreira.jpeg',
    initials: 'ZF',
    vcard: '/vcards/zander-ferreira.vcf',
  },
  {
    name: 'CHANTE LABUSCHAGNE',
    role: 'CANDIDATE ATTORNEY',
    bio: 'BCom Law and LLB — University of Pretoria. Currently completing articles. Chante is a Candidate Attorney who brings a detail-oriented and analytical approach to the firm\'s work. She focuses on in-depth legal research, drafting pleadings, and supporting litigation strategy across criminal, family, and civil cases. Dedicated to producing precise, well-reasoned work.',
    photo: null,
    initials: 'CL',
    vcard: '/vcards/chante-labuschagne.vcf',
  },
  {
    name: 'MELISSA ROWE',
    role: 'CANDIDATE ATTORNEY',
    bio: 'LLB — University of Pretoria. Currently completing articles. Melissa is a Candidate Attorney gaining practical experience across the firm\'s key practice areas. She assists with case preparation, client liaison, and court filings. With a strong academic background and a commitment to learning, Melissa brings energy and attention to detail to every matter.',
    photo: null,
    initials: 'MR',
    vcard: '/vcards/melissa-rowe.vcf',
  },
  {
    name: 'ESTIAAN LUBBE',
    role: 'CANDIDATE ATTORNEY',
    bio: 'LLB — Akademia (currently studying). Estiaan is a Paralegal specializing in labour law, supporting the firm in employment-related matters including disciplinary proceedings, dismissals, and workplace disputes. He assists with case preparation, drafting documentation, and liaising with clients, and is known for a practical understanding of workplace procedures.',
    photo: '/img/EstiaanLubbe.jpeg',
    initials: 'EL',
    vcard: '/vcards/estiaan-lubbe.vcf',
  },
]

function TeamCard({ member }) {
  return (
    <a
      href={member.vcard}
      download
      title={`Save ${member.name} to contacts`}
      style={{ textDecoration: 'none', display: 'flex', height: '100%' }}
    >
      <div
        style={{
          background: '#0d0d0d',
          border: '1px solid rgba(210,174,109,0.12)',
          borderRadius: '4px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'border-color 0.3s, transform 0.3s',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(210,174,109,0.5)'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(210,174,109,0.12)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Photo */}
        <div
          style={{
            width: '100%',
            aspectRatio: '3 / 4',
            overflow: 'hidden',
            background: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
          ) : (
            <span
              style={{
                color: '#d2ae6d',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
              }}
            >
              {member.initials}
            </span>
          )}

          {/* vCard badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              background: 'rgba(0,0,0,0.75)',
              border: '1px solid rgba(210,174,109,0.5)',
              borderRadius: '40px',
              padding: '5px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d2ae6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span
              style={{
                color: '#d2ae6d',
                fontFamily: 'Lato, sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Save Contact
            </span>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: '20px 20px 24px' }}>
          <p
            style={{
              color: '#d2ae6d',
              fontFamily: 'Lato, sans-serif',
              fontSize: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              margin: '0 0 8px 0',
            }}
          >
            {member.role}
          </p>
          <h4
            style={{
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '1px',
              margin: '0 0 14px 0',
            }}
          >
            {member.name}
          </h4>
          <div
            style={{
              width: '30px',
              height: '1px',
              background: 'rgba(210,174,109,0.4)',
              marginBottom: '14px',
            }}
          />
          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '12px',
              lineHeight: '1.7',
              margin: 0,
            }}
          >
            {member.bio}
          </p>
        </div>
      </div>
    </a>
  )
}

export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: '#000',
        padding: '100px 5%',
      }}
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
            Our People
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
            Meet The Team
          </h2>
          <div style={{ width: '60px', height: '2px', background: '#d2ae6d' }} />
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {team.map(member => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Hint */}
        <p
          style={{
            color: 'rgba(255,255,255,0.25)',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '12px',
            textAlign: 'center',
            marginTop: '40px',
            letterSpacing: '1px',
          }}
        >
          Click any card to save the contact to your phone or device.
        </p>
      </div>
    </section>
  )
}
