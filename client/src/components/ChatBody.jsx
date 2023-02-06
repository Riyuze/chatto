import React from 'react';
import {
    Text
} from '@nextui-org/react';
import Message from './Message';
import UserMessage from './UserMessage';

const ChatBody = () => {
    return (
        <div className="ChatBody h-full">
            <div className="h-16 bg-slate-900 flex items-center justify-between p-3">
                <Text className="font-bold" css={{
                    textGradient: "45deg, $blue400 -20%, $blue800 50%"
                }}>Room Name</Text>
            </div>
            <div className="bg-slate-800 p-3 overflow-scroll" style={{height: 'calc(100% - 64px)'}}>
                <Message />
                <UserMessage />
            </div>
        </div>
    )
}

export default ChatBody;