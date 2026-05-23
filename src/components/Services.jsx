const services = [
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    icon: '/img/litigation.png',
    iconWidth: 150,
    iconHeight: 150,
    description:
      'We have a wide variety of experience in the following areas which include but are not exclusive to debt collection, evictions, protection orders, divorce, maintenance, guardianship, custody, adoption, and other civil matters.',
    items: [
      'Debt Collection',
      'Evictions',
      'Protection Orders',
      'Divorce & Maintenance',
      'Guardianship & Custody',
      'Adoption',
      'Appeals & Reviews',
    ],
  },
  {
    id: 'family-law',
    title: 'Family Law',
    icon: '/img/family-law.png',
    iconWidth: 150,
    iconHeight: 150,
    description:
      'Our Family Law practice covers all aspects of matrimonial and family matters. We provide compassionate, professional guidance through some of life\'s most challenging legal situations.',
    items: [
      'Divorce Proceedings',
      'Child Custody & Guardianship',
      'Maintenance Applications',
      'Domestic Violence & Protection Orders',
      'Adoption Proceedings',
      'Ante-nuptial Contracts',
      'Customary Marriages',
    ],
    link: '/services/divorce-lawyer-pretoria-east',
    linkLabel: 'Pretoria East divorce help →',
  },
  {
    id: 'criminal-law',
    title: 'Criminal Defense',
    icon: '/img/criminal-law.png',
    iconWidth: 150,
    iconHeight: 150,
    description:
      'We offer a wide array of services which include but are not exclusive to assistance with bail applications, court bail, police bail, representation at trial, appeals, reviews, and all matters relating to criminal proceedings.',
    items: [
      'Bail Applications',
      'Court & Police Bail',
      'Representation at Trial',
      'Appeals & Reviews',
      'Drug-related Offences',
      'Assault & Violence',
      'White-collar Crime',
    ],
    link: '/services/criminal-lawyer-pretoria-bail',
  },
]

function ServiceCard({ service }) {
  return (
    <div
      id={service.id}
      style={{
        background: '#0d0d0d',
        border: '1px solid rgba(210,174,109,0.2)',
        borderRadius: '4px',
        padding: '48px 36px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s, transform 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(210,174,109,0.6)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(210,174,109,0.2)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <img
          src={service.icon}
          alt={service.title}
          width={service.iconWidth}
          height={service.iconHeight}
          loading="lazy"
          decoding="async"
          style={{ width: '64px', height: '64px', objectFit: 'contain' }}
        />
      </div>
      <h3
        style={{
          color: '#d2ae6d',
          fontFamily: 'Raleway, sans-serif',
          fontSize: '22px',
          fontWeight: 700,
          letterSpacing: '1px',
          marginBottom: '16px',
          textTransform: 'uppercase',
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '14px',
          lineHeight: '1.8',
          marginBottom: '28px',
        }}
      >
        {service.description}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: 'auto' }}>
        {service.items.map(item => (
          <li
            key={item}
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '13px',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ color: '#d2ae6d', fontSize: '10px' }}>▸</span>
            {item}
          </li>
        ))}
      </ul>
      {service.link && (
        <a
          href={service.link}
          style={{
            color: '#d2ae6d',
            fontFamily: 'Lato, sans-serif',
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            marginTop: '24px',
          }}
        >
          {service.linkLabel || 'Pretoria bail help →'}
        </a>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: '#050505',
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
            What we do
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
            Legal Services
          </h2>
          <div
            style={{
              width: '60px',
              height: '2px',
              background: '#d2ae6d',
            }}
          />
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {services.map(s => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
