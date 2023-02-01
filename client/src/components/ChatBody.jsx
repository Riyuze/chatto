import React from 'react';
import {
    Text
} from '@nextui-org/react';

class ChatBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div className="ChatBody basis-3/4 h-full">
                <div className="h-16 bg-slate-900 flex items-center justify-between p-3">
                    <Text className="font-bold" css={{
                        textGradient: "45deg, $blue400 -20%, $blue800 50%"
                    }}>Room Name</Text>
                </div>
            </div>
        )
    }
}

export default ChatBody;