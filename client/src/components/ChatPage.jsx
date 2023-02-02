import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import { 
    Container,
    } from '@nextui-org/react';

class ChatPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="ChatPage h-screen items-center justify-center flex">
                <Container
                    display="flex"
                    css={{padding: "0px"}}
                    className="w-5/6 h-3/4 border-white border rounded-xl overflow-hidden"
                >
                    <ChatBar/>     
                    <ChatBody/>    
                </Container>
            </div>
        )
    }
}

export default ChatPage;