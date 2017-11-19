// Gulp and related
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cleanCSS    = require('gulp-clean-css');
var rename      = require('gulp-rename');

var browserSync = require('browser-sync').create();

// Stylesheet Generation
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Javascripts build defaults for now
gulp.task('js', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});

// Development web server/browserSync
gulp.task('serve', ['sass'], function(){
    browserSync.init({server: "./src"});

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Default/Main
gulp.task('default', ['js', 'serve']);