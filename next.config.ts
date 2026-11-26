import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tmw",
  assetPrefix: "/tmw",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
