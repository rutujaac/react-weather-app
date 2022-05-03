import React from 'react'

const WeatherBG = ({weather}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"]
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const day = daysOfTheWeek[currentDate.getDay()];
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();

    const bgImage = true;
    return (
        <div className={weather.weather && weather.weather[0].main == "Clouds" ? "rainy-weather" : "cold-weather"}>
            {weather.main && weather.main.temp ? <div className="text-image">
                <p className="temp-text">{weather.main.temp} °C</p>
                <h2 className="location-text">{`${hour}:${min} - ${day} ${date} ${month}, ${year}`}</h2>
                <h2 className="location-text">{weather.weather[0].main}</h2>
                {/* <h2 className="location-text">{`${hour} : ${min}`}</h2>
                <h2 className="location-text">Pune</h2> */}
            </div> : ""}
        </div>
    )
}

export default WeatherBG
