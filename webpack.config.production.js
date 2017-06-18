/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  externals: {
    'component-playground': 'var null',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false,
      }
    }),
    new HtmlWebpackPlugin({
      template: './presentation/index.ejs',
      filename: 'index.html',
      hash: true,
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
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader?silent'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?name=[name].[ext]'
    }]
  }
};
