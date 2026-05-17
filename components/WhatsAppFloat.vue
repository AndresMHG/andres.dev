<script setup lang="ts">
import { whatsappUrl } from '~/utils/site'
const href = whatsappUrl()
</script>

<template>
  <a
    :href="href"
    class="wa-float"
    target="_blank"
    rel="noopener"
    aria-label="Falar com Andres pelo WhatsApp"
  >
    <span class="wa-ring" aria-hidden="true" />
    <svg
      class="wa-icon"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.4c2.3 1.3 5 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4Zm0 28.3c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-4.9 1.4 1.5-4.7-.3-.5C3.7 20.6 3 18.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.7-13 12.7Zm7.1-9.6c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.3.2-.5.3-.8 0-.3 0-.6-.1-.8-.1-.2-.9-2.2-1.2-3-.3-.8-.7-.7-.9-.7-.2 0-.5 0-.8 0-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4 0 2 1.5 3.9 1.7 4.2.2.3 2.9 4.4 7 6.2.9.4 1.7.7 2.3.9.9.3 1.8.2 2.5.1.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.1-.4-.2-.8-.4Z"
      />
    </svg>
    <span class="wa-tooltip">Vamos conversar?</span>
  </a>
</template>

<style scoped>
.wa-float {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 60;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 30px -8px rgba(37, 211, 102, 0.55),
              0 6px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.25s var(--ease-out-quart);
  animation: wa-in 0.6s var(--ease-out-quart) 0.4s both;
}

@keyframes wa-in {
  from { opacity: 0; transform: translateY(20px) scale(0.85); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.wa-float:hover {
  transform: scale(1.08);
}

.wa-icon {
  width: 28px;
  height: 28px;
}

.wa-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #25d366;
  animation: wa-ring 2.4s ease-out infinite;
}

@keyframes wa-ring {
  0%   { transform: scale(1);    opacity: 0.55; }
  100% { transform: scale(1.6);  opacity: 0;    }
}

.wa-tooltip {
  position: absolute;
  right: calc(100% + 12px);
  background: var(--surface);
  border: 1px solid var(--border-strong);
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(8px);
  transition: opacity 0.2s ease, transform 0.25s var(--ease-out-quart);
  pointer-events: none;
}

.wa-float:hover .wa-tooltip,
.wa-float:focus-visible .wa-tooltip {
  opacity: 1;
  transform: translateX(0);
}

@media (prefers-reduced-motion: reduce) {
  .wa-ring { animation: none; }
  .wa-float { animation: none; }
}

@media (max-width: 480px) {
  .wa-float { right: 16px; bottom: 16px; }
}
</style>
