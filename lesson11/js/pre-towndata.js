const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i = i + 2) {
      let container = document.createElement("div");
      container.setAttribute("class", "container")
      let card1 = document.createElement("section");
      card1.setAttribute("class", "text")
        
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p")

      if (i == 6) {

      document.querySelector("div.cards").appendChild(container);

      h2.textContent ="Upcoming Events:";
      card1.appendChild(h2);

      p1.textContent = towns[i].events[0];
      card1.appendChild(p1);

      p2.textContent = towns[i].events[1];
      card1.appendChild(p2);

      p3.textContent = towns[i].events[2];
      card1.appendChild(p3);

      document.querySelector("div.cards").appendChild(card1);

      container.appendChild(card1);
    }
    }
  });
