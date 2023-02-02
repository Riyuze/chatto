import React from 'react';
import {
    Input,
    Button
} from '@nextui-org/react';

class ChatFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    sendMessage = () => {
        console.log( localStorage.getItem('userName'), this.state.message )
        this.setState({ message: "" })
    }

    render() {
        return (
            <div className="ChatFooter bg-slate-800 h-16 p-3 flex items-center justify-between">
                <Input placeholder="Enter Message..." clearable bordered color="primary" type="text" className="px-3" fullWidth onChange={e => this.setState({ message: e.target.value })}/>
                <Button className="px-3" onPress={ this.sendMessage }>Send</Button>
            </div>
        )
    }
}

export default ChatFooter;