# Imagens por página e tamanho de tela

Organizar primeiro por página e depois por imagem. As variantes da mesma imagem
ficam juntas para facilitar revisão e substituição.

Exemplo de estrutura futura, após definir as páginas e produzir os arquivos:

```text
src/assets/images/pages/home/hero/
├── mobile.webp
├── tablet.webp
└── desktop.webp

src/assets/images/pages/home/features/
├── mobile.webp
├── tablet.webp
└── desktop.webp

src/assets/images/shared/
└── brand/
    └── logo.svg
```

## Regras

- Mobile: abaixo de 768 px; tablet: de 768 a 1023 px; desktop: a partir de 1024 px. São faixas iniciais de layout, ajustáveis ao design.
- As variantes representam enquadramentos adequados a cada faixa. A resolução do arquivo também deve considerar o espaço ocupado e a densidade de pixels da tela.
- Usar WebP ou AVIF para fotografias e ilustrações raster; SVG para marcas e ícones vetoriais.
- Não embutir títulos ou botões nas imagens: eles devem permanecer acessíveis no HTML.
- Registrar caminho, largura, altura e texto alternativo no arquivo `*.images.ts` da seção responsável. Registros usados em várias seções ficam em `src/content`.
- Usar texto alternativo descritivo nas imagens informativas e vazio nas decorativas.
- Reservar a proporção correta em cada faixa para evitar deslocamentos de layout.
- Para trocar o enquadramento entre dispositivos, implementar um componente em `src/components/media` com `picture` e fontes condicionais, integrado à otimização do Next.js.
- Para o mesmo enquadramento em resoluções diferentes, usar `next/image` com `sizes` adequado.
- Deixar o navegador selecionar a fonte antes do download; evitar três imagens ocultadas por CSS e detecção de dispositivo por JavaScript.
- Priorizar apenas a imagem principal visível inicialmente; carregar as demais sob demanda.
- Guardar originais de edição fora de `public`; publicar somente os recursos finais.

As imagens finais da Hero estão em src/assets/images/pages/home/hero, com variantes desktop, tablet e mobile. O registro compartilhado fica em src/content/kitchen-study.images.ts. Consulte imagens-geradas.md para origem e prompts.
