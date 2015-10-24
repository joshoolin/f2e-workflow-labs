var gulp = require('gulp');

gulp.task('default', ['myTask1', 'myTask2'], function () {
	// place code for your default task here
	console.log('Hello, Gulp!');
});

gulp.task('myTask1', function (done) {
	console.log('Hello task1');
	// done();
});

gulp.task('myTask2', function (done) {
	console.log('Hello task2');
	done();
});

gulp.task('output1', function () {
	gulp
		.src('assets/vendor/bootstrap/**/*.js')
		.pipe(gulp.dest('output1'));
});

gulp.task('output2', function () {
	gulp
		.src('assets/vendor/bootstrap/**/*.js',
			{
				base: 'assets/vendor/'
			})
		.pipe(gulp.dest('output2'));
});

gulp.task('output3', function () {
	gulp
		.src([
			'assets/vendor/bootstrap/**/*.js',
			'assets/vendor/bootstrap/**/*.css'
		])
		.pipe(gulp.dest('output3'));
});