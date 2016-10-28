var express = require('express');

// Create our app

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('express serve is up on port 3000');
})