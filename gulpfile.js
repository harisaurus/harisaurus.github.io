var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var postcss_partial_import = require('postcss-partial-import');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('styles', function() {
  var processors = [
    postcss_partial_import,
    cssnext
  ]

  return gulp.src('./src/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream:true}))
});

// gulp.task('default', ['styles']);
gulp.task('default', ['browser-sync'], function(){
  gulp.watch("*.html", ['bs-reload']);
  gulp.watch("src/**/*.css", ['styles']);
});
