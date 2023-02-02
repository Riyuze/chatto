import React from 'react';
import {
    Text
} from "@nextui-org/react";

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="Message flex gap-5 mb-5 items-center p-2">
                <div>
                    <Text className="font-bold">User</Text>
                    <span className="font-light text-gray-400">Just Now</span>
                </div>
                <div className="w-4/5 flex gap-3">
                    <p className="bg-white text-black px-3 py-5 rounded-b-lg rounded-tr-lg">Hello</p>
                </div>
            </div>
        )
    }
}

export default Message;