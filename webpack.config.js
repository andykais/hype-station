const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanTerminalWebpackPlugin = require('clean-terminal-webpack-plugin')

module.exports = (env, { mode }) => (console.log({ mode }),{
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  entry: ['react-hot-loader/patch', './src'],
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
        test: /\.js/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack']
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new CleanTerminalWebpackPlugin()
  ]
})
