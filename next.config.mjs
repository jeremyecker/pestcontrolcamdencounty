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
      { source: '/termite-exterminator', destination: '/camden-county/termite-control/', permanent: true },
      { source: '/termite-exterminator/', destination: '/camden-county/termite-control/', permanent: true },
      { source: '/termite-treatment', destination: '/camden-county/termite-control/', permanent: true },
      { source: '/termite-treatment/', destination: '/camden-county/termite-control/', permanent: true },
      { source: '/spider-control', destination: '/services/', permanent: true },
      { source: '/spider-control/', destination: '/services/', permanent: true },
      { source: '/ant-control', destination: '/camden-county/ant-exterminator/', permanent: true },
      { source: '/ant-control/', destination: '/camden-county/ant-exterminator/', permanent: true },
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
    ];
  },
};
export default nextConfig;
