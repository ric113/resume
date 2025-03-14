const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const en = require('./lang/en');
const tw = require('./lang/zh-tw');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              self: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.pug',
      filename: 'index.html',
      favicon: './imgs/favicon.ico',
      i18n: {
        ...en
      },
      env: process.env.NODE_ENV
    }),

    new HtmlWebPackPlugin({
      template: 'index.pug',
      filename: 'index.tw.html',
      favicon: './imgs/favicon.ico',
      i18n: {
        ...tw
      },
      env: process.env.NODE_ENV
    }),
    
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
