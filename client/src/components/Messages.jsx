import React from 'react';
import Message from './Message';
import UserMessage from './UserMessage';

const Messages = () => {
    return (
        <div className="Messages bg-slate-800 p-3 overflow-scroll" style={{height: 'calc(100% - 64px)'}}>
            <Message />
            <UserMessage />
        </div>
    )
}

export default Messages;