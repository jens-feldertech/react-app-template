
var path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
        {test: /\.(js)$/,use: 'babel-loader'},
        {test: /\.scss$/,use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]

};
