const requestURL = "http://127.0.0.1:5500/final-project/json/towndata.json"
//"https://byui-cit230.github.io/weather/data/towndata.json";
//"https://github.com/dafer171/dafer171.github.io/blob/master/final-project/json/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i = i + 2) {
      let container = document.createElement("div");
      container.setAttribute("class", "container");
      let card1 = document.createElement("section");
      card1.setAttribute("class", "text");
      let card2 = document.createElement("div");
      card2.setAttribute("class", "photos");
      let h2 = document.createElement("h2");
      let motto = document.createElement("p");
      let yearFounded = document.createElement("h3");
      let currentPopulation = document.createElement("h3");
      let averageRainfall = document.createElement("h3");
      let photo = document.createElement("img");

      if (i == 4) {
        continue;
      }

      document.querySelector("div.cards").appendChild(container);

      h2.textContent = towns[i].name;
      card1.appendChild(h2);

      motto.textContent = towns[i].motto;
      card1.appendChild(motto);

      yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
      card1.appendChild(yearFounded);

      currentPopulation.textContent =
        "Population: " + towns[i].currentPopulation;
      card1.appendChild(currentPopulation);

      averageRainfall.textContent =
        "Annual Rain Fall: " + towns[i].averageRainfall;
      card1.appendChild(averageRainfall);

      document.querySelector("div.cards").appendChild(card2);

      photo.setAttribute("src", towns[i].photo);
      card2.appendChild(photo);

      photo.setAttribute("alt", towns[i].name);
      card2.appendChild(photo);

      document.querySelector("div.cards").appendChild(card1);

      container.appendChild(card1);
      container.appendChild(card2);
    }
  });
