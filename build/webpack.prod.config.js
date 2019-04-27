const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
        }),
        // new BundleAnalyzerPlugin(),
    ],
    stats: {
        all: undefined,
        children: false, // 不添加 children 信息
        colors: true,
        assetsSort: 'chunks',
        warningsFilter: '[mini-css-extract-plugin]',
    },
});
