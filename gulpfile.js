/**
 * Created by Kirk.Clawson on 2/18/2016.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function(){
    "use strict";
    nodemon({
        script:'server/server.js',
        ext: 'js',
        ignore: ['./node_modules/**']
    });
});