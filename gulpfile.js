'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var lint = require('gulp-eslint');

var srcFile = './mod-reload.js';

gulp.task('lint', function () {
  return gulp.src(srcFile)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.format())
    .pipe(lint.failOnError());
});

gulp.task('watch', function () {
  gulp.watch(srcFile, ['lint']);
});

// default task
gulp.task('default', ['lint', 'watch']);
