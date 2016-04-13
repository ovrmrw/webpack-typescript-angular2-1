module.exports = {
  entry: ['babel-polyfill', './main.ts'], // async/await needs babel-polyfill
  output: {
    filename: 'bundle.js'
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
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader'
      }
    ]
  }
}