const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i = i + 2) {
      let card = document.createElement("section");
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let motto = document.createElement("p");
      let yearFounded = document.createElement("h4");
      let currentPopulation = document.createElement("h4");
      let averageRainfall = document.createElement("h4");
      let photo = document.createElement("img");

      if (i == 4) {
        continue;
      }

      h2.textContent = towns[i].name;
      card.appendChild(h2);

      motto.textContent = towns[i].motto;
      card.appendChild(motto);

      yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
      card.appendChild(yearFounded);

      currentPopulation.textContent =
        "Population: " + towns[i].currentPopulation;
      card.appendChild(currentPopulation);

      averageRainfall.textContent =
        "Annual Rain Fall: " + towns[i].averageRainfall;
      card.appendChild(averageRainfall);

      photo.setAttribute("src", towns[i].photo);
      card.appendChild(photo);

      photo.setAttribute("alt", towns[i].name);
      card.appendChild(photo);

      document.querySelector("div.cards").appendChild(card);
    }
  });
