# andres.dev — Portfolio (Nuxt 3)

Portfolio de **Andres Hernandez — Frontend Performance Specialist**.
Site estático gerado com Nuxt 3, otimizado para Lighthouse 100/100, com blog técnico, sitemap, OG image automático e SEO completo.

---

## Stack

- **Nuxt 3** (latest, `nuxt generate` → HTML estático)
- **Vue 3** com `<script setup>` + `<style scoped>` em cada componente
- **@nuxt/content** — blog em markdown, prerenderizado em build time
- **@nuxtjs/sitemap** — `sitemap.xml` gerado automaticamente
- **@nuxt/fonts** — fonts self-hosted (Inter + JetBrains Mono) com `preload`
- **sharp** — converte `og-image.svg` → `og-image.png` (1200×630) no build
- Zero JS de runtime extra além do mínimo do Nuxt

## Como rodar

```bash
# 1. Instalar dependências (instala sharp com binários prebuilt — Win/Mac/Linux)
npm install

# 2. Dev server (http://localhost:3000)
npm run dev

# 3. Build estático (gera og-image.png + HTML em ./dist)
npm run build

# 4. Regenerar só o og-image
npm run og

# 5. Preview do build local
npm run preview
```

`npm run build` executa `node scripts/generate-og.mjs && nuxt generate`:

1. Gera `public/og-image.png` (1200×630) a partir de `public/og-image.svg`
2. Pré-renderiza todas as páginas (`/`, `/blog`, cada `/blog/*`) em HTML puro
3. Gera `sitemap.xml` automaticamente
4. Inline critical CSS, comprime estáticos com gzip + brotli

Output em `.output/public/` (e copiado para `./dist/`).

## Estrutura

```
.
├── app.vue                    # Layout raiz (skip link + WhatsApp float)
├── nuxt.config.ts             # SSR, prerender, fonts, content, sitemap, OG meta
├── pages/
│   ├── index.vue              # Landing
│   └── blog/
│       ├── index.vue          # Listagem de posts
│       └── [...slug].vue      # Leitor de post (ContentRenderer)
├── content/blog/              # Posts em markdown (Nuxt Content)
│   ├── 1.lighthouse-42-a-94-playbook.md
│   └── 2.core-web-vitals-saas-brasileiro.md
├── components/                # Auto-importados
│   ├── AppNav.vue / AppFooter.vue
│   ├── HeroSection.vue / TrustBar.vue / ProblemSection.vue
│   ├── ServicesSection.vue / ProcessSection.vue
│   ├── CasesSection.vue / AboutSection.vue
│   ├── FaqSection.vue / CtaSection.vue
│   └── WhatsAppFloat.vue
├── composables/useReveal.ts   # IntersectionObserver compartilhado
├── utils/site.ts              # WhatsApp / LinkedIn / email constants
├── scripts/generate-og.mjs    # SVG → PNG (sharp), roda no prebuild
├── assets/css/main.css        # tokens + reset + helpers globais
└── public/
    ├── favicon.svg
    ├── og-image.svg           # source do OG image (edite aqui)
    ├── og-image.png           # gerado em cada build
    └── robots.txt
```

## SEO completo

### Meta tags
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`)
- Twitter Cards (`summary_large_image` com `twitter:image`)
- `<link rel="canonical">`
- `lang="pt-BR"`, `theme-color`
- JSON-LD `Person` em `pages/index.vue`

### OG image (compartilhamento)
Quando você cola sua URL em **WhatsApp / LinkedIn / Twitter / Slack / Telegram**, aparece o card de 1200×630 com o teu nome, tagline e os scores Lighthouse.

Para customizar o design, edite [`public/og-image.svg`](public/og-image.svg) e rode `npm run og`.

### Sitemap & Robots
- `sitemap.xml` automático com `@nuxtjs/sitemap` (lista `/`, `/blog` e cada post)
- `robots.txt` em `public/` aponta para o sitemap

### Próximos passos manuais (do seu lado)
1. **Comprar o dominio** + apontar DNS para o deploy
2. **Atualizar `SITE_URL`** em `nuxt.config.ts` se não for `andres.dev`
3. **Google Search Console**: adicionar a propriedade, submeter `sitemap.xml`
4. **Bing Webmaster Tools**: idem
5. **Escrever mais posts** em `content/blog/` — quanto mais conteúdo técnico relevante, mais portas de entrada de Google
6. **Backlinks**: dev.to, Medium, LinkedIn posts linkando ao site
7. **Validar OG image**: testar em [opengraph.xyz](https://www.opengraph.xyz) e [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) depois do deploy

## Performance (alvo Lighthouse 100/100/100/100)

- **`ssr: true` + `nitro.prerender`** → HTML gerado em build
- **`compressPublicAssets`** (gzip + brotli)
- **`inlineSSRStyles` + `features.inlineStyles`** → critical CSS inline
- **`@nuxt/fonts`** com `preload` → fonts self-hosted, zero render-blocking
- **WhatsApp float** em SVG inline (zero requisição extra)
- **FAQ** com `<details>` nativo (zero JS)
- **Animações via CSS** + um único `IntersectionObserver` compartilhado
- **`prefers-reduced-motion`** respeitado em todo o site
- **Zero libs externas** de animação/UI

## Acessibilidade (alvo 100)

- Skip link, `<main>`, `<nav>`, `<footer>`, hierarquia de headings consistente
- Contraste WCAG AA (`#c4c4cc` em `#0a0a0a`, accent `#a3e635`)
- `:focus-visible` em todos os elementos interativos
- `aria-label` em links de ícones; `aria-hidden` em decorativos

## Best Practices (alvo 100)

- `rel="noopener"` em todos `target="_blank"`
- Sem `console.log`, sem inline event handlers (CSP-friendly)
- HTTPS-ready

## Customização rápida

Edite [`utils/site.ts`](utils/site.ts) para mudar WhatsApp, mensagem padrão, e-mail e LinkedIn.

```ts
export const SITE = {
  email: 'andr3sm1guel@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andres-miguel-hernandez-garcia-154169377/',
  whatsappNumber: '5541988648321',
  whatsappMessage: 'Olá Andres! Vi seu portfólio e gostaria de conversar sobre um projeto Vue/Nuxt 🚀',
}
```

## Deploy

`npm run build` gera `./dist/` com HTML/CSS/JS estático. Deploy direto:

- **Vercel** / **Netlify** / **Cloudflare Pages**: comando `npm run build`, output `dist`
- **GitHub Pages**: publique a pasta `dist`
- **S3/CDN**: upload de `dist/`

⚠️ Antes do primeiro deploy, atualize `SITE_URL` em `nuxt.config.ts` se for diferente de `https://andres.dev`.

---

Built with Nuxt 3 — obviously.
