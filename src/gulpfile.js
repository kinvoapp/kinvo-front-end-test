const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


//compile scc into css
function style() {
    // 1. where is my scss file
    return gulp.src('./src/scss/**/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    //3 . where do I save the compiled CSS?
    .pipe(gulp.dest('./src/css'))
    //4. stream changes to all brouser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;