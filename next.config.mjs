/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },{
        protocol: 'https',
        hostname: 'image.theinfluencer.vn'
      },{
        protocol: 'https',
        hostname: 'i.ytimg.com'
      },

    ],
  },
};

export default nextConfig;
