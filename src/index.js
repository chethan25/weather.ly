const searchBtn = document.getElementById('search-btn');

// populate the UI
function populateUI() {
  const weatherData = getWeatherData();
  console.log(weatherData);
}

// get weather data
async function getWeatherData() {
  try {
    const APIKEY = 'fcc75fb84b746756bc6f68b8a1268cbf';
    const searchInput = document
      .getElementById('search-input')
      .value.toLowerCase()
      .trim();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${APIKEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const weatherData = await response.json();

    return weatherData;
  } catch (e) {
    console.log(e);
  }
}

searchBtn.addEventListener('click', populateUI);
