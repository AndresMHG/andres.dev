<script setup lang="ts">
const companies = ['Contabilizei', 'SóCarrão', 'PlugApps', 'A&M Solutions']
</script>

<template>
  <section class="trust" aria-label="Empresas onde atuei">
    <div class="container">
      <p class="trust-label">Experiência em equipes de produto como</p>
      <ul class="trust-logos">
        <li v-for="(c, i) in companies" :key="c" :style="{ '--i': i }">
          <span class="trust-logo">{{ c }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.trust {
  padding: 32px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.trust-label {
  font-size: 12px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 24px;
}

.trust-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;
  list-style: none;
}

.trust-logo {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-muted);
  opacity: 0.7;
  transition: opacity 0.25s ease, transform 0.25s var(--ease-out-quart);
  display: inline-block;
}

.trust-logos li:hover .trust-logo {
  opacity: 1;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .trust-logos { gap: 28px; }
  .trust-logo  { font-size: 16px; }
}
</style>
