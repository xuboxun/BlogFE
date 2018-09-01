const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode)

if (process.env.NODE_ENV === 'production') {
    console.log('production')
} else if (process.env.NODE_ENV === 'development') {
    console.log('development')
} else if (process.env.NODE_ENV === 'none') {
    console.log('none')
} else {
    console.log('unknown')
}


module.exports = {
    mode: 'production',
    entry: {
        main: './src/main',
        vendors: './src/vendors'
    },
    output: {
        publicPath: '/', // 文件路径
        path: path.join(__dirname, '../dist'), // 打包路径
        filename: '[name].bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'blog',
            filename: 'index.html',
            template: './src/index.html',
            inject: true,
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                styles: {
                    name: 'styles',
                    test: /\.(css|scss)$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
            })
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.join(__dirname, '../src'),
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}