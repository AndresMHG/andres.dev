<script setup lang="ts">
import { SITE, whatsappUrl } from '~/utils/site'
const wa = whatsappUrl()
</script>

<template>
  <section id="contato" class="cta-final-section">
    <div class="container">
      <div class="cta-card reveal">
        <h2>Pronto para acelerar seu app Vue/Nuxt?</h2>
        <p>
          Diagnóstico gratuito de 15-30 minutos. Te mostro onde está perdendo
          performance e conversão, sem compromisso.
        </p>
        <div class="cta-ctas">
          <a :href="`mailto:${SITE.email}`" class="btn btn-primary">
            Enviar e-mail
          </a>
          <a
            :href="wa"
            class="btn btn-ghost"
            target="_blank"
            rel="noopener"
          >
            WhatsApp direto
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-final-section {
  padding: 80px 0;
}

.cta-card {
  position: relative;
  background:
    linear-gradient(135deg, var(--accent-soft), transparent 70%),
    var(--surface);
  border: 1px solid var(--accent-dim);
  border-radius: var(--radius-lg);
  padding: 64px 48px;
  text-align: center;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    var(--accent-soft) 90deg,
    transparent 180deg,
    var(--accent-soft) 270deg,
    transparent 360deg
  );
  animation: spin 12s linear infinite;
  z-index: 0;
  opacity: 0.55;
}

.cta-card::after {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  z-index: 0;
}

.cta-card > * {
  position: relative;
  z-index: 1;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.cta-card h2 {
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.cta-card p {
  color: var(--text-muted);
  font-size: 17px;
  margin-bottom: 32px;
  max-width: 560px;
  margin-inline: auto;
}

.cta-ctas {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 560px) {
  .cta-card { padding: 40px 24px; }
}
</style>
