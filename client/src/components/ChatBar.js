import React from 'react';
import { Text } from '@nextui-org/react';

class ChatBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div className="ChatBar">
                <Text h1 css={{
                    textGradient: "45deg, $blue600 45%, $blue500 55%",
                }} weight="bold">Chatto</Text>
                <div>
                    <Text h4 css={{
                        textGradient: "45deg, $blue700 45%, $blue600 55%",
                    }}>Acitve Users</Text>
                    <div>
                        <p>User 1</p>
                        <p>User 2</p>
                        <p>User 3</p>
                        <p>User 4</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBar;