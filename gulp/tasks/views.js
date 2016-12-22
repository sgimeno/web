'use strict'

var config = require('../config')
var gulp = require('gulp')
var runSequence = require('run-sequence')
var browserSync = require('browser-sync')

// Views task
gulp.task('index', function () {
  // Put our index.html in the dist folder
  return gulp.src(config.views.index)
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.stream())
})

// Views task
gulp.task('partials', function () {
  // Process any other view files from app/views
  return gulp.src(config.views.src)
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream())
})

gulp.task('views', function (cb) {
  runSequence(['index', 'partials'], cb)
})
