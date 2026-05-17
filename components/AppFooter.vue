<script setup lang="ts">
import { SITE, whatsappUrl } from '~/utils/site'

const nav = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#processo', label: 'Processo' },
  { href: '/#cases', label: 'Cases' },
  { href: '/blog', label: 'Blog' },
  { href: '/#sobre', label: 'Sobre' },
]
const wa = whatsappUrl()
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <NuxtLink to="/" class="logo">
            <span class="logo-dot" aria-hidden="true" />
            <span>andres<span class="logo-suffix">.dev</span></span>
          </NuxtLink>
          <p class="footer-tag">
            Frontend Performance Specialist. Vue.js e Nuxt.js para times que
            levam performance a sério.
          </p>
        </div>

        <div class="footer-col">
          <h3>Navegação</h3>
          <ul>
            <li v-for="l in nav" :key="l.href">
              <NuxtLink :to="l.href">{{ l.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Contato</h3>
          <ul>
            <li>
              <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a>
            </li>
            <li>
              <a :href="wa" target="_blank" rel="noopener">
                WhatsApp (41) 98864-8321
              </a>
            </li>
            <li>
              <a :href="SITE.linkedin" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© {{ year }} Andres Hernandez · Curitiba, Brasil</span>
        <span class="mono">Built with Nuxt 3 — obviously.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 48px 0 32px;
  border-top: 1px solid var(--border);
  font-size: 14px;
  color: var(--text-muted);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 32px;
}

.footer-col h3 {
  font-size: 13px;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
  font-weight: 500;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-col a {
  transition: color 0.2s ease;
}

.footer-col a:hover {
  color: var(--accent);
}

.footer-tag {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.6;
  max-width: 320px;
  margin-top: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 15px;
  color: var(--text);
}

.logo-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px var(--accent);
}

.logo-suffix {
  color: var(--text-muted);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  font-size: 13px;
  color: var(--text-dim);
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 760px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
}
</style>
