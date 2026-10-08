# Modelo de organização por seção

O exemplo abaixo mostra os nomes previstos para uma seção Hero. Ele documenta
a convenção; os arquivos de implementação serão criados com o design da seção.

```text
src/sections/home/hero/
├── hero.tsx                 # Componente principal da seção
├── hero.content.ts          # Títulos, descrição e CTAs
├── hero.images.ts           # Fontes mobile/tablet/desktop, dimensões e alt
├── hero.motion.ts           # Animações exclusivas, se necessárias
├── hero.types.ts            # Tipos locais, se precisarem de arquivo próprio
├── hero.module.css          # Estilos da seção (o projeto usa hero.css)
├── hero.test.tsx            # Testes de comportamento, quando necessários
├── components/             # Partes internas da seção, se existirem
│   └── hero-visual.tsx
└── hooks/                  # Hooks exclusivos, se existirem
    └── use-hero-interaction.ts

src/assets/images/pages/home/hero/
├── mobile.webp
├── tablet.webp
└── desktop.webp
```

Não criar todos esses arquivos automaticamente. Uma seção simples pode precisar
apenas do componente e do conteúdo. Separar responsabilidades úteis sem fragmentar
trechos pequenos que são mais claros juntos.

Nos componentes, use Tailwind com prefixo `tw:` para layout e ajustes simples.
A folha CSS reúne composição fluida com clamp/calc, tipografia editorial,
seletores contextuais, estados e efeitos. Não repetir uma propriedade nas duas
camadas sem uma sobrescrita responsiva/contextual deliberada. Consulte
[Tailwind e CSS](tailwind-e-css.md).

## Exemplos de manutenção

| Mudança                                  | Local                                                                         |
| ---------------------------------------- | ----------------------------------------------------------------------------- |
| Trocar o título da Hero                  | `hero.content.ts`                                                             |
| Trocar uma imagem mobile                 | Arquivo em `src/assets/images/pages/home/hero` e registro em `hero.slides.ts` |
| Alterar o layout da Hero                 | `hero.tsx` e seus componentes internos                                        |
| Ajustar a animação exclusiva             | `hero.motion.ts`                                                              |
| Reordenar seções da página               | `src/app/page.tsx`                                                            |
| Alterar um botão usado no site inteiro   | `src/components/ui`                                                           |
| Alterar cores e tipografia globais       | `src/styles`                                                                  |
| Alterar links da navegação compartilhada | `src/config`                                                                  |

## Outras seções e páginas

Repetir a organização somente para as seções aprovadas, por exemplo:

```text
src/sections/
├── home/
│   ├── hero/
│   ├── features/
│   └── testimonials/
└── about/
    ├── introduction/
    └── team/
```

Esses nomes são exemplos, não uma definição das páginas do produto.
Cada pasta de imagens acompanha o mesmo caminho de página/seção.

Os componentes visuais não devem conter segredos ou acesso direto ao banco de
dados. Caso o projeto precise de integrações privadas, criar módulos de servidor
separados e protegidos contra importação pelo cliente durante a implementação.
