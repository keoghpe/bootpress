'use strict';
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  mainBowerFiles = require('main-bower-files'),
  concat = require('gulp-concat'),
  ftp = require('vinyl-ftp'),
  ftpconfig = require('./ftpconfig.json'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  util = require('gulp-util'),
  buffer = require('vinyl-buffer'),
  source = require('vinyl-source-stream'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  watchify = require('watchify'),
  debowerify = require('debowerify'),
  gutil = require('gulp-util'),
  assign = require('lodash.assign');

// Run `gulp js` to watch javascript and livereload

var customOpts = {
  entries: ['./scripts/main.js'],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts))
.transform(babelify)
.transform(debowerify); 


livereload.listen();
gulp.task('js', bundle); 
b.on('update', bundle);
b.on('log', gutil.log);


function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(util, 'Browserify Error'))
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) 
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
}

// SASS Tasks

gulp.task('sass', function() {
  gulp.src('sass/*.scss')
    .pipe(sass({
      loadPath: [
        './sass/',
        'bower_components/bootstrap-sass-official/assets/stylesheets'
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('.'))
    .pipe(livereload());
});

gulp.task('watch-sass', function() {
  livereload.listen();
  gulp.watch(['sass/*.scss', './**/*.scss'], ['sass']);
});

gulp.task('default', function() {
  // default does nothing right now
});

gulp.task('deploy', function() {

  // var conn = ftp.create( ftpconfig );

  // var globs = [
  //     'src/**',
  //     'css/**',
  //     'js/**',
  //     'fonts/**',
  //     'index.html'
  // ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  // return gulp.src( globs, { base: '.', buffer: false } )
  //     .pipe( conn.newer( '/public_html' ) ) // only upload newer files
  //     .pipe( conn.dest( '/public_html' ) );

});