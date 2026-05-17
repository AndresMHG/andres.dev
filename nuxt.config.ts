// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = 'https://andresdev.vercel.app'
const OG_IMAGE = `${SITE_URL}/og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,

  modules: ['@nuxt/fonts', '@nuxt/content', '@nuxtjs/sitemap'],

  site: {
    url: SITE_URL,
    name: 'Andres Hernandez — Frontend Performance Specialist',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Andres Hernandez — Frontend Performance Specialist (Vue/Nuxt)',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0a' },
        {
          name: 'description',
          content:
            'Especialista em performance Vue.js e Nuxt.js. Lighthouse 90+, Core Web Vitals no verde, mais tráfego orgânico e conversão.',
        },

        // Open Graph
        { property: 'og:site_name', content: 'andres.dev' },
        { property: 'og:title', content: 'Andres Hernandez — Frontend Performance Specialist' },
        { property: 'og:description', content: 'Vue/Nuxt para times que levam performance a sério.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:image', content: OG_IMAGE },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'Andres Hernandez — Frontend Performance Specialist em Vue.js e Nuxt.js' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Andres Hernandez — Frontend Performance Specialist' },
        { name: 'twitter:description', content: 'Vue/Nuxt para times que levam performance a sério.' },
        { name: 'twitter:image', content: OG_IMAGE },
        { name: 'twitter:image:alt', content: 'Andres Hernandez — Frontend Performance Specialist' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: `${SITE_URL}/` },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog'],
    },
    compressPublicAssets: { gzip: true, brotli: true },
  },

  experimental: {
    payloadExtraction: true,
    inlineSSRStyles: true,
    viewTransition: true,
  },

  features: {
    inlineStyles: true,
  },

  routeRules: {
    '/**': { prerender: true },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
    defaults: {
      preload: true,
      weights: [400, 500, 600, 700],
      styles: ['normal'],
    },
  },

  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-dark',
      preload: ['ts', 'js', 'vue', 'bash', 'json', 'html', 'css'],
    },
    markdown: {
      anchorLinks: { depth: 3 },
    },
  },

  sitemap: {
    autoLastmod: true,
    xsl: false,
  },

  css: ['~/assets/css/main.css'],
})
