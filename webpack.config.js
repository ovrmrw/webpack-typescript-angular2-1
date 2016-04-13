module.exports = {
  entry: ['babel-polyfill', './src-client/boot.ts'], // async/await needs babel-polyfill
  output: {
    filename: './src-client/bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  plugins: [

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