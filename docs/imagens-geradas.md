# Imagens geradas

Ferramenta: image_gen integrada (sem API/CLI). Uso: imagens finais deste conceito de portfólio.
Arquivos: src/assets/images/pages/home/hero/desktop.webp, tablet.webp e mobile.webp.
Desktop: 1536 px de largura, 263036 bytes. Tablet: 1024 px, 104934 bytes.
Mobile: composição vertical própria, 900 px de largura, 162742 bytes.
Conversão e redução de resolução em WebP com Sharp, sem modificar o conteúdo visual.

## Prompt de geração desktop

Create an original photorealistic architectural interior photograph for a fictional Brazilian bespoke cabinetry portfolio website. Landscape 3:2 composition, absolutely no text, logos, watermark, UI or borders. A sophisticated warm contemporary kitchen: floor-to-ceiling flat-panel natural medium oak cabinetry at rear, understated black metal tap, large sculptural beige travertine island with visible stone pores in foreground right, two oak stools with woven seats, narrow black and brass linear pendant. A little ceramic bowl, branch in ceramic vase, restrained lived-in styling. Dramatic warm morning light from tall window on left casts precise diagonal shadows across wood and travertine. Architectural magazine quality, realistic premium craftsmanship, not glossy CGI, delicate grain and material detail, deep warm shadow. Camera straight architectural perspective at counter height, 35mm lens. Kitchen fills the composition with clear emphasis on oak cabinetry and island, no people. Leave enough breadth for responsive crops. Color palette natural honey oak, charcoal accents, warm limestone. This is the hero asset for the TRAÇO editorial design mockup from our discussion.

## Prompt de adaptação mobile

Edit this exact kitchen photograph into a portrait 3:4 architectural photograph for the MOBILE version of the same website. Preserve the exact oak cabinetry, travertine island, black faucet, pendant and warm lighting. Reframe thoughtfully to portrait, prioritizing the junction of the oak cabinets and island, with one woven stool visible; preserve realistic proportions and sufficient context. Same room and materials, no invented new objects, no typography, logo or borders. High-quality original final website asset.

## Carrossel de ambientes

Implementado em 03/10/2026: cozinha, dormitório e sala, sem setas. Rotação a cada 6,5 segundos com transição de opacidade de 800 ms. Seleção pelos três segmentos da barra, arraste horizontal pelo mouse e Pointer Events para toque. Rolagem vertical e zoom preservados. Pausa manual, pausa durante foco/interação, aba oculta e preferência por movimento reduzido. A próxima imagem só aparece após carregar; imagens já carregadas antes da hidratação também são reconhecidas.

Código separado entre hero.tsx (interface), hero.slides.ts (conteúdo/imagens), use-hero-carousel.ts (interação/temporizador) e hero.css (estilos).

Novos arquivos locais: src/assets/images/pages/home/hero/bedroom/{desktop,tablet,mobile}.webp e src/assets/images/pages/home/hero/living/{desktop,tablet,mobile}.webp. Larguras 1536, 1024 e 750 px; composição central e recorte via object-fit em telas estreitas. Gerados com image_gen integrada, convertidos para WebP com Sharp.

### Prompt do dormitório

Create a final photoreal architectural website hero image for fictional Brazilian bespoke cabinetry brand TRAÇO. Landscape 3:2. Sophisticated restful bedroom with custom floor-to-ceiling warm natural oak wardrobe, flush panel joinery, low linen upholstered bed, integrated oak floating bedside shelf, warm travertine accents. Strong late afternoon angled sunlight, rich material textures, ivory linen, muted earth colors. Quiet editorial architectural photography, realistic not glossy CGI. Match the warm oak and travertine kitchen hero aesthetic from an upscale cabinetry studio. CENTRAL composition: key bed edge and wardrobe intersection in central third so a portrait center crop remains beautiful; wider sides extend the room naturally. No text, logos, people, watermarks, UI or borders. Original generated interior for a clearly disclosed conceptual portfolio.

### Prompt da sala

Create a final photoreal architectural website hero image for fictional Brazilian bespoke cabinetry brand TRAÇO. Landscape 3:2. Beautiful Brazilian contemporary living room with large custom natural oak built-in shelving and low cabinets, thoughtfully spaced books and ceramics, ivory linen sofa edge, sculptural travertine coffee table, warm wood panels. Dramatic warm side daylight casting architectural shadows, quiet editorial magazine photography with authentic material textures, no glossy CGI. Palette warm oak, ivory, charcoal accents, limestone. Central shelving and table form a beautiful composition even with a central portrait crop for mobile. View is straight-on architectural perspective, all cabinet joints realistic. Match an upscale oak kitchen and bedroom series. No text, logos, people, watermarks, UI or borders. Original generated interior for a disclosed conceptual portfolio.
