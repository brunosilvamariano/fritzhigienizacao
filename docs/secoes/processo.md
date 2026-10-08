# Processo — acordeão

Implementação da proposta validada: acordeão horizontal no desktop e vertical no celular, três etapas, clique/toque/Enter/Espaço, setas/Home/End para mover o foco, aria-expanded, painéis identificados e inativos fora da navegação, movimento reduzido respeitado pelo CSS global. Sem novas dependências ou CDN.

## Estrutura

- src/sections/home/process/process.tsx: seção e cabeçalho (atualizado)
- src/sections/home/process/process.css: layout e transições (atualizado)
- src/sections/home/process/process-accordion.tsx: estado e interação (novo)
- src/sections/home/process/process.content.ts: textos (novo)
- src/sections/home/process/process.images.ts: imports de imagens (novo)
- src/assets/images/pages/home/process/{escutar,desenhar,dar-forma}/{desktop,tablet,mobile}.webp: nove arquivos locais, 1440/1000/750 px, WebP qualidade 83 (novos)

Raiz: C:/user/bruno/dev/clientes/traco-moveis-planejados. Imagens conceituais geradas com image_gen integrada; nenhuma representa obra executada. Enquadramento responsivo via object-fit. Ícone arquitetônico SVG local decorativo.

## Prompts finais

### Etapa 1

Photorealistic architectural editorial photograph, landscape 3:2. Warm oak studio table viewed obliquely from above, residential floorplan pencil sketches without readable text, natural oak sample blocks, linen fabric swatches, small travertine sample and one graphite pencil. Warm angled afternoon sunlight, authentic tactile materials, quiet premium Brazilian bespoke furniture studio aesthetic, ivory charcoal honey oak palette. Central composition suitable for responsive crops. No people, no logos, no UI, no typography, no watermark. Final conceptual portfolio website image illustrating listening and choosing materials.

### Etapa 2

Photorealistic architectural editorial photograph landscape 3:2. A small precise physical scale model of custom oak kitchen cabinetry and an island on a warm oak architect drafting desk, a steel ruler and graphite elevation drawings beneath, soft ivory studio background. Model clearly miniature, expertly made with believable proportions. Warm angled daylight, quiet Brazilian contemporary furniture studio aesthetic, tactile oak and cream paper. Central subject for responsive crops. No people, no text, no labels, logos or UI. Final conceptual portfolio website image illustrating designing bespoke furniture.

### Etapa 3

Photorealistic architectural editorial close-up photograph landscape 3:2, final conceptual furniture portfolio asset. Detail of a beautifully executed natural oak cabinet door corner and precise recessed handle beneath a creamy travertine counter, realistic grain and porous stone, fine consistent joinery gaps. Side sunlight reveals tactile craftsmanship, quiet ivory background, elegant warm Brazilian contemporary interior aesthetic. Focus central on intersection of materials, no people, no text, no logos or UI, not glossy CGI.

## Validação

Lint, tipos, formatação e build passaram. Navegador: três etapas selecionadas, setas e Enter testados, imagem/descrição sincronizadas, três imagens carregadas, painéis recolhidos com altura zero no mobile, viewport 390px sem overflow horizontal e console sem erros. Preferência por movimento reduzido tratada pelo CSS global; não emulada neste teste.

## Refinamento responsivo — 2026-10-07

A imagem do acordeão combina largura e altura disponível com clamp/min/calc/100svh: máximo de 520px no desktop e 330px no celular. O acordeão e suas interações permanecem; não há altura fixa de 450px no tablet.

## Respiro final — 2026-10-07

Ao concluir a entrada horizontal, a camada de Serviços sai do cálculo da altura do palco. Processo mantém sua altura natural, incluindo o padding inferior da seção. Ao subir e reverter a transição, Serviços volta ao grid. Isso elimina a sobra de fundo bege causada pela altura maior da seção anterior, sem alterar o acordeão.
