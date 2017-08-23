var io = require('socket.io-client');
var socket = io.connect('http://localhost:5000', {reconnect: true});

var uid = process.env.pm_id

var arr = []

// Add a connect listener
socket.on('connect', function (socket) {
    // console.log(uid, 'string_worker.js connected');
});

socket.on('random_string_emission', function (id, data) {
    // console.log(uid, 'string_worker.js recieved: ', id, data);
    // arr.push(data)
});

socket.emit('stream-init', uid);
