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

app.use(cors());

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('newUser', (data) => {
        const user = userJoin(data.socketID, data.username, data.room)
        socket.join(user.room)
        socketIO.to(user.room).emit('newUserResponse', getRoomUsers(user.room));
        socketIO.to(user.room).emit('roomName', user.room);
    });

    socket.on('message', (data) => {
        const user = getCurrentUser(socket.id)
        socketIO.to(user.room).emit('messageResponse', formatMessage(data.username, data.text, data.id));
    });
    
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
        const user = userLeave(socket.id);
        socketIO.to(user.room).emit('newUserResponse', getRoomUsers(user.room));
        socket.disconnect();
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

