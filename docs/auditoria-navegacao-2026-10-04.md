# Auditoria de navegação — 04/10/2026

## Problemas reproduzidos

- O rodapé trocava de `sticky` para `relative` ao receber foco. A mudança durante a ativação dos links deslocava a pintura do rodapé e expunha uma área vazia.
- As âncoras dos ambientes estavam nos próprios cards sticky. Ao voltar de baixo da página, sua posição visual já correspondia ao fim da pilha, em vez do começo do ambiente escolhido.
- O menu mobile iniciava a navegação com o diálogo ainda aberto e o corpo bloqueado para rolagem.

## Correções

- Rodapé mantém a mesma geometria ao receber foco, preservando o efeito de revelação.
- Pontos de rolagem sem altura no fluxo normal dos ambientes: por card no mobile e por dupla no desktop. Os IDs públicos e a sobreposição permanecem.
- `src/lib/navigate-anchor.ts` resolve destino, foco, histórico e rolagem com a compensação do header e respeito à preferência de movimento reduzido.
- `src/components/layout/anchor-navigation.tsx` aplica o mesmo comportamento aos links internos, à carga inicial com hash e ao histórico. Links externos, download, nova aba e cliques com modificadores conservam o comportamento nativo.
- O diálogo mobile fecha e restaura a rolagem antes de navegar. O controle duplicado de foco do submenu desktop foi removido.

## Validação local

- Rodapé: Cozinhas, Dormitórios, Salas, Banheiros, Home office, Serviços, O processo, Estúdio e Contato em 390 × 844 e 1440 × 900. Destinos, hash e foco correspondem ao link escolhido depois da rolagem.
- Header desktop: Serviços, O processo, Estúdio e Contato.
- Mobile: Serviços pelo menu, Cozinhas pelo FAQ, diálogo fechado, overflow do corpo restaurado e Topo chegando a `scrollY = 0`.
- Histórico: voltar de Contato para Estúdio.
- Link direto: `/#banheiros` em 320 × 700, conteúdo abaixo do header e sem overflow horizontal.
- DOM: sem destinos internos ausentes ou IDs duplicados.
- `npm run check` e `npm run build`: aprovados.

Os testes de navegador usam Chromium com viewport responsivo. Não substituem testes em Safari/iPhone físico ou avaliação com leitor de tela. Publicação depende de commit/push e deploy na Vercel.
