var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
//paperjs project, has whole canvas on it
var project;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

io.on('connection', function(socket){
    console.log('client connected');
    
    socket.on('path update', function(path){
        
    });
    
    socket.on('disconnect', function(){
        console.log('client disconnected');
    });
});

app.get('/', function (req, res) {
    var p = path.resolve(__dirname + '/Site.html');
	res.sendFile(p);
});

//initializes the client with the current whiteboard project
app.get("/initialize", function(req, res) {
    console.log(project);
    res.json(project);
});

//adds a path to a project (faster)
//adds updates server's project to client's (slower, currently implemented)
//i'd prefer to do the faster one
app.post("/notifyServer", function(req, res) {
    project = req.body;
    console.log(req.body);
});

//TODO update clients about changes

var server = app.listen(8888, function (){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening at http://%s:%s', host, port);
});