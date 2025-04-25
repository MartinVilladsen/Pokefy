import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['pokeapi.co', 'raw.githubusercontent.com'],
  },
  experimental: {
    useCache: true
  }
};

export default nextConfig;
