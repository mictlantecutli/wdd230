
var hoy = new Date();

document.getElementById("date_time").textContent = `${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()} ${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;


