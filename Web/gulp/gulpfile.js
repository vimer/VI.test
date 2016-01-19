var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

var paths = {
  scripts: 'js/**/*.js',
};

gulp.task('lint', function() {
	return gulp.src(paths.scripts)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('minify', function () {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'))
});
