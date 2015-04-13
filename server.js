var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    var p = path.resolve(__dirname + '/Site.html');
	res.sendFile(p);
});

app.post("/notifyServer", function(req, res) {
    var path = req.body;
    res.json(path);
    console.log(req.body);
});

var server = app.listen(8888, function (){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening at http://%s:%s', host, port);
})