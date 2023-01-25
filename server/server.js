const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botName = 'Chatto Bot';

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Run When Client Connects
io.on('connection', socket => {
    socket.on('joinRoom', ({username, room}) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        // Welcomes the Current User
        socket.emit('message', formatMessage(botName, 'Welcome to Chatto!'));

        // Broadcasts When a User Connects
        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`));

        // Sends Users and Chatroom Info
        io.to(user.room).emit('roomUsers', {room: user.room, users: getRoomUsers(user.room)});
    });

    // Listen for Chat Messages
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id);
 
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });
 
    // Broadcasts When a User Disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if(user) {
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));

            // Sends Users and Chatroom Info
            io.to(user.room).emit('roomUsers', {room: user.room, users: getRoomUsers(user.room)});
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));