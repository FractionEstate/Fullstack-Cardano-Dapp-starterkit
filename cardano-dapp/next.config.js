/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.ts$/,
          use: 'babel-loader',
        },
        {
          test: /\.tsx$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: 'css-loader',
        },
        {
          test: /\.scss$/,
          use: 'sass-loader',
        },
      ],
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent bundling fs on client side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };
    }
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  poweredByHeader: false
}

module.exports = nextConfig
