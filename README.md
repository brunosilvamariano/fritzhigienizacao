# Traço — móveis planejados

Projeto conceitual de portfólio, com marca fictícia e imagens geradas por IA.
Implementação da direção editorial aprovada: header, submenu Ambientes, menu mobile,
Hero responsiva e seções de apoio para os destinos da navegação.

## Executar

- npm ci: instalar dependências a partir do lockfile.
- npm run dev: desenvolvimento.
- npm run check: lint, tipos e formatação.
- npm run build: produção.
- npm start: servir o build em localhost:3000.

Node.js 22.22.2; npm 11.15.0. A prévia nesta entrega foi iniciada em http://127.0.0.1:3000.
O servidor precisa estar rodando para abrir a prévia.

## Organização

- src/components/layout/header: header, navegação desktop e diálogo mobile.
- src/sections/home: hero, environments, process e studio, cada seção com seus estilos.
- src/config/navigation.ts: links compartilhados.
- src/content/kitchen-study.images.ts: registro compartilhado de imagens locais.
- src/assets/images/pages/home/hero: imagens WebP desktop, tablet e mobile.
- src/assets/fonts/geist: fonte WOFF2 e licença.
- docs/estrutura-completa.txt: inventário completo dos arquivos próprios.

## Qualidade e limites

Lint, TypeScript e build de produção verificados. Navegação conferida em desktop e
mobile. Há suporte a redução de movimento, foco visível, link de salto e diálogo modal nativo.
Não há CDN nem imagens remotas. Não há formulário ou contato comercial fictício.
Metadados identificam o conceito e impedem indexação enquanto projeto demonstrativo.
Não foram medidas pontuações Lighthouse nem realizadas auditorias completas WCAG.

O Next usa workers em threads e o verificador TypeScript via API para compatibilidade
com as restrições de criação de subprocessos deste ambiente, mantendo a validação de tipos.
O CI inclui check, audit e build.

Consulte docs/design-brief.md, docs/validacao.md e docs/imagens-geradas.md.
