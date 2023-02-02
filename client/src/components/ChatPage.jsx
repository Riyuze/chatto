import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
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
            <div className="ChatPage h-screen items-center justify-center flex w-screen">
                <Container
                    display="flex"
                    css={{padding: "0px"}}
                    className="h-3/4 border-white border rounded-xl overflow-hidden"
                >
                    <ChatBar />
                    <div className="flex flex-col w-3/4">
                        <ChatBody />    
                        <ChatFooter />  
                    </div>     
                </Container>
            </div>
        )
    }
}

export default ChatPage;