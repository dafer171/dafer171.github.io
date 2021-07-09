//weather api//
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=33033af6ab98d426efd2c19223b9729c&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById("current").textContent =
      jsObject.weather[0].description;
    document.getElementById("current-temp").textContent = jsObject.main.temp;
    document.getElementById("temp-max").textContent = jsObject.main.temp_max;
    document.getElementById("humidity").textContent = jsObject.main.humidity;
    document.getElementById("wind").textContent = jsObject.wind.speed;
  });
