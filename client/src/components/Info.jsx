import React, { useState, useEffect } from 'react';
import {
    Card,
    Text
} from "@nextui-org/react";

const Info = ({socket}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
    }, [socket, users]);

    return (
        <div className="Info">
            <div className="p-3">
                <Card>
                    <Text className="font-bold bg-slate-900">Active Users</Text>
                    <div>
                        <Card.Divider />
                        <Text>{localStorage.getItem('userName')}</Text>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Info;