$(function () {

  // TODO: FUNCTION TO CALL AND USE GEOCODING API 
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

  // TODO: FUNCTION TO CALL AND USE FORECAST API 
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

  getApiGeocoding()

  
});