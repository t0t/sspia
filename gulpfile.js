var gulp            =     require('gulp');
// var img          =     require('gulp-image');
var sourcemaps      =     require("gulp-sourcemaps");
var babel           =     require("gulp-babel");
var browserSync     =     require('browser-sync').create();
var uglify          =     require('gulp-uglify');
var htmlmin         =     require('gulp-htmlmin');
var autoprefixer    =     require('gulp-autoprefixer');
var ghPages         =     require('gulp-gh-pages');
var cssnano         =     require('gulp-cssnano');
// var del             =     require('del');
// var data            =     require('gulp-data');
var sass            =     require('gulp-sass');
var concat          =     require("gulp-concat");

/*
  Compile Sass
*/
gulp.task( 'css', function () {
  gulp.src( './dev/sass/*.scss' )
    .pipe( sourcemaps.init() )
    .pipe( sass() )
    .pipe( autoprefixer({
        browsers: [ 'last 2 versions' ],
        cascade: false
    }))
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( './dev/css' ) )
});
/*
  Images
*/
gulp.task( 'img', function () {
  gulp.src( './dev/img/*.jpg' )
    .pipe( gulp.dest( './prod/img' ) )
});
/*
  Watch
*/
gulp.task('watch', function () {
  gulp.watch([ './dev/sass/*.scss', 'dev/sass/**/*.scss' ], [ 'css' ]);
  gulp.watch([ './dev/js/build.js', './dev/js/**/*' ], [ 'js' ]);
  // gulp.watch([ './views/*.jade', './views/**/*.jade' ], [ 'jade' ]);
});
/*
  Development
*/
gulp.task( 'dev', [ 'watch' ], function () {
  browserSync.init([
    './dev/css/main.css',
    './dev/js/build.js',
    './dev/*.html'
    // './dist/**/*.html'
  ], {
    server: { baseDir: './dev' }
    //proxy: '',
    //host: 'localhost:3000'
  });
});
/*
  Build
*/
gulp.task('build', [ 'css', 'js', 'html' ]);
/*
  html
*/
gulp.task( 'html', function() {
  return gulp.src( 'dev/*.html' )
    .pipe( htmlmin({collapseWhitespace: true}))
    .pipe( gulp.dest( 'prod' ))
});
/*
  JS
*/
gulp.task( "js", function () {
  return gulp.src( "dev/js/src/**/*.js" )
    .pipe( sourcemaps.init() )
    .pipe( babel( {
      presets: [ 'es2015' ]
    }))
  .pipe( concat( "build.js" ) )
  .pipe( sourcemaps.write( "." ) )
  .pipe( gulp.dest( "dev/js/" ) );
});
/*
  Compress Js
*/
gulp.task( 'minijs', function () {
  return gulp.src( 'dev/js/build.js' )
    .pipe( uglify() )
    .pipe( gulp.dest( 'prod/js' ));
});
/*
  Compress CSS
*/
gulp.task( 'minicss', function() {
    return gulp.src( 'dev/css/main.css' )
        .pipe( cssnano() )
        .pipe( gulp.dest( 'prod/css/' ));
});
/*
  Clean generated files
*/
// gulp.task( 'clean', function () {
//   del([
//     'dist',
//     './css',
//     './*.html',
//     'assets/js/build.js',
//     'assets/js/build.js*'
//   ]);
// });
/*
  Deploy to Github
*/
gulp.task( 'deploy', [ 'minicss','minijs','html', 'img' ], function () {
  return gulp.src( './prod/**/*' )
    .pipe( ghPages() );
});
