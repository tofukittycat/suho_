/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make Konva & react-konva work

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onsuho-bucket.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
