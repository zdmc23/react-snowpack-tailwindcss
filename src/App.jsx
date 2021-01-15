import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="m-16">
          Edit <code>src/App.jsx</code> and save to reload.
        </div>
        <div>
          Page has been open for <code>{count}</code> seconds.
        </div>
        <div class="box-content h-96 w-3/4 p-2 border-2"></div>
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZZLearn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
