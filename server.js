var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    socket.on('reg', function(msg){
        console.log(msg);
    });
});

http.listen(8080, function(){
    console.log('listening on *:8080');
});