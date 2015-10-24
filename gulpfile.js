var gulp = require('gulp');
var del = require('del');

gulp.task('default', ['output2'], function () {
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

gulp.task('output2', ['clean'], function () {
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

gulp.task('clean', function (done) {
	del(['output2/bootstrap/**', '!output2/bootstrap']).then(function (paths) {
		console.log('deleted files/folders:\n', paths.join('\n'));
		done();
	});
});

gulp.task('watch', function () {
	gulp
		.watch([
			'app/**/*.js'
		], [
				'output-app'
			]);
});

gulp.task('watch', function () {
	gulp
		.watch([
			'app/**/*.js'
		], ['output-app'])
		.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type);
		});
});

gulp.task('output-app', ['clean-app'], function () {
	gulp
		.src([
			'app/**/*.js'
		])
		.pipe(gulp.dest('output-app'));
});

gulp.task('clean-app', function (done) {
	del(['output-app/**', '!output-app']).then(function () {
		done();
	});
});