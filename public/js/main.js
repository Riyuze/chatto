const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

// Get Username and Room from URL
const {username, room} = Qs.parse(location.search, {
    ignoreQueyPrefix: true
});

const socket = io();

// Join Chatroom Message
socket.emit('joinRoom', {username, room});

// Message from Server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    // Scrolls Down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message Submit
chatForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get Message Text
    const msg = e.target.elements.msg.value;

    // Emit a Message to the Server
    socket.emit('chatMessage', msg);

    // Clear Input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// Output Message to DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
                        <p class="text">
                            ${message.text}
                        </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}