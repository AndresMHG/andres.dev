<script setup lang="ts">
type Metric = {
  label: string
  before?: string
  after: string
  delta: string
  extra?: string
}

type Case = {
  tag: string
  title: string
  metrics: Metric[]
}

const cases: Case[] = [
  {
    tag: 'Migração Nuxt 2 → 3',
    title: 'Plataforma de marketplace automotivo',
    metrics: [
      { label: 'Lighthouse Performance', before: '42', after: '94', delta: '+124%' },
      { label: 'LCP (Largest Contentful Paint)', before: '4.8s', after: '1.6s', delta: '-67%' },
      { label: 'Bundle JS', before: '820kb', after: '310kb', delta: '-62%' },
      { label: 'Tráfego orgânico', after: '+38%', delta: '3 meses' },
    ],
  },
  {
    tag: 'SEO + Performance',
    title: 'Páginas de calculadoras (SaaS contábil)',
    metrics: [
      { label: 'CLS (Cumulative Layout Shift)', before: '0.31', after: '0.02', delta: '-94%' },
      { label: 'FCP (First Contentful Paint)', before: '2.4s', after: '0.9s', delta: '-63%' },
      { label: 'Posição média Google', before: '#14', after: '#3', delta: '+11 pos' },
      { label: 'Conversão de visita → lead', after: '+22%', delta: 'A/B test' },
    ],
  },
]
</script>

<template>
  <section id="cases" class="cases">
    <div class="container">
      <p class="section-tag reveal">// CASES</p>
      <h2 class="section-title reveal">Resultados reais em projetos reais</h2>
      <p class="section-sub reveal">
        Métricas representativas de projetos liderados em Contabilizei e
        SóCarrão. Detalhes específicos sob NDA — feliz em discutir em call.
      </p>

      <div class="cases-grid">
        <article
          v-for="(c, i) in cases"
          :key="c.title"
          class="case-card reveal"
          :data-delay="i + 1"
        >
          <span class="case-tag">{{ c.tag }}</span>
          <h3 class="case-title">{{ c.title }}</h3>

          <div class="case-metrics">
            <div
              v-for="m in c.metrics"
              :key="m.label"
              class="case-metric"
            >
              <div class="case-metric-label">{{ m.label }}</div>
              <div class="case-metric-row">
                <span v-if="m.before" class="case-before">{{ m.before }}</span>
                <span class="case-after">{{ m.after }}</span>
                <span v-if="!m.before" class="case-extra">{{ m.delta }}</span>
                <span v-else class="case-delta">{{ m.delta }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases {
  background: var(--surface-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.case-card {
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: transform 0.3s var(--ease-out-quart),
              border-color 0.3s ease;
}

.case-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-dim);
}

.case-tag {
  display: inline-block;
  font-size: 11px;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 4px 10px;
  border-radius: 99px;
  margin-bottom: 16px;
  font-weight: 500;
}

.case-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

.case-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.case-metric {
  padding: 16px;
  background: var(--bg);
  border-radius: 10px;
  border: 1px solid transparent;
  transition: border-color 0.25s ease;
}

.case-card:hover .case-metric {
  border-color: var(--border);
}

.case-metric-label {
  font-size: 11px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.case-metric-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.case-before {
  font-size: 18px;
  color: var(--text-dim);
  text-decoration: line-through;
}

.case-after {
  font-size: 22px;
  color: var(--accent);
  font-weight: 700;
}

.case-delta {
  font-size: 12px;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: auto;
}

.case-extra {
  font-size: 12px;
  color: var(--text-dim);
  margin-left: auto;
}

@media (max-width: 900px) {
  .cases-grid { grid-template-columns: 1fr; }
}

@media (max-width: 420px) {
  .case-metrics { grid-template-columns: 1fr; }
}
</style>
