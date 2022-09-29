const API_KEY = "340f3c2e2fb9a2a0511cfd105d3287ac";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
   fetch(url).then((response) => response.json())
   .then((data) => {
    const city = document.querySelector("#weather span:first-child")
    const weatherContainer = document.querySelector("#weather span:last-child")
    console.log(data);
    city.innerText = `Location: ${data.name}, ${data.sys.country}`
    weatherContainer.innerText = `Weather: ${data.weather[0].main} / ${data.main.temp}℃`
   });
}

function onGeoError(){
    const city = document.querySelector("#weather span:first-child")
    city.innerText =("Cant't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)