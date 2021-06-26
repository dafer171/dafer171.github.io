const foreURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=33033af6ab98d426efd2c19223b9729c&units=imperial";
fetch(foreURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    const list = jsObject.list.filter((list) =>
      list.dt_txt.includes("18:00:00")
    );
    //console.log(list);

    document.getElementById("day1").textContent = list[0].main.temp.toFixed(0);
    const imagesrc1 =
      "https://openweathermap.org/img/w/" + list[0].weather[0].icon + ".png";
    document.getElementById("icon1").setAttribute("src", imagesrc1);

    document.getElementById("day2").textContent = list[1].main.temp.toFixed(0);
    const imagesrc2 =
      "https://openweathermap.org/img/w/" + list[1].weather[0].icon + ".png";
    document.getElementById("icon2").setAttribute("src", imagesrc2);

    document.getElementById("day3").textContent = list[2].main.temp.toFixed(0);
    const imagesrc3 =
      "https://openweathermap.org/img/w/" + list[2].weather[0].icon + ".png";
    document.getElementById("icon3").setAttribute("src", imagesrc3);

    document.getElementById("day4").textContent = list[3].main.temp.toFixed(0);
    const imagesrc4 =
      "https://openweathermap.org/img/w/" + list[3].weather[0].icon + ".png";
    document.getElementById("icon4").setAttribute("src", imagesrc4);

    document.getElementById("day5").textContent = list[4].main.temp.toFixed(0);
    const imagesrc5 =
      "https://openweathermap.org/img/w/" + list[4].weather[0].icon + ".png";
    document.getElementById("icon5").setAttribute("src", imagesrc5);
  });
