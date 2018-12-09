const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const localMock = require('../mock/mock');

console.log(process.env.NODE_ENV);
module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host: 'localhost',
        port: 9000,
        proxy: {
            '/api': 'http://xuboxun.site:4000'
        },
        hot: true,
        inline: true,
        historyApiFallback: true,
        open: true,
        before: process.env.NODE_ENV === 'mock:local' ? localMock : () => {},
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
