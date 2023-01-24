$(function () {
  // VARIABLES FOR FUNCTION TO RETRIEVE DATA FROM DATABASE
  var originInput;
  var destinyInput;
  var dateInput;

  var airportLocationOrigin;
  var airportLocationDestiny;
  
  var parentO = $("#airportsOrigin");
  var parentD = $("#airportsDestiny");

  // Buttons
  var searchOrigin = $("#searchOrigin");
  var searchDestiny = $("#searchDestiny")
  var searchFlightsBtn = $("#searchFlights")

  // VARIABLES FOR SKYSCANNER DATABASE
  var city;
  var airportCodeOrigin;
  var airportCodeDestiny;

  var airportNameOrigin;
  var airportLocationOrigin;

  // VARIABLES FOR SKYSCANNER FLIGHT SEARCH
  var requestUrlSkyScanner; 
  var origin;
  var destin;
  var date;
  var adults;
  var currency;
  var contryCode;
  var market;

  //Posibility for the future to add more parameters
  var currencyParameter = "&currency=" + currency;
  var contryCodeParameter = "&countryCode=" + contryCode;
  var marketParameter = "&market=" + market;

  // FUNCTION TO CALL AND USE GEOCODING API 
  function getApiGeocoding() {
      inputCity = airportLocationDestiny;
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

        var today = dayjs();

        var mainCard = $("#TemperatureCard");
        var symbol = $(mainCard).children("img");
        var temp = $(mainCard).children("#temp");
        var wind = $(mainCard).children("#wind");
        var humidity = $(mainCard).children("#humidity");

        var icon = data.list[0].weather[0].icon;
        var kelvin = (data.list[0].main.temp);
        var celsius = kelvin - 273.15;
        var mph = (data.list[0].main.temp);
        var hum = (data.list[0].wind.speed);

        todayTitle.text(cityName + today.format(' MMM D, YYYY'));
        symbol.attr("src", "https://openweathermap.org/img/w/" + icon + ".png");
        temp.text("Temperature: " + celsius.toFixed(2) + " °C");
        wind.text("Temperature: " + mph.toFixed(2) + " MPH");
        humidity.text("Temperature: " + hum.toFixed(2) + " %");


      });
  }

  // READY: FUNCTIONS TO RETRIEVE DATA FROM DATABASE

  //READY: RETRIEVE ORIGIN FUNCTIONS
  // RETRIEVE ORIGIN

  function retrieveOrigin() {
    console.log("Function is working")
    originInput = $("#origin").val();

    console.log(originInput)
    
    if (originInput === '') {
      console.log("input has no value")
    } else {
      city = originInput;
      console.log(city);
      getApiAirportDatabaseOrigin();
    }
    
  }

  // API DATABASE FUNCTION
  //This function is duplicated but have different effects on the DOM
  function getApiAirportDatabaseOrigin() {

    //Copied directed of Rapidapi in order to have direct access
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2c738f2f30msh441249a4c0cc60dp196898jsnd16018881f7f',
        'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
      }
    };
    
    fetch('https://skyscanner44.p.rapidapi.com/autocomplete?query=' + city, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        console.log(name)

        var airportOptions = $("<button>")
        airportOptions.text(name);
        airportOptions.addClass("button")
        airportOptions.attr("id", i);

        //SELECT ORIGIN
        airportOptions.on("click", function() {
          id = $(this).attr("id");

          airportCodeOrigin = data[id].iata_code;
          airportLocationOrigin = data[id].city;
          console.log("origin airport code: " + airportCodeOrigin);
          console.log("origin airport location: " + airportLocationOrigin);

          var nameO = $(this).text();
          var newInput = $("#origin").val(nameO);
          console.log(newInput)

          parentO.empty();
        })

        parentO.append(airportOptions);
      }

    })
    .catch(function (err) {
      console.error(err)
    });
  }

  //READY: RETRIEVE DESTINY FUNCTIONS
  // RETRIEVE DESTINY
  function retrieveDestiny() {
    console.log("Function is working")
    destinyInput = $("#destiny").val();

    console.log(destinyInput)
    
    if (destinyInput === '') {
      console.log("input has no value")
    } else {
      city = destinyInput;
      console.log(city);
      getApiAirportDatabaseDestiny();
    }
  }

  function getApiAirportDatabaseDestiny() {

    //Copied directed of Rapidapi in order to have direct access
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2c738f2f30msh441249a4c0cc60dp196898jsnd16018881f7f',
        'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
      }
    };
    
    fetch('https://skyscanner44.p.rapidapi.com/autocomplete?query=' + city, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        console.log(name)

        var airportOptions = $("<button>")
        airportOptions.text(name);
        airportOptions.addClass("button")
        airportOptions.attr("id", i);

        airportOptions.on("click", function() {
          id = $(this).attr("id");

          airportCodeDestiny = data[id].iata_code;
          airportLocationDestiny = data[id].city;
          console.log("destiny airport code: " + airportCodeDestiny);
          console.log("destiny airport location: " + airportLocationDestiny);

          var nameO = $(this).text();
          var newInput = $("#destiny").val(nameO);
          console.log(newInput)

          parentD.empty();
        })

        parentD.append(airportOptions);
      }

    })
    .catch(function (err) {
      console.error(err)
    });
  }

  // //TODO: DATE SELECTOR

  // function retrieveDate() {
  //   dateInput = $("#date").val();
  //   console.log("function worked, date input: " + dateInput);
  // }

  //API SKYSCANNER FLIGHTS FUNCTION
  function getApiSkyScanner() {
    console.log("API function is called")
    console.log(requestUrlSkyScanner)

    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2c738f2f30msh441249a4c0cc60dp196898jsnd16018881f7f',
        'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
      }
    };
    
    fetch(requestUrlSkyScanner, options)
    //it is necessary to add a function that adds the optional parameters only if there is a value in the text input
      .then(function (response) {
        return response.json();
       })
       .then(function (data) {
        console.log(data);
        var skyscanner = data;
        console.log(skyscanner);

        // FUNCTION TO DISPLAY FLIGHTS
        for (var i = 0; i < 3; i++) {
          var infoFlight = skyscanner.itineraries.buckets[0].items[i];
          console.log(infoFlight);

          //Arrival Time
          var arrival = infoFlight.legs[0].arrival;
          var arrivalHour = arrival.substring(arrival.length-8);
          var arrivalHourFinal = arrivalHour.substr(0, 5)
          console.log(arrivalHourFinal);

          //Departure Time
          var departure = infoFlight.legs[0].departure;
          var departureHour = departure.substring(departure.length-8);
          var departureHourFinal = departureHour.substr(0, 5)
          console.log(departureHourFinal);

          //Price
          var price = infoFlight.price.formatted;
          console.log(price);

          //Stops / Escalas
          var stops = infoFlight.legs[0].stopCount;
          console.log(stops);

          //Duration in minutes
          var duration = infoFlight.legs[0].durationInMinutes;
          console.log(duration);

          //Smallest stops / viaje con menor paradas
          var smallestStops = infoFlight.legs[0].isSmallestStops;
          if (smallestStops === true){
            console.log(smallestStops);
          }

        }

      })
      .catch(function (err) {
        console.error(err)
      });
  }

  function searchFlights() {
    console.log("Function is working");
    origin = airportCodeOrigin;
    destin = airportCodeDestiny;

    dateInput = $("#date").val();
    date = dateInput;

    adultsInput = $("#adults").val();
    adults = adultsInput;

    console.log(origin);
    console.log(destin);
    console.log(date);

    requestUrlSkyScanner = "https://skyscanner44.p.rapidapi.com/search?adults=" + adults + "&origin=" + origin + "&destination=" + destin + "&departureDate=" + date;

    if (destinyInput === "" || originInput === "" || dateInput === "") {
      console.log("input has no value")
    } else {
      getApiGeocoding();
      getApiSkyScanner();
    }
  }

  //EVENT LISTENERS THAT TRIGGER FUNCTIONALITY
  searchOrigin.on("click", retrieveOrigin);
  searchDestiny.on("click", retrieveDestiny);
  searchFlightsBtn.on("click", searchFlights);
});