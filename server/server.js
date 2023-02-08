const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
  } = require("./utils/users");

const { formatMessage } = require("./utils/messages");

const botName = "Chatto Bot"

app.use(cors());

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('newUser', (data) => {
        const user = userJoin(data.socketID, data.username, data.room)
        if (!user) {
            socket.emit('usernameTaken', true);
        }
        else {
            socket.emit('usernameTaken', false);
            socket.join(user.room)
            socket.emit('messageResponse', formatMessage(botName, 'Welcome to Chatto!', `Bot-${Math.random()}`));
            socket.broadcast.to(user.room).emit('messageResponse', formatMessage(botName, `${user.username} has joined the chat.`, `Bot-${Math.random()}`));
            socketIO.to(user.room).emit('newUserResponse', getRoomUsers(user.room));
            socketIO.to(user.room).emit('roomName', user.room);
        }
    });

    socket.on('message', (data) => {
        const user = getCurrentUser(socket.id)
        socketIO.to(user.room).emit('messageResponse', formatMessage(data.username, data.text, data.id));
    });
    
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
        const user = userLeave(socket.id);
        if (user) {
            socketIO.to(user.room).emit('messageResponse', formatMessage(botName, `${user.username} has left the chat.`, `Bot-${Math.random()}`));
            socketIO.to(user.room).emit('newUserResponse', getRoomUsers(user.room));
        }
        socket.disconnect();
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

