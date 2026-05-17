<script setup lang="ts">
const steps = [
  {
    num: '01',
    title: 'Diagnóstico gratuito',
    desc: 'Call de 15-30min. Eu rodo Lighthouse no seu site e te mostro os top 3 problemas e seu impacto estimado.',
  },
  {
    num: '02',
    title: 'Auditoria detalhada',
    desc: 'Análise técnica profunda. Relatório com problemas priorizados por impacto vs esforço.',
  },
  {
    num: '03',
    title: 'Sprint de execução',
    desc: 'Implementação das melhorias, com commits revisáveis e métricas before/after a cada entrega.',
  },
  {
    num: '04',
    title: 'Handoff + acompanhamento',
    desc: 'Documentação, transferência de conhecimento ao seu time, e 30 dias de suporte incluso.',
  },
]
</script>

<template>
  <section id="processo">
    <div class="container">
      <p class="section-tag reveal">// COMO FUNCIONA</p>
      <h2 class="section-title reveal">Processo simples, foco em resultados</h2>
      <p class="section-sub reveal">
        Sem ciclos infinitos de "vou analisar". Você sabe exatamente onde
        está, o que vou fazer, e quando.
      </p>

      <ol class="process-grid">
        <li
          v-for="(s, i) in steps"
          :key="s.num"
          class="process-step reveal"
          :data-delay="(i % 4) + 1"
        >
          <div class="process-num mono">{{ s.num }} →</div>
          <h3 class="process-title">{{ s.title }}</h3>
          <p class="process-desc">{{ s.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  counter-reset: step;
}

.process-step {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  position: relative;
  transition: transform 0.3s var(--ease-out-quart),
              border-color 0.3s ease;
}

.process-step:hover {
  transform: translateY(-3px);
  border-color: var(--accent-dim);
}

.process-num {
  font-size: 13px;
  color: var(--accent);
  margin-bottom: 16px;
  font-weight: 500;
}

.process-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.process-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 980px) {
  .process-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 560px) {
  .process-grid { grid-template-columns: 1fr; }
}
</style>
