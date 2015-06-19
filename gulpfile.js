'use strict';

var gulp = require('gulp');
var babel  = require('babel/register');
var plumber = require('gulp-plumber');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var srcFile = './mod-reload.js';

gulp.task('lint', function () {
  return gulp.src(srcFile)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.format())
    .pipe(lint.failOnError());
});

gulp.task('test', function () {
  return gulp.src('test/*.spec.js')
    .pipe(plumber())
    .pipe(mocha());
});


gulp.task('watch', function () {
  gulp.watch(srcFile, ['lint', 'test']);
});

// default task
gulp.task('default', ['lint', 'test', 'watch']);
