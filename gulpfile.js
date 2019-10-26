'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglifycss = require('gulp-uglifycss');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('html', function() {
  return gulp.src('./dev/assets/*.html', {since: gulp.lastRun('html')})
    .pipe(gulp.dest('./prod'));
});

gulp.task('img', function() {
  return gulp.src('./dev/assets/images/*.*', {since: gulp.lastRun('img')})
    .pipe(imagemin())
    .pipe(gulp.dest('./prod/images'));
});

gulp.task('css', function() {
  return gulp.src('./dev/sass/**/*.scss')
    .pipe(cached('css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(remember('css'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(gulp.dest('./prod'));
});

gulp.task('js', function() {
  return gulp.src('./dev/js/**/*.js')
    .pipe(webpackStream(require('./webpack.config.js')))
    .pipe(gulp.dest('./prod'));
});

gulp.task('clean', function() {
  return del('./prod');
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('html', 'img', 'css', 'js'))
);

gulp.task('watch', function() {
  gulp.watch('./dev/assets/*.html', gulp.series('html'));

  gulp.watch('./dev/assets/images/*.*', gulp.series('img'));

  const cssWatcher = gulp.watch('./dev/sass/**/*.scss', gulp.series('css'));

  cssWatcher.on('unlink', function(event) {
    delete cached.caches['css'][event.path];
    remember.forget('css', event.path);
  });

  const jsWatcher = gulp.watch('./dev/js/**/*.js', gulp.series('js'));

  jsWatcher.on('unlink', function(event) {
    delete cached.caches['js'][event.path];
    remember.forget('js', event.path);
  });
});

gulp.task('server', function() {
  browserSync.init({
    server: './prod'
  });

  browserSync.watch('./prod/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
  'build',
  gulp.parallel('watch', 'server'))
);
