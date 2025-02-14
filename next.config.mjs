/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', 
        hostname: new URL(process.env.NEXT_PUBLIC_IMAGE).hostname, 
      },
    ],
  },
};

export default nextConfig;
