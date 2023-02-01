import React from 'react';
import { Navigate } from 'react-router-dom';
import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Container,
    Dropdown
    } from '@nextui-org/react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            room: "",
            enter: false,
        }
    }

    setRoom = (e) => {
        this.setState({room: e})
    }

    enterChat = () => {
        this.setState({ enter: true })
    }

    render () {
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
                        onChange={e => this.setState({ userName: e.target.value })}
                    />
                    <Spacer y={1} />
                    <Dropdown closeOnSelect='true'>
                        <Dropdown.Button flat>{this.state.room === "" ? "Rooms" : this.state.room}</Dropdown.Button>
                        <Dropdown.Menu aria-label='room selection' selectionMode='single' disallowEmptySelection selectedKeys={this.state.room} onSelectionChange={this.setRoom}>
                            <Dropdown.Item key="Gawr">Gawr</Dropdown.Item>
                            <Dropdown.Item key="Nana">Nana</Dropdown.Item>
                            <Dropdown.Item key="Zeta">Zeta</Dropdown.Item>
                            <Dropdown.Item key="Watson">Watson</Dropdown.Item>
                            <Dropdown.Item key="Kanaeru">Kanaeru</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Spacer y={1} />
                    <Button onClick={ this.enterChat }>Enter Chat!</Button>
                    </Card>
                </Container>
                {
                    this.state.enter && <Navigate to="/chat" replace={true} />
                }
            </div>
        )
    }
}

export default Home;