var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject({
    declaration: true
});

gulp.task('default', function () {
});


gulp.task('copy:structure', function(){
    return gulp.src('./dist/**', {base:".", read: false})
        .pipe(gulp.dest('./src'));
});

gulp.task('ts:compile', function() {
    var tsResult = gulp.src('./src/**/*.ts')
        .pipe(tsProject());

    return merge([
        tsResult.js.pipe(gulp.dest('./dist'))
    ]);
});
gulp.task('watch', ['ts:compile'], function() {
    gulp.watch('./src/**/*.ts', ['ts:compile']);
}); 