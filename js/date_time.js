
var modified_object = document.lastModified;
var modified = new Date(document.lastModified);


document.getElementById("date_time").textContent = `${modified.getDate()}/${modified.getMonth() + 1}/${modified.getFullYear()} ${modified.getHours()}:${modified.getMinutes()}:${modified.getSeconds()}`;


