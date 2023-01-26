import './App.css';
import socketIO from 'socket.io-client';
import { createTheme, NextUIProvider} from "@nextui-org/react"
import Home from './components/Home';

//const socket = socketIO.connect('http://localhost:4000');

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {

    },
    space: {},
    fonts: {}
  }
})

function App() {
  return (
    <NextUIProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </NextUIProvider>
  );
}

export default App;
