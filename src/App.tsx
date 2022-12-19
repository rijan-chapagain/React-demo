import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const weatherDataType = [
  {
    "date": "2022-12-19T13:21:13.256Z",
    "temperatureC": 0,
    "temperatureF": 0,
    "summary": "string"
  }
]

function App() {
  useEffect(() => {
    fetch("https://localhost:7124/WeatherForecast")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        }
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
