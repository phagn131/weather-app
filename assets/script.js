// save reference to important DOM elements
var searchFormEl = document.querySelector$('#city-search');
var 
var
var
var
var
var





function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchFormEl= document.querySelector('#city-search').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchFormEl) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchFormEl + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

