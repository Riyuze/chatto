import React from 'react';
import Message from './Message';
import UserMessage from './UserMessage';

const Messages = ({messages}) => {

    return (
        <div className="Messages bg-slate-800 overflow-y-scroll p-3 h-[calc(100%-64px)]">
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