module.exports = require('./webpack.config.js')({
  isProduction: false,
  devtool: 'source-map',
  jsFileName: 'app.js',
  cssFileName: 'app.css',
  port: 3000,
});
