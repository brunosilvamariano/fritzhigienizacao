# Traço — revisão de fidelidade ao Ariyana

Referência analisada: https://ariyana-studio.webflow.io/. Projeto editado: C:\user\bruno\dev\clientes\traco-moveis-planejados. Prévia: http://localhost:3000/.

Revisão de 8 de outubro de 2026. A estrutura foi reconstruída após a solicitação de maior fidelidade. Mantidos Next.js, React, TypeScript, Tailwind e Framer Motion, sem nova dependência de runtime. Textos em português. Bebas Neue e DM Sans locais, com licenças OFL.

## Estrutura reproduzida

| Referência                                   | Implementação na Traço                                                                                                                               |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abertura com marca gigante e imagem estática | Foto local de cozinha, Traço Studio, chamada e métrica demonstrativa                                                                                 |
| Apresentação e histórico 2020–2025           | Seis cartões, números grandes, etiquetas inclinadas e rolagem horizontal vinculada ao scroll, inclusive no celular                                   |
| Assess, deploy, and operate                  | Quatro cartões brancos, marcadores pentagonais, linha pontilhada, botões circulares; cada cartão expande independentemente. Nenhuma foto nessa seção |
| Featured works                               | Quatro projetos locais em painéis coloridos empilhados; saída com rotação em perspectiva                                                             |
| Marcas e citação                             | Faixa escura, seis marcas da referência, citação e identificação demonstrativa                                                                       |
| Expert solutions                             | Quatro serviços demonstrativos, etiquetas e cartões com foto enquanto os vídeos aguardam envio                                                       |
| Showreel                                     | Composição de tela larga preparada visualmente, com foto local e indicação do vídeo pendente                                                         |
| Líderes e 400+                               | Dez fotos locais em disposição circular com animação, métrica identificada como demonstração                                                         |
| Feedback                                     | Quatro depoimentos demonstrativos com retratos da referência, cartões sobrepostos e destaque no hover                                                |
| Contato e rodapé                             | Duas faixas tipográficas, botão central, quatro colunas de links, newsletter demonstrativa e marca gigante                                           |
| Menu completo                                | Overlay escuro em desktop e mobile, seis páginas, botão de fechar, Escape, foco e bloqueio de rolagem                                                |

Sobre inclui abertura, métricas, motivos para escolher, equipe, marcas, líderes, premiações e fotos. Projetos inclui galeria e seis detalhes com capa, contexto, métricas demonstrativas, citação e resultados. Também foram criadas Serviços, Contato, Blog, quatro artigos resumidos e três páginas de informações.

As fotos de ambientes continuam sendo as do projeto. A autorização do usuário para usar conteúdo do Ariyana como demonstração foi aplicada a datas, números, marcas, retratos, equipe, premiações, depoimentos e serviços. Esses blocos têm identificação visível e não representam histórico ou resultados reais da Traço. Os artigos são resumos em português, não cópias integrais. A procedência dos recursos está registrada em src/assets/images/shared/ariyana-demo/ORIGEM.md.

## Verificação

- npm run check aprovado: lint, TypeScript e Prettier.
- npm test: 20 testes aprovados.
- Navegação inspecionada em 1440 × 900 e 390 × 844. Páginas verificadas sem transbordamento horizontal.
- Processo verificado com duas etapas simultaneamente abertas, fechamento independente e zero imagens.
- Histórico mobile verificado com altura de 300vh, faixa fixa e deslocamento horizontal; projetos desktop verificados com transformações em perspectiva e escala.
- Menu mobile, links internos, detalhe de projeto, blog, artigo, Sobre, Serviços, Contato e Licenças inspecionados.
- Abas do formulário verificadas com teclado; campos obrigatórios, orçamento e mensagem de validação local funcionando.
- A última leitura do console não mostrou erro associado às páginas localhost. Registros externos de Cloudflare pertenciam à navegação anterior na referência.
- Build compila e conclui TypeScript, mas a geração estática é interrompida por EPERM ao criar diretórios de segmentos RSC no Windows. Reproduzido em cópia isolada, com webpack, workers em threads e um worker em processo. Configuração original do projeto preservada; build de produção completo ainda não foi confirmado.

## Pendências conhecidas

Vídeos aguardam envio pelo usuário. Formulários de contato e newsletter são demonstrativos e não estão ligados a um serviço de envio. Páginas de informações usam o desenho compartilhado e conteúdo próprio de procedência/licenças. Fotos, marca, idioma e avisos de demonstração produzem diferenças em relação à referência; não se afirma igualdade pixel a pixel.

Capturas: traco-desktop.jpg, traco-mobile.jpg e traco-processo.jpg. Inventário completo: estrutura.txt.

## Ajuste dos projetos — 2026-10-08

Cartões da Home limitados a 1480 px, fotos a 500 × 500 px e centralizadas, com padding 32 px na metade fotográfica. Conteúdo alinhado ao centro verticalmente. Primeiro cartão em fluxo para a pilha usar a altura real, retirando a altura artificial de 78vh. Cores dos quatro projetos e das metades fotográficas conferidas na referência.

Troca baseada na timeline observada: pausa inicial de 0,1 s; três transições de 0,5 s, separadas por 0,01 s; suavização do progresso de 0,8 s, saída até -120% com rotação X de 45 graus e promoção sucessiva dos cartões de trás. A execução usa Framer Motion existente, sem carregar scripts externos.

Navegador: em 1440 × 900, primeiro cartão com 564 px de altura e foto de 500 px. Em 1755 × 920, largura máxima de 1480 px, foto de 500 px e altura de 581 px. Estados inicial, intermediário e final da pilha inspecionados. Captura: traco-projetos-compactos.jpg.

## Marcas, vídeo e rodapé — 2026-10-08

Marcas reconstruídas em grade de 22 colunas por 11 linhas, com posições de logos e depoimento iguais às regras da referência, incluindo a variante de telas a partir de 1920 px. Fundo quadriculado, faixa pequena à direita e depoimento em DM Sans, sem caixa alta. Mantida identificação demonstrativa. Removidas as curvas externas de Marcas e Serviços.

Arquivo enviado pelo usuário copiado para public/videos/traco-showreel.mp4 (5,29 MB). Reel com botão funcional de reproduzir/pausar, loop silencioso e reprodução inline. No desktop, a máscara cresce de 50vw/40vh para 100vw/100vh conforme a rolagem; no celular e com movimento reduzido, usa composição estática. Vídeo verificado no navegador: 1920 × 1080, 5 segundos, readyState 4, play e pause funcionando, sem erro de mídia. Este envio resolve o vídeo do reel; os vídeos específicos dos quatro serviços continuam pendentes.

Cinco barras de alturas 12, 9, 6, 4 e 3 px, separadas por 4 px, após Serviços (linho) e antes do rodapé (pretas, ordem invertida), com tamanhos responsivos. Marca do rodapé com degradê de branco para preto em 80%, conforme a referência. Overflow do rodapé contido para impedir que a tipografia condensada amplie a área branca após o fundo preto.

Inspeção em 1920 × 960 e 390 × 844, sem transbordamento lateral. No fim da página desktop, a borda inferior do rodapé foi medida em 959,93 px para viewport de 960 px: sem faixa branca adicional. Verificados expansão do reel, controles, seis logos e conteúdo mobile. Lint, TypeScript e formatação passaram. Capturas: traco-marcas.jpg, traco-video.jpg e traco-footer.jpg.

### Ajustes de contato e responsividade — 08/10/2026

- Formulário conectado ao WhatsApp 5547991597258 com os dados preenchidos, intenção de contato, projeto, orçamento e mensagem codificados; campos opcionais vazios são omitidos. O visitante confirma o envio no WhatsApp. Testado com dados fictícios sem enviar uma mensagem ao destinatário.
- Removido o semicírculo da abertura de contato; corrigidos os selects que cortavam o texto, foco e botão no celular. Dados comuns permanecem ao alternar abas.
- Cinco traços laranja posicionados depois da abertura e do ticker de projetos, antes da galeria, conforme o HTML da referência. Espessuras também adaptadas ao celular.
- Sobreposição sticky dos serviços restaurada abaixo de 479px. Movimento reduzido mantém fluxo normal.
- Fotos animadas de histórico, projetos, serviços e círculo carregam antecipadamente e usam diretamente os módulos WebP locais, mantendo fontes por breakpoint. A inspeção encontrou duas imagens otimizadas sem currentSrc; após a alteração, quatro fotos dos projetos carregaram no navegador.
- Depoimentos no celular com texto 16px, retratos 48px, cards de cerca de 256–278px, sem a altura mínima de 490px herdada por especificidade.
- Botão do rodapé encurtado para WhatsApp no layout estreito.
- Verificações: lint, TypeScript e formatação passaram; 22 testes unitários passaram, incluindo mensagem com acentos, quebras de linha e escolhas de orçamento. Inspeção visual no celular 390x844 e desktop 1440x900.

### Vídeo de serviços: reprodução da timeline original — 08/10/2026

A referência usa GSAP 3.15.0 com ScrollTrigger no próprio elemento transformado. Copiados os parâmetros originais: início `clamp(top bottom)`, fim `clamp(bottom 10%)`, scrub 1,2 s; primeira ação com duração 1, opacity 0→1, yPercent −100→0, escala fixa 0,1; segunda ação na posição 1,05 com duração 0,8 e escala 0,1→1. Ambas usam ease none. Desativada a animação até 991px e em movimento reduzido, como na referência. O vídeo permanece o arquivo enviado pelo usuário.

A implementação anterior com uma mola do Framer Motion e gatilho no container foi substituída pelo motor e gatilho reais. Aos 1280×720, o estado inicial dos dois sites coincidiu: 126,48×42,82px, posição x=569,16 e y=420,90, escala 0,1 e opacidade 0. Também conferidas a fase intermediária, expansão e rolagem inversa; no celular a transformação é removida. GSAP é carregado pelo npm, sem CDN, e importado dinamicamente na variante services. Controle de pausa com duas barras, uma cinza e uma preta, e afastamento de 20px das bordas.
