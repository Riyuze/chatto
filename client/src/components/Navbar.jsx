import React from 'react';
import {
    Button,
    Text
} from '@nextui-org/react';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div className="Navbar flex items-center justify-between bg-slate-900 p-3 h-18">
                <Text size={30} css={{
                textGradient: "45deg, $blue400 -20%, $blue800 50%",
                }} className="font-bold pb-1">Chatto</Text>
                <div className="flex items-center gap-3">
                    <Text size={15}>User</Text>
                    <Button size="sm" color="primary">Logout</Button>
                </div>
            </div>
        )
    }
}

export default Navbar;