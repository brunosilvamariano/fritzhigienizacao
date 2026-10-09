# Paleta Fritz

## Entrada e saída da galeria circular

Fotos empilhadas antes de entrar na seção. Abrir a galeria suavemente ao entrar na área visível; continuar do estado atual ao voltar, sem reiniciar o leque. Recolher apenas quando a seção sair totalmente da tela. Movimento reduzido mantém a disposição circular estática.

## Toggle do menu

Referência observada na Ariyana: três linhas com larguras 16/32/16 px e rotação de -45 graus; ao passar o ponteiro, a rotação volta a zero e as três linhas ficam com 32 px. Aplicar transição suave, equivalente no foco do teclado e respeitando movimento reduzido, sem alterar as cores, o X ou o painel.

## Ícones e identidade

Instagram com gradiente de cores da plataforma e glifo branco. Assinatura VBG branca sobre rodapé azul. Favicon e ícones de dispositivo derivados da logo original Fritz, sem identidade da Traço nos metadados.

## Marca na apresentação

Substituir somente a composição geométrica da introdução pela logo original da Fritz. Manter o tamanho do espaço, comportamento responsivo e animações existentes, sem filtros nas cores da marca.

## Correção de contraste

No menu, usar azul de ação e texto branco nos estados de interação. No CTA de agenda, usar âmbar com texto azul profundo, incluindo hover e foco, e seta branca sobre círculo azul. Preservar dimensões e animações.

Aplicar apenas cores, preservando seções, conteúdo, dimensões, tipografia e animações.

- Azul de ação: #175DA8, com texto branco.
- Azul da logo: aproximadamente #143874, amostrado do arquivo original; logo preservada.
- Azul profundo: #102E4A para textos, rodapé e fundos escuros.
- Azul névoa: #E3EFF9 para cartões e campos.
- Branco suave: #F7FAFC para fundo geral.
- Areia: #EDE3D8 para equilíbrio acolhedor.
- Âmbar: #F3B75B para detalhes; #946008 para estrelas sobre fundo claro.

Fotos, avatars, marca do Google e verde oficial do WhatsApp preservados. Verificar contraste e larguras de 390, 820 e 1366 pixels.


### Galeria circular: comportamento medido na Ariyana
Preservar fotos, conteúdo, paleta, dimensões e seções da Fritz. Reproduzir os eventos IX2 e-3/e-6/e-7 e ações a-3/a-7/a-8: primeira foto como alvo da abertura, área central com margem de 40%, abertura de 1 s com inOutCubic, recolhimento instantâneo somente fora da área com margem de 10%. Rotação contínua de 0 a 360 graus com início na metade da seção, fim na saída completa e suavização 85. Hover desktop: opacidade de 0,5 a 1 e escala do círculo de 1 a 0,8 em 500 ms. Respeitar movimento reduzido.


### Estabilidade da galeria em celular e tablet
A galeria em larguras até 991 px deve abrir uma vez ao alcançar a área central e permanecer aberta enquanto qualquer parte da seção estiver na tela. Usar o retângulo estável da seção, sem depender de uma foto rotacionada. Recolher apenas após saída completa; pequenas inversões de scroll e mudanças de altura da barra do navegador não podem reiniciar a entrada. Preservar rotação, conteúdo, fotos, composição e comportamento desktop.
