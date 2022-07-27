import logo from './logo.svg';
import Ronaldo from "./images/ronaldo.jpg"
import './App.css';
import Menu from "./menu.js"

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={Ronaldo} className="App-logo" alt="logo" />
        <p>
          football tutorials

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
