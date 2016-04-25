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
import runSequence from 'gulp-run-sequence'

let dir = {
	entry: './views',
	output: './public'
}

let outDirConfig = (file) => {
	let outDir = ''
	if(dir.output === '' || dir.output === null || dir.output === undefined) {
		if( /[a-zA-Z0-9_]+.js/i.test(file) ) {
			outDir = file.replace(/([a-zA-Z0-9_]+\.less)|([a-zA-Z0-9_]+\.js)/i, '') + 'dist/'
		} else {
			console.error('file is not xx.js | xx.less')
		}
	} else {
		var patt = RegExp(dir.entry, 'i')
		outDir = file.replace(patt, dir.output)
		outDir = outDir.replace(/([a-zA-Z0-9_]+\.less)|([a-zA-Z0-9_]+\.js)/i, '')
	}

	return outDir
}

let jsBuild = (entryFile, output, isdev) => {
	console.log('in jsBuild')
	let isuglify = ''
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

gulp.task('less2css', () => {
	let files = glob.sync(dir.entry + '/**/*[^min].less' )
	console.log('less files: ' + files.toString())
	files.map((item, index) => {
		let outDir = outDirConfig(item)
		console.log('entry dir: ' + item + ' out dir: ' + outDir)
		less2Css(item, outDir)
	})
})

gulp.task('jsBuildDev', () => {
	let files = glob.sync(dir.entry + '/**/*[^min].js' )
	console.log('js files: ' + files.toString())
	files.map((item, index) => {
		let outDir = outDirConfig(item)
		console.log('entry dir: ' + item + ' out dir: ' + outDir)
		jsBuild(item, outDir, true)
	})
})

gulp.task('jsBuild', () => {
	let files = glob.sync(dir.entry + '/**/*[^min].js' )
	console.log('js files: ' + files.toString())
	files.map((item, index) => {
		let outDir = outDirConfig(item)
		console.log('entry dir: ' + item + ' out dir: ' + outDir)
		jsBuild(item, outDir, false)
	})
})

gulp.task('htmlPage', () => {
	let files = glob.sync(dir.entry + '/**/*.html' )
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
			runSequence('jsBuildDev', 'less2css', 'htmlPage')
		})
})



gulp.task('default', ['jsBuildDev', 'less2css', 'htmlPage', 'watch', 'nodemon'])

gulp.task('build', ['jsBuild', 'less2css', 'htmlPage'])