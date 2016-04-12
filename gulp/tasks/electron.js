var config       = require('../config');
var gulp         = require('gulp');

gulp.task('electron', function(){
  gulp.src(config.electron.src)
		.pipe(gulp.dest(config.electron.dest));
});
