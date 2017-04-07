var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var compass = require('gulp-compass');

gulp.task('compass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(compass({
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('imagemin', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
);
gulp.task('default', ['compass'], function() {
   gulp.watch("sass/**/*.scss", ['compass']);
   gulp.watch("images/*", ['imagemin']);
});
