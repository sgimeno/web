'use strict';

var gulp = require('gulp');
var util = require('gulp-util');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var livereload = require('gulp-livereload');

/*
	A more sophisticated browserify build & watch
	https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
 */

// add custom browserify options here
var customOpts = {
  entries: ['./src/index.js'],
  debug: true
};


// you can run `gulp js` to build the file
gulp.task('js', function(){
  var opts = assign({}, browserify.args, customOpts);
  var b = browserify(opts);

  // add transformations here
  // i.e. b.transform(coffeeify);

  //TODO: reuse bundle function for watchify and browserify
  function bundle() {
    return b.bundle()
      // log errors if they happen
      .on('error', util.log.bind(util, 'Browserify Error'))
      .pipe(source('index.js'))
      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())
      // optional, remove if you dont want sourcemaps
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
         // Add transformation tasks to the pipeline here.
      .pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./dist'))
      .pipe(livereload());
  }

  return bundle();

});

gulp.task('watchify', function(){
  var opts = assign({}, watchify.args, customOpts);
  var b = watchify(browserify(opts));

  // add transformations here
  // i.e. b.transform(coffeeify);

  //TODO: reuse bundle function for watchify and browserify
  function bundle() {
    return b.bundle()
      // log errors if they happen
      .on('error', util.log.bind(util, 'Browserify Error'))
      .pipe(source('index.js'))
      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())
      // optional, remove if you dont want sourcemaps
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
         // Add transformation tasks to the pipeline here.
      .pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./dist'))
      .pipe(livereload());
  }

  b.on('update', bundle); // on any dep update, runs the bundler
  b.on('log', util.log); // output build logs to terminal

  return bundle();
});

gulp.task('html', function(){
	gulp.src(['./src/**/*.html'])
		.pipe(gulp.dest('./dist'))
		.pipe(livereload());
});

gulp.task('clean', function(done) {
  del(['./dist'], done);
});

gulp.task('watch', ['watchify'], function() {
    livereload.listen();
    gulp.watch(['./src/**/*.html'], ['html']);
});

gulp.task('build', ['html', 'js']);
