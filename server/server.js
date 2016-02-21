/**
 * Created by Kirk.Clawson on 2/20/2016.
 */

var port = process.env.PORT || 3000;

var app = require('./app.js');

app.listen(port, function(){
    "use strict";
    console.log('Server.js is listening on port ' + port + '.');
});