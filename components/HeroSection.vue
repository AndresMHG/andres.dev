<script setup lang="ts">
const scores = [
  { value: 96, label: 'Performance' },
  { value: 100, label: 'Acessibilidade' },
  { value: 98, label: 'Best Practices' },
  { value: 100, label: 'SEO' },
]
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-copy reveal">
          <div class="badge">
            <span class="badge-dot" aria-hidden="true" />
            Disponível para 2 projetos em julho
          </div>

          <h1>
            Seu site Vue/Nuxt está
            <span class="accent">deixando dinheiro</span>
            na mesa.
          </h1>

          <p class="hero-sub">
            Frontend Performance Specialist com 6+ anos otimizando aplicações
            Vue.js e Nuxt.js em produção. Lighthouse 90+, Core Web Vitals no
            verde, mais tráfego orgânico e conversão.
          </p>

          <div class="hero-ctas">
            <a href="#contato" class="btn btn-primary">
              Solicitar diagnóstico gratuito
            </a>
            <a href="#cases" class="btn btn-ghost">Ver resultados</a>
          </div>
        </div>

        <div class="lighthouse-card reveal" data-delay="2" aria-hidden="false">
          <div class="lh-header">
            <div>
              <div class="lh-title">Lighthouse Report</div>
              <div class="lh-url mono">seu-app.com.br</div>
            </div>
            <div class="lh-after">↑ Depois</div>
          </div>

          <div class="lh-circles">
            <div
              v-for="(s, i) in scores"
              :key="s.label"
              class="lh-circle"
              :style="{ '--i': i }"
            >
              <div class="lh-score" :style="{ '--p': s.value }">
                <span>{{ s.value }}</span>
              </div>
              <div class="lh-label">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle,
    var(--accent-soft) 0%,
    transparent 60%
  );
  z-index: 0;
  pointer-events: none;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(-50%, 0); }
  50%      { transform: translate(-50%, -20px); }
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid var(--border-strong);
  border-radius: 99px;
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.35; }
}

h1 {
  font-size: clamp(36px, 5vw, 60px);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.accent {
  color: var(--accent);
  background: linear-gradient(180deg, var(--accent), var(--accent-strong));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-sub {
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 560px;
  margin-bottom: 36px;
}

.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Lighthouse card */
.lighthouse-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.8);
}

.lh-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.lh-title {
  font-size: 13px;
  color: var(--text-muted);
}

.lh-url {
  font-size: 12px;
  color: var(--accent);
  margin-top: 2px;
}

.lh-after {
  font-size: 12px;
  color: var(--accent);
  font-weight: 500;
}

.lh-circles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.lh-circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: rise 0.7s var(--ease-out-quart) both;
  animation-delay: calc(var(--i) * 0.12s + 0.5s);
}

@keyframes rise {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.lh-score {
  --p: 100;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  position: relative;
  background:
    conic-gradient(var(--accent) calc(var(--p) * 1%), var(--border) 0);
}

.lh-score::before {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: var(--surface);
}

.lh-score span {
  position: relative;
  z-index: 1;
}

.lh-label {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
}

@media (max-width: 920px) {
  .hero-inner { grid-template-columns: 1fr; gap: 48px; }
}

@media (max-width: 480px) {
  .lh-circles { grid-template-columns: repeat(2, 1fr); }
}
</style>
