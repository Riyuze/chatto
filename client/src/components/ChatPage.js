import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { 
    Container,
    Card
    } from '@nextui-org/react';

class ChatPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div className="ChatPage">
                <Container
                    display="flex"
                    alignItems="center"
                    justify="center"
                    className="p-5"
                >
                    <Card className="h-screen w-screen">
                        <div className="flex flex-auto p-5">
                            <ChatBar />
                        </div>
                        <div>
                            <ChatBody />
                            <ChatFooter />
                        </div>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ChatPage;