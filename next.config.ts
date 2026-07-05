import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  devIndicators: {
  },
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "run-agent-6a4a53e5e8efe11bff14dd10-mr7sloq5-preview.agent-sandbox-bj-a1-gw.trae.cn",
    "*.trae.cn",
    "*.agent-sandbox-bj-a1-gw.trae.cn",
  ],
  turbopack: {
    // 默认开启 Turbopack，添加空配置以消除与 webpack 配置共存时的警告
  },
  // Configure webpack to ignore the external folder
  webpack: (config: any) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules/**'],
    };
    return config;
  },
};

export default nextConfig;
