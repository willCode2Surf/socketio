var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Socket.io</h1>');
});

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

http.listen(3030, function(){
  console.log('listening on *:3030');
});