
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/weather');
  const weatherData = await response.json();

  const weatherAlert = document.getElementById('weather');
  const currentWeather = weatherData.weather[0].main;
  weatherAlert.textContent = `${currentWeather}`;

  const icon = weatherData.weather[0].icon;
  const imageURL = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.innerHTML = `<img src=${imageURL}>`;
});
