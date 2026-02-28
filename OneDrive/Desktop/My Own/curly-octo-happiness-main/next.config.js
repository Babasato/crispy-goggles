/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['resend'],
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/free-resources.html',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/free-resources',
        destination: '/resources',
        permanent: true,
      },
      {
        // This catches all the old PDF links in the /downloads/ folder
        source: '/downloads/:path*',
        destination: '/resources',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
