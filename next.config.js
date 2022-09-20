/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
    loader: "akamai",
    path: "",
  },
  basePath: "/Tech_Blog",
  // assetPrefix: "/Tech_Blog",
  webpack: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../../public/images": path.resolve(__dirname, "/images"),
    };

    return config;
  },
};

module.exports = nextConfig;
