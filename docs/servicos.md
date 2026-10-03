# Serviços — implementação

Seção entre Ambientes e O processo, baseada na proposta aprovada. Três serviços, ícones SVG locais em cobre sem numeração, divisórias verticais no desktop e horizontais no celular. Link Serviços compartilhado entre menus desktop e mobile. Nenhuma dependência adicionada.

## Estrutura completa da seção (novos arquivos)

- src/sections/home/services/services.tsx
- src/sections/home/services/services.css
- src/sections/home/services/services.content.ts
- src/sections/home/services/services.images.ts
- src/sections/home/services/service-icon.tsx
- src/assets/images/pages/home/services/desktop.webp
- src/assets/images/pages/home/services/tablet.webp
- src/assets/images/pages/home/services/mobile.webp

## Arquivos existentes atualizados

- src/app/page.tsx: ordem das seções.
- src/config/navigation.ts: link Serviços.
- src/components/media/responsive-image.tsx: prop opcional sizes para imagens de largura total; valores anteriores preservados como padrão.

Raiz: C:/user/bruno/dev/clientes/traco-moveis-planejados.

## Imagem final

Gerada pela ferramenta image_gen integrada e otimizada em WebP (1536, 1000 e 750px, qualidade 83). Recorte responsivo com object-fit e object-position. A imagem é conceitual e não representa obra executada.

Prompt final:
Photorealistic architectural editorial photograph, wide landscape 3:2 composition for a panoramic website band. Close-up of bespoke natural honey oak cabinetry meeting creamy travertine counter and a vertical stone side panel, warm angled late afternoon sunlight, visible real oak grain and porous stone. A folded neutral linen swatch and modest ceramic bowl at far left. Quiet refined Brazilian contemporary interior, palette warm oak ivory limestone charcoal shadows. Keep main wood and stone junction centrally positioned in middle horizontal third so a wide shallow panoramic crop works beautifully, with enough room above and below for mobile crops. No people, text, labels, logos, watermark, UI or borders. Realistic joinery, restrained material detail, no glossy CGI. Final conceptual portfolio image for fictional TRAÇO furniture studio services section.

## Validação

Lint, TypeScript, formatação e build de produção passaram. Navegador: menu desktop e mobile levam a Serviços; diálogo fecha após seleção; três serviços em coluna única a 390px, sem overflow horizontal, imagem carregada e console sem erros ou avisos observados. Revisão React: componentes no servidor, dados fora da renderização, chaves estáveis, SVGs decorativos, títulos semânticos e imagem lazy.
