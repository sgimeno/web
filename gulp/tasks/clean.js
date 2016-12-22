var config = require('../config')
var gulp = require('gulp')
var del = require('del')

gulp.task('clean', function (done) {
  return del([config.buildDir], done)
})
