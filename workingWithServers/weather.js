
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/weather');
  const weatherData = await response.json();

  const weatherAlert = document.getElementById('weather');
  const currentWeather = weatherData.weather[0].main;
  weatherAlert.textContent = `${currentWeather}`;
});
