import React from 'react';
import {
    Text
} from '@nextui-org/react';
import Messages from './Messages';
import ChatFooter from './ChatFooter';

const ChatBody = ({messages, socket, lastMessageRef, roomName}) => {
    return (
        <div className="ChatBody h-full">
            <div className="h-16 bg-slate-900 flex items-center justify-between p-3">
                <Text className="font-bold" css={{
                    textGradient: "45deg, $blue400 -20%, $blue800 50%"
                }}>{roomName}</Text>
            </div>
            <Messages messages={messages} lastMessageRef={lastMessageRef} />
            <ChatFooter socket={socket} />  
        </div>
    )
}

export default ChatBody;