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

hambutton.addEventListener("click", function(){
  
  mainnav.classList.toggle("responsive")
});


//const banner = document.querySelector(".two");
//banner.style.display = "block";
//banner.style.backgroundImage = "url('https://mictlantecutli.github.io/wdd230/chamber/images/plantita_business.jpg')";

let d = new Date().getDay();
const pop = document.querySelector(".pop");
if (d === 1 || d === 2){
  pop.style.display = "block"

}

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  pop.style.display = "none";
  
})


/************************THIS CODE NOT WORK FOR THIS PAGE*******************************/
//let temperatureCelsius = parseFloat(document.getElementById("temp").innerText);
//let speedWind = parseFloat(document.getElementById("speed").innerText);




//let temperatureFar = (temperatureCelsius * 1.8) + 32;
//let speedMph = speedWind * 0.62137

//if (temperatureFar < 51 && speedMph > 3) {
//    let wChill = 35.74 + 0.6215 * temperatureFar - 35.75 * Math.pow(speedMph, .16) + .4275 * temperatureFar * Math.pow(speedMph, .16);
//    document.getElementById("chill").innerText = parseInt(wChill);
//}else{
//    document.getElementById("chill").innerText = "N/A";
//}


