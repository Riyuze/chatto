import React from 'react';
import {
    Input,
    Button
} from '@nextui-org/react';

class ChatFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="ChatFooter bg-slate-800 h-16 p-3 flex items-center justify-between">
                <Input placeholder="Enter Message..." clearable bordered color="primary" type="text" className="px-3" fullWidth/>
                <Button className="px-3">Send</Button>
            </div>
        )
    }
}

export default ChatFooter;