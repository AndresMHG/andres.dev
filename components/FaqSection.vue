<script setup lang="ts">
import { FAQS } from '~/utils/faqs'

const faqs = FAQS
</script>

<template>
  <section id="faq" class="faq">
    <div class="container">
      <p class="section-tag text-center reveal">// PERGUNTAS FREQUENTES</p>
      <h2 class="section-title text-center reveal">FAQ</h2>

      <div class="faq-list">
        <details
          v-for="(f, i) in faqs"
          :key="f.q"
          class="faq-item reveal"
          :data-delay="(i % 4) + 1"
        >
          <summary class="faq-q">
            {{ f.q }}
            <span class="faq-icon" aria-hidden="true">+</span>
          </summary>
          <p class="faq-a">{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--surface-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.text-center { text-align: center; }

.faq-list {
  max-width: 760px;
  margin: 48px auto 0;
}

.faq-item {
  border-bottom: 1px solid var(--border);
  transition: background 0.2s ease;
}

.faq-item:hover { background: rgba(255, 255, 255, 0.02); }

.faq-q {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 0;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
}

.faq-q::-webkit-details-marker { display: none; }

.faq-icon {
  color: var(--accent);
  font-size: 22px;
  line-height: 1;
  transition: transform 0.3s var(--ease-out-quart);
}

.faq-item[open] .faq-icon {
  transform: rotate(45deg);
}

.faq-a {
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.7;
  padding: 0 0 24px;
  animation: fade-down 0.35s var(--ease-out-quart);
}

@keyframes fade-down {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
