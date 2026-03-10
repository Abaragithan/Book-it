/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:'sgp.cloud.appwrite.io',
        pathname:'**',
      }
    ]
  }
};

export default nextConfig;
