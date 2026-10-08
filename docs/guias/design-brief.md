# Traço — estudo conceitual

Organização híbrida autorizada: usar classes Tailwind com prefixo `tw:` para propriedades simples de layout, alinhamento, dimensões e espaçamentos fixos. Manter CSS por seção para composição fluida (clamp/calc), tipografia editorial, estados, seletores contextuais e efeitos de rolagem. Expor os tokens existentes ao tema Tailwind, sem duplicar cores. Comparar estilos calculados antes/depois e revisar largura/altura de telas variadas. Preservar funcionamento, conteúdo, navegação e animações ao corrigir problemas de responsividade.

Ambientes para viver: manter a sobreposição também em telas menores, com um respiro de rolagem entre os painéis (160–260 px conforme a altura visível). Painéis altos rolam até mostrar a parte inferior antes de fixar; só depois desse respiro o próximo ambiente começa a cobrir o anterior. Medir novamente quando conteúdo, menu ou viewport mudarem. No celular, reservar espaço abaixo do CTA para o WhatsApp flutuante. Manter leitura normal com movimento reduzido e sem JavaScript. Não reduzir ou ocultar descrições para fazer o botão caber.

Escala mais compacta aprovada: reduzir títulos da coleção e dos detalhes; limitar galerias a 1280 px e capa a 1120 px. Fotos de uso e detalhe em formato horizontal, com proporção 4:3 no celular. Recortes móveis dos projetos serão refeitos a partir dos originais para preservar mais contexto. Ajustar espaços verticais e tamanhos responsivos das imagens somente nas páginas de projetos.

Refinamento de clareza aprovado: submenu Ambientes somente na Home; Projetos identifica a coleção em todas as páginas. Categorias são os títulos dos cards, nomes dos estudos ficam em segundo plano. Fotos horizontais no desktop, retrato no celular, desnível discreto entre colunas. Detalhes mantêm apresentação, fotos e contato; próximo projeto vira navegação compacta, sem bloco promocional separado. Sem novas pastas, dependências ou alterações de rotas.

Página Projetos aprovada: coleção editorial de seis ambientes com páginas individuais, capas e três vistas de cada estudo. Galeria assimétrica, recortes responsivos WebP locais, transição compartilhada, contato e footer. Conteúdo identificado como estudo conceitual, sem dados de obras realizadas. Brief e estrutura em ../secoes/projetos.md.

Marca fictícia autorizada pelo usuário para portfólio de web design. Segmento: móveis planejados.
Direção: editorial arquitetônica, composição assimétrica, madeira natural, linhas técnicas.
Paleta vigente: marfim #F5F1EA predominante, azul-ardósia #27323A, bege quente #DCC5B7 e marrom terroso #897061. Branco #FFFFFF como apoio no FAQ. Fonte: Plus Jakarta Sans variável local.
Referência visual: segunda prancha aprovada para implementação exploratória.
Escopo: header compartilhado, submenu Ambientes, menu mobile e Home editorial.
Movimento: revelações discretas com Framer Motion; respeitar prefers-reduced-motion.
As imagens são estudos gerados por IA, não fotografias de trabalhos de uma empresa real.
Não há formulário de captação, número de telefone ou promessa comercial fictícia.

Revisão do rodapé: Instagram da Traço junto aos canais de contato, destino fornecido pelo usuário mantido em contact.ts. Crédito CREATED BY/VBG separado. Header com Contato e acesso à visão geral dos ambientes; menu compacto abaixo de 1200px.

Menu mobile: painel carvão com bordas de respiro, títulos editoriais em marfim, divisórias finas e CTA areia. Cabeçalho e contato persistem; somente a navegação interna rola. Submenu de ambientes em duas colunas com revelação suave. Desktop preservado.

Ambientes permanece na Home. O submenu usa acordeões com uma dúvida prática por ambiente, resposta curta, link para a seção e WhatsApp contextual. Estilos claros no desktop e carvão no mobile; somente um item aberto por menu.

Teste Serviços → Processo: em desktop com altura disponível, as seções ocupam o mesmo plano. O scroll vertical controla a entrada do Processo pela margem esquerda, cobrindo Serviços; ao subir, o movimento se inverte. Mobile, telas baixas e movimento reduzido preservam o fluxo vertical. Links internos usam marcadores no fluxo para chegar ao painel correto, e o foco de teclado revela o painel correspondente.

Simplificação dos CTAs: o bloco de materiais mantém apenas título e texto; no rodapé, WhatsApp concentra a ação de contato, sem repetir o telefone abaixo. Instagram recebe 20px de respiro acima.

Página Sobre (/sobre): adaptar a abertura da Home One de Archiesta à paleta marfim, carvão e cobre e à Plus Jakarta Sans existente. No desktop, texto à esquerda sai horizontalmente enquanto a imagem expande; apresentação breve sobre a imagem e composição final de três estudos visuais sobrepostos, com texto à direita e palavra NOSSO TRAÇO na base. Encerrar com o footer compartilhado. Mobile e movimento reduzido mantêm leitura vertical. Imagens geradas autorizadas pelo usuário, identificadas como estudos, em WebP com recortes desktop/tablet/mobile. Não inventar história, equipe ou projetos realizados.

Transição entre Home e Sobre: cortina marfim com marca e traçado em cobre, cobrindo a troca de rota antes de revelar a página. Navegação interna pelo App Router, preparação do destino e das âncoras sob a cortina. Links dentro da mesma página mantêm scroll suave. Movimento reduzido omite a cortina animada. Sem spinner genérico nem bloqueio prolongado.

Revisão aprovada — FAQ e paleta: FAQ independente depois do Estúdio e antes do
Contato, com as cinco perguntas e respostas já existentes sobre ambientes.
Título e introdução na coluna esquerda acompanham o scroll apenas dentro da
seção em desktop; perguntas à direita, todas fechadas e uma aberta por vez.
Mobile e telas baixas usam fluxo normal. Ambientes volta a links diretos.
A Home e Sobre usam a nova paleta: marrom nas aberturas, branco nas áreas de
leitura, bege nos blocos de contraste, azul-ardósia no footer e fundos escuros.
Textos pequenos sobre marrom usam branco para contraste. Cores oficiais dos
ícones de plataformas permanecem. As descrições anteriores registram o histórico.

Refinamento aprovado: marfim predominante nas áreas de leitura, header e
aberturas da Home e Sobre. Azul-ardósia nos textos, CTAs principais e footer;
bege no Processo, Contato e blocos de apoio. Marrom reservado a traçados e
detalhes, sem grandes fundos. FAQ permanece branco. Textos pequenos sobre
marfim usam azul-ardósia, pois o marrom original não oferece contraste 4,5:1
nesse fundo. Preservar tipografia, imagens e comportamento das animações.

Ajustes aprovados: amostra de material escura; final de Sobre bege separado do footer. Legendas descritivas dos materiais, sem aviso de geração na interface. Frase inicial da imagem em uma linha no desktop. Ícone Ambientes centralizado sem sublinhado; contato sem telefone repetido; voltar ao início circular com seta e nome acessível.

Abertura de Ambientes aprovada: fundo azul-ardósia #27323A apenas no bloco
da mensagem. Título revelado em marfim #F5F1EA, legenda e seta claras;
palavras ainda não reveladas em tom suave legível. Galeria preserva fundo
marfim e textos escuros. Movimento reduzido exibe o título inteiro em marfim.

Entrada inicial aprovada: reutilizar a cortina com marca e símbolo da navegação
na primeira abertura e ao recarregar. Revelar após preparar fonte e imagem
principal, com espera limitada e sem atraso mínimo artificial. Menus na mesma
página preservam scroll suave; movimento reduzido omite a entrada. Sem JavaScript,
a cortina deve desaparecer automaticamente e deixar o conteúdo acessível.

Ajuste aprovado — Serviços e Processo: preservar a entrada horizontal do Processo também em telas de desktop baixas e tablets a partir de 768px. No celular, manter a sobreposição vertical dos serviços independentemente da altura da tela. Imagem do acordeão limitada pela altura útil da viewport, com respiro para descrição e controles; preservar estado, interação e preferência de movimento reduzido.

Ajuste aprovado — abertura de Ambientes: manter o texto preso e a revelação por palavras também em viewports com altura até 650px. Ajustar tipografia, espaçamento e altura mínima pela altura útil. Somente a preferência de movimento reduzido exibe a mensagem inteira sem animação. Galeria e sobreposições permanecem.

Refinamento aprovado — fim do Processo: liberar a altura herdada de Serviços quando a entrada horizontal termina. Preservar o respiro normal abaixo do CTA e da legenda, sem prolongar o fundo bege por causa de uma seção já encoberta. Ao subir, Serviços volta a participar do palco para manter a reversão da animação.

Ajuste aprovado — texto sobre a imagem de Sobre: ampliar discretamente a tipografia da frase de apresentação, de clamp(25px, 2.6vw, 42px) para clamp(28px, 3vw, 48px), ampliando a largura de leitura proporcionalmente. Preservar contraste e animação.

Revisão solicitada — frase sobre a imagem de Sobre: o primeiro aumento ficou sutil. Ampliar para clamp(36px, 4vw, 64px), com largura de leitura até 1200px, mantendo as duas frases equilibradas e a animação existente.

Navegação aprovada: substituir O processo por Como funciona, Estúdio por Nosso olhar e Dúvidas por Perguntas frequentes. Aplicar a configuração compartilhada no header, menu mobile e rodapé; preservar os destinos das âncoras e a rolagem suave.
