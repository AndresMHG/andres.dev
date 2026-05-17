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
        <picture class="about-photo">
          <source srcset="/me.webp" type="image/webp" />
          <img
            src="/me.jpg"
            alt="Andres Hernandez, Frontend Performance Specialist"
            width="600"
            height="600"
            loading="lazy"
            decoding="async"
          />
        </picture>

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
  display: block;
  width: 100%;
  aspect-ratio: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px -30px rgba(163, 230, 53, 0.35);
  transition: transform 0.4s var(--ease-out-quart),
              box-shadow 0.4s ease;
}

.about-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 60%,
    rgba(10, 10, 10, 0.4) 100%
  );
  pointer-events: none;
}

.about-photo:hover {
  transform: translateY(-4px);
  box-shadow: 0 28px 70px -28px rgba(163, 230, 53, 0.5);
}

.about-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.6s var(--ease-out-quart);
}

.about-photo:hover img {
  transform: scale(1.03);
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
