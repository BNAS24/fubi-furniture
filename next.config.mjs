/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'as0ig7gtennscv4j.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fubi-furniture-brandon-bradleys-projects.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
