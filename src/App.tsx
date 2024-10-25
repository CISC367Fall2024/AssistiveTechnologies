import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskInput } from './TaskBreakdown/TaskBreakdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is our CISC367 Project. Adding this to see if it deploys. Adding more here.
          Adding this after github history changes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TaskInput></TaskInput>
      </header>
    </div>
  );
}

export default App;
