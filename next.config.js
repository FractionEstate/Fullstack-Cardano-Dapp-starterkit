// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    // Custom webpack configuration
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
  },
  experimental: {
    turbo: {
      rules: { // Ensure rules are defined as an object only
        "babel-rule": { // Unique key for each rule
          test: /\.js$/,
          use: "babel-loader"
        },
        "css-rule": {
          test: /\.css$/,
          use: "css-loader"
        },
        "sass-rule": {
          test: /\.s[ac]ss$/i,
          use: ["sass-loader"]
        }
        // ...add other rules as needed...
      },
      root: "/workspaces/Fullstack-Cardano-Dapp-starterkit/cardano-dapp"
    }
  }
};