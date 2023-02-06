import React from 'react';
import Message from './Message';
import UserMessage from './UserMessage';

const Messages = ({messages}) => {
    return (
        <div className="Messages bg-slate-800 p-3 overflow-scroll" style={{height: 'calc(100% - 64px)'}}>
            {
                messages.map((message) => 
                    message.name === localStorage.getItem('userName') ? 
                    <UserMessage text={message.text} /> :
                    <Message name={message.name} text={message.text} />
                )
            }
        </div>
    )
}

export default Messages;