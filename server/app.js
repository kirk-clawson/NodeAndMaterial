/**
 * Created by Kirk.Clawson on 2/18/2016.
 */

var environment = process.env.ENV || 'Dev';
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db;
var connStr = 'mongodb://localhost/bookAPI';

if (environment == 'Prod') {
    console.log('Connecting to ' + connStr);
    db = mongoose.connect(connStr);
} else {
    console.log('Connecting to ' + connStr + '_' + environment);
    db = mongoose.connect(connStr + '_' + environment);
}

var Book = require('./models/bookModel');
var expressApp = express();


expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json());

var bookRouter = require('./routes/bookroutes')(Book);
expressApp.use('/api/books', bookRouter);

expressApp.get('/', function(req, res){
    res.send('Hello World');
});


module.exports = expressApp;