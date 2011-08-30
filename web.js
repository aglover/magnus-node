/** 
 * Heroku project: ankara
 * URL is ankara.herokuapp.com
 *
 */
var express = require('express');

var app = express.createServer(express.logger());
app.use(express.bodyParser());

app.put('/', function(req, res) {
  var deal = req.body.deal_description;
  var tags = req.body.all_tags;

  console.log("deal is : "  + deal + " and tags are " + tags);
  
  res.contentType('json');
  res.send(JSON.stringify({ status: "success" }));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
