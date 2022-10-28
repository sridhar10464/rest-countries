// fetch("https://restcountries.com/v3.1/all")
// .then((data) => data.json())
// .then((countries) => console.log(countries))
// .catch((errMsg) => console.log( "An error occured:", errMsg));

// const country = {
//     flag: "https://flagcdn.com/in.svg",
//     name: "India",
//     population: "1380004385",
//     region: "Asia",
//     capital: "New Delhi",
// };

// document.body.innerHTML = `<div class="country-container">
// <img src="${country.flag}" alt="indian flag"/>
// <div class="content-container">
//   <h2>${country.name}</h2>
//   <p><span>Population:</span> ${country.population} </p>
//   <p><span>Region:</span> ${country.region} </p>
//   <p><span>Capital:</span> ${country.capital} </p>
// </div>
// </div>`;

const countries = [
    {
        flag: "https://flagcdn.com/in.svg",
        name: "India",
        population: "1380004385",
        region: "Asia",
        capital: "New Delhi",
    },
    {
        flag: "https://flagcdn.com/in.svg",
        name: "Germany",
        population: "1380004385",
        region: "Asia",
        capital: "New Delhi",
    },
    {
        flag: "https://flagcdn.com/in.svg",
        name: "Spain",
        population: "1380004385",
        region: "Asia",
        capital: "New Delhi",
    },
]

function createCountries(countries) {
countries.forEach((country) => {
    document.body.innerHTML += `<div class="country-container">
    
 <img src="${country.flags.svg}" alt="indian flag"/>
 <div class="content-container">
   <h2>${country.name.common}</h2>
   <p><span>latlng:</span> ${country.latlng} </p>
   <p><span>Region:</span> ${country.region} </p>
   <p><span>Capital:</span> ${country.capital} </p>
   
   <div class="input-group">
   <button class="btn btn-primary" id="search_button">Click for weather</button>
   </div>
 </div>
 </div>`;
}) ;
}

// creatCountries(countries);

fetch("https://restcountries.com/v3.1/all")
.then((data) => data.json())
.then((countries) => createCountries(countries))
.catch((errMsg) => console.log( "An error occured:", errMsg));

const P1 = fetch("https://restcountries.com/v3.1/all");

// const P2 = fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")

// Promise.all([P1, P2])

var placesAutocomplete = places({
    apiKey: "AIzaSyAxjM0mqHXT1jeFLNtsbe7GJAnMoAD-gmg",
    container: document.querySelector('#city')
});


const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

// const getWeatherData = city => {
const P2 = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    P2(inputCity)
    // getWeatherData(inputCity)
})

const updateUI = data => {
    document.getElementById('show_city').innerText = data.name || "Unknown Location!";
    document.getElementById('show_temperature').innerText = data.main.temp;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}

Promise.all([P1, P2])

