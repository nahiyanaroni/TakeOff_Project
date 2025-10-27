/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // allow this external image host
      },
      {
        protocol: "https",
        hostname: "dummyjson.com", // allow this external image host
      },
       {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};


export default nextConfig;
