# Estúdio — Design Brief

Referência aprovada: quatro colunas sobre fotografia ampla, divisórias finas e títulos na base. Ao selecionar um pilar, descrição abre e foto muda com crossfade. No celular, quatro faixas empilhadas, ativação por toque. Sem autoplay ou pinagem.

## Estrutura completa da seção

Atualizados: studio.tsx, studio.css, studio.content.ts, studio.images.ts em src/sections/home/studio/.
Novo: studio-panels.tsx na mesma pasta, responsável pelo estado e interação.
Imagens locais existentes: studio, hero/bedroom, services e process/dar-forma em src/assets/images/pages/home/, cada uma com desktop.webp, tablet.webp e mobile.webp. Reutilização via importações estáticas no registro da seção, sem dependência do código de outra seção.

Botões nativos com aria-expanded e aria-controls. Mouse ativa ao entrar; clique, toque e foco também selecionam. Apenas um texto aberto. Respeitar reduced-motion. Imagem anterior permanece até a próxima carregar. Marca e fotografias conceituais claramente identificadas.
