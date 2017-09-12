const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoPrefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
        ]
    }
};