var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var proxy = "localhost:8088";
var src = "k2_web";

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: proxy
    });
});

gulp.task('default', ['browser-sync']);

gulp.watch([src + '/**/*.rb', src + '/**/*.erb', src + '/**/*.js', src + '/**/*.coffee', src + '/**/*.scss', src + '/**/*.css', src + '/**/*.haml',], function () {
    browserSync.reload();
});