//setting up the server
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;



// application /json parser
var jsonParser = bodyParser.json()

var urlencoderParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.json({type: 'application/*+json'}))

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use (bodyParser.text({type: 'text/html'}))

// require("./app/routing/htmlRoutes.js")(app);

app.listen (PORT, function(){
    console.log('App is listening on PORT: ' + PORT);
});
