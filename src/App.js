import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');

    const fetchWeather = async (location) => {
        try {
            const response = await axios.get('http://localhost:5000/weather', {
                params: { location },
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude);
            });
        }
    }, []);
    
    const fetchWeatherByCoords = async (lat, lon) => {
        try {
            const response = await axios.get('http://localhost:5000/weather', {
                params: { lat, lon },
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSearch = () => {
        fetchWeather(location);
    };

    return (
        <div className="App">
            <LocationInput 
                location={location}
                onLocationChange={handleLocationChange}
                onSearch={handleSearch}
            />
            {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </div>
    );
    

}

export default App;
