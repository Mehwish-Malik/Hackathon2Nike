/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '//template-03-api.vercel.app/api/products/**', // Matches all image paths from Sanity
          },
        ],
      },
    }

export default nextConfig;
