const countries = "https://restcountries.com/v3.1/all";
const countryName = document.getElementById("countryName");
const button = document.getElementById("getCountryinfo");

button.addEventListener("click", function getCountryInfo(){
    alert("pls work");
fetchCountries("https://restcountries.com/v3.1/all");
});

async function fetchCountries(url) {
    try {
      alert("pls work");
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const countries = response.json();
      const country = document.getElementById("countryName");
      alert(response.json());
        alert(JSON.parse(response.json()));
      findInfo(countries,country.value);
    } catch (error) {
      alert("Failed");
    }
  }
  
function findInfo(countries,countryName){
    alert("pls work");
   
for(let i = 0; i<countries.length; i++){
    alert("pls work");
if(countries[i].names.common==countryName || countries[i].names.common == countryName){
getInfo(countries[i]);
getNeighbours(countries[i],countries);
  break;
}
else{
  continue;
}
}

}

function getInfo(country){
    alert("pls work");
const art = document.getElementById("countryInfo");
const Capital = document.createElement('p');
const Population = document.createElement('p');
const Region = document.createElement('p');
const Flag = document.createElement('img');

Capital.textContent = 'Capital:'+country.name.common;
Population.textContent = 'Population:'+country.population;
Region.textContent = 'Region:'+country.region;
Flag.src = country.flag.png;

art.appendChild(Capital);
art.appendChild(Population);
art.appendChild(Region);
art.appendChild(Flag);
}

function getNeighbours(country,countries){
if(country.borders.length == 0){
//no neighbours
}
else{
const art2 = document.getElementById("BorderingCountries");
for(let i = 0;i<country.borders.length;i++){

parseNieghbour(country.borders[i],countries,art2);

}
}
}

function parseNieghbour(country,countries,art){

  for(let i = 0; i<countries.length; i++){
    if(countries[i].cca3 = country){
      const cName = document.createElement('p');
      const flag = document.createElement('img');

      cName.textContent=countries[i].name.common;
      flag.src = countries[i].flags.png;
      art.appendChild(cName);
      art.appendChild(flag);
      break;
    }
    e
    }
}

