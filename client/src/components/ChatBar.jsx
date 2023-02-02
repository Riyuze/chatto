import React from 'react';
import Navbar from './Navbar';
import Info from './Info'

const ChatBar = () => {
    return (
        <div className="ChatBar w-1/4 border-white border-r h-full bg-slate-800">
            <Navbar />
            <Info />
        </div>
    )
}

export default ChatBar;