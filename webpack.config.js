const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const pkg = require('./package.json');
const path = require('path');
const moduleName = pkg.moduleName;
const mode = (process.argv.length && process.argv[process.argv.length - 1]) || 'development';
const files = glob.sync('./src/**/*.js').reduce((entries, entry) => Object.assign(entries, {[entry.replace('./src/', '').replace('.js', '')]: entry}), {})

module.exports = {
  mode: mode,
  entry: files,
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    library: moduleName,
    publicPath: '/dist/',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
  ],
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    rules : [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              fallback: "file-loader",
              name: "[name][md5:hash].[ext]",
              outputPath: 'assets/',
              publicPath: '/assets/'
            }
          }
        ]
      },
      {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : [
            'css-loader'
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        include: path.resolve(__dirname, "src"),
        // exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(pdf|doc|zip)$/,
        use: ["file-loader"],
      }]
    },
    resolve: {
      alias: {
        'load-awesome-relative': path.resolve(__dirname, './node_modules/load-awesome-relative'),
        'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'assets': path.resolve(__dirname, 'assets')
      }
    },
    externals: [
      // Don't bundle react or react-dom
      'load-awesome-relative',
      'prop-types',
      'react',
      'react-dom'
    ]
  };
