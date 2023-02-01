// api key
// cdc2bb6dd9fd528f49af3aaf693512e8
var apiId = 'cdc2bb6dd9fd528f49af3aaf693512e8'
var submitBttn = document.getElementById('submit-bttn');
var cityNameEl = document.getElementById('city-name');
var tempEl1 = document.getElementById('temp-1');
var windEl1 = document.getElementById('wind-1');
var humidityEl1 = document.getElementById('humidity-1');
var tempEl2 = document.getElementById('temp-2');
var windEl2 = document.getElementById('wind-2');
var humidityEl2 = document.getElementById('humidity-2');
var windEl3= document.getElementById('wind-3');
var tempEl3= document.getElementById('temp-3');
var humidityEl3= document.getElementById('humidity-3');
var windEl4= document.getElementById('wind-4');
var tempEl4= document.getElementById('temp-4');
var humidityEl4= document.getElementById('humidity-4');
var tempEl5= document.getElementById('temp-5');
var windEl5= document.getElementById('wind-5');
var humidityEl5= document.getElementById('humidity-5');




submitBttn.addEventListener('click', function (e) {
    e.preventDefault();
    var userInput = document.getElementById('user-input');
    var requestApi = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInput.value + '&appid=cdc2bb6dd9fd528f49af3aaf693512e8&units=imperial&cnt=30';
    fetch(requestApi)
        .then(response => response.json())
        .then(data => { console.log(data);
            // console.log(data.city.name)
            // console.log(data.list[0].main.temp)
            // console.log(data.list[0].main.humidity)
            // console.log(data.list[0].wind.speed)
            var cityName = data.city.name;
            var temp1 = data.list[0].main.temp;
            var humididty1 = data.list[0].main.humidity;
            var wind1 = data.list[0].wind.speed;
            cityNameEl.innerText = cityName;
            tempEl1.innerText = 'Temp: ' + temp1 + ' °F';
            humidityEl1.innerText = 'Humidity: ' + humididty1 + '%';
            windEl1.innerText = 'Wind: ' + wind1 + ' mph';

            var temp2 = data.list[4].main.temp;
            var humidity2 = data.list[4].main.humidity;
            var wind2 = data.list[4].wind.speed;
            tempEl2.innerText = 'Temp: ' + temp2 + ' °F';
            humidityEl2.innerText = 'Humidity: ' + humidity2 + '%';
            windEl2.innerText = 'Wind: ' + wind2 + ' mph';

            var temp3 = data.list[9].main.temp;
            var humidity3 = data.list[9].main.humidity;
            var wind3 = data.list[9].wind.speed;
            tempEl3.innerText = 'Temp: ' + temp3 + ' °F';
            humidityEl3.innerText = 'Humidity: ' + humidity3 + '%';
            windEl3.innerText = 'Wind: ' + wind3 + ' mph';

            var temp4 = data.list[19].main.temp;
            var humidity4 = data.list[19].main.humidity;
            var wind4 = data.list[19].wind.speed;
            tempEl4.innerText = 'Temp: ' + temp4 + ' °F';
            humidityEl4.innerText = 'Humidity: ' + humidity4 + '%';
            windEl4.innerText = 'Wind: ' + wind4 + ' mph';

            var temp5 = data.list[25].main.temp;
            var humidity5 = data.list[25].main.humidity;
            var wind5 = data.list[25].wind.speed;
            tempEl5.innerText = 'Temp: ' + temp5 + ' °F';
            humidityEl5.innerText = 'Humidity: ' + humidity5 + '%';
            windEl5.innerText = 'Wind: ' + wind5 + ' mph';
        })
        // .catch (err => alert('wrong city name'))
})



