/** 
 * Heroku project: ankara
 * URL is ankara.herokuapp.com
 *
 */
var express = require('express');

var app = express.createServer(express.logger());
app.use(express.bodyParser());

app.put('/', function(req, res) {
  console.log(req.body.deal_description);
  res.send('ack');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
