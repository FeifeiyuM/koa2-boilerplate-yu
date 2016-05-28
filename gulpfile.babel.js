import gulp from 'gulp'
import bableRegister from 'babel-register'
import nodemon from 'gulp-nodemon'
import glob from 'glob'
import livereload from 'gulp-livereload'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'

import less from 'gulp-less'
import minifyCss from 'gulp-minify-css'
import LessPluginCleanCss from 'less-plugin-clean-css'
import LessPluginAutoPrefix from 'less-plugin-autoprefix'

import webpack from 'webpack'
import webpackConfig from './webpack.config.js'
import runSequence from 'gulp-run-sequence'

let isDevEnv = true  //是否为开发环境
 
let dir = {
	//配置路径时，尽量选择需要打包的路径，对已有的路径不要添加
	entry: [],  //普通打包路径	
	 //webpack打包路径,路径下必须包含以client.js or index.js 的客户端入口文件
	 //如果有服务端打包入口，命名为server.js
	webpackEntry: [], 

	output: './public',  //输出到静态文件所在路径
}

let outDirConfig = (file) => {
	let outDir = ''
	if(dir.output === '' || dir.output === null || dir.output === undefined) {
		/*if( /[a-zA-Z0-9_]+.js/i.test(file) ) {
			outDir = file.replace(/([a-zA-Z0-9_]+\.less)|([a-zA-Z0-9_]+\.js)/i, '') + 'dist/'
		} else {
			console.error('file is not xx.js | xx.less')
		}*/
		throw ('output dir need to configurated')
	} else {
		outDir = file.replace(/\.?\/[a-zA-Z0-9_]+/, dir.output)
		console.log('outDir: ' + outDir)
		outDir = outDir.replace(/([a-zA-Z0-9_]+\.less)|([a-zA-Z0-9_]+\.js)/i, '')
	}

	return outDir
}

let jsBuild = (entryFile, output, isdev) => {
	console.log('in jsBuild')
	if(isdev) {
		return gulp.src(entryFile)
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(output))
			.pipe(livereload())
	} else {
		return gulp.src(entryFile)
			.pipe(uglify())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(output))
			.pipe(livereload())
	}
}

//client side package of webpack
let webpackClient = (entryFile, outDir, isdev) => {

	let wpConfig = Object.create(webpackConfig.clientConfig)
	wpConfig.devtool = isdev ? 'cheap-module-eval-source-map' : null
	wpConfig.entry = entryFile
	wpConfig.output = {
		path: outDir, 
		filename: '[name].bundle.js',
		publicPath: '/static/'  //采用分片时需要“配置对”该路径
	}

	wpConfig.plugins = [  //插件配置
		new webpack.optimize.OccurenceOrderPlugin(),
	  	new webpack.HotModuleReplacementPlugin(),
	  	new webpack.NoErrorsPlugin(),
	  	new webpack.optimize.CommonsChunkPlugin('common/common.js'),
	  	new webpack.optimize.UglifyJsPlugin({
	      test: /(\.jsx|\.js)$/,
	      compress: {warnings: true }
	    })
	]

	if(!isdev) {
		wpConfig.plugins.unshift(  //插入到插件数组的第一位,否则无效
			new webpack.DefinePlugin({
				"process.env": { 
     				NODE_ENV: JSON.stringify("production") 
  				}
			})
		)
	}

	webpack(wpConfig, function(err, stats) {
		if(err) throw ('webpack ' + err.toString())
		console.log('[webpack]', stats.toString({
	  		colors: true,
	 		progress: true
		})) 
	})
}	

//server side package of webpack
let webpackServer = (entryFile, outDir) => {

	let wpConfig = Object.create(webpackConfig.serverConfig)

	wpConfig.entry = entryFile
	wpConfig.output = {
		path: outDir, 
		filename: '[name].bundle.js',
		publicPath: '/static/',
		libraryTarget: "commonjs2"
	}

	webpack(wpConfig, function(err, stats) {
		if(err) throw ('webpack ' + err.toString())
		console.log('[webpack]', stats.toString({
	  		colors: true,
	 		progress: true
		})) 
	})
}

let cleancss = new LessPluginCleanCss({ advanced: true })
let autoprefix = new LessPluginAutoPrefix({ 
	browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 
	'opera 12.1', 'ios 6', 'android 4']
})
let less2Css = (entryFile, outDir) => {
	console.log('in less2Css')

	return gulp.src(entryFile)
		.pipe(less({ plugins: [autoprefix, cleancss]}))
		.pipe(rename({ suffix: '.min'}))
		.pipe(gulp.dest(outDir))
		.pipe(livereload())
}

let htmlReload = (entryFile) => {
	return gulp.src(entryFile)
		.pipe(livereload())
}

//less to css
gulp.task('less2css', () => {
	let files = []
	//入口文件筛选
	if(dir.entry.length === 0 || dir.entry === null 
		|| dir.entry === undefined) {
		console.log ('[less2css]', 'entry path need to configurated ')
	} else {
		dir.entry.map((item, index) => {
			let file = glob.sync(item + '/**/*[^min].less')
			files = files.concat(file)
		})
	}
	console.log('less files: ' + files.toString())
	files.map((item, index) => {
		let outDir = outDirConfig(item)
		console.log('entry dir: ' + item + ' out dir: ' + outDir)
		less2Css(item, outDir)
	})
})

//gulp 打包
gulp.task('jsBuild', () => {
	let files = []
	//入口文件筛选
	if(dir.entry.length === 0 || dir.entry === null 
		|| dir.entry === undefined) {
		console.log ('[jsBuild]', 'entry path need to configurated ')
	} else {
		dir.entry.map((item, index) => {
			let file = glob.sync(item + '/**/*[^min].js')
			files = files.concat(file)
		})
	}
	console.log('js files: ' + files.toString())
	files.map((item, index) => {
		let outDir = outDirConfig(item)
		console.log('entry dir: ' + item + ' out dir: ' + outDir)
		jsBuild(item, outDir, false)
	})
})

//采用webpack 打包
gulp.task('jsWebpack', () => {
	let filesClient = [] 
	let filesServer = []
	//入口文件筛选
	if(dir.webpackEntry.length === 0 || dir.webpackEntry === null 
		|| dir.webpackEntry === undefined) {
		console.log ('[webpack]', 'entry path need to configurated ')
	} else { 
		dir.webpackEntry.map((item, index) => {

			let clientFile = glob.sync(item + '/client.js')
			if(clientFile.length === 0) {
				clientFile = glob.sync(item + '/index.js') 
				if(clientFile.length === 0) {
					 throw ('[webpack]', 'in ' + item + ' a index.js or client file is needed!')
				}
			}

			filesClient = filesClient.concat(clientFile)

			let serverFile = glob.sync(item + '/server.js')
			if(serverFile.length === 0)	{
				console.log('[webpack]', 'there is no server.js under this path')
			}	

			filesServer = filesServer.concat(serverFile)
			
		})
	}
	console.log('[webpack] client files: ', filesClient.toString())
	console.log('[webpack] server files: ', filesServer.toString())

	let entryClient = {} //入口文件装配
	filesClient.map(( item, index ) => { 
		 //第一个replace去掉文件后缀，第二个replace去掉第一个文件路径(/views)
		let filePath = item.replace(/\.js/, '').replace(/\.?\/[a-zA-Z0-9_]+/, '') 
		console.log('filePath: ' + filePath)
		entryClient[filePath] = item
	})

	let entryServer = {} //server side entry file

	filesServer.map((item, index) => {
		let filePath = item.replace(/\.js/, '').replace(/\.?\/[a-zA-Z0-9_]+/, '')
		entryServer[filePath] = item
	})

	webpackClient(entryClient, dir.output, isDevEnv )
	webpackServer(entryServer, dir.output)
})

gulp.task('htmlPage', () => {
	let files = []
	//入口文件筛选
	if(dir.entry.length === 0 || dir.entry === null 
		|| dir.entry === undefined) {
		console.log ('[htmlPage]', 'entry path need to configurated ')
	} else {
		dir.entry.map((item, index) => {
			let file = glob.sync(item + '/**/*[^min].js')
			files = files.concat(file)
		})
	}
	console.log('js files: ' + files.toString())
	files.map((item, index) => {
		console.log('entry dir: ' + item)
		htmlReload(item)
	})
})

gulp.task('nodemon', () => {
	nodemon({
		script: 'index.js',
		nodeArgs: ['--harmony']
	}).on('restart', function(){
		console.log('restart!')
	})
})

//监听任务
gulp.task('watch', () => {

	livereload.listen()
	gulp.watch(
		['./views/**/*\.less', './views/**/*\.js', './views/**/*\.html'], 
		{events: ['add', 'change', 'unlink']}, 
		function() { 
			console.log('file changed...')
			runSequence('jsBuild', 'jsWebpack', 'less2css', 'htmlPage')
		})
})

gulp.task('default', ['jsBuild', 'jsWebpack', 'less2css', 'htmlPage', 'watch', 'nodemon'])

gulp.task('build', ['jsBuild', 'jsWebpack', 'less2css', 'htmlPage'])