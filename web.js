var express = require('express');

var app = express.createServer(express.logger());
app.use(express.bodyParser());

app.put('/', function(req, res) {
  console.log(req.body.account);
  res.send('Hello World!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
