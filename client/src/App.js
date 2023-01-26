import './App.css';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <div className="App">
      <h1> HELLO WORLD! </h1>
    </div>
  );
}

export default App;
