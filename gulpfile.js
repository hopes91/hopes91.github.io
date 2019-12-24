'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
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
  return gulp.src('./src/assets/*.html')
    .pipe(cached('html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(remember('html'))
    .pipe(gulp.dest('./public'));
});

gulp.task('img', function() {
  return gulp.src('./src/assets/images/**/*.*')
    .pipe(cached('img'))
    .pipe(imagemin())
    .pipe(remember('img'))
    .pipe(gulp.dest('./public/images'));
});

gulp.task('css', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(cached('css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(remember('css'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(webpackStream(require('./webpack.config.js')))
    .pipe(gulp.dest('./public'));
});

gulp.task('clean', function() {
  return del('./public');
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('html', 'img', 'css', 'js'))
);

gulp.task('watch', function() {
  const htmlWatcher = gulp.watch('./src/assets/*.html', gulp.series('html'));

  htmlWatcher.on('change', function(event) {
    if (event.type === 'deleted') {
      delete cached.caches['html'][event.path];
      remember.forget('html', event.path);
    }
  });

  const imgWatcher = gulp.watch('./src/assets/images/*.*', gulp.series('img'));

  imgWatcher.on('change', function(event) {
    if (event.type === 'deleted') {
      delete cached.caches['img'][event.path];
      remember.forget('img', event.path);
    }
  });

  const cssWatcher = gulp.watch('./src/sass/**/*.scss', gulp.series('css'));

  cssWatcher.on('change', function(event) {
    if (event.type === 'deleted') {
      delete cached.caches['css'][event.path];
      remember.forget('css', event.path);
    }
  });

  const jsWatcher = gulp.watch('./src/js/**/*.js', gulp.series('js'));

  jsWatcher.on('change', function(event) {
    if (event.type === 'deleted') {
      delete cached.caches['js'][event.path];
      remember.forget('js', event.path);
    }
  });
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
