var express = require('express');
var app = express();
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/results", function (request, response) {
  response.redirect('/') 
});

