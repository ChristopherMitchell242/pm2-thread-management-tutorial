var io = require('socket.io-client');
var socket = io.connect('http://localhost:5000', {reconnect: true});

var uid = process.env.pm_id

var arr = []

// Add a connect listener
socket.on('connect', function (socket) {
    console.log(uid, 'number_worker.js connected');
});

socket.on('random_number_emission', function (id, data) {
    console.log(uid, 'number_worker.js recieved: ', id, data);
    if (data < 0.1) { console.warn('throwing error'); throw 'Error2'; } //simluates random errors thrown at runtime
});

socket.emit('stream-init', uid);
