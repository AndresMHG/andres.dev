<script setup lang="ts">
import { SITE } from '~/utils/site'
import {
  personSchema,
  webSiteSchema,
  faqPageSchema,
  jsonLdScript,
} from '~/composables/useStructuredData'

const OG_IMAGE = `${SITE.url}/og-image.png`

useSeoMeta({
  title: 'Andres Hernandez — Frontend Performance Specialist (Vue/Nuxt)',
  description:
    'Especialista em performance Vue.js e Nuxt.js. Lighthouse 90+, Core Web Vitals no verde, mais tráfego orgânico e conversão para apps Vue/Nuxt.',
  ogTitle: 'Andres Hernandez — Frontend Performance Specialist',
  ogDescription:
    'Vue.js e Nuxt.js para times que levam performance a sério. Auditoria, sprint de otimização, migração Nuxt 2 → 3.',
  ogType: 'website',
  ogLocale: 'pt_BR',
  ogUrl: SITE.url,
  ogImage: OG_IMAGE,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Andres Hernandez — Frontend Performance Specialist em Vue.js e Nuxt.js',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Andres Hernandez — Frontend Performance Specialist',
  twitterDescription:
    'Vue/Nuxt para times que levam performance a sério.',
  twitterImage: OG_IMAGE,
})

useHead({
  script: [
    jsonLdScript(personSchema()),
    jsonLdScript(webSiteSchema()),
    jsonLdScript(faqPageSchema()),
  ],
})
</script>

<template>
  <AppNav />

  <main id="main">
    <HeroSection />
    <TrustBar />
    <ProblemSection />
    <ServicesSection />
    <ProcessSection />
    <CasesSection />
    <AboutSection />
    <FaqSection />
    <CtaSection />
  </main>

  <AppFooter />
</template>
