var config = require('./webpack.config.js');

var entry = {
    'aws-amplify-core': './esm/index.js'
};
module.exports = Object.assign(config, { entry, mode: 'development' });