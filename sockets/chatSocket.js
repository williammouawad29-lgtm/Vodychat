const io = require('socket.io')(3000);

// Store connected users
const users = {};

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Handle user joining
    socket.on('join', (username) => {
        users[socket.id] = username;
        socket.broadcast.emit('user-connected', username);
    });

    // Handle chat message
    socket.on('send-message', (message) => {
        io.emit('receive-message', {message, username: users[socket.id]});
    });

    // Handle user disconnecting
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];
    });
});

console.log('Socket.io server running on port 3000');