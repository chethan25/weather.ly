const searchBtn = document.getElementById('search-btn');
const searchInput = document.querySelector('#search-input');

// populate the UI
function populateUI() {
  const weatherDataResponse = getWeatherData();

  weatherDataResponse.then((weatherData) => {
    const container = document.querySelector('.container');
    const tempEle = document.querySelector('.temp');
    const cityNameEle = document.querySelector('.city-name');
    const weatherIconEle = document.querySelector('.weather-desc i');
    const weatherDescEle = document.querySelector('.weather-desc p');

    const tempCelsius = parseInt(weatherData.main.temp - 273.15);
    const cityName = weatherData.name;
    const weatherDesc = weatherData.weather[0].main;

    tempEle.innerHTML = `${tempCelsius}<span>°</span>`;
    cityNameEle.innerText = cityName;

    console.log(weatherIconEle);

    switch (weatherDesc) {
      case 'Thunderstorm':
        container.style.backgroundImage = "url('./images/storm.jpg')";
        weatherIconEle.className = 'fas fa-bolt fa-3x';
        weatherDescEle.innerText = 'Stormy';
        break;
      case 'Drizzle':
        container.style.backgroundImage = "url('./images/rain.jpg')";
        weatherIconEle.className = 'fas fa-cloud-showers-heavy fa-3x';
        weatherDescEle.innerText = 'Rainy';
        break;
      case 'Rain':
        container.style.backgroundImage = "url('./images/rain.jpg')";
        weatherIconEle.className = 'fas fa-cloud-showers-heavy fa-3x';
        weatherDescEle.innerText = 'Rainy';
        break;
      case 'Snow':
        container.style.backgroundImage = "url('./images/snow.jpg')";
        weatherIconEle.className = 'fas fa-snowflake fa-3x';
        weatherDescEle.innerText = 'Snowy';
        break;
      case 'Mist':
        container.style.backgroundImage = "url('./images/mist.jpg')";
        weatherIconEle.className = 'fas fa-stream fa-3x';
        weatherDescEle.innerText = 'Misty';
        break;
      case 'Clear':
        container.style.backgroundImage = "url('./images/clear.jpg')";
        weatherIconEle.className = 'fas fa-sun fa-3x';
        weatherDescEle.innerText = 'Sunny';
        break;
      case 'Clouds':
        container.style.backgroundImage = "url('./images/cloudy.jpg')";
        weatherIconEle.className = 'fas fa-cloud fa-3x';
        weatherDescEle.innerText = 'Cloudy';
        break;

      default:
        break;
    }
  });
  searchInput.value = '';
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

    const weatherDataJSON = await response.json();

    return weatherDataJSON;
  } catch (e) {
    console.log(e);
  }
}

searchBtn.addEventListener('click', populateUI);
