// Gulp and related
var gulp        = require('gulp');
var sass        = require('gulp-sass');

// Stylesheet Generation
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});
