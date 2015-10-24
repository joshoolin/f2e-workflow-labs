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