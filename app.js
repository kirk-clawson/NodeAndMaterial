/**
 * Created by Kirk.Clawson on 2/18/2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db;

if (process.env.ENV == 'INT') {
    db = mongoose.connect('mongodb://localhost/bookAPI_int');
} else {
    db = mongoose.connect('mongodb://localhost/bookAPI');
}

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var bookRouter = require('./routes/bookroutes')(Book);
app.use('/api/books', bookRouter);

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(port, function () {
    console.log('Listening on PORT: ' + port);
});

module.exports = app;