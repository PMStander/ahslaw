const team = [
  {
    name: 'ADRIAAN HENDRIKUS STANDER',
    role: 'EXECUTIVE DIRECTOR',
    bio: 'Mr Rikus Stander obtained his LLB degree through the University of South Africa in 2012. He was admitted as an attorney in 2013 and has since built an extensive practice specialising in criminal law, civil litigation, and family law matters.',
    photo: '/img/Rikus-Stander.jpg',
    initials: 'AS',
  },
  {
    name: 'GERT AGENBAG',
    role: 'DIRECTOR',
    bio: 'Mr Gert Agenbag is a Director at AH Stander & Agenbag Inc. He brings a wealth of experience across multiple areas of law to the firm.',
    photo: '/img/Gert-Agenbag.jpg',
    initials: 'GA',
  },
  {
    name: 'PRIA UYS',
    role: 'ATTORNEY',
    bio: 'Ms. Pria Uys is an Attorney at AH Stander & Agenbag Inc. She brings extensive legal expertise and dedication to every client matter.',
    photo: '/img/pria-uys.jpg',
    initials: 'PU',
  },
  {
    name: 'CHARL-MARI VAN WYK',
    role: 'ATTORNEY',
    bio: 'Ms. Charl-Mari Van Wyk is an Attorney at AH Stander & Agenbag Inc. She is committed to delivering professional and effective legal services.',
    photo: '/img/Charl-Mari-Van-Wyk.jpg',
    initials: 'CV',
  },
  {
    name: 'CHRISTIAAN JANSEN VAN RENSBURG',
    role: 'ATTORNEY',
    bio: 'Mr. Christiaan Jansen Van Rensburg is an Attorney at AH Stander & Agenbag Inc. He brings thorough legal knowledge and a client-focused approach.',
    photo: '/img/Christiaan-Jansen-Van-Rensburg.jpg',
    initials: 'CR',
  },
  {
    name: 'CHANEL LOUW',
    role: 'CANDIDATE ATTORNEY',
    bio: 'Ms. Chanel Louw is a Candidate Attorney at AH Stander & Agenbag Inc. Ms. Louw completed her LLB degree and is currently serving her articles with the firm.',
    photo: '/img/Chanel-Louw.jpeg',
    initials: 'CL',
  },
  {
    name: 'ZANDER FERREIRA',
    role: 'CANDIDATE ATTORNEY',
    bio: 'Mr. Zander Ferreira is a Candidate Attorney at AH Stander & Agenbag Inc. He is committed to providing excellent legal assistance to all clients.',
    photo: '/img/Zander-Ferreira.jpeg',
    initials: 'ZF',
  },
  {
    name: 'MICHAELA OBERHOLZER',
    role: 'CANDIDATE ATTORNEY',
    bio: 'Ms. Michaela Oberholzer is a Candidate Attorney at AH Stander & Agenbag Inc. She brings dedication and attention to detail to every matter.',
    photo: '/img/MichaelaOberholzer.jpeg',
    initials: 'MO',
  },
  {
    name: 'ESTIAAN LUBBE',
    role: 'CANDIDATE ATTORNEY',
    bio: 'Mr. Estiaan Lubbe is a Candidate Attorney at AH Stander & Agenbag Inc. He is passionate about justice and committed to his clients.',
    photo: '/img/EstiaanLubbe.jpeg',
    initials: 'EL',
  },
]

function TeamCard({ member }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        background: '#0d0d0d',
        border: '1px solid rgba(210,174,109,0.12)',
        borderRadius: '4px',
        transition: 'border-color 0.3s, transform 0.3s',
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
      {/* Avatar */}
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid rgba(210,174,109,0.4)',
          marginBottom: '20px',
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span
            style={{
              color: '#d2ae6d',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
            }}
          >
            {member.initials}
          </span>
        )}
      </div>

      {/* Name */}
      <h4
        style={{
          color: '#fff',
          fontFamily: 'Raleway, sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '2px',
          marginBottom: '6px',
          margin: '0 0 6px 0',
        }}
      >
        {member.name}
      </h4>

      {/* Role */}
      <p
        style={{
          color: '#d2ae6d',
          fontFamily: 'Lato, sans-serif',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          margin: '0 0 18px 0',
        }}
      >
        {member.role}
      </p>

      {/* Divider */}
      <div
        style={{
          width: '40px',
          height: '1px',
          background: 'rgba(210,174,109,0.4)',
          marginBottom: '18px',
        }}
      />

      {/* Bio */}
      <p
        style={{
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '13px',
          lineHeight: '1.7',
          margin: 0,
        }}
      >
        {member.bio}
      </p>
    </div>
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {team.map(member => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
