var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  resolve: {
    root: path.join(__dirname, '/source')
  },
  entry: [
    'webpack-hot-middleware/client',
    './source/client/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'source')
    },
    {
      test: /\.(png|jpg|gif|GIF)$/,
      loader: 'file?name=assets/[name].[ext]'
    }]
  }
};
