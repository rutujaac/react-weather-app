import React, { useEffect } from 'react'
import axios from 'axios'

const WeatherDetails = ({weather, setWeather, location, setLocation, bgStatus, setBGStatus}) => {

    const api = {
        key: "bcb75075a3fdc70892367912b3b5e100",
        baseURL: "https://api.openweathermap.org/data/2.5/weather?"
    }

    const setLocationString = (event) => {
        setLocation(event.target.value)
        console.log(location)
    }

    const getWeatherForecast = () => {
        axios.get(`${api.baseURL}q=${location}&appid=${api.key}&units=metric`)
        .then(result => setWeather(result.data))
        .catch(error => console.log(error))
    }

    return (
        <div className={weather.weather && weather.weather[0].main == "Clouds" ? "rainy-bg" : "cold-bg"}>
            <div className="search-box">
            <input type="text" className="search-input" onChange={setLocationString}/>
            <button className="search-btn" onClick={getWeatherForecast}>Search</button>
            </div>
            {weather.main && weather.main.temp ? <div className="list-details">
                <p>Weather Details</p>
                <table>
                    <tr>
                        <td>Temperature</td>
                        <td>{weather.main.temp} °C</td>
                    </tr>
                    <tr>
                        <td>Feels Like</td>
                        <td>{weather.main.feels_like} °C</td>
                    </tr>
                    <tr>
                        <td>Pressure</td>
                        <td>{weather.main.pressure}</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{weather.main.humidity}</td>
                    </tr>
                    <tr>
                        <td>Max Temp</td>
                        <td>{weather.main.temp_max} °C</td>
                    </tr>
                </table>
                <p>Wind</p>
                <table>
                    <tr>
                        <td>Speed</td>
                        <td>{weather.wind.speed}</td>
                    </tr>
                    <tr>
                        <td>Degrees</td>
                        <td>{weather.wind.deg}</td>
                    </tr>
                    <tr>
                        <td>Gust</td>
                        <td>{weather.wind.gust}</td>
                    </tr>
                </table>
            </div> : "" }
        </div>
    )
}

export default WeatherDetails
