# SEO, compartilhamento e anúncios

## Arquivos

```text
.env.local                    # Configuração local, não versionada
src/
  app/
    layout.tsx                 # Integração global
    robots.ts                  # /robots.txt
    sitemap.ts                 # /sitemap.xml
  assets/images/shared/social/traco-compartilhamento.jpg # Arte fornecida, 1200 × 630
  config/
    site.ts                    # Nome, URL, descrição e indexação
    metadata.ts                # Canonical, Open Graph, Twitter e verificações
    tracking.ts                # IDs e habilitação
  components/
    analytics/
      consent.tsx              # Escolhas e botão de revisão no rodapé
      consent.css
      tracking-runtime.ts      # SDKs e eventos condicionados à autorização
    ui/whatsapp-link.tsx        # Contexto de cada CTA
    layout/footer/footer.tsx   # Acesso às preferências
tests/unit/tracking.test.cjs    # Verificações locais, sem enviar eventos reais
```

## Estado atual

URL oficial informada: https://tracomoveisplanejados.vercel.app.
O site continua conceitual, com `noindex, follow`. Isso é intencional; imagem social e anúncios não exigem indexação orgânica. Não foram adicionadas avaliações, endereço comercial, credenciais ou dados estruturados de uma empresa inexistente.

Metadados são renderizados pelo servidor. A imagem de compartilhamento é o JPEG fornecido pelo usuário, em 1200 × 630, mantido sem alterações em `src/assets/images/shared/social/traco-compartilhamento.jpg`. É importado como módulo nos metadados e servido pelo próprio site com nome versionado pelo build. Open Graph e Twitter usam o mesmo arquivo. A página usa Plus Jakarta Sans local.

`robots.txt` permite leitura, inclusive do noindex e dos metadados sociais. O sitemap fica vazio enquanto a indexação estiver desativada. Quando ativada, lista apenas a Home: âncoras não são páginas independentes. A página antiga de cozinhas não entra no sitemap.

## Publicação na Vercel

1. Publicar o código atualizado no repositório conectado à Vercel, usando a integração de Next.js. Não usar exportação estática simples para essa aplicação.
2. Configurar as variáveis documentadas na seção Configuração do README nas variáveis de ambiente do site, disponíveis no build. Localmente, usar `.env.local`, ignorado pelo Git. Os IDs públicos não são senhas; tokens privados nunca devem receber o prefixo `NEXT_PUBLIC_`.
3. Manter `SITE_URL` na origem principal HTTPS, sem parâmetros ou caminhos. Alterar ao conectar domínio próprio e republicar.
4. Para a empresa real: revisar título/descrição em `src/config/site.ts`, substituir dados conceituais e definir `SITE_INDEXABLE=true` quando a indexação for aprovada.
5. Preencher `GOOGLE_SITE_VERIFICATION` e `META_DOMAIN_VERIFICATION` somente com os códigos das respectivas contas, se usados para verificar o domínio.
6. Cada alteração nas variáveis exige novo build/deploy. Configurar valores adequados separadamente para produção e previews; manter tracking desligado nos previews.

## Compartilhamento

Após o deploy, testar o URL público no Sharing Debugger do Facebook e solicitar nova leitura. WhatsApp, LinkedIn e outros aplicativos mantêm cache próprio; uma imagem antiga pode continuar aparecendo temporariamente. Localhost não é acessível pelos robôs de compartilhamento.

Conferir título, descrição, `og:url`, `og:image` absoluto, tamanho e imagem JPEG acessível sem login. O X usa `summary_large_image` com a mesma arte. Não há promessa de exibição idêntica em todos os aplicativos.

## Ativar medição

Pendências reais: IDs das contas, label da conversão do Google Ads e política de privacidade publicada e aprovada para o cliente.

- `NEXT_PUBLIC_GA4_ID`: identificador da propriedade GA4.
- `NEXT_PUBLIC_GOOGLE_ADS_ID`: identificador da tag do Google Ads.
- `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL`: label da ação de conversão configurada para clique de contato.
- `NEXT_PUBLIC_META_PIXEL_ID`: ID do Pixel/dataset do cliente.
- `NEXT_PUBLIC_PRIVACY_URL`: URL HTTPS da política publicada. Obrigatória quando a medição está ativa.
- `NEXT_PUBLIC_TRACKING_ENABLED=true`: habilita o sistema de escolhas quando há IDs configurados.

Não preencher com identificadores de exemplo. Sem habilitação e IDs, não aparecem banner ou preferências e nenhum SDK é carregado. Não instalar também as mesmas tags no painel da hospedagem, outro plugin ou GTM: isso duplicaria os eventos.

## Consentimento e exceção aos recursos locais

Esta integração usa o modo básico: nenhum script de Google/Meta é baixado antes da escolha positiva da categoria correspondente. Estatísticas e publicidade são separadas; ambas começam desmarcadas. Há recusa, escolha granular e aceitação. A preferência é armazenada por até 180 dias no navegador, com revisão pelo rodapé. Alterar uma decisão salva recarrega a página para remover os SDKs já executados; o novo carregamento só ativa categorias permitidas. Cookies previamente criados pelos fornecedores não são todos apagados pelo site. Se o armazenamento estiver bloqueado, a escolha vale somente enquanto a página estiver aberta.

Exceção necessária à regra de recursos locais: `www.googletagmanager.com/gtag/js` e `connect.facebook.net/en_US/fbevents.js`, seguidos dos endpoints dos fornecedores, somente após consentimento. Não há CDN de imagens, fontes ou UI. Não há pixel `noscript` que contorne a escolha. O Google recebe os estados `analytics_storage`, `ad_storage`, `ad_user_data` e `ad_personalization`.

O texto da política e a adequação jurídica dependem do responsável real pelo site. Esta implementação não substitui essa revisão.

## Eventos e atribuição

| Plataforma | Evento                        | Significado                                        |
| ---------- | ----------------------------- | -------------------------------------------------- |
| GA4        | page_view                     | Visita após autorização de estatísticas            |
| GA4        | whatsapp_click                | Clique em CTA; inclui contexto e seção             |
| Google Ads | conversion                    | Clique em CTA, somente com ID e label configurados |
| Meta       | PageView                      | Visita após autorização de publicidade             |
| Meta       | WhatsAppClick (personalizado) | Clique em CTA, inclui contexto e seção             |

Clique **não** comprova mensagem enviada, lead qualificado ou venda. Não enviamos valor de compra, receita, telefone ou texto do link WhatsApp como parâmetros personalizados. Não há Conversions API nem conversões offline, pois exigem backend/CRM e confirmação real de resultados.

Na Meta, criar uma conversão personalizada baseada em `WhatsAppClick` se esse for o objetivo da campanha. No Google Ads, configurar a ação como clique de contato e evitar contar duas vezes pelo evento nativo e pela importação do GA4. Usar contagem de um contato por interação com anúncio quando apropriado ao objetivo, validando na conta.

Usar UTMs consistentes nos links de campanha, antes da âncora da seção: `/?utm_source=instagram&utm_medium=paid_social&utm_campaign=cozinhas#cozinhas`. As tags autorizadas fazem a atribuição; o site não adiciona esses parâmetros à mensagem de WhatsApp nem mantém um segundo banco de atribuição. Não colocar dados pessoais em URLs, UTMs ou nomes de campanha, pois SDKs podem ler URLs/referrers.

## Verificação antes de investir em anúncios

Verificações locais: `npm run check`, `npm run test:tracking` e `npm run build`. Os testes de medição usam SDKs simulados, sem rede; a recepção nas contas precisa ser conferida após configurar os IDs reais.

- Validar consentimento: nenhuma requisição às plataformas antes de aceitar ou após recusar; testar escolhas independentes e revisão pelo rodapé.
- Conferir Google Tag Assistant/GA4 e Meta Test Events com IDs reais; confirmar um page view por carga e um evento por clique.
- Confirmar label, conta, domínio e destino de cada WhatsApp. Validar Instagram/Google reais do cliente antes de anunciar.
- Desativar medição automática de cliques de saída no GA4 caso ela envie a URL completa do WhatsApp; usar o evento contextual do site.
- Não tratar bloqueadores de anúncios como erro do site. Confirmar consentimento e recepção na conta em um navegador de teste apropriado.

Fontes técnicas: [Next.js Metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), [Google tag](https://developers.google.com/tag-platform/gtagjs/reference), [Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode), [Meta Pixel](https://developers.facebook.com/docs/meta-pixel/get-started/).
