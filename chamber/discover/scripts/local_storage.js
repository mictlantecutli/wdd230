// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

//get the last time the user visit the web site
let numMills = Number(window.localStorage.getItem("mills-ls"))

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);


if (numMills !== 0){
  daysLast = (Date.now() - numMills) / 86400000
  todayDisplay.textContent = daysLast
}else{
  todayDisplay.textContent =`This is your first visit!`;
}

// show todays date.
dateMills = Date.now();

//set the num of mills of the visit of the user is saved in mills-ls 
localStorage.setItem("mills-ls", dateMills)
