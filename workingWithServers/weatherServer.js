import { config } from 'dotenv';
config();
import express from 'express';
import fetch from 'node-fetch';


const app = express();
const port = 3000;

// Fetch Location Data
async function fetchGeoData(zipCode, countryCode) {
  const apiKey = process.env.MYKEY;
  const GeoURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`;

  try {
    const response = await fetch(GeoURL);
    return await response.json();
  } catch (error) {
    console.error('Uh oh, error fetching location data: ', error);
  }
}

// Fetch Weather Data
async function fetchWeatherData(lat, lon) {
  const apiKey = process.env.MYKEY;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await fetch(weatherURL);
    return await response.json();
  } catch (error) {
    console.error('Uh oh, could not fetch weather data: ', error);
  }
}

app.get('/weather', async (req, res) => {
  const zipCode = process.env.ZIPCODE;
  const countryCode = 'US';
  const geoData = await fetchGeoData(zipCode, countryCode);

  if (geoData) {
    const weatherData = await fetchWeatherData(geoData.lat, geoData.lon);
    console.log(weatherData);
    res.json(weatherData);
  } else {
    res.status(500).send("Error fetching weather data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
