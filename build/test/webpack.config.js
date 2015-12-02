var webpack = require('webpack');
var config = require('../config');
var parse = JSON.stringify; // shortcu

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // @todo
          // add rewire
          // https://github.com/speedskater/babel-plugin-rewire/issues/71
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6']
  },
  plugins: [
    new webpack.DefinePlugin({
      _API_: parse(config._API_),
      _ROOT_URI_: parse(config._ROOT_URI_),
      _ENV_: parse(config._ENV_),
      _DEV_: parse(config._DEV_),
      _PRODUCTION_: parse(config._PRODUCTION_),
      _CDN_: parse(config._CDN_),
      _IMG_: parse(config._IMG_),
      // Server-side rendering option is explicitly set to false.
      // This is set only to true for the server.
      _SSR_: false
    })
  ]
};
