import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  // Static hosting serves pre-optimised WebP files directly.
  images: { unoptimized: true },
};
export default nextConfig;
