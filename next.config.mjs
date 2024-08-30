/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "image.theinfluencer.vn",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "thisis-images.spotifycdn.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },{
        protocol: "https",
        hostname: "image-cdn-ak.spotifycdn.com",
      },{
        protocol: "https",
        hostname: "mosaic.scdn.co",
      },{
        protocol: "https",
        hostname: "i2o.scdn.co",
      },
    ],
  },
};

export default nextConfig;
