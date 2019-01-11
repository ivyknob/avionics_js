path = require('path')

module.exports =
  mode: 'development'
  entry:
    bundle: './src/base/index.js'
    demo: './src/demo/index.js'
    demoKeys: './src/demoKeys/index.js'
  output:
    path: path.resolve(__dirname, 'dist')
    filename: '[name].js',
  module:
    rules: [{
      test: /\.css$/
      use: ['style-loader', 'css-loader']
    },{
      test: /\.coffee$/
      use: ['coffee-loader']
    },{
      test: /\.html$/
      use: ['html-loader']
    },{
      test: /\.js$/
      exclude: /node_modules/
      use:
        loader: 'babel-loader'
        options:
          presets: ['@babel/preset-env']
    }]
  resolve:
    extensions: ['.js', '.coffee']
  devServer:
    contentBase: path.join(__dirname, 'dist')
  # закоментировал, иначе не работает coffeescript
  watchOptions: { ignored: /node_modules/ }
