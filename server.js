var io = require('socket.io').listen(process.env.PORT || 5000);
io.sockets.on('connection', function (socket) {
socket.on('clientMessage', function(content) {
socket.emit('serverMessage', 'You said: ' + content);
socket.broadcast.emit('serverMessage', socket.id + ' said: ' +
content);
});
});