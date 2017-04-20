var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function(){
  return gulp.src('src/*.pug')
    .pipe(pug().on('error', function(){}))
    .pipe(gulp.dest('output'))
});

gulp.task('css', function(){
  return gulp.src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('output'))
});

gulp.task('default', function(){

  gulp.watch('src/*.scss',[ 'css']);
  gulp.watch('src/*.pug',[ 'html']);
});
