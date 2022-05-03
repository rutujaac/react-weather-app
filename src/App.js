import logo from './logo.svg';
import './App.css';
import WeatherDetails from './components/WeatherDetails';
import WeatherBG from './components/WeatherBG';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const [bgStatus, setBGStatus] = useState("");

  return (
    <div className="app">
      <WeatherDetails weather={weather} setWeather={setWeather} location={location} setLocation={setLocation} bgStatus={bgStatus} setBGStatus={setBGStatus} />
      <WeatherBG weather={weather} bgStatus={bgStatus} />
    </div>
  );
}

export default App;
