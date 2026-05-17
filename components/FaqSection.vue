<script setup lang="ts">
const faqs = [
  {
    q: 'Trabalha apenas com Vue.js e Nuxt.js?',
    a: 'São minha especialidade e onde entrego mais valor. Também tenho experiência com React, Laravel, Node e AWS, mas para projetos puros de performance recomendo focarmos em stacks Vue/Nuxt onde domino cada detalhe.',
  },
  {
    q: 'Quanto tempo leva uma auditoria de performance?',
    a: 'Uma semana corrida do briefing à entrega do relatório. Você recebe um PDF detalhado + 30 minutos de call para explicarmos cada ponto e priorizarmos juntos.',
  },
  {
    q: 'Posso contratar para um projeto pequeno e pontual?',
    a: 'Sim. Consultoria pontual por hora ou pacote de horas é perfeito para times que precisam de uma segunda opinião sênior ou ajuda em um problema específico. Sem fricção de contratos longos.',
  },
  {
    q: 'Atende empresas fora do Brasil?',
    a: 'Atendo principalmente Brasil. Para projetos internacionais em espanhol estou disponível. Para projetos que exigem comunicação fluente em inglês, prefiro indicar colegas de confiança.',
  },
  {
    q: 'Como funciona o pagamento e contrato?',
    a: 'Trabalho via MEI (nota fiscal). Pagamento normalmente em 2-3 parcelas (início, meio, entrega) ou mensal para retainers. Contrato simples assinado digitalmente antes de começar.',
  },
]
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
