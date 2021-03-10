import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [joke, setJoke] = useState('');

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    setJoke('');
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      }
    })
      .then(res => {
        setJoke(res.data.joke);
      })
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Jokes</h1>
      </header>
      <section className="app-content">
        <p>{joke}</p>
      </section>
      <section>
        <button onClick={refresh} disabled={joke.length === 0}>Ha ha.  Tell me more</button>
      </section>
    </div >
  );
}

export default App;
