const apiKey = "ba5aedaa8d39537007dde8ad1de134a1 ";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "&#176;c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km / hr";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        } else if (data.weather[0].main == "Drizzles") {
            weatherIcon.src = "img/drizzles.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        // document.querySelector(".weather").style.animation = "ease-in-out";
    }
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});
checkweather();