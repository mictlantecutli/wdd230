//This code is to get the year in the footer
let current_date = new Date();

document.querySelector(".year").innerHTML = `${current_date.getFullYear()}`

//This code is for the las modification of the document
document.querySelector(".date_updated").innerHTML = `last updated: ${document.lastModified}`

//This code is for the date in the header
//const datefield = document.querySelector(".date");
//const now = new Date();
//const fulldate = new Intl.DateTimeFormat("en-US", {
//  dateStyle: "full"}).format(now);
//datefield.innerHTML = `<em>${fulldate}</em>`;

//This code for the hamburger menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
