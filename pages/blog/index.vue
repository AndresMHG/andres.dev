<script setup lang="ts">
import { SITE } from '~/utils/site'
import {
  blogSchema,
  breadcrumbListSchema,
  jsonLdScript,
} from '~/composables/useStructuredData'

const { data: posts } = await useAsyncData('blog-list', () =>
  queryContent('/blog')
    .only(['_path', 'title', 'description', 'date', 'tags', 'readingTime'])
    .sort({ date: -1 })
    .find()
)

useSeoMeta({
  title: 'Blog — Performance Vue/Nuxt · andres.dev',
  description:
    'Posts técnicos sobre performance Vue.js e Nuxt.js, Core Web Vitals, migração Nuxt 2 → 3 e SEO técnico para SaaS.',
  ogTitle: 'Blog — Performance Vue/Nuxt · andres.dev',
  ogDescription:
    'Posts técnicos sobre performance Vue.js e Nuxt.js, Core Web Vitals e SEO técnico.',
})

const blogUrl = `${SITE.url}/blog`

useHead({
  link: [{ rel: 'canonical', href: blogUrl }],
  script: [
    jsonLdScript(
      blogSchema({
        url: blogUrl,
        posts: (posts.value ?? []).map((p) => ({
          title: String(p.title ?? ''),
          url: `${SITE.url}${p._path}`,
          description: p.description ? String(p.description) : undefined,
          datePublished: String(p.date ?? ''),
        })),
      })
    ),
    jsonLdScript(
      breadcrumbListSchema([
        { name: 'Home', url: `${SITE.url}/` },
        { name: 'Blog', url: blogUrl },
      ])
    ),
  ],
})

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
</script>

<template>
  <AppNav />

  <main id="main">
    <section class="blog-hero">
      <div class="container">
        <p class="section-tag">// BLOG</p>
        <h1>Notas sobre performance Vue/Nuxt</h1>
        <p class="hero-sub">
          Posts técnicos sobre o que tenho aprendido entregando performance em
          produção. Sem fluff, com exemplos reais.
        </p>
      </div>
    </section>

    <section class="blog-list-section">
      <div class="container">
        <ul class="posts">
          <li v-for="p in posts" :key="p._path" class="post-card">
            <NuxtLink :to="p._path" class="post-link">
              <div class="post-meta">
                <time :datetime="String(p.date)">{{ formatDate(String(p.date)) }}</time>
                <span v-if="p.readingTime" class="post-read">·  {{ p.readingTime }} min</span>
              </div>
              <h2 class="post-title">{{ p.title }}</h2>
              <p class="post-desc">{{ p.description }}</p>
              <div v-if="p.tags?.length" class="post-tags">
                <span v-for="t in p.tags" :key="t" class="tag">#{{ t }}</span>
              </div>
              <span class="post-cta">Ler post →</span>
            </NuxtLink>
          </li>
        </ul>

        <p v-if="!posts?.length" class="empty">Em breve, mais posts.</p>
      </div>
    </section>
  </main>

  <AppFooter />
</template>

<style scoped>
.blog-hero {
  padding: 100px 0 48px;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.blog-hero::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(circle, var(--accent-soft), transparent 60%);
  pointer-events: none;
  z-index: 0;
}

.blog-hero > .container { position: relative; z-index: 1; }

h1 {
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.hero-sub {
  color: var(--text-muted);
  font-size: 18px;
  max-width: 560px;
}

.blog-list-section { padding: 32px 0 96px; }

.posts {
  list-style: none;
  display: grid;
  gap: 16px;
}

.post-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: transform 0.25s var(--ease-out-quart),
              border-color 0.25s ease;
}

.post-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.post-link {
  display: block;
  padding: 28px;
}

.post-meta {
  font-size: 13px;
  color: var(--text-dim);
  margin-bottom: 12px;
}

.post-read { margin-left: 4px; }

.post-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.post-desc {
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  font-size: 12px;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 3px 10px;
  border-radius: 99px;
}

.post-cta {
  font-size: 14px;
  color: var(--accent);
  font-weight: 500;
}

.empty { color: var(--text-dim); text-align: center; padding: 48px 0; }
</style>
