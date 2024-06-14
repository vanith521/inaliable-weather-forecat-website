import React from 'react';

function WeatherDisplay({ weatherData }) {
    return (
        <div className="weather-display">
            <h2>Weather in {weatherData.city.name}</h2>
            {weatherData.list.slice(0, 5).map((forecast, index) => (
                <div key={index}>
                    <p>{forecast.dt_txt}</p>
                    <p>Temperature: {forecast.main.temp} °C</p>
                    <p>Weather: {forecast.weather[0].description}</p>
                </div>
            ))}
        </div>
    );
}

export default WeatherDisplay;
