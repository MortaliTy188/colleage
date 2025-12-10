import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [text, setText] = useState("");

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Backspace') {
      setText(prevText => prevText.slice(0, -1));
    } else if (event.key.length === 1 || event.key === ' ') {
      setText(prevText => prevText + event.key);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, try to type something</h1>
        <div>
          {text}
          <span className="blinking-cursor">|</span>
        </div>
      </header>
    </div>
  );
}

export default App;
