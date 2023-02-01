import React from 'react';
import Message from './Message';

class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div className="Messages bg-white p-3">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        )
    }
}

export default Messages;