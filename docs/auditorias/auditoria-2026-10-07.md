# Auditoria de estrutura e código — Traço

Data: 07/10/2026. Escopo: pastas, arquivos, configuração e código-fonte. Sem
mudança de conteúdo, layout ou ordem das seções.

## Corrigido

- Rotas de página em fonte única (`src/config/routes.ts`), usada pelo sitemap e
  pela transição entre páginas.
- Cabeçalhos `X-Content-Type-Options`, `Referrer-Policy` e `Permissions-Policy`
  em `next.config.ts`.
- Removidas 15 pastas vazias e o arquivo sem uso `sections/home/hero/hero.images.ts`.
- Logo original da VBG movida de `src` para `docs/marca`.
- Criados `.env.example`, `app/not-found.tsx` e `app/error.tsx`.
- Checagem de clique simples e consultas de mídia extraídas para `src/lib`.
- Painéis de FAQ, Processo e Estúdio deixaram de ser `<section>` rotuladas, o
  que criava 12 regiões extras para leitores de tela.
- Tokens repetidos passaram a apontar para `--ink` e `--taupe`, sem mudança visual.
- Ano do rodapé calculado no build; classe `home-content` renomeada para
  `page-content`; `as const` nos arquivos de conteúdo.
- `noUnusedLocals` e `noUnusedParameters` ativados no `tsconfig.json`.
- Testes de `contact`, `site`, `tracking` (configuração) e `plain-click`;
  script `npm test`; CI roda todos os testes e o `npm audit` depois do build.

## Organização — segunda etapa

- Documentação dividida em `docs/guias`, `docs/secoes` e `docs/auditorias`, com
  índice em `docs/README.md` e links conferidos por script.
- Transição Serviços → Processo movida de `components/layout` para
  `sections/home/services-process-transition`, por ser exclusiva da Home.
- Escala `--z-*` em `tokens.css` para as seis camadas globais.
- `config/developer.ts` reduzido aos três campos em uso; nota e contagem de
  avaliações seguem registradas em `secoes/google-vbg.md`.
- Teste de tracking passou a usar `tests/unit/helpers/load-ts.cjs`.
- Linha em branco padronizada após `'use client'` e após o bloco de imports.
- Tabela de pastas da arquitetura sem as pastas que não existem.

Revistos e mantidos: a reutilização de imagens pelo Estúdio e o registro
`content/kitchen-study.images.ts` são decisões documentadas em
`secoes/estudio.md` e `guias/imagens.md`. `contato.md`/`contato-footer.md` e
`imagens.md`/`imagens-geradas.md` tratam de assuntos diferentes e não foram
fundidos.

## Evidências verificadas

- `npx tsc --noEmit`: aprovado com as novas regras.
- `npm test`: 20 testes aprovados.
- `prettier --check`: aprovado.
- Navegador, 1456 px, servidor de desenvolvimento: Home, Sobre e 404 sem erros
  no console; transição Home → Sobre → `/#duvidas`; FAQ abre e fecha.

Não verificado: lint do Biome, `npm audit` e `npm run build`. Rodar
`npm run check` e `npm run build` antes do commit.

## Decisões tomadas

- Cortina de entrada mantida. Medição no build de produção local: imagem
  principal pintada em 504 ms na primeira visita e em 76 a 100 ms nas seguintes;
  conteúdo livre cerca de 0,6 s depois, quase tudo a animação de saída. O LCP
  não é afetado. Reavaliar com PageSpeed Insights após o deploy, em celular lento.
- Tailwind mantido como reset de base; o padrão é CSS por seção com tokens.
  Documentação ajustada.

## Adiado até a medição no deploy

- Framer Motion: usado em `Reveal`, no carrossel do hero e no texto de
  Ambientes. O arquivo que o contém tem cerca de 40 KB comprimidos, de 238 KB
  de JavaScript (estimativa pelo build local). Remover só se o PageSpeed
  Insights apontar o JavaScript como gargalo em celular; exige `npm uninstall`
  e conferência visual do texto de Ambientes.

## Pendências que dependem de decisão

- Hero inteiro é componente de cliente; separar o carrossel do texto. Avaliar
  junto com o Framer Motion, após a medição no deploy.
- CSP e `X-Frame-Options` não foram adicionados: dependem dos scripts de
  medição e de o site ser ou não exibido em `iframe` no portfólio.
- Flags `experimental` em `next.config.ts` sem justificativa documentada.
- Cores com transparência escritas em hexadecimal fora dos tokens.
