# Página Sobre a Traço

Rota: `/sobre`. Header e footer compartilhados com a Home. Abertura inspirada
na Home One de Archiesta, preservando paleta e Plus Jakarta Sans da Traço.

## Movimento

Desktop a partir de 1024px, com altura acima de 650px: o painel de texto sai pela
esquerda e a fotografia se expande durante 130 alturas percentuais de viewport
de scroll. O texto sobre a imagem aparece na segunda metade do movimento.
A composição de três imagens vem em seguida e o footer encerra a página.
Scroll reversível, sem interceptar roda do mouse ou gestos. Mobile, tablet,
telas baixas e preferência de movimento reduzido usam fluxo vertical.

## Imagens

Três estudos visuais gerados por IA com autorização do usuário em 2026-10-06.
Não representam obras executadas, instalações reais nem fotos da equipe.
O aviso aparece na página e os textos alternativos identificam os estudos.
Originais de geração permanecem fora do repositório; só WebP é importado.

| Imagem     | Desktop    | Tablet      | Mobile    |
| ---------- | ---------- | ----------- | --------- |
| Cozinha    | 1760 × 880 | 1280 × 1024 | 704 × 880 |
| Sala       | 1200 × 800 | 900 × 675   | 640 × 800 |
| Marcenaria | 800 × 1100 | 640 × 880   | 480 × 660 |

Variantes em `src/assets/images/pages/about/{kitchen,living,detail}`.
Recortes centrais por dispositivo, WebP qualidade 82. O componente `picture`
seleciona o enquadramento antes do download; Next.js seleciona a resolução
conforme `sizes` e densidade da tela. Apenas a abertura recebe prioridade.

Prompts: cozinha ampla com carvalho natural, ilha de travertino, mesa e luz da
manhã; sala com estante integrada em carvalho, sofá de linho e mesa em pedra;
marcenaria com encontros alinhados, puxadores de cobre e tampo de travertino.
Todas as imagens pedem arquitetura plausível, materiais naturais e ausência
de pessoas, textos, logos e marcas d'água.

## Transição entre páginas

Uma cortina em marfim com símbolo animado e marca cobre a navegação entre Home
e Sobre. A entrada dura 350 ms e a saída 520 ms. A troca acontece depois que a
cortina foi pintada; a seção solicitada é posicionada antes da revelação.
Os links na própria Home continuam com rolagem suave. Movimento reduzido
desativa a cortina. Voltar e avançar entre as páginas também são tratados.
Nenhuma dependência foi adicionada.
