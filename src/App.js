import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tui là Hiếu Lương nè! ^^
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nhấn vào đây để theo dõi github tui nè!
        </a>
        <p/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sau này chỗ này sẽ là CV page nhé!
        </a>
      </header>
    </div>
  );
}

export default App;
