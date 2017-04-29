const path = require('path')
module.exports = {
  module: {
    loaders: [
      {
        test: /.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
        include: path.resolve(__dirname, '../')

      }
    ]
  }
}
