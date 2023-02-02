import React from 'react';
import Navbar from './Navbar';
import Info from './Info'

class ChatBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="ChatBar basis-1/4 border-white border-r h-full bg-slate-800">
                <Navbar />
                <Info />
            </div>
        )
    }
}

export default ChatBar;