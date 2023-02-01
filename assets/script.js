// api key
// cdc2bb6dd9fd528f49af3aaf693512e8
var apiId = 'cdc2bb6dd9fd528f49af3aaf693512e8'
var submitBttn = document.getElementById('submit-bttn');
var cityNameEl = document.getElementById('city-name');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');




submitBttn.addEventListener('click', function (e) {
    e.preventDefault();
    var userInput = document.getElementById('user-input');
    var requestApi = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInput.value + '&appid=cdc2bb6dd9fd528f49af3aaf693512e8&units=imperial&cnt=5';
    fetch(requestApi)
        .then(response => response.json())
        .then(data => { console.log(data);
            // console.log(data.city.name)
            // console.log(data.list[0].main.temp)
            // console.log(data.list[0].main.humidity)
            // console.log(data.list[0].wind.speed)
            var cityName = data.city.name;
            var temp = data.list[0].main.temp;
            var humididty = data.list[0].main.humidity;
            var wind = data.list[0].wind.speed;
            cityNameEl.innerText = cityName;
            tempEl.innerText = 'Temp: ' + temp + ' °F';
            humidityEl.innerText = 'Humidity: ' + humididty + '%';
            windEl.innerText = 'Wind: ' + wind + ' mph'
        })
        // .catch (err => alert('wrong city name'))
})



