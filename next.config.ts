import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: { workerThreads: true, cpus: 2, useTypeScriptCli: false },
  images: { remotePatterns: [], qualities: [75, 85] },
};

export default nextConfig;
