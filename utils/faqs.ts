export interface Faq {
  q: string
  a: string
}

export const FAQS: readonly Faq[] = [
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
] as const
