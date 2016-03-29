var path = require("path");
var gulp = require('gulp');
var	$  = require('gulp-load-plugins')();

gulp.task('default',  function(){
	log('************');
	log('* All Done * You can start editing your code, LiveReload will update your browser after any change..');
	log('************');
});

function log(msg) {
	//$.util.log($.util.colors.blue(msg));
}
