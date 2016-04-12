'use strict';

var config      = require('../config');
var gulp = require('gulp');
var conventionalChangelog = require('conventional-changelog');
var fs = require('fs');

gulp.task('changelog', function() {
  return conventionalChangelog({
    preset: 'angular',
    releaseCount: 0
  })
  .pipe(fs.createWriteStream(config.changelog.dest));
});
