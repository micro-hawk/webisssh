const path = require("path")
module.exports = {
  configureWebpack: {
    entry: path.resolve(__dirname, 'client/main.js'),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client'),
        '@image': path.resolve(__dirname, 'client/assets/image'),
        '@var': path.resolve(__dirname, 'client/assets/scss/vars.scss')
      }
    }
  }
}
