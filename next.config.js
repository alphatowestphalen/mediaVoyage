/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path');

module.exports = {
  // Other Next.js configurations...
  nextConfig,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf)$/,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
};
