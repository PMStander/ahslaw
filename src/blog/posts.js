import b1 from './content/B1-pie-act-locks.md?raw'
import b2 from './content/B2-labour-bill-2026.md?raw'
import b3 from './content/B3-arrest-rights.md?raw'
// import b4 from './content/B4-marital-regimes.md?raw'
// import b5 from './content/B5-debt-myth.md?raw'
// import b6 from './content/B6-popia-whatsapp.md?raw'
// import b7 from './content/B7-conveyancing.md?raw'
// import b8 from './content/B8-maintenance.md?raw'

function stripFrontmatter(raw) {
  return raw.replace(/^---[\s\S]*?---\n/, '').trim()
}

export const posts = [
  {
    slug: 'pie-act-locks',
    title: "Can Your Landlord Really Change the Locks? The PIE Act Explained",
    pillar: 'Eviction & Tenant Rights',
    hero: '/img/blog/B1-pie-act-locks.png',
    published: '2026-04-25',
    excerpt: 'Your landlord cannot remove you without a court order — no matter how many months rent you owe. The PIE Act is clear, and breaking it is a criminal offence.',
    content: stripFrontmatter(b1),
  },
  {
    slug: 'labour-law-amendment-bill-2026',
    title: "What the 2026 Labour Law Amendment Bill *Proposes* for You",
    pillar: 'Labour',
    hero: '/img/blog/B2-labour-bill-2026.png',
    published: '2026-05-06',
    excerpt: 'The Labour Law Amendment Bills propose doubling severance pay, extending parental leave to all parents, and bringing gig workers into the formal labour system. Here is what the proposals mean for you.',
    content: stripFrontmatter(b2),
  },
  {
    slug: 'your-rights-when-arrested-south-africa',
    title: "Your Rights When Arrested in South Africa — A 5-Minute Guide",
    pillar: 'Criminal',
    hero: '/img/blog/B3-arrest-rights.png',
    published: '2026-05-13',
    excerpt: 'Silence is not guilt. You have the right to remain silent, the right to a lawyer, and the right to be brought to court within 48 hours. Know them before you need them.',
    content: stripFrontmatter(b3),
  },
  // B4–B8 commented out — client reviewing one post at a time
  // {
  //   slug: 'community-of-property-vs-accrual',
  //   title: "Community of Property vs Accrual — Which Actually Protects You?",
  //   pillar: 'Family',
  //   hero: '/img/blog/B4-marital-regimes.png',
  //   published: '2026-04-25',
  //   excerpt: 'The marital regime you choose at the altar follows you into every business deal, debt, and divorce. Most couples pick the default without knowing what it means.',
  //   content: stripFrontmatter(b4),
  // },
  // {
  //   slug: 'you-cannot-be-arrested-for-debt',
  //   title: "You Cannot Be Arrested for Debt. Here's What Actually Happens",
  //   pillar: 'Debt',
  //   hero: '/img/blog/B5-debt-myth.png',
  //   published: '2026-04-25',
  //   excerpt: 'Debt collectors say a lot of things. Most of them are false. In South Africa, civil debt cannot land you in a cell — but there are consequences you need to understand.',
  //   content: stripFrontmatter(b5),
  // },
  // {
  //   slug: 'popia-can-your-employer-read-your-whatsapp',
  //   title: "POPIA: Can Your Employer Read Your WhatsApp?",
  //   pillar: 'POPIA',
  //   hero: '/img/blog/B6-popia-whatsapp.png',
  //   published: '2026-04-25',
  //   excerpt: 'POPIA changed the rules on what employers can monitor, collect, and share. The short answer: it depends on the device, the policy, and the purpose.',
  //   content: stripFrontmatter(b6),
  // },
  // {
  //   slug: 'property-transfer-explained-what-you-pay-why-it-takes-so-long',
  //   title: "Property Transfer Explained: What You Pay, Why It Takes So Long",
  //   pillar: 'Property',
  //   hero: '/img/blog/B7-conveyancing.png',
  //   published: '2026-04-25',
  //   excerpt: 'Buying property in South Africa involves transfer duty, conveyancing fees, and a process most buyers do not fully understand until they are in the middle of it.',
  //   content: stripFrontmatter(b7),
  // },
  // {
  //   slug: 'maintenance-unpaid-what-to-do-next',
  //   title: "Maintenance Unpaid? Exactly What to Do Next",
  //   pillar: 'Family',
  //   hero: '/img/blog/B8-maintenance.png',
  //   published: '2026-04-25',
  //   excerpt: 'Unpaid maintenance is not a civil matter you simply wait out. The Maintenance Act gives you real tools — and the courts use them.',
  //   content: stripFrontmatter(b8),
  // },
]

export function getPost(slug) {
  return posts.find(p => p.slug === slug) || null
}
