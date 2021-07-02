//windchill//
const fitempF = document.querySelector("#fi-current-temp");
const fispeed = document.querySelector("#fi-swind");

if (fitempF <= 50 && fispeed >= 3.0) {
  let f =
    35.74 +
    0.6215 * fitempF -
    35.75 * fispeed ** 0.16 +
    0.4275 * fitempF * fispeed ** 0.16;
  document.querySelector("#fi-windChill").textContent = f.toFixed(0) + "&deg;F";
} else {
  document.querySelector("#fi-windChill").textContent = "N/A";
}

//weather api//
const FiApiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=33033af6ab98d426efd2c19223b9729c&units=imperial";
fetch(FiApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("fi-current").textContent =
      jsObject.weather[0].description;
    document.getElementById("fi-current-temp").textContent = jsObject.main.temp;
    document.getElementById("fi-temp-max").textContent = jsObject.main.temp_max;
    document.getElementById("fi-humidity").textContent = jsObject.main.humidity;
    document.getElementById("fi-wind").textContent = jsObject.wind.speed;
  });
