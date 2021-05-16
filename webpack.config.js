const path = require('path');

module.exports = {
    mode: 'production',
    entry: '/scripts/script.js',
    output: {
        path: path.resolve(__dirname, '../src/scripts'),
        filename: 'bundle.js',
    },
    watch: true,
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }
        }]
    }
};