'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglifycss = require('gulp-uglifycss');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const del = require('del');
const path = require('path');
const browserSync = require('browser-sync').create();

gulp.task('css', function() {
  const plugins = [
    autoprefixer({browsers: ['last 3 version']})
  ];

  return gulp.src('./dev/sass/**/*.scss')
    .pipe(cached('css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(remember('css'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
  return gulp.src('./dev/js/*.js')
    .pipe(cached('js'))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(remember('js'))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('assets', function() {
  return gulp.src('./dev/assets/**/*.*', {since: gulp.lastRun('assets')})
    .pipe(gulp.dest('./public'));
});

gulp.task('clean', function() {
  return del('./public');
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('css', 'js', 'assets'))
);

gulp.task('watch', function() {
  gulp.watch('./dev/sass/**/*.scss', gulp.series('css')).on('unlink', function(filepath) {
    remember.forget('css', path.resolve(filepath));
    delete cached.caches.css[path.resolve(filepath)];
  });

  gulp.watch('./dev/js/*.js', gulp.series('js')).on('unlink', function(filepath) {
    remember.forget('js', path.resolve(filepath));
    delete cached.caches.js[path.resolve(filepath)];
  });

  gulp.watch('./dev/assets/**/*.*', gulp.series('assets'));
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
