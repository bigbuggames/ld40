const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('../package.json');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: [
    'webpack-hot-middleware/client'    
  ],
  devtool: 'cheap-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ 
      title: config.name,
      template: path.resolve(__dirname, '../assets/index.dev.html')
    })
  ],
});
