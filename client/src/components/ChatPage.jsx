import React, { useState, useEffect } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import { 
    Container,
    } from '@nextui-org/react';

const ChatPage = ({socket}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);

    return (
        <div className="ChatPage h-screen items-center justify-center flex w-screen">
            <Container
                display="flex"
                css={{padding: "0px"}}
                className="h-3/4 border-white border rounded-xl overflow-hidden"
            >
                <ChatBar socket={socket} />
                <div className="w-3/4 h-[calc(100%-64px)]">
                    <ChatBody messages={messages} socket={socket} />
                </div>
            </Container>
        </div>
    )
}

export default ChatPage;