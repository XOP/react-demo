var gulp = require('gulp');
var del = require('del');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var react = require('gulp-react');


//
// cleanup
gulp.task('clean', function(){
    del('./public/assets/css/*');
    del('./public/assets/js/*');
    del('./assets/js/build/*');
});

//
// sync
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:3000",
        logLevel: "info"
    });
});

//
// js
gulp.task('jsx', function(){
    return gulp.src('./assets/js/src/**/*.js')
        .pipe(react())
        .pipe(gulp.dest('assets/js/build'));
});

// js
gulp.task('js', ['jsx'], function(){
    return gulp.src('./assets/js/build/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'));
});

//
// css

// skeleton
gulp.task('skeleton', function(){
    return gulp.src('./bower_components/skeleton/css/*.css')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('public/assets/css'));
});

// styluls
gulp.task('css', function(){
    return gulp.src('./assets/css/**/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('public/assets/css'))
        .pipe(reload({stream: true}));
});

//
// default
gulp.task('default',
    [
        'browser-sync',
        'clean',
        'skeleton',
        'js',
        'css'
    ],
    function(){
        gulp.watch('./assets/css/*', ['css']);
        gulp.watch('./assets/js/src/*', ['js', browserSync.reload]);
        // gulp.watch("*.html").on("change", browserSync.reload);
    }
);