import React from 'react';
import Message from './Message';
import UserMessage from './UserMessage';

class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="Messages bg-slate-800 p-3 overflow-scroll" style={{height: 'calc(100% - 128px)'}}>
                <Message />
                <UserMessage />
            </div>
        )
    }
}

export default Messages;