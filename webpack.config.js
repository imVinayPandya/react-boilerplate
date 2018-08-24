const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const developmentConfig = require('./webpack.development');
const productionConfig = require('./webpack.production');

const baseConfig = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     // 'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html'
    })
  ]
};

module.exports = (env, arg) => {
  if (!!arg.mode && arg.mode === 'production') {
    // console.log('PRODUCTION \n\n\n');
    return merge(productionConfig, baseConfig);
  } else {
    // console.log('DEVELOPMENT \n\n\n');
    return merge(developmentConfig, baseConfig);
  }
};