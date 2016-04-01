var path = require("path");
var gulp = require('gulp');
var	$  = require('gulp-load-plugins')();
var gulpsync    = $.sync(gulp);

var paths =  {
	app : "../app/"
}

var build = {
	scripts: paths.app + "js",
	scripts: paths.app + "css"
}

gulp.task('vendor',  gulpsync.sync(['vendor:base', 'vendor:app']));

gulp.task('vendor:base', function() {
	//return gulp.src(vendor.base.source)

});

gulp.task('vendor:app', function() {

});

gulp.task('default', gulpsync.sync([
								   'vendor'
]), function(){
	log('************');
	log('* All Done * You can start editing your code, LiveReload will update your browser after any change..');
	log('************');
});

function log(msg) {
	$.util.log($.util.colors.blue(msg));
}
