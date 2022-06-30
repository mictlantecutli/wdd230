//This code is to get the year in the footer
let current_date = new Date();

document.querySelector(".year").innerHTML = `${current_date.getFullYear()}`

//This code is for the las modification of the document
document.querySelector(".date_updated").innerHTML = `last updated: ${document.lastModified}`

//This code is for the date in the header
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

//This code for the hamburger menu


const hambutton = document.querySelector('#ham');
const mainnav = document.querySelector('nav')

hambutton.addEventListener("click", function () {

  mainnav.classList.toggle("responsive")
});


//const banner = document.querySelector(".two");
//banner.style.display = "block";
//banner.style.backgroundImage = "url('https://mictlantecutli.github.io/wdd230/chamber/images/plantita_business.jpg')";

let d = new Date().getDay();
const pop = document.querySelector(".pop");
if (d === 1 || d === 2) {
  pop.style.display = "block"

}

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  pop.style.display = "none";

})


/////////////This is the code for the API//////////////

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const speedWind = document.querySelector('#speed')
const wChill = document.querySelector('chill')

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Pachuca&units=imperial&appid=4b295a19abeeb2912f33ca4087040e34';


async function apiFetch(apiUrl) {

  const response = await fetch(apiUrl);
  if (response.ok) {
    const data = await response.json();
    console.log(data); // this is for testing the call
    displayResults(data);
  } else {
    throw Error(await response.text());
  }

}

apiFetch(requestURL)

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = desc

  speedWind.innerHTML = `${weatherData.wind.speed}`


  if (weatherData.main.temp.toFixed(0) < 50 && weatherData.wind.speed > 3) {
    let wChill = 35.74 + 0.6215 * weatherData.main.temp.toFixed(0) - 35.75 * Math.pow(weatherData.wind.speed, .16) + .4275 * weatherData.main.temp.toFixed(0) * Math.pow(weatherData.wind.speed, .16);
    document.getElementById("chill").innerText = parseInt(wChill);
  } else {
    document.getElementById("chill").innerText = "N/A";
  }

 
}






///let temperatureCelsius = parseFloat(document.getElementById("temp").innerText);
//let speedWind = parseFloat(document.getElementById("speed").innerText);

///let temperatureFar = (temperatureCelsius * 1.8) + 32;
///let speedMph = speedWind * 0.62137

//let temperatureFar = parseFloat(document.getElementById("temp").innerText);


