<script setup lang="ts">
const stats = [
  {
    num: '-7%',
    label: 'conversão por cada 1s extra de LCP',
    source: 'Akamai · State of Online Retail Performance',
  },
  {
    num: '53%',
    label: 'de usuários abandonam sites mobile que demoram >3s',
    source: 'Google · Web Performance Research',
  },
  {
    num: '2024+',
    label: 'Core Web Vitals como fator de ranking do Google',
    source: 'Google Search Central · Page Experience',
  },
]
</script>

<template>
  <section id="problema">
    <div class="container">
      <p class="section-tag reveal">// POR QUE IMPORTA</p>
      <h2 class="section-title reveal">
        Performance lenta não é só uma questão técnica.<br />
        É receita perdida todos os dias.
      </h2>
      <p class="section-sub reveal">
        Cada milissegundo de carregamento tem custo real no seu funil. Estes
        números são por que CTOs sérios investem em performance:
      </p>

      <div class="stats">
        <article
          v-for="(s, i) in stats"
          :key="s.num"
          class="stat-card reveal"
          :data-delay="i + 1"
        >
          <div class="stat-num">{{ s.num }}</div>
          <div class="stat-label">{{ s.label }}</div>
          <div class="stat-source">{{ s.source }}</div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.stat-card {
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: transform 0.3s var(--ease-out-quart),
              border-color 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-dim);
}

.stat-num {
  font-size: 48px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 12px;
}

.stat-label {
  font-size: 15px;
  color: var(--text);
  margin-bottom: 8px;
  font-weight: 500;
}

.stat-source {
  font-size: 12px;
  color: var(--text-dim);
}

@media (max-width: 900px) {
  .stats { grid-template-columns: 1fr; }
}
</style>
