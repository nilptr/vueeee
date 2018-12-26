const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        publicPath: '/',
        filename: 'js/[name]-[chunkhash:12].js',
        chunkFilename: 'js/[name].chunk.[id]-[chunkhash:12].js',
    },
    plugins: [
        // hashed `module.id`
        new webpack.HashedModuleIdsPlugin(),

        // minify css
        new OptimizeCssAssetsPlugin(),
    ],
    devtool: 'source-map',
    performance: {
        hints: 'warning',
    },
});
