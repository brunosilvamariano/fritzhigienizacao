# Seção Ambientes — 03/10/2026

## Correção de acesso aos CTAs — 07/10/2026

O componente `environment-stack.tsx` mede painéis, cartões, cabeçalho e altura visível da viewport. A sobreposição permanece ativa em telas menores. O topo sticky permite que painéis altos rolem até a parte inferior; entre painéis, há um intervalo de rolagem de 160–260 px (24% da altura visível, limitado a esses valores). Nesse intervalo, o painel permanece parado com os CTAs visíveis; o próximo ambiente só começa a cobri-lo depois do respiro. Desktop aplica o intervalo aos grupos; celular, aos cartões individuais. O último item não adiciona intervalo extra.

No celular, o cartão tem ao menos 90 px de espaço inferior, incluindo área segura, para afastar o CTA do WhatsApp flutuante ao exibir o cartão inteiro. Sem JavaScript e com movimento reduzido, os ambientes permanecem no fluxo normal. ResizeObserver e listeners de redimensionamento da janela/visualViewport são removidos ao desmontar; não há listeners de scroll ou nova dependência.

Removida a regra de Ambientes no CSS compartilhado do WhatsApp que desativava o efeito entre 651 e 800 px. A responsabilidade agora fica no CSS da seção. Verificados 1890 × 900, 1440 × 720, 1024 × 700, 390 × 844, 320 × 700 e 844 × 390 px, sem overflow horizontal. CTAs de cozinha, dormitório, sala, banheiro e home office conferidos; os botões verificados ficam dentro da tela e recebem o apontamento antes da sobreposição.

Respiro validado em 1536 × 730 px: intervalo de 175,2 px; ao avançar a rolagem, o painel permaneceu na mesma posição e os dois CTAs continuaram inteiros e clicáveis. Depois do intervalo, o painel seguinte apareceu sobre o anterior. Em 320 × 700 px, intervalo de 168 px; cartão alto fixou somente após o CTA ficar totalmente visível, acima do botão flutuante. Lint, TypeScript e formatação passaram.

Implementada galeria assimétrica com cinco ambientes, navegação por âncoras, legendas, imagens responsivas locais e hover suave respeitando movimento reduzido. Páginas individuais não criadas, conforme combinado.

## Estrutura completa da seção

Existentes atualizados:

- src/sections/home/environments/environments.tsx
- src/sections/home/environments/environments.css

Novos:

- src/sections/home/environments/environment-card.tsx
- src/sections/home/environments/environment-stack.tsx (correção responsiva de 07/10/2026)
- src/sections/home/environments/environments.content.ts
- src/sections/home/environments/environments.images.ts

Imagens finais, em src/assets/images/pages/home/environments/:

- cozinhas/desktop.webp (1440px), tablet.webp (1000px), mobile.webp (750px)
- dormitorios/desktop.webp (1440px), tablet.webp (1000px), mobile.webp (750px)
- salas/desktop.webp (1440px), tablet.webp (1000px), mobile.webp (750px)
- banheiros/desktop.webp (1440px), tablet.webp (1000px), mobile.webp (750px)
- home-office/desktop.webp (1440px), tablet.webp (1000px), mobile.webp (750px)
  Imagens desktop/tablet/mobile otimizadas em WebP, com enquadramento responsivo via object-fit. Cozinha, dormitório e sala aproveitam os originais já gerados; banheiro e home office são novas imagens conceituais. Nenhuma dependência adicionada.

## Geração

Ferramenta image_gen integrada. Imagens não representam obras executadas.

### Banheiro

Use case: photorealistic-natural. Final website asset for the fictional TRAÇO bespoke cabinetry portfolio. Editorial architectural photograph of a refined Brazilian contemporary bathroom, floating natural oak vanity with precise drawers, creamy travertine counter and integrated basin, tall simple mirror, brushed dark bronze tap, ivory plaster walls, folded linen towel. Warm angled daylight with believable shadows and tactile grain, quiet restrained styling, realistic joinery, no glossy CGI. Landscape 3:2 composition, vanity and basin centered so a 4:5 crop retains the subject. Natural oak, ivory and limestone palette matching a warm architectural interior series. No people, text, logos, watermarks or UI.

### Home office

Use case: photorealistic-natural. Final website asset for the fictional TRAÇO bespoke cabinetry portfolio. Editorial architectural photograph of a sophisticated compact Brazilian home office: custom natural oak floating desk with discreet drawer joinery integrated into floor-to-ceiling oak bookshelves, elegant linen upholstered desk chair, closed notebook, modest ceramic objects and a few books, ivory plaster wall, large side window. Warm angled natural daylight, believable tactile wood and stone, quiet atmosphere, realistic construction, no glossy CGI. Landscape 3:2 composition; desk and chair centered for responsive portrait crops. Palette natural oak, ivory, limestone, subtle charcoal details matching a refined architectural interior series. No people, readable text, logos, watermarks or UI.

## Validação

Lint, TypeScript e build de produção. Navegação por âncora, cinco imagens carregadas e viewport mobile de 390px sem overflow horizontal verificados no navegador integrado. Nenhum erro ou aviso de console observado. Revisão React: cards e dados no servidor, imports diretos, chaves estáveis, títulos/alt/âncoras semânticos, imagens lazy, animação por transform e movimento reduzido.

## Sequência de rolagem — 03/10/2026

A galeria agora usa painéis empilhados com CSS position: sticky. No desktop: cozinha/dormitório, sala/banheiro, home office. No celular: cinco painéis individuais. Rolagem nativa, sem capturar roda do mouse ou impedir gestos, reversível ao subir.

Novo arquivo: src/sections/home/environments/environment-message.tsx, responsável pela mensagem e pelo progresso de opacidade com useScroll/useTransform do Framer Motion já instalado. Atualizados environments.tsx e environments.css. Conteúdo, imagens e EnvironmentCard continuam separados nos arquivos existentes. Nenhuma nova dependência.

A mensagem usa altura de 180svh no desktop e 160svh no celular; termina de ganhar cor antes de liberar a próxima seção. A área fixada considera a altura do header. Telas com altura até 650px e preferência por movimento reduzido recebem fluxo normal, texto completo e imagens sem sobreposição.

Verificação: lint, TypeScript, formatação e build passaram. No navegador: progresso parcial e completo do texto, painel desktop fixo a 92px enquanto o seguinte sobe, cinco painéis mobile, atalho Banheiros, imagens carregadas e ausência de overflow em 390px. Console sem avisos ou erros observados. O modo de movimento reduzido foi tratado no CSS; não foi emulado neste teste.

## Revelação em telas baixas — 2026-10-07

A mensagem mantém o sticky e a revelação por palavra abaixo de 650px de altura. Altura mínima, tipografia e espaçamento respeitam a altura disponível com svh/clamp/min/calc. O fallback sem animação é exclusivo de prefers-reduced-motion; a proporção das fotos em telas baixas permanece.
