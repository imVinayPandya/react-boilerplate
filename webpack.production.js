const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js/,
      cache: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
};