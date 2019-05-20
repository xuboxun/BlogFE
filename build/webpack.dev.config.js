const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.[hash].js',
        chunkFilename: '[name].chunk.[hash].js',
    },
    devServer: {
        host: '0.0.0.0',
        port: 8888,
        proxy: {
            '/api': 'http://localhost:3000'
        },
        hot: true,
        inline: true,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
