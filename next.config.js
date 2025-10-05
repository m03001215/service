/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  async rewrites() {
    return [
      {
        source: '/favicon.svg',
        destination: '/assets/images/favicon.svg',
      },
    ]
  },
}

module.exports = nextConfig