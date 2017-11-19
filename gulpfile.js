// Gulp and related
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cleanCSS    = require('gulp-clean-css');
var rename      = require('gulp-rename');

// Stylesheet Generation
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'));
});
