const apiKey = "dfe2aa556109ea704928dec09dfc1283"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const cityname = document.querySelector(".cityname")
const searchBtn = document.querySelector(".search button")
const hotiinNer = document.querySelector(".city")
const degree = document.querySelector(".temp")
const weatherIcon = document.querySelector(".weather-icon")
const windspeed = document.querySelector(".windspeed")
const chiigshel = document.querySelector(".chiigshel")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json()
    hotiinNer.innerHTML = data.name
    degree.innerHTML = data.main.temp + "℃"

   windspeed.innerHTML = data.wind.speed
   chiigshel.innerHTML = data.main.humidity

    if (data.weather [0].main === "Rain") {
        weatherIcon.src = "zurag/rain.png"
    } else if (data.weather [0].main === "Snow") {
        weatherIcon.src = "zurag/snow.png"
    }
    else if (data.weather [0].main === "Clear") {
        weatherIcon.src = "zurag/clear.png"
    }
    else if (data.weather [0].main === "Drizzle") {
        weatherIcon.src = "zurag/drizzle.png"
    }
    else if (data.weather [0].main === "Mist") {
        weatherIcon.src = "zurag/mist.png"
    }

    console.log(data)

}
searchBtn.addEventListener("click", ()=> {
    checkWeather(cityname.value)
    console.log(cityname.value)
})
   