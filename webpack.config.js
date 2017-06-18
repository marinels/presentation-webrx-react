/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  externals: {
    'component-playground': 'var null',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './presentation/index.ejs',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: [ '.ts', '.tsx', '.webpack.js', '.web.js', '.js' ],
  },
  module: {
    loaders: [{
      test: /\.md$/,
      loader: 'raw-loader'
    }, {
      test: /\.tsx?$/,
      loader: [ 'react-hot-loader', 'awesome-typescript-loader' ],
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?sourceMap',
    }, {
      test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?name=[name].[ext]&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?name=[name].[ext]&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?name=[name].[ext]&mimetype=image/svg+xml'
    }, {
      test: /\.png$/,
      loader: 'url-loader?name=[name].[ext]&mimetype=image/png',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.gif$/,
      loader: 'url-loader?name=[name].[ext]&mimetype=image/gif',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?name=[name].[ext]&mimetype=image/jpg',
      include: path.join(__dirname, 'assets')
    }]
  }
};
