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
            <div className="Messages bg-slate-800 p-3" style={{height: 'calc(100% - 128px)'}}>
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