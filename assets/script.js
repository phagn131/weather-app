// save reference to important DOM elements
var CityEl = $('#searchCity');
var onClickEl = $('#searchButton');
var searchCityEl = $('#search');
var searchHistoryEl = $('#searchHistory');
var searchContainerEl = $('#searchContainer');
var currentWeatherEl = $('#currentWeather');
// var searchCityEl = $('#cityName');
// var searchCityEl = $('#weatherInfo');
var tempEl = $('#currentTemp');
var humidityEl = $('#currentHumidity');
var windEl = $('#currentWind');
var futureForecastEl = $('#futureForecast');
var fiveDayEl = $('#fiveDayForecast');
var apiKey = '8c51fe51c4de669f61dd9394932b043e'

function fiveDayForecast(cityData) {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityData + "&units=imperial&appid=" + apiKey;

  // add lat and long

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      $("#day1").html("city: " + data.city.name)
      $("#day1Temp").html("temp: " + data.list[1].main.temp + " F")
      $("#day1Wind").html("wind: " + data.list[1].wind.speed + " MPH")
      $("#day1Humidity").html("humidity: " + data.list[1].main.humidity)

      $("#day2").html("city: " + data.city.name)
      $("#day2Temp").html("temp: " + data.list[2].main.temp + " F")
      $("#day2Wind").html("wind: " + data.list[2].wind.speed + " MPH")
      $("#day2Humidity").html("humidity: " + data.list[2].main.humidity)

      $("#day3").html("city: " + data.city.name)
      $("#day3Temp").html("temp: " + data.list[3].main.temp + " F")
      $("#day3Wind").html("wind: " + data.list[3].wind.speed + " MPH")
      $("#day3Humidity").html("humidity: " + data.list[3].main.humidity)

      $("#day4").html("city: " + data.city.name)
      $("#day4Temp").html("temp: " + data.list[4].main.temp + " F")
      $("#day4Wind").html("wind: " + data.list[4].wind.speed + " MPH")
      $("#day4Humidity").html("humidity: " + data.list[4].main.humidity)

      $("#day5").html("city: " + data.city.name)
      $("#day5Temp").html("temp: " + data.list[5].main.temp + " F")
      $("#day5Wind").html("wind: " + data.list[5].wind.speed + " MPH")
      $("#day5Humidity").html("humidity: " + data.list[5].main.humidity)

   
      
    })
};

function getCityWeather(cityData) {
  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityData + "&units=imperial&appid=" + apiKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $("#cityName").html("Current weather for: " + data.name)
      $("#currentTemp").html("temp: " + data.main.temp + " F")
      $("#currentHumidity").html("humidity: " + data.main.humidity + " %")
      $("#currentWind").html("wind: " + data.wind.speed + " MPH")
      fiveDayForecast(cityData)
    })
};

onClickEl.click(function (event) {

  var city = CityEl.val()
  console.log(city);
  getCityWeather(city);
  localStorage.setItem(city, CityEl.name);
}) 


// return repsonse

//tempEl.text

// Add all elements

// commit to local storage for search history button
//localStorage.setItem();
    // Render cards with 5-day forecast after retreiving data

