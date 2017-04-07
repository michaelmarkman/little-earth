// server.js
// where your node app starts

// init project
var express = require('express');
var ejs = require('ejs');
var send_request = require('request');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
var i = 0
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));

// http://expressjs.com/en/starter/basic-routing.html
/*
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
*/

app.get("/", function (request, response) {
  response.render('index')
});

app.get("/:locationID", function (request, response) {
  response.reder
});

app.get("/location/:locationID", function (request, response) {
  i++
  console.log(request.params.locationID)
  console.log(i)
  
  
  var options = {
    url: 'http://api.openweathermap.org/data/2.5/weather?APPID=34321086f4a0076e54951262ac17adcd&q='+ request.params.locationID,
  };
  
  /*var options = {
    url: "http://api.openweathermap.org/data/2.5/weather?APPID=34321086f4a0076e54951262ac17adcd&q=seattle",
  };*/
  
  console.log("url: " + options.url)
  
  send_request(options, function (error, res, body) {
    if (!error && res.statusCode == 200) {
      response.send(body)
      console.log(body); // Show the response from Zapier
    }
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
