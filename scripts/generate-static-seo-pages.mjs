import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const SITE_URL = 'https://www.ahslaw.co.za'
const DIST_DIR = path.resolve('dist')
const INDEX_PATH = path.join(DIST_DIR, 'index.html')

const business = {
  '@type': 'LegalService',
  '@id': `${SITE_URL}/#legalservice`,
  name: 'AH Stander & Agenbag Inc',
  alternateName: 'AHS Law',
  url: `${SITE_URL}/`,
  telephone: '+27 12 991 2875',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '63 Ingersol Rd, Lynnwood Glen',
    addressLocality: 'Pretoria',
    postalCode: '0081',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
}

const pages = [
  {
    path: '/services/criminal-lawyer-pretoria-bail',
    title: 'Criminal Lawyer & Bail Attorney Pretoria | AHS Law',
    description:
      'AHS Law assists with urgent bail applications and criminal defence in Pretoria, Pretoria East, Lynnwood Glen, Faerie Glen, and Gauteng courts.',
    image: `${SITE_URL}/img/criminal-law.png`,
    serviceName: 'Criminal Lawyer and Bail Attorney in Pretoria',
    serviceType: 'Criminal defence and bail applications',
    areaServed: ['Pretoria', 'Pretoria East', 'Lynnwood Glen', 'Faerie Glen', 'Gauteng'],
  },
  {
    path: '/services/divorce-lawyer-pretoria-east',
    title: 'Divorce Lawyer Pretoria East | Family Law | AHS Law',
    description:
      'AHS Law assists with divorce, family law, maintenance, children, accrual and community of property matters in Pretoria East and Gauteng.',
    image: `${SITE_URL}/img/family-law.png`,
    serviceName: 'Divorce Lawyer in Pretoria East',
    serviceType: 'Family law, divorce, accrual and community of property advice',
    areaServed: ['Pretoria East', 'Pretoria', 'Lynnwood Glen', 'Faerie Glen', 'Gauteng'],
  },
  {
    path: '/services/civil-litigation-attorney-pretoria',
    title: 'Civil Litigation Attorney Pretoria | Disputes | AHS Law',
    description:
      'AHS Law assists with civil litigation, disputes, court process, urgent applications, contractual claims and settlement strategy in Pretoria and Gauteng.',
    image: `${SITE_URL}/img/litigation.png`,
    serviceName: 'Civil Litigation Attorney in Pretoria',
    serviceType: 'Civil litigation, disputes and court process',
    areaServed: ['Pretoria', 'Pretoria East', 'Lynnwood Glen', 'Faerie Glen', 'Gauteng'],
  },
  {
    path: '/services/eviction-attorney-pretoria',
    title: 'Eviction Attorney Pretoria | PIE Act Court Orders | AHS Law',
    description:
      'AHS Law assists landlords and occupiers in Pretoria with eviction applications, PIE Act notices, court orders and urgent unlawful eviction advice.',
    image: `${SITE_URL}/img/litigation.png`,
    serviceName: 'Eviction Attorney in Pretoria',
    serviceType: 'Eviction applications, PIE Act notices, landlord and tenant litigation',
    areaServed: ['Pretoria', 'Pretoria East', 'Lynnwood Glen', 'Faerie Glen', 'Gauteng'],
  },
  {
    path: '/services/conveyancing-attorney-pretoria',
    title: 'Conveyancing Attorney Pretoria | Property Transfer | AHS Law',
    description:
      'AHS Law assists with conveyancing attorney Pretoria services, property transfer, transfer duty, sectional title transfers and deeds office lodgement in Pretoria and Gauteng.',
    image: `${SITE_URL}/img/about.jpg`,
    serviceName: 'Conveyancing Attorney in Pretoria',
    serviceType: 'Property transfer, conveyancing and deeds office lodgement',
    areaServed: ['Pretoria', 'Pretoria East', 'Lynnwood Glen', 'Faerie Glen', 'Gauteng'],
  },
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function buildStructuredData(page) {
  const canonicalUrl = `${SITE_URL}${page.path}`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: page.serviceName,
      serviceType: page.serviceType,
      areaServed: page.areaServed,
      provider: business,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${SITE_URL}/#services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: page.serviceName,
          item: canonicalUrl,
        },
      ],
    },
  ]
}

function buildHeadTags(page) {
  const canonicalUrl = `${SITE_URL}${page.path}`
  const structuredData = buildStructuredData(page)

  return `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${page.image}" />
    <script type="application/ld+json">${JSON.stringify(structuredData[0])}</script>
    <script type="application/ld+json">${JSON.stringify(structuredData[1])}</script>`
}

function injectHead(indexHtml, page) {
  return indexHtml.replace('</head>', `${buildHeadTags(page)}\n  </head>`)
}

const indexHtml = await readFile(INDEX_PATH, 'utf8')

await Promise.all(
  pages.map(async page => {
    const routeDir = path.join(DIST_DIR, page.path)
    await mkdir(routeDir, { recursive: true })
    await writeFile(path.join(routeDir, 'index.html'), injectHead(indexHtml, page))
  }),
)

console.log(`Generated static SEO HTML for ${pages.length} service pages.`)
