/**
 * Created by Kirk.Clawson on 2/18/2016.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function(){
    "use strict";
    nodemon({
        script:'app.js',
        ext: 'js',
        env: {
            ENV: 'DEV'
        },
        ignore: ['./node_modules/**']
    });
});

gulp.task('int', function(){
    "use strict";
    nodemon({
        script:'app.js',
        ext: 'js',
        env: {
            ENV: 'INT'
        },
        ignore: ['./node_modules/**']
    });
});