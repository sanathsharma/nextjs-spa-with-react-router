/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/admin/:any*",
        destination: "/admin"
      },
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  trailingSlash: true
};

module.exports = nextConfig;
