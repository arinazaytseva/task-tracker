const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ваши кастомные настройки Webpack
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@components': path.resolve(__dirname, 'src/components'),
        '@globals': path.resolve(__dirname, 'src/globals'),
        '@ui': path.resolve(__dirname, 'src/ui'),
        '@redux': path.resolve(__dirname, 'src/redux'),
      };
      return webpackConfig;
    },
  },
  eslint: null,
};
