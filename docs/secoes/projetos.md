# Projetos — Design Brief e estrutura

## Refinamento de clareza aprovado

Categorias são títulos dos cards; nomes dos estudos ficam na legenda secundária. Galeria em 3:2 no desktop e 4:3 no celular, desnível de 20–40 px entre colunas. Submenu Ambientes aparece somente na Home; Projetos recebe indicação de localização atual. Rodapé identifica os ambientes como destinos da página inicial. A navegação para o próximo projeto agora é compacta, antes do contato, sem bloco escuro separado.

Refinamento de escala: títulos da coleção limitados a 64 px e dos detalhes a 68 px; largura da coleção e das vistas limitada a 1280 px, capa a 1120 px. Fotos de uso e detalhe em 3:2 no desktop; capa e segundo ângulo em 16:9, com altura máxima de 560 px. No celular, todas as fotos usam 4:3 e os 24 recortes WebP foram refeitos em 720 × 540 px a partir dos originais. Espaçamentos e título do contato também reduzidos. Coleção conferida em 320, 390, 768 e 1440 px sem overflow; fotos de detalhe com 546 × 364 px no desktop de 1440 px e 327 × 245 px no celular de 390 px. Lint, TypeScript e formatação passaram.

Validação do refinamento: lint, TypeScript e formatação passaram. Galeria conferida em 320, 390, 768, 1024 e 1440 px sem overflow horizontal. Menus desktop e móvel preservam Ambientes na Home e omitem o submenu nas páginas de projetos. Navegação entre detalhes conferida no celular, com quatro imagens e console sem erros. Prévia atual em http://localhost:3000/projetos. A limitação do build de produção registrada na auditoria anterior não foi revalidada nesta mudança visual.

Traço, portfólio conceitual de móveis planejados. Direção aprovada: coleção editorial com seis ambientes gerados, sem atribuir obras realizadas, clientes, localização ou métricas. Paleta e fonte existentes: marfim, azul-ardósia, bege e detalhes terrosos; Plus Jakarta Sans local.

Abertura curta, galeria assimétrica de duas colunas no desktop e uma no mobile. Fotos protagonistas com zoom discreto em hover e foco. Página individual com capa ampla, texto breve, três vistas com legendas descritivas, próximo projeto, contato e footer compartilhado. Reutilizar Reveal e cortina de transição, respeitando movimento reduzido. Imagens locais importadas, recortes desktop/tablet/mobile WebP. Rotas de detalhes estáticas, canonical e metadata próprias. Sem dependências novas.

## Estrutura existente completa antes da implementação

```text
tsconfig.json
next.config.ts
next-env.d.ts
AGENTS.md
.env.example
biome.json
postcss.config.mjs
package.json
package-lock.json
README.md
prettier.config.mjs
tests\unit\tracking.test.cjs
tests\unit\tracking-config.test.cjs
tests\unit\site.test.cjs
tests\unit\plain-click.test.cjs
tests\unit\contact.test.cjs
src\styles\tokens.css
src\styles\globals.css
src\styles\fonts.ts
tests\unit\helpers\load-ts.cjs
docs\secoes\sobre.md
docs\secoes\servicos.md
docs\secoes\processo.md
docs\secoes\imagens-geradas.md
docs\secoes\google-vbg.md
docs\secoes\faq.md
docs\secoes\estudio.md
docs\secoes\contato.md
docs\secoes\contato-footer.md
docs\secoes\ambientes.md
docs\README.md
src\components\ui\whatsapp-link.tsx
src\components\ui\whatsapp-link.css
src\components\ui\social-icons.tsx
src\components\ui\floating-whatsapp.tsx
src\components\ui\floating-whatsapp.css
src\components\ui\arrow.tsx
docs\estrutura-completa.txt
docs\readme\menu-mobile.png
docs\readme\estudio.png
docs\readme\desktop.png
docs\readme\ambientes.png
src\components\media\responsive-image.tsx
src\components\analytics\tracking-runtime.ts
src\components\analytics\consent.tsx
src\components\analytics\consent.css
docs\guias\seo-e-mensuracao.md
docs\guias\secao-modelo.md
docs\guias\imagens.md
docs\guias\design-brief.md
docs\guias\dependencias.md
docs\guias\arquitetura.md
src\components\layout\page-transition\page-transition.tsx
src\components\layout\page-transition\page-transition.css
docs\marca\vbg-logo-original.svg
src\sections\home\environments\environments.tsx
src\sections\home\environments\environments.images.ts
src\sections\home\environments\environments.css
src\sections\home\environments\environments.content.ts
src\sections\home\environments\environment-message.tsx
src\sections\home\environments\environment-card.tsx
docs\auditorias\validacao-2026-10-03.md
docs\auditorias\auditoria-navegacao-2026-10-04.md
docs\auditorias\auditoria-2026-10-07.md
docs\auditorias\auditoria-2026-10-03.md
src\sections\home\process\process.tsx
src\sections\home\process\process.images.ts
src\sections\home\process\process.css
src\sections\home\process\process.content.ts
src\sections\home\process\process-accordion.tsx
src\components\layout\header\mobile-navigation.tsx
src\components\layout\header\mobile-navigation.css
src\components\layout\header\header.tsx
src\components\layout\header\header.css
src\components\layout\header\desktop-navigation.tsx
src\components\layout\header\brand.tsx
src\sections\home\contact\contact.tsx
src\sections\home\contact\contact.css
src\sections\home\contact\contact.content.ts
src\sections\home\studio\studio.tsx
src\sections\home\studio\studio.images.ts
src\sections\home\studio\studio.css
src\sections\home\studio\studio.content.ts
src\sections\home\studio\studio-panels.tsx
src\assets\images\shared\vbg\logo.webp
src\assets\fonts\plus-jakarta-sans\README.md
src\assets\fonts\plus-jakarta-sans\plus-jakarta-sans-latin-wght-normal.woff2
src\assets\fonts\plus-jakarta-sans\LICENSE
src\sections\home\services-process-transition\services-process-transition.tsx
src\sections\home\services-process-transition\services-process-transition.css
src\sections\about\story\about-story.tsx
src\sections\about\story\about-story.css
src\assets\images\pages\home\studio\tablet.webp
src\assets\images\pages\home\studio\mobile.webp
src\assets\images\pages\home\studio\desktop.webp
src\app\sobre\page.tsx
src\app\sitemap.ts
src\app\robots.ts
src\app\page.tsx
src\app\not-found.tsx
src\app\layout.tsx
src\app\icon.svg
src\app\favicon.ico
src\app\error.tsx
src\app\apple-icon.png
src\content\kitchen-study.images.ts
src\sections\home\services\services.tsx
src\sections\home\services\services.images.ts
src\sections\home\services\services.css
src\sections\home\services\services.content.ts
src\sections\home\services\service-icon.tsx
src\assets\images\pages\home\services\tablet.webp
src\assets\images\pages\home\services\mobile.webp
src\assets\images\pages\home\services\desktop.webp
src\assets\images\shared\social\traco-compartilhamento.jpg
src\components\layout\footer\google-profile.tsx
src\components\layout\footer\footer.tsx
src\components\layout\footer\footer.css
src\components\layout\footer\footer-reveal.tsx
src\components\layout\anchor-navigation.tsx
src\sections\home\hero\use-hero-carousel.ts
src\sections\home\hero\hero.tsx
src\sections\home\hero\hero.slides.ts
src\sections\home\hero\hero.css
src\sections\home\hero\hero.content.ts
src\sections\home\faq\faq.tsx
src\sections\home\faq\faq.css
src\sections\home\faq\faq.content.ts
src\assets\images\pages\home\environments\cozinhas\tablet.webp
src\assets\images\pages\home\environments\cozinhas\mobile.webp
src\assets\images\pages\home\environments\cozinhas\desktop.webp
src\assets\images\pages\home\environments\salas\tablet.webp
src\assets\images\pages\home\environments\salas\mobile.webp
src\assets\images\pages\home\environments\salas\desktop.webp
src\config\tracking.ts
src\config\site.ts
src\config\routes.ts
src\config\navigation.ts
src\config\metadata.ts
src\config\developer.ts
src\config\contact.ts
src\sections\about\opening\opening-motion.tsx
src\sections\about\opening\about-opening.tsx
src\sections\about\opening\about-opening.css
src\sections\about\about.images.ts
src\animations\reveal.tsx
src\assets\images\pages\home\process\escutar\tablet.webp
src\assets\images\pages\home\process\escutar\mobile.webp
src\assets\images\pages\home\process\escutar\desktop.webp
src\assets\images\pages\home\environments\dormitorios\tablet.webp
src\assets\images\pages\home\environments\dormitorios\mobile.webp
src\assets\images\pages\home\environments\dormitorios\desktop.webp
src\assets\images\pages\home\environments\home-office\tablet.webp
src\assets\images\pages\home\environments\home-office\mobile.webp
src\assets\images\pages\home\environments\home-office\desktop.webp
src\assets\images\pages\about\living\tablet.webp
src\assets\images\pages\about\living\mobile.webp
src\assets\images\pages\about\living\desktop.webp
src\assets\images\pages\home\hero\tablet.webp
src\assets\images\pages\home\process\desenhar\tablet.webp
src\assets\images\pages\home\hero\mobile.webp
src\assets\images\pages\home\process\desenhar\mobile.webp
src\assets\images\pages\home\process\desenhar\desktop.webp
src\assets\images\pages\home\environments\banheiros\tablet.webp
src\assets\images\pages\home\environments\banheiros\mobile.webp
src\assets\images\pages\home\environments\banheiros\desktop.webp
src\assets\images\pages\home\hero\desktop.webp
src\assets\images\pages\about\detail\tablet.webp
src\assets\images\pages\about\detail\mobile.webp
src\assets\images\pages\about\detail\desktop.webp
src\assets\images\pages\about\kitchen\tablet.webp
src\assets\images\pages\about\kitchen\mobile.webp
src\assets\images\pages\about\kitchen\desktop.webp
src\assets\images\pages\home\hero\living\tablet.webp
src\assets\images\pages\home\hero\living\mobile.webp
src\assets\images\pages\home\hero\living\desktop.webp
src\lib\media-queries.ts
src\lib\focus-anchor.ts
src\assets\images\pages\home\hero\bedroom\desktop.webp
src\lib\navigate-anchor.ts
src\lib\plain-click.ts
src\assets\images\pages\home\hero\bedroom\mobile.webp
src\assets\images\pages\home\hero\bedroom\tablet.webp
src\assets\images\pages\home\process\dar-forma\tablet.webp
src\assets\images\pages\home\process\dar-forma\mobile.webp
src\assets\images\pages\home\process\dar-forma\desktop.webp
```

## Arquivos planejados (novos)

```text
src/app/projetos/page.tsx
src/app/projetos/[slug]/page.tsx
src/content/projects.ts
src/sections/projects/gallery/project-gallery.tsx
src/sections/projects/gallery/project-gallery.css
src/sections/projects/detail/project-detail.tsx
src/sections/projects/detail/project-detail.css
src/sections/projects/contact/project-contact.tsx
src/sections/projects/contact/project-contact.css
src/assets/images/pages/projects/{01..06}/{capa,angulo,meio,detalhe}/{desktop,tablet,mobile}.webp
```

## Arquivos existentes a integrar

`src/config/navigation.ts`, `src/config/routes.ts`, `src/components/layout/header/header.css`, `docs/guias/design-brief.md`. Menu e footer usam a configuração compartilhada; sitemap e cortina usam as rotas cadastradas. Demais alterações locais anteriores preservadas.
