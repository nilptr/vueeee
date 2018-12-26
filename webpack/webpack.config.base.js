const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const {
    NODE_ENV,
    DEPLOY_ENV,
} = process.env;
const devMode = NODE_ENV !== 'production';

module.exports = {
    mode: 'none',
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].js',
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            oneOf: [{
                resourceQuery: /module/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            // localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
                ],
            }, {
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            }],
        }, {
            test: /\.scss$/,
            oneOf: [{
                resourceQuery: /module/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            // localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            }, {
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }],
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            // svg 字体文件不应放到 img 目录
            exclude: /fonts?/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name]_[hash].[ext]',
                },
            }],
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(#\S*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name]_[hash].[ext]',
                },
            }],
        }],
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js',
            $src: path.resolve(__dirname, '../src'),
            $lib: path.resolve(__dirname, '../src/lib'),
            $components: path.resolve(__dirname, '../src/components'),
        },
    },
    plugins: [
        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name]-[hash].css',
            chunkFilename: devMode ? 'css/[name].chunk.[id].css' : 'css/[name].chunk.[id]-[hash].css',
        }),

        // html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body',
            chunks: ['main'],
            // options
            NODE_ENV,
            DEPLOY_ENV,
        }),
    ],
    // SplitChunksPlugin config
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
    },
    // stats output
    stats: {
        source: false,
    },
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        Buffer: false,
        // axios/lib/defaults use `process`
        process: false,
        // vue use setImmediate
        setImmediate: false,
    },
};
