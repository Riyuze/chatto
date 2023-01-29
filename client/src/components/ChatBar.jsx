import React from 'react';
import Navbar from './Navbar';

class ChatBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div className="ChatBar basis-1/3 border-white border-r h-full bg-gray-800">
                <Navbar />
            </div>
        )
    }
}

export default ChatBar;