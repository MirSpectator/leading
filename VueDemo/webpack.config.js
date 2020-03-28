const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("npm ");
module.exports = {
	entry: {
		app: './src/main.js',
		vendor: ['vue']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
		
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'img/[name]_[hash:7].[ext]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true, // 任意的 404 响应都替代为 index.html
		hot: true, // 启用 webpack 的模块热替换特性
		inline: true // 启用内联模式
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ExtractTextPlugin("styles.css"),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
}
