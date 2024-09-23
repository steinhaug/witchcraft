const path = require('path');

module.exports = {
  entry: {
    background: './chrome-extension/background.js',
    contentScript: './chrome-extension/content-script.js',
    popup: './chrome-extension/popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  mode: 'production'
};
