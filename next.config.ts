import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ['/projetos/cozinha-encontro', '/projetos/higienizacao-sofas'],
      ['/projetos/cozinha-essencial', '/projetos/limpeza-tapetes'],
      ['/projetos/quarto-refugio', '/projetos/higienizacao-colchoes'],
      ['/projetos/sala-convivio', '/projetos/higienizacao-poltronas'],
      [
        '/projetos/banheiro-equilibrio',
        '/projetos/impermeabilizacao-estofados',
      ],
      ['/projetos/office-concentracao', '/projetos/higienizacao-cadeiras'],
      ['/blog/conversa-com-a-fwa', '/blog/como-solicitar-orcamento'],
      ['/blog/excelencia-digital', '/blog/secagem-de-estofados'],
      ['/blog/site-do-mes', '/blog/higienizacao-ou-impermeabilizacao'],
      ['/blog/revolt-holographik', '/blog/cuidados-com-tapetes'],
    ].map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  poweredByHeader: false,
  experimental: { workerThreads: true, cpus: 2, useTypeScriptCli: false },
  images: { remotePatterns: [], qualities: [75, 85] },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
