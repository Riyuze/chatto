import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Container,
    Dropdown,
    } from '@nextui-org/react';
import Swal from 'sweetalert2';

const Home = ({socket}) => {

    const [room, setRoom] = useState('');

    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    const enterChat = () => {
        localStorage.setItem('userName', userName);
        socket.emit('newUser', { username: userName, room: Array.from(room)[0], socketID: socket.id });
    }

    useEffect(() => {
        socket.on('usernameTaken', (data) => {
            if (data) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This username is taken in this room!',
                    background: "#26292B",
                    color: "#FFFFFF",
                    confirmButtonColor: '#3085d6',
                  })
            }
            else {
                navigate('/chat', { replace:true });
            }
        });
    }, [socket]);

    return (
        <div className="Home">
            <Container
                display="flex"
                alignItems="center"
                justify="center"
                css={{ minHeight: '100vh' }}
            >
                <Card css={{ mw: '420px', p: '20px' }}>
                <Text
                    size={24}
                    weight="bold"
                    css={{
                    as: 'center',
                    mb: '20px',
                    }}
                >
                    Chatto
                </Text>
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="md"
                    placeholder="Username"
                    onChange={e => setUserName(e.target.value)}
                    maxLength={10}
                />
                <Spacer y={1} />
                <Dropdown closeOnSelect='true'>
                    <Dropdown.Button flat>{room === "" ? "Rooms" : room}</Dropdown.Button>
                    <Dropdown.Menu aria-label='room selection' selectionMode='single' disallowEmptySelection selectedKeys={room} onSelectionChange={setRoom}>
                        <Dropdown.Item key="Gawr">Gawr</Dropdown.Item>
                        <Dropdown.Item key="Nana">Nana</Dropdown.Item>
                        <Dropdown.Item key="Zeta">Zeta</Dropdown.Item>
                        <Dropdown.Item key="Watson">Watson</Dropdown.Item>
                        <Dropdown.Item key="Kanaeru">Kanaeru</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Spacer y={1} />
                {
                    userName === "" || room === "" ? 
                        <Button disabled>Enter Chat!</Button> :
                    <Button onPress={ enterChat }>Enter Chat!</Button>
                }
                </Card>
            </Container>
        </div>
    )
}

export default Home;