let users = [];

userJoin = (id, username, room) => {
    const user = { id, username, room };

    const check = checkUser(users, user);

    if (check) {
        users.push(user);
        return user;
    }
    return false;
}

checkUser = (users, user) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user.username && users[i].room === user.room) {
            return false
        }
    }
    return true
}

getCurrentUser = (id) => {
    return users.find(user => user.id === id);
}

userLeave = (id) => {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

getRoomUsers = (room) => {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}