/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack5: true,
  webpack: (config, { isServer }) => {
    // https://www.npmjs.com/package/react-pdf
    // If you use Next.js, you may need to add the following to your next.config.js:
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    return config;
  },
  experimental: {
    serverActions: true,
  },
  
};

module.exports = nextConfig;
