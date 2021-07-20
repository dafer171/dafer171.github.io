const foreURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=2514301&appid=33033af6ab98d426efd2c19223b9729c&units=imperial";
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
      let image = document.createElement("img");

      h2.textContent = dayofWeek[d.getDay()];
      card.appendChild(h2);

      h3.textContent = list[i].main.temp.toFixed(0);
      card.appendChild(h3);

      image.setAttribute(
        "src",
        "https://openweathermap.org/img/w/" + list[i].weather[0].icon + ".png"
      );
      card.appendChild(image);

      document.querySelector("div.forecast").appendChild(card);
    }
  });
