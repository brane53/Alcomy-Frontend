var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    typescript = require('gulp-typescript'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    imageResize = require('gulp-image-resize'),
    autoprefixer = require('gulp-autoprefixer');


// Compiles SCSS files to CSS then minifies the assets/css/styles.css to ./production

gulp.task('sass', function () {
    gulp.src('assets/scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'],
            cascade: true
            }))
        .pipe(gulp.dest('assets/css'))
        .pipe(livereload());

    gulp.src('assets/css/styles.css')
        .pipe(plumber())
        .pipe(minifycss())
        .pipe(gulp.dest('production'))
});





// Concatinates JS files to production/scripts.js
 
gulp.task('scripts', function(){
    gulp.src([
        /*Vender Scripts*/
        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-material/angular-material.js',
        'node_modules/angular-new-router/dist/router.es5.js',
        'bower_components/angular-resource/angular-resource.js',
        'app/alcomyApp.module.js',
        'app/alcomyApp.routes.js',
        'app/components/residentsCtrl.js'
        ])
        .pipe(plumber())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('production'))
        .pipe(livereload());


});


gulp.task('imageResize', function () {
  gulp.src('assets/images/avatars/*.jpg')
    .pipe(plumber())
    .pipe(imageResize({ 
      width : 50,
      height : 50,
      crop : true,
      upscale : false,
      imageMagick: true
    }))
    .pipe(gulp.dest('production/assets/images/avatars'));
});

gulp.task('refresh', function(){
    livereload.reload();
});

gulp.task('watch', function() {
    livereload.listen();
    // watch for CSS changes

    gulp.watch('assets/scss/*.scss', ['sass']);

    // watch for JS changes
    
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('index.html', ['refresh', 'imageResize']);
    gulp.watch('app/**/*.html', ['refresh'])


});

gulp.task('watch-no-live', function() {

    gulp.watch('assets/scss/*.scss', ['sass']);

    // watch for JS changes

    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.html', ['imageResize']);


});



// default gulp task

gulp.task('default', function() {

});

