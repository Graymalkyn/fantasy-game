var express = require('express'); //grab the express module we downloaded
var bodyParser = require('body-parser');

var app = express(); //actually create an express app. We'll use this to configure the server.

//tells the app to use express' static file functionality and tells it to use the public folder.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


var leaderboardData = [];

app.get('/api/leaderboard', function(req, res){
  res.send(leaderboardData);
});

app.post('/api.leaderboard', function(req, res){
  // console.log('POST data', result)
  leaderboardData.push(req.body);
  res.send(leaderboardData);
});



//gotta listen on a port to accept requests
app.listen(5500, function() {
  console.log('app listening on port 5500.')
});
