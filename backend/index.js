const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;
const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

app.use(cors());

app.get('/weather', async (req, res) => {
    const { location } = req.query;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                q: location,
                units: 'metric',
                appid: API_KEY,
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
