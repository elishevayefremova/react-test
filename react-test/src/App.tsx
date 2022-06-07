import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {data.name} {data.surname}
        </h1>
        <h2>{data.age} years old</h2>
        <h3>{data.current_city}</h3>
        <p>{data.bio}</p>
      </header>
    </div>
  );
}

export default App;
