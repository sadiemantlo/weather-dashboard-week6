var today = dayjs();
var currDayEl = document.getElementById('current-day');
currDayEl.innerText = today.format('MMM D, YYYY');
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
var currTempEl = document.getElementById('current-temp');
var currWindEl = document.getElementById('current-wind');
var currHumidityEl = document.getElementById('current-humidity');
var description1 = document.getElementById('description-1');
var description2 = document.getElementById('description-2');
var description3 = document.getElementById('description-3');
var description4 = document.getElementById('description-4');
var description5 = document.getElementById('description-5');
var currDescEl = document.getElementById('current-description');
// var append = document.querySelector('#append');

submitBttn.addEventListener('click', function (e) {
    e.preventDefault();
    var userInput = document.getElementById('user-input');
    var requestApi = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&appid=cdc2bb6dd9fd528f49af3aaf693512e8&units=imperial';
    fetch(requestApi)
        .then(response => response.json())
        .then(data => { console.log(data);
            var currTemp = data.main.temp;
            var currWind = data.wind.speed;
            var currHumidity = data.main.humidity;
            var currDesc = data.weather[0].description;
            currTempEl.innerText = currTemp + ' °F';
            currHumidityEl.innerText = currHumidity + '%';
            currWindEl.innerText = currWind + ' mph';
            currDescEl.innerText = currDesc;
        })
})


submitBttn.addEventListener('click', function (e) {
    e.preventDefault();
    var userInput = document.getElementById('user-input');
    var requestApi2 = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInput.value + '&appid=cdc2bb6dd9fd528f49af3aaf693512e8&units=imperial&cnt=30';
    fetch(requestApi2)
        .then(response => response.json())
        .then(data => { console.log(data);
            var cityName = data.city.name;
            var temp1 = data.list[0].main.temp;
            var humididty1 = data.list[0].main.humidity;
            var wind1 = data.list[0].wind.speed;
            var desc1 = data.list[0].weather[0].description;
            cityNameEl.innerText = cityName;
            tempEl1.innerText = 'Temp: ' + temp1 + ' °F';
            humidityEl1.innerText = 'Humidity: ' + humididty1 + '%';
            windEl1.innerText = 'Wind: ' + wind1 + ' mph';
            description1.innerText = desc1;

            var temp2 = data.list[4].main.temp;
            var humidity2 = data.list[4].main.humidity;
            var wind2 = data.list[4].wind.speed;
            var desc2 = data.list[4].weather[0].description;
            tempEl2.innerText = 'Temp: ' + temp2 + ' °F';
            humidityEl2.innerText = 'Humidity: ' + humidity2 + '%';
            windEl2.innerText = 'Wind: ' + wind2 + ' mph';
            description2.innerText = desc2;

            var temp3 = data.list[9].main.temp;
            var humidity3 = data.list[9].main.humidity;
            var wind3 = data.list[9].wind.speed;
            var desc3 = data.list[9].weather[0].description;
            tempEl3.innerText = 'Temp: ' + temp3 + ' °F';
            humidityEl3.innerText = 'Humidity: ' + humidity3 + '%';
            windEl3.innerText = 'Wind: ' + wind3 + ' mph';
            description3.innerText = desc3;

            var temp4 = data.list[19].main.temp;
            var humidity4 = data.list[19].main.humidity;
            var wind4 = data.list[19].wind.speed;
            var desc4 = data.list[19].weather[0].description;
            tempEl4.innerText = 'Temp: ' + temp4 + ' °F';
            humidityEl4.innerText = 'Humidity: ' + humidity4 + '%';
            windEl4.innerText = 'Wind: ' + wind4 + ' mph';
            description4.innerText = desc4;

            var temp5 = data.list[25].main.temp;
            var humidity5 = data.list[25].main.humidity;
            var wind5 = data.list[25].wind.speed;
            var desc5 = data.list[25].weather[0].description;
            tempEl5.innerText = 'Temp: ' + temp5 + ' °F';
            humidityEl5.innerText = 'Humidity: ' + humidity5 + '%';
            windEl5.innerText = 'Wind: ' + wind5 + ' mph';
            description5.innerText = desc5;
        })
        // .catch (err => alert('wrong city name'))
})

submitBttn.addEventListener('click', function () {
    var userInput = document.getElementById('user-input');
    var city = userInput.value;
    localStorage.setItem('city', city);
    // var history = json.parse(localStorage.getItem('city')) || [];
    // history.push(city);
})
  
// for (i=0; i<history.length; i++) {
//     var cityLi = history[i];
//     console.log(cityLi)
// }


    // var history = localStorage.getItem('city');
    // var li = document.createElement('li');
    // append.appendChild(li);
    // li.textContent = history




