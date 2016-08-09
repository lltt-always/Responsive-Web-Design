var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/
      },{
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },{
        test: /\.scss$/,
        loaders: ['style-loader', 'raw-loader', 'sass-loader']
      }
    ]
  }
}

/*include: path.resolve(__dirname, './node_modules/compass-mixins/lib')*/