const webpack = require("webpack");

module.exports = [
  {
    entry: ['./sample/main.ts'],
    output: {
      filename: './sample/bundle.js'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin() // minify plugin
    ],
    module: {
      loaders: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /typings/, /src-server/],
          loader: 'babel-loader!ts-loader' // first ts-loader(with tsconfig.json), second babel-loader(with .babelrc)        
        }
      ]
    }
  }, {
    entry: ['./src-client/boot.ts'],
    output: {
      filename: './src-client/bundle.js'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin() // minify plugin
    ],
    module: {
      loaders: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /typings/, /src-server/],
          loader: 'babel-loader!ts-loader' // first ts-loader(with tsconfig.json), second babel-loader(with .babelrc)        
        }
      ]
    }
  }, {
    entry: ['./app/main.ts'],
    output: {
      filename: './app/bundle.js'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin() // minify plugin
    ],
    module: {
      loaders: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /typings/, /src-server/],
          loader: 'babel-loader!ts-loader' // first ts-loader(with tsconfig.json), second babel-loader(with .babelrc)        
        }
      ]
    }
  }
]