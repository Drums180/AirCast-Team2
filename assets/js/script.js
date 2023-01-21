$(function () {
  // VARIABLES FOR FUNCTION TO RETRIEVE DATA FROM DATABASE
  var originInput;
  var airportName;
  var airportLocation;

  // VARIABLES FOR SKYSCANNER DATABASE
  var city = "monterrey"
  var airportCode;
  var airportName;
  var airportLocation;

  // VARIABLES FOR SKYSCANNER FLIGHT SEARCH
  var requestUrlSkyScanner = "https://skyscanner50.p.rapidapi.com/api/v1/searchFlights?origin=" + origin + "&destination=" + destin + "&date=" + date;
  var origin;
  var destin;
  var date;
  var adults;
  var currency;
  var contryCode;
  var market;
  var adultsParameter = "&adults=" + adults;
  var currencyParameter = "&currency=" + currency;
  var contryCodeParameter = "&countryCode=" + contryCode;
  var marketParameter = "&market=" + market;

  // FUNCTION TO CALL AND USE GEOCODING API 
  function getApiGeocoding() {
      inputCity = $("#searchText").val();
      console.log(inputCity)
       var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + inputCity + "&limit=" + 1 + "&appid=6597030ea98688b08543f5fe62ef6b3e";
    
      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data); //checking for bugs

          lat = data[0].lat;
          console.log(lat); //checking for bugs
          lon = data[0].lon;

          console.log(lon); //checking for bugs
          getApiForecast()
          });
    }

  // FUNCTION TO CALL AND USE FORECAST API 
  function getApiForecast() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=6597030ea98688b08543f5fe62ef6b3e";
    
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
       })
       .then(function (data) {
        console.log(data)
      });
  }

  // TODO: FUNCTIONs TO RETRIEVE DATA FROM DATABASE

  // RETRIEVE ORIGIN

  function retrieveOrigin() {
    console.log("Run en")
  }

  // RETRIEVE DESTINY

  // API DATABASE FUNCTION
  function getApiAirportDatabase() {
    city = "monterrey"
    airportCode;
    airportName;
    airportLocation;

    //Copied directed of Rapidapi in order to have direct access
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '68c95ce937msh0dab4fc8e7da37bp171637jsndb6663d3684e',
        'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
      }
    };
    
    fetch('https://skyscanner44.p.rapidapi.com/autocomplete?query=' + city, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
    .catch(function (err) {
      console.error(err)
    });
  }

  getApiAirportDatabase()

  //API SKYSCANNER FLIGHTS FUNCTION
  function getApiSkyScanner() {
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '68c95ce937msh0dab4fc8e7da37bp171637jsndb6663d3684e',
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    };
    
    fetch(requestUrlSkyScanner, options)
    //it is necessary to add a function that adds the optional parameters only if there is a value in the text input
      .then(function (response) {
        return response.json();
       })
       .then(function (data) {
        console.log(data)
      })
      .catch(function (err) {
        console.error(err)
      });
  }
});