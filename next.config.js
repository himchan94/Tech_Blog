/** @type {import('next').NextConfig} */

const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "user-images.githubusercontent.com",
      "drive.google.com",
    ],
    // loader: "akamai",
    // path: "",
  },
  // basePath: "/Tech_Blog",
  // assetPrefix: "/Tech_Blog",
};

module.exports = withBundleAnalyzer(nextConfig);
