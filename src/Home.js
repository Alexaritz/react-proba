import React, { useState } from 'react';
import logo from './logo.svg';



function Home() {
  const [count, setCount] = useState(0);


  return (
    <div className="App-body">
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
    <p>Contador: {count}</p>
    <button onClick={() => setCount(count + 1)}>Incrementar</button>

  </div>
  );
}

export default Home;