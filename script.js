const apiurl = 'https://restcountries.com/v3.1/all';
let countriesData = [];
const searchBtn = document.getElementById("search-btn");
const countryInp = document.getElementById("country-inp");
const nigeriaBtn = document.getElementById("nigeria");




function displayCountry(event,name) {

    
    //const data = countriesData.filter(data => data.name == countryName);
    window.location.href = "../html/country.html";


}
function searchCountry(event) {

    const countryName = countryInp.value;
    const data = countriesData.filter(data => data.name == countryName);
    console.log(data)


}

function loaddata() {

    fetch(apiurl, {
        method: 'GET',
        headers: {
            //'X-RapidAPI-Key': 'c7fed0146fmshd2356703b9d627cp1ef5dcjsn82d445bcc5dc',
            //'X-RapidAPI-Host': 'country-facts.p.rapidapi.com',
            'Accept': 'application/json'
        }

    }).then(res => res.json())
        .then(jsonData => {

            for (let i = 0; i < jsonData.length; i++) {
                const name = jsonData[i].name.common;
                const officialName = jsonData[i].name.official;
                const capital = jsonData[i].capital;
                const population = jsonData[i].population;
                const area = jsonData[i].area;
                const region = jsonData[i].region;
                const subRegion = jsonData[i].subregion;
                const currencies = jsonData[i].currencies;
                const latitude = jsonData[i].latlng[0];
                const longitude = jsonData[i].latlng[1];
                const flag = jsonData[i].flags.png;
                const languages = jsonData[i].languages;
                const map = jsonData[i].maps.openStreetMaps;
                const timezone = jsonData[i].timezones[0];

                countriesData.push({
                    "name": name,
                    "officialName": officialName,
                    "capital": capital,
                    "population": population,
                    "area": area,
                    "region": region,
                    "subRegion": subRegion,
                    "currencies": currencies,
                    "latitude": latitude,
                    "longitude": longitude,
                    "flag": flag,
                    "languages": languages,
                    "map": map,
                    "timezone": timezone
                })
            }

            const algeriaData = countriesData.filter(data => data.name == "Algeria");
            const kenyaData = countriesData.filter(data => data.name == "Kenya");
            const mauritiusData = countriesData.filter(data => data.name == "Mauritius");
            const nigeriaData = countriesData.filter(data => data.name == "Nigeria");


            //console.log(algeriaData)
            //console.log(kenyaData)
            //console.log(mauritiusData)
            // console.log(nigeriaData)
        })



    searchBtn.addEventListener('click', searchCountry);

    nigeriaBtn.addEventListener('click', displayCountry);
}

window.onload = loaddata;

//console.log(countriesData)

function populateFields(countryData) {
    const countryAl = document.getElementById("gg");
    countryAl
}







