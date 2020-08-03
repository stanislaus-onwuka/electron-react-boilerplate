import React from 'react';
import logo from './logo.svg';
import electronLogo from './electronjs-icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="react-logo" />
          <img src={electronLogo} className="App-logo" alt="elect-logo" />
        </div>
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
        <a
          className="App-link"
          href="https://www.electronjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Electron
        </a>
      </header>
    </div>
  );
}

export default App;
