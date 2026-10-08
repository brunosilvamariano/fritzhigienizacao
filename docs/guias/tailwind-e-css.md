# Tailwind e CSS

## Responsabilidades

| Onde                            | Responsabilidade                                                                                                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className` no componente TSX   | Layout simples: flex/grid, alinhamento, largura/altura, recorte, cores dos tokens e espaçamentos fixos. Grades simples responsivas usam variantes explícitas, como `tw:min-[768px]:grid-cols-2`. |
| CSS da seção/componente         | Composição editorial com clamp/calc, tipografia, proporções, seletores de descendentes/pseudo-elementos, estados abertos/ativos, hover e animações.                                              |
| `src/styles/tokens.css`         | Fonte única da paleta, espaçamento fluido, altura do menu e camadas globais.                                                                                                                     |
| `src/styles/tailwind-theme.css` | Aliases dos tokens para o Tailwind. Não repetir valores hexadecimais.                                                                                                                            |
| `src/styles/globals.css`        | Imports, reset na camada base, padrões compartilhados, foco, movimento reduzido e limites globais.                                                                                               |

O prefixo `tw:` distingue utilidades das classes semânticas usadas pelo CSS e pelo JavaScript. Exemplo: `project-card-image tw:relative tw:overflow-hidden tw:bg-taupe`. A classe semântica permanece como referência estável para estilos específicos e efeitos.

Não adicionar classes utilitárias conflitantes ao mesmo elemento. Se um link combina `text-link` e `project-back`, o gap específico permanece no CSS para sobrescrever o padrão compartilhado de forma deliberada. Alterações de posição sticky, transformações de scroll e medidas obtidas por ResizeObserver continuam no CSS/JavaScript da seção.

As cores usam `@theme inline` para resolver variáveis no contexto de cada elemento, preservando temas locais das seções. O reset fica em `@layer base`; estilos específicos por seção permanecem fora das camadas e podem sobrescrever utilidades quando necessário. Referências oficiais: [prefixos e utilidades](https://tailwindcss.com/docs/styling-with-utility-classes) e [variáveis de tema](https://tailwindcss.com/docs/theme).

## Organização realizada

Layout simples reorganizado em 39 componentes TSX e 21 folhas de estilos, incluindo Home, Sobre, Projetos, header, footer, consentimento e transição de página. Foram transferidas 484 declarações básicas; grades simples da coleção e das imagens dos detalhes também passaram a usar variantes Tailwind. Nenhuma dependência adicionada e nenhum recurso alterado.

Composição fluida e efeitos permanecem próximos de suas seções. O efeito de Ambientes, seu respiro de rolagem, transições entre páginas, carrossel, acordeões e menus continuam com os mesmos controles e seletores.

## Responsividade

- Espaçamento vertical compartilhado: `--section-space: clamp(65px, 7vw, 100px)`.
- Título da Hero com mínimo de 42 px para celulares estreitos.
- Fotos de abertura de Home/Sobre limitadas no celular com clamp e svh, preservando o recorte e o conteúdo.
- Controles do carrossel e links de ação com área mínima de toque de 44 px no celular.
- Grades da coleção e vistas de detalhe: uma coluna abaixo de 768 px, duas a partir desse tamanho.

Antes das melhorias responsivas, foram comparadas 37 propriedades calculadas em oito cenários: Home, Sobre, coleção e detalhe, cada uma em 1440 e 390 px. Nenhuma diferença nos estilos fixos; medidas intermediárias de largura do acordeão animado de Processo foram excluídas dessa comparação. Após a animação, foram conferidas as mesmas medidas anteriores: cartões fechados de 76 px e ativo de 796,656 px em um acordeão de 972,656 px.

A matriz de responsividade cobre quatro páginas em 16 tamanhos: 320×568, 360×640, 390×844, 430×932, 600×960, 767×900, 768×1024, 820×1180, 1024×768, 1280×720, 1366×768, 1440×900, 1536×864, 1920×1080, 2560×1440 e 844×390. Isso amostra celulares, tablets, notebooks baixos, monitores grandes e paisagem; não equivale a testar cada aparelho existente. O menu aberto também é verificado separadamente, com contato persistente e navegação interna rolável.

Resultado final: 64 cenários sem overflow horizontal, seis detalhes de projeto acessíveis em 320 px com quatro fotos por página. Menu com CTA visível e clicável em 320×568, 390×844, 844×390 e 1024×768. Seleção/pausa do carrossel, abertura do FAQ, mudança de etapa do Processo e sua entrada animada conferidas no navegador. Lint, TypeScript, formatação e os 20 testes unitários passaram. Build de produção não foi executado nesta refatoração; a limitação anterior está registrada na auditoria de Projetos.
