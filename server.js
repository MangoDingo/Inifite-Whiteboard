var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    var p = path.resolve(__dirname + '/Site.html');
	res.sendFile(p);
});
app.get('/generate', function (req, res) {
    handle_database(req, res);
})
var server = app.listen(8888, function (){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening at http://%s:%s', host, port);
})