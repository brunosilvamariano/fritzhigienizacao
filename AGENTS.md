# Regras do projeto

- Stack: Node.js, Next.js, React, TypeScript, Tailwind CSS e Framer Motion.
- Estilos híbridos, conforme solicitado pelo usuário: Tailwind com prefixo `tw:` nos componentes para layout simples, alinhamento, dimensões e espaçamentos fixos. CSS por seção para tipografia editorial, responsividade fluida com clamp/calc, seletores contextuais, estados e animações. Tokens em `src/styles/tokens.css`, expostos ao Tailwind em `src/styles/tailwind-theme.css`. Não duplicar a mesma responsabilidade nas duas camadas. Preservar os efeitos e a navegação atuais ao melhorar a responsividade.
- Organizar por página e seção conforme `docs/guias/arquitetura.md` e `docs/guias/secao-modelo.md`.
- Mostrar ao usuário a estrutura completa ao propor mudanças de arquitetura, distinguindo arquivos existentes de arquivos planejados.
- Não usar placeholders: imagens provisórias, lorem ipsum, marcas, depoimentos ou métricas inventados. Quando faltar um recurso real, informar a pendência; não substituí-lo por conteúdo fictício.
- Imagens locais ficam em `src/assets/images` e são importadas como módulos. Não usar URLs remotas, strings de caminho público ou data URLs para imagens locais.
- Fontes devem ser arquivos locais licenciados, preferencialmente WOFF2, em `src/assets/fonts`, carregados com `next/font/local`. Manter os termos de licença junto aos arquivos.
- Não carregar fontes, scripts, folhas de estilo, ícones ou bibliotecas por CDN. Instalar bibliotecas via npm e empacotar os recursos com a aplicação. Documentar e apresentar qualquer necessidade concreta de exceção antes de adotá-la.
- Não instalar dependências especulativas. Consultar `docs/guias/dependencias.md` e confirmar compatibilidade na inicialização.
- Criar Design Brief antes da implementação visual. Não inventar marca ou nicho.
- Não afirmar que a aplicação executa, que foi testada ou que atingiu metas Lighthouse sem verificação real.
