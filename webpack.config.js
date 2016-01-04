var webpack = require('webpack');
var path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  node_modules_dir: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  context: __dirname,
  entry: {
    javascript: PATHS.src + '/main.js',
    //vendor: PATHS.src + '/vendor.js', //not used currently, could be removed
    html: PATHS.src + '/index.html'
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
  },
  module: {
    preLoaders: [
      // ESLint preloader for linting
      {
      test: /\.(js|jsx)$/,
      loaders: ['eslint'],
      include: PATHS.src
    }],
    loaders: [
      // Babel for JS and JSX transpiling
      {
        test: /\.(js|jsx)$/,
        exclude: PATHS.node_modules_dir,
        loaders: ['babel-loader'],
      },
      // Path loaders to copy files to dist
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
        include: PATHS.src
      },
      // CSS and LESS loaders for styles
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      //image loader - will inline images less than 8kb
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8096'
      },
      // font loaders - mainly added for bootstrap fonts
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
}
