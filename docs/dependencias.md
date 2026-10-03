# Dependências e recursos locais

## Base instalada

| Tecnologia/pacote                           | Finalidade                                  |
| ------------------------------------------- | ------------------------------------------- |
| Node.js LTS compatível                      | Ambiente de execução e build                |
| npm                                         | Instalação e lockfile único                 |
| next                                        | Rotas, renderização, metadados e otimização |
| react, react-dom                            | Interface                                   |
| typescript                                  | Tipagem estrita                             |
| @types/node, @types/react, @types/react-dom | Tipos do ambiente e do React                |
| tailwindcss, @tailwindcss/postcss, postcss  | Estilos e integração PostCSS                |
| framer-motion                               | Animações e redução de movimento            |
| @biomejs/biome                              | Análise estática                            |
| prettier                                    | Formatação e compatibilidade com lint       |

As versões instaladas estão fixadas em `package.json` e `package-lock.json`.
Node.js 22.22.2 e npm 11.15.0. Reinstalar com `npm ci`.

## Adicionar somente se houver uso

- `lucide-react`: ícones empacotados, importando somente os utilizados.
- `clsx` e `tailwind-merge`: composição de classes em componentes com variantes.
- `zod`: validação de dados externos e formulários.
- `react-hook-form`: formulários com complexidade que justifique a biblioteca.
- Vitest e Testing Library: testes de lógica e comportamento dos componentes.
- Playwright e axe-core: jornadas no navegador e verificações de acessibilidade.
- TanStack Query: cache e sincronização de dados no cliente, se necessários.
- Zustand: estado global do cliente, se o estado local não atender.

Não adicionar GSAP junto de Framer Motion sem necessidade identificada. Three.js,
React Three Fiber, Lenis e shadcn/ui dependem do design e dos componentes necessários.

## Fontes

Geist variável está instalada localmente em `src/assets/fonts/geist`, com a licença
e o arquivo WOFF2 latin. Os pesos 100–900 são atendidos pelo mesmo arquivo.
`src/styles/fonts.ts` usa `next/font/local`; conectar essa configuração ao layout
quando ele for implementado. A escolha final da identidade visual permanece para o Design Brief.

## Imagens

Importar cada variante real de `src/assets/images` no registro `*.images.ts` de sua
seção. Usar os metadados da importação para dimensões e otimização. A seleção de
enquadramentos ficará no componente compartilhado de mídia, com fontes condicionais.

O navegador necessariamente recebe um endereço interno gerado pelo build/otimizador.
A regra de autoria é importar o arquivo local, sem escrever URLs de imagens no código.

Não usar serviços de imagens remotas, imagens de exemplo, placeholders de blur,
SVGs provisórios ou substitutos fictícios. Se uma imagem estiver ausente, registrar
a pendência antes de implementar a seção correspondente.

## Configuração, segurança e verificação

- `.env.example` documentará somente variáveis realmente utilizadas, sem segredos ou valores fictícios.
- Configurações privadas ficarão em módulos exclusivos de servidor, criados quando houver backend.
- `src/providers` reunirá apenas provedores efetivamente utilizados.
- Scripts disponíveis: `dev`, `build`, `start`, `lint`, `typecheck`, `format` e `format:check`. Scripts de testes serão adicionados junto da infraestrutura correspondente.
- CI verifica instalação reproduzível, lint, tipos, formatação e auditoria. O build será incluído quando existirem rotas. Testes serão acrescentados conforme funcionalidades reais.
- Metadados, favicon e imagem social serão adicionados com os dados e recursos verdadeiros da marca.
- Metas Lighthouse do briefing permanecem metas até serem medidas.

A instalação pelo registro npm é uma etapa de desenvolvimento. Os recursos da
interface serão servidos pela própria aplicação, sem dependências de CDN em runtime.

## Referências de configuração

- https://nextjs.org/docs/app/getting-started/installation
- https://biomejs.dev/linter/domains/
- https://tailwindcss.com/docs/installation/framework-guides/nextjs
