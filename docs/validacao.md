# Validação — header e Home Traço

Data: 2026-10-03.

- npm run check: passou, lint sem avisos, TypeScript e formatação aprovados.
- npm run build: passou; Home pré-renderizada estaticamente.
- Navegador integrado: conteúdo carregado e console sem erros/avisos nas verificações.
- Larguras 320, 390, 768, 1024 e 1440 px: sem overflow horizontal.
- Imagens: variantes mobile, tablet e desktop servidas pelo otimizador local, carregamento conferido.
- Desktop: abertura por Enter, fechamento por Escape com retorno de foco ao botão.
- Mobile: abertura do diálogo, expansão de categorias, navegação para Dormitórios e fechamento com restauração de rolagem.
- Ajustes encontrados no teste: quebra excessiva do título e CTA desktop visível no mobile; ambos corrigidos e reinspecionados.

O agent-browser não conseguiu criar sua pasta de controle nesta sessão; a inspeção
foi concluída pelo navegador integrado. As checagens de layout não equivalem a teste
em todos os aparelhos físicos. Lighthouse e auditoria WCAG completa não foram executados.

A marca é fictícia e as imagens são geradas por IA. As seções de apoio são conceituais.
Sem coleta de leads, integrações externas ou depoimentos inventados.
