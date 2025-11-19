let inputBox = document.querySelector(".inputBox")
let searchButton = document.querySelector("#search-button")
let locationNotFound = document.querySelector(".location-not-found")
let weather_img = document.querySelector(".weather-img")
let temperature = document.querySelector(".temperature")
let description = document.querySelector(".description");
let humidity = document.querySelector("#humidity")
let wind_speed = document.querySelector("#wind-speed")
let weather_body = document.querySelector(".weather-body")

weather_body.style.display = "flex"
weather_img.src = "./assets/cloud.png";
locationNotFound.style.display = "none";
temperature.innerHTML = "";
description.innerHTML = "";
humidity.innerHTML = "";
wind_speed.innerHTML = "";

async function checkweather(city) {
    const api_Key = "90b64e09996cfc2eed3694e8cba4815f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`;

    const data = await fetch(`${url}`)
    const weather_data = await data.json();

    if (weather_data.cod === '404') {
        locationNotFound.style.display = "flex";
        weather_body.style.display = "none";
        console.error("error")
        return;
    }

    locationNotFound.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round((weather_data.main.temp) - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    console.log("type :", weather_data.weather[0].main)
    switch (weather_data.weather[0].main) {
        case "Clouds":
            weather_img.src = "./assets/cloud.png";
            break;
        case "Clear":
            weather_img.src = "./assets/clear.png";
            break;
        case "Rain":
            weather_img.src = "./assets/rain.png";
            break;
        case "Mist":
            weather_img.src = "./assets/mist.png";
            break;
        case "Snow":
            weather_img.src = "./assets/snow.png";
            break;
    }
    console.log("Weather Data", weather_data)

}

searchButton.addEventListener("click", () => {
    checkweather(inputBox.value)
})