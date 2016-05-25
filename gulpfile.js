var gulp = require('gulp'),
livereload = require('gulp-livereload'),
connect = require('gulp-connect');

gulp.task('connect', function () {
  connect.server({
    root : '.',
    livereload : true
  });
}).

task('reload-entry-point', function () {
  gulp.src('index.html').pipe(connect.reload());
}).

task('watch-for-files', function () {
  gulp.watch(['*.html', '*.css', '*.js', './modules/*.js'], ['reload-entry-point']);
}).

task('default', ['connect', 'watch-for-files']);