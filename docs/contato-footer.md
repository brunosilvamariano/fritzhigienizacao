# Contato e rodapé — Design Brief

Referência aprovada: contato em cobre sobre rodapé carvão, revelado durante a rolagem, com marca grande na base. CTA de WhatsApp contextual e número real fornecido pelo usuário. Sem formulário, endereços fictícios ou redes não informadas.

## Estrutura

Novos: src/sections/home/contact/contact.tsx, contact.content.ts e contact.css.
Novo: src/components/layout/footer/footer.css.
Atualizados: footer.tsx, src/app/page.tsx, src/styles/globals.css, src/config/contact.ts.

Main opaco em camada superior; footer sticky bottom em telas com altura suficiente. Sem JavaScript para scroll. Fallback de fluxo normal em telas baixas, redução de movimento e foco no rodapé, para não esconder links. Links e disclosure de projeto conceitual sempre presentes.

Revelação adaptativa: FooterReveal mede rodapé e header com ResizeObserver, atualizando somente em mudanças de tamanho. O deslocamento inferior negativo permite percorrer rodapés maiores que a tela; rodapés menores ficam presos à base. Sem interceptar scroll. Foco dentro do rodapé e movimento reduzido usam fluxo normal para manter os links acessíveis. Sem JavaScript, o rodapé permanece no fluxo.
