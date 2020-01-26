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
        ...tw
      }
    }),

    new HtmlWebPackPlugin({
      template: 'index.pug',
      filename: 'index.en.html',
      favicon: './imgs/favicon.ico',
      i18n: {
        ...en
      }
    }),
    
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
