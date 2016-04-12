'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  global.isProd = false;

  runSequence(['styles', 'images', 'json', 'fonts', 'views', 'browserify'], 'watch', cb);

});
