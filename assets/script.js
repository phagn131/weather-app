// save reference to important DOM elements
var searchCityEl = $('#searchCity');
var onClickEl = $('#searchButton');
var searchCityEl = $('#search');
var searchHistoryEl = $('#searchHistory');
var searchContainerEl = $('#searchContainer');
var currentWeatherEl = $('#currentWeather');
var searchCityEl = $('#cityName');
var searchCityEl = $('#weatherInfo');
var tempEl = $('#currentTemp');
var humidityEl = $('#currentHumidity');
var windEl = $('#currentWind');
var futureForecastEl = $('#futureForecast');
var fiveDayEl = $('#fiveDayForecast');
var apiKey = $('8c51fe51c4de669f61dd9394932b043e')

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = '8c51fe51c4de669f61dd9394932b043e';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var currentDateTime = moment();
// .text(currentDateTime.format("MMM Do, YYYY"));

}};