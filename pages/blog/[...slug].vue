<script setup lang="ts">
const route = useRoute()
const path = route.path

const { data: post } = await useAsyncData(`post-${path}`, () =>
  queryContent(path).findOne()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post não encontrado', fatal: true })
}

useSeoMeta({
  title: `${post.value.title} · andres.dev`,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogType: 'article',
  articleAuthor: post.value.author,
  articlePublishedTime: post.value.date,
  twitterTitle: post.value.title,
  twitterDescription: post.value.description,
})

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })
</script>

<template>
  <AppNav />

  <main id="main">
    <article v-if="post" class="post">
      <div class="container narrow">
        <NuxtLink to="/blog" class="back">← Todos os posts</NuxtLink>

        <header class="post-header">
          <div class="meta">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span v-if="post.readingTime">·  {{ post.readingTime }} min de leitura</span>
          </div>
          <h1>{{ post.title }}</h1>
          <p v-if="post.description" class="lede">{{ post.description }}</p>
          <div v-if="post.tags?.length" class="tags">
            <span v-for="t in post.tags" :key="t" class="tag">#{{ t }}</span>
          </div>
        </header>

        <div class="prose">
          <ContentRenderer :value="post" />
        </div>

        <aside class="cta-inline">
          <h3>Gostou desse post?</h3>
          <p>Faço auditoria e otimização para apps Vue/Nuxt. Diagnóstico inicial gratuito.</p>
          <div class="cta-buttons">
            <a href="/#contato" class="btn btn-primary">Solicitar diagnóstico</a>
            <a
              href="https://wa.me/5541988648321?text=Ol%C3%A1%20Andres!%20Vi%20seu%20blog%20e%20gostaria%20de%20conversar."
              class="btn btn-ghost"
              target="_blank"
              rel="noopener"
            >WhatsApp</a>
          </div>
        </aside>
      </div>
    </article>
  </main>

  <AppFooter />
</template>

<style scoped>
.post { padding: 64px 0 96px; }

.narrow {
  max-width: 760px;
  margin-inline: auto;
}

.back {
  display: inline-block;
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 32px;
  transition: color 0.2s ease;
}

.back:hover { color: var(--accent); }

.post-header { margin-bottom: 48px; }

.meta {
  font-size: 13px;
  color: var(--text-dim);
  margin-bottom: 16px;
}

h1 {
  font-size: clamp(28px, 4.2vw, 44px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 16px;
}

.lede {
  font-size: 19px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}

.tags { display: flex; flex-wrap: wrap; gap: 8px; }

.tag {
  font-size: 12px;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 4px 10px;
  border-radius: 99px;
}

/* Markdown content */
.prose :deep(h1) { display: none; }

.prose :deep(h2) {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 48px 0 16px;
}

.prose :deep(h3) {
  font-size: 20px;
  font-weight: 600;
  margin: 32px 0 12px;
}

.prose :deep(p) {
  color: var(--text-muted);
  font-size: 17px;
  line-height: 1.75;
  margin-bottom: 20px;
}

.prose :deep(a) {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

.prose :deep(strong) { color: var(--text); font-weight: 600; }

.prose :deep(ul),
.prose :deep(ol) {
  color: var(--text-muted);
  font-size: 17px;
  line-height: 1.75;
  padding-left: 24px;
  margin-bottom: 20px;
}

.prose :deep(li) { margin-bottom: 8px; }

.prose :deep(code:not(pre code)) {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.92em;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  color: var(--accent);
}

.prose :deep(pre) {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 18px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.prose :deep(blockquote) {
  border-left: 3px solid var(--accent);
  padding: 6px 18px;
  margin: 24px 0;
  color: var(--text);
  background: var(--accent-soft);
  border-radius: 0 8px 8px 0;
}

.prose :deep(blockquote p) { color: var(--text); margin: 0; }

.prose :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 14px;
}

.prose :deep(th),
.prose :deep(td) {
  padding: 10px 14px;
  border: 1px solid var(--border);
  text-align: left;
}

.prose :deep(th) {
  background: var(--surface);
  font-weight: 600;
  color: var(--text);
}

.prose :deep(td) { color: var(--text-muted); }

/* Inline CTA */
.cta-inline {
  margin-top: 64px;
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--accent-dim);
  border-radius: var(--radius-lg);
  text-align: center;
}

.cta-inline h3 {
  font-size: 22px;
  margin-bottom: 8px;
}

.cta-inline p {
  color: var(--text-muted);
  font-size: 15px;
  margin-bottom: 20px;
}

.cta-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
