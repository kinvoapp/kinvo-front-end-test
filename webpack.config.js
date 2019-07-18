const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV || 'development'
const isDev = mode === 'development'

let SERVICE_URL = JSON.stringify('http://localhost:8080')

if (process.env.NODE_ENV === 'production') {
	SERVICE_URL = JSON.stringify('http://enderecoproducao.com.br')
}

module.exports = {
	devtool: 'source-map',

	entry: path.resolve(__dirname, 'src', 'index.jsx'),

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contentHash].bundle.js'
	},

	/*resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		]
	},

	devServer: {
		contentBase: path.join(__dirname, 'src'),
		historyApiFallback: true
	},*/

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(css|scss)$/,
				use: [
					isDev ? "style-loader" : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				loaders: ['file-loader']
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'template.html'),
			filename: 'index.html',
	        minify: {
		        removeAttributeQuotes: true,
		        collapseWhitespace: true,
		        removeComments: true
	        }
		}),
		new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
		new OptimizeCssAssetsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			SERVICE_URL
		})
	]
}