//windchill//
const sotempF = document.querySelector("#so-current-temp");
const sospeed = document.querySelector("#so-wind");

if (sotempF <= 50 && sospeed >= 3.0) {
  let f =
    35.74 +
    0.6215 * sotempF -
    35.75 * sospeed ** 0.16 +
    0.4275 * sotempF * sospeed ** 0.16;
  document.querySelector("#so-windChill").textContent = f.toFixed(0) + "&deg;F";
} else {
  document.querySelector("#so-windChill").textContent = "N/A";
}

//weather api//
const SoApiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=33033af6ab98d426efd2c19223b9729c&units=imperial";
fetch(SoApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("so-current").textContent =
      jsObject.weather[0].description;
    document.getElementById("so-current-temp").textContent = jsObject.main.temp;
    document.getElementById("so-temp-max").textContent = jsObject.main.temp_max;
    document.getElementById("so-humidity").textContent = jsObject.main.humidity;
    document.getElementById("so-wind").textContent = jsObject.wind.speed;
  });
