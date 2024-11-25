const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env) {
    const devMode = env !== 'prod';

    return {
        entry: {
            'polyfills': './polyfills.ts',
            'vendor': './vendor.ts',
            'app': './src/main.ts',
        },

        resolve: {
            extensions: ['.js', '.ts']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: { configFileName: './tsconfig.json' }
                        }, 'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: {
                                minimize: true,
                                caseSensitive: true,
                                removeAttributeQuotes: false
                            }
                        }
                    ]
                },
                {
                    test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
                    parser: { system: true }
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function(){
                                    return [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|bmp|gif|jpe?g|png)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[ext]'
                    }
                },
                {
                    test: /\.ico$/,
                    use: "file-loader?name=[name].[ext]"
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",   // Input FileName
                filename: "./index.html"    // Output FileName
            }),
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core/,
                path.resolve(__dirname)
            ),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? 'static/css/[name].css' : 'static/css/[name].[hash].css',
                chunkFilename: devMode ? 'static/css/[name].chunk.css' : 'static/css/[name].[hash].chunk.css'
            })
        ],

        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    };
}