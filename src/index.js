const searchBtn = document.getElementById('search-btn');

async function getWeatherData() {
  const APIKEY = 'fcc75fb84b746756bc6f68b8a1268cbf';
  const searchInput = document
    .getElementById('search-input')
    .value.toLowerCase()
    .trim();

  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${APIKEY}`
  );

  return weatherData;
}

searchBtn.addEventListener('click', getWeatherData);
