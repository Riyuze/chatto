const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botName = 'Chatto Bot';

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Run When Client Connects
io.on('connection', socket => {
    // Welcomes the Current User
    socket.emit('message', formatMessage(botName, 'Welcome to Chatto!'));

    // Broadcasts When a User Connects
    socket.broadcast.emit('message', formatMessage(botName, 'A user has joined the chat'));

    // Broadcasts When a User Disconnects
    socket.on('disconnect', () => {
        io.emit('message', formatMessage(botName, 'A user has left the chat'));
    });

    // Listen for Chat Messages
    socket.on('chatMessage', (msg) => {
        io.emit('message', formatMessage('User', msg));
    });
});


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));