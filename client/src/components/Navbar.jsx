import React from 'react';
import {
    Button
} from '@nextui-org/react';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
            <div className="Navbar flex items-center justify-between bg-gray-900 p-3">
                <span>Chatto</span>
                <div className="flex items-center">
                    <span>User</span>
                    <Button size="md" color="error">Logout</Button>
                </div>
            </div>
        )
    }
}

export default Navbar;