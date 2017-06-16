/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './index.html',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: [ '.jsx', '.webpack.js', '.web.js', '.js' ],
  },
  module: {
    loaders: [{
      test: /\.md$/,
      loader: 'raw-loader'
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /index\.html$/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?name=[name].[ext]'
    }]
  }
};
