var gulp = require('gulp'), 
	livereload = require('gulp-livereload'), 
	connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
}).

task('reload-entry-point', function(){
	gulp.src('index.html').pipe(connect.reload());
}).


task('watch-for-files', function(){
	gulp.watch(['*.html', '*.css', '*.js', './modules/*.js'], ['reload-entry-point']);
}).
/*
task('connect', function() {
  connect.server({
    port: 8001,
    middleware: function(connect, opt) {
    	console.log(opt.app.use());
    	opt.app.use()
      return [
        // ...
      ]
    }
  });
}).
*/
task('default', ['connect', 'watch-for-files']);