const gulp = require('gulp');
const debug = require('gulp-debug');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');
const remember = require('gulp-remember');
const path = require('path');
const cached = require('gulp-cached');
const browserSync = require('browser-sync').create();

gulp.task('css', function() {
	const plugins = [
		autoprefixer({browsers: ['last 3 version']})
	];

	return gulp.src('./dev/css/*.css')
		.pipe(cached('css'))
		.pipe(postcss(plugins))
		.pipe(remember('css'))
		.pipe(concatCss('style.css'))
		.pipe(uglifycss({"uglyComments": true}))
		.pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
	return gulp.src('./dev/js/*.js')
		.pipe(cached('js'))
		.pipe(babel({presets: ['env']}))
		.pipe(remember('js'))
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public'));
});

gulp.task('other', function() {
	return gulp.src('./dev/other/**/*.*', {since: gulp.lastRun('other')})
		.pipe(gulp.dest('./public'));
});

gulp.task('clean', function() {
	return del('./public');
});

gulp.task('build', gulp.series(
	'clean', 
	gulp.parallel('css', 'js', 'other'))
);

gulp.task('watch', function() {
	gulp.watch('./dev/css/*.css', gulp.series('css')).on('unlink', function(filepath) {
		remember.forget('css', path.resolve(filepath));
		delete cached.caches.css[path.resolve(filepath)];
	});

	gulp.watch('./dev/js/*.js', gulp.series('js')).on('unlink', function(filepath) {
		remember.forget('js', path.resolve(filepath));
		delete cached.caches.js[path.resolve(filepath)];
	});

	gulp.watch('./dev/other/**/*.*', gulp.series('other'));
});

gulp.task('server', function() {
	browserSync.init({
		server: './public'
	});

	browserSync.watch('./public/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
	'build', 
	gulp.parallel('watch', 'server'))
);