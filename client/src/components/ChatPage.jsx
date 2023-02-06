import React, { useState, useEffect } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
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
                <div className="flex flex-col w-3/4">
                    <ChatBody messages={messages} />    
                    <ChatFooter socket={socket} />  
                </div>     
            </Container>
        </div>
    )
}

export default ChatPage;