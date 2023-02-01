// api key
// cdc2bb6dd9fd528f49af3aaf693512e8
var apiId = 'cdc2bb6dd9fd528f49af3aaf693512e8'
var submitBttn = document.getElementById('submit-bttn');
// var userInput = document.getElementById('user-input');
var cityNameEl = document.getElementById('city-name');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');


// submitBttn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(userInput.value);
//     getWeather();
// })

// fetching weather api
// var city = userInput.value;
// var requestApi = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInput.value + '&appid=cdc2bb6dd9fd528f49af3aaf693512e8';
// var getWeather = function() {
//     fetch(requestApi)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)},
//         console.log(city.value)
//         // showWeather())
// )};
submitBttn.addEventListener('click', function (e) {
    e.preventDefault();
    var userInput = document.getElementById('user-input');
    var requestApi = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInput.value + '&appid=cdc2bb6dd9fd528f49af3aaf693512e8';
    fetch(requestApi)
        .then(response => response.json())
        .then(data => {
            console.log(userInput.value),
            console.log(data)
        })
        .catch (err => alert('wrong city name'))
})
// function showWeather(data) {
//     var cityName = data;
//     var temp = data.weather[0];
//     var humididty = data.main;
//     cityNameEl.innerText = 'Weather in ' + cityName;
//     tempEl.innerText = 'Temp: ' + temp;
//     humidityEl.innerText = 'Humidity: ' + humididty;
// }