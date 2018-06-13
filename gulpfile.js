const gulp = require('gulp');
const chokidar = require('chokidar');


const JS_SRC = [
    './a/**/*.js',
    './index.js'
];


const watch = function() {
    chokidar.watch(JS_SRC).on('all', function(event, path) {
        console.log(`Chokidar - Path ${event}: ${path}`);
    });

    gulp.watch(JS_SRC).on('change', function(path) {
        console.log(`Gulp - Path ${path} changed.`);
    });
};

gulp.task('default', gulp.series(watch));
