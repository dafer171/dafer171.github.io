const foreURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=33033af6ab98d426efd2c19223b9729c&units=imperial";
fetch(foreURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const list = jsObject.list.filter((list) =>
      list.dt_txt.includes("18:00:00")
    );
    //console.log(list);

    for (let i = 0; i < list.length; i++) {
      let d = new Date(list[i].dt_txt);
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      //let place = document.createElement("h3")
      let image = document.createElement("img");

      h2.textContent = dayofWeek[d.getDay()];
      card.appendChild(h2);
      //console.log(h2);

      //h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      //card.appendChild(h2);

      h3.textContent = list[i].main.temp.toFixed(0);
      card.appendChild(h3);

      //place.textContent =
      //"Place of birth: " +
      //prophets[i].birthplace;
      //card.appendChild(place);

      image.setAttribute(
        "src",
        "https://openweathermap.org/img/w/" + list[i].weather[0].icon + ".png"
      );
      card.appendChild(image);

      //image.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname +  " - " + prophets[i].order);
      //card.appendChild(image);

      document.querySelector("div.forecast").appendChild(card);
    }
    //console.table(list);
  });

/*
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

  */
