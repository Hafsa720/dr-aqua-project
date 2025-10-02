/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Compress responses
  compress: true,

  // Modern JavaScript delivery
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },

  // URL redirects from legacy project URLs to new ones
  async redirects() {
    return [
      {
        source: '/projects/financial-dashboard',
        destination: '/projects/finflow',
        permanent: true,
      },
      {
        source: '/projects/ecommerce-platform',
        destination: '/projects/shopflow',
        permanent: true,
      },
      {
        source: '/projects/healthcare-system',
        destination: '/projects/medconnect',
        permanent: true,
      },
      {
        source: '/projects/logistics-platform',
        destination: '/projects/logistics-optimizer',
        permanent: true,
      },
      {
        source: '/projects/education-platform',
        destination: '/projects/edutech-platform',
        permanent: true,
      },
      {
        source: '/projects/mobile-fitness-app',
        destination: '/projects/shopflow', // Or create a new case study
        permanent: true,
      },
    ];
  },

  // Domain whitelist for external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
  },

  // Turbopack configuration
  turbopack: {
    rules: {
      '*.svg': [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            titleProp: true,
          },
        },
      ],
    },
  },
};

module.exports = nextConfig;
