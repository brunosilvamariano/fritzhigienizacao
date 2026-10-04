# Auditoria técnica — Traço

Data: 03/10/2026. Escopo: código, estrutura, semântica, manutenção e acessibilidade técnica da Home. Ambiente: build de produção local. Marca e conteúdo conceituais permanecem conforme autorização.

## Resultado e correções

- Preservadas seções, imagens, animações, navegação, CTAs contextuais, FAQ e troca WhatsApp/Topo.
- Link de pular conteúdo agora chega a um `main` programaticamente focável.
- Links de ambiente no menu mobile fecham o diálogo e levam o foco à seção escolhida. Escape e fechar retornam foco ao botão de menu. No submenu desktop, links internos também transferem foco após o fechamento.
- Carrossel informa mudanças com uma região de anúncio educada quando está pausado/focado; rotação automática não fica anunciando continuamente. Controle de pausa e escolha manual preservados.
- Processo navega por setas, Home e End usando o tamanho real da coleção em vez de números fixos.
- Eliminados quatro avisos de concatenação, seletores antigos `brand-text`, `index-line`, `mobile-all-environments`, `google-rating` e 22 marcadores `.gitkeep`.
- SVG original da VBG preservado como fonte de trabalho; não é carregado na interface. Fontes/licenças e imagens utilizadas preservadas.
- Testes de medição incluídos na CI. Estrutura de arquivos e documentação atualizadas.

## Evidências verificadas

- `npm run check`: lint sem avisos, tipos e formatação aprovados.
- `npx tsc --noEmit --noUnusedLocals --noUnusedParameters`: aprovado após correções.
- `npm run test:tracking`: seis testes aprovados, sem enviar eventos reais.
- `npm run build`: aprovado; somente Home, not-found, ícones, robots e sitemap. Nenhuma página de cozinha adicional.
- `npm audit`: zero vulnerabilidades reportadas pelo comando nesta execução. Não equivale a garantia permanente.
- DOM: idioma `pt-BR`, um `h1`, um `main`, nenhum ID duplicado, nenhum `aria-controls` apontando a elemento ausente, nenhuma imagem sem atributo `alt`, nenhuma âncora local quebrada.
- Mobile por teclado: Enter abre menu e FAQ; link Ver ambiente leva a `#cozinhas`, fecha diálogo e foca `cozinhas`; Escape fecha e devolve foco a Abrir menu.
- Desktop por teclado: FAQ abre com Enter e menu fecha com Escape; processo responde às setas; painel do estúdio abre com teclado.
- Painéis de FAQ e estúdio fechados usam `aria-hidden` e `inert`; inspeção não encontrou controles em subárvores `aria-hidden` sem proteção `inert`.
- Larguras 320, 390, 768, 1024 e 1440 px, altura 900 px: sem overflow horizontal na inspeção.
- Código de movimento reduzido: carrossel deixa de girar; revelações respeitam preferência; mensagem e cards deixam de ser fixos e mantêm texto legível; transições decorativas globais desligadas. Revisão de código, sem emulação dessa preferência no navegador nesta execução.
- Imagens com enquadramentos locais por breakpoint e textos alternativos; imagens decorativas do estúdio escondidas da árvore acessível.

## Limites e pendências reais

Foi feita inspeção técnica de semântica, estados e teclado. Não foi executado NVDA, JAWS ou VoiceOver, teste com pessoas cegas, axe-core ou certificação WCAG. Não se afirma que o site é 100% acessível. Contraste de textos sobre fotografia precisa ser revisado também com as imagens definitivas do cliente; não foi produzido um laudo completo de contraste neste escopo.

Para fechamento com cliente, validar jornadas reais com NVDA/Firefox ou Chrome e VoiceOver/Safari, zoom/reflow de 200% e 400%, Windows alto contraste e aparelhos físicos. Considerar particularmente cards sobrepostos, conteúdo por rolagem e fotografia ao fundo. A política de privacidade e IDs reais continuam pendentes; não foram ativados nem testados contra contas externas. Cliques não comprovam conversa ou venda.

Google/Instagram ainda apontam aos destinos fornecidos para o portfólio. Conteúdo fictício, fotos de estudo e dados do cliente devem ser substituídos antes de vender/publicar como empresa real. Indexação continua desativada conforme configuração vigente. A imagem social contém o selo Netlify da arte fornecida pelo usuário e foi preservada sem alterações.

Não foram feitas atualizações de versões ou instalação de dependências durante esta auditoria. O próximo deploy deve incluir estas correções; as verificações de interface referem-se à prévia local.
