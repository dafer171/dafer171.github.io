const requestURL =
  "https://dafer171.github.io/final-project/json/companydata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const company = jsonObject["company"];

    for (let i = 0; i < company.length; i = i + 2) {
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

      h2.textContent = company[i].name;
      card1.appendChild(h2);

      motto.textContent = company[i].motto;
      card1.appendChild(motto);

      yearFounded.textContent = "Year Founded: " + company[i].yearFounded;
      card1.appendChild(yearFounded);

      currentPopulation.textContent =
        "Population: " + company[i].currentPopulation;
      card1.appendChild(currentPopulation);

      averageRainfall.textContent =
        "Annual Rain Fall: " + company[i].averageRainfall;
      card1.appendChild(averageRainfall);

      document.querySelector("div.cards").appendChild(card2);

      photo.setAttribute("src", company[i].photo);
      card2.appendChild(photo);

      photo.setAttribute("alt", company[i].name);
      card2.appendChild(photo);

      document.querySelector("div.cards").appendChild(card1);

      container.appendChild(card1);
      container.appendChild(card2);
    }
  });
