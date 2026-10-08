# Dúvidas frequentes

Seção `/#duvidas` entre Estúdio e Contato. As cinco perguntas e respostas foram
migradas do submenu de ambientes, sem acrescentar prazos, garantias ou
condições comerciais não confirmadas.

Todas começam fechadas e apenas uma fica aberta. Botões nativos permitem
Enter e Espaço; `aria-expanded` e `aria-controls` associam perguntas às
respostas. Respostas fechadas ficam ocultas da árvore de acessibilidade.

No desktop acima de 1023px, o texto acompanha a rolagem com `position: sticky`
e para no fim da seção. Mobile, alturas até 650px e movimento reduzido mantêm
o fluxo normal. A animação de altura usa CSS e respeita movimento reduzido.

Paleta global: marfim #F5F1EA predominante, bege #DCC5B7, marrom #897061 e
azul-ardósia #27323A. O FAQ preserva branco #FFFFFF como área de apoio.
Branco sobre marrom tem contraste 4,61:1; bege sobre azul-ardósia, 7,93:1.
Textos pequenos nas áreas em marfim usam azul-ardósia; marrom fica nos
detalhes. Cores oficiais de plataformas ficam em seus ícones.

## Validação

`npm run check` passou. Browser: 1920px, 1280px, 1200px, 820px e 390px;
sem overflow horizontal nos tamanhos conferidos. Abertura única, fechamento,
teclado, limites do sticky, menus e retorno de Sobre para Dúvidas conferidos.

O build Webpack passou em cópia isolada do código e dependências instaladas,
sem copiar arquivos privados de ambiente. Na pasta original, a compilação e
os tipos passaram, mas a geração estática encontrou EPERM ao criar a pasta
`.next/server/app/_global-error.segments/_global-error`. A falha se repetiu;
a cópia isolada concluiu todas as rotas. A verificação não confirma que a
permissão do cache da pasta original foi corrigida.
