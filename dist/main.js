document.getElementById("search-btn").addEventListener("click",(function(){const t=async function(){try{const t="fcc75fb84b746756bc6f68b8a1268cbf",e=document.getElementById("search-input").value.toLowerCase().trim(),a=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${t}`);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(t){console.log(t)}}();console.log(t)}));