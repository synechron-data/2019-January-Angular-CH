const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const paths = require('./paths');

module.exports = function (env) {
    return webpackMerge(commonConfig(env), {
        mode: 'production',

        output: {
            path: paths.appBuildPath,
            publicPath: './',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },

        plugins: [
            new CleanWebpackPlugin(['dist'], { root: paths.appRootPath })
        ],

        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true,
                        },
                    },
                    parallel: true,
                    cache: true,
                    sourceMap: false,
                })
            ]
        }
    });
}