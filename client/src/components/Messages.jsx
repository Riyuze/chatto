import React from 'react';
import Message from './Message';
import UserMessage from './UserMessage';

const Messages = ({messages}) => {

    return (
        <div className="Messages bg-slate-800 p-3 overflow-y-scroll h-chat">
            {
                messages.map((message) => 
                    message.name === localStorage.getItem('userName') ? 
                    <UserMessage text={message.text} key={message.id} /> :
                    <Message name={message.name} text={message.text} key={message.id} />
                )
            }
        </div>
    )
}

export default Messages;