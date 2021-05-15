const path = require('path');

module.exports = {
    mode: 'production',
    entry: '/scripts/script.js',
    output: {
        path: path.resolve(__dirname, '../dist/scripts'),
        filename: 'bundle.js',
    },
    watch: true,
    module: {}
};