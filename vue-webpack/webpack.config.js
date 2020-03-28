const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname,'src/main.js'),
	output: {
		filename: 'main.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader','css-loader','postcss-loader'] },
			{ test: /\.vue$/, use: 'vue-loader' },
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.(eot|woff|woff2|svg|ttf|otf)$/, use: "file-loader" }
		]
	},
	plugins: [
			new htmlwebpackplugin({
				filename: path.join(__dirname, 'dist')+"/\index.html", //入口文件的地址
				template: path.join(__dirname, 'src')+"/\index.html",//输出文件地址
				inject: true,//js文件引入对的位置  可以body  也可以head  或者true默认在head下
				hash: true ,//hash值
			}),
			new vueLoaderPlugin(),
			  new webpack.ProvidePlugin({
			   $: "jquery",
			   jQuery: "jquery",
			   jquery: "jquery",
			   "window.jQuery": "jquery",
			   "window.$": "jquery",
			  })
		],
	devServer: {
		contentBase: './dist',
		hot: true,
		port: 8081, // 端口  
		open: true, // 是否打开浏览器
		clientLogLevel: 'warning', // 可能的值有 none, error, warning 或者 info（默认值)
		contentBase: path.join(__dirname, "dist"), // 告诉服务器从哪里提供内容， 默认情况下，将使用当前工作目录作为提供内容的目录
		overlay: { // 出现错误或者警告的时候，是否覆盖页面线上错误消息。
			warnings: true,
			errors: true
		},
		publicPath: '/', // 此路径下的打包文件可在浏览器中访问。
		proxy: { // 设置代理
			"/api": { // 访问api开头的请求，会跳转到  下面的target配置
				target: "http://192.168.0.102:8080",
				pathRewrite: {
					"^/api": "/mockjsdata/5/api"
				}
			}
		},
		quiet: true, // necessary for FriendlyErrorsPlugin. 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
		watchOptions: { // 监视文件相关的控制选项
			poll: true, // webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询. poll: true。当然 poll也可以设置成毫秒数，比如：  poll: 1000
			ignored: /node_modules/, // 忽略监控的文件夹，正则
			aggregateTimeout: 300 // 默认值，当第一个文件更改，会在重新构建前增加延迟
		},
		//https: true   配置https
	},
}