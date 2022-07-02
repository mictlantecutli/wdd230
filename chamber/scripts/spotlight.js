const URLbusiness = 'https://mictlantecutli.github.io/wdd230/chamber/jason/data.json';
const directoryBox = document.querySelector('.holderspot');


async function getDataCompanies(URLbusiness) {
  const response = await fetch(URLbusiness);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();

    highLevelCompanies(data);
  }
};



function highLevelCompanies(datos) {

  let listHighlevel = [];
  datos.directoryOfBusiness.forEach(company => {
    if ((company.membership == "Gold Level" || company.membership == "Silver Level")) {
      listHighlevel.push(company);
    };
  });


  for (let i = listHighlevel.length - 1; i > 2; i--) {
    listHighlevel.splice(Math.floor(Math.random() * listHighlevel.length), 1);
  };



  listHighlevel.forEach((company) => {
    let spot = document.createElement("div");
    let nameBusiness = document.createElement("h2");
    let containerpic = document.createElement("picture");
    let logo = document.createElement("img");
    let email = document.createElement("p");
    let phone = document.createElement("p");
    let web = document.createElement("p");
    let spotmsj = document.createElement("h3")
    let lineHorizontal = document.createElement("hr")

    spot.setAttribute("class", "spot");
    nameBusiness.innerHTML = `${company.name}`
    web.innerHTML = `${company.website}`
    phone.innerHTML = `${company.phone}`
    spotmsj.innerHTML = `${company.msjSpot}`

    logo.setAttribute('src', `https://mictlantecutli.github.io/wdd230/chamber/directory/images/${company.logoImage}`);
    logo.setAttribute('alt', `Logo of: ${company.name}`);
    logo.setAttribute('loading', 'lazy');





    spot.appendChild(nameBusiness);

    spot.appendChild(logo);
    spot.appendChild(spotmsj);
    spot.appendChild(lineHorizontal)
    spot.appendChild(web);
    spot.appendChild(phone);


    directoryBox.appendChild(spot);


  });



  results = listHighlevel;
  console.log("first: ", results);
}










getDataCompanies(URLbusiness);