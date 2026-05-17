<script setup lang="ts">
const services = [
  {
    icon: 'A',
    title: 'Auditoria de Performance',
    desc: 'Análise profunda do seu app Vue/Nuxt com Lighthouse, WebPageTest e Chrome DevTools. Relatório com top 10 problemas priorizados por impacto e plano de ação executável.',
    meta: { label: 'Entrega:', text: '1 semana · Relatório PDF + call de 30min' },
  },
  {
    icon: 'S',
    title: 'Sprint de Otimização',
    desc: 'Implementação direta das melhorias: lazy loading, code splitting, otimização de bundle, imagens, fonts, SSR, hidratação. Meta: Lighthouse Performance 90+ ao final do sprint.',
    meta: { label: 'Duração:', text: '2-4 semanas · Métricas before/after' },
  },
  {
    icon: 'M',
    title: 'Migração Nuxt 2 → 3',
    desc: 'Migração completa de Nuxt 2 (em fim de vida) para Nuxt 3. Já liderei uma migração de produção end-to-end. Plano de migração faseado, sem downtime, com testes em cada etapa.',
    meta: { label: 'Duração:', text: '4-12 semanas · Dependendo do escopo' },
  },
  {
    icon: 'C',
    title: 'Consultoria Pontual',
    desc: 'Sessões focadas em problemas específicos: arquitetura, Core Web Vitals, SEO técnico, Datadog/observabilidade, escolhas de stack. Ideal para times que precisam de uma segunda opinião sênior.',
    meta: { label: 'Formato:', text: 'Sessões de 1-2h · Por hora ou pacote' },
  },
]
</script>

<template>
  <section id="servicos" class="services">
    <div class="container">
      <p class="section-tag reveal">// SERVIÇOS</p>
      <h2 class="section-title reveal">Quatro formas de trabalharmos juntos</h2>
      <p class="section-sub reveal">
        Cada serviço começa com um diagnóstico gratuito. Investimento sob
        consulta após avaliarmos o escopo real do seu projeto.
      </p>

      <div class="services-grid">
        <article
          v-for="(s, i) in services"
          :key="s.title"
          class="service-card reveal"
          :data-delay="(i % 2) + 1"
        >
          <div class="service-icon" aria-hidden="true">{{ s.icon }}</div>
          <h3 class="service-title">{{ s.title }}</h3>
          <p class="service-desc">{{ s.desc }}</p>
          <div class="service-meta">
            <strong>{{ s.meta.label }}</strong>
            {{ s.meta.text }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: var(--surface-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.service-card {
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: transform 0.25s var(--ease-out-quart),
              border-color 0.25s ease,
              box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    600px circle at var(--mx, 50%) var(--my, 0%),
    var(--accent-soft),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.service-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 16px 40px -24px rgba(163, 230, 53, 0.35);
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  transition: transform 0.3s var(--ease-out-quart);
}

.service-card:hover .service-icon {
  transform: rotate(-6deg) scale(1.05);
}

.service-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.service-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 16px;
}

.service-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-dim);
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.service-meta strong {
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 760px) {
  .services-grid { grid-template-columns: 1fr; }
}
</style>
