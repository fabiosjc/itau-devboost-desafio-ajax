const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'sass-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
};
