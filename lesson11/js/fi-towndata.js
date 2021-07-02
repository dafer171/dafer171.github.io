const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    const town = towns[2];
    const events = town.events;
    //console.log(events)

    for (let i = 0; i < events.length; i++) {
      let container = document.createElement("div");
      container.setAttribute("class", "container")
      let card1 = document.createElement("section");
      card1.setAttribute("class", "text")
        
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");

      document.querySelector("div.events").appendChild(container);

      h2.textContent ="Upcoming Events:";
      card1.appendChild(h2);

      p1.textContent = towns[i].events[i];
      card1.appendChild(p1);

      document.querySelector("div.events").appendChild(card1);

      container.appendChild(card1);
    }
    
  });