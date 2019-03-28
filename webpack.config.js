const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanTerminalWebpackPlugin = require('clean-terminal-webpack-plugin')

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: './src',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }), new CleanTerminalWebpackPlugin()]
}
