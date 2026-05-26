import { SITE } from '~/utils/site'
import { FAQS, type Faq } from '~/utils/faqs'

const PERSON_ID = `${SITE.url}/#person`
const WEBSITE_ID = `${SITE.url}/#website`

type Json = Record<string, unknown>

export const personSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE.name,
  jobTitle: 'Frontend Performance Specialist',
  url: `${SITE.url}/`,
  email: `mailto:${SITE.email}`,
  sameAs: [SITE.linkedin],
  knowsAbout: ['Vue.js', 'Nuxt.js', 'Web Performance', 'Core Web Vitals', 'SEO'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
})

export const webSiteSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE.url}/`,
  name: 'andres.dev',
  description:
    'Portfólio de Andres Hernandez — especialista em performance Vue.js e Nuxt.js para SaaS brasileiros.',
  inLanguage: 'pt-BR',
  publisher: { '@id': PERSON_ID },
})

export const faqPageSchema = (faqs: readonly Faq[] = FAQS): Json => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export interface BreadcrumbItem {
  name: string
  url: string
}

export const breadcrumbListSchema = (items: BreadcrumbItem[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
})

export interface BlogPostingInput {
  title: string
  description?: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  keywords?: readonly string[]
  image?: string
}

export const blogPostingSchema = (p: BlogPostingInput): Json => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: p.title,
  description: p.description,
  url: p.url,
  mainEntityOfPage: { '@type': 'WebPage', '@id': p.url },
  datePublished: p.datePublished,
  dateModified: p.dateModified ?? p.datePublished,
  inLanguage: 'pt-BR',
  author: {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: p.author ?? SITE.name,
    url: `${SITE.url}/`,
  },
  publisher: { '@id': PERSON_ID },
  image: p.image ?? `${SITE.url}/og-image.png`,
  ...(p.keywords?.length ? { keywords: p.keywords.join(', ') } : {}),
})

export interface BlogIndexInput {
  url: string
  posts: Array<{ title: string; url: string; description?: string; datePublished: string }>
}

export const blogSchema = (input: BlogIndexInput): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${input.url}#blog`,
  url: input.url,
  name: 'Blog · andres.dev',
  inLanguage: 'pt-BR',
  publisher: { '@id': PERSON_ID },
  blogPost: input.posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    url: p.url,
    datePublished: p.datePublished,
    author: { '@id': PERSON_ID },
  })),
})

export const jsonLdScript = (schema: Json | Json[]) => ({
  type: 'application/ld+json' as const,
  innerHTML: JSON.stringify(schema),
})
