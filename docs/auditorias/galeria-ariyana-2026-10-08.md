# Galeria circular: auditoria da referência

Referência: https://ariyana-studio.webflow.io/ — verificada em 08/10/2026.

A configuração pública IX2 foi lida como dados, sem carregar os scripts da referência na Fritz.

| Evento/ação | Comportamento |
|---|---|
| e-6 / a-7 | Alvo: primeira leader_circle_item. Interseção do retângulo transformado com viewport descontando 40% no topo e no fundo. Abre 9 cartões em 1000 ms, inOutCubic, ângulos de -324 até -36; primeiro permanece em 0. |
| e-7 / a-8 | Mesmo alvo, margens de 10%. Ao sair, retorna a rotação dos cartões a 0 instantaneamente. Grupo inicial de translateX(-50%) não adiciona atraso. |
| e-3 / a-3 | Alvo: seção inteira. Rotação 0–360°, smoothing 85. Início na entrada com offset de 50% da altura, limitado à altura da viewport. Término na saída completa. |
| e-4/e-5 / a-5/a-6 | Desktop >=992: conteúdo de opacidade 0,5 para 1, escala do círculo de 1 para 0,8; 500 ms. Opacidade linear e escala inOutQuart. |

Os gatilhos de entrada e saída têm estados de visibilidade independentes, como no IX2. A implementação usa o retângulo da primeira foto já transformado, recalcula após resize e não usa a seção como gatilho de abertura. Não há animação de fechamento reversa. Movimento reduzido mantém a galeria aberta e estática. Fotos, conteúdo, CTA e dimensões da Fritz preservados.

Validação: observação da referência antes/durante/depois da seção; checagem de entrada, saída e retorno local; viewport de notebook 1366x900 e celular 390x844. TypeScript e Biome sem erros.

Tablet 820x1180: 10 fotos presentes, entrada confirmada e sem overflow horizontal.
