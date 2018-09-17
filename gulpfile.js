var gulp= require('gulp');
var sass= require('gulp-sass');
var minifyCSS= require('gulp-clean-css');
var uglify= require('gulp-uglify');
var rename= require('gulp-rename');
var changed= require('gulp-changed');


var src= './src/Assets/*.scss';
var dest = './src/Assets';

gulp.task('compile_scss',function (){
	gulp.src(src)
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(rename({suffix: '.min'}))	
		.pipe(changed(dest))
		.pipe(gulp.dest(dest));

});

gulp.task('watch_scss',function(){
	gulp.watch(src, ['compile_scss']);
})

gulp.task('default', ['watch_scss']);