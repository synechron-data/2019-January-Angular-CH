const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;

module.exports = function (env) {
    const isEnvDevelopment = env === 'dev';
    const isEnvProduction = env === 'prod';

    const getStyleLoadersIncludingNodeModules = (includeNodeModules, cssOptions, preProcessor) => {
        const loaders = [
            includeNodeModules && isEnvDevelopment && require.resolve('style-loader'),
            includeNodeModules && isEnvProduction && {
                loader: MiniCssExtractPlugin.loader
            },
            !includeNodeModules && require.resolve("raw-loader"),
            includeNodeModules && {
                loader: require.resolve('css-loader'),
                options: cssOptions,
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: () => [
                        require('autoprefixer')
                    ]
                }
            },
        ].filter(Boolean);

        if (preProcessor) {
            loaders.push({
                loader: require.resolve(preProcessor)
            });
        }

        return loaders;
    };

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
                    test: cssRegex,
                    include: /node_modules/,
                    use: getStyleLoadersIncludingNodeModules(true, { importLoaders: 1 })
                },
                {
                    test: sassRegex,
                    include: /node_modules/,
                    use: getStyleLoadersIncludingNodeModules(true, { importLoaders: 2 }, 'sass-loader')
                },
                {
                    test: cssRegex,
                    exclude: /node_modules/,
                    use: getStyleLoadersIncludingNodeModules(false, { importLoaders: 1 })
                },
                {
                    test: sassRegex,
                    exclude: /node_modules/,
                    use: getStyleLoadersIncludingNodeModules(false, { importLoaders: 2 }, 'sass-loader')
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
            isEnvProduction && new MiniCssExtractPlugin({
                filename: 'static/css/[name].[hash].css',
                chunkFilename: 'static/css/[name].[hash].chunk.css',
            })
        ].filter(Boolean),

        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    };
}