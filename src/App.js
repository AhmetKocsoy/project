import logo from './logo.svg';
import './App.css';
import Deneme from "./Deneme";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Deneme baslik="Başlık 01">
          <h3>Başlık 3</h3>
          <p>Paragraf 01</p>
        </Deneme>
        <Deneme baslik="Başlık 02" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
