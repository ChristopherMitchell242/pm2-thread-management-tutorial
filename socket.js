let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

var id = process.env.pm_id
 
io.set('transports',[
	  'websocket', 
    'flashsocket', 
    'htmlfile', 
    'xhr-polling', 
    'jsonp-polling', 
    'polling'
]);

io.on('connection', (socket) => {
  socket.on("stream-init", function(processId) {
  	setInterval(function() {
		socket.emit('random_number_emission', id, Math.random())
		socket.emit('random_string_emission', id, Math.random().toString(36).substr(2, 5))  
	}, 5000);    
  })

  socket.on('disconnect', function(){
    console.log('SOCKET.IO -> client disconnected from socket, ID ', id);
  });

})

http.listen(5000, () => {
  console.log('started on port 5000');
});
 