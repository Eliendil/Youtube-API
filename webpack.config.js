const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rs = (f) =>  path.join(__dirname, f)
const devMode = process.env.WEBPACK_MODE.trim() === 'production'

module.exports = {
  context: __dirname,
  entry: './src/YouTubeAPI.js',
  output: {
    path: rs('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  ...(devMode
  // production mode
  ? {} 
  // dev mode
  : {
    devServer: {
    clientLogLevel: 'warning',
    hot: true,
    host: 'localhost', // can be overwritten by process.env.HOST
    port: process.env.PORT
  },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    ]
  }) 
};
