const { override, addWebpackExternals } = require('customize-cra');

const path = require("path");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    path: require.resolve("path-browserify"),
  };

  config.experiments = {
    ...config.experiments,
    asyncWebAssembly: true,
  };

  return config;
};