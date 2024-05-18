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
        ],
      },
};

export default nextConfig;
