const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "source-map",
    devServer: {
        static: './dist',
        hot: true,
    },
    module: {
        rules: [
        { test: /\.js$/, use: 'babel-loader'},
        { test: /\.css$/, use: 'css-loader' },
        { test: /\.ts$/, use: 'ts-loader' },
        { test: /\.html$/, use: 'html-loader' }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/static/template/index.html',
          inject: true,
          filename: 'index.html'
        }),
    ]
  };