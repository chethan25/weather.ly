document.getElementById("search-btn").addEventListener("click",(function(){const e=document.querySelector("#search-input");(async function(){try{const e="fcc75fb84b746756bc6f68b8a1268cbf",a=document.getElementById("search-input").value.toLowerCase().trim(),s=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${e}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(e){console.log(e)}})().then((e=>{const a=document.querySelector(".container"),s=document.querySelector(".temp"),t=document.querySelector(".city-name"),r=document.querySelector(".weather-desc i"),n=document.querySelector(".weather-desc p"),c=parseInt(e.main.temp-273.15),o=e.name,l=e.weather[0].main;switch(s.innerHTML=`${c}<span>°</span>`,t.innerText=o,console.log(r),l){case"Thunderstorm":a.style.backgroundImage="url('./images/storm.jpg')",r.className="fas fa-bolt fa-3x",n.innerText="Stormy";break;case"Drizzle":a.style.backgroundImage="url('./images/rain.jpg')",r.className="fas fa-cloud-showers-heavy fa-3x",n.innerText="Rainy";break;case"Rain":a.style.color="black",a.style.backgroundImage="url('./images/rain.jpg')",r.className="fas fa-cloud-showers-heavy fa-3x",n.innerText="Rainy";break;case"Snow":a.style.color="#black",a.style.backgroundImage="url('./images/snow.jpg')",r.className="fas fa-snowflake fa-3x",n.innerText="Snowy";break;case"Mist":a.style.backgroundImage="url('./images/mist.jpg')",r.className="fas fa-stream fa-3x",n.innerText="Misty";break;case"Clear":a.style.backgroundImage="url('./images/clear.jpg')",r.className="fas fa-sun fa-3x",n.innerText="Sunny";break;case"Clouds":a.style.backgroundImage="url('./images/cloudy.jpg')",r.className="fas fa-cloud fa-3x",n.innerText="Cloudy"}})),e.value=""}));