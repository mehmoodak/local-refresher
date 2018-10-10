var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var server_address = "server_address"; //localhost:8080
var src = "folder_name";

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: server_address
    });
});

gulp.task('default', ['browser-sync']);

gulp.watch([src + '/**/*.rb', src + '/**/*.erb', src + '/**/*.js', src + '/**/*.coffee', src + '/**/*.scss', src + '/**/*.css', src + '/**/*.haml',], function () {
    browserSync.reload();
});
