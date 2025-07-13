import type { NextConfig } from "next";

const isProd : boolean = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    basePath: isProd ? "/portfolioWebsite" : "",
    assetPrefix: isProd ? '/portfolioWebsite/' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
