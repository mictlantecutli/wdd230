var datenumeric = [
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31"
];
var monthnumeric = [
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12"
];

//here I obtained the date of modified document
var modified_object = document.lastModified;
var modified = new Date(modified_object);

//Then I obtained the numeric formmat from the arrays by the index
//of the every date element(date, month, year)
var dateNum = datenumeric[modified.getDate()-1];
var monthNum = monthnumeric[modified.getMonth()];
var year = modified.getFullYear();

//I formmated the modified date of the document by template
const fulldate = `${dateNum}/${monthNum}/${year} ${modified.getHours()}:${modified.getMinutes()}:${modified.getSeconds()}`;

//using getElementById
document.getElementById("date_time").textContent = fulldate;


