/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // {
      //   source: "/:path*",
      //   destination: "http://15.165.250.72/:path*",
      // },
    ];
  },
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
  // async headers() {
  //   return [
  //     {
  //       source: "/usports/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/usports/:path*",
  //       destination: "http://15.165.250.72/:path*",
  //     },
  //   ];
  // },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/image/:path*",
  //       destination: "https://onsuho-bucket.s3.ap-northeast-2.amazonaws.com/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
