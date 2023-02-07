import React from 'react';
import './App.css';
import socketIO from 'socket.io-client';
import { createTheme, NextUIProvider} from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';

const socket = socketIO.connect('http://localhost:4000');

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {

    },
    space: {},
    fonts: {}
  }
})

const App = () => {
    return (
        <NextUIProvider theme={theme}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home socket={socket} />}></Route>
                        <Route path="/Gawr" element={<ChatPage socket={socket} roomName={"Gawr"} />}></Route>
                        <Route path="/Nana" element={<ChatPage socket={socket} roomName={"Nana"}/>}></Route>
                        <Route path="/Zeta" element={<ChatPage socket={socket} roomName={"Zeta"}/>}></Route>
                        <Route path="/Watson" element={<ChatPage socket={socket} roomName={"Watson"}/>}></Route>
                        <Route path="/Kanaeru" element={<ChatPage socket={socket} roomName={"Kanaeru"}/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </NextUIProvider>
    );
}

export default App;
