var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
  return gulp.src([
    '_src/**/*.scss'
  ])
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
      browsers: [
        'last 2 version',
        'Explorer >= 10',
        'iOS >= 8.1',
        'Android >= 4.4'
      ],
      cascade: false
    }))
  .pipe(gulp.dest('_src'))
  .pipe(browserSync.stream());
});


gulp.task('copy', function() {
  return gulp.src([
      '!_src/css/*.scss',
      '_src/**/*',
    ], {
      base: '_src'
    })
    .pipe(gulp.dest('dest'))
    .pipe(browserSync.stream());
});


gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "dest"
    }
  })
    
  gulp.watch(['_src/**/*'], ['copy', 'sass']);
});


gulp.task('default', ['copy', 'sass', 'watch']);