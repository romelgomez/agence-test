"use strict";
var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
gulp.task('devServer', function () {
    nodemon({
        script: 'app/server/development.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
});
gulp.task('devServer2', function () {
    nodemon({
        script: 'app/server/development2.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
});
