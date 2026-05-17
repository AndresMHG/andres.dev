<script setup lang="ts">
const links = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#processo', label: 'Processo' },
  { href: '/#cases', label: 'Cases' },
  { href: '/blog', label: 'Blog' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#faq', label: 'FAQ' },
]
</script>

<template>
  <nav aria-label="Navegação principal">
    <div class="container">
      <NuxtLink to="/" class="logo" aria-label="andres.dev — início">
        <span class="logo-dot" aria-hidden="true" />
        <span>andres<span class="logo-suffix">.dev</span></span>
      </NuxtLink>

      <ul class="nav-links">
        <li v-for="l in links" :key="l.href">
          <NuxtLink :to="l.href">{{ l.label }}</NuxtLink>
        </li>
      </ul>

      <NuxtLink to="/#contato" class="btn btn-primary nav-cta">
        Diagnóstico gratuito
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10, 10, 10, 0.75);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid var(--border);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 18px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 15px;
}

.logo-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px var(--accent);
  animation: glow 2.4s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 8px var(--accent); }
  50%      { box-shadow: 0 0 18px var(--accent); }
}

.logo-suffix {
  color: var(--text-muted);
}

.nav-links {
  display: flex;
  gap: 32px;
  font-size: 14px;
  color: var(--text-muted);
  list-style: none;
}

.nav-links a {
  position: relative;
  padding-block: 4px;
  transition: color 0.2s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s var(--ease-out-quart);
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

@media (max-width: 820px) {
  .nav-links { display: none; }
}

@media (max-width: 480px) {
  .nav-cta { padding: 9px 14px; font-size: 13px; }
}
</style>
