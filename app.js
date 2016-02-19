/**
 * Created by Kirk.Clawson on 2/18/2016.
 */

var express = require('express');

var app = express();

var port = process.env.PORT || 3030;

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(port, function () {
    console.log('Gulp is listening on PORT: ' + port);
});