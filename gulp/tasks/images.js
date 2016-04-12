var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var changed      = require('gulp-changed');
var imagemin     = require('gulp-imagemin');
var browserSync  = require('browser-sync');

gulp.task('images', function() {

  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest)) // Ignore unchanged files
    .pipe(gulpif(global.isProd, imagemin())) // Optimize
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream());

});
