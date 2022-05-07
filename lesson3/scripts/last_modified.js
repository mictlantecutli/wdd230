let current_date = new Date();

document.querySelector(".year").innerHTML = `${current_date.getFullYear()}`
document.querySelector(".date_updated").innerHTML = `last updated: ${document.lastModified}`