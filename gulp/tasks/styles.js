var config = require('../config')
var handleErrors = require('../util/handleErrors')
var gulp = require('gulp')
var gulpif = require('gulp-if')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync')

gulp.task('styles', function () {
  var createSourcemap = !global.isProd || config.styles.prodSourcemap

  return gulp.src(config.styles.src)
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(sass({
      sourceComments: !global.isProd,
      outputStyle: global.isProd ? 'compressed' : 'nested',
      includePaths: config.styles.sassIncludePaths
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulpif(
      createSourcemap,
      sourcemaps.write(global.isProd ? './' : null))
    )
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream())
})
