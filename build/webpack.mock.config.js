const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
// const mock = require('../mock/mock');


module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        proxy: {
            // '/api': 'http://localhost:3000/api'
            '/api': 'http://blogapi.test.xuboxun.site'
        },
        hot: true,
        inline: true,
        historyApiFallback: true,
        open: true,
        // before: mock,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
