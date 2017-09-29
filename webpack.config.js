var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {
        loader: 'eslint-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/,
        enforce: 'pre'
      },
      {
        loaders: ['react-hot-loader', 'babel-loader'],
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader!autoprefixer-loader' 
      },
      { 
        test: /\.less$/, 
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' 
      }

    ]
  }
}