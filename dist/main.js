(()=>{const e=document.getElementById("search-btn"),a=document.querySelector("#search-input");e.addEventListener("click",(function(){(async function(){try{const e="fcc75fb84b746756bc6f68b8a1268cbf",a=document.getElementById("search-input").value.toLowerCase().trim(),t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${e}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(e){console.log(e)}})().then((e=>{const a=document.querySelector(".container"),t=document.querySelector(".temp"),n=document.querySelector(".city-name"),r=document.querySelector(".weather-desc i"),s=document.querySelector(".weather-desc p"),c=parseInt(e.main.temp-273.15),o=e.name,u=e.weather[0].main;switch(t.innerHTML=`${c}<span>°</span>`,n.innerText=o,u){case"Thunderstorm":a.style.backgroundImage="url('./images/storm.jpg')",r.className="fas fa-bolt fa-3x",s.innerText="Stormy";break;case"Drizzle":case"Rain":a.style.backgroundImage="url('./images/rain.jpg')",r.className="fas fa-cloud-showers-heavy fa-3x",s.innerText="Rainy";break;case"Snow":a.style.backgroundImage="url('./images/snow.jpg')",r.className="fas fa-snowflake fa-3x",s.innerText="Snowy";break;case"Mist":a.style.backgroundImage="url('./images/mist.jpg')",r.className="fas fa-stream fa-3x",s.innerText="Misty";break;case"Clear":a.style.backgroundImage="url('./images/clear.jpg')",r.className="fas fa-sun fa-3x",s.innerText="Sunny";break;case"Clouds":a.style.backgroundImage="url('./images/cloudy.jpg')",r.className="fas fa-cloud fa-3x",s.innerText="Cloudy"}const l=document.querySelector(".cloudy-value"),m=document.querySelector(".humidity-value"),i=document.querySelector(".wind-value"),d=document.querySelector(".pressure-value");l.innerText=`${e.clouds.all}%`,m.innerText=`${e.main.humidity}%`,i.innerText=`${e.wind.speed} km/h`,d.innerText=`${e.main.pressure} mm`})),a.value=""}))})();