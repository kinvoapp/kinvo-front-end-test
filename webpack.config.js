const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack");
const ImageminGifsicle = require("imagemin-gifsicle");
const ImageminJpegtran = require("imagemin-jpegtran");
const ImageminOptipng = require("imagemin-optipng");
const ImageminSvgo = require("imagemin-svgo");
const path = require('path');

/**
 * Module config
 */
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({}),
                                require('cssnano')({ 
                                    discardComments: {
                                        removeAll: true
                                    } 
                                })
                            ],
                            minimize: true
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'css/fonts/[name].[ext]'
                }
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: this.mode === 'production'
    ? [ // production mode
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new Webpack.optimize.UglifyJsPlugin({ 
            compress: { 
                warnings: false 
            }
        }),
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendor' 
        }),
        new ImageminPlugin({
            bail: false,
            cache: true,
            imageminOptions: {
                plugins: [
                    ImageminGifsicle({
                        interlaced: true
                    }),
                    ImageminJpegtran({
                        progressive: true
                    }),
                    ImageminOptipng({
                        optimizationLevel: 5
                    }),
                    ImageminSvgo({
                        removeViewBox: true
                    })
                ]
            }
        })
    ]
    : [ // dev mode
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new HtmlWebpackPlugin(
            {
                template: './dist/index.html'
            }
        )
    ]
};
