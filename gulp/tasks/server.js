var config  = require('../config');
var gulp    = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: config.buildDir,
    port: config.browserPort
  });
});
