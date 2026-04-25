/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    return [
      // Service page aliases → canonical routes (were in code but not deployed)
      { source: '/termite-exterminator', destination: '/camden-county/termite-control/', permanent: true },
      { source: '/termite-exterminator/', destination: '/camden-county/termite-control/', permanent: true },
      { source: '/termite-treatment', destination: '/camden-county/termite-control/', permanent: true },
      { source: '/termite-treatment/', destination: '/camden-county/termite-control/', permanent: true },
      { source: '/spider-control', destination: '/services/', permanent: true },
      { source: '/spider-control/', destination: '/services/', permanent: true },
      { source: '/ant-control', destination: '/ant-exterminator/', permanent: true },
      { source: '/ant-control/', destination: '/ant-exterminator/', permanent: true },
      { source: '/commercial-pest-control', destination: '/commercial/', permanent: true },
      { source: '/commercial-pest-control/', destination: '/commercial/', permanent: true },
      { source: '/wasp-hornet-removal', destination: '/services/', permanent: true },
      { source: '/wasp-hornet-removal/', destination: '/services/', permanent: true },
      { source: '/rodent-control', destination: '/camden-county/rodent-exterminator/', permanent: true },
      { source: '/rodent-control/', destination: '/camden-county/rodent-exterminator/', permanent: true },
      { source: '/cockroach-control', destination: '/camden-county/cockroach-exterminator/', permanent: true },
      { source: '/cockroach-control/', destination: '/camden-county/cockroach-exterminator/', permanent: true },
      { source: '/bed-bug-removal', destination: '/camden-county/bed-bug-exterminator/', permanent: true },
      { source: '/bed-bug-removal/', destination: '/camden-county/bed-bug-exterminator/', permanent: true },
      { source: '/flea-tick-treatment', destination: '/services/', permanent: true },
      { source: '/flea-tick-treatment/', destination: '/services/', permanent: true },

      // Town-level mosquito sub-pages that were never built → parent mosquito page
      { source: '/camden-county/mosquito-control/:town', destination: '/mosquito-control/', permanent: true },
      { source: '/camden-county/mosquito-control/:town/', destination: '/mosquito-control/', permanent: true },

      // 4 towns in towns.json but missing from layer7-data → redirect to region until data is added
      { source: '/camden-county/audubon-park', destination: '/camden-county/', permanent: false },
      { source: '/camden-county/audubon-park/', destination: '/camden-county/', permanent: false },
      { source: '/camden-county/berlin-township', destination: '/camden-county/', permanent: false },
      { source: '/camden-county/berlin-township/', destination: '/camden-county/', permanent: false },
      { source: '/camden-county/chews-landing', destination: '/camden-county/', permanent: false },
      { source: '/camden-county/chews-landing/', destination: '/camden-county/', permanent: false },
      { source: '/camden-county/blackwood', destination: '/camden-county/', permanent: false },
      { source: '/camden-county/blackwood/', destination: '/camden-county/', permanent: false },
    ];
  },
};
export default nextConfig;
