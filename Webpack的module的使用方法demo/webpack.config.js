const path = require('path')
const glob = require('glob')
const htmlwebpackplugin = require('html-webpack-plugin')


var entryFiles = [];
var entryFiless = {};
var files = glob.sync(path.join(__dirname,'src')+'/**/*.js');
files.forEach(function(file,index){
	//获取每一个js文件的去掉后缀后的文件名字 
	var subkey = file.match(/src\/(\S*)\.js/)[1]
	//打包成一个js文件用这个
	entryFiles[index]=file
	 //一个js打包成一个对应的js用这个  同时需要把outPut的filename改为filename: '[name].js',
	entryFiless[subkey] = file
})
//动态打包html
var htmls = []
var html = glob.sync(path.join(__dirname,'src')+'/**/*.html');
html.forEach(function(file,index){
	var name = file.match(/src\/(\S*)\.html/)[1]
	var taget =  new htmlwebpackplugin({
		filename: path.join(__dirname, 'dist')+"/"+name+"\.html",
		template: path.join(__dirname, 'src')+"/"+name+"\.html",
		inject: true,
		hash: true ,
		chunks:[name]
	})
	htmls.push(taget);
})
console.log(htmls)
console.log(path.join(__dirname, 'dist')+"/\index.html")
module.exports = {
	entry: entryFiless,
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.(sc|c|sa)ss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}]
	},
	plugins: htmls,
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
