<script setup lang="ts">
const highlights = [
  { num: '6+', text: 'anos como Sr. Frontend' },
  { num: '2→3', text: 'migração Nuxt liderada' },
  { num: '90+', text: 'scores Lighthouse entregues' },
  { num: 'BR', text: 'Curitiba, Paraná' },
]
</script>

<template>
  <section id="sobre">
    <div class="container">
      <p class="section-tag reveal">// SOBRE</p>
      <h2 class="section-title reveal">Quem trabalha no seu projeto</h2>

      <div class="about-grid reveal">
        <div class="about-photo" aria-label="Foto profissional de Andres Hernandez">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="38" r="18" fill="currentColor" opacity="0.18" />
            <path
              d="M20 90 Q50 60 80 90 Z"
              fill="currentColor"
              opacity="0.18"
            />
          </svg>
          <span class="about-photo-caption">Foto profissional</span>
        </div>

        <div class="about-text">
          <p>
            <strong>Andres Hernandez.</strong> Engenheiro de Computação, 6+
            anos como Senior Frontend em produtos de alto tráfego no Brasil.
            Hoje na Contabilizei liderando iniciativas de performance e SEO
            técnico; antes na SóCarrão por 5 anos liderando a migração
            completa de Nuxt 2 para Nuxt 3 em produção.
          </p>
          <p>
            Minha especialidade é a interseção entre
            <strong>performance, SEO técnico e DX</strong>. Não acredito em
            "performance bonita só pra Lighthouse" — performance que importa
            é a que move conversão, ranqueamento orgânico e tempo de
            engenharia do seu time.
          </p>
          <p>
            Disponível para projetos freelance nas noites e fins de semana.
            Mantenho compromisso 100% com meus clientes — sem prazos
            perdidos, sem desaparecer, sem entregar pela metade.
          </p>

          <ul class="about-list">
            <li
              v-for="(h, i) in highlights"
              :key="h.text"
              class="about-list-item"
              :style="{ '--i': i }"
            >
              <span>{{ h.num }}</span>
              {{ h.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 64px;
  align-items: start;
  margin-top: 48px;
}

.about-photo {
  width: 100%;
  aspect-ratio: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--text-dim);
  font-size: 14px;
  position: relative;
  overflow: hidden;
}

.about-photo::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, var(--accent-soft), transparent 60%);
  pointer-events: none;
}

.about-photo svg {
  width: 60%;
  height: auto;
  color: var(--text-dim);
}

.about-photo-caption {
  position: relative;
  z-index: 1;
}

.about-text p {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-text p strong {
  color: var(--text);
  font-weight: 600;
}

.about-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 32px;
  list-style: none;
}

.about-list-item {
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 14px;
  color: var(--text-muted);
  transition: transform 0.25s var(--ease-out-quart),
              border-color 0.25s ease;
}

.about-list-item:hover {
  transform: translateY(-2px);
  border-color: var(--accent-dim);
}

.about-list-item span {
  color: var(--accent);
  font-weight: 700;
  display: block;
  font-size: 24px;
  margin-bottom: 4px;
}

@media (max-width: 860px) {
  .about-grid { grid-template-columns: 1fr; gap: 32px; }
  .about-photo { max-width: 240px; }
}
</style>
