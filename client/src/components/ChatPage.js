import React from 'react';
import { Text } from '@nextui-org/react';

class ChatPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div className="ChatPage">
                <div>
                    <Text h2 css={{
                        textGradient: "45deg, $blue600 50%, $blue500 50%",
                        padding: "20px",
                    }}
                    weight="bold">Chatto</Text>
                    <Text h4 css={{
                        textGradient: "45deg, $blue700 -20%, $blue800 100%",
                        margin: "30px 0 20px 0",
                        }}
                    weight="bold">Active Users</Text>
                    <div>
                        <p>User 1</p>
                        <p>User 2</p>
                        <p>User 3</p>
                        <p>User 4</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default ChatPage;