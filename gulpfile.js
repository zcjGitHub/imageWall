var gulp = require('gulp'),
    less = require('gulp-less');
    //当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');
 
gulp.task('less', function () {
    gulp.src('./less/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('./css'));
});
gulp.task('default', function () {
    gulp.watch('./less/*.less', ['less']);
});		