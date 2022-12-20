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
  const [weatherData, setWeatherData] = useState(weatherDataType);
  useEffect(() => {
    // fetch("https://localhost:7124/WeatherForecast")
    fetch("https://rijan-react-demo-api.azurewebsites.net/WeatherForecast")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setWeatherData(result);
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
        <table>
          <thead>
            Weathjer Data from azure api
          </thead>
          <tbody>
            <tr>{weatherData[0].date}</tr>
            <tr>{weatherData[0].temperatureC}</tr>
            <tr>{weatherData[0].temperatureF}</tr>
            <tr>{weatherData[0].summary}</tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
