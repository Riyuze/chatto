import React from 'react';
import {
    Text
} from '@nextui-org/react';
import Messages from './Messages';

class ChatBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="ChatBody h-full">
                <div className="h-16 bg-slate-900 flex items-center justify-between p-3">
                    <Text className="font-bold" css={{
                        textGradient: "45deg, $blue400 -20%, $blue800 50%"
                    }}>Room Name</Text>
                </div>
                <Messages />
            </div>
        )
    }
}

export default ChatBody;