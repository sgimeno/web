'use strict'

var config = require('../config')
var changed = require('gulp-changed')
var gulp = require('gulp')
var browserSync = require('browser-sync')

gulp.task('json', function () {
  return gulp.src(config.json.src)
    .pipe(changed(config.json.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.json.dest))
    .pipe(browserSync.stream())
})
