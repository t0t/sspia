'use strict';

var   gulp            =     require('gulp'),
      browserSync     =     require('browser-sync').create(),
      uglify          =     require('gulp-uglify'),
      img             =     require('gulp-image'),
      maps            =     require('gulp-sourcemaps'),
      autoprefixer    =     require('gulp-autoprefixer'),
      concat          =     require('gulp-concat'),
      ghPages         =     require('gulp-gh-pages'),
      del             =     require('del'),
      babel           =     require('gulp-babel'),
      data            =     require('gulp-data'),
      jade            =     require('gulp-jade'),
      sass            =     require('gulp-sass')
/*
  Compress Js
*/
gulp.task('compressJs', function () {
  return gulp.src('assets/js/build.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});
/*
  Concat Js
*/
gulp.task('concatJs', function () {
  return gulp.src([ './assets/js/src/*.js' ])
    .pipe(babel())
    .pipe(maps.init())
    .pipe(concat('build.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(gulp.dest('./dist/js'));
});
/*
  Compile Sass
*/
gulp.task('sass', function () {
  gulp.src('./assets/scss/main.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: [ 'last 2 versions' ],
        cascade: false
    }))
    .pipe(maps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(gulp.dest('./dist/css'));
});
/*
  Place Imgs and icons
*/
gulp.task('img', function () {
  gulp.src([
    './assets/img/*.svg',
    './assets/img/*.jpg',
    './assets/img/*.png',
    './assets/img/*.gif'
  ])
    .pipe(img())
    .pipe(gulp.dest('./dist/assets/img'));
});
/*
  Place Fonts folder
*/
gulp.task('fonts', function () {
  return gulp.src('./assets/fonts/*')
    .pipe(gulp.dest('./dist/assets/fonts'));
});
/*
  Place PDF folder
*/
gulp.task('pdf', function () {
  return gulp.src('./assets/pdf/*')
    .pipe(gulp.dest('./dist/assets/pdf'));
});
/*
  Place Assets
*/
gulp.task('assets', [ 'fonts', 'pdf', 'img' ], function () {
  return gulp.src('./assets/*')
    .pipe(gulp.dest('./dist/assets'));
});
/*
  compile Jade
*/
gulp.task('jade', function() {
  gulp.src([ './views/*.jade', '!./views/_*.jade' ])
    .pipe(data(function() {
      return require('./views/data/data.json');
    }))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('./dist'));
});
/*
  Compile stylus and jade
*/
gulp.task('compileSassJade', [ 'sass', 'jade' ]);
/*
  Watch
*/
gulp.task('watch', function () {
  gulp.watch([ 'assets/scss/*.scss', 'assets/scss/**/*.scss' ], [ 'sass' ]);
  gulp.watch([ './assets/js/build.js', './assets/js/src/**/*' ], [ 'concatJs' ]);
  gulp.watch([ './views/*.jade', './views/**/*.jade' ], [ 'jade' ]);
});
/*
  Development
*/
gulp.task('dev', [ 'watch' ], function () {
  browserSync.init([
    './css/main.css',
    './assets/js/build.js',
    './dist/*.html',
    './dist/**/*.html'
  ], {
    server: { baseDir: './dist' }
    //proxy: '',
    //host: 'localhost:3000'
  });
});
/*
  Build
*/
gulp.task('build', [ 'compileSassJade', 'concatJs' ]);
/*
  Clean generated files
*/
gulp.task('clean', function () {
  del([
    'dist',
    './css',
    './*.html',
    'assets/js/build.js',
    'assets/js/build.js*'
  ]);
});
/*
  Compress
*/
gulp.task('compress', [ 'compressJs' ]);
/*
  Deploy to Github
*/
gulp.task('deploy', [ 'compress' ], function () {
  return gulp.src('dist/**/*')
    .pipe(ghPages());
});
// gulp default
gulp.task('default', [ 'clean' ], function () {
  gulp.start('build');
});
