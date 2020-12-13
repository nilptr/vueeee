const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    plugins: [
        // dev hot reload
        new webpack.HotModuleReplacementPlugin(),

        // https://www.npmjs.com/package/friendly-errors-webpack-plugin
        new FriendlyErrorsPlugin(),

        // webpack v1 NoErrorsPlugin
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        // need webpack.HotModuleReplacementPlugin
        hot: true,

        overlay: {
            warnings: true,
            errors: true,
        },

        historyApiFallback: true,
        noInfo: true,

        host: '0.0.0.0',
        disableHostCheck: true,

        port: 4040,

        proxy: {},
    },
    devtool: 'cheap-source-map',
    performance: {
        hints: false,
    },
});
