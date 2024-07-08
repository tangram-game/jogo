const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './js/index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  }
}
