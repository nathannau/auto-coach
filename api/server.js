var morgan = require('morgan');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
app.use(morgan('combined'))

app.listen(port);
app.get("/", function(req, res) { 
    console.log("truc");
    res.end(JSON.stringify( { "Hello":"World !" }));
});

console.log('todo list RESTful API server started on: ' + port);
