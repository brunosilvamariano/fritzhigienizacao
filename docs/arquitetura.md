# Organização e responsabilidades

| Pasta                      | Conteúdo                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `src/app`                  | Rotas, layouts e metadados do Next.js. Cada `page.tsx` compõe as seções da página.                                  |
| `src/components/ui`        | Elementos reutilizáveis: botões, badges, cards e campos.                                                            |
| `src/components/layout`    | Header, navegação, footer e containers compartilhados.                                                              |
| `src/components/media`     | Componentes para imagens responsivas e outros recursos de mídia.                                                    |
| `src/sections`             | Uma pasta por página e por seção, como `home/hero/`. Cada seção reúne sua implementação e seus arquivos exclusivos. |
| `src/config`               | Configurações públicas compartilhadas, como nome do site e navegação.                                               |
| `src/providers`            | Provedores de contexto usados pela aplicação.                                                                       |
| `src/animations`           | Presets e componentes de animação compartilhados, com respeito à redução de movimento.                              |
| `src/hooks`                | Hooks React reutilizáveis. Hooks de um único componente ficam próximos dele.                                        |
| `src/lib`                  | Utilitários e integrações compartilhadas.                                                                           |
| `src/styles`               | Estilos globais, Tailwind e tokens de design.                                                                       |
| `src/types`                | Tipos compartilhados. Tipos locais ficam junto da implementação.                                                    |
| `src/content`              | Conteúdo usado por várias seções ou páginas. Conteúdo exclusivo fica na própria seção.                              |
| `src/assets/images/pages`  | Imagens específicas de cada página.                                                                                 |
| `src/assets/images/shared` | Imagens usadas em várias páginas, como marcas e retratos.                                                           |
| `src/assets/fonts`         | Fontes locais, quando utilizadas.                                                                                   |
| `src/assets/icons`         | Favicons e outros ícones estáticos.                                                                                 |
| `docs`                     | Decisões de arquitetura, design e orientação dos recursos visuais.                                                  |

## Convenções

- Arquivos e pastas em `kebab-case`; componentes e tipos em `PascalCase`.
- Respeitar os nomes especiais do Next.js: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` e `not-found.tsx`.
- Criar páginas e seções somente quando o escopo delas estiver definido.
- Manter componentes de servidor como padrão; usar componentes de cliente quando houver interação ou animação que exija isso.
- Centralizar cores, espaçamentos e tipografia em tokens de estilo.
- Guardar segredos em variáveis de ambiente, nunca em `public` ou no conteúdo editorial.
- Evitar arquivos de reexportação e camadas extras sem necessidade concreta.

## Organização por seção

A unidade de manutenção é a seção. Consulte [o modelo de seção](secao-modelo.md).
Cada seção possui um componente principal e, conforme a necessidade, conteúdo,
animações, estilos, tipos, hooks e componentes internos na mesma pasta.

As páginas em `app` cuidam de rotas, metadados, obtenção de dados e composição.
Os componentes de apresentação e seus detalhes ficam em `sections`.
Recursos em `src/assets` são importados pelo código, sem URLs escritas manualmente.
Fontes e bibliotecas seguem [dependencias.md](dependencias.md).

Direção das dependências: `app` usa `sections`, que usa componentes e utilitários
compartilhados. Componentes compartilhados não importam seções. Uma seção não
importa detalhes internos de outra; elementos comuns são extraídos para a pasta
compartilhada apropriada quando houver uso real.

Header e footer seguem o mesmo princípio: cada um terá sua pasta dentro de
`components/layout`, reunindo seus arquivos exclusivos.

Estilos globais servem à base visual do site. Usar Tailwind no componente e CSS
Modules locais apenas para estilos complexos. Animações exclusivas ficam na seção;
presets reutilizados ficam em `animations`. Não duplicar conteúdo ou caminhos de
imagens entre registros globais e locais.

Testes de comportamento, quando necessários, ficam próximos do código testado.
Testes de jornadas completas poderão ficar em `tests/e2e` quando essas jornadas
existirem. Não criar arquivos vazios para cada possibilidade.

## Arquivos de configuração instalados

Na raiz estão `package.json`, `package-lock.json`, `tsconfig.json`, `next-env.d.ts`,
`next.config.ts`, `postcss.config.mjs`, `biome.json` e as configurações de
formatação. A CI executa lint, checagem de tipos e formatação.

Os arquivos `src/app/layout.tsx` e `src/app/page.tsx` serão criados com as primeiras telas.
`src/styles/globals.css` e `src/styles/fonts.ts` já preparam estilos e fonte local.
O alias `@/*` aponta para `src/*`.

Antes de implementar a interface, documentar em `docs/design-brief.md` o nome do
projeto, nicho, referências, paleta, tipografia, animações, seções e diferencial visual.
Essas decisões ainda dependem da definição do produto.
